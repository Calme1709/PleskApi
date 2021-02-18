import { Parser } from "@wikipathways/cxml";
import Schema from "../schema/pleskApi";

/**
 * Parse XML to Json.
 *
 * @param data - The XML string to parse to JSON.
 *
 * @returns The parsed JSON object.
 */
export default <ReturnType>(data: string): Promise<ReturnType> => {
	const parser = new Parser();

	//@ts-expect-error
	return parser.parse<Schema.document>(data, Schema.document);
};