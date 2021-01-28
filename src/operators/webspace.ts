import Operator from "./base";
import { IFilter } from ".";
import PleskApi from "..";

type DomainFilterType = IFilter<"external-id" | "guid" | "id" | "name" | "owner-external-id" | "owner-guid" | "owner-id" | "owner-login">;

/**
 * The operator for managing webspaces in plesk.
 */
export default class Webspace extends Operator<"webspace"> {
	/**
	 * Initialize the webspace API.
	 *
	 * @param pleskApi - The plesk API instance this operator is associated with.
	 */
	public constructor(pleskApi: PleskApi) {
		super("webspace", pleskApi);
	}

	/**
	 * Retrieve information about a webspace or a group of webspaces.
	 *
	 * @param filter - The filter for what webspaces to get information about.
	 *
	 * @returns The value of the property.
	 */
	public async get(filter: DomainFilterType) {
		return this.xmlApiRequest(
			"get",
			[
				this.createDataNode("filter", this.createDataNode(filter.type, filter.value)),
				this.createDataNode("dataset", [
					this.createDataNode("gen_info", ""),
					this.createDataNode("hosting", ""),
					this.createDataNode("hosting-basic", ""),
					this.createDataNode("limits", ""),
					this.createDataNode("stat", ""),
					this.createDataNode("prefs", ""),
					this.createDataNode("disk_usage", ""),
					this.createDataNode("performance", ""),
					this.createDataNode("subscriptions", ""),
					this.createDataNode("permissions", ""),
					this.createDataNode("plan-items", ""),
					this.createDataNode("php-settings", ""),
					this.createDataNode("resource-usage", ""),
					this.createDataNode("mail", ""),
					this.createDataNode("aps-filter", ""),
					this.createDataNode("packages", "")
				])
			]
		);
	}
}