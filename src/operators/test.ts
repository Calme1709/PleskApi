import Operator from "./base";
import PleskApi from "..";

/**
 * The operator for testing connection to the remote Plesk Instance.
 * This class does not represent an operator on the Plesk side of this API, and is only to be used internally.
 */
export default class Test extends Operator<"server"> {
	/**
	 * Initialize the secret key API.
	 *
	 * @param pleskApi - The plesk API instance this operator is associated with.
	 */
	public constructor(pleskApi: PleskApi) {
		super("server", pleskApi);
	}

	/**
	 * Test if the connection to the remote Plesk instance is valid, and if the credentials are also.
	 *
	 * @returns A promise which resolves to void if the connection is valid, and rejects with an appropriate error if not.
	 */
	public async testConnection() {
		return new Promise<string | null>(resolve => {
			this.xmlApiRequest("get", this.createDataNode("stat", ""))
				.then(() => resolve(null))
				.catch((err: string) => {
					resolve(err);
				});
		});
	}
}