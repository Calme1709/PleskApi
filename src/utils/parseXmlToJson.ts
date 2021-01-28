import { JsonOptions, toJson } from "xml2json";

/**
 * Extended custom XML parsing, fixes a couple illogical parsing quirks from the returned values of the Plesk API.
 *
 * @param object - The parsed object returned by xml2json.
 * @param options - The options that describe how to parse this XML.
 *
 * @returns The parsed object.
 */
export const extendedXmlParsing = (object: unknown): unknown => {
	/**
	 * Test if an object is a property array. A property array looks like this: [ {name: "name", value: "value" } ].
	 *
	 * @param obj - The object to test.
	 *
	 * @returns Whether the passed object is a property array.
	 */
	const isPropertyArray = (obj: unknown): obj is Array<{ name: string; value: unknown }> => {
		//eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, jsdoc/require-jsdoc, @typescript-eslint/no-explicit-any
		const isPropertyElement = (el: any) => Object.keys(el).length === 2 && typeof el.name === "string" && el.value !== undefined;

		return Array.isArray(obj) && obj.every(isPropertyElement);
	};

	if(typeof object === "object") {
		if(Array.isArray(object)) {
			if(isPropertyArray(object)) {
				return Object.fromEntries(object.map(({ name, value }) => [ name, value ]));
			}

			return object.map(el => extendedXmlParsing(el));
		}

		return Object.fromEntries(Object.entries(object as Record<string, unknown>).map(([ key, value ]) => [ key, extendedXmlParsing(value) ]));
	}

	return object;
};

/**
 * Parse XML to Json.
 *
 * @param data - The XML string to parse to JSON.
 *
 * @returns The parsed JSON object.
 */
export default <ReturnType>(data: string): ReturnType => {
	const options = { object: true, coerce: true, trim: true, sanitize: true } as JsonOptions;

	return extendedXmlParsing(toJson(data, options)) as ReturnType;
};