import Operator from "./base";
import PleskApi from "..";
import { IFilter } from ".";

export interface ICertificateContent {
	csr: string;
	pvt: string;
	cert?: string;
	ca?: string;
}

export interface IOrganizationalInfo {
	companyName: string;
	companyDepartment?: string;
	country: string;
	region: string;
	city: string;
}

/**
 * The operator for managing SSL certificates.
 */
export default class Certificate extends Operator<"certificate"> {
	/**
	 * Initialize the certificate operator.
	 *
	 * @param pleskApi - The plesk API instance this operator is associated with.
	 */
	public constructor(pleskApi: PleskApi) {
		super("certificate", pleskApi);
	}

	/**
	 * The install operation is used to install an SSL/TLS certificate to the server certificate repository or to a specified
	 * subscription repository. Please note that this operation only installs a certificate to a repository, it does not enable
	 * SSL/TLS support for sites, therefore, it does not make sites available via the HTTPS protocol.
	 *
	 * @param name - The name under which the certificate will be known in the repository and in Plesk.
	 * @param content - Contains all data constituting the certificate.
	 * @param content.csr - Specifies the certificate CSR (certificate signing request).
	 * @param content.pvt - Specifies the certificate private key.
	 * @param content.cert - Contains the certificate body.
	 * @param content.ca - Contains the certificate authority body.
	 * @param webspace - Specifies the subscription to which the certificate is installed. If this is undefined the certificate
	 *	will be installed to the server repository.
	 * @param ip_address - Specifies IP address to which the certificate will be assigned when it is installed to server repository.
	 *	This assignment means that sites hosted on this IP address, in case SSL/TLS support is enabled for them, will display this
	 *	certificate when accessing the sites.
	 */
	public async install<WebspaceValue extends string | undefined>(
		name: string,
		{ csr, pvt, cert, ca }: ICertificateContent,
		webspace?: WebspaceValue,
		//eslint-disable-next-line @typescript-eslint/naming-convention
		ip_address?: WebspaceValue extends undefined ? string : undefined
	) {
		const webSpaceNode = webspace === undefined ? this.createDataNode("admin", "") : this.createDataNode("webspace", webspace as string);

		await this.xmlApiRequest<{ key: string }, "install">(
			"install",
			[
				this.createDataNode("name", name),
				webSpaceNode,
				this.createDataNode("content", [
					this.createDataNode("csr", csr),
					this.createDataNode("pvt", pvt),
					this.createOptionalDataNode("cert", cert),
					this.createOptionalDataNode("ca", ca)
				]),
				this.createOptionalDataNode("ip_address", ip_address)
			]
		);
	}

	/**
	 * Generate a certificate on the server.
	 *
	 * @param name - This specifies the name of the site with which the certificate should be associated.
	 * @param email - This specifies your email address that will be used for generating CSR component of the certificate .
	 * @param organizationalInfo - This specifies information about the company that this certificate is associated with.
	 * @param organizationalInfo.companyName - This specifies the name of the company with which the certificate will be associated.
	 * @param organizationalInfo.companyDepartment - This specifies the company department with which the certificate will be associated.
	 * @param organizationalInfo.country - This specifies the country where your business operates. It should be in the two-letter
	 *	upper-case nomination in accordance with ISO 3166.
	 * @param organizationalInfo.region - This specifies region that the company is based in.
	 * @param organizationalInfo.city - This specifies city the company is based in.
	 * @param bits - This defines the size of the certificate in bits, should be either 1024 or 2048.
	 *
	 * @returns The CSR and the private key for the new certificate.
	 */
	public async generate(
		name: string,
		email: string,
		organizationalInfo: IOrganizationalInfo,
		bits: number
	): Promise<{ csr: string; pvt?: string }> {
		return this.xmlApiRequest(
			"generate",
			this.createDataNode("info", [
				this.createDataNode("bits", bits.toString()),
				this.createDataNode("country", organizationalInfo.country),
				this.createDataNode("state", organizationalInfo.region),
				this.createDataNode("location", organizationalInfo.city),
				this.createDataNode("company", organizationalInfo.companyName),
				this.createOptionalDataNode("dept", organizationalInfo.companyDepartment),
				this.createDataNode("email", email),
				this.createDataNode("name", name)
			])
		);
	}

	/**
	 * Delete a specified certificate from the server.
	 *
	 * @param name - This specifies the name of certificate that should be deleted.
	 * @param webspace - This specifies from which subscription storage the certificate is deleted. If this is undefined the certificate
	 *	will be removed from the server repository.
	 */
	public async remove(name: string, webspace?: string) {
		const webSpaceNode = webspace === undefined ? this.createDataNode("admin", "") : this.createDataNode("webspace", webspace);

		await this.xmlApiRequest(
			"delete",
			[
				webSpaceNode,
				this.createDataNode(
					"filter",
					this.createDataNode("name", name)
				)
			]
		);
	}

	/**
	 * Get a list of certificates installed on the remote Plesk instance.
	 *
	 * @param filter - The filter for which domain to get certificates for. If this is undefined the admin repository will be returned.
	 *
	 * @returns A list of certificates.
	 */
	//eslint-disable-next-line @typescript-eslint/naming-convention
	public async get_pool(filter?: IFilter<"domain-guid" | "domain-id" | "domain-name">) {
		interface IResponse {
			certificates: {
				certificate: Array<{ name: string }> | { name: string };
			};
		}

		const result = (await this.xmlApiRequest<IResponse, string>(
			"get-pool",
			[
				filter === undefined
					? this.createDataNode("admin", "")
					: this.createDataNode(
						"filter",
						[
							this.createOptionalDataNode(filter.type, filter.value.toString())
						]
					)
			]
		)).certificates.certificate;

		if(Array.isArray(result)) {
			return result.map(el => el.name);
		}

		return [ result.name ];
	}
}