import fetch from "node-fetch";
import PleskApi from "..";

type CommandExecutionResponse = { code: 0; stderr: ""; stdout: string } | { code: 1; stderr: string; stdout: "" };

/**
 * The class that all API operators derive from.
 */
export default class Operator {
	private readonly pleskApi: PleskApi;

	/**
	 * Create an operator.
	 *
	 * @param pleskApi - The API instance this operator is associated with.
	 */
	public constructor(pleskApi: PleskApi) {
		this.pleskApi = pleskApi;
	}

	/**
	 * Execute a command on the remote plesk instance.
	 *
	 * @param command - The command, executed through the Plesk CLI.
	 * @param params - The parameters to the command.
	 *
	 * @returns - A promise which resolves to the response from the API.
	 */
	protected async execute(command: string, params?: string[]) {
		const response = await this.request<CommandExecutionResponse>(`/cli/${command}/call`, "POST", { params });

		if(response.code !== 0) {
			throw this.handleError(response.stderr);
		}

		return response.stdout;
	}

	/**
	 * Make an API request.
	 *
	 * @param path - The API path to make the request to.
	 * @param httpMethod - The HTTP method to use for this requst.
	 * @param body - The POST body to include in the request.
	 *
	 * @returns - The response from the API.
	 */
	protected request<ResponseType>(path: string, httpMethod: "GET" | "POST" = "POST", body?: Record<string, any>) {
		const bodyContent = JSON.stringify(body);

		return new Promise<ResponseType>((resolve, reject) => {
			fetch(
				`https://${this.pleskApi.hostname}:8443/api/v2/${path}`,
				{
					headers: {
						"Content-Type": "application/json",
						"Content-Length": bodyContent.length.toString(),
						...this.pleskApi.credentials
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