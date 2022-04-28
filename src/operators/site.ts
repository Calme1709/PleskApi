import PleskApi from "..";

/**
 * To see the descriptions for these options go to: https://docs.plesk.com/en-US/obsidian/cli-linux/using-command-line-utilities/site-sites.67067/
 */
interface IUpdateOptions {
	/**
	 * Rename the domain.
	 */
	new_name: string;

	/**
	 * Enable or disable DNS zone.
	 */
	dns: boolean;

	/**
	 * Enable or disable the WWW prefix.
	 */
	www: boolean;

	/**
	 * Enable or disable hosting.
	 */
	hosting: boolean;

	/**
	 * Set the type of hosting.
	 * 
	 * `phys` - Physical hosting.
	 * 
	 * `std` - Standard Forwarding hosting.
	 * 
	 * `frm` - Frame Forwarding hosting.
	 */
	hst_type: "phys" | "std" | "frm";

	/**
	 * Set the target URL for standard forwarding and frame forwarding hosting.
	 */
	target_url: string;

	/**
	 * Set the IP address for the mail service of this domain.

	 */
	"mail-service-ip": string;

	/**
	 * Set the HTTP response status code that should be used for standing forwarding.
	 */
	http_code: 301 | 302;

	/**
	 * Turn on search engine friendly HTTP 301 redirection.
	 * 
	 * `none` - Turn off redirection
	 * 
	 * `non-www` - Redirect from www.domain.com to domain.com
	 * 
	 * `www` - Redirect from domain.com to www.domain.com
	 */
	"seo-redirect": "none" | "non-www" | "www";

	/**
	 * Set the website home directory, this is relative to the subscription root.
	 */
	"www-root": string;

	//TODO: Maybe this isn't an option.
	/**
	 * Set the subscription that this site is a part of.
	 */
	"webspace-name": string;

	/**
	 * 
	 */
	"parent-domain-name": string;

	/**
	 * Enables/Disables shell access for FTP user, and sets the OS system shell for FTP user access.
	 */
	shell: string | false;

	/**
	 * Limits FTP User hard disk quota.
	 * 
	 * Unlimited if set to 0.
	 * 
	 * A number without a letter is interpreted as the number of bytes.
	 */
	hard_quota: `${number}${"K"|"M"|"G"|""}`;

	/**
	 * Enable/Disable SSI support.
	 */
	ssi: boolean;

	/**
	 * Enable/Disable PHP support.
	 */
	php: boolean;

	/**
	 * Set what PHP handler is used by this site.
	 */
	php_handler_id: "module" | "cgi" | "fastcgi";

	/**
	 * Enable/Disable safe mode for PHP support.
	 */
	php_safe_mode: boolean;

	/**
	 * Enable/Disable CGI support.
	 */
	cgi: boolean;

	/**
	 * Set the location of the cgi-bin directory.
	 */
	"cgi-mode": "webspace" | "www-root";

	/**
	 * Enable/Disable Perl support.
	 */
	perl: boolean;
	
	/**
	 * Enable/Disable asp support.
	 */
	asp: boolean;
	
	/**
	 * Enable/Disable python support.
	 */
	python: boolean;
	
	/**
	 * Enable/Disable fastcgi support.
	 */
	fastcgi: boolean;
	
	/**
	 * Enable/Disable ssl support.
	 */
	ssl: boolean;
	
	/**
	 * Enable/Disable SEO-safe redirects from HTTP to HTTPS.
	 */
	"ssl-redirect": boolean;

	/**
	 * Enable/Disable webstat support.
	 */
	webstat: "none" | "awstats" | "webalizer";

	/**
	 * Enable/Disable access to web statistics data through password-protected directory /plesk-stat
	 */
	"webstat-protdir-access": boolean;

	/**
	 * Set the SSL/TLS certificate used by this site.
	 */
	"certificate-name": string;

	/**
	 * Enable/Disable custom error messages.
	 */
	err_docs: boolean;

	/**
	 * Enable/Disable log rotation.
	 */
	"log-rotate": boolean;

	/**
	 * Enable/Disable log rotation by current log file size.
	 */
	"log-bysize": `${number}${"B" | "K" | "M" | "G" | "T"}`;

	/**
	 * Enable/Disable log rotation by time.
	 */
	"log-bytime": "daily" | "weekly" | "monthly";

	 /**
	 * Enable/Disable file compression of logs.
	 */
	"log-compress": boolean;

	/**
	 * Enable/Disable the mail service.
	 */
	mail_service: boolean;

	/**
	 * Set the IP address of the service node providing the mail service.
	 */
	mail_service_node_ip: string;

	/**
	 * Enable/Disable the mailing list service.
	 */
	maillist_service: boolean;

	/**
	 * Allow/Prohibit publishing site with presence builder.
	 */
	"publish-sb-site": boolean;

	/**
	 * Specifies the IP address to be assigned to the subscription after the subscription owner change.	
	 */
	"map_ip": string;

	/**
	 * Specifies a description of the subscription to be displayed in Plesk.
	 */
	description: string;

	/**
	 * Specifies a description of the subscription to be displayed to the admin in Plesk.
	 */
	"admin-description": string;

	/**
	 * Specifies a description of the subscription to be displayed to a reseller in Plesk.
	 */
	"reseller-description": string;

	/**
	 * Set the maximum number of outgoing messages from a specified site (per hour).
	 * Set to -1 for unlimited or "default" to adhere to server-wide settings.
	 */
	"outgoing-messages-domain-limit": number | "default";
}

/**
 * The operator for managing sites.
 */
export default class Site {
	private readonly pleskApi: PleskApi;

	/**
	 * Create a new Site operator.
	 *
	 * @param pleskApi - The plesk API instance this operator is associated with.
	 */
	public constructor(pleskApi: PleskApi) {
		this.pleskApi = pleskApi;
	}

	/**
	 * Create a new site in a specified subscription.
	 * @param site - The domain name of the new site.
	 * @param webspace - The subscription to create the site in.
	 */
	public async create(site: string, webspace: string) {
		this.pleskApi.execute("site", [
			"--create",
			site,
			"--webspace",
			webspace
		]);

		//TODO: Implement the rest of the options.
	}
	
	/**
	 * Enable a site.
	 * @param site - The site to enable.
	 */
	public async on(site: string) {
		this.pleskApi.execute("site", [
			"--on",
			site
		]);
	}

	/**
	 * Suspend a site.
	 * @param site - The site to suspend.
	 */
	public async suspend(site: string) {
		this.pleskApi.execute("site", [
			"--suspend",
			site
		]);
	}

	/**
	 * Disable a site.
	 * @param site - The site to disable.
	 */
	public async off(site: string) {
		this.pleskApi.execute("site", [
			"--off",
			site
		]);
	}

	public async update(site: string, options: Partial<IUpdateOptions>) {
		this.pleskApi.execute("site", [
			"--update",
			site,
			...Object.entries(options).reduce((acc: string[], [ key, value ]) => [...acc,  `-${key}`, value.toString()], [])
		]);
	}

	//TODO: move, remove, info, list, update-php-settings, show-php-settings
}