import {
	SecretKey,
	Test,
	Certificate
} from "./operators";

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
	 * @returns Whether we are connected.
	 */
	public async testConnection() {
		return new Test(this).testConnection();
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
}