import https from "https";
import { Buffer } from "buffer";
import { parseXmlToJson } from "@utils";
import PleskApi from "..";

interface IApiErrorResponse {
	packet: {
		system: {
			errtext: string;
			errcode: number;
			status: "error";
		};
	};
}

interface IApiSuccessResponse<Operator extends string, Operation extends string, ResponseType> {
	packet: {
		[a in Operator]: {
			[b in Operation]: {
				result: ResponseType;
			};
		};
	};
}

type ApiResponse<Operator extends string, Operation extends string, ResponseType> =
	IApiErrorResponse |
	IApiSuccessResponse<Operator, Operation, ResponseType>;

/**
 * The class that all API operators derive from.
 */
export default class Operator<OperatorName extends string> {
	private readonly operatorName: OperatorName;

	private readonly pleskApi: PleskApi;

	/**
	 * Create an operator.
	 *
	 * @param operatorName - The name of the operator.
	 * @param pleskApi - The API instance this operator is associated with.
	 */
	public constructor(operatorName: OperatorName, pleskApi: PleskApi) {
		this.pleskApi = pleskApi;

		this.operatorName = operatorName;
	}

	/**
	 * Make an XML API request of the specified operation with the passed data.
	 *
	 * @param operation - The operation to execute.
	 * @param dataNodes - The data to send with the XML API request.
	 *
	 * @returns A promise that resolves to the API Response.
	 */
	//TODO: Make this protected again
	public xmlApiRequest<ResponseType, OperationName extends string>(
		operation: OperationName,
		dataNodes: string[] | string | undefined
	) {
		return new Promise<ResponseType>((resolve, reject) => {
			const requestBody = `<?xml version="1.0" encoding="utf-8"?>${this.generatePacket(operation, dataNodes)}`;

			const req = https.request({
				method: "POST",
				host: this.pleskApi.hostname,
				port: 8443,
				path: "/enterprise/control/agent.php",
				headers: {
					"Content-Type": "text/xml",
					"Content-Length": Buffer.byteLength(requestBody),
					...this.pleskApi.credentials
				}
			}, response => {
				let data = "";

				response.on("data", chunk => {
					data += chunk;
				});

				response.on("end", async () => {
					const result = await parseXmlToJson<ApiResponse<OperatorName, OperationName, ResponseType>>(data);

					//TODO: Custom parsing of Arrays (admin-domain-list, property, etc)
					if("system" in result.packet) {
						reject(this.handleError(result.packet.system.errtext));
					} else {
						resolve(result.packet[this.operatorName][operation].result);
					}
				});
			});

			req.on("error", err => {
				reject(this.handleError(err.message));
			});

			req.write(requestBody);
			req.end();
		});
	}

	/**
	 * Generate a node if the data is defined, else return an empty string.
	 *
	 * @param node - The name of the node.
	 * @param nodeData - The data of the node.
	 *
	 * @returns The generated node or empty string.
	 */
	protected createOptionalDataNode(node: string, nodeData?: Array<string | undefined> | string) {
		if(nodeData !== undefined && nodeData !== "") {
			return this.createDataNode(node, nodeData as string);
		}

		if(Array.isArray(nodeData) && nodeData.some(data => !(data === undefined || data === ""))) {
			return this.createDataNode(node, nodeData as string[]);
		}

		return "";
	}

	/**
	 * Generate a data node.
	 *
	 * @param node - The name of the node.
	 * @param nodeData - The data of the node.
	 *
	 * @returns The generated node.
	 */
	protected createDataNode(node: string, nodeData: string[] | string) {
		if(typeof nodeData === "string") {
			return `
				<${node}>${nodeData}</${node}>
			`;
		}

		return `
			<${node}>${nodeData.join("")}</${node}>
		`;
	}

	/**
	 * Generate an XML packet for an API request given the structure and data of the request.
	 *
	 * @param operation - The operation to perform, for example create.
	 * @param dataNodes - The data to send with the request.
	 *
	 * @returns The XML packet to send to the server.
	 */
	private generatePacket(operation: string, dataNodes?: string[] | string) {
		let dataNodeString: string;

		switch (typeof dataNodes) {
			case "undefined":
				dataNodeString = "";
				break;
			case "string":
				dataNodeString = dataNodes;
				break;
			default:
				dataNodeString = dataNodes.join("");
		}

		return `
			<packet>
				<${this.operatorName}>
					<${operation}>
						${dataNodeString}
					</${operation}>
				</${this.operatorName}>
			</packet>
		`.replace(/[\t]/g, "");
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