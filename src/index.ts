import fetch from "node-fetch";
import {
	SecretKey,
	Test,
	Certificate
} from "./operators";
import { Buffer } from "buffer";

const operators = {
	secret_key: SecretKey,
	certificate: Certificate
};

type OperatorName = keyof typeof operators;
type Operator = InstanceType<(typeof operators)[OperatorName]>;

export interface IPleskCredentials {
	login: string;
	password: string;
}

/**
 * A JavaScript API for a remote Plesk instance's XML API.
 */
export default class PleskApi {
	public readonly hostname: string;

	public credentials: { "X-API-Key": string } | { Authorization: string };

	private readonly operatorCache: { [key in OperatorName]?: Operator } = {};

	/**
	 * Create a new instance of the JavaScript API and connect with an API key.
	 *
	 * @param hostname - The hostname of the external Plesk server.
	 * @param apiKey - The API key to use for requests.
	 */
	public constructor(hostname: string, apiKey: string);

	/**
	 * Create a new instance of the JavaScript API and connect with a login and password.
	 *
	 * @param hostname - The hostname of the external Plesk server.
	 * @param credentials - The credentials to use for requests.
	 */
	//eslint-disable-next-line @typescript-eslint/unified-signatures
	public constructor(hostname: string, credentials: IPleskCredentials);

	//eslint-disable-next-line jsdoc/require-jsdoc
	public constructor(hostname: string, apiKeyOrCredentials: IPleskCredentials | string) {
		this.hostname = hostname;

		this.credentials = typeof apiKeyOrCredentials === "string"
			? { "X-API-Key": apiKeyOrCredentials }
			: { Authorization: `Basic ${Buffer.from(`${apiKeyOrCredentials.login}:${apiKeyOrCredentials.password}`).toString("base64")}` };
	}

	/**
	 * The secret key operator.
	 *
	 * @returns The secret key operator.
	 */
	//eslint-disable-next-line @typescript-eslint/naming-convention
	public get secret_key() {
		return this.getOperator("secret_key");
	}

	/**
	 * The certificate operator.
	 *
	 * @returns The certificate operator.
	 */
	public get certificate() {
		return this.getOperator("certificate");
	}

	/**
	 * Test the connection to a remote plesk instance.
	 *
	 * @returns Whether the .
	 */
	public async testConnection() {
		return new Test(this).testConnection();
	}

	/**
	 * Execute a command on the remote plesk instance. This is only intended for internal use, use this only if you know what you are doing.
	 *
	 * @param command - The command, executed through the Plesk CLI.
	 * @param params - The parameters to the command.
	 *
	 * @returns - A promise which resolves to the response from the API.
	 */
	 public async execute(command: string, params?: string[]) {
		type CommandExecutionResponse = { code: 0; stderr: ""; stdout: string } | { code: 1; stderr: string; stdout: "" };

		const response = await this.request<CommandExecutionResponse>(`/cli/${command}/call`, "POST", { params });

		if(response.code !== 0) {
			throw this.handleError(response.stderr);
		}

		return response.stdout;
	}

	/**
	 * Make an API request. This is only intended for internal use, use this only if you know what you are doing.
	 *
	 * @param path - The API path to make the request to.
	 * @param httpMethod - The HTTP method to use for this requst.
	 * @param body - The POST body to include in the request.
	 *
	 * @returns - The response from the API.
	 */
	 public request<ResponseType>(path: string, httpMethod: "GET" | "POST" = "POST", body?: Record<string, any>) {
		const bodyContent = JSON.stringify(body);

		return new Promise<ResponseType>((resolve, reject) => {
			fetch(
				`https://${this.hostname}:8443/api/v2/${path}`,
				{
					headers: {
						"Content-Type": "application/json",
						"Content-Length": bodyContent.length.toString(),
						...this.credentials
					},
					method: httpMethod,
					body: bodyContent
				}
			).then(async res => {
				resolve(await res.json());
			}).catch((reason: string) => {
				reject(this.handleError(`Error making API call: ${reason}`));
			});
		});
	}

	/**
	 * Get the operator with the supplied name.
	 *
	 * @param operatorName - The name of the operator.
	 *
	 * @returns The operator.
	 */
	private getOperator<T extends OperatorName>(operatorName: T): InstanceType<(typeof operators)[T]> {
		const existingOperator = this.operatorCache[operatorName];

		if(existingOperator !== undefined) {
			return existingOperator as InstanceType<(typeof operators)[T]>;
		}

		const operator = new (operators[operatorName])(this);

		this.operatorCache[operatorName] = operator;

		return operator as InstanceType<(typeof operators)[T]>;
	}

	/**
	 * Log the error if required and create an error object.
	 *
	 * @param error - The error message.
	 *
	 * @returns The error to throw.
	 */
	 private handleError(error: string) {
		if(process.env.NODE_ENV === "staging") {
			console.error(error);
		}

		return new Error(error);
	}
}