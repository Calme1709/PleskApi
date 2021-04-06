import Operator from "./base";
import PleskApi from "..";

interface ISessionInfo {
	id: string;
	type: string;
	ipAddress: string;
	login: string;
	"login-time":
	string;
	idle: string;
}


/**
 * The operator for managing Plesk Control Panel sessions.
 */
export default class Session extends Operator<"session"> {
	/**
	 * Initialize the session operator.
	 *
	 * @param pleskApi - The plesk API instance this operator is associated with.
	 */
	public constructor(pleskApi: PleskApi) {
		super("session", pleskApi);
	}

	/**
	 * Get information about the current Plesk Control Panel sessions on the remote Plesk instance.
	 *
	 * @returns Information about all of the currently active sessions.
	 */
	public async get() {
		interface IResponse {
			session: ISessionInfo | ISessionInfo[] | undefined;
		}

		const { session } = await this.xmlApiRequest<IResponse, string>("get", "");

		if(session === undefined) {
			return [];
		}

		return Array.isArray(session) ? session : [ session ];
	}

	/**
	 * Terminate an ongoing Plesk Control Panel session.
	 *
	 * @param sessionId - The ID of the session to terminate.
	 *
	 * @returns Whether or not the termination was successful.
	 */
	public async terminate(sessionId: string) {
		interface IResponse {
			status: "error" | "ok";
		}

		const result = await this.xmlApiRequest<IResponse, string>("terminate", this.createDataNode("session-id", sessionId));

		return result.status === "ok";
	}
}