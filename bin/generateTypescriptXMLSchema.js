#! /usr/bin/env node
/*eslint-disable @typescript-eslint/no-require-imports */
/*eslint-disable @typescript-eslint/no-var-requires */
/*eslint-disable node/shebang */

const fs = require("fs").promises;
const path = require("path");
const { default: generateSchema } = require("@calme1709/cxsd");

(async () => {
	const schemaDirectory = path.resolve(__dirname, "../pleskAPISchema/");

	const tmpdir = await fs.mkdtemp("/tmp/plesk_api_schema");

	//Set targetNamespace in each of the schema files and copy them to a temp dir
	await Promise.all((await fs.readdir(schemaDirectory)).map(async schemaFile => {
		const fileContents = await fs.readFile(path.resolve(schemaDirectory, schemaFile), "utf-8");

		const newFileContents = fileContents.replace(/(<xs:schema.+)>/, "$1 targetNamespace=\"pleskApi\">");

		await fs.writeFile(path.resolve(tmpdir, schemaFile), newFileContents);
	}));

	await generateSchema(path.resolve(tmpdir, "agent_output.xsd"), {
		outTs: "src/schema",
		outJs: "src/schema"
	});
})().catch(e => console.error(e));