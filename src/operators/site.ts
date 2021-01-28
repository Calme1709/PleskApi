import Operator from "./base";
import PleskApi from "..";
import { IFilter } from ".";

export enum SiteStatus {
	Active = 0,
	BackupRestore = 4,
	Suspended = 8,
	DisabledByAdmin = 16,
	DisabledByReseller = 32,
	DisabledByCustomer = 256
}

//eslint-disable-next-line max-len
type SiteFilterType = "guid" | "id" | "name" | "parent-guid" | "parent-id" | "parent-name" | "parent-site-guid" | "parent-site-id" | "parent-site-name";

type SiteFilter = IFilter<SiteFilterType, { id: number; "parent-id": number; "parent-side-id": number }>;

interface ISiteInfo {
	"filter-id": number | string;
	"id": number;

	data: {
		gen_info: {
			cr_date: string;
			name: string;
			"ascii-name": string;
			status: SiteStatus;
			real_size: number;
			dns_ip_address?: string;
			htype: "frm_fwd" | "std_fwd" | "vrt_hst";
			guid: string;
			"webspace-guid": string;
			"sb-site-uuid"?: string;
			"webspace-id": number;
			description?: string;
			"turn-off-action"?: "disable" | "suspend";
		};

		hosting: {
			vrt_hst: {
				property: {
					ssl?: boolean;
					"ssl-redirect"?: boolean;
					iis_app_ppol?: boolean;
					php_handler_id?: "cgi-5.3" | "cgi-5.4" | "cgi-5" | "cgi" | "fastcgi-5.3" | "fastcgi-5.4" | "fastcgi-5" | "fastcgi" | "isapi-5" | "module";
					ssi_html?: boolean;
					managed_runtime_version?: string;
					www_root?: string;
					cgi_mode?: "webspace" | "www-root";
					memory_limit?: string;
					max_execution_time?: string;
					max_input_time?: string;
					post_max_size?: string;
					upload_max_filesize?: string;
					safe_mode?: string;
					safe_mode_include_dir?: string;
					safe_mode_exec_dir?: string;
					include_path?: string;
					"session.save_path"?: string;
					"mail.force_extra_parameters"?: string;
					register_globals?: string;
					open_basedir?: string;
					error_reporting?: string;
					display_errors?: string;
					log_errors?: string;
					allow_url_fopen?: string;
					file_uploads?: string;
					short_open_tag?: string;
					magic_quotes_gpc?: string;
					"additional-directives"?: string;
					asp?: boolean;
					asp_dot_net?: boolean;
					ssi?: boolean;
					php?: boolean;
					cgi?: boolean;
					perl?: boolean;
					python?: boolean;
					fastcgi?: boolean;
					webstat?: "awstats" | "none" | "webalizer";
					errdocs?: boolean;
					write_modify?: boolean;
					web_deply?: boolean;
					webstat_protected?: boolean;
					"waf-rule-engine"?: "detection-only" | "off" | "on";
					"waf-rule-set"?: "crs" | "tortix";
					nginxServePhp?: boolean;
					"web-server-expires"?: number;
					"web-server-expires-static-only"?: boolean;

					//TODO: Find actual type for this.
					"web-server-headers"?: any;
					"nginx-proxy-mode"?: boolean;
					"nginx-cache-enabled"?: boolean;
					"nginx-cache-size"?: number;
					"nginx-cache-timeout"?: number;
					"nginx-cache-key"?: string;
					"nginx-cache-cookies"?: string;
					"nginx-cache-bypass-locations"?: string;
					"nginx-cache-bypass-header-nocache"?: boolean;
					"nginx-cache-bypass-header-auth"?: boolean;
					"nginx-cache-bypass-get-nocache"?: boolean;
					"nginx-cache-use-stale-5xx"?: boolean;
					"nginx-cache-use-stale-4xx"?: boolean;
					"nginx-cache-use-stale-updating"?: boolean;
					certificate_name?: string;
				};
			};
		};
	};
}

/**
 * The operator for managing sites (domains).
 */
export default class Session extends Operator<"site"> {
	/**
	 * Initialize the site operator.
	 *
	 * @param pleskApi - The plesk API instance this operator is associated with.
	 */
	public constructor(pleskApi: PleskApi) {
		super("site", pleskApi);
	}

	/**
	 * Get information about sites that match a filter.
	 *
	 * @param filter - The filter for which sites to get information about.
	 *
	 * @returns Information about the sites.
	 */
	public async get(filter: SiteFilter) {
		const result = await this.xmlApiRequest("get", [
			this.createDataNode(
				"filter",
				this.createDataNode(filter.type, filter.value.toString())
			),
			this.createDataNode(
				"dataset",
				[
					this.createDataNode("gen_info", ""),
					this.createDataNode("hosting", ""),
					this.createDataNode("stat", ""),
					this.createDataNode("prefs", ""),
					this.createDataNode("disk_usage", ""),
					this.createDataNode("performance", "")
				]
			)
		]);

		return result as ISiteInfo;
	}
}