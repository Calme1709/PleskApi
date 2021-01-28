import {
	Operator,
	SecretKey,
	Server,
	Test,
	Certificate,
	Webspace,
	Session,
	Site
} from "./operators";

type OperatorName = "certificate" | "secret_key" | "server" | "session" | "site" | "webspace";

export interface IPleskCredentials {
	login: string;
	password: string;
}

/**
 * A JavaScript API for a remote Plesk instance's XML API.
 */
export default class PleskApi {
	public readonly hostname: string;

	public credentials: { HTTP_AUTH_LOGIN: string; HTTP_AUTH_PASSWD: string } | { KEY: string };

	private readonly operatorCache: { [key in OperatorName]?: Operator<string> } = {};

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
			? { KEY: apiKeyOrCredentials }
			: { HTTP_AUTH_LOGIN: apiKeyOrCredentials.login, HTTP_AUTH_PASSWD: apiKeyOrCredentials.password };
	}

	/**
	 * The secret key operator.
	 *
	 * @returns The secret key operator.
	 */
	//eslint-disable-next-line @typescript-eslint/naming-convention
	public get secret_key() {
		return this.getOperator("secret_key") as unknown as SecretKey;
	}

	/**
	 * The certificate operator.
	 *
	 * @returns The certificate operator.
	 */
	public get certificate() {
		return this.getOperator("certificate") as unknown as Certificate;
	}

	/**
	 * The server operator.
	 *
	 * @returns The server operator.
	 */
	public get server() {
		return this.getOperator("server") as unknown as Server;
	}

	/**
	 * The webspace operator.
	 *
	 * @returns The webspace operator.
	 */
	public get webspace() {
		return this.getOperator("webspace") as unknown as Webspace;
	}

	/**
	 * The session operator.
	 *
	 * @returns The session operator.
	 */
	public get session() {
		return this.getOperator("session") as unknown as Session;
	}

	/**
	 * The site operator.
	 *
	 * @returns The site operator.
	 */
	public get site() {
		return this.getOperator("site") as unknown as Site;
	}

	/**
	 * Test the connection to a remote plesk instance.
	 */
	public async testConnection() {
		const test = new Test(this);

		const error = await test.testConnection();

		if(error !== null) {
			throw new Error(error);
		}
	}

	/**
	 * Get the operator with the supplied name.
	 *
	 * @param operatorName - The name of the operator.
	 *
	 * @returns The operator.
	 */
	private getOperator(operatorName: OperatorName) {
		if(operatorName in this.operatorCache) {
			return this.operatorCache[operatorName];
		}

		const operators = {
			secret_key: SecretKey,
			certificate: Certificate,
			server: Server,
			webspace: Webspace,
			session: Session,
			site: Site
		};

		const operator = new operators[operatorName](this);

		this.operatorCache[operatorName] = operator;

		return operator;
	}
}