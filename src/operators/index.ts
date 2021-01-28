export { default as Operator } from "./base";
export { default as SecretKey } from "./secret_key";
export { default as Server } from "./server";
export { default as Test } from "./test";
export { default as Certificate } from "./certificate";
export { default as Webspace } from "./webspace";
export { default as Session } from "./session";
export { default as Site } from "./site";

export interface IFilter<FilterType extends string, CustomFilterTypes extends Record<string, any> = Record<FilterType, any>> {
	type: FilterType;
	value: FilterType extends keyof CustomFilterTypes ? CustomFilterTypes[FilterType] : string;
}