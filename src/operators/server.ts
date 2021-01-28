import Operator from "./base";
import { Buffer } from "buffer";
import PleskApi from "..";

interface ISessionData {
	user_ip: string;
	c_email?: string;
	c_phone?: string;
	navigation?: string;
	logo_ing_url?: string;
	logo_ing_ref?: string;
	locale_id?: string;
	skin?: string;
	domain?: string;
	back_url: string;
}

interface IGetResponse {
	key: {
		property: [
			{ name: "plesk_key_id"; value: string },
			{ name: "product_version"; value: number }
		];
	};

	"admin-domain-list": {
		domain: Array<{
			id: number;
			name: string;
			"ascii-name": string;
			type: "alias" | "domain" | "subdomain";
			main: boolean;
			guid: string;
			"external-id": string;
			"parent-id": number;
			"domain-id": number;
		}>;
	};

	//TODO: add typings for the other parts of the response.
	session_setup: {
		login_timeout: number;
	};
}

/**
 * The operator for managing the Plesk server.
 */
export default class Server extends Operator<"server"> {
	/**
	 * Initialize the server API.
	 *
	 * @param pleskApi - The plesk API instance this operator is associated with.
	 */
	public constructor(pleskApi: PleskApi) {
		super("server", pleskApi);
	}

	/**
	 * Retrieve information about Plesk server and its configuration.
	 *
	 * @returns The value of the property.
	 */
	public async get() {
		const response = await this.xmlApiRequest<IGetResponse, "get">(
			"get",
			[
				this.createDataNode("key", ""),
				this.createDataNode("gen_info", ""),
				this.createDataNode("components", ""),
				this.createDataNode("stat", ""),
				this.createDataNode("admin", ""),
				this.createDataNode("interfaces", ""),
				this.createDataNode("services_state", ""),
				this.createDataNode("prefs", ""),
				this.createDataNode("shells", ""),
				this.createDataNode("session_setup", ""),
				this.createDataNode("site-isolation-config", ""),
				this.createDataNode("updates", ""),
				this.createDataNode("admin-domain-list", ""),
				this.createDataNode("certificates", "")
			]
		);

		//TODO: Have more appropriate (generic way) of "arrayifying" properties of responses.
		return {
			...response,
			"admin-domain-list": {
				domain: Array.isArray(response["admin-domain-list"].domain) ? response["admin-domain-list"].domain : [ response["admin-domain-list"].domain ]
			}
		};
	}

	/**
	 * Create a user session token which can be used for automatic logging in to Plesk.
	 *
	 * @param login - This specifies the log in of the user that this session will be associated with.
	 *
	 * @param data - The data about the session.
	 *
	 * @param data.user_ip - The IP address of the user that you specify in the login element. This must be the IP of the machine
	 *  that will use this session.
	 *
	 * @param data.c_email - The user’s email address. If a user has no email in Plesk and this node is also not set, then the user
	 *  will be prompted to enter the email address when opening the specified URL. The specified email is saved permanently in Plesk.
	 *
	 * @param data.c_phone - The user’s phone number. If a user has no phone number in Plesk and this node is also not set, then the
	 *  user will be prompted to enter the phone number when opening the specified URL. The specified phone number is saved permanently
	 *  in Plesk.
	 *
	 * @param data.navigation - The navigation bar object that will replace the Plesk's navigation bar - that is the left frame menu
	 *  in the Server Administration Panel (the Service Provider view). The navigation object is a Base64-encoded serialized array.
	 *
	 * @param data.logo_ing_url - The URL of the image to be used as a logo at the top of the screen.
	 *
	 * @param data.logo_ing_ref - The URL of the page to which a click on the logo leads.
	 *
	 * @param data.locale_id - The language code of the locale to be used in Plesk for the specified user, for example, en-US. The
	 *  specified language code is saved permanently in Plesk in interface settings of this user.
	 *
	 * @param data.skin - The name of the Plesk interface theme to be used for the specified user.
	 *
	 * @param data.domain - The domain name that the specified user should access.
	 *
	 * @param data.back_url - The URL from which the user came to Plesk. If specified, the user will be redirected to this URL if
	 *  logging in fails (for example, due to session idle time expiring or IP address not matching).
	 *
	 * @returns The session id, can be used as a cookie.
	 */
	//eslint-disable-next-line @typescript-eslint/naming-convention
	public async create_session(
		login: string,
		{
			//eslint-disable-next-line @typescript-eslint/naming-convention
			user_ip,
			//eslint-disable-next-line @typescript-eslint/naming-convention
			c_email,
			//eslint-disable-next-line @typescript-eslint/naming-convention
			c_phone,
			navigation,
			//eslint-disable-next-line @typescript-eslint/naming-convention
			logo_ing_url,
			//eslint-disable-next-line @typescript-eslint/naming-convention
			logo_ing_ref,
			//eslint-disable-next-line @typescript-eslint/naming-convention
			locale_id,
			skin,
			domain,
			//eslint-disable-next-line @typescript-eslint/naming-convention
			back_url
		}: ISessionData
	) {
		return (await this.xmlApiRequest<{ id: string }, "create_session">("create_session", [
			this.createDataNode("login", login),
			this.createDataNode("data", [
				this.createDataNode("user_ip", Buffer.from(user_ip).toString("base64")),
				this.createDataNode("source_server", Buffer.from(back_url).toString("base64")),
				this.createOptionalDataNode("c_email", Buffer.from(c_email ?? "").toString("base64")),
				this.createOptionalDataNode("c_phone", Buffer.from(c_phone ?? "").toString("base64")),
				this.createOptionalDataNode("navigation", Buffer.from(navigation ?? "").toString("base64")),
				this.createOptionalDataNode("logo_ing_url", Buffer.from(logo_ing_url ?? "").toString("base64")),
				this.createOptionalDataNode("logo_ing_ref", Buffer.from(logo_ing_ref ?? "").toString("base64")),
				this.createOptionalDataNode("locale_id", Buffer.from(locale_id ?? "").toString("base64")),
				this.createOptionalDataNode("skin", Buffer.from(skin ?? "").toString("base64")),
				this.createOptionalDataNode("domain", Buffer.from(domain ?? "").toString("base64"))
			])
		])).id;
	}
}