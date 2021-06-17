import PleskApi from "..";

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
export default class Certificate {
	private readonly pleskApi: PleskApi;

	/**
	 * Create a new Certificate operator.
	 *
	 * @param pleskApi - The plesk API instance this operator is associated with.
	 */
	public constructor(pleskApi: PleskApi) {
		this.pleskApi = pleskApi;
	}

	/**
	 * Creates an SSL/TLS certificate in a specified certificate repository (administrator’s or domain’s repository)
	 * by using a private key file and a corresponding certificate file.
	 *
	 * @param name - The name of the certificate.
	 * @param csr - The path on the remote instance to the CSR file.
	 * @param key - The path on the remote instance to the Private Key file.
	 * @param cert - The path on the remote instance to the Certificate file.
	 * @param cacert - The path on the remote instance to the CA Certificate file.
	 * @param domain - The domain associated with the repository this certificate should be created in.
	 * If this is undefined it will be created in the admin repository.
	 */
	//eslint-disable-next-line max-params
	public async create(
		name: string,
		csr: string,
		key: string,
		cert: string,
		cacert: string,
		domain?: string
	) {
		const response = await this.pleskApi.execute("certificate", [
			"-c",
			name,
			"-csr-file",
			csr,
			"-key-file",
			key,
			"-cert-file",
			cert,
			"-cacert-file",
			cacert,
			...this.getRepositoryArgumentFromDomain(domain)
		]);

		//TODO: Parse and return the response
	}

	/**
	 * Remove a specified certificate from the server.
	 *
	 * @param name - This specifies the name of certificate that should be deleted.
	 * @param domain - The domain associated with the repository this certificate should be removed from. If this is undefined it will be removed from the admin repository.
	 */
	public async remove(name: string, domain?: string) {
		await this.pleskApi.execute("certificate", [
			"-r",
			name,
			...this.getRepositoryArgumentFromDomain(domain)
		]);
	}

	/**
	 * Get a list of certificates from a specified repository on the remote server.
	 *
	 * @param domain - The domain associated with the repository that should be listed. If this is undefined the admin repository will be listed.
	 *
	 * @returns A list of certificates.
	 */
	//eslint-disable-next-line @typescript-eslint/naming-convention
	public async list(domain?: string) {
		const response = await this.pleskApi.execute("certificate", [
			"--list",
			...this.getRepositoryArgumentFromDomain(domain)
		]);

		const responseLines = response.split("\n");

		//Remove the components list
		return responseLines
			.slice(1, responseLines.length - 1)
			.map(line => line.slice(17));
	}

	//TODO: Implement --update and --assign-cert

	/**
	 * Get the repository argument (-domain foo or -admin) from the passed domain name.
	 *
	 * @param domain - The domain.
	 * @returns - The repository arguments.
	 */
	private getRepositoryArgumentFromDomain(domain?: string) {
		return domain === undefined
			? [ "-admin" ]
			: [ "-domain", domain ];
	}
}