import PleskApi from "..";

interface IServerInfo {
	"platform": string;
	"hostname": string;
	"guid": string;
	"panel_version": string;
	"panel_revision": string;
	"panel_build_date": string;
	"panel_update_version": string;
	"extension_version": string;
	"extension_release": string;
}

/**
 * The operator for testing connection to the remote Plesk Instance.
 * This class does not represent an operator on the Plesk side of this API, and is only to be used internally.
 */
export default class Test {
	private readonly pleskApi: PleskApi;

	/**
	 * Create a new Test operator.
	 *
	 * @param pleskApi - The plesk API instance this operator is associated with.
	 */
	 public constructor(pleskApi: PleskApi) {
		this.pleskApi = pleskApi;
	}

	/**
	 * Test if the connection to the remote Plesk instance is valid, and if the credentials are also.
	 *
	 * @returns A promise which resolves to void if the connection is valid, and rejects with an appropriate error if not.
	 */
	public async testConnection() {
		return new Promise<boolean>(resolve => {
			this.pleskApi.request<IServerInfo>("/server", "GET", {})
				.then(res => {
					resolve(Boolean(res.platform));
				})
				.catch(() => resolve(false));
		});
	}
}