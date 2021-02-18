import * as Primitive from "./xml-primitives";

// Source files:
// file:///tmp/plesk_api_schema0n9Gk6/agent_output.xsd
// file:///tmp/plesk_api_schema0n9Gk6/aps.xsd
// file:///tmp/plesk_api_schema0n9Gk6/certificate_output.xsd
// file:///tmp/plesk_api_schema0n9Gk6/client_output.xsd
// file:///tmp/plesk_api_schema0n9Gk6/common.xsd
// file:///tmp/plesk_api_schema0n9Gk6/database_output.xsd
// file:///tmp/plesk_api_schema0n9Gk6/descriptor.xsd
// file:///tmp/plesk_api_schema0n9Gk6/dns_output.xsd
// file:///tmp/plesk_api_schema0n9Gk6/domain_addon_template.xsd
// file:///tmp/plesk_api_schema0n9Gk6/domain_list.xsd
// file:///tmp/plesk_api_schema0n9Gk6/domain_template.xsd
// file:///tmp/plesk_api_schema0n9Gk6/domainalias_output.xsd
// file:///tmp/plesk_api_schema0n9Gk6/event_log_output.xsd
// file:///tmp/plesk_api_schema0n9Gk6/event_log_types.xsd
// file:///tmp/plesk_api_schema0n9Gk6/extension.xsd
// file:///tmp/plesk_api_schema0n9Gk6/ftpuser.xsd
// file:///tmp/plesk_api_schema0n9Gk6/ip_output.xsd
// file:///tmp/plesk_api_schema0n9Gk6/locale.xsd
// file:///tmp/plesk_api_schema0n9Gk6/logrotation.xsd
// file:///tmp/plesk_api_schema0n9Gk6/mail_output.xsd
// file:///tmp/plesk_api_schema0n9Gk6/php_handler.xsd
// file:///tmp/plesk_api_schema0n9Gk6/plesk_client.xsd
// file:///tmp/plesk_api_schema0n9Gk6/plesk_common.xsd
// file:///tmp/plesk_api_schema0n9Gk6/plesk_custom_button.xsd
// file:///tmp/plesk_api_schema0n9Gk6/plesk_db.xsd
// file:///tmp/plesk_api_schema0n9Gk6/plesk_dns.xsd
// file:///tmp/plesk_api_schema0n9Gk6/plesk_domain.xsd
// file:///tmp/plesk_api_schema0n9Gk6/plesk_domainalias.xsd
// file:///tmp/plesk_api_schema0n9Gk6/plesk_mailname.xsd
// file:///tmp/plesk_api_schema0n9Gk6/plesk_secretkeys.xsd
// file:///tmp/plesk_api_schema0n9Gk6/plesk_server.xsd
// file:///tmp/plesk_api_schema0n9Gk6/protected_dir.xsd
// file:///tmp/plesk_api_schema0n9Gk6/reseller.xsd
// file:///tmp/plesk_api_schema0n9Gk6/reseller_template.xsd
// file:///tmp/plesk_api_schema0n9Gk6/secret_key_output.xsd
// file:///tmp/plesk_api_schema0n9Gk6/server_output.xsd
// file:///tmp/plesk_api_schema0n9Gk6/session.xsd
// file:///tmp/plesk_api_schema0n9Gk6/site.xsd
// file:///tmp/plesk_api_schema0n9Gk6/subdomain.xsd
// file:///tmp/plesk_api_schema0n9Gk6/ui_output.xsd
// file:///tmp/plesk_api_schema0n9Gk6/upload_output.xsd
// file:///tmp/plesk_api_schema0n9Gk6/virtdir.xsd
// file:///tmp/plesk_api_schema0n9Gk6/webspace.xsd


interface BaseType {
	_exists: boolean;
	_namespace: string;
}
interface _aclResultType extends _resultType {
	host?: string[];
}
export interface aclResultType extends _aclResultType { constructor: { new(): aclResultType }; }
export var aclResultType: { new(): aclResultType };

interface _AdditionalKeyPropertyType extends BaseType {
	name: string;
	value: string;
}
export interface AdditionalKeyPropertyType extends _AdditionalKeyPropertyType { constructor: { new(): AdditionalKeyPropertyType }; }
export var AdditionalKeyPropertyType: { new(): AdditionalKeyPropertyType };

interface _additionalKeyType extends BaseType {
	active: boolean;
	content: string;
	license_update_date?: number;
	lim_date?: number;
	name: string;
	number: string;
	property?: AdditionalKeyPropertyType[];
}
export interface additionalKeyType extends _additionalKeyType { constructor: { new(): additionalKeyType }; }
export var additionalKeyType: { new(): additionalKeyType };

interface _AdminAliasAddType extends BaseType {
	data: AdminAliasInfoType;
}
export interface AdminAliasAddType extends _AdminAliasAddType { constructor: { new(): AdminAliasAddType }; }
export var AdminAliasAddType: { new(): AdminAliasAddType };

interface _AdminAliasDelType extends BaseType {
	filter: AdminAliasFilterType;
}
export interface AdminAliasDelType extends _AdminAliasDelType { constructor: { new(): AdminAliasDelType }; }
export var AdminAliasDelType: { new(): AdminAliasDelType };

interface _AdminAliasFilterType extends BaseType {
	login: string[];
}
export interface AdminAliasFilterType extends _AdminAliasFilterType { constructor: { new(): AdminAliasFilterType }; }
export var AdminAliasFilterType: { new(): AdminAliasFilterType };

interface _AdminAliasInfoType extends BaseType {}
export interface AdminAliasInfoType extends _AdminAliasInfoType { constructor: { new(): AdminAliasInfoType }; }
export var AdminAliasInfoType: { new(): AdminAliasInfoType };

interface _AdminAliasSetType extends BaseType {
	data: AdminAliasInfoType;
	filter: AdminAliasFilterType;
}
export interface AdminAliasSetType extends _AdminAliasSetType { constructor: { new(): AdminAliasSetType }; }
export var AdminAliasSetType: { new(): AdminAliasSetType };

/** Admin info */
interface _adminType extends BaseType {
	admin_address?: string;
	admin_city?: string;
	admin_cname?: string;
	admin_country?: string;
	admin_email?: string;
	admin_fax?: string;
	admin_locale?: string;
	admin_multiple_sessions?: boolean;
	admin_pcode?: string;
	admin_phone?: string;
	admin_pname?: string;
	admin_state?: string;
	/** SSO global login */
	globalLogin?: string;
	send_announce?: boolean;
	/** SSO UID */
	uid?: string;
}
export interface adminType extends _adminType { constructor: { new(): adminType }; }
export var adminType: { new(): adminType };

interface _aeParamsType extends BaseType {
	host: string;
	password: string;
	user: string;
}
export interface aeParamsType extends _aeParamsType { constructor: { new(): aeParamsType }; }
export var aeParamsType: { new(): aeParamsType };

interface _aliasInfoType extends _Settings {
	asciiName?: string;
	name: string;
	siteId: number;
}
export interface aliasInfoType extends _aliasInfoType { constructor: { new(): aliasInfoType }; }
export var aliasInfoType: { new(): aliasInfoType };

interface _aliasResultType extends _resultType {
	/** Alias identifier */
	id?: number;
}
export interface aliasResultType extends _aliasResultType { constructor: { new(): aliasResultType }; }
export var aliasResultType: { new(): aliasResultType };

export type Antivir = ("off" | "inout" | "in" | "out");
interface _Antivir extends _string { content: Antivir; }

interface _ApplicationInput extends BaseType {
	name: string;
	value: string;
}
export interface ApplicationInput extends _ApplicationInput { constructor: { new(): ApplicationInput }; }
export var ApplicationInput: { new(): ApplicationInput };

interface _APSDatabaseInputType extends BaseType {
	login: string;
	name: string;
	password: string;
	prefix?: string;
	server?: string;
}
export interface APSDatabaseInputType extends _APSDatabaseInputType { constructor: { new(): APSDatabaseInputType }; }
export var APSDatabaseInputType: { new(): APSDatabaseInputType };

type APSDatabaseInputTypeLoginType = string;
type _APSDatabaseInputTypeLoginType = Primitive._string;

type APSDatabaseInputTypeNameType = string;
type _APSDatabaseInputTypeNameType = Primitive._string;

interface _APSGetPackagesByResellerInput extends BaseType {
	resellerId: number;
}
export interface APSGetPackagesByResellerInput extends _APSGetPackagesByResellerInput { constructor: { new(): APSGetPackagesByResellerInput }; }
export var APSGetPackagesByResellerInput: { new(): APSGetPackagesByResellerInput };

interface _APSGetPackagesByResellerOutput extends BaseType {
	result: APSGetPackagesByResellerOutputResultType;
}
export interface APSGetPackagesByResellerOutput extends _APSGetPackagesByResellerOutput { constructor: { new(): APSGetPackagesByResellerOutput }; }
export var APSGetPackagesByResellerOutput: { new(): APSGetPackagesByResellerOutput };

interface _APSGetPackagesByResellerOutputResultType extends _resultType {
	package?: APSIdentifierType[];
}
interface APSGetPackagesByResellerOutputResultType extends _APSGetPackagesByResellerOutputResultType { constructor: { new(): APSGetPackagesByResellerOutputResultType }; }

interface _APSGetPackagesByWSInput extends BaseType {
	webspaceId: number;
}
export interface APSGetPackagesByWSInput extends _APSGetPackagesByWSInput { constructor: { new(): APSGetPackagesByWSInput }; }
export var APSGetPackagesByWSInput: { new(): APSGetPackagesByWSInput };

interface _APSGetPackagesByWSOutput extends BaseType {
	result: APSGetPackagesByWSOutputResultType;
}
export interface APSGetPackagesByWSOutput extends _APSGetPackagesByWSOutput { constructor: { new(): APSGetPackagesByWSOutput }; }
export var APSGetPackagesByWSOutput: { new(): APSGetPackagesByWSOutput };

interface _APSGetPackagesByWSOutputResultType extends _resultType {
	package?: APSIdentifierType[];
}
interface APSGetPackagesByWSOutputResultType extends _APSGetPackagesByWSOutputResultType { constructor: { new(): APSGetPackagesByWSOutputResultType }; }

interface _APSIdentifierType extends BaseType {
	description?: string;
	global_settings_not_set?: string;
	is_uploaded?: string;
	is_visible?: string;
	name: string;
	packager?: string;
	release?: string;
	vendor?: string;
	version?: string;
}
export interface APSIdentifierType extends _APSIdentifierType { constructor: { new(): APSIdentifierType }; }
export var APSIdentifierType: { new(): APSIdentifierType };

interface _APSImportConfigInputType extends BaseType {
	filename: string;
}
export interface APSImportConfigInputType extends _APSImportConfigInputType { constructor: { new(): APSImportConfigInputType }; }
export var APSImportConfigInputType: { new(): APSImportConfigInputType };

interface _APSImportConfigOutputType extends BaseType {
	result: resultType;
}
export interface APSImportConfigOutputType extends _APSImportConfigOutputType { constructor: { new(): APSImportConfigOutputType }; }
export var APSImportConfigOutputType: { new(): APSImportConfigOutputType };

interface _APSInputType extends BaseType {
	downloadPackage: APSPackageDownloadInputType[];
	getDownloadstatus: APSPackageDownloadStatusInputType[];
	getPackageslist: APSPackagesListInputType[];
	getPackageslistbyreseller: APSGetPackagesByResellerInput[];
	getPackageslistbywebspace: APSGetPackagesByWSInput[];
	importConfig: APSImportConfigInputType[];
	importPackage: APSPackageImportInputType[];
	install: APSInstallInputType[];
	setPackageproperties: APSSetPackagesPropertiesInputType[];
}
export interface APSInputType extends _APSInputType { constructor: { new(): APSInputType }; }
export var APSInputType: { new(): APSInputType };

interface _APSInstallInputType extends BaseType {
	database?: APSDatabaseInputType;
	/** Domain ID (ID in Plesk DB) */
	domainId: number;
	/** Domain name (UTF-8) */
	domainName: string;
	package: APSIdentifierType;
	packageId: number;
	settings?: APSSettingsInputType;
	ssl?: boolean;
	/** Subdomain ID (ID in Plesk DB) */
	subdomainId: number;
	/** Subdomain name (UTF-8) */
	subdomainName: string;
	urlPrefix?: string;
}
export interface APSInstallInputType extends _APSInstallInputType { constructor: { new(): APSInstallInputType }; }
export var APSInstallInputType: { new(): APSInstallInputType };

interface _APSInstallOutputType extends BaseType {
	result: resultType;
}
export interface APSInstallOutputType extends _APSInstallOutputType { constructor: { new(): APSInstallOutputType }; }
export var APSInstallOutputType: { new(): APSInstallOutputType };

interface _APSOutputType extends BaseType {
	downloadPackage: APSPackageDownloadOutputType[];
	getDownloadstatus: APSPackageDownloadStatusOutputType[];
	getPackageslist: APSPackagesListOutputType[];
	getPackageslistbyreseller: APSGetPackagesByResellerOutput[];
	getPackageslistbywebspace: APSGetPackagesByWSOutput[];
	importConfig: APSImportConfigOutputType[];
	importPackage: APSPackageImportOutputType[];
	install: APSInstallOutputType[];
	setPackageproperties: APSSetPackagesPropertiesOutputType[];
}
export interface APSOutputType extends _APSOutputType { constructor: { new(): APSOutputType }; }
export var APSOutputType: { new(): APSOutputType };

interface _APSPackageDownloadInputType extends BaseType {
	apsCatalogurl?: string;
	package: APSIdentifierType;
}
export interface APSPackageDownloadInputType extends _APSPackageDownloadInputType { constructor: { new(): APSPackageDownloadInputType }; }
export var APSPackageDownloadInputType: { new(): APSPackageDownloadInputType };

interface _APSPackageDownloadOutputType extends BaseType {
	result: APSPackageDownloadOutputTypeResultType;
}
export interface APSPackageDownloadOutputType extends _APSPackageDownloadOutputType { constructor: { new(): APSPackageDownloadOutputType }; }
export var APSPackageDownloadOutputType: { new(): APSPackageDownloadOutputType };

interface _APSPackageDownloadOutputTypeResultType extends _resultType {
	taskId?: number;
}
interface APSPackageDownloadOutputTypeResultType extends _APSPackageDownloadOutputTypeResultType { constructor: { new(): APSPackageDownloadOutputTypeResultType }; }

interface _APSPackageDownloadStatusInProgress extends BaseType {
	completed: number;
	current?: string;
	total: number;
}
export interface APSPackageDownloadStatusInProgress extends _APSPackageDownloadStatusInProgress { constructor: { new(): APSPackageDownloadStatusInProgress }; }
export var APSPackageDownloadStatusInProgress: { new(): APSPackageDownloadStatusInProgress };

interface _APSPackageDownloadStatusInputType extends BaseType {
	/** Filter tasks to be retrieved */
	filter: APSPackageDownloadStatusInputTypeFilterType;
}
export interface APSPackageDownloadStatusInputType extends _APSPackageDownloadStatusInputType { constructor: { new(): APSPackageDownloadStatusInputType }; }
export var APSPackageDownloadStatusInputType: { new(): APSPackageDownloadStatusInputType };

interface _APSPackageDownloadStatusInputTypeFilterType extends BaseType {
	taskId?: number[];
}
interface APSPackageDownloadStatusInputTypeFilterType extends _APSPackageDownloadStatusInputTypeFilterType { constructor: { new(): APSPackageDownloadStatusInputTypeFilterType }; }

interface _APSPackageDownloadStatusOutputType extends BaseType {
	result: APSPackageDownloadStatusOutputTypeResultType[];
}
export interface APSPackageDownloadStatusOutputType extends _APSPackageDownloadStatusOutputType { constructor: { new(): APSPackageDownloadStatusOutputType }; }
export var APSPackageDownloadStatusOutputType: { new(): APSPackageDownloadStatusOutputType };

interface _APSPackageDownloadStatusOutputTypeResultType extends _resultFilterType {
	task?: APSPackageDownloadStatusOutputTypeResultTypeTaskType;
}
interface APSPackageDownloadStatusOutputTypeResultType extends _APSPackageDownloadStatusOutputTypeResultType { constructor: { new(): APSPackageDownloadStatusOutputTypeResultType }; }

interface _APSPackageDownloadStatusOutputTypeResultTypeTaskType extends BaseType {
	finished: APSPackageDownloadStatusOutputTypeResultTypeTaskTypeFinishedType;
	id: number;
	inProgress: APSPackageDownloadStatusInProgress;
}
interface APSPackageDownloadStatusOutputTypeResultTypeTaskType extends _APSPackageDownloadStatusOutputTypeResultTypeTaskType { constructor: { new(): APSPackageDownloadStatusOutputTypeResultTypeTaskType }; }

interface _APSPackageDownloadStatusOutputTypeResultTypeTaskTypeFinishedType extends BaseType {
	packageId: number;
}
interface APSPackageDownloadStatusOutputTypeResultTypeTaskTypeFinishedType extends _APSPackageDownloadStatusOutputTypeResultTypeTaskTypeFinishedType { constructor: { new(): APSPackageDownloadStatusOutputTypeResultTypeTaskTypeFinishedType }; }

interface _APSPackageImportInputType extends BaseType {
	filename: string;
}
export interface APSPackageImportInputType extends _APSPackageImportInputType { constructor: { new(): APSPackageImportInputType }; }
export var APSPackageImportInputType: { new(): APSPackageImportInputType };

interface _APSPackageImportOutputType extends BaseType {
	result: APSPackageImportOutputTypeResultType;
}
export interface APSPackageImportOutputType extends _APSPackageImportOutputType { constructor: { new(): APSPackageImportOutputType }; }
export var APSPackageImportOutputType: { new(): APSPackageImportOutputType };

interface _APSPackageImportOutputTypeResultType extends _resultType {
	packageId?: number;
}
interface APSPackageImportOutputTypeResultType extends _APSPackageImportOutputTypeResultType { constructor: { new(): APSPackageImportOutputTypeResultType }; }

interface _APSPackagesListInputType extends BaseType {
	/** Filter packages to be retrieved */
	filter: APSPackagesListInputTypeFilterType;
}
export interface APSPackagesListInputType extends _APSPackagesListInputType { constructor: { new(): APSPackagesListInputType }; }
export var APSPackagesListInputType: { new(): APSPackagesListInputType };

interface _APSPackagesListInputTypeFilterType extends BaseType {
	packageId?: number[];
}
interface APSPackagesListInputTypeFilterType extends _APSPackagesListInputTypeFilterType { constructor: { new(): APSPackagesListInputTypeFilterType }; }

interface _APSPackagesListOutputType extends BaseType {
	result: APSPackagesListOutputTypeResultType[];
}
export interface APSPackagesListOutputType extends _APSPackagesListOutputType { constructor: { new(): APSPackagesListOutputType }; }
export var APSPackagesListOutputType: { new(): APSPackagesListOutputType };

interface _APSPackagesListOutputTypeResultType extends _resultFilterType {
	package?: APSPackagesListOutputTypeResultTypePackageType[];
}
interface APSPackagesListOutputTypeResultType extends _APSPackagesListOutputTypeResultType { constructor: { new(): APSPackagesListOutputTypeResultType }; }

interface _APSPackagesListOutputTypeResultTypePackageType extends _APSIdentifierType {
	id?: number;
}
interface APSPackagesListOutputTypeResultTypePackageType extends _APSPackagesListOutputTypeResultTypePackageType { constructor: { new(): APSPackagesListOutputTypeResultTypePackageType }; }

interface _APSSetPackagesPropertiesInputType extends BaseType {
	/** Filter packages to be updated */
	filter: APSSetPackagesPropertiesInputTypeFilterType;
	properties: APSSetPackagesPropertiesInputTypePropertiesType;
}
export interface APSSetPackagesPropertiesInputType extends _APSSetPackagesPropertiesInputType { constructor: { new(): APSSetPackagesPropertiesInputType }; }
export var APSSetPackagesPropertiesInputType: { new(): APSSetPackagesPropertiesInputType };

interface _APSSetPackagesPropertiesInputTypeFilterType extends BaseType {
	packageId?: number[];
}
interface APSSetPackagesPropertiesInputTypeFilterType extends _APSSetPackagesPropertiesInputTypeFilterType { constructor: { new(): APSSetPackagesPropertiesInputTypeFilterType }; }

interface _APSSetPackagesPropertiesInputTypePropertiesType extends BaseType {
	visible: boolean;
}
interface APSSetPackagesPropertiesInputTypePropertiesType extends _APSSetPackagesPropertiesInputTypePropertiesType { constructor: { new(): APSSetPackagesPropertiesInputTypePropertiesType }; }

interface _APSSetPackagesPropertiesOutputType extends BaseType {
	result: resultFilterType[];
}
export interface APSSetPackagesPropertiesOutputType extends _APSSetPackagesPropertiesOutputType { constructor: { new(): APSSetPackagesPropertiesOutputType }; }
export var APSSetPackagesPropertiesOutputType: { new(): APSSetPackagesPropertiesOutputType };

interface _APSSettingInputType extends BaseType {
	name: string;
	value: string[];
}
export interface APSSettingInputType extends _APSSettingInputType { constructor: { new(): APSSettingInputType }; }
export var APSSettingInputType: { new(): APSSettingInputType };

interface _APSSettingsInputType extends BaseType {
	setting: APSSettingInputType[];
}
export interface APSSettingsInputType extends _APSSettingsInputType { constructor: { new(): APSSettingsInputType }; }
export var APSSettingsInputType: { new(): APSSettingsInputType };

export type APSUrlPrefixType = string;
type _APSUrlPrefixType = _string;

interface _autoRespAttach extends BaseType {
	fileName?: string;
	tmpName?: string;
}
export interface autoRespAttach extends _autoRespAttach { constructor: { new(): autoRespAttach }; }
export var autoRespAttach: { new(): autoRespAttach };

export type base64 = string;
type _base64 = Primitive._string;

interface _BindType extends BaseType {
	/** Restricts the value so it can only be read and not modified. */
	readOnly: boolean;
	/** Binding property */
	ref: string;
	/** Defines the conditions when the data bind is applicable. */
	relevant?: RelevantType[];
}
export interface BindType extends _BindType { constructor: { new(): BindType }; }
export var BindType: { new(): BindType };

export type boolean = boolean;
type _boolean = Primitive._boolean;

export type booleanWithDefault = ("true" | "false" | "default");
interface _booleanWithDefault extends Primitive._string { content: booleanWithDefault; }

interface _BrandingResult extends BaseType {
	result: resultFilterType[];
}
export interface BrandingResult extends _BrandingResult { constructor: { new(): BrandingResult }; }
export var BrandingResult: { new(): BrandingResult };

/** Button data */
interface _buttonDataType extends BaseType {}
export interface buttonDataType extends _buttonDataType { constructor: { new(): buttonDataType }; }
export var buttonDataType: { new(): buttonDataType };

/** Minimal custom button's properties */
interface _CBOptionalProps extends BaseType {
	conhelp?: string;
	file?: string;
	internal?: boolean;
	noframe?: boolean;
	public?: boolean;
	sort_key?: number;
}
export interface CBOptionalProps extends _CBOptionalProps { constructor: { new(): CBOptionalProps }; }
export var CBOptionalProps: { new(): CBOptionalProps };

/** Custom button's owner */
interface _CBOwner extends BaseType {
	customerId: number;
	resellerId: number;
}
export interface CBOwner extends _CBOwner { constructor: { new(): CBOwner }; }
export var CBOwner: { new(): CBOwner };

/** Custom button's placement */
export type CBPlace = ("client" | "domain" | "navigation" | "admin" | "admin-settings" | "reseller" | "reseller-settings" | "domain-properties");
interface _CBPlace extends _string { content: CBPlace; }

/** Custom button's usual properties */
interface _CBProps extends _CBOptionalProps {
	place: CBPlace;
	text: string;
	url: string;
}
export interface CBProps extends _CBProps { constructor: { new(): CBProps }; }
export var CBProps: { new(): CBProps };

/** URL components of custom button */
interface _CBUrlComponents extends BaseType {}
export interface CBUrlComponents extends _CBUrlComponents { constructor: { new(): CBUrlComponents }; }
export var CBUrlComponents: { new(): CBUrlComponents };

/** Certificate */
interface _certificate extends BaseType {
	name: string;
	site: string;
	webspace: string;
}
export interface certificate extends _certificate { constructor: { new(): certificate }; }
export var certificate: { new(): certificate };

interface _CertificateResponseType extends BaseType {
	generate: CertificateResponseTypeGenerateType[];
	getPool: CertificateResponseTypeGetPoolType[];
	install: CertificateResponseTypeInstallType[];
	remove: CertificateResponseTypeRemoveType[];
	update: CertificateResponseTypeUpdateType[];
}
export interface CertificateResponseType extends _CertificateResponseType { constructor: { new(): CertificateResponseType }; }
export var CertificateResponseType: { new(): CertificateResponseType };

interface _CertificateResponseTypeGenerateType extends BaseType {
	result: CertificateResponseTypeGenerateTypeResultType;
}
interface CertificateResponseTypeGenerateType extends _CertificateResponseTypeGenerateType { constructor: { new(): CertificateResponseTypeGenerateType }; }

interface _CertificateResponseTypeGenerateTypeResultType extends _resultType {
	csr?: string;
	pvt?: string;
}
interface CertificateResponseTypeGenerateTypeResultType extends _CertificateResponseTypeGenerateTypeResultType { constructor: { new(): CertificateResponseTypeGenerateTypeResultType }; }

interface _CertificateResponseTypeGetPoolType extends BaseType {
	result: CertificateResponseTypeGetPoolTypeResultType[];
}
interface CertificateResponseTypeGetPoolType extends _CertificateResponseTypeGetPoolType { constructor: { new(): CertificateResponseTypeGetPoolType }; }

interface _CertificateResponseTypeGetPoolTypeResultType extends _resultFilterType {
	certificates?: certificatesType;
}
interface CertificateResponseTypeGetPoolTypeResultType extends _CertificateResponseTypeGetPoolTypeResultType { constructor: { new(): CertificateResponseTypeGetPoolTypeResultType }; }

interface _CertificateResponseTypeInstallType extends BaseType {
	result: CertificateResponseTypeInstallTypeResultType;
}
interface CertificateResponseTypeInstallType extends _CertificateResponseTypeInstallType { constructor: { new(): CertificateResponseTypeInstallType }; }

interface _CertificateResponseTypeInstallTypeResultType extends _resultType {}
interface CertificateResponseTypeInstallTypeResultType extends _CertificateResponseTypeInstallTypeResultType { constructor: { new(): CertificateResponseTypeInstallTypeResultType }; }

interface _CertificateResponseTypeRemoveType extends BaseType {
	result: CertificateResponseTypeRemoveTypeResultType[];
}
interface CertificateResponseTypeRemoveType extends _CertificateResponseTypeRemoveType { constructor: { new(): CertificateResponseTypeRemoveType }; }

interface _CertificateResponseTypeRemoveTypeResultType extends _resultType {
	name?: string;
}
interface CertificateResponseTypeRemoveTypeResultType extends _CertificateResponseTypeRemoveTypeResultType { constructor: { new(): CertificateResponseTypeRemoveTypeResultType }; }

interface _CertificateResponseTypeUpdateType extends BaseType {
	result: CertificateResponseTypeUpdateTypeResultType;
}
interface CertificateResponseTypeUpdateType extends _CertificateResponseTypeUpdateType { constructor: { new(): CertificateResponseTypeUpdateType }; }

interface _CertificateResponseTypeUpdateTypeResultType extends _resultType {}
interface CertificateResponseTypeUpdateTypeResultType extends _CertificateResponseTypeUpdateTypeResultType { constructor: { new(): CertificateResponseTypeUpdateTypeResultType }; }

interface _certificatesType extends BaseType {
	certificate?: certificateType[];
}
export interface certificatesType extends _certificatesType { constructor: { new(): certificatesType }; }
export var certificatesType: { new(): certificatesType };

interface _certificateType extends BaseType {
	name: string;
}
export interface certificateType extends _certificateType { constructor: { new(): certificateType }; }
export var certificateType: { new(): certificateType };

interface _certResultType extends _resultType {}
export interface certResultType extends _certResultType { constructor: { new(): certResultType }; }
export var certResultType: { new(): certResultType };

export type ChoiceType = string;
type _ChoiceType = Primitive._string;

/** Event class type specification */
export type class_type = ("license" | "service" | "ip_address" | "admin_info" | "admin_prefs" | "siteapp" | "client" | "client_limits" | "client_status" | "client_prefs" | "client_perms" | "client_ip_pool" | "reseller" | "reseller_limits" | "reseller_status" | "reseller_prefs" | "reseller_perms" | "reseller_ip_pool" | "domain" | "domain_limits" | "domain_user" | "domain_status" | "phosting" | "fhosting" | "subdomain" | "mailname" | "webuser" | "maillist" | "dns_zone" | "mailname_antivirus" | "mailname_spamfilter" | "mailname_mailgroup" | "mailname_autoresponder" | "mailname_attachment" | "session_preferences" | "db_server" | "domain_alias" | "remote_dns" | "dashboard_preset" | "dashboard_preset_type" | "dashboard_preset_name" | "domain_limit_size" | "client_limit_size" | "client_limit_traffic" | "reseller_limit_size" | "reseller_limit_traffic" | "domain_limit_traffic" | "plesk_component" | "db" | "db_user" | "template_client" | "template_domain" | "template_admin" | "template_reseller" | "health_parameter" | "site" | "site_alias" | "site_subdomain" | "site_dns_zone" | "site_alias_dns_zone" | "update" | "domain_limit_mysql_quota" | "domain_limit_mysql_soft_quota" | "domain_limit_mssql_quota" | "domain_limit_mssql_soft_quota" | "domain_usage_size" | "domain_usage_traffic" | "admin_alias");
interface _class_type extends _string { content: class_type; }

/** Client adding data */
interface _clientAddGenInfo extends BaseType {
	address?: string;
	city?: string;
	cname?: string;
	/** Example: US */
	country?: string;
	description?: string;
	email?: string;
	externalId?: string;
	fax?: string;
	locale?: string;
	login: string;
	ownerExternalid?: string;
	ownerId?: number;
	ownerLogin?: string;
	passwd: string;
	/** Should be filled for US country */
	pcode?: string;
	phone?: string;
	pname: string;
	/** Should be filled for US country */
	state?: string;
	/** 0:ACTIVE, 16:DISABLED_BY ADMIN, 4:UNDER BACKUP/RESTORE, 256: EXPIRED */
	status?: number;
}
export interface clientAddGenInfo extends _clientAddGenInfo { constructor: { new(): clientAddGenInfo }; }
export var clientAddGenInfo: { new(): clientAddGenInfo };

/** Client data */
interface _clientData extends BaseType {}
export interface clientData extends _clientData { constructor: { new(): clientData }; }
export var clientData: { new(): clientData };

/** Data to be operated */
interface _clientDatasetType extends BaseType {}
export interface clientDatasetType extends _clientDatasetType { constructor: { new(): clientDatasetType }; }
export var clientDatasetType: { new(): clientDatasetType };

/** Client getting data */
interface _clientGetGenInfo extends BaseType {}
export interface clientGetGenInfo extends _clientGetGenInfo { constructor: { new(): clientGetGenInfo }; }
export var clientGetGenInfo: { new(): clientGetGenInfo };

/** Client Limits */
interface _clientLimits extends BaseType {
	limit?: PleskLimitType[];
	resourcePolicy?: clientLimitsResourcePolicyType;
}
export interface clientLimits extends _clientLimits { constructor: { new(): clientLimits }; }
export var clientLimits: { new(): clientLimits };

interface _clientLimitsResourcePolicyType extends BaseType {
	overuse?: clientLimitsResourcePolicyTypeOveruseType;
}
interface clientLimitsResourcePolicyType extends _clientLimitsResourcePolicyType { constructor: { new(): clientLimitsResourcePolicyType }; }

type clientLimitsResourcePolicyTypeOveruseType = ("block" | "notify" | "normal");
interface _clientLimitsResourcePolicyTypeOveruseType extends _string { content: clientLimitsResourcePolicyTypeOveruseType; }

/** Client Permissions */
interface _clientPerms extends BaseType {
	permission: PleskPermissionType[];
}
export interface clientPerms extends _clientPerms { constructor: { new(): clientPerms }; }
export var clientPerms: { new(): clientPerms };

interface _ClientResponseType extends BaseType {
	/** Add client */
	add: ClientResponseTypeAddType[];
	changeOwner: ClientResponseTypeChangeOwnerType[];
	convertToreseller: ClientResponseTypeConvertToresellerType[];
	/** Deleting result */
	del: ClientResponseTypeDelType[];
	/** Getting result */
	get: ClientResponseTypeGetType[];
	getDomainlist: resultDomainListOutputType[];
	/** Modify client */
	set: ClientResponseTypeSetType[];
}
export interface ClientResponseType extends _ClientResponseType { constructor: { new(): ClientResponseType }; }
export var ClientResponseType: { new(): ClientResponseType };

interface _ClientResponseTypeAddType extends BaseType {
	result: ClientResponseTypeAddTypeResultType;
}
interface ClientResponseTypeAddType extends _ClientResponseTypeAddType { constructor: { new(): ClientResponseTypeAddType }; }

interface _ClientResponseTypeAddTypeResultType extends _resultType {
	/** New client GUID on success */
	guid?: string;
	/** New client ID on success */
	id?: number;
}
interface ClientResponseTypeAddTypeResultType extends _ClientResponseTypeAddTypeResultType { constructor: { new(): ClientResponseTypeAddTypeResultType }; }

interface _ClientResponseTypeChangeOwnerType extends BaseType {
	result: resultFilterType[];
}
interface ClientResponseTypeChangeOwnerType extends _ClientResponseTypeChangeOwnerType { constructor: { new(): ClientResponseTypeChangeOwnerType }; }

interface _ClientResponseTypeConvertToresellerType extends BaseType {
	result: resultFilterType[];
}
interface ClientResponseTypeConvertToresellerType extends _ClientResponseTypeConvertToresellerType { constructor: { new(): ClientResponseTypeConvertToresellerType }; }

interface _ClientResponseTypeDelType extends BaseType {
	result: resultFilterType[];
}
interface ClientResponseTypeDelType extends _ClientResponseTypeDelType { constructor: { new(): ClientResponseTypeDelType }; }

interface _ClientResponseTypeGetType extends BaseType {
	result: ClientResponseTypeGetTypeResultType[];
}
interface ClientResponseTypeGetType extends _ClientResponseTypeGetType { constructor: { new(): ClientResponseTypeGetType }; }

interface _ClientResponseTypeGetTypeResultType extends _resultFilterType {
	/** Client datas. Will not be returned if status isn't "ok" */
	data?: clientData;
}
interface ClientResponseTypeGetTypeResultType extends _ClientResponseTypeGetTypeResultType { constructor: { new(): ClientResponseTypeGetTypeResultType }; }

interface _ClientResponseTypeSetType extends BaseType {
	result: resultFilterType[];
}
interface ClientResponseTypeSetType extends _ClientResponseTypeSetType { constructor: { new(): ClientResponseTypeSetType }; }

/** Client setting data */
interface _clientSetGenInfo extends BaseType {
	address?: string;
	city?: string;
	cname?: string;
	country?: string;
	description?: string;
	email?: string;
	externalId?: string;
	fax?: string;
	guid?: NoneType;
	locale?: string;
	login?: string;
	passwd?: string;
	pcode?: string;
	phone?: string;
	pname?: string;
	state?: string;
	status?: number;
}
export interface clientSetGenInfo extends _clientSetGenInfo { constructor: { new(): clientSetGenInfo }; }
export var clientSetGenInfo: { new(): clientSetGenInfo };

type clientSetGenInfoCnameType = string;
type _clientSetGenInfoCnameType = _string;

/** Client statistics */
interface _clientStatType extends BaseType {
	active_domains: number;
	data_bases: number;
	disk_space: number;
	mail_groups: number;
	mail_lists: number;
	mail_resps: number;
	postboxs: number;
	redirects: number;
	subdomains: number;
	/** Monthly traffic in bytes */
	traffic: number;
	/** Total traffic for prev.day ( in bytes) */
	traffic_prevday: number;
	web_users: number;
}
export interface clientStatType extends _clientStatType { constructor: { new(): clientStatType }; }
export var clientStatType: { new(): clientStatType };

/** Server componets info */
interface _componentsType extends BaseType {
	component: componentsTypeComponentType[];
}
export interface componentsType extends _componentsType { constructor: { new(): componentsType }; }
export var componentsType: { new(): componentsType };

interface _componentsTypeComponentType extends BaseType {}
interface componentsTypeComponentType extends _componentsTypeComponentType { constructor: { new(): componentsTypeComponentType }; }

interface _ConditionType extends BaseType {
	logBysize: number;
	logBytime: ConditionTypeLogBytimeType;
}
export interface ConditionType extends _ConditionType { constructor: { new(): ConditionType }; }
export var ConditionType: { new(): ConditionType };

type ConditionTypeLogBytimeType = ("Daily" | "Weekly" | "Monthly");
interface _ConditionTypeLogBytimeType extends _string { content: ConditionTypeLogBytimeType; }

interface _CreateSessionResultType extends _resultType {
	id?: string;
}
export interface CreateSessionResultType extends _CreateSessionResultType { constructor: { new(): CreateSessionResultType }; }
export var CreateSessionResultType: { new(): CreateSessionResultType };

interface _CreateSessionType extends BaseType {
	result: CreateSessionResultType;
}
export interface CreateSessionType extends _CreateSessionType { constructor: { new(): CreateSessionType }; }
export var CreateSessionType: { new(): CreateSessionType };

interface _CreateVDirInputType extends BaseType {
	/** Virtual directory name */
	name: string;
	properties: VDirProperties;
	siteId: number;
	subdomainId: number;
}
export interface CreateVDirInputType extends _CreateVDirInputType { constructor: { new(): CreateVDirInputType }; }
export var CreateVDirInputType: { new(): CreateVDirInputType };

interface _DAGetSupportedServicesOutputType extends BaseType {
	result: DAGetSupportedServicesOutputTypeResultType;
}
export interface DAGetSupportedServicesOutputType extends _DAGetSupportedServicesOutputType { constructor: { new(): DAGetSupportedServicesOutputType }; }
export var DAGetSupportedServicesOutputType: { new(): DAGetSupportedServicesOutputType };

interface _DAGetSupportedServicesOutputTypeResultType extends _resultType {
	service?: string[];
}
interface DAGetSupportedServicesOutputTypeResultType extends _DAGetSupportedServicesOutputTypeResultType { constructor: { new(): DAGetSupportedServicesOutputTypeResultType }; }

interface _DatabaseAddDBOutputType extends BaseType {
	result: DatabaseAddDBOutputTypeResultType;
}
export interface DatabaseAddDBOutputType extends _DatabaseAddDBOutputType { constructor: { new(): DatabaseAddDBOutputType }; }
export var DatabaseAddDBOutputType: { new(): DatabaseAddDBOutputType };

interface _DatabaseAddDBOutputTypeResultType extends _resultType {
	id?: number;
}
interface DatabaseAddDBOutputTypeResultType extends _DatabaseAddDBOutputTypeResultType { constructor: { new(): DatabaseAddDBOutputTypeResultType }; }

interface _DatabaseAddDBUserOutputType extends BaseType {
	result: DatabaseAddDBUserOutputTypeResultType;
}
export interface DatabaseAddDBUserOutputType extends _DatabaseAddDBUserOutputType { constructor: { new(): DatabaseAddDBUserOutputType }; }
export var DatabaseAddDBUserOutputType: { new(): DatabaseAddDBUserOutputType };

interface _DatabaseAddDBUserOutputTypeResultType extends _resultType {
	id?: number;
}
interface DatabaseAddDBUserOutputTypeResultType extends _DatabaseAddDBUserOutputTypeResultType { constructor: { new(): DatabaseAddDBUserOutputTypeResultType }; }

interface _DatabaseAssignToSubscriptionOutputType extends BaseType {
	result: resultFilterType[];
}
export interface DatabaseAssignToSubscriptionOutputType extends _DatabaseAssignToSubscriptionOutputType { constructor: { new(): DatabaseAssignToSubscriptionOutputType }; }
export var DatabaseAssignToSubscriptionOutputType: { new(): DatabaseAssignToSubscriptionOutputType };

interface _DatabaseDelDBOutputType extends BaseType {
	result: resultFilterType[];
}
export interface DatabaseDelDBOutputType extends _DatabaseDelDBOutputType { constructor: { new(): DatabaseDelDBOutputType }; }
export var DatabaseDelDBOutputType: { new(): DatabaseDelDBOutputType };

interface _DatabaseDelDBUserOutputType extends BaseType {
	result: resultFilterType[];
}
export interface DatabaseDelDBUserOutputType extends _DatabaseDelDBUserOutputType { constructor: { new(): DatabaseDelDBUserOutputType }; }
export var DatabaseDelDBUserOutputType: { new(): DatabaseDelDBUserOutputType };

interface _DatabaseGetDBOutputType extends BaseType {
	result: DatabaseGetDBOutputTypeResultType[];
}
export interface DatabaseGetDBOutputType extends _DatabaseGetDBOutputType { constructor: { new(): DatabaseGetDBOutputType }; }
export var DatabaseGetDBOutputType: { new(): DatabaseGetDBOutputType };

interface _DatabaseGetDBOutputTypeResultType extends _resultFilterType {
	dbServerid?: number;
	defaultUserid?: number;
	name?: string;
	type?: string;
	webspaceId?: number;
}
interface DatabaseGetDBOutputTypeResultType extends _DatabaseGetDBOutputTypeResultType { constructor: { new(): DatabaseGetDBOutputTypeResultType }; }

interface _DatabaseGetDBUsersOutputType extends BaseType {
	result: DatabaseGetDBUsersOutputTypeResultType[];
}
export interface DatabaseGetDBUsersOutputType extends _DatabaseGetDBUsersOutputType { constructor: { new(): DatabaseGetDBUsersOutputType }; }
export var DatabaseGetDBUsersOutputType: { new(): DatabaseGetDBUsersOutputType };

interface _DatabaseGetDBUsersOutputTypeResultType extends _resultFilterType {
	acl?: DatabaseUserAclType;
	allowAccessfrom?: DatabaseUserRemoteAccessRulesType;
	dbId?: number;
}
interface DatabaseGetDBUsersOutputTypeResultType extends _DatabaseGetDBUsersOutputTypeResultType { constructor: { new(): DatabaseGetDBUsersOutputTypeResultType }; }

interface _DatabaseGetDefaultUserOutputType extends BaseType {
	result: resultFilterType[];
}
export interface DatabaseGetDefaultUserOutputType extends _DatabaseGetDefaultUserOutputType { constructor: { new(): DatabaseGetDefaultUserOutputType }; }
export var DatabaseGetDefaultUserOutputType: { new(): DatabaseGetDefaultUserOutputType };

interface _DatabaseOutputType extends BaseType {
	addDb: DatabaseAddDBOutputType[];
	addDbuser: DatabaseAddDBUserOutputType[];
	assignTosubscription: DatabaseAssignToSubscriptionOutputType[];
	delDb: DatabaseDelDBOutputType[];
	delDbuser: DatabaseDelDBUserOutputType[];
	getDb: DatabaseGetDBOutputType[];
	getDbusers: DatabaseGetDBUsersOutputType[];
	getDefaultuser: DatabaseGetDefaultUserOutputType[];
	setCustomhost: DatabaseSetCustomHostOutputType[];
	setDbuser: DatabaseSetDBUserOutputtype[];
	setDefaultuser: DatabaseSetDBOutputType[];
}
export interface DatabaseOutputType extends _DatabaseOutputType { constructor: { new(): DatabaseOutputType }; }
export var DatabaseOutputType: { new(): DatabaseOutputType };

interface _DatabaseServer extends BaseType {
	host?: string;
	port?: number;
}
export interface DatabaseServer extends _DatabaseServer { constructor: { new(): DatabaseServer }; }
export var DatabaseServer: { new(): DatabaseServer };

interface _DatabaseServerAddParam extends BaseType {
	admin: string;
	host: string;
	password?: string;
	port: string;
	type: string;
}
export interface DatabaseServerAddParam extends _DatabaseServerAddParam { constructor: { new(): DatabaseServerAddParam }; }
export var DatabaseServerAddParam: { new(): DatabaseServerAddParam };

interface _DatabaseServerDescription extends _DatabaseServer {
	admin: string;
	password?: string;
	type: string;
}
export interface DatabaseServerDescription extends _DatabaseServerDescription { constructor: { new(): DatabaseServerDescription }; }
export var DatabaseServerDescription: { new(): DatabaseServerDescription };

interface _DatabaseServerDescriptionOpt extends _DatabaseServer {
	admin?: string;
	password?: string;
}
export interface DatabaseServerDescriptionOpt extends _DatabaseServerDescriptionOpt { constructor: { new(): DatabaseServerDescriptionOpt }; }
export var DatabaseServerDescriptionOpt: { new(): DatabaseServerDescriptionOpt };

export type DatabaseServerError = ("NO_ERROR" | "CONNECTION_FAILED" | "LOGIN_FAILED" | "PERMISSION_DENIED" | "OTHER_ERROR" | "CREDENTIALS_NOT_SET");
interface _DatabaseServerError extends _string { content: DatabaseServerError; }

interface _DatabaseServerResponseType extends BaseType {
	add: DatabaseServerResponseTypeAddType[];
	del: DatabaseServerResponseTypeDelType[];
	get: DatabaseServerResponseTypeGetType[];
	getDefault: DatabaseServerResponseTypeGetDefaultType[];
	getLocal: DatabaseServerResponseTypeGetLocalType[];
	getSupportedtypes: DatabaseServerResponseTypeGetSupportedtypesType[];
	set: DatabaseServerResponseTypeSetType[];
	setDefault: DatabaseServerResponseTypeSetDefaultType[];
}
export interface DatabaseServerResponseType extends _DatabaseServerResponseType { constructor: { new(): DatabaseServerResponseType }; }
export var DatabaseServerResponseType: { new(): DatabaseServerResponseType };

interface _DatabaseServerResponseTypeAddType extends BaseType {
	result: DatabaseServerResultType;
}
interface DatabaseServerResponseTypeAddType extends _DatabaseServerResponseTypeAddType { constructor: { new(): DatabaseServerResponseTypeAddType }; }

interface _DatabaseServerResponseTypeDelType extends BaseType {
	result: DatabaseServerResultType[];
}
interface DatabaseServerResponseTypeDelType extends _DatabaseServerResponseTypeDelType { constructor: { new(): DatabaseServerResponseTypeDelType }; }

interface _DatabaseServerResponseTypeGetDefaultType extends BaseType {
	result: DatabaseServerResultType2[];
}
interface DatabaseServerResponseTypeGetDefaultType extends _DatabaseServerResponseTypeGetDefaultType { constructor: { new(): DatabaseServerResponseTypeGetDefaultType }; }

interface _DatabaseServerResponseTypeGetLocalType extends BaseType {
	result: DatabaseServerResultType2[];
}
interface DatabaseServerResponseTypeGetLocalType extends _DatabaseServerResponseTypeGetLocalType { constructor: { new(): DatabaseServerResponseTypeGetLocalType }; }

interface _DatabaseServerResponseTypeGetSupportedtypesType extends BaseType {
	result: DatabaseServerResponseTypeGetSupportedtypesTypeResultType;
}
interface DatabaseServerResponseTypeGetSupportedtypesType extends _DatabaseServerResponseTypeGetSupportedtypesType { constructor: { new(): DatabaseServerResponseTypeGetSupportedtypesType }; }

interface _DatabaseServerResponseTypeGetSupportedtypesTypeResultType extends _resultType {
	type?: string[];
}
interface DatabaseServerResponseTypeGetSupportedtypesTypeResultType extends _DatabaseServerResponseTypeGetSupportedtypesTypeResultType { constructor: { new(): DatabaseServerResponseTypeGetSupportedtypesTypeResultType }; }

interface _DatabaseServerResponseTypeGetType extends BaseType {
	result: DatabaseServerResponseTypeGetTypeResultType[];
}
interface DatabaseServerResponseTypeGetType extends _DatabaseServerResponseTypeGetType { constructor: { new(): DatabaseServerResponseTypeGetType }; }

interface _DatabaseServerResponseTypeGetTypeResultType extends _DatabaseServerResultType {
	data?: DatabaseServerResponseTypeGetTypeResultTypeDataType;
}
interface DatabaseServerResponseTypeGetTypeResultType extends _DatabaseServerResponseTypeGetTypeResultType { constructor: { new(): DatabaseServerResponseTypeGetTypeResultType }; }

interface _DatabaseServerResponseTypeGetTypeResultTypeDataType extends _DatabaseServerDescription {
	db_num: number;
	status: DatabaseServerError;
}
interface DatabaseServerResponseTypeGetTypeResultTypeDataType extends _DatabaseServerResponseTypeGetTypeResultTypeDataType { constructor: { new(): DatabaseServerResponseTypeGetTypeResultTypeDataType }; }

interface _DatabaseServerResponseTypeSetDefaultType extends BaseType {
	result: DatabaseServerResultType;
}
interface DatabaseServerResponseTypeSetDefaultType extends _DatabaseServerResponseTypeSetDefaultType { constructor: { new(): DatabaseServerResponseTypeSetDefaultType }; }

interface _DatabaseServerResponseTypeSetType extends BaseType {
	result: DatabaseServerResultType;
}
interface DatabaseServerResponseTypeSetType extends _DatabaseServerResponseTypeSetType { constructor: { new(): DatabaseServerResponseTypeSetType }; }

interface _DatabaseServerResultType extends _resultType {
	id?: number;
}
export interface DatabaseServerResultType extends _DatabaseServerResultType { constructor: { new(): DatabaseServerResultType }; }
export var DatabaseServerResultType: { new(): DatabaseServerResultType };

interface _DatabaseServerResultType2 extends _resultType {
	id?: number;
	type?: string;
}
export interface DatabaseServerResultType2 extends _DatabaseServerResultType2 { constructor: { new(): DatabaseServerResultType2 }; }
export var DatabaseServerResultType2: { new(): DatabaseServerResultType2 };

interface _DatabaseSetCustomHostOutputType extends BaseType {
	result: resultFilterType[];
}
export interface DatabaseSetCustomHostOutputType extends _DatabaseSetCustomHostOutputType { constructor: { new(): DatabaseSetCustomHostOutputType }; }
export var DatabaseSetCustomHostOutputType: { new(): DatabaseSetCustomHostOutputType };

interface _DatabaseSetDBOutputType extends BaseType {
	result: resultType;
}
export interface DatabaseSetDBOutputType extends _DatabaseSetDBOutputType { constructor: { new(): DatabaseSetDBOutputType }; }
export var DatabaseSetDBOutputType: { new(): DatabaseSetDBOutputType };

interface _DatabaseSetDBUserOutputtype extends BaseType {
	result: DatabaseSetDBUserOutputtypeResultType;
}
export interface DatabaseSetDBUserOutputtype extends _DatabaseSetDBUserOutputtype { constructor: { new(): DatabaseSetDBUserOutputtype }; }
export var DatabaseSetDBUserOutputtype: { new(): DatabaseSetDBUserOutputtype };

interface _DatabaseSetDBUserOutputtypeResultType extends _resultType {
	id?: number;
}
interface DatabaseSetDBUserOutputtypeResultType extends _DatabaseSetDBUserOutputtypeResultType { constructor: { new(): DatabaseSetDBUserOutputtypeResultType }; }

interface _DatabaseUserAclType extends BaseType {
	host?: string[];
}
export interface DatabaseUserAclType extends _DatabaseUserAclType { constructor: { new(): DatabaseUserAclType }; }
export var DatabaseUserAclType: { new(): DatabaseUserAclType };

interface _DatabaseUserRemoteAccessRulesType extends BaseType {
	ipAddress?: string[];
}
export interface DatabaseUserRemoteAccessRulesType extends _DatabaseUserRemoteAccessRulesType { constructor: { new(): DatabaseUserRemoteAccessRulesType }; }
export var DatabaseUserRemoteAccessRulesType: { new(): DatabaseUserRemoteAccessRulesType };

export type date = Date;
type _date = Primitive._Date;

export type datetime = Date;
type _datetime = Primitive._Date;

interface _dbServerInput extends BaseType {
	host: string;
	id: number;
	port: string;
	type: string;
}
export interface dbServerInput extends _dbServerInput { constructor: { new(): dbServerInput }; }
export var dbServerInput: { new(): dbServerInput };

interface _dbServerOutput extends BaseType {
	host: string;
	id: number;
	port: string;
	type: string;
}
export interface dbServerOutput extends _dbServerOutput { constructor: { new(): dbServerOutput }; }
export var dbServerOutput: { new(): dbServerOutput };

interface _DelMiscType extends BaseType {
	result: miscResultType[];
}
export interface DelMiscType extends _DelMiscType { constructor: { new(): DelMiscType }; }
export var DelMiscType: { new(): DelMiscType };

interface _DesciptorOperatorInputType extends BaseType {
	getClientlimits: DesciptorOperatorInputTypeGetClientlimitsType[];
	getClientpermissions: DesciptorOperatorInputTypeGetClientpermissionsType[];
	getDomainlimits: DesciptorOperatorInputTypeGetDomainlimitsType[];
	/** Retrieves descriptor of phiscal hosting on domain */
	getDomainphysicalhosting: DesciptorOperatorInputTypeGetDomainphysicalhostingType[];
	getDomainuserpermissions: DesciptorOperatorInputTypeGetDomainuserpermissionsType[];
}
export interface DesciptorOperatorInputType extends _DesciptorOperatorInputType { constructor: { new(): DesciptorOperatorInputType }; }
export var DesciptorOperatorInputType: { new(): DesciptorOperatorInputType };

interface _DesciptorOperatorInputTypeGetClientlimitsType extends BaseType {}
interface DesciptorOperatorInputTypeGetClientlimitsType extends _DesciptorOperatorInputTypeGetClientlimitsType { constructor: { new(): DesciptorOperatorInputTypeGetClientlimitsType }; }

interface _DesciptorOperatorInputTypeGetClientpermissionsType extends BaseType {}
interface DesciptorOperatorInputTypeGetClientpermissionsType extends _DesciptorOperatorInputTypeGetClientpermissionsType { constructor: { new(): DesciptorOperatorInputTypeGetClientpermissionsType }; }

interface _DesciptorOperatorInputTypeGetDomainlimitsType extends BaseType {}
interface DesciptorOperatorInputTypeGetDomainlimitsType extends _DesciptorOperatorInputTypeGetDomainlimitsType { constructor: { new(): DesciptorOperatorInputTypeGetDomainlimitsType }; }

interface _DesciptorOperatorInputTypeGetDomainphysicalhostingType extends BaseType {}
interface DesciptorOperatorInputTypeGetDomainphysicalhostingType extends _DesciptorOperatorInputTypeGetDomainphysicalhostingType { constructor: { new(): DesciptorOperatorInputTypeGetDomainphysicalhostingType }; }

interface _DesciptorOperatorInputTypeGetDomainuserpermissionsType extends BaseType {}
interface DesciptorOperatorInputTypeGetDomainuserpermissionsType extends _DesciptorOperatorInputTypeGetDomainuserpermissionsType { constructor: { new(): DesciptorOperatorInputTypeGetDomainuserpermissionsType }; }

interface _DesciptorOperatorOutputType extends BaseType {}
export interface DesciptorOperatorOutputType extends _DesciptorOperatorOutputType { constructor: { new(): DesciptorOperatorOutputType }; }
export var DesciptorOperatorOutputType: { new(): DesciptorOperatorOutputType };

interface _DisableAeType extends BaseType {
	result: resultType;
}
export interface DisableAeType extends _DisableAeType { constructor: { new(): DisableAeType }; }
export var DisableAeType: { new(): DisableAeType };

/** Disk usage */
interface _diskspaceStatType extends BaseType {
	/** Partotions or devices */
	device: diskspaceStatTypeDeviceType[];
}
export interface diskspaceStatType extends _diskspaceStatType { constructor: { new(): diskspaceStatType }; }
export var diskspaceStatType: { new(): diskspaceStatType };

interface _diskspaceStatTypeDeviceType extends BaseType {
	free: number;
	/** Partition or device name */
	name: string;
	total: number;
	used: number;
}
interface diskspaceStatTypeDeviceType extends _diskspaceStatTypeDeviceType { constructor: { new(): diskspaceStatTypeDeviceType }; }

type diskspaceStatTypeDeviceTypeNameType = string;
type _diskspaceStatTypeDeviceTypeNameType = Primitive._string;

interface _DNSDisableRemoteDNS extends BaseType {
	result: resultType;
}
export interface DNSDisableRemoteDNS extends _DNSDisableRemoteDNS { constructor: { new(): DNSDisableRemoteDNS }; }
export var DNSDisableRemoteDNS: { new(): DNSDisableRemoteDNS };

interface _DNSEnableRemoteDNS extends BaseType {
	result: resultType;
}
export interface DNSEnableRemoteDNS extends _DNSEnableRemoteDNS { constructor: { new(): DNSEnableRemoteDNS }; }
export var DNSEnableRemoteDNS: { new(): DNSEnableRemoteDNS };

interface _DNSGetRecursionOutputType extends BaseType {
	result: DNSGetRecursionOutputTypeResultType;
}
export interface DNSGetRecursionOutputType extends _DNSGetRecursionOutputType { constructor: { new(): DNSGetRecursionOutputType }; }
export var DNSGetRecursionOutputType: { new(): DNSGetRecursionOutputType };

interface _DNSGetRecursionOutputTypeResultType extends _resultType {
	value?: DNSRecursionValueType;
}
interface DNSGetRecursionOutputTypeResultType extends _DNSGetRecursionOutputTypeResultType { constructor: { new(): DNSGetRecursionOutputTypeResultType }; }

interface _DNSGetStatusRemoteDNS extends BaseType {
	result: DNSGetStatusRemoteDNSResultType;
}
export interface DNSGetStatusRemoteDNS extends _DNSGetStatusRemoteDNS { constructor: { new(): DNSGetStatusRemoteDNS }; }
export var DNSGetStatusRemoteDNS: { new(): DNSGetStatusRemoteDNS };

interface _DNSGetStatusRemoteDNSResultType extends _resultType {
	dnsStatus?: boolean;
}
interface DNSGetStatusRemoteDNSResultType extends _DNSGetStatusRemoteDNSResultType { constructor: { new(): DNSGetStatusRemoteDNSResultType }; }

interface _DNSGetSupportedRecursionOutputType extends BaseType {
	result: DNSGetSupportedRecursionOutputTypeResultType;
}
export interface DNSGetSupportedRecursionOutputType extends _DNSGetSupportedRecursionOutputType { constructor: { new(): DNSGetSupportedRecursionOutputType }; }
export var DNSGetSupportedRecursionOutputType: { new(): DNSGetSupportedRecursionOutputType };

interface _DNSGetSupportedRecursionOutputTypeResultType extends _resultType {
	value?: DNSRecursionValueType[];
}
interface DNSGetSupportedRecursionOutputTypeResultType extends _DNSGetSupportedRecursionOutputTypeResultType { constructor: { new(): DNSGetSupportedRecursionOutputTypeResultType }; }

/** DNS record */
interface _dnsRecord extends BaseType {
	host: string;
	opt?: string;
	siteAliasid?: number;
	siteId?: number;
	type: dnsRecordTypeType;
	value: string;
}
export interface dnsRecord extends _dnsRecord { constructor: { new(): dnsRecord }; }
export var dnsRecord: { new(): dnsRecord };

type dnsRecordTypeType = ("A" | "CNAME" | "PTR" | "MX" | "NS" | "TXT" | "SOA" | "AXFR" | "SRV" | "AAAA" | "DS" | "CAA");
interface _dnsRecordTypeType extends _string { content: dnsRecordTypeType; }

export type DNSRecursionValueType = ("on" | "off" | "local" | "localnets");
interface _DNSRecursionValueType extends _string { content: DNSRecursionValueType; }

interface _DNSResponseType extends BaseType {
	add_master_server: DNSResponseTypeAdd_master_serverType[];
	/** Add DNS record */
	add_rec: DNSResponseTypeAdd_recType[];
	add_to_acl: DNSResponseTypeAdd_to_aclType[];
	del_master_server: DNSResponseTypeDel_master_serverType[];
	/** Deleting result */
	del_rec: DNSResponseTypeDel_recType[];
	disable: DNSResponseTypeDisableType[];
	disableRemotedns: DNSDisableRemoteDNS[];
	enable: DNSResponseTypeEnableType[];
	enableRemotedns: DNSEnableRemoteDNS[];
	get: DNSResponseTypeGetType[];
	getRecursion: DNSGetRecursionOutputType[];
	getStatusremotedns: DNSGetStatusRemoteDNS[];
	getSupportedrecursion: DNSGetSupportedRecursionOutputType[];
	get_acl: DNSResponseTypeGet_aclType[];
	get_master_server: DNSResponseTypeGet_master_serverType[];
	/** Getting result */
	get_rec: DNSResponseTypeGet_recType[];
	remove_from_acl: DNSResponseTypeRemove_from_aclType[];
	set: DNSResponseTypeSetType[];
	setRecursion: DNSSetRecursionOutputType[];
	switch: DNSResponseTypeSwitchType[];
	syncWithtemplate: DNSResponseTypeSyncWithtemplateType[];
}
export interface DNSResponseType extends _DNSResponseType { constructor: { new(): DNSResponseType }; }
export var DNSResponseType: { new(): DNSResponseType };

interface _DNSResponseTypeAdd_master_serverType extends BaseType {
	result: DNSResponseTypeAdd_master_serverTypeResultType;
}
interface DNSResponseTypeAdd_master_serverType extends _DNSResponseTypeAdd_master_serverType { constructor: { new(): DNSResponseTypeAdd_master_serverType }; }

interface _DNSResponseTypeAdd_master_serverTypeResultType extends _resultType {
	id?: number;
}
interface DNSResponseTypeAdd_master_serverTypeResultType extends _DNSResponseTypeAdd_master_serverTypeResultType { constructor: { new(): DNSResponseTypeAdd_master_serverTypeResultType }; }

interface _DNSResponseTypeAdd_recType extends BaseType {
	result: DNSResponseTypeAdd_recTypeResultType;
}
interface DNSResponseTypeAdd_recType extends _DNSResponseTypeAdd_recType { constructor: { new(): DNSResponseTypeAdd_recType }; }

interface _DNSResponseTypeAdd_recTypeResultType extends _resultType {
	/** New Record ID */
	id?: number;
}
interface DNSResponseTypeAdd_recTypeResultType extends _DNSResponseTypeAdd_recTypeResultType { constructor: { new(): DNSResponseTypeAdd_recTypeResultType }; }

interface _DNSResponseTypeAdd_to_aclType extends BaseType {
	result?: aclResultType[];
}
interface DNSResponseTypeAdd_to_aclType extends _DNSResponseTypeAdd_to_aclType { constructor: { new(): DNSResponseTypeAdd_to_aclType }; }

interface _DNSResponseTypeDel_master_serverType extends BaseType {
	result: DNSResponseTypeDel_master_serverTypeResultType[];
}
interface DNSResponseTypeDel_master_serverType extends _DNSResponseTypeDel_master_serverType { constructor: { new(): DNSResponseTypeDel_master_serverType }; }

interface _DNSResponseTypeDel_master_serverTypeResultType extends _resultType {
	id?: number;
}
interface DNSResponseTypeDel_master_serverTypeResultType extends _DNSResponseTypeDel_master_serverTypeResultType { constructor: { new(): DNSResponseTypeDel_master_serverTypeResultType }; }

interface _DNSResponseTypeDel_recType extends BaseType {
	result?: DNSResponseTypeDel_recTypeResultType[];
}
interface DNSResponseTypeDel_recType extends _DNSResponseTypeDel_recType { constructor: { new(): DNSResponseTypeDel_recType }; }

interface _DNSResponseTypeDel_recTypeResultType extends _resultType {
	/** Record ID */
	id?: number;
}
interface DNSResponseTypeDel_recTypeResultType extends _DNSResponseTypeDel_recTypeResultType { constructor: { new(): DNSResponseTypeDel_recTypeResultType }; }

interface _DNSResponseTypeDisableType extends BaseType {
	result: resultOpType[];
}
interface DNSResponseTypeDisableType extends _DNSResponseTypeDisableType { constructor: { new(): DNSResponseTypeDisableType }; }

interface _DNSResponseTypeEnableType extends BaseType {
	result: resultOpType[];
}
interface DNSResponseTypeEnableType extends _DNSResponseTypeEnableType { constructor: { new(): DNSResponseTypeEnableType }; }

interface _DNSResponseTypeGet_aclType extends BaseType {
	result?: aclResultType[];
}
interface DNSResponseTypeGet_aclType extends _DNSResponseTypeGet_aclType { constructor: { new(): DNSResponseTypeGet_aclType }; }

interface _DNSResponseTypeGet_master_serverType extends BaseType {
	result: DNSResponseTypeGet_master_serverTypeResultType[];
}
interface DNSResponseTypeGet_master_serverType extends _DNSResponseTypeGet_master_serverType { constructor: { new(): DNSResponseTypeGet_master_serverType }; }

interface _DNSResponseTypeGet_master_serverTypeResultType extends _resultFilterType {
	ip_address?: string;
	siteAliasid?: number;
	siteId?: number;
}
interface DNSResponseTypeGet_master_serverTypeResultType extends _DNSResponseTypeGet_master_serverTypeResultType { constructor: { new(): DNSResponseTypeGet_master_serverTypeResultType }; }

interface _DNSResponseTypeGet_recType extends BaseType {
	result?: DNSResponseTypeGet_recTypeResultType[];
}
interface DNSResponseTypeGet_recType extends _DNSResponseTypeGet_recType { constructor: { new(): DNSResponseTypeGet_recType }; }

interface _DNSResponseTypeGet_recTypeResultType extends _resultType {
	/** Domain datas. Will not returned if status isn't "ok" */
	data?: dnsRecord;
	/** Record ID */
	id?: number;
}
interface DNSResponseTypeGet_recTypeResultType extends _DNSResponseTypeGet_recTypeResultType { constructor: { new(): DNSResponseTypeGet_recTypeResultType }; }

interface _DNSResponseTypeGetType extends BaseType {
	result: DNSResponseTypeGetTypeResultType[];
}
interface DNSResponseTypeGetType extends _DNSResponseTypeGetType { constructor: { new(): DNSResponseTypeGetType }; }

interface _DNSResponseTypeGetTypeResultType extends _resultType {
	siteAliasid?: number;
	siteId?: number;
	soa?: SOAType;
	zone_status?: ZoneStatusType;
	zone_type?: ZoneType;
}
interface DNSResponseTypeGetTypeResultType extends _DNSResponseTypeGetTypeResultType { constructor: { new(): DNSResponseTypeGetTypeResultType }; }

interface _DNSResponseTypeRemove_from_aclType extends BaseType {
	result?: aclResultType[];
}
interface DNSResponseTypeRemove_from_aclType extends _DNSResponseTypeRemove_from_aclType { constructor: { new(): DNSResponseTypeRemove_from_aclType }; }

interface _DNSResponseTypeSetType extends BaseType {
	result?: DNSResponseTypeSetTypeResultType[];
}
interface DNSResponseTypeSetType extends _DNSResponseTypeSetType { constructor: { new(): DNSResponseTypeSetType }; }

interface _DNSResponseTypeSetTypeResultType extends _resultType {
	siteAliasid?: number;
	siteId?: number;
}
interface DNSResponseTypeSetTypeResultType extends _DNSResponseTypeSetTypeResultType { constructor: { new(): DNSResponseTypeSetTypeResultType }; }

interface _DNSResponseTypeSwitchType extends BaseType {
	result: DNSResponseTypeSwitchTypeResultType[];
}
interface DNSResponseTypeSwitchType extends _DNSResponseTypeSwitchType { constructor: { new(): DNSResponseTypeSwitchType }; }

interface _DNSResponseTypeSwitchTypeResultType extends _resultType {
	siteAliasid?: number;
	siteId?: number;
}
interface DNSResponseTypeSwitchTypeResultType extends _DNSResponseTypeSwitchTypeResultType { constructor: { new(): DNSResponseTypeSwitchTypeResultType }; }

interface _DNSResponseTypeSyncWithtemplateType extends BaseType {
	result: resultType;
}
interface DNSResponseTypeSyncWithtemplateType extends _DNSResponseTypeSyncWithtemplateType { constructor: { new(): DNSResponseTypeSyncWithtemplateType }; }

interface _DNSSetRecursionOutputType extends BaseType {
	result: resultType;
}
export interface DNSSetRecursionOutputType extends _DNSSetRecursionOutputType { constructor: { new(): DNSSetRecursionOutputType }; }
export var DNSSetRecursionOutputType: { new(): DNSSetRecursionOutputType };

interface _DomainAddonTemplateAddInputType extends BaseType {
	externalId?: string;
	/** Physical hosting */
	hosting?: DomainAddonTemplateVrtHst;
	limits?: DomainAddonTemplateLimits;
	/** Template name */
	name: string;
	ownerId?: number;
	ownerLogin?: string;
	performance?: DomainPerformanceType;
	permissions?: domainPerms;
	phpSettings?: phpSettings;
}
export interface DomainAddonTemplateAddInputType extends _DomainAddonTemplateAddInputType { constructor: { new(): DomainAddonTemplateAddInputType }; }
export var DomainAddonTemplateAddInputType: { new(): DomainAddonTemplateAddInputType };

interface _DomainAddonTemplateAddOutputType extends BaseType {
	result: DomainAddonTemplateAddOutputTypeResultType;
}
export interface DomainAddonTemplateAddOutputType extends _DomainAddonTemplateAddOutputType { constructor: { new(): DomainAddonTemplateAddOutputType }; }
export var DomainAddonTemplateAddOutputType: { new(): DomainAddonTemplateAddOutputType };

interface _DomainAddonTemplateAddOutputTypeResultType extends _resultType {
	guid?: string;
	id?: number;
}
interface DomainAddonTemplateAddOutputTypeResultType extends _DomainAddonTemplateAddOutputTypeResultType { constructor: { new(): DomainAddonTemplateAddOutputTypeResultType }; }

interface _DomainAddonTemplateDeleteInputType extends BaseType {
	filter: DomainAddonTemplateFilterType;
	ownerId?: number;
	ownerLogin?: string;
}
export interface DomainAddonTemplateDeleteInputType extends _DomainAddonTemplateDeleteInputType { constructor: { new(): DomainAddonTemplateDeleteInputType }; }
export var DomainAddonTemplateDeleteInputType: { new(): DomainAddonTemplateDeleteInputType };

interface _DomainAddonTemplateDeleteOutputType extends _DomainAddonTemplateResultType {}
export interface DomainAddonTemplateDeleteOutputType extends _DomainAddonTemplateDeleteOutputType { constructor: { new(): DomainAddonTemplateDeleteOutputType }; }
export var DomainAddonTemplateDeleteOutputType: { new(): DomainAddonTemplateDeleteOutputType };

interface _DomainAddonTemplateDescriptorOutput extends _resultType {
	descriptor?: ObjectDescriptor;
	externalId?: string;
	guid?: string;
	id?: number;
	name?: string;
}
export interface DomainAddonTemplateDescriptorOutput extends _DomainAddonTemplateDescriptorOutput { constructor: { new(): DomainAddonTemplateDescriptorOutput }; }
export var DomainAddonTemplateDescriptorOutput: { new(): DomainAddonTemplateDescriptorOutput };

interface _DomainAddonTemplateDuplicateInputType extends BaseType {
	duplicateName: string;
	filter: DomainAddonTemplateFilterType;
	ownerId?: number;
	ownerLogin?: string;
}
export interface DomainAddonTemplateDuplicateInputType extends _DomainAddonTemplateDuplicateInputType { constructor: { new(): DomainAddonTemplateDuplicateInputType }; }
export var DomainAddonTemplateDuplicateInputType: { new(): DomainAddonTemplateDuplicateInputType };

interface _DomainAddonTemplateFilterType extends BaseType {
	externalId?: string[];
	guid?: string[];
	id?: number[];
	name?: string[];
}
export interface DomainAddonTemplateFilterType extends _DomainAddonTemplateFilterType { constructor: { new(): DomainAddonTemplateFilterType }; }
export var DomainAddonTemplateFilterType: { new(): DomainAddonTemplateFilterType };

interface _DomainAddonTemplateGetInputType extends BaseType {
	filter: DomainAddonTemplateFilterType;
	ownerAll?: NoneType;
	ownerId?: number;
	ownerLogin?: string;
}
export interface DomainAddonTemplateGetInputType extends _DomainAddonTemplateGetInputType { constructor: { new(): DomainAddonTemplateGetInputType }; }
export var DomainAddonTemplateGetInputType: { new(): DomainAddonTemplateGetInputType };

interface _DomainAddonTemplateGetOutputType extends BaseType {
	result: DomainAddonTemplateGetOutputTypeResultType[];
}
export interface DomainAddonTemplateGetOutputType extends _DomainAddonTemplateGetOutputType { constructor: { new(): DomainAddonTemplateGetOutputType }; }
export var DomainAddonTemplateGetOutputType: { new(): DomainAddonTemplateGetOutputType };

interface _DomainAddonTemplateGetOutputTypeResultType extends _resultType {
	externalId?: string;
	guid?: string;
	hosting?: DomainAddonTemplateGetOutputTypeResultTypeHostingType;
	id?: number;
	limits?: DomainAddonTemplateLimits;
	name?: string;
	ownerId?: number;
	ownerLogin?: string;
	packages?: DomainAddonTemplateGetOutputTypeResultTypePackagesType;
	performance?: DomainPerformanceType;
	permissions?: domainPerms;
	phpSettings?: phpSettings;
}
interface DomainAddonTemplateGetOutputTypeResultType extends _DomainAddonTemplateGetOutputTypeResultType { constructor: { new(): DomainAddonTemplateGetOutputTypeResultType }; }

interface _DomainAddonTemplateGetOutputTypeResultTypeHostingType extends BaseType {
	none: NoneType;
	vrt_hst: DomainAddonTemplateVrtHst;
}
interface DomainAddonTemplateGetOutputTypeResultTypeHostingType extends _DomainAddonTemplateGetOutputTypeResultTypeHostingType { constructor: { new(): DomainAddonTemplateGetOutputTypeResultTypeHostingType }; }

interface _DomainAddonTemplateGetOutputTypeResultTypePackagesType extends BaseType {
	package?: APSIdentifierType[];
}
interface DomainAddonTemplateGetOutputTypeResultTypePackagesType extends _DomainAddonTemplateGetOutputTypeResultTypePackagesType { constructor: { new(): DomainAddonTemplateGetOutputTypeResultTypePackagesType }; }

interface _DomainAddonTemplateInputType extends BaseType {
	add: DomainAddonTemplateAddInputType[];
	addPackage: ServicePlanAddonApplicationInput[];
	del: DomainAddonTemplateDeleteInputType[];
	duplicate: DomainAddonTemplateDuplicateInputType[];
	get: DomainAddonTemplateGetInputType[];
	getLimitdescriptor: DomainAddonTemplateGetInputType[];
	getPermissiondescriptor: DomainAddonTemplateGetInputType[];
	getPhysicalhostingdescriptor: DomainAddonTemplateGetInputType[];
	removePackage: ServicePlanAddonApplicationInput[];
	set: DomainAddonTemplateSetInputType[];
}
export interface DomainAddonTemplateInputType extends _DomainAddonTemplateInputType { constructor: { new(): DomainAddonTemplateInputType }; }
export var DomainAddonTemplateInputType: { new(): DomainAddonTemplateInputType };

/** Domain limits */
interface _DomainAddonTemplateLimits extends BaseType {
	limit?: PleskLimitType[];
}
export interface DomainAddonTemplateLimits extends _DomainAddonTemplateLimits { constructor: { new(): DomainAddonTemplateLimits }; }
export var DomainAddonTemplateLimits: { new(): DomainAddonTemplateLimits };

interface _DomainAddonTemplateMailPreferences extends BaseType {
	spamProtectsign?: boolean;
	webmail?: string;
}
export interface DomainAddonTemplateMailPreferences extends _DomainAddonTemplateMailPreferences { constructor: { new(): DomainAddonTemplateMailPreferences }; }
export var DomainAddonTemplateMailPreferences: { new(): DomainAddonTemplateMailPreferences };

interface _DomainAddonTemplateOutputType extends BaseType {
	add: DomainAddonTemplateAddOutputType[];
	addPackage: DomainAddonTemplateOutputTypeAddPackageType[];
	del: DomainAddonTemplateDeleteOutputType[];
	disableApsfilter: DomainAddonTemplateOutputTypeDisableApsfilterType[];
	duplicate: DomainAddonTemplateAddOutputType[];
	enableApsfilter: DomainAddonTemplateOutputTypeEnableApsfilterType[];
	get: DomainAddonTemplateGetOutputType[];
	getLimitdescriptor: DomainAddonTemplateOutputTypeGetLimitdescriptorType[];
	getPermissiondescriptor: DomainAddonTemplateOutputTypeGetPermissiondescriptorType[];
	getPhysicalhostingdescriptor: DomainAddonTemplateOutputTypeGetPhysicalhostingdescriptorType[];
	removePackage: DomainAddonTemplateOutputTypeRemovePackageType[];
	set: DomainAddonTemplateSetOutputType[];
}
export interface DomainAddonTemplateOutputType extends _DomainAddonTemplateOutputType { constructor: { new(): DomainAddonTemplateOutputType }; }
export var DomainAddonTemplateOutputType: { new(): DomainAddonTemplateOutputType };

interface _DomainAddonTemplateOutputTypeAddPackageType extends BaseType {
	result: resultFilterType[];
}
interface DomainAddonTemplateOutputTypeAddPackageType extends _DomainAddonTemplateOutputTypeAddPackageType { constructor: { new(): DomainAddonTemplateOutputTypeAddPackageType }; }

interface _DomainAddonTemplateOutputTypeDisableApsfilterType extends BaseType {
	result: resultFilterType[];
}
interface DomainAddonTemplateOutputTypeDisableApsfilterType extends _DomainAddonTemplateOutputTypeDisableApsfilterType { constructor: { new(): DomainAddonTemplateOutputTypeDisableApsfilterType }; }

interface _DomainAddonTemplateOutputTypeEnableApsfilterType extends BaseType {
	result: resultFilterType[];
}
interface DomainAddonTemplateOutputTypeEnableApsfilterType extends _DomainAddonTemplateOutputTypeEnableApsfilterType { constructor: { new(): DomainAddonTemplateOutputTypeEnableApsfilterType }; }

interface _DomainAddonTemplateOutputTypeGetLimitdescriptorType extends BaseType {
	result: DomainAddonTemplateDescriptorOutput[];
}
interface DomainAddonTemplateOutputTypeGetLimitdescriptorType extends _DomainAddonTemplateOutputTypeGetLimitdescriptorType { constructor: { new(): DomainAddonTemplateOutputTypeGetLimitdescriptorType }; }

interface _DomainAddonTemplateOutputTypeGetPermissiondescriptorType extends BaseType {
	result: DomainAddonTemplateDescriptorOutput[];
}
interface DomainAddonTemplateOutputTypeGetPermissiondescriptorType extends _DomainAddonTemplateOutputTypeGetPermissiondescriptorType { constructor: { new(): DomainAddonTemplateOutputTypeGetPermissiondescriptorType }; }

interface _DomainAddonTemplateOutputTypeGetPhysicalhostingdescriptorType extends BaseType {
	result: DomainAddonTemplateDescriptorOutput[];
}
interface DomainAddonTemplateOutputTypeGetPhysicalhostingdescriptorType extends _DomainAddonTemplateOutputTypeGetPhysicalhostingdescriptorType { constructor: { new(): DomainAddonTemplateOutputTypeGetPhysicalhostingdescriptorType }; }

interface _DomainAddonTemplateOutputTypeRemovePackageType extends BaseType {
	result: resultFilterType[];
}
interface DomainAddonTemplateOutputTypeRemovePackageType extends _DomainAddonTemplateOutputTypeRemovePackageType { constructor: { new(): DomainAddonTemplateOutputTypeRemovePackageType }; }

interface _DomainAddonTemplatePHosting extends BaseType {
	none: NoneType;
	vrt_hst: DomainAddonTemplateVrtHst;
}
export interface DomainAddonTemplatePHosting extends _DomainAddonTemplatePHosting { constructor: { new(): DomainAddonTemplatePHosting }; }
export var DomainAddonTemplatePHosting: { new(): DomainAddonTemplatePHosting };

interface _DomainAddonTemplateResultType extends BaseType {
	result: DomainAddonTemplateResultTypeResultType[];
}
export interface DomainAddonTemplateResultType extends _DomainAddonTemplateResultType { constructor: { new(): DomainAddonTemplateResultType }; }
export var DomainAddonTemplateResultType: { new(): DomainAddonTemplateResultType };

interface _DomainAddonTemplateResultTypeResultType extends _resultType {
	externalId?: string;
	guid?: string;
	id?: number;
	name?: string;
}
interface DomainAddonTemplateResultTypeResultType extends _DomainAddonTemplateResultTypeResultType { constructor: { new(): DomainAddonTemplateResultTypeResultType }; }

interface _DomainAddonTemplateSetInputType extends BaseType {
	externalId?: string;
	filter: DomainAddonTemplateFilterType;
	hosting?: DomainAddonTemplateVrtHst;
	limits?: DomainAddonTemplateLimits;
	name?: string;
	ownerId?: number;
	ownerLogin?: string;
	performance?: DomainPerformanceType;
	permissions?: domainPerms;
	phpSettings?: phpSettings;
}
export interface DomainAddonTemplateSetInputType extends _DomainAddonTemplateSetInputType { constructor: { new(): DomainAddonTemplateSetInputType }; }
export var DomainAddonTemplateSetInputType: { new(): DomainAddonTemplateSetInputType };

interface _DomainAddonTemplateSetOutputType extends _DomainAddonTemplateResultType {}
export interface DomainAddonTemplateSetOutputType extends _DomainAddonTemplateSetOutputType { constructor: { new(): DomainAddonTemplateSetOutputType }; }
export var DomainAddonTemplateSetOutputType: { new(): DomainAddonTemplateSetOutputType };

interface _DomainAddonTemplateVrtHst extends BaseType {
	property?: PleskPhysHostingPropertyType[];
}
export interface DomainAddonTemplateVrtHst extends _DomainAddonTemplateVrtHst { constructor: { new(): DomainAddonTemplateVrtHst }; }
export var DomainAddonTemplateVrtHst: { new(): DomainAddonTemplateVrtHst };

interface _DomainAliasResponseType extends BaseType {
	create: DomainAliasResponseTypeCreateType[];
	delete: DomainAliasResponseTypeDeleteType[];
	get: DomainAliasResponseTypeGetType[];
	getSupportedservices: DAGetSupportedServicesOutputType[];
	rename: DomainAliasResponseTypeRenameType[];
	set: DomainAliasResponseTypeSetType[];
}
export interface DomainAliasResponseType extends _DomainAliasResponseType { constructor: { new(): DomainAliasResponseType }; }
export var DomainAliasResponseType: { new(): DomainAliasResponseType };

interface _DomainAliasResponseTypeCreateType extends BaseType {
	result: aliasResultType;
}
interface DomainAliasResponseTypeCreateType extends _DomainAliasResponseTypeCreateType { constructor: { new(): DomainAliasResponseTypeCreateType }; }

interface _DomainAliasResponseTypeDeleteType extends BaseType {
	result: resultFilterType[];
}
interface DomainAliasResponseTypeDeleteType extends _DomainAliasResponseTypeDeleteType { constructor: { new(): DomainAliasResponseTypeDeleteType }; }

interface _DomainAliasResponseTypeGetType extends BaseType {
	result: DomainAliasResponseTypeGetTypeResultType[];
}
interface DomainAliasResponseTypeGetType extends _DomainAliasResponseTypeGetType { constructor: { new(): DomainAliasResponseTypeGetType }; }

interface _DomainAliasResponseTypeGetTypeResultType extends _resultFilterType {
	info?: aliasInfoType;
}
interface DomainAliasResponseTypeGetTypeResultType extends _DomainAliasResponseTypeGetTypeResultType { constructor: { new(): DomainAliasResponseTypeGetTypeResultType }; }

interface _DomainAliasResponseTypeRenameType extends BaseType {
	result: resultType;
}
interface DomainAliasResponseTypeRenameType extends _DomainAliasResponseTypeRenameType { constructor: { new(): DomainAliasResponseTypeRenameType }; }

interface _DomainAliasResponseTypeSetType extends BaseType {
	result: resultFilterType[];
}
interface DomainAliasResponseTypeSetType extends _DomainAliasResponseTypeSetType { constructor: { new(): DomainAliasResponseTypeSetType }; }

/** Data to be operated */
interface _domainDatasetType extends BaseType {}
export interface domainDatasetType extends _domainDatasetType { constructor: { new(): domainDatasetType }; }
export var domainDatasetType: { new(): domainDatasetType };

/** Domain Frame Forwarding Hosting */
interface _domainFFHostingBase extends BaseType {
	/** Destination URL */
	dest_url: string;
}
export interface domainFFHostingBase extends _domainFFHostingBase { constructor: { new(): domainFFHostingBase }; }
export var domainFFHostingBase: { new(): domainFFHostingBase };

/** Fliter domains list */
interface _domainFilterType extends BaseType {
	externalId?: string[];
	/** GUID */
	guid?: string[];
	/** ID ( ID in Plesk DB) */
	id?: number[];
	/** name (UTF-8) */
	name?: string[];
	ownerExternalid?: string[];
	/** Owners GUID */
	ownerGuid?: string[];
	/** Owner's ID */
	ownerId?: number[];
	/** Owner's login. */
	ownerLogin?: string[];
}
export interface domainFilterType extends _domainFilterType { constructor: { new(): domainFilterType }; }
export var domainFilterType: { new(): domainFilterType };

/** General domain information */
interface _domainGenInfoType extends BaseType {
	adminDescription?: string;
	asciiName: string;
	cr_date: Date;
	description?: string;
	/** Domain IP addresses in DNS A and AAAA records. Use it in case of unexisted domain hosting. */
	dns_ip_address?: string[];
	externalId: string;
	guid: string;
	htype: domainHType;
	/** Domain name to be displayed in UI */
	name: string;
	ownerId?: number;
	/** Exist only for admins clients(admin) */
	ownerLogin?: string;
	real_size: number;
	resellerDescription?: string;
	sbSiteuuid?: string;
	status: number;
	vendorGuid: string;
}
export interface domainGenInfoType extends _domainGenInfoType { constructor: { new(): domainGenInfoType }; }
export var domainGenInfoType: { new(): domainGenInfoType };

/** Domain Hosting (Plesk Agent specific) for 'get' operation */
interface _domainHostingAgentGet extends BaseType {
	/** Frame forwarding */
	frm_fwd: domainHostingAgentGetFrm_fwdType;
	/** Standard forwarding */
	std_fwd: domainHostingAgentGetStd_fwdType;
	/** Physical hosting */
	vrt_hst: domainHostingAgentGetVrt_hstType;
}
export interface domainHostingAgentGet extends _domainHostingAgentGet { constructor: { new(): domainHostingAgentGet }; }
export var domainHostingAgentGet: { new(): domainHostingAgentGet };

interface _domainHostingAgentGetFrm_fwdType extends _domainFFHostingBase {
	ip_address: string[];
}
interface domainHostingAgentGetFrm_fwdType extends _domainHostingAgentGetFrm_fwdType { constructor: { new(): domainHostingAgentGetFrm_fwdType }; }

interface _domainHostingAgentGetStd_fwdType extends _domainSFHostingBase {
	ip_address: string[];
}
interface domainHostingAgentGetStd_fwdType extends _domainHostingAgentGetStd_fwdType { constructor: { new(): domainHostingAgentGetStd_fwdType }; }

interface _domainHostingAgentGetVrt_hstType extends _domainPhHostingGet {
	ip_address: string[];
}
interface domainHostingAgentGetVrt_hstType extends _domainHostingAgentGetVrt_hstType { constructor: { new(): domainHostingAgentGetVrt_hstType }; }

/** Domain Hosting (Plesk Agent specific) for 'set' operation */
interface _domainHostingAgentSet extends BaseType {
	/** Frame forwarding */
	frm_fwd: domainHostingAgentSetFrm_fwdType;
	/** Standard forwarding */
	std_fwd: domainHostingAgentSetStd_fwdType;
	/** Physical hosting */
	vrt_hst: domainPhHostingSet;
}
export interface domainHostingAgentSet extends _domainHostingAgentSet { constructor: { new(): domainHostingAgentSet }; }
export var domainHostingAgentSet: { new(): domainHostingAgentSet };

interface _domainHostingAgentSetFrm_fwdType extends _domainFFHostingBase {
	ip_address?: string[];
}
interface domainHostingAgentSetFrm_fwdType extends _domainHostingAgentSetFrm_fwdType { constructor: { new(): domainHostingAgentSetFrm_fwdType }; }

interface _domainHostingAgentSetStd_fwdType extends _domainSFHostingBase {
	ip_address?: string[];
}
interface domainHostingAgentSetStd_fwdType extends _domainHostingAgentSetStd_fwdType { constructor: { new(): domainHostingAgentSetStd_fwdType }; }

/** Domain Hosting Type */
export type domainHType = ("vrt_hst" | "std_fwd" | "frm_fwd" | "none");
interface _domainHType extends _string { content: domainHType; }

interface _DomainInfo extends BaseType {
	id: string;
	name: string;
}
export interface DomainInfo extends _DomainInfo { constructor: { new(): DomainInfo }; }
export var DomainInfo: { new(): DomainInfo };

/** Domain limits */
interface _domainLimits extends BaseType {
	limit?: PleskLimitType[];
	overuse?: domainLimitsOveruseType;
}
export interface domainLimits extends _domainLimits { constructor: { new(): domainLimits }; }
export var domainLimits: { new(): domainLimits };

type domainLimitsOveruseType = ("block" | "normal" | "notify" | "not_suspend" | "not_suspend_notify");
interface _domainLimitsOveruseType extends _string { content: domainLimitsOveruseType; }

interface _domainListOutputType extends BaseType {
	domain?: domainListOutputTypeDomainType[];
}
export interface domainListOutputType extends _domainListOutputType { constructor: { new(): domainListOutputType }; }
export var domainListOutputType: { new(): domainListOutputType };

interface _domainListOutputTypeDomainType extends BaseType {
	asciiName: string;
	domainId?: number;
	externalId: string;
	guid: string;
	id: number;
	main: boolean;
	name: string;
	parentId?: number;
	/** Type of domain */
	type: domainListOutputTypeDomainTypeTypeType;
}
interface domainListOutputTypeDomainType extends _domainListOutputTypeDomainType { constructor: { new(): domainListOutputTypeDomainType }; }

type domainListOutputTypeDomainTypeTypeType = ("domain" | "subdomain" | "alias");
interface _domainListOutputTypeDomainTypeTypeType extends _string { content: domainListOutputTypeDomainTypeTypeType; }

/** Domain Login Name */
export type domainLogin = string;
type _domainLogin = _string;

/** Domain Name */
export type domainName = string;
type _domainName = _string;

interface _DomainPerformanceType extends BaseType {
	/** Maximum network use (KB/S); If value is equal -1 this parameter will be dosabled */
	bandwidth?: number;
	/** Connections limited to If value is equal -1 this parameter will be dosabled */
	max_connections?: number;
}
export interface DomainPerformanceType extends _DomainPerformanceType { constructor: { new(): DomainPerformanceType }; }
export var DomainPerformanceType: { new(): DomainPerformanceType };

/** Domain-level user permissions */
interface _domainPerms extends BaseType {
	permission?: PleskPermissionType[];
}
export interface domainPerms extends _domainPerms { constructor: { new(): domainPerms }; }
export var domainPerms: { new(): domainPerms };

/** Domain Physical Hosting for 'get' operation */
interface _domainPhHostingGet extends BaseType {
	property: PleskPhysHostingPropertyType[];
}
export interface domainPhHostingGet extends _domainPhHostingGet { constructor: { new(): domainPhHostingGet }; }
export var domainPhHostingGet: { new(): domainPhHostingGet };

/** Domain Physical Hosting for 'set' operation */
interface _domainPhHostingSet extends BaseType {
	ip_address?: string[];
	property?: PleskPhysHostingPropertyType[];
}
export interface domainPhHostingSet extends _domainPhHostingSet { constructor: { new(): domainPhHostingSet }; }
export var domainPhHostingSet: { new(): domainPhHostingSet };

/** Domain Preferences */
interface _domainPrefs extends BaseType {}
export interface domainPrefs extends _domainPrefs { constructor: { new(): domainPrefs }; }
export var domainPrefs: { new(): domainPrefs };

interface _DomainResponseType extends BaseType {
	/** Add domain */
	add: DomainResponseTypeAddType[];
	addPackage: DomainResponseTypeAddPackageType[];
	addPlanitem: DomainResponseTypeAddPlanitemType[];
	addSubscription: DomainResponseTypeAddSubscriptionType[];
	/** List domain control form buttons result */
	cform_buttons_list: DomainResponseTypeCform_buttons_listType[];
	dbServers: DomainResponseTypeDbServersType[];
	/** Deleting result */
	del: DomainResponseTypeDelType[];
	disableApsfilter: WebspaceApsFilterOutputType[];
	enableApsfilter: WebspaceApsFilterOutputType[];
	/** Getting result */
	get: DomainResponseTypeGetType[];
	getChanged: DomainResponseTypeGetChangedType[];
	getLimitdescriptor: DomainResponseTypeGetLimitdescriptorType[];
	getPermissiondescriptor: DomainResponseTypeGetPermissiondescriptorType[];
	getPhysicalhostingdescriptor: DomainResponseTypeGetPhysicalhostingdescriptorType[];
	get_traffic: DomainResponseTypeGet_trafficType[];
	removePackage: DomainResponseTypeRemovePackageType[];
	removePlanitem: DomainResponseTypeRemovePlanitemType[];
	removeSubscription: DomainResponseTypeRemoveSubscriptionType[];
	/** Updating result */
	set: DomainResponseTypeSetType[];
	set_traffic: DomainResponseTypeSet_trafficType[];
	switchSubscription: DomainResponseTypeSwitchSubscriptionType[];
	syncSubscription: DomainResponseTypeSyncSubscriptionType[];
}
export interface DomainResponseType extends _DomainResponseType { constructor: { new(): DomainResponseType }; }
export var DomainResponseType: { new(): DomainResponseType };

interface _DomainResponseTypeAddPackageType extends BaseType {
	result: resultFilterType[];
}
interface DomainResponseTypeAddPackageType extends _DomainResponseTypeAddPackageType { constructor: { new(): DomainResponseTypeAddPackageType }; }

interface _DomainResponseTypeAddPlanitemType extends BaseType {
	result: WebspacePlanItemResultType[];
}
interface DomainResponseTypeAddPlanitemType extends _DomainResponseTypeAddPlanitemType { constructor: { new(): DomainResponseTypeAddPlanitemType }; }

interface _DomainResponseTypeAddSubscriptionType extends BaseType {
	result?: DomainResponseTypeAddSubscriptionTypeResultType[];
}
interface DomainResponseTypeAddSubscriptionType extends _DomainResponseTypeAddSubscriptionType { constructor: { new(): DomainResponseTypeAddSubscriptionType }; }

interface _DomainResponseTypeAddSubscriptionTypeResultType extends _resultFilterType {
	problems?: string;
}
interface DomainResponseTypeAddSubscriptionTypeResultType extends _DomainResponseTypeAddSubscriptionTypeResultType { constructor: { new(): DomainResponseTypeAddSubscriptionTypeResultType }; }

interface _DomainResponseTypeAddType extends BaseType {
	result: DomainResponseTypeAddTypeResultType;
}
interface DomainResponseTypeAddType extends _DomainResponseTypeAddType { constructor: { new(): DomainResponseTypeAddType }; }

interface _DomainResponseTypeAddTypeResultType extends _resultType {
	/** New domain GUID */
	guid?: string;
	/** New domain ID */
	id?: number;
}
interface DomainResponseTypeAddTypeResultType extends _DomainResponseTypeAddTypeResultType { constructor: { new(): DomainResponseTypeAddTypeResultType }; }

interface _DomainResponseTypeCform_buttons_listType extends BaseType {
	result: DomainResponseTypeCform_buttons_listTypeResultType[];
}
interface DomainResponseTypeCform_buttons_listType extends _DomainResponseTypeCform_buttons_listType { constructor: { new(): DomainResponseTypeCform_buttons_listType }; }

interface _DomainResponseTypeCform_buttons_listTypeResultType extends _resultFilterType {
	/** BUttons list if no error occured */
	button?: buttonDataType[];
}
interface DomainResponseTypeCform_buttons_listTypeResultType extends _DomainResponseTypeCform_buttons_listTypeResultType { constructor: { new(): DomainResponseTypeCform_buttons_listTypeResultType }; }

interface _DomainResponseTypeDbServersType extends BaseType {
	add: DomainResponseTypeDbServersTypeAddType;
	list: WebspaceDbServerListOutputType;
	remove: DomainResponseTypeDbServersTypeRemoveType;
}
interface DomainResponseTypeDbServersType extends _DomainResponseTypeDbServersType { constructor: { new(): DomainResponseTypeDbServersType }; }

interface _DomainResponseTypeDbServersTypeAddType extends BaseType {
	result?: resultFilterType[];
}
interface DomainResponseTypeDbServersTypeAddType extends _DomainResponseTypeDbServersTypeAddType { constructor: { new(): DomainResponseTypeDbServersTypeAddType }; }

interface _DomainResponseTypeDbServersTypeRemoveType extends BaseType {
	result?: resultFilterType[];
}
interface DomainResponseTypeDbServersTypeRemoveType extends _DomainResponseTypeDbServersTypeRemoveType { constructor: { new(): DomainResponseTypeDbServersTypeRemoveType }; }

interface _DomainResponseTypeDelType extends BaseType {
	result?: resultFilterType[];
}
interface DomainResponseTypeDelType extends _DomainResponseTypeDelType { constructor: { new(): DomainResponseTypeDelType }; }

interface _DomainResponseTypeGet_trafficType extends BaseType {
	result?: DomainResponseTypeGet_trafficTypeResultType[];
}
interface DomainResponseTypeGet_trafficType extends _DomainResponseTypeGet_trafficType { constructor: { new(): DomainResponseTypeGet_trafficType }; }

interface _DomainResponseTypeGet_trafficTypeResultType extends _resultFilterType {
	traffic?: trafficType[];
}
interface DomainResponseTypeGet_trafficTypeResultType extends _DomainResponseTypeGet_trafficTypeResultType { constructor: { new(): DomainResponseTypeGet_trafficTypeResultType }; }

interface _DomainResponseTypeGetChangedType extends BaseType {
	result: DomainResponseTypeGetChangedTypeResultType;
}
interface DomainResponseTypeGetChangedType extends _DomainResponseTypeGetChangedType { constructor: { new(): DomainResponseTypeGetChangedType }; }

interface _DomainResponseTypeGetChangedTypeResultType extends _resultType {
	subscription?: DomainResponseTypeGetChangedTypeResultTypeSubscriptionType[];
}
interface DomainResponseTypeGetChangedTypeResultType extends _DomainResponseTypeGetChangedTypeResultType { constructor: { new(): DomainResponseTypeGetChangedTypeResultType }; }

interface _DomainResponseTypeGetChangedTypeResultTypeSubscriptionType extends BaseType {}
interface DomainResponseTypeGetChangedTypeResultTypeSubscriptionType extends _DomainResponseTypeGetChangedTypeResultTypeSubscriptionType { constructor: { new(): DomainResponseTypeGetChangedTypeResultTypeSubscriptionType }; }

interface _DomainResponseTypeGetLimitdescriptorType extends BaseType {
	result?: DomainResponseTypeGetLimitdescriptorTypeResultType[];
}
interface DomainResponseTypeGetLimitdescriptorType extends _DomainResponseTypeGetLimitdescriptorType { constructor: { new(): DomainResponseTypeGetLimitdescriptorType }; }

interface _DomainResponseTypeGetLimitdescriptorTypeResultType extends _resultFilterType {
	descriptor?: ObjectDescriptor;
}
interface DomainResponseTypeGetLimitdescriptorTypeResultType extends _DomainResponseTypeGetLimitdescriptorTypeResultType { constructor: { new(): DomainResponseTypeGetLimitdescriptorTypeResultType }; }

interface _DomainResponseTypeGetPermissiondescriptorType extends BaseType {
	result?: DomainResponseTypeGetPermissiondescriptorTypeResultType[];
}
interface DomainResponseTypeGetPermissiondescriptorType extends _DomainResponseTypeGetPermissiondescriptorType { constructor: { new(): DomainResponseTypeGetPermissiondescriptorType }; }

interface _DomainResponseTypeGetPermissiondescriptorTypeResultType extends _resultFilterType {
	descriptor?: ObjectDescriptor;
}
interface DomainResponseTypeGetPermissiondescriptorTypeResultType extends _DomainResponseTypeGetPermissiondescriptorTypeResultType { constructor: { new(): DomainResponseTypeGetPermissiondescriptorTypeResultType }; }

interface _DomainResponseTypeGetPhysicalhostingdescriptorType extends BaseType {
	result?: DomainResponseTypeGetPhysicalhostingdescriptorTypeResultType[];
}
interface DomainResponseTypeGetPhysicalhostingdescriptorType extends _DomainResponseTypeGetPhysicalhostingdescriptorType { constructor: { new(): DomainResponseTypeGetPhysicalhostingdescriptorType }; }

interface _DomainResponseTypeGetPhysicalhostingdescriptorTypeResultType extends _resultFilterType {
	descriptor?: ObjectDescriptor;
}
interface DomainResponseTypeGetPhysicalhostingdescriptorTypeResultType extends _DomainResponseTypeGetPhysicalhostingdescriptorTypeResultType { constructor: { new(): DomainResponseTypeGetPhysicalhostingdescriptorTypeResultType }; }

interface _DomainResponseTypeGetType extends BaseType {
	result?: DomainResponseTypeGetTypeResultType[];
}
interface DomainResponseTypeGetType extends _DomainResponseTypeGetType { constructor: { new(): DomainResponseTypeGetType }; }

interface _DomainResponseTypeGetTypeResultType extends _resultFilterType {
	/** Domain datas. Will not returned if status isn't "ok" */
	data?: DomainResponseTypeGetTypeResultTypeDataType;
}
interface DomainResponseTypeGetTypeResultType extends _DomainResponseTypeGetTypeResultType { constructor: { new(): DomainResponseTypeGetTypeResultType }; }

interface _DomainResponseTypeGetTypeResultTypeDataType extends BaseType {
	apsFilter?: boolean;
	disk_usage?: DomainResponseTypeGetTypeResultTypeDataTypeDisk_usageType;
	gen_info?: domainGenInfoType;
	hosting?: domainHostingAgentGet;
	hostingBasic?: domainHostingAgentGet;
	limits?: DomainResponseTypeGetTypeResultTypeDataTypeLimitsType;
	mail?: WebspaceMailPreferences;
	packages?: DomainResponseTypeGetTypeResultTypeDataTypePackagesType;
	performance?: DomainPerformanceType;
	permissions?: domainPerms;
	phpSettings?: phpSettings;
	planItems?: DomainResponseTypeGetTypeResultTypeDataTypePlanItemsType;
	prefs?: domainPrefs;
	resourceUsage?: resourceUsage;
	stat?: domainStat;
	subscriptions?: SubscriptionsList;
}
interface DomainResponseTypeGetTypeResultTypeDataType extends _DomainResponseTypeGetTypeResultTypeDataType { constructor: { new(): DomainResponseTypeGetTypeResultTypeDataType }; }

interface _DomainResponseTypeGetTypeResultTypeDataTypeDisk_usageType extends BaseType {
	anonftp: number;
	chroot?: number;
	configs?: number;
	/** for Unix Plesk */
	dbases: number;
	domaindumps: number;
	httpdocs: number;
	httpsdocs: number;
	logs: number;
	mailboxes: number;
	maillists: number;
	/** for Win Plesk */
	mssql_dbases: number;
	/** for Win Plesk */
	mysql_dbases: number;
	subdomains: number;
	web_users: number;
}
interface DomainResponseTypeGetTypeResultTypeDataTypeDisk_usageType extends _DomainResponseTypeGetTypeResultTypeDataTypeDisk_usageType { constructor: { new(): DomainResponseTypeGetTypeResultTypeDataTypeDisk_usageType }; }

interface _DomainResponseTypeGetTypeResultTypeDataTypeLimitsType extends _domainLimits {}
interface DomainResponseTypeGetTypeResultTypeDataTypeLimitsType extends _DomainResponseTypeGetTypeResultTypeDataTypeLimitsType { constructor: { new(): DomainResponseTypeGetTypeResultTypeDataTypeLimitsType }; }

interface _DomainResponseTypeGetTypeResultTypeDataTypePackagesType extends BaseType {
	package?: APSIdentifierType[];
}
interface DomainResponseTypeGetTypeResultTypeDataTypePackagesType extends _DomainResponseTypeGetTypeResultTypeDataTypePackagesType { constructor: { new(): DomainResponseTypeGetTypeResultTypeDataTypePackagesType }; }

interface _DomainResponseTypeGetTypeResultTypeDataTypePlanItemsType extends BaseType {
	item?: DomainResponseTypeGetTypeResultTypeDataTypePlanItemsTypeItemType[];
}
interface DomainResponseTypeGetTypeResultTypeDataTypePlanItemsType extends _DomainResponseTypeGetTypeResultTypeDataTypePlanItemsType { constructor: { new(): DomainResponseTypeGetTypeResultTypeDataTypePlanItemsType }; }

interface _DomainResponseTypeGetTypeResultTypeDataTypePlanItemsTypeItemType extends BaseType {
	name: string;
}
interface DomainResponseTypeGetTypeResultTypeDataTypePlanItemsTypeItemType extends _DomainResponseTypeGetTypeResultTypeDataTypePlanItemsTypeItemType { constructor: { new(): DomainResponseTypeGetTypeResultTypeDataTypePlanItemsTypeItemType }; }

interface _DomainResponseTypeRemovePackageType extends BaseType {
	result: resultFilterType[];
}
interface DomainResponseTypeRemovePackageType extends _DomainResponseTypeRemovePackageType { constructor: { new(): DomainResponseTypeRemovePackageType }; }

interface _DomainResponseTypeRemovePlanitemType extends BaseType {
	result: WebspacePlanItemResultType[];
}
interface DomainResponseTypeRemovePlanitemType extends _DomainResponseTypeRemovePlanitemType { constructor: { new(): DomainResponseTypeRemovePlanitemType }; }

interface _DomainResponseTypeRemoveSubscriptionType extends BaseType {
	result?: DomainResponseTypeRemoveSubscriptionTypeResultType[];
}
interface DomainResponseTypeRemoveSubscriptionType extends _DomainResponseTypeRemoveSubscriptionType { constructor: { new(): DomainResponseTypeRemoveSubscriptionType }; }

interface _DomainResponseTypeRemoveSubscriptionTypeResultType extends _resultFilterType {
	problems?: string;
}
interface DomainResponseTypeRemoveSubscriptionTypeResultType extends _DomainResponseTypeRemoveSubscriptionTypeResultType { constructor: { new(): DomainResponseTypeRemoveSubscriptionTypeResultType }; }

interface _DomainResponseTypeSet_trafficType extends BaseType {
	result: DomainResponseTypeSet_trafficTypeResultType;
}
interface DomainResponseTypeSet_trafficType extends _DomainResponseTypeSet_trafficType { constructor: { new(): DomainResponseTypeSet_trafficType }; }

interface _DomainResponseTypeSet_trafficTypeResultType extends _resultType {
	id?: number;
}
interface DomainResponseTypeSet_trafficTypeResultType extends _DomainResponseTypeSet_trafficTypeResultType { constructor: { new(): DomainResponseTypeSet_trafficTypeResultType }; }

interface _DomainResponseTypeSetType extends BaseType {
	result?: resultFilterType[];
}
interface DomainResponseTypeSetType extends _DomainResponseTypeSetType { constructor: { new(): DomainResponseTypeSetType }; }

interface _DomainResponseTypeSwitchSubscriptionType extends BaseType {
	result?: DomainResponseTypeSwitchSubscriptionTypeResultType[];
}
interface DomainResponseTypeSwitchSubscriptionType extends _DomainResponseTypeSwitchSubscriptionType { constructor: { new(): DomainResponseTypeSwitchSubscriptionType }; }

interface _DomainResponseTypeSwitchSubscriptionTypeResultType extends _resultFilterType {
	problems?: string;
}
interface DomainResponseTypeSwitchSubscriptionTypeResultType extends _DomainResponseTypeSwitchSubscriptionTypeResultType { constructor: { new(): DomainResponseTypeSwitchSubscriptionTypeResultType }; }

interface _DomainResponseTypeSyncSubscriptionType extends BaseType {
	result: DomainResponseTypeSyncSubscriptionTypeResultType[];
}
interface DomainResponseTypeSyncSubscriptionType extends _DomainResponseTypeSyncSubscriptionType { constructor: { new(): DomainResponseTypeSyncSubscriptionType }; }

interface _DomainResponseTypeSyncSubscriptionTypeResultType extends _resultFilterType {
	problems?: string;
}
interface DomainResponseTypeSyncSubscriptionTypeResultType extends _DomainResponseTypeSyncSubscriptionTypeResultType { constructor: { new(): DomainResponseTypeSyncSubscriptionTypeResultType }; }

interface _DomainRestrictionAddType extends BaseType {
	name: string;
}
export interface DomainRestrictionAddType extends _DomainRestrictionAddType { constructor: { new(): DomainRestrictionAddType }; }
export var DomainRestrictionAddType: { new(): DomainRestrictionAddType };

interface _DomainRestrictionDisableType extends BaseType {}
export interface DomainRestrictionDisableType extends _DomainRestrictionDisableType { constructor: { new(): DomainRestrictionDisableType }; }
export var DomainRestrictionDisableType: { new(): DomainRestrictionDisableType };

interface _DomainRestrictionEnableType extends BaseType {}
export interface DomainRestrictionEnableType extends _DomainRestrictionEnableType { constructor: { new(): DomainRestrictionEnableType }; }
export var DomainRestrictionEnableType: { new(): DomainRestrictionEnableType };

interface _DomainRestrictionListType extends BaseType {}
export interface DomainRestrictionListType extends _DomainRestrictionListType { constructor: { new(): DomainRestrictionListType }; }
export var DomainRestrictionListType: { new(): DomainRestrictionListType };

interface _DomainRestrictionRemoveType extends BaseType {
	name: string;
}
export interface DomainRestrictionRemoveType extends _DomainRestrictionRemoveType { constructor: { new(): DomainRestrictionRemoveType }; }
export var DomainRestrictionRemoveType: { new(): DomainRestrictionRemoveType };

interface _DomainRestrictionRenameType extends BaseType {
	name: string;
	newName: string;
}
export interface DomainRestrictionRenameType extends _DomainRestrictionRenameType { constructor: { new(): DomainRestrictionRenameType }; }
export var DomainRestrictionRenameType: { new(): DomainRestrictionRenameType };

/** Domain Standart Forwarding Hosting */
interface _domainSFHostingBase extends BaseType {
	/** Destination URL */
	dest_url: string;
	/** Forwarding HTTP code */
	http_code?: number;
}
export interface domainSFHostingBase extends _domainSFHostingBase { constructor: { new(): domainSFHostingBase }; }
export var domainSFHostingBase: { new(): domainSFHostingBase };

/** Domain statistics */
interface _domainStat extends BaseType {}
export interface domainStat extends _domainStat { constructor: { new(): domainStat }; }
export var domainStat: { new(): domainStat };

interface _DomainTemplateAddInputType extends BaseType {
	externalId?: string;
	/** Physical hosting */
	hosting?: DomainTemplateVrtHst;
	hostingType?: DomainTemplateAddInputTypeHostingTypeType;
	limits?: domainLimits;
	/** Enable log rotation */
	logRotation?: LogRotationType;
	mail?: DomainTemplateMailPreferences;
	/** Template name */
	name: string;
	ownerId?: number;
	ownerLogin?: string;
	performance?: DomainPerformanceType;
	permissions?: domainPerms;
	phpSettings?: phpSettings;
	preferences?: DomainTemplatePreferecesType;
	webServersettings?: webServerSettings;
}
export interface DomainTemplateAddInputType extends _DomainTemplateAddInputType { constructor: { new(): DomainTemplateAddInputType }; }
export var DomainTemplateAddInputType: { new(): DomainTemplateAddInputType };

type DomainTemplateAddInputTypeHostingTypeType = ("none" | "vrt_hst");
interface _DomainTemplateAddInputTypeHostingTypeType extends Primitive._string { content: DomainTemplateAddInputTypeHostingTypeType; }

interface _DomainTemplateAddOutputType extends BaseType {
	result: DomainTemplateAddOutputTypeResultType;
}
export interface DomainTemplateAddOutputType extends _DomainTemplateAddOutputType { constructor: { new(): DomainTemplateAddOutputType }; }
export var DomainTemplateAddOutputType: { new(): DomainTemplateAddOutputType };

interface _DomainTemplateAddOutputTypeResultType extends _resultType {
	guid?: string;
	id?: number;
}
interface DomainTemplateAddOutputTypeResultType extends _DomainTemplateAddOutputTypeResultType { constructor: { new(): DomainTemplateAddOutputTypeResultType }; }

interface _DomainTemplateDbServerInput extends BaseType {
	dbServer: dbServerInput[];
	filter: DomainTemplateFilterType;
}
export interface DomainTemplateDbServerInput extends _DomainTemplateDbServerInput { constructor: { new(): DomainTemplateDbServerInput }; }
export var DomainTemplateDbServerInput: { new(): DomainTemplateDbServerInput };

interface _DomainTemplateDbServersInputType extends BaseType {
	add: DomainTemplateDbServerInput;
	list: DomainTemplateDbServersInputTypeListType;
	remove: DomainTemplateDbServerInput;
}
export interface DomainTemplateDbServersInputType extends _DomainTemplateDbServersInputType { constructor: { new(): DomainTemplateDbServersInputType }; }
export var DomainTemplateDbServersInputType: { new(): DomainTemplateDbServersInputType };

interface _DomainTemplateDbServersInputTypeListType extends BaseType {
	filter: DomainTemplateFilterType;
}
interface DomainTemplateDbServersInputTypeListType extends _DomainTemplateDbServersInputTypeListType { constructor: { new(): DomainTemplateDbServersInputTypeListType }; }

interface _DomainTemplateDbServersOutputType extends BaseType {
	add: DomainTemplateDbServersOutputTypeAddType;
	list: DomainTemplateDbServersOutputTypeListType;
	remove: DomainTemplateDbServersOutputTypeRemoveType;
}
export interface DomainTemplateDbServersOutputType extends _DomainTemplateDbServersOutputType { constructor: { new(): DomainTemplateDbServersOutputType }; }
export var DomainTemplateDbServersOutputType: { new(): DomainTemplateDbServersOutputType };

interface _DomainTemplateDbServersOutputTypeAddType extends BaseType {
	result: resultFilterType[];
}
interface DomainTemplateDbServersOutputTypeAddType extends _DomainTemplateDbServersOutputTypeAddType { constructor: { new(): DomainTemplateDbServersOutputTypeAddType }; }

interface _DomainTemplateDbServersOutputTypeListType extends BaseType {
	result: DomainTemplateDbServersOutputTypeListTypeResultType;
}
interface DomainTemplateDbServersOutputTypeListType extends _DomainTemplateDbServersOutputTypeListType { constructor: { new(): DomainTemplateDbServersOutputTypeListType }; }

interface _DomainTemplateDbServersOutputTypeListTypeResultType extends _resultFilterType {
	dbServer?: dbServerOutput[];
}
interface DomainTemplateDbServersOutputTypeListTypeResultType extends _DomainTemplateDbServersOutputTypeListTypeResultType { constructor: { new(): DomainTemplateDbServersOutputTypeListTypeResultType }; }

interface _DomainTemplateDbServersOutputTypeRemoveType extends BaseType {
	result: resultFilterType[];
}
interface DomainTemplateDbServersOutputTypeRemoveType extends _DomainTemplateDbServersOutputTypeRemoveType { constructor: { new(): DomainTemplateDbServersOutputTypeRemoveType }; }

interface _DomainTemplateDeleteOutputType extends _DomainTemplateResultType {}
export interface DomainTemplateDeleteOutputType extends _DomainTemplateDeleteOutputType { constructor: { new(): DomainTemplateDeleteOutputType }; }
export var DomainTemplateDeleteOutputType: { new(): DomainTemplateDeleteOutputType };

interface _DomainTemplateDescriptorOutput extends _resultType {
	descriptor?: ObjectDescriptor;
	externalId?: string;
	guid?: string;
	id?: number;
	name?: string;
}
export interface DomainTemplateDescriptorOutput extends _DomainTemplateDescriptorOutput { constructor: { new(): DomainTemplateDescriptorOutput }; }
export var DomainTemplateDescriptorOutput: { new(): DomainTemplateDescriptorOutput };

interface _DomainTemplateDuplicateInputType extends BaseType {
	duplicateName: string;
	filter: DomainTemplateFilterType;
	ownerId?: number;
	ownerLogin?: string;
}
export interface DomainTemplateDuplicateInputType extends _DomainTemplateDuplicateInputType { constructor: { new(): DomainTemplateDuplicateInputType }; }
export var DomainTemplateDuplicateInputType: { new(): DomainTemplateDuplicateInputType };

interface _DomainTemplateFilterType extends BaseType {
	externalId?: string[];
	guid?: string[];
	id?: number[];
	name?: string[];
}
export interface DomainTemplateFilterType extends _DomainTemplateFilterType { constructor: { new(): DomainTemplateFilterType }; }
export var DomainTemplateFilterType: { new(): DomainTemplateFilterType };

interface _DomainTemplateGetInputType extends BaseType {
	filter: DomainTemplateFilterType;
	ownerAll?: NoneType;
	ownerId?: number;
	ownerLogin?: string;
}
export interface DomainTemplateGetInputType extends _DomainTemplateGetInputType { constructor: { new(): DomainTemplateGetInputType }; }
export var DomainTemplateGetInputType: { new(): DomainTemplateGetInputType };

interface _DomainTemplateGetOutputType extends BaseType {
	result: DomainTemplateGetOutputTypeResultType[];
}
export interface DomainTemplateGetOutputType extends _DomainTemplateGetOutputType { constructor: { new(): DomainTemplateGetOutputType }; }
export var DomainTemplateGetOutputType: { new(): DomainTemplateGetOutputType };

interface _DomainTemplateGetOutputTypeResultType extends _resultType {
	apsFilter?: boolean;
	externalId?: string;
	guid?: string;
	hosting?: DomainTemplateGetOutputTypeResultTypeHostingType;
	id?: number;
	limits?: domainLimits;
	logRotation?: LogRotationType;
	mail?: DomainTemplateMailPreferences;
	name?: string;
	ownerId?: number;
	ownerLogin?: string;
	packages?: DomainTemplateGetOutputTypeResultTypePackagesType;
	performance?: DomainPerformanceType;
	permissions?: domainPerms;
	phpSettings?: phpSettings;
	planItems?: DomainTemplateGetOutputTypeResultTypePlanItemsType;
	preferences?: DomainTemplatePreferecesType;
	webServersettings?: webServerSettings;
}
interface DomainTemplateGetOutputTypeResultType extends _DomainTemplateGetOutputTypeResultType { constructor: { new(): DomainTemplateGetOutputTypeResultType }; }

interface _DomainTemplateGetOutputTypeResultTypeHostingType extends BaseType {
	none: NoneType;
	vrt_hst: DomainTemplateVrtHst;
}
interface DomainTemplateGetOutputTypeResultTypeHostingType extends _DomainTemplateGetOutputTypeResultTypeHostingType { constructor: { new(): DomainTemplateGetOutputTypeResultTypeHostingType }; }

interface _DomainTemplateGetOutputTypeResultTypePackagesType extends BaseType {
	package?: APSIdentifierType[];
}
interface DomainTemplateGetOutputTypeResultTypePackagesType extends _DomainTemplateGetOutputTypeResultTypePackagesType { constructor: { new(): DomainTemplateGetOutputTypeResultTypePackagesType }; }

interface _DomainTemplateGetOutputTypeResultTypePlanItemsType extends BaseType {
	item?: DomainTemplateGetOutputTypeResultTypePlanItemsTypeItemType[];
}
interface DomainTemplateGetOutputTypeResultTypePlanItemsType extends _DomainTemplateGetOutputTypeResultTypePlanItemsType { constructor: { new(): DomainTemplateGetOutputTypeResultTypePlanItemsType }; }

interface _DomainTemplateGetOutputTypeResultTypePlanItemsTypeItemType extends BaseType {
	name: string;
}
interface DomainTemplateGetOutputTypeResultTypePlanItemsTypeItemType extends _DomainTemplateGetOutputTypeResultTypePlanItemsTypeItemType { constructor: { new(): DomainTemplateGetOutputTypeResultTypePlanItemsTypeItemType }; }

interface _DomainTemplateInputType extends BaseType {
	add: DomainTemplateAddInputType[];
	addPackage: ServicePlanApplicationInput[];
	addPlanitem: ServicePlanPlanItemInputType[];
	dbServers: DomainTemplateDbServersInputType[];
	del: DomanTemplateDeleteInputType[];
	disableApsfilter: ServicePlanApsFilterInputType[];
	duplicate: DomainTemplateDuplicateInputType[];
	enableApsfilter: ServicePlanApsFilterInputType[];
	get: DomainTemplateGetInputType[];
	getLimitdescriptor: DomainTemplateGetInputType[];
	getPermissiondescriptor: DomainTemplateGetInputType[];
	getPhysicalhostingdescriptor: DomainTemplateGetInputType[];
	removePackage: ServicePlanApplicationInput[];
	removePlanitem: ServicePlanPlanItemInputType[];
	set: DomainTemplateSetInputType[];
}
export interface DomainTemplateInputType extends _DomainTemplateInputType { constructor: { new(): DomainTemplateInputType }; }
export var DomainTemplateInputType: { new(): DomainTemplateInputType };

interface _DomainTemplateMailPreferences extends BaseType {
	maillists?: boolean;
	mailservice?: boolean;
	nonexistentUser?: DomainTemplateMailPreferencesNonexistentUserType;
	/** Domain outgoing messages (per hour) */
	outgoingMessagesdomainlimit?: string;
	/** Scripts will be able to send mail even when the limits on outgoing messages are reached for the corresponding mailbox and domain. */
	outgoingMessagesenablesendmail?: booleanWithDefault;
	/** Mailname outgoing messages (per hour) */
	outgoingMessagesmboxlimit?: string;
	/** Percentage of email messages to accept into mail queue and retry for delivery in next hour */
	outgoingMessagesoverlimitpercent?: number;
	/** Subscription outgoing messages (per hour) */
	outgoingMessagessubscriptionlimit?: string;
	webmail?: string;
}
export interface DomainTemplateMailPreferences extends _DomainTemplateMailPreferences { constructor: { new(): DomainTemplateMailPreferences }; }
export var DomainTemplateMailPreferences: { new(): DomainTemplateMailPreferences };

interface _DomainTemplateMailPreferencesNonexistentUserType extends BaseType {
	/** Bounce with message */
	bounce: string;
	/** Forward to address */
	forward: string;
}
interface DomainTemplateMailPreferencesNonexistentUserType extends _DomainTemplateMailPreferencesNonexistentUserType { constructor: { new(): DomainTemplateMailPreferencesNonexistentUserType }; }

interface _DomainTemplateOutputType extends BaseType {
	add: DomainTemplateAddOutputType[];
	addPackage: DomainTemplateOutputTypeAddPackageType[];
	addPlanitem: DomainTemplateOutputTypeAddPlanitemType[];
	dbServers: DomainTemplateDbServersOutputType[];
	del: DomainTemplateDeleteOutputType[];
	disableApsfilter: DomainTemplateOutputTypeDisableApsfilterType[];
	duplicate: DomainTemplateAddOutputType[];
	enableApsfilter: DomainTemplateOutputTypeEnableApsfilterType[];
	get: DomainTemplateGetOutputType[];
	getLimitdescriptor: DomainTemplateOutputTypeGetLimitdescriptorType[];
	getPermissiondescriptor: DomainTemplateOutputTypeGetPermissiondescriptorType[];
	getPhysicalhostingdescriptor: DomainTemplateOutputTypeGetPhysicalhostingdescriptorType[];
	removePackage: DomainTemplateOutputTypeRemovePackageType[];
	removePlanitem: DomainTemplateOutputTypeRemovePlanitemType[];
	set: DomainTemplateSetOutputType[];
}
export interface DomainTemplateOutputType extends _DomainTemplateOutputType { constructor: { new(): DomainTemplateOutputType }; }
export var DomainTemplateOutputType: { new(): DomainTemplateOutputType };

interface _DomainTemplateOutputTypeAddPackageType extends BaseType {
	result: DomainTemplateResultFilterType[];
}
interface DomainTemplateOutputTypeAddPackageType extends _DomainTemplateOutputTypeAddPackageType { constructor: { new(): DomainTemplateOutputTypeAddPackageType }; }

interface _DomainTemplateOutputTypeAddPlanitemType extends BaseType {
	result: DomainTemplatePlanItemResultType[];
}
interface DomainTemplateOutputTypeAddPlanitemType extends _DomainTemplateOutputTypeAddPlanitemType { constructor: { new(): DomainTemplateOutputTypeAddPlanitemType }; }

interface _DomainTemplateOutputTypeDisableApsfilterType extends BaseType {
	result: DomainTemplateResultFilterType[];
}
interface DomainTemplateOutputTypeDisableApsfilterType extends _DomainTemplateOutputTypeDisableApsfilterType { constructor: { new(): DomainTemplateOutputTypeDisableApsfilterType }; }

interface _DomainTemplateOutputTypeEnableApsfilterType extends BaseType {
	result: DomainTemplateResultFilterType[];
}
interface DomainTemplateOutputTypeEnableApsfilterType extends _DomainTemplateOutputTypeEnableApsfilterType { constructor: { new(): DomainTemplateOutputTypeEnableApsfilterType }; }

interface _DomainTemplateOutputTypeGetLimitdescriptorType extends BaseType {
	result: DomainTemplateDescriptorOutput[];
}
interface DomainTemplateOutputTypeGetLimitdescriptorType extends _DomainTemplateOutputTypeGetLimitdescriptorType { constructor: { new(): DomainTemplateOutputTypeGetLimitdescriptorType }; }

interface _DomainTemplateOutputTypeGetPermissiondescriptorType extends BaseType {
	result: DomainTemplateDescriptorOutput[];
}
interface DomainTemplateOutputTypeGetPermissiondescriptorType extends _DomainTemplateOutputTypeGetPermissiondescriptorType { constructor: { new(): DomainTemplateOutputTypeGetPermissiondescriptorType }; }

interface _DomainTemplateOutputTypeGetPhysicalhostingdescriptorType extends BaseType {
	result: DomainTemplateDescriptorOutput[];
}
interface DomainTemplateOutputTypeGetPhysicalhostingdescriptorType extends _DomainTemplateOutputTypeGetPhysicalhostingdescriptorType { constructor: { new(): DomainTemplateOutputTypeGetPhysicalhostingdescriptorType }; }

interface _DomainTemplateOutputTypeRemovePackageType extends BaseType {
	result: DomainTemplateResultFilterType[];
}
interface DomainTemplateOutputTypeRemovePackageType extends _DomainTemplateOutputTypeRemovePackageType { constructor: { new(): DomainTemplateOutputTypeRemovePackageType }; }

interface _DomainTemplateOutputTypeRemovePlanitemType extends BaseType {
	result: DomainTemplatePlanItemResultType[];
}
interface DomainTemplateOutputTypeRemovePlanitemType extends _DomainTemplateOutputTypeRemovePlanitemType { constructor: { new(): DomainTemplateOutputTypeRemovePlanitemType }; }

interface _DomainTemplatePHostingPreferences extends BaseType {}
export interface DomainTemplatePHostingPreferences extends _DomainTemplatePHostingPreferences { constructor: { new(): DomainTemplatePHostingPreferences }; }
export var DomainTemplatePHostingPreferences: { new(): DomainTemplatePHostingPreferences };

interface _DomainTemplatePlanItemResultType extends _resultType {
	externalId?: string;
	guid?: string;
	id?: number;
	item?: string;
	name?: string;
}
export interface DomainTemplatePlanItemResultType extends _DomainTemplatePlanItemResultType { constructor: { new(): DomainTemplatePlanItemResultType }; }
export var DomainTemplatePlanItemResultType: { new(): DomainTemplatePlanItemResultType };

interface _DomainTemplatePreferecesType extends BaseType {
	dns_zone_type?: ZoneType;
	maillists?: boolean;
	mailservice?: boolean;
	stat?: number;
}
export interface DomainTemplatePreferecesType extends _DomainTemplatePreferecesType { constructor: { new(): DomainTemplatePreferecesType }; }
export var DomainTemplatePreferecesType: { new(): DomainTemplatePreferecesType };

interface _DomainTemplateResultFilterType extends _resultFilterType {
	problems?: string;
}
export interface DomainTemplateResultFilterType extends _DomainTemplateResultFilterType { constructor: { new(): DomainTemplateResultFilterType }; }
export var DomainTemplateResultFilterType: { new(): DomainTemplateResultFilterType };

interface _DomainTemplateResultType extends BaseType {
	result: DomainTemplateResultTypeResultType[];
}
export interface DomainTemplateResultType extends _DomainTemplateResultType { constructor: { new(): DomainTemplateResultType }; }
export var DomainTemplateResultType: { new(): DomainTemplateResultType };

interface _DomainTemplateResultTypeResultType extends _resultType {
	externalId?: string;
	guid?: string;
	id?: number;
	name?: string;
	problems?: string;
}
interface DomainTemplateResultTypeResultType extends _DomainTemplateResultTypeResultType { constructor: { new(): DomainTemplateResultTypeResultType }; }

interface _DomainTemplateSetInputType extends BaseType {
	externalId?: string;
	filter: DomainTemplateFilterType;
	hosting?: DomanTemplatePHosting;
	limits?: domainLimits;
	logRotation?: LogRotationType;
	mail?: DomainTemplateMailPreferences;
	name?: string;
	ownerId?: number;
	ownerLogin?: string;
	performance?: DomainPerformanceType;
	permissions?: domainPerms;
	phpSettings?: phpSettings;
	preferences?: DomainTemplatePreferecesType;
	webServersettings?: webServerSettings;
}
export interface DomainTemplateSetInputType extends _DomainTemplateSetInputType { constructor: { new(): DomainTemplateSetInputType }; }
export var DomainTemplateSetInputType: { new(): DomainTemplateSetInputType };

interface _DomainTemplateSetOutputType extends _DomainTemplateResultType {}
export interface DomainTemplateSetOutputType extends _DomainTemplateSetOutputType { constructor: { new(): DomainTemplateSetOutputType }; }
export var DomainTemplateSetOutputType: { new(): DomainTemplateSetOutputType };

interface _DomainTemplateVrtHst extends BaseType {
	property?: PleskPhysHostingPropertyType[];
}
export interface DomainTemplateVrtHst extends _DomainTemplateVrtHst { constructor: { new(): DomainTemplateVrtHst }; }
export var DomainTemplateVrtHst: { new(): DomainTemplateVrtHst };

interface _DomainTypeRequest extends BaseType {
	add: DomainTypeRequestAddType[];
	addPackage: WebspaceApplicationInput[];
	addPlanitem: WebspacePlanItemInputType[];
	addSubscription: DomainTypeRequestAddSubscriptionType[];
	/** List domain control form buttons */
	cform_buttons_list: DomainTypeRequestCform_buttons_listType[];
	dbServers: DomainTypeRequestDbServersType[];
	/** Delete domain(s) from server */
	del: DomainTypeRequestDelType[];
	disableApsfilter: WebspaceApsFilterInputType[];
	enableApsfilter: WebspaceApsFilterInputType[];
	/** Get domain(s) data from server */
	get: DomainTypeRequestGetType[];
	getChanged: DomainTypeRequestGetChangedType[];
	getLimitdescriptor: DomainTypeRequestGetLimitdescriptorType[];
	getPermissiondescriptor: DomainTypeRequestGetPermissiondescriptorType[];
	getPhysicalhostingdescriptor: DomainTypeRequestGetPhysicalhostingdescriptorType[];
	get_traffic: DomainTypeRequestGet_trafficType[];
	removePackage: WebspaceApplicationInput[];
	removePlanitem: WebspacePlanItemInputType[];
	removeSubscription: DomainTypeRequestRemoveSubscriptionType[];
	/** Set domain(s) data from server */
	set: DomainTypeRequestSetType[];
	set_traffic: DomainTypeRequestSet_trafficType[];
	switchSubscription: DomainTypeRequestSwitchSubscriptionType[];
	syncSubscription: DomainTypeRequestSyncSubscriptionType[];
}
export interface DomainTypeRequest extends _DomainTypeRequest { constructor: { new(): DomainTypeRequest }; }
export var DomainTypeRequest: { new(): DomainTypeRequest };

interface _DomainTypeRequestAddSubscriptionType extends BaseType {
	filter: domainFilterType;
	planExternalid: string;
	planGuid: string;
}
interface DomainTypeRequestAddSubscriptionType extends _DomainTypeRequestAddSubscriptionType { constructor: { new(): DomainTypeRequestAddSubscriptionType }; }

interface _DomainTypeRequestAddType extends BaseType {
	gen_setup: DomainTypeRequestAddTypeGen_setupType;
	hosting?: domainHostingAgentSet;
	limits?: domainLimits;
	mail?: WebspaceMailPreferences;
	performance?: DomainPerformanceType;
	permissions?: domainPerms;
	phpSettings?: phpSettings;
	planExternalid?: string;
	planGuid?: string;
	planId?: number;
	planName?: string;
	prefs?: domainPrefs;
}
interface DomainTypeRequestAddType extends _DomainTypeRequestAddType { constructor: { new(): DomainTypeRequestAddType }; }

interface _DomainTypeRequestAddTypeGen_setupType extends BaseType {
	adminDescription?: string[];
	description?: string[];
	externalId?: string[];
	htype?: domainHType[];
	ip_address?: string[];
	name: string[];
	ownerExternalid?: string[];
	ownerGuid?: string[];
	ownerId?: number[];
	ownerLogin?: string[];
	resellerDescription?: string[];
	status?: string[];
}
interface DomainTypeRequestAddTypeGen_setupType extends _DomainTypeRequestAddTypeGen_setupType { constructor: { new(): DomainTypeRequestAddTypeGen_setupType }; }

interface _DomainTypeRequestCform_buttons_listType extends BaseType {
	/** Fliter domains to be listed */
	filter: domainFilterType;
}
interface DomainTypeRequestCform_buttons_listType extends _DomainTypeRequestCform_buttons_listType { constructor: { new(): DomainTypeRequestCform_buttons_listType }; }

interface _DomainTypeRequestDbServersType extends BaseType {
	add: WebspaceDbServerInput;
	list: DomainTypeRequestDbServersTypeListType;
	remove: WebspaceDbServerInput;
}
interface DomainTypeRequestDbServersType extends _DomainTypeRequestDbServersType { constructor: { new(): DomainTypeRequestDbServersType }; }

interface _DomainTypeRequestDbServersTypeListType extends BaseType {
	filter: domainFilterType;
}
interface DomainTypeRequestDbServersTypeListType extends _DomainTypeRequestDbServersTypeListType { constructor: { new(): DomainTypeRequestDbServersTypeListType }; }

interface _DomainTypeRequestDelType extends BaseType {
	/** Fliter domains to be deleted */
	filter: domainFilterType;
}
interface DomainTypeRequestDelType extends _DomainTypeRequestDelType { constructor: { new(): DomainTypeRequestDelType }; }

interface _DomainTypeRequestGet_trafficType extends BaseType {
	filter: domainFilterType;
	since_date?: Date;
	to_date?: Date;
}
interface DomainTypeRequestGet_trafficType extends _DomainTypeRequestGet_trafficType { constructor: { new(): DomainTypeRequestGet_trafficType }; }

interface _DomainTypeRequestGetChangedType extends BaseType {
	resourceUsage: DomainTypeRequestGetChangedTypeResourceUsageType;
}
interface DomainTypeRequestGetChangedType extends _DomainTypeRequestGetChangedType { constructor: { new(): DomainTypeRequestGetChangedType }; }

interface _DomainTypeRequestGetChangedTypeResourceUsageType extends BaseType {
	/** Date and time in ISO8601 format */
	from: Date;
}
interface DomainTypeRequestGetChangedTypeResourceUsageType extends _DomainTypeRequestGetChangedTypeResourceUsageType { constructor: { new(): DomainTypeRequestGetChangedTypeResourceUsageType }; }

interface _DomainTypeRequestGetLimitdescriptorType extends BaseType {
	/** Fliter domains to be deleted */
	filter: domainFilterType;
}
interface DomainTypeRequestGetLimitdescriptorType extends _DomainTypeRequestGetLimitdescriptorType { constructor: { new(): DomainTypeRequestGetLimitdescriptorType }; }

interface _DomainTypeRequestGetPermissiondescriptorType extends BaseType {
	/** Fliter domains to be deleted */
	filter: domainFilterType;
}
interface DomainTypeRequestGetPermissiondescriptorType extends _DomainTypeRequestGetPermissiondescriptorType { constructor: { new(): DomainTypeRequestGetPermissiondescriptorType }; }

interface _DomainTypeRequestGetPhysicalhostingdescriptorType extends BaseType {
	/** Fliter domains to be deleted */
	filter: domainFilterType;
}
interface DomainTypeRequestGetPhysicalhostingdescriptorType extends _DomainTypeRequestGetPhysicalhostingdescriptorType { constructor: { new(): DomainTypeRequestGetPhysicalhostingdescriptorType }; }

interface _DomainTypeRequestGetType extends BaseType {
	/** Domain information to be retrieved */
	dataset: domainDatasetType;
	/** Filter domains to be refreshed */
	filter: domainFilterType;
}
interface DomainTypeRequestGetType extends _DomainTypeRequestGetType { constructor: { new(): DomainTypeRequestGetType }; }

interface _DomainTypeRequestRemoveSubscriptionType extends BaseType {
	filter: domainFilterType;
	planExternalid: string;
	planGuid: string;
}
interface DomainTypeRequestRemoveSubscriptionType extends _DomainTypeRequestRemoveSubscriptionType { constructor: { new(): DomainTypeRequestRemoveSubscriptionType }; }

interface _DomainTypeRequestSet_trafficType extends BaseType {
	date: Date;
	dom_id: number;
	pop3_imap_in: number;
	pop3_imap_out: number;
	smtp_in: number;
	smtp_out: number;
}
interface DomainTypeRequestSet_trafficType extends _DomainTypeRequestSet_trafficType { constructor: { new(): DomainTypeRequestSet_trafficType }; }

interface _DomainTypeRequestSetType extends BaseType {
	/** Filter domains to be refreshed */
	filter: domainFilterType;
	/** Domain information to be updated */
	values: DomainTypeRequestSetTypeValuesType;
}
interface DomainTypeRequestSetType extends _DomainTypeRequestSetType { constructor: { new(): DomainTypeRequestSetType }; }

interface _DomainTypeRequestSetTypeValuesType extends BaseType {
	disk_usage?: DomainTypeRequestSetTypeValuesTypeDisk_usageType;
	gen_setup?: setGenSetupType;
	hosting?: domainHostingAgentSet;
	limits?: domainLimits;
	mail?: WebspaceMailPreferences;
	performance?: DomainPerformanceType;
	permissions?: domainPerms;
	phpSettings?: phpSettings;
	prefs?: domainPrefs;
}
interface DomainTypeRequestSetTypeValuesType extends _DomainTypeRequestSetTypeValuesType { constructor: { new(): DomainTypeRequestSetTypeValuesType }; }

interface _DomainTypeRequestSetTypeValuesTypeDisk_usageType extends BaseType {}
interface DomainTypeRequestSetTypeValuesTypeDisk_usageType extends _DomainTypeRequestSetTypeValuesTypeDisk_usageType { constructor: { new(): DomainTypeRequestSetTypeValuesTypeDisk_usageType }; }

interface _DomainTypeRequestSwitchSubscriptionType extends BaseType {
	filter: domainFilterType;
	planExternalid: string;
	planGuid: string;
}
interface DomainTypeRequestSwitchSubscriptionType extends _DomainTypeRequestSwitchSubscriptionType { constructor: { new(): DomainTypeRequestSwitchSubscriptionType }; }

interface _DomainTypeRequestSyncSubscriptionType extends BaseType {
	filter: domainFilterType;
}
interface DomainTypeRequestSyncSubscriptionType extends _DomainTypeRequestSyncSubscriptionType { constructor: { new(): DomainTypeRequestSyncSubscriptionType }; }

interface _DomanTemplateDeleteInputType extends BaseType {
	filter: DomainTemplateFilterType;
	ownerId?: number;
	ownerLogin?: string;
}
export interface DomanTemplateDeleteInputType extends _DomanTemplateDeleteInputType { constructor: { new(): DomanTemplateDeleteInputType }; }
export var DomanTemplateDeleteInputType: { new(): DomanTemplateDeleteInputType };

interface _DomanTemplatePHosting extends BaseType {
	none: NoneType;
	vrt_hst: DomainTemplateVrtHst;
}
export interface DomanTemplatePHosting extends _DomanTemplatePHosting { constructor: { new(): DomanTemplatePHosting }; }
export var DomanTemplatePHosting: { new(): DomanTemplatePHosting };

export type double = number;
type _double = Primitive._number;

/** Any email address */
export type emailType = string;
type _emailType = _string;

interface _EnableAeType extends BaseType {
	result: resultType;
}
export interface EnableAeType extends _EnableAeType { constructor: { new(): EnableAeType }; }
export var EnableAeType: { new(): EnableAeType };

interface _EnumElementType extends BaseType {
	hint?: string;
	label?: string;
	value: string;
}
export interface EnumElementType extends _EnumElementType { constructor: { new(): EnumElementType }; }
export var EnumElementType: { new(): EnumElementType };

/** Event type specification */
export type event_type = ("created" | "updated" | "deleted" | "status_changed" | "started" | "stopped" | "installed" | "uninstalled" | "siteapp_added" | "siteapp_removed" | "expired" | "terminated" | "exceeded" | "guid_changed");
interface _event_type extends _string { content: event_type; }

interface _EventLogResponseType extends BaseType {
	/** Getting result */
	get: EventLogResponseTypeGetType[];
	getLastid: EventLogResponseTypeGetLastidType[];
	/** Get event log from server up from given last know ID */
	get_events: EventLogResponseTypeGet_eventsType[];
}
export interface EventLogResponseType extends _EventLogResponseType { constructor: { new(): EventLogResponseType }; }
export var EventLogResponseType: { new(): EventLogResponseType };

interface _EventLogResponseTypeGet_eventsType extends BaseType {
	result: EventLogResponseTypeGet_eventsTypeResultType;
}
interface EventLogResponseTypeGet_eventsType extends _EventLogResponseTypeGet_eventsType { constructor: { new(): EventLogResponseTypeGet_eventsType }; }

interface _EventLogResponseTypeGet_eventsTypeResultType extends _resultType {
	event?: EventLogResponseTypeGet_eventsTypeResultTypeEventType[];
}
interface EventLogResponseTypeGet_eventsTypeResultType extends _EventLogResponseTypeGet_eventsTypeResultType { constructor: { new(): EventLogResponseTypeGet_eventsTypeResultType }; }

interface _EventLogResponseTypeGet_eventsTypeResultTypeEventType extends BaseType {
	/** Event object class */
	class: class_type;
	/** Host user genereted ivent */
	host: string;
	/** Event object index ID */
	id: number;
	/** Event type object ID */
	obj_id: string;
	/** Event time as GMT UNIX timestamp */
	time: number;
	/** Event type */
	type: event_type;
	/** Login user genereted event */
	user: string;
}
interface EventLogResponseTypeGet_eventsTypeResultTypeEventType extends _EventLogResponseTypeGet_eventsTypeResultTypeEventType { constructor: { new(): EventLogResponseTypeGet_eventsTypeResultTypeEventType }; }

type EventLogResponseTypeGet_eventsTypeResultTypeEventTypeIdType = number;
type _EventLogResponseTypeGet_eventsTypeResultTypeEventTypeIdType = _id_type;

interface _EventLogResponseTypeGetLastidType extends BaseType {
	result: EventLogResponseTypeGetLastidTypeResultType;
}
interface EventLogResponseTypeGetLastidType extends _EventLogResponseTypeGetLastidType { constructor: { new(): EventLogResponseTypeGetLastidType }; }

interface _EventLogResponseTypeGetLastidTypeResultType extends _resultType {
	id?: number;
}
interface EventLogResponseTypeGetLastidTypeResultType extends _EventLogResponseTypeGetLastidTypeResultType { constructor: { new(): EventLogResponseTypeGetLastidTypeResultType }; }

interface _EventLogResponseTypeGetType extends BaseType {
	result: EventLogResponseTypeGetTypeResultType;
}
interface EventLogResponseTypeGetType extends _EventLogResponseTypeGetType { constructor: { new(): EventLogResponseTypeGetType }; }

interface _EventLogResponseTypeGetTypeResultType extends _resultType {
	event?: EventLogResponseTypeGetTypeResultTypeEventType[];
}
interface EventLogResponseTypeGetTypeResultType extends _EventLogResponseTypeGetTypeResultType { constructor: { new(): EventLogResponseTypeGetTypeResultType }; }

interface _EventLogResponseTypeGetTypeResultTypeEventType extends BaseType {
	/** Event object class */
	class: class_type;
	/** Event object ID */
	id: string;
	/** Event time as GMT UNIX timestamp */
	time: number;
	/** Event type */
	type: event_type;
}
interface EventLogResponseTypeGetTypeResultTypeEventType extends _EventLogResponseTypeGetTypeResultTypeEventType { constructor: { new(): EventLogResponseTypeGetTypeResultTypeEventType }; }

type EventLogResponseTypeGetTypeResultTypeEventTypeIdType = string;
type _EventLogResponseTypeGetTypeResultTypeEventTypeIdType = _string;

/** IP address usage status in Expand DB */
export type expandIPUsageStatus = ("free" | "reserved" | "assigned");
interface _expandIPUsageStatus extends _string { content: expandIPUsageStatus; }

/** ID */
export type ExtensionIdType = string;
type _ExtensionIdType = _string;

interface _ExtensionInputType extends BaseType {
	/** Call extension via API-RPC */
	call: ExtensionInputTypeCallType[];
	/** Get list of installed extensions */
	get: ExtensionInputTypeGetType[];
	/** Download and install an extension with the given URL or ID */
	install: ExtensionInputTypeInstallType[];
	/** Uninstall an extension with the given ID */
	uninstall: ExtensionInputTypeUninstallType[];
}
export interface ExtensionInputType extends _ExtensionInputType { constructor: { new(): ExtensionInputType }; }
export var ExtensionInputType: { new(): ExtensionInputType };

interface _ExtensionInputTypeCallType extends BaseType {}
interface ExtensionInputTypeCallType extends _ExtensionInputTypeCallType { constructor: { new(): ExtensionInputTypeCallType }; }

interface _ExtensionInputTypeGetType extends BaseType {
	/** Filter extensions to be retrieved */
	filter?: ExtensionSelectionFilter;
}
interface ExtensionInputTypeGetType extends _ExtensionInputTypeGetType { constructor: { new(): ExtensionInputTypeGetType }; }

interface _ExtensionInputTypeInstallType extends BaseType {
	id: string;
	url: string;
}
interface ExtensionInputTypeInstallType extends _ExtensionInputTypeInstallType { constructor: { new(): ExtensionInputTypeInstallType }; }

interface _ExtensionInputTypeUninstallType extends BaseType {
	id: string;
}
interface ExtensionInputTypeUninstallType extends _ExtensionInputTypeUninstallType { constructor: { new(): ExtensionInputTypeUninstallType }; }

interface _ExtensionOutputType extends BaseType {
	call: ExtensionOutputTypeCallType[];
	get: ExtensionOutputTypeGetType[];
	install: ExtensionOutputTypeInstallType[];
	uninstall: ExtensionOutputTypeUninstallType[];
}
export interface ExtensionOutputType extends _ExtensionOutputType { constructor: { new(): ExtensionOutputType }; }
export var ExtensionOutputType: { new(): ExtensionOutputType };

interface _ExtensionOutputTypeCallType extends BaseType {
	result: ExtensionOutputTypeCallTypeResultType;
}
interface ExtensionOutputTypeCallType extends _ExtensionOutputTypeCallType { constructor: { new(): ExtensionOutputTypeCallType }; }

interface _ExtensionOutputTypeCallTypeResultType extends _resultFilterType {}
interface ExtensionOutputTypeCallTypeResultType extends _ExtensionOutputTypeCallTypeResultType { constructor: { new(): ExtensionOutputTypeCallTypeResultType }; }

interface _ExtensionOutputTypeGetType extends BaseType {
	result: ExtensionOutputTypeGetTypeResultType;
}
interface ExtensionOutputTypeGetType extends _ExtensionOutputTypeGetType { constructor: { new(): ExtensionOutputTypeGetType }; }

interface _ExtensionOutputTypeGetTypeResultType extends _resultFilterType {
	/** Extensions data. Will not be returned if status isn't "ok" */
	details?: ExtensionOutputTypeGetTypeResultTypeDetailsType[];
}
interface ExtensionOutputTypeGetTypeResultType extends _ExtensionOutputTypeGetTypeResultType { constructor: { new(): ExtensionOutputTypeGetTypeResultType }; }

/** Extension details */
interface _ExtensionOutputTypeGetTypeResultTypeDetailsType extends BaseType {}
interface ExtensionOutputTypeGetTypeResultTypeDetailsType extends _ExtensionOutputTypeGetTypeResultTypeDetailsType { constructor: { new(): ExtensionOutputTypeGetTypeResultTypeDetailsType }; }

interface _ExtensionOutputTypeInstallType extends BaseType {
	result: resultType;
}
interface ExtensionOutputTypeInstallType extends _ExtensionOutputTypeInstallType { constructor: { new(): ExtensionOutputTypeInstallType }; }

interface _ExtensionOutputTypeUninstallType extends BaseType {
	result: resultType;
}
interface ExtensionOutputTypeUninstallType extends _ExtensionOutputTypeUninstallType { constructor: { new(): ExtensionOutputTypeUninstallType }; }

/** Filter extensions list */
interface _ExtensionSelectionFilter extends BaseType {
	/** Extension ID */
	id: string;
}
export interface ExtensionSelectionFilter extends _ExtensionSelectionFilter { constructor: { new(): ExtensionSelectionFilter }; }
export var ExtensionSelectionFilter: { new(): ExtensionSelectionFilter };

interface _ExtensionType extends BaseType {}
export interface ExtensionType extends _ExtensionType { constructor: { new(): ExtensionType }; }
export var ExtensionType: { new(): ExtensionType };

/** URL */
export type ExtensionUrlType = string;
type _ExtensionUrlType = Primitive._string;

/** URL, only symbolic name, not an IP */
export type forwardingURL = string;
type _forwardingURL = _string;

interface _FtpUserAddInputType extends _FtpUserNewType {
	webspaceId: number;
	/** Domain name (in uniceode) */
	webspaceName: string;
}
export interface FtpUserAddInputType extends _FtpUserAddInputType { constructor: { new(): FtpUserAddInputType }; }
export var FtpUserAddInputType: { new(): FtpUserAddInputType };

interface _FtpUserAddOutputType extends BaseType {
	result: FtpUserSimpleResultType;
}
export interface FtpUserAddOutputType extends _FtpUserAddOutputType { constructor: { new(): FtpUserAddOutputType }; }
export var FtpUserAddOutputType: { new(): FtpUserAddOutputType };

interface _FtpUserDelInputType extends BaseType {
	filter: FtpUserFilterType;
	webspaceId?: number;
	webspaceName?: string;
}
export interface FtpUserDelInputType extends _FtpUserDelInputType { constructor: { new(): FtpUserDelInputType }; }
export var FtpUserDelInputType: { new(): FtpUserDelInputType };

interface _FtpUserDelOutputType extends BaseType {
	result: resultFilterType[];
}
export interface FtpUserDelOutputType extends _FtpUserDelOutputType { constructor: { new(): FtpUserDelOutputType }; }
export var FtpUserDelOutputType: { new(): FtpUserDelOutputType };

interface _FtpUserExistType extends BaseType {
	/** Home directory */
	home: string;
	/** FTP subaccount name */
	name?: string;
	password?: string;
	permissions?: FtpUserPermissions;
	/** Hard disk quota */
	quota?: number;
}
export interface FtpUserExistType extends _FtpUserExistType { constructor: { new(): FtpUserExistType }; }
export var FtpUserExistType: { new(): FtpUserExistType };

interface _FtpUserFilterType extends BaseType {
	id?: number[];
	name?: string[];
	webspaceId?: number[];
	webspaceName?: string[];
}
export interface FtpUserFilterType extends _FtpUserFilterType { constructor: { new(): FtpUserFilterType }; }
export var FtpUserFilterType: { new(): FtpUserFilterType };

interface _FtpUserGetInputType extends BaseType {
	filter: FtpUserFilterType;
	webspaceId?: number;
	webspaceName?: string;
}
export interface FtpUserGetInputType extends _FtpUserGetInputType { constructor: { new(): FtpUserGetInputType }; }
export var FtpUserGetInputType: { new(): FtpUserGetInputType };

interface _FtpUserGetOutputType extends BaseType {
	result: FtpUserGetResultType[];
}
export interface FtpUserGetOutputType extends _FtpUserGetOutputType { constructor: { new(): FtpUserGetOutputType }; }
export var FtpUserGetOutputType: { new(): FtpUserGetOutputType };

interface _FtpUserGetResultType extends _resultFilterType {
	/** Home directory */
	home?: string;
	/** FTP subaccount name */
	name?: string;
	permissions?: FtpUserPermissions;
	quota?: number;
	webspaceId?: number;
}
export interface FtpUserGetResultType extends _FtpUserGetResultType { constructor: { new(): FtpUserGetResultType }; }
export var FtpUserGetResultType: { new(): FtpUserGetResultType };

interface _FtpUserInputType extends BaseType {
	add: FtpUserAddInputType[];
	del: FtpUserDelInputType[];
	get: FtpUserGetInputType[];
	set: FtpUserSetInputType[];
}
export interface FtpUserInputType extends _FtpUserInputType { constructor: { new(): FtpUserInputType }; }
export var FtpUserInputType: { new(): FtpUserInputType };

interface _FtpUserNewType extends BaseType {
	createNonexistent?: boolean;
	/** Home directory */
	home?: string;
	/** FTP subaccount name */
	name: string;
	password: string;
	permissions?: FtpUserPermissions;
	/** Hard disk quota */
	quota?: number;
}
export interface FtpUserNewType extends _FtpUserNewType { constructor: { new(): FtpUserNewType }; }
export var FtpUserNewType: { new(): FtpUserNewType };

interface _FtpUserOutputType extends BaseType {
	add: FtpUserAddOutputType[];
	del: FtpUserDelOutputType[];
	get: FtpUserGetOutputType[];
	set: FtpUserSetOutputType[];
}
export interface FtpUserOutputType extends _FtpUserOutputType { constructor: { new(): FtpUserOutputType }; }
export var FtpUserOutputType: { new(): FtpUserOutputType };

interface _FtpUserPermissions extends BaseType {
	read?: boolean;
	write?: boolean;
}
export interface FtpUserPermissions extends _FtpUserPermissions { constructor: { new(): FtpUserPermissions }; }
export var FtpUserPermissions: { new(): FtpUserPermissions };

interface _FtpUserSetInputType extends BaseType {
	filter: FtpUserFilterType;
	values: FtpUserSetType;
	webspaceId?: number;
	webspaceName?: string;
}
export interface FtpUserSetInputType extends _FtpUserSetInputType { constructor: { new(): FtpUserSetInputType }; }
export var FtpUserSetInputType: { new(): FtpUserSetInputType };

interface _FtpUserSetOutputType extends BaseType {
	result: resultFilterType[];
}
export interface FtpUserSetOutputType extends _FtpUserSetOutputType { constructor: { new(): FtpUserSetOutputType }; }
export var FtpUserSetOutputType: { new(): FtpUserSetOutputType };

interface _FtpUserSetType extends BaseType {
	createNonexistent?: boolean;
	/** Home directory */
	home?: string;
	/** FTP subaccount name */
	name?: string;
	password?: string;
	permissions?: FtpUserPermissions;
	/** Hard disk quota */
	quota?: number;
}
export interface FtpUserSetType extends _FtpUserSetType { constructor: { new(): FtpUserSetType }; }
export var FtpUserSetType: { new(): FtpUserSetType };

interface _FtpUserSimpleResultType extends _resultType {
	id?: number;
}
export interface FtpUserSimpleResultType extends _FtpUserSimpleResultType { constructor: { new(): FtpUserSimpleResultType }; }
export var FtpUserSimpleResultType: { new(): FtpUserSimpleResultType };

/** Garbage Output, for debug */
export type garbageOutput = string;
type _garbageOutput = _string;

interface _GetAdditionalKeyResultType extends _resultType {
	key_info?: additionalKeyType;
	name?: string;
}
export interface GetAdditionalKeyResultType extends _GetAdditionalKeyResultType { constructor: { new(): GetAdditionalKeyResultType }; }
export var GetAdditionalKeyResultType: { new(): GetAdditionalKeyResultType };

interface _GetAdditionalKeyType extends BaseType {
	result?: GetAdditionalKeyResultType[];
}
export interface GetAdditionalKeyType extends _GetAdditionalKeyType { constructor: { new(): GetAdditionalKeyType }; }
export var GetAdditionalKeyType: { new(): GetAdditionalKeyType };

interface _GetAeParametersResultType extends _resultType {
	params?: aeParamsType;
}
export interface GetAeParametersResultType extends _GetAeParametersResultType { constructor: { new(): GetAeParametersResultType }; }
export var GetAeParametersResultType: { new(): GetAeParametersResultType };

interface _GetAeParametersType extends BaseType {
	result: GetAeParametersResultType;
}
export interface GetAeParametersType extends _GetAeParametersType { constructor: { new(): GetAeParametersType }; }
export var GetAeParametersType: { new(): GetAeParametersType };

interface _GetMiscType extends BaseType {
	result?: miscResultType[];
}
export interface GetMiscType extends _GetMiscType { constructor: { new(): GetMiscType }; }
export var GetMiscType: { new(): GetMiscType };

interface _GetNavigationOutputType extends BaseType {
	result: GetNavigationOutputTypeResultType;
}
export interface GetNavigationOutputType extends _GetNavigationOutputType { constructor: { new(): GetNavigationOutputType }; }
export var GetNavigationOutputType: { new(): GetNavigationOutputType };

interface _GetNavigationOutputTypeResultType extends _resultType {
	navigation?: string;
}
interface GetNavigationOutputTypeResultType extends _GetNavigationOutputTypeResultType { constructor: { new(): GetNavigationOutputTypeResultType }; }

interface _GetProtosResultType extends _resultType {
	protos?: ProtosList;
}
export interface GetProtosResultType extends _GetProtosResultType { constructor: { new(): GetProtosResultType }; }
export var GetProtosResultType: { new(): GetProtosResultType };

interface _GetProtosType extends BaseType {
	result: GetProtosResultType;
}
export interface GetProtosType extends _GetProtosType { constructor: { new(): GetProtosType }; }
export var GetProtosType: { new(): GetProtosType };

interface _GetResultType extends _resultType {
	admin?: adminType[];
	adminDomainlist?: domainListOutputType[];
	certificates?: serverCertificates[];
	components?: componentsType[];
	gen_info?: serverGenInfoType[];
	interfaces?: interfacesType[];
	key?: keyType[];
	prefs?: serverPrefs[];
	services_state?: servicesState[];
	session_setup?: serverSessionSetup[];
	shells?: ShellsList[];
	siteIsolationconfig?: siteIsolationConfigOutput[];
	stat?: statType[];
	updates?: updatesOutput[];
}
export interface GetResultType extends _GetResultType { constructor: { new(): GetResultType }; }
export var GetResultType: { new(): GetResultType };

interface _GetType extends BaseType {
	result: GetResultType;
}
export interface GetType extends _GetType { constructor: { new(): GetType }; }
export var GetType: { new(): GetType };

interface _GetValidationModeResultType extends BaseType {
	result: resultType;
}
export interface GetValidationModeResultType extends _GetValidationModeResultType { constructor: { new(): GetValidationModeResultType }; }
export var GetValidationModeResultType: { new(): GetValidationModeResultType };

interface _GetVDirInputType extends BaseType {
	/** Virtual directory name */
	name: string;
	siteId: number;
	subdomainId: number;
}
export interface GetVDirInputType extends _GetVDirInputType { constructor: { new(): GetVDirInputType }; }
export var GetVDirInputType: { new(): GetVDirInputType };

/** Item ID */
export type id_type = number;
type _id_type = Primitive._number;

interface _InitialSetupResultType extends _resultType {
	/** Since 1.3.5 */
	server_name?: string;
}
export interface InitialSetupResultType extends _InitialSetupResultType { constructor: { new(): InitialSetupResultType }; }
export var InitialSetupResultType: { new(): InitialSetupResultType };

/** Data required for initial Plesk server setup */
interface _initialSetupType extends BaseType {}
export interface initialSetupType extends _initialSetupType { constructor: { new(): initialSetupType }; }
export var initialSetupType: { new(): initialSetupType };

interface _InitialSetupType extends BaseType {
	result: InitialSetupResultType;
}
export interface InitialSetupType extends _InitialSetupType { constructor: { new(): InitialSetupType }; }
export var InitialSetupType: { new(): InitialSetupType };

export type int = number;
type _int = Primitive._number;

/** Network interfaces */
interface _interfacesType extends BaseType {
	interface?: string[];
}
export interface interfacesType extends _interfacesType { constructor: { new(): interfacesType }; }
export var interfacesType: { new(): interfacesType };

export type ip_address = string;
type _ip_address = Primitive._string;

/** Client's IP pool operate data request */
interface _ipPoolOperateType extends BaseType {
	customerId: number;
	ip_address: string[];
}
export interface ipPoolOperateType extends _ipPoolOperateType { constructor: { new(): ipPoolOperateType }; }
export var ipPoolOperateType: { new(): ipPoolOperateType };

interface _ipPoolResellerSet extends BaseType {
	externalId: string;
	filter: ipPoolResellerSetFilterType;
	resellerId: number;
	values: ipPoolResellerSetValuesType;
}
export interface ipPoolResellerSet extends _ipPoolResellerSet { constructor: { new(): ipPoolResellerSet }; }
export var ipPoolResellerSet: { new(): ipPoolResellerSet };

interface _ipPoolResellerSetFilterType extends BaseType {
	ipAddress: string[];
}
interface ipPoolResellerSetFilterType extends _ipPoolResellerSetFilterType { constructor: { new(): ipPoolResellerSetFilterType }; }

interface _ipPoolResellerSetValuesType extends BaseType {
	ipType: ipType;
}
interface ipPoolResellerSetValuesType extends _ipPoolResellerSetValuesType { constructor: { new(): ipPoolResellerSetValuesType }; }

/** Client's IP pool data */
interface _ipPoolType extends BaseType {
	ip?: ipPoolTypeIpType[];
}
export interface ipPoolType extends _ipPoolType { constructor: { new(): ipPoolType }; }
export var ipPoolType: { new(): ipPoolType };

interface _ipPoolTypeIpType extends BaseType {
	ipAddress: string;
	ipType: ipType;
}
interface ipPoolTypeIpType extends _ipPoolTypeIpType { constructor: { new(): ipPoolTypeIpType }; }

interface _IpResponseType extends BaseType {
	add: IpResponseTypeAddType[];
	/** IP address(es) deleting result */
	del: IpResponseTypeDelType[];
	/** IP address(es) listing result */
	get: IpResponseTypeGetType[];
	/** Setup operation result */
	set: IpResponseTypeSetType[];
}
export interface IpResponseType extends _IpResponseType { constructor: { new(): IpResponseType }; }
export var IpResponseType: { new(): IpResponseType };

interface _IpResponseTypeAddType extends BaseType {}
interface IpResponseTypeAddType extends _IpResponseTypeAddType { constructor: { new(): IpResponseTypeAddType }; }

interface _IpResponseTypeDelType extends BaseType {
	result: IpResponseTypeDelTypeResultType[];
}
interface IpResponseTypeDelType extends _IpResponseTypeDelType { constructor: { new(): IpResponseTypeDelType }; }

interface _IpResponseTypeDelTypeResultType extends _resultType {
	/** Deleted IP addresses */
	ip_address?: string;
}
interface IpResponseTypeDelTypeResultType extends _IpResponseTypeDelTypeResultType { constructor: { new(): IpResponseTypeDelTypeResultType }; }

interface _IpResponseTypeGetType extends BaseType {
	result: IpResponseTypeGetTypeResultType[];
}
interface IpResponseTypeGetType extends _IpResponseTypeGetType { constructor: { new(): IpResponseTypeGetType }; }

interface _IpResponseTypeGetTypeResultType extends _resultType {
	addresses?: IpResponseTypeGetTypeResultTypeAddressesType;
}
interface IpResponseTypeGetTypeResultType extends _IpResponseTypeGetTypeResultType { constructor: { new(): IpResponseTypeGetTypeResultType }; }

interface _IpResponseTypeGetTypeResultTypeAddressesType extends BaseType {
	/** Since Plesk API protocol 1.3.5 */
	ip_info?: IpResponseTypeGetTypeResultTypeAddressesTypeIp_infoType[];
}
interface IpResponseTypeGetTypeResultTypeAddressesType extends _IpResponseTypeGetTypeResultTypeAddressesType { constructor: { new(): IpResponseTypeGetTypeResultTypeAddressesType }; }

interface _IpResponseTypeGetTypeResultTypeAddressesTypeIp_infoType extends BaseType {}
interface IpResponseTypeGetTypeResultTypeAddressesTypeIp_infoType extends _IpResponseTypeGetTypeResultTypeAddressesTypeIp_infoType { constructor: { new(): IpResponseTypeGetTypeResultTypeAddressesTypeIp_infoType }; }

interface _IpResponseTypeSetType extends BaseType {
	result: IpResponseTypeSetTypeResultType[];
}
interface IpResponseTypeSetType extends _IpResponseTypeSetType { constructor: { new(): IpResponseTypeSetType }; }

interface _IpResponseTypeSetTypeResultType extends _resultType {
	/** Operated IP addresses */
	ip_address?: string;
}
interface IpResponseTypeSetTypeResultType extends _IpResponseTypeSetTypeResultType { constructor: { new(): IpResponseTypeSetTypeResultType }; }

/** IP address usage status in Expand DB */
export type ipType = ("shared" | "exclusive");
interface _ipType extends _string { content: ipType; }

interface _KeyPropertyType extends BaseType {
	value: string;
}
export interface KeyPropertyType extends _KeyPropertyType { constructor: { new(): KeyPropertyType }; }
export var KeyPropertyType: { new(): KeyPropertyType };

/** Server license key info */
interface _keyType extends BaseType {
	/** If the key is additional key, this will be set to true */
	additionalKey?: boolean;
	content: string;
	property: KeyPropertyType[];
}
export interface keyType extends _keyType { constructor: { new(): keyType }; }
export var keyType: { new(): keyType };

interface _LicenseInstallType extends BaseType {
	result: LicInstallResultType;
}
export interface LicenseInstallType extends _LicenseInstallType { constructor: { new(): LicenseInstallType }; }
export var LicenseInstallType: { new(): LicenseInstallType };

interface _LicInstallResultType extends _resultType {
	keyId?: string;
}
export interface LicInstallResultType extends _LicInstallResultType { constructor: { new(): LicInstallResultType }; }
export var LicInstallResultType: { new(): LicInstallResultType };

/** Server loads */
interface _load_avgStatType extends BaseType {
	l1: number;
	l15: number;
	l5: number;
}
export interface load_avgStatType extends _load_avgStatType { constructor: { new(): load_avgStatType }; }
export var load_avgStatType: { new(): load_avgStatType };

interface _LocaleDisableInput extends BaseType {
	filter: LocaleFilter;
}
export interface LocaleDisableInput extends _LocaleDisableInput { constructor: { new(): LocaleDisableInput }; }
export var LocaleDisableInput: { new(): LocaleDisableInput };

interface _LocaleDisableOutput extends BaseType {
	result: LocaleResultType[];
}
export interface LocaleDisableOutput extends _LocaleDisableOutput { constructor: { new(): LocaleDisableOutput }; }
export var LocaleDisableOutput: { new(): LocaleDisableOutput };

interface _LocaleDownloadInput extends BaseType {
	/** Locale name */
	id: string;
}
export interface LocaleDownloadInput extends _LocaleDownloadInput { constructor: { new(): LocaleDownloadInput }; }
export var LocaleDownloadInput: { new(): LocaleDownloadInput };

interface _LocaleDownloadOutput extends BaseType {
	result: resultType;
}
export interface LocaleDownloadOutput extends _LocaleDownloadOutput { constructor: { new(): LocaleDownloadOutput }; }
export var LocaleDownloadOutput: { new(): LocaleDownloadOutput };

interface _LocaleEnableInput extends BaseType {
	filter: LocaleFilter;
}
export interface LocaleEnableInput extends _LocaleEnableInput { constructor: { new(): LocaleEnableInput }; }
export var LocaleEnableInput: { new(): LocaleEnableInput };

interface _LocaleEnableOutput extends BaseType {
	result: LocaleResultType[];
}
export interface LocaleEnableOutput extends _LocaleEnableOutput { constructor: { new(): LocaleEnableOutput }; }
export var LocaleEnableOutput: { new(): LocaleEnableOutput };

interface _LocaleFilter extends BaseType {
	/** Locale name */
	id?: string[];
}
export interface LocaleFilter extends _LocaleFilter { constructor: { new(): LocaleFilter }; }
export var LocaleFilter: { new(): LocaleFilter };

interface _LocaleGetInput extends BaseType {
	filter: LocaleFilter;
}
export interface LocaleGetInput extends _LocaleGetInput { constructor: { new(): LocaleGetInput }; }
export var LocaleGetInput: { new(): LocaleGetInput };

interface _LocaleGetMessageFilter extends BaseType {
	/** Message jey in locale */
	key: string[];
}
export interface LocaleGetMessageFilter extends _LocaleGetMessageFilter { constructor: { new(): LocaleGetMessageFilter }; }
export var LocaleGetMessageFilter: { new(): LocaleGetMessageFilter };

interface _LocaleGetMessageInput extends BaseType {
	filter: LocaleGetMessageFilter;
	/** Locale name */
	id: string;
}
export interface LocaleGetMessageInput extends _LocaleGetMessageInput { constructor: { new(): LocaleGetMessageInput }; }
export var LocaleGetMessageInput: { new(): LocaleGetMessageInput };

interface _LocaleGetMessageOutput extends BaseType {
	result: LocaleMessageResultType[];
}
export interface LocaleGetMessageOutput extends _LocaleGetMessageOutput { constructor: { new(): LocaleGetMessageOutput }; }
export var LocaleGetMessageOutput: { new(): LocaleGetMessageOutput };

interface _LocaleGetOutput extends BaseType {
	result: LocaleGetOutputResultType[];
}
export interface LocaleGetOutput extends _LocaleGetOutput { constructor: { new(): LocaleGetOutput }; }
export var LocaleGetOutput: { new(): LocaleGetOutput };

interface _LocaleGetOutputResultType extends _LocaleResultType {
	info?: LocaleInfo;
}
interface LocaleGetOutputResultType extends _LocaleGetOutputResultType { constructor: { new(): LocaleGetOutputResultType }; }

interface _LocaleInfo extends BaseType {
	country: string;
	enabled: boolean;
	/** Locale name */
	id: string;
	/** language */
	lang: string;
	used: number;
}
export interface LocaleInfo extends _LocaleInfo { constructor: { new(): LocaleInfo }; }
export var LocaleInfo: { new(): LocaleInfo };

interface _LocaleInput extends BaseType {
	disable: LocaleDisableInput[];
	enable: LocaleEnableInput[];
	/** Retrieve installed language packs */
	get: LocaleGetInput[];
	/** Retrieve localized message */
	getMessage: LocaleGetMessageInput[];
}
export interface LocaleInput extends _LocaleInput { constructor: { new(): LocaleInput }; }
export var LocaleInput: { new(): LocaleInput };

interface _LocaleMessageResultType extends _resultType {
	/** This node is used for binding operation resull with input value that specified in filter. */
	filterId?: string;
	/** Object ID */
	id?: string;
	/** Localized message */
	message?: string;
}
export interface LocaleMessageResultType extends _LocaleMessageResultType { constructor: { new(): LocaleMessageResultType }; }
export var LocaleMessageResultType: { new(): LocaleMessageResultType };

interface _LocaleOutput extends BaseType {
	disable: LocaleDisableOutput[];
	enable: LocaleEnableOutput[];
	get: LocaleGetOutput[];
	getMessage: LocaleGetMessageOutput[];
}
export interface LocaleOutput extends _LocaleOutput { constructor: { new(): LocaleOutput }; }
export var LocaleOutput: { new(): LocaleOutput };

interface _LocaleResultType extends _resultType {
	/** This node is used for binding operation resull with input value that specified in filter. */
	filterId?: string;
	/** Object ID */
	id?: string;
}
export interface LocaleResultType extends _LocaleResultType { constructor: { new(): LocaleResultType }; }
export var LocaleResultType: { new(): LocaleResultType };

interface _LogRotationConditionType extends BaseType {
	logBysize: number;
	logBytime: LogRotationConditionTypeLogBytimeType;
}
export interface LogRotationConditionType extends _LogRotationConditionType { constructor: { new(): LogRotationConditionType }; }
export var LogRotationConditionType: { new(): LogRotationConditionType };

type LogRotationConditionTypeLogBytimeType = ("Daily" | "Weekly" | "Monthly");
interface _LogRotationConditionTypeLogBytimeType extends _string { content: LogRotationConditionTypeLogBytimeType; }

interface _LogRotationDisableInput extends BaseType {
	filter: logRotationFilterType;
}
export interface LogRotationDisableInput extends _LogRotationDisableInput { constructor: { new(): LogRotationDisableInput }; }
export var LogRotationDisableInput: { new(): LogRotationDisableInput };

interface _LogRotationDisableOutput extends BaseType {
	result: resultFilterType[];
}
export interface LogRotationDisableOutput extends _LogRotationDisableOutput { constructor: { new(): LogRotationDisableOutput }; }
export var LogRotationDisableOutput: { new(): LogRotationDisableOutput };

interface _LogRotationEnableInput extends BaseType {
	filter: logRotationFilterType;
}
export interface LogRotationEnableInput extends _LogRotationEnableInput { constructor: { new(): LogRotationEnableInput }; }
export var LogRotationEnableInput: { new(): LogRotationEnableInput };

interface _LogRotationEnableOutput extends BaseType {
	result: resultFilterType[];
}
export interface LogRotationEnableOutput extends _LogRotationEnableOutput { constructor: { new(): LogRotationEnableOutput }; }
export var LogRotationEnableOutput: { new(): LogRotationEnableOutput };

interface _logRotationFilterType extends BaseType {
	/** Domain owner's ID */
	ownerId?: number[];
	/** Domain owner's login */
	ownerLogin?: string[];
	/** Domain ID ( ID in Plesk DB) */
	siteId?: number[];
	/** Domain name (UTF-8) */
	siteName?: string[];
}
export interface logRotationFilterType extends _logRotationFilterType { constructor: { new(): logRotationFilterType }; }
export var logRotationFilterType: { new(): logRotationFilterType };

interface _LogRotationGetInput extends BaseType {
	filter: logRotationFilterType;
}
export interface LogRotationGetInput extends _LogRotationGetInput { constructor: { new(): LogRotationGetInput }; }
export var LogRotationGetInput: { new(): LogRotationGetInput };

interface _LogRotationGetOutput extends BaseType {
	result: LogRotationGetOutputResultType[];
}
export interface LogRotationGetOutput extends _LogRotationGetOutput { constructor: { new(): LogRotationGetOutput }; }
export var LogRotationGetOutput: { new(): LogRotationGetOutput };

interface _LogRotationGetOutputResultType extends _resultFilterType {
	settings?: LogRotationSettingsType;
}
interface LogRotationGetOutputResultType extends _LogRotationGetOutputResultType { constructor: { new(): LogRotationGetOutputResultType }; }

interface _LogRotationGetStatusInput extends BaseType {
	filter: logRotationFilterType;
}
export interface LogRotationGetStatusInput extends _LogRotationGetStatusInput { constructor: { new(): LogRotationGetStatusInput }; }
export var LogRotationGetStatusInput: { new(): LogRotationGetStatusInput };

interface _LogRotationGetStatusOutput extends BaseType {
	result: LogRotationGetStatusOutputResultType[];
}
export interface LogRotationGetStatusOutput extends _LogRotationGetStatusOutput { constructor: { new(): LogRotationGetStatusOutput }; }
export var LogRotationGetStatusOutput: { new(): LogRotationGetStatusOutput };

interface _LogRotationGetStatusOutputResultType extends _resultFilterType {
	enabled?: boolean;
}
interface LogRotationGetStatusOutputResultType extends _LogRotationGetStatusOutputResultType { constructor: { new(): LogRotationGetStatusOutputResultType }; }

interface _LogRotationInput extends BaseType {
	disable: LogRotationDisableInput[];
	enable: LogRotationEnableInput[];
	get: LogRotationGetInput[];
	getStatus: LogRotationGetStatusInput[];
	set: LogRotationSetInput[];
}
export interface LogRotationInput extends _LogRotationInput { constructor: { new(): LogRotationInput }; }
export var LogRotationInput: { new(): LogRotationInput };

interface _LogRotationOutput extends BaseType {
	disable: LogRotationDisableOutput[];
	enable: LogRotationEnableOutput[];
	get: LogRotationGetOutput[];
	getStatus: LogRotationGetStatusOutput[];
	set: LogRotationSetOutput[];
}
export interface LogRotationOutput extends _LogRotationOutput { constructor: { new(): LogRotationOutput }; }
export var LogRotationOutput: { new(): LogRotationOutput };

interface _LogRotationSetInput extends BaseType {
	filter: logRotationFilterType;
	settings: LogRotationSettingsType;
}
export interface LogRotationSetInput extends _LogRotationSetInput { constructor: { new(): LogRotationSetInput }; }
export var LogRotationSetInput: { new(): LogRotationSetInput };

interface _LogRotationSetOutput extends BaseType {
	result: resultFilterType[];
}
export interface LogRotationSetOutput extends _LogRotationSetOutput { constructor: { new(): LogRotationSetOutput }; }
export var LogRotationSetOutput: { new(): LogRotationSetOutput };

interface _LogRotationSettingsType extends BaseType {
	/** Compress log files */
	logCompress?: boolean;
	/** Log rotation condition */
	logCondition: LogRotationConditionType;
	logEmail?: string;
	logMaxnumfiles?: number;
}
export interface LogRotationSettingsType extends _LogRotationSettingsType { constructor: { new(): LogRotationSettingsType }; }
export var LogRotationSettingsType: { new(): LogRotationSettingsType };

interface _LogRotationType extends BaseType {
	off: NoneType;
	on: LogRotationTypeOnType;
}
export interface LogRotationType extends _LogRotationType { constructor: { new(): LogRotationType }; }
export var LogRotationType: { new(): LogRotationType };

interface _LogRotationTypeOnType extends BaseType {
	/** Compress log files */
	logCompress?: boolean;
	/** Log rotation condition */
	logCondition: ConditionType;
	logEmail?: string;
	logMaxnumfiles?: number;
}
interface LogRotationTypeOnType extends _LogRotationTypeOnType { constructor: { new(): LogRotationTypeOnType }; }

export type long = number;
type _long = Primitive._number;

/** Plesk's mailname user */
interface _mailnameAddType extends BaseType {
	alias?: string[];
	antivir?: Antivir;
	autoresponder?: mailnameAddTypeAutoresponderType;
	/** Login to control panel as user */
	cpAccess?: boolean;
	description?: string;
	/** Mailname forwarding settings */
	forwarding?: mailnameAddTypeForwardingType;
	/** postbox settings */
	mailbox?: mailnameAddTypeMailboxType;
	/** Name of the user */
	name: string;
	outgoingMessagesmboxlimit?: string;
	password?: mailnameAddTypePasswordType;
}
export interface mailnameAddType extends _mailnameAddType { constructor: { new(): mailnameAddType }; }
export var mailnameAddType: { new(): mailnameAddType };

interface _mailnameAddTypeAutoresponderType extends BaseType {
	attachment?: autoRespAttach[];
	charset?: string;
	content_type?: mailnameAddTypeAutoresponderTypeContent_typeType;
	enabled?: boolean;
	end_date?: Date;
	forward?: string;
	subject?: string;
	text?: string;
}
interface mailnameAddTypeAutoresponderType extends _mailnameAddTypeAutoresponderType { constructor: { new(): mailnameAddTypeAutoresponderType }; }

type mailnameAddTypeAutoresponderTypeContent_typeType = ("text/html" | "text/plain");
interface _mailnameAddTypeAutoresponderTypeContent_typeType extends Primitive._string { content: mailnameAddTypeAutoresponderTypeContent_typeType; }

interface _mailnameAddTypeForwardingType extends BaseType {
	/** Email address */
	address: string[];
	enabled: boolean;
}
interface mailnameAddTypeForwardingType extends _mailnameAddTypeForwardingType { constructor: { new(): mailnameAddTypeForwardingType }; }

interface _mailnameAddTypeMailboxType extends BaseType {
	enabled: boolean;
	/** Mailbox quota in bytes */
	quota?: number;
}
interface mailnameAddTypeMailboxType extends _mailnameAddTypeMailboxType { constructor: { new(): mailnameAddTypeMailboxType }; }

interface _mailnameAddTypePasswordType extends BaseType {
	type?: passwdType;
	value: string;
}
interface mailnameAddTypePasswordType extends _mailnameAddTypePasswordType { constructor: { new(): mailnameAddTypePasswordType }; }

/** Plesk's mailname user */
interface _mailnameGetInfoType extends BaseType {
	alias?: string[];
	antivir?: Antivir;
	autoresponder?: mailnameGetInfoTypeAutoresponderType;
	description?: string;
	/** Mailname forwarding settings */
	forwarding?: mailnameGetInfoTypeForwardingType;
	id?: number;
	/** postbox settings */
	mailbox?: mailnameGetInfoTypeMailboxType;
	/** Name of the user */
	name: string;
	outgoingMessagesmboxlimit?: string;
	password?: mailnameGetInfoTypePasswordType;
	userGuid?: string;
}
export interface mailnameGetInfoType extends _mailnameGetInfoType { constructor: { new(): mailnameGetInfoType }; }
export var mailnameGetInfoType: { new(): mailnameGetInfoType };

interface _mailnameGetInfoTypeAutoresponderType extends BaseType {
	attachment?: autoRespAttach[];
	charset?: string;
	content_type?: mailnameGetInfoTypeAutoresponderTypeContent_typeType;
	enabled?: boolean;
	end_date?: Date;
	forward?: string;
	subject?: string;
	text?: string;
}
interface mailnameGetInfoTypeAutoresponderType extends _mailnameGetInfoTypeAutoresponderType { constructor: { new(): mailnameGetInfoTypeAutoresponderType }; }

type mailnameGetInfoTypeAutoresponderTypeContent_typeType = ("text/html" | "text/plain");
interface _mailnameGetInfoTypeAutoresponderTypeContent_typeType extends Primitive._string { content: mailnameGetInfoTypeAutoresponderTypeContent_typeType; }

interface _mailnameGetInfoTypeForwardingType extends BaseType {
	/** Email address */
	address?: string[];
	enabled?: boolean;
}
interface mailnameGetInfoTypeForwardingType extends _mailnameGetInfoTypeForwardingType { constructor: { new(): mailnameGetInfoTypeForwardingType }; }

interface _mailnameGetInfoTypeMailboxType extends BaseType {
	enabled?: boolean;
	/** Mailbox quota in bytes */
	quota?: number;
	usage?: number;
}
interface mailnameGetInfoTypeMailboxType extends _mailnameGetInfoTypeMailboxType { constructor: { new(): mailnameGetInfoTypeMailboxType }; }

interface _mailnameGetInfoTypePasswordType extends BaseType {
	type?: passwdType;
	value?: string;
}
interface mailnameGetInfoTypePasswordType extends _mailnameGetInfoTypePasswordType { constructor: { new(): mailnameGetInfoTypePasswordType }; }

/** Plesk's mailname user */
interface _mailnameType extends BaseType {
	alias?: string[];
	antivir?: Antivir;
	/** Autoresponders for the given mailname */
	autoresponders?: mailnameTypeAutorespondersType;
	/** Access to the control panel settings */
	cp_access?: mailnameTypeCp_accessType;
	group?: string[];
	/** Database identifier of the user (optional) */
	id?: number;
	/** postbox settings */
	mailbox?: mailnameTypeMailboxType;
	/** Mailgroup of this mailname (redirects) */
	mailgroup?: mailnameTypeMailgroupType;
	/** Name of the user */
	name: string;
	password?: string;
	password_type?: passwdType;
	permissions?: MailUserPermission;
	/** Mailname redirect settings */
	redirect?: mailnameTypeRedirectType;
	repository?: mailnameTypeRepositoryType;
}
export interface mailnameType extends _mailnameType { constructor: { new(): mailnameType }; }
export var mailnameType: { new(): mailnameType };

interface _mailnameTypeAutorespondersType extends BaseType {
	autoresponder?: mailnameTypeAutorespondersTypeAutoresponderType[];
	enabled?: boolean;
}
interface mailnameTypeAutorespondersType extends _mailnameTypeAutorespondersType { constructor: { new(): mailnameTypeAutorespondersType }; }

interface _mailnameTypeAutorespondersTypeAutoresponderType extends BaseType {
	ans_freq?: number;
	attachment?: string[];
	charset?: string;
	content_type?: mailnameTypeAutorespondersTypeAutoresponderTypeContent_typeType;
	enabled?: boolean;
	end_date?: Date;
	forward?: string;
	key_where?: mailnameTypeAutorespondersTypeAutoresponderTypeKey_whereType;
	keystr?: string;
	mem_limit?: number;
	name: string;
	reply_to?: string;
	subject?: string;
	text?: string;
}
interface mailnameTypeAutorespondersTypeAutoresponderType extends _mailnameTypeAutorespondersTypeAutoresponderType { constructor: { new(): mailnameTypeAutorespondersTypeAutoresponderType }; }

type mailnameTypeAutorespondersTypeAutoresponderTypeContent_typeType = ("text/html" | "text/plain");
interface _mailnameTypeAutorespondersTypeAutoresponderTypeContent_typeType extends Primitive._string { content: mailnameTypeAutorespondersTypeAutoresponderTypeContent_typeType; }

type mailnameTypeAutorespondersTypeAutoresponderTypeKey_whereType = ("subj" | "no" | "body");
interface _mailnameTypeAutorespondersTypeAutoresponderTypeKey_whereType extends Primitive._string { content: mailnameTypeAutorespondersTypeAutoresponderTypeKey_whereType; }

interface _mailnameTypeCp_accessType extends BaseType {
	access: mailnameTypeCp_accessTypeAccessType;
	enabled?: boolean;
}
interface mailnameTypeCp_accessType extends _mailnameTypeCp_accessType { constructor: { new(): mailnameTypeCp_accessType }; }

interface _mailnameTypeCp_accessTypeAccessType extends BaseType {
	disable_lock_screen?: boolean;
	locale?: string;
	multiply_login?: boolean;
	skin_id?: number;
}
interface mailnameTypeCp_accessTypeAccessType extends _mailnameTypeCp_accessTypeAccessType { constructor: { new(): mailnameTypeCp_accessTypeAccessType }; }

interface _mailnameTypeMailboxType extends BaseType {
	enabled: boolean;
	/** Mailbox quota in bytes */
	quota?: number;
	usage?: number;
}
interface mailnameTypeMailboxType extends _mailnameTypeMailboxType { constructor: { new(): mailnameTypeMailboxType }; }

interface _mailnameTypeMailgroupType extends BaseType {
	/** Email address of mailgroup member */
	address?: string[];
	enabled: boolean;
}
interface mailnameTypeMailgroupType extends _mailnameTypeMailgroupType { constructor: { new(): mailnameTypeMailgroupType }; }

interface _mailnameTypeRedirectType extends BaseType {
	/** Email address */
	address?: string;
	enabled: boolean;
}
interface mailnameTypeRedirectType extends _mailnameTypeRedirectType { constructor: { new(): mailnameTypeRedirectType }; }

interface _mailnameTypeRepositoryType extends BaseType {
	file: mailnameTypeRepositoryTypeFileType[];
}
interface mailnameTypeRepositoryType extends _mailnameTypeRepositoryType { constructor: { new(): mailnameTypeRepositoryType }; }

interface _mailnameTypeRepositoryTypeFileType extends BaseType {
	content?: string;
	name: string;
}
interface mailnameTypeRepositoryTypeFileType extends _mailnameTypeRepositoryTypeFileType { constructor: { new(): mailnameTypeRepositoryTypeFileType }; }

/** Plesk's mailname user */
interface _mailnameUpdateAddType extends BaseType {
	alias?: string[];
	autoresponder?: mailnameUpdateAddTypeAutoresponderType;
	/** Login to control panel as user */
	cpAccess?: boolean;
	/** Mailname forwarding settings */
	forwarding?: mailnameUpdateAddTypeForwardingType;
	/** Name of the user */
	name: string;
}
export interface mailnameUpdateAddType extends _mailnameUpdateAddType { constructor: { new(): mailnameUpdateAddType }; }
export var mailnameUpdateAddType: { new(): mailnameUpdateAddType };

interface _mailnameUpdateAddTypeAutoresponderType extends BaseType {
	attachment?: autoRespAttach[];
	charset?: string;
	content_type?: mailnameUpdateAddTypeAutoresponderTypeContent_typeType;
	enabled?: boolean;
	end_date?: Date;
	forward?: string;
	subject?: string;
	text?: string;
}
interface mailnameUpdateAddTypeAutoresponderType extends _mailnameUpdateAddTypeAutoresponderType { constructor: { new(): mailnameUpdateAddTypeAutoresponderType }; }

type mailnameUpdateAddTypeAutoresponderTypeContent_typeType = ("text/html" | "text/plain");
interface _mailnameUpdateAddTypeAutoresponderTypeContent_typeType extends Primitive._string { content: mailnameUpdateAddTypeAutoresponderTypeContent_typeType; }

interface _mailnameUpdateAddTypeForwardingType extends BaseType {
	/** Email address */
	address: string[];
	enabled?: boolean;
}
interface mailnameUpdateAddTypeForwardingType extends _mailnameUpdateAddTypeForwardingType { constructor: { new(): mailnameUpdateAddTypeForwardingType }; }

/** Plesk's mailname user */
interface _mailnameUpdateType extends BaseType {
	alias?: string[];
	antivir?: Antivir;
	autoresponder?: mailnameUpdateTypeAutoresponderType;
	/** Login to control panel as user */
	cpAccess?: boolean;
	description?: string;
	/** Mailname forwarding settings */
	forwarding?: mailnameUpdateTypeForwardingType;
	id?: number;
	/** postbox settings */
	mailbox?: mailnameUpdateTypeMailboxType;
	/** Name of the user */
	name: string;
	outgoingMessagesmboxlimit?: string;
	password?: mailnameUpdateTypePasswordType;
	userGuid?: string;
}
export interface mailnameUpdateType extends _mailnameUpdateType { constructor: { new(): mailnameUpdateType }; }
export var mailnameUpdateType: { new(): mailnameUpdateType };

interface _mailnameUpdateTypeAutoresponderType extends BaseType {
	attachment?: autoRespAttach[];
	charset?: string;
	content_type?: mailnameUpdateTypeAutoresponderTypeContent_typeType;
	enabled?: boolean;
	end_date?: Date;
	forward?: string;
	subject?: string;
	text?: string;
}
interface mailnameUpdateTypeAutoresponderType extends _mailnameUpdateTypeAutoresponderType { constructor: { new(): mailnameUpdateTypeAutoresponderType }; }

type mailnameUpdateTypeAutoresponderTypeContent_typeType = ("text/html" | "text/plain");
interface _mailnameUpdateTypeAutoresponderTypeContent_typeType extends Primitive._string { content: mailnameUpdateTypeAutoresponderTypeContent_typeType; }

interface _mailnameUpdateTypeForwardingType extends BaseType {
	/** Email address */
	address?: string[];
	enabled?: boolean;
}
interface mailnameUpdateTypeForwardingType extends _mailnameUpdateTypeForwardingType { constructor: { new(): mailnameUpdateTypeForwardingType }; }

interface _mailnameUpdateTypeMailboxType extends BaseType {
	enabled?: boolean;
	/** Mailbox quota in bytes */
	quota?: number;
}
interface mailnameUpdateTypeMailboxType extends _mailnameUpdateTypeMailboxType { constructor: { new(): mailnameUpdateTypeMailboxType }; }

interface _mailnameUpdateTypePasswordType extends BaseType {
	type?: passwdType;
	value?: string;
}
interface mailnameUpdateTypePasswordType extends _mailnameUpdateTypePasswordType { constructor: { new(): mailnameUpdateTypePasswordType }; }

interface _MailPreferences extends BaseType {
	greylisting?: boolean;
	ip_address?: string[];
	mailProvider?: MailProvider;
	mailservice?: boolean;
	nonexistentUser?: MailPreferencesNonexistentUserType;
	spamProtectsign?: boolean;
	webmail?: string;
	webmailCertificate?: string;
}
export interface MailPreferences extends _MailPreferences { constructor: { new(): MailPreferences }; }
export var MailPreferences: { new(): MailPreferences };

interface _MailPreferencesNonexistentUserType extends BaseType {
	/** Bounce with message */
	bounce: string;
	/** Forward to address */
	forward: string;
}
interface MailPreferencesNonexistentUserType extends _MailPreferencesNonexistentUserType { constructor: { new(): MailPreferencesNonexistentUserType }; }

interface _MailProvider extends BaseType {
	aps: MailProviderApsType;
}
export interface MailProvider extends _MailProvider { constructor: { new(): MailProvider }; }
export var MailProvider: { new(): MailProvider };

interface _MailProviderApsType extends BaseType {}
interface MailProviderApsType extends _MailProviderApsType { constructor: { new(): MailProviderApsType }; }

interface _MailResponseType extends BaseType {
	create: operationMailResultCreateType[];
	disable: MailResponseTypeDisableType[];
	enable: MailResponseTypeEnableType[];
	getAvailablemailproviders: MailResponseTypeGetAvailablemailprovidersType[];
	get_info: MailResponseTypeGet_infoType[];
	get_prefs: MailResponseTypeGet_prefsType[];
	remove: operationMailResultType[];
	rename: MailResponseTypeRenameType[];
	set_prefs: MailResponseTypeSet_prefsType[];
	update: MailResponseTypeUpdateType[];
}
export interface MailResponseType extends _MailResponseType { constructor: { new(): MailResponseType }; }
export var MailResponseType: { new(): MailResponseType };

interface _MailResponseTypeDisableType extends BaseType {
	result: resultType[];
}
interface MailResponseTypeDisableType extends _MailResponseTypeDisableType { constructor: { new(): MailResponseTypeDisableType }; }

interface _MailResponseTypeEnableType extends BaseType {
	result: resultType[];
}
interface MailResponseTypeEnableType extends _MailResponseTypeEnableType { constructor: { new(): MailResponseTypeEnableType }; }

interface _MailResponseTypeGet_infoType extends BaseType {
	result: operationresultGetInfoType[];
}
interface MailResponseTypeGet_infoType extends _MailResponseTypeGet_infoType { constructor: { new(): MailResponseTypeGet_infoType }; }

interface _MailResponseTypeGet_prefsType extends BaseType {
	result: MailResponseTypeGet_prefsTypeResultType[];
}
interface MailResponseTypeGet_prefsType extends _MailResponseTypeGet_prefsType { constructor: { new(): MailResponseTypeGet_prefsType }; }

interface _MailResponseTypeGet_prefsTypeResultType extends _resultType {
	prefs?: MailPreferences;
	siteId?: number;
}
interface MailResponseTypeGet_prefsTypeResultType extends _MailResponseTypeGet_prefsTypeResultType { constructor: { new(): MailResponseTypeGet_prefsTypeResultType }; }

interface _MailResponseTypeGetAvailablemailprovidersType extends BaseType {
	result: MailResponseTypeGetAvailablemailprovidersTypeResultType[];
}
interface MailResponseTypeGetAvailablemailprovidersType extends _MailResponseTypeGetAvailablemailprovidersType { constructor: { new(): MailResponseTypeGetAvailablemailprovidersType }; }

interface _MailResponseTypeGetAvailablemailprovidersTypeResultType extends _resultType {
	mailProvider?: MailProvider[];
}
interface MailResponseTypeGetAvailablemailprovidersTypeResultType extends _MailResponseTypeGetAvailablemailprovidersTypeResultType { constructor: { new(): MailResponseTypeGetAvailablemailprovidersTypeResultType }; }

interface _MailResponseTypeRenameType extends BaseType {
	result: resultType;
}
interface MailResponseTypeRenameType extends _MailResponseTypeRenameType { constructor: { new(): MailResponseTypeRenameType }; }

interface _MailResponseTypeSet_prefsType extends BaseType {
	result: MailResponseTypeSet_prefsTypeResultType[];
}
interface MailResponseTypeSet_prefsType extends _MailResponseTypeSet_prefsType { constructor: { new(): MailResponseTypeSet_prefsType }; }

interface _MailResponseTypeSet_prefsTypeResultType extends _resultType {
	siteId?: number;
}
interface MailResponseTypeSet_prefsTypeResultType extends _MailResponseTypeSet_prefsTypeResultType { constructor: { new(): MailResponseTypeSet_prefsTypeResultType }; }

interface _MailResponseTypeUpdateType extends BaseType {
	add: operationMailResultType;
	remove: operationMailResultType;
	set: operationMailResultType;
}
interface MailResponseTypeUpdateType extends _MailResponseTypeUpdateType { constructor: { new(): MailResponseTypeUpdateType }; }

interface _MailUserPermission extends BaseType {
	permission: PleskPermissionType[];
}
export interface MailUserPermission extends _MailUserPermission { constructor: { new(): MailUserPermission }; }
export var MailUserPermission: { new(): MailUserPermission };

/** Memory usage */
interface _memStatType extends BaseType {
	buffer: number;
	cached: number;
	free: number;
	shared: number;
	total: number;
	used: number;
}
export interface memStatType extends _memStatType { constructor: { new(): memStatType }; }
export var memStatType: { new(): memStatType };

export type miscPropertyNameType = string;
type _miscPropertyNameType = Primitive._string;

interface _miscPropertyType extends BaseType {
	name: string;
	value?: string;
}
export interface miscPropertyType extends _miscPropertyType { constructor: { new(): miscPropertyType }; }
export var miscPropertyType: { new(): miscPropertyType };

interface _miscResultType extends _resultType {
	property?: miscPropertyType;
}
export interface miscResultType extends _miscResultType { constructor: { new(): miscResultType }; }
export var miscResultType: { new(): miscResultType };

/** Server Network Interface name */
export type netInterface = string;
type _netInterface = _string;

interface _NoneType extends BaseType {}
export interface NoneType extends _NoneType { constructor: { new(): NoneType }; }
export var NoneType: { new(): NoneType };

interface _ObjectDescriptor extends BaseType {
	bind?: BindType[];
	property: PropertyDescriptor[];
}
export interface ObjectDescriptor extends _ObjectDescriptor { constructor: { new(): ObjectDescriptor }; }
export var ObjectDescriptor: { new(): ObjectDescriptor };

/** Objects statistics */
interface _objectsStatType extends BaseType {
	active_domains: number;
	clients: number;
	database_users: number;
	databases: number;
	domains: number;
	mail_boxes: number;
	mail_groups: number;
	mail_redirects: number;
	mail_responders: number;
	problem_clients: number;
	problem_domains: number;
	web_users: number;
}
export interface objectsStatType extends _objectsStatType { constructor: { new(): objectsStatType }; }
export var objectsStatType: { new(): objectsStatType };

/** Plesk client and domain status. Bit mask with bit flags: 0 - object is active 4 - object is under backup/restore 16 - object is disabled by Administrator 64 - object is disabled by Client 256 - object is expired Only 0, 16 and 64 flags are available for setting */
export type objectStatus = number;
type _objectStatus = _int;

interface _operationMailResultCreateType extends BaseType {
	result: operationMailResultCreateTypeResultType[];
}
export interface operationMailResultCreateType extends _operationMailResultCreateType { constructor: { new(): operationMailResultCreateType }; }
export var operationMailResultCreateType: { new(): operationMailResultCreateType };

interface _operationMailResultCreateTypeResultType extends _resultType {
	mailname?: operationMailResultCreateTypeResultTypeMailnameType;
}
interface operationMailResultCreateTypeResultType extends _operationMailResultCreateTypeResultType { constructor: { new(): operationMailResultCreateTypeResultType }; }

interface _operationMailResultCreateTypeResultTypeMailnameType extends BaseType {
	id?: number;
	name: string;
}
interface operationMailResultCreateTypeResultTypeMailnameType extends _operationMailResultCreateTypeResultTypeMailnameType { constructor: { new(): operationMailResultCreateTypeResultTypeMailnameType }; }

interface _operationMailResultType extends BaseType {
	result: operationMailResultTypeResultType[];
}
export interface operationMailResultType extends _operationMailResultType { constructor: { new(): operationMailResultType }; }
export var operationMailResultType: { new(): operationMailResultType };

interface _operationMailResultTypeResultType extends _resultType {
	mailname?: operationMailResultTypeResultTypeMailnameType;
}
interface operationMailResultTypeResultType extends _operationMailResultTypeResultType { constructor: { new(): operationMailResultTypeResultType }; }

interface _operationMailResultTypeResultTypeMailnameType extends BaseType {
	name: string;
}
interface operationMailResultTypeResultTypeMailnameType extends _operationMailResultTypeResultTypeMailnameType { constructor: { new(): operationMailResultTypeResultTypeMailnameType }; }

/** Typical operation result type */
interface _operationResult extends _resultType {
	/** Client ID */
	id?: number;
}
export interface operationResult extends _operationResult { constructor: { new(): operationResult }; }
export var operationResult: { new(): operationResult };

interface _operationresultGetInfoType extends _resultType {
	mailname?: mailnameGetInfoType;
}
export interface operationresultGetInfoType extends _operationresultGetInfoType { constructor: { new(): operationresultGetInfoType }; }
export var operationresultGetInfoType: { new(): operationresultGetInfoType };

/** Misc server stats */
interface _otherStatType extends BaseType {
	cpu: string;
	inside_vz: boolean;
	uptime: number;
}
export interface otherStatType extends _otherStatType { constructor: { new(): otherStatType }; }
export var otherStatType: { new(): otherStatType };

/** Typical password */
export type passwdType = ("plain" | "crypt" | "sym");
interface _passwdType extends _string { content: passwdType; }

interface _PhpHandlerDomainListResult extends BaseType {
	result: PhpHandlerDomainListResultResultType[];
}
export interface PhpHandlerDomainListResult extends _PhpHandlerDomainListResult { constructor: { new(): PhpHandlerDomainListResult }; }
export var PhpHandlerDomainListResult: { new(): PhpHandlerDomainListResult };

interface _PhpHandlerDomainListResultResultType extends _resultType {
	domain?: DomainInfo[];
}
interface PhpHandlerDomainListResultResultType extends _PhpHandlerDomainListResultResultType { constructor: { new(): PhpHandlerDomainListResultResultType }; }

interface _PhpHandlerFilter extends BaseType {
	id?: string[];
}
export interface PhpHandlerFilter extends _PhpHandlerFilter { constructor: { new(): PhpHandlerFilter }; }
export var PhpHandlerFilter: { new(): PhpHandlerFilter };

interface _PhpHandlerInput extends BaseType {
	disable: PhpHandlerInputType[];
	enable: PhpHandlerInputType[];
	get: PhpHandlerInputType[];
	getUsage: PhpHandlerInputType[];
}
export interface PhpHandlerInput extends _PhpHandlerInput { constructor: { new(): PhpHandlerInput }; }
export var PhpHandlerInput: { new(): PhpHandlerInput };

interface _PhpHandlerInputType extends BaseType {
	filter: PhpHandlerFilter;
}
export interface PhpHandlerInputType extends _PhpHandlerInputType { constructor: { new(): PhpHandlerInputType }; }
export var PhpHandlerInputType: { new(): PhpHandlerInputType };

interface _PhpHandlerOutput extends BaseType {
	disable: PhpHandlerOutputResult[];
	enable: PhpHandlerOutputResult[];
	get: PhpHandlerOutputResult[];
	getUsage: PhpHandlerDomainListResult[];
}
export interface PhpHandlerOutput extends _PhpHandlerOutput { constructor: { new(): PhpHandlerOutput }; }
export var PhpHandlerOutput: { new(): PhpHandlerOutput };

interface _PhpHandlerOutputResult extends BaseType {
	result: PhpHandlerOutputResultResultType[];
}
export interface PhpHandlerOutputResult extends _PhpHandlerOutputResult { constructor: { new(): PhpHandlerOutputResult }; }
export var PhpHandlerOutputResult: { new(): PhpHandlerOutputResult };

interface _PhpHandlerOutputResultResultType extends _resultType {
	clipath?: string;
	custom?: string;
	displayName?: string;
	fullVersion?: string;
	handlerStatus?: string;
	id?: string;
	path?: string;
	phpini?: string;
	type?: string;
	version?: string;
}
interface PhpHandlerOutputResultResultType extends _PhpHandlerOutputResultResultType { constructor: { new(): PhpHandlerOutputResultResultType }; }

interface _phpSettings extends BaseType {
	setting?: phpSettingsSettingType[];
}
export interface phpSettings extends _phpSettings { constructor: { new(): phpSettings }; }
export var phpSettings: { new(): phpSettings };

interface _phpSettingsSettingType extends BaseType {
	name: string;
	value: string;
}
interface phpSettingsSettingType extends _phpSettingsSettingType { constructor: { new(): phpSettingsSettingType }; }

interface _PlanOutputInfo extends BaseType {
	planExternalid?: string;
	planGuid: string;
}
export interface PlanOutputInfo extends _PlanOutputInfo { constructor: { new(): PlanOutputInfo }; }
export var PlanOutputInfo: { new(): PlanOutputInfo };

interface _PleskLimitType extends BaseType {
	name: string;
	value: number;
}
export interface PleskLimitType extends _PleskLimitType { constructor: { new(): PleskLimitType }; }
export var PleskLimitType: { new(): PleskLimitType };

/** Operation System, look enumerations */
export type pleskOS = ("Windows" | "RedHat");
interface _pleskOS extends _string { content: pleskOS; }

interface _PleskPermissionType extends BaseType {
	name: string;
	value: boolean;
}
export interface PleskPermissionType extends _PleskPermissionType { constructor: { new(): PleskPermissionType }; }
export var PleskPermissionType: { new(): PleskPermissionType };

interface _PleskPhysHostingPropertyType extends BaseType {
	name: string;
	value: string;
}
export interface PleskPhysHostingPropertyType extends _PleskPhysHostingPropertyType { constructor: { new(): PleskPhysHostingPropertyType }; }
export var PleskPhysHostingPropertyType: { new(): PleskPhysHostingPropertyType };

/** IP pool operation result */
interface _poolOperationResult extends _resultType {
	customerId?: number;
	ip_address?: string;
}
export interface poolOperationResult extends _poolOperationResult { constructor: { new(): poolOperationResult }; }
export var poolOperationResult: { new(): poolOperationResult };

interface _priceInput extends BaseType {
	currency: string;
	sum: string;
}
export interface priceInput extends _priceInput { constructor: { new(): priceInput }; }
export var priceInput: { new(): priceInput };

interface _PropertyDescriptor extends BaseType {
	enum?: EnumElementType[];
	extension?: ExtensionType;
	/** Attaches a hint with the property */
	hint?: string;
	/** Labels the property */
	label?: string;
	/** Identifier */
	name: string;
	type: string;
	writableBy?: string[];
}
export interface PropertyDescriptor extends _PropertyDescriptor { constructor: { new(): PropertyDescriptor }; }
export var PropertyDescriptor: { new(): PropertyDescriptor };

export type PropertyType = ("int" | "float" | "char" | "passwordChar" | "uint");
interface _PropertyType extends Primitive._string { content: PropertyType; }

interface _PropertyValueType extends BaseType {}
export interface PropertyValueType extends _PropertyValueType { constructor: { new(): PropertyValueType }; }
export var PropertyValueType: { new(): PropertyValueType };

interface _ProtectedDir extends BaseType {
	header?: string;
	location?: ProtectedDirLocationType;
	name?: string;
}
export interface ProtectedDir extends _ProtectedDir { constructor: { new(): ProtectedDir }; }
export var ProtectedDir: { new(): ProtectedDir };

interface _ProtectedDirAddInput extends BaseType {
	header?: string;
	location?: ProtectedDirAddInputLocationType;
	name: string;
	siteId: number;
}
export interface ProtectedDirAddInput extends _ProtectedDirAddInput { constructor: { new(): ProtectedDirAddInput }; }
export var ProtectedDirAddInput: { new(): ProtectedDirAddInput };

interface _ProtectedDirAddInputLocationType extends BaseType {
	property: ProtectedDirLocationProperty[];
}
interface ProtectedDirAddInputLocationType extends _ProtectedDirAddInputLocationType { constructor: { new(): ProtectedDirAddInputLocationType }; }

interface _ProtectedDirAddOutput extends BaseType {
	result: ProtectedDirAddOutputResultType;
}
export interface ProtectedDirAddOutput extends _ProtectedDirAddOutput { constructor: { new(): ProtectedDirAddOutput }; }
export var ProtectedDirAddOutput: { new(): ProtectedDirAddOutput };

interface _ProtectedDirAddOutputResultType extends _resultType {
	id?: number;
}
interface ProtectedDirAddOutputResultType extends _ProtectedDirAddOutputResultType { constructor: { new(): ProtectedDirAddOutputResultType }; }

interface _ProtectedDirAddUserInput extends BaseType {
	login: string;
	password: string;
	passwordType?: passwdType;
	pdId: number;
}
export interface ProtectedDirAddUserInput extends _ProtectedDirAddUserInput { constructor: { new(): ProtectedDirAddUserInput }; }
export var ProtectedDirAddUserInput: { new(): ProtectedDirAddUserInput };

interface _ProtectedDirAddUserOutput extends BaseType {
	result: ProtectedDirAddUserOutputResultType;
}
export interface ProtectedDirAddUserOutput extends _ProtectedDirAddUserOutput { constructor: { new(): ProtectedDirAddUserOutput }; }
export var ProtectedDirAddUserOutput: { new(): ProtectedDirAddUserOutput };

interface _ProtectedDirAddUserOutputResultType extends _resultType {
	id?: number;
}
interface ProtectedDirAddUserOutputResultType extends _ProtectedDirAddUserOutputResultType { constructor: { new(): ProtectedDirAddUserOutputResultType }; }

interface _ProtectedDirDeleteInput extends BaseType {
	filter: ProtectedDirFilter;
}
export interface ProtectedDirDeleteInput extends _ProtectedDirDeleteInput { constructor: { new(): ProtectedDirDeleteInput }; }
export var ProtectedDirDeleteInput: { new(): ProtectedDirDeleteInput };

interface _ProtectedDirDeleteOutput extends BaseType {
	result: resultFilterType[];
}
export interface ProtectedDirDeleteOutput extends _ProtectedDirDeleteOutput { constructor: { new(): ProtectedDirDeleteOutput }; }
export var ProtectedDirDeleteOutput: { new(): ProtectedDirDeleteOutput };

interface _ProtectedDirDeleteUserInput extends BaseType {
	filter: ProtectedDirUserFilter;
}
export interface ProtectedDirDeleteUserInput extends _ProtectedDirDeleteUserInput { constructor: { new(): ProtectedDirDeleteUserInput }; }
export var ProtectedDirDeleteUserInput: { new(): ProtectedDirDeleteUserInput };

interface _ProtectedDirDeleteUserOutput extends BaseType {
	result: resultFilterType[];
}
export interface ProtectedDirDeleteUserOutput extends _ProtectedDirDeleteUserOutput { constructor: { new(): ProtectedDirDeleteUserOutput }; }
export var ProtectedDirDeleteUserOutput: { new(): ProtectedDirDeleteUserOutput };

interface _ProtectedDirFilter extends BaseType {
	id?: number[];
	siteId?: number[];
	siteName?: string[];
}
export interface ProtectedDirFilter extends _ProtectedDirFilter { constructor: { new(): ProtectedDirFilter }; }
export var ProtectedDirFilter: { new(): ProtectedDirFilter };

interface _ProtectedDirGetInput extends BaseType {
	filter: ProtectedDirFilter;
}
export interface ProtectedDirGetInput extends _ProtectedDirGetInput { constructor: { new(): ProtectedDirGetInput }; }
export var ProtectedDirGetInput: { new(): ProtectedDirGetInput };

interface _ProtectedDirGetLocationDescriptor extends BaseType {
	filter?: ProtectedDirGetLocationDescriptorFilterType;
}
export interface ProtectedDirGetLocationDescriptor extends _ProtectedDirGetLocationDescriptor { constructor: { new(): ProtectedDirGetLocationDescriptor }; }
export var ProtectedDirGetLocationDescriptor: { new(): ProtectedDirGetLocationDescriptor };

interface _ProtectedDirGetLocationDescriptorFilterType extends BaseType {
	siteId?: number[];
}
interface ProtectedDirGetLocationDescriptorFilterType extends _ProtectedDirGetLocationDescriptorFilterType { constructor: { new(): ProtectedDirGetLocationDescriptorFilterType }; }

interface _ProtectedDirGetOutput extends BaseType {
	result: ProtectedDirGetOutputResultType[];
}
export interface ProtectedDirGetOutput extends _ProtectedDirGetOutput { constructor: { new(): ProtectedDirGetOutput }; }
export var ProtectedDirGetOutput: { new(): ProtectedDirGetOutput };

interface _ProtectedDirGetOutputResultType extends _resultFilterType {
	data?: ProtectedDirGetOutputResultTypeDataType;
}
interface ProtectedDirGetOutputResultType extends _ProtectedDirGetOutputResultType { constructor: { new(): ProtectedDirGetOutputResultType }; }

interface _ProtectedDirGetOutputResultTypeDataType extends BaseType {
	header?: string;
	location?: ProtectedDirGetOutputResultTypeDataTypeLocationType;
	name?: string;
}
interface ProtectedDirGetOutputResultTypeDataType extends _ProtectedDirGetOutputResultTypeDataType { constructor: { new(): ProtectedDirGetOutputResultTypeDataType }; }

interface _ProtectedDirGetOutputResultTypeDataTypeLocationType extends BaseType {
	property: ProtectedDirLocationProperty[];
}
interface ProtectedDirGetOutputResultTypeDataTypeLocationType extends _ProtectedDirGetOutputResultTypeDataTypeLocationType { constructor: { new(): ProtectedDirGetOutputResultTypeDataTypeLocationType }; }

interface _ProtectedDirGetUserInput extends BaseType {
	filter: ProtectedDirUserFilter;
}
export interface ProtectedDirGetUserInput extends _ProtectedDirGetUserInput { constructor: { new(): ProtectedDirGetUserInput }; }
export var ProtectedDirGetUserInput: { new(): ProtectedDirGetUserInput };

interface _ProtectedDirGetUserOutput extends BaseType {
	result: ProtectedDirGetUserOutputResultType[];
}
export interface ProtectedDirGetUserOutput extends _ProtectedDirGetUserOutput { constructor: { new(): ProtectedDirGetUserOutput }; }
export var ProtectedDirGetUserOutput: { new(): ProtectedDirGetUserOutput };

interface _ProtectedDirGetUserOutputResultType extends _resultFilterType {
	data?: ProtectedDirGetUserOutputResultTypeDataType;
}
interface ProtectedDirGetUserOutputResultType extends _ProtectedDirGetUserOutputResultType { constructor: { new(): ProtectedDirGetUserOutputResultType }; }

interface _ProtectedDirGetUserOutputResultTypeDataType extends BaseType {
	login?: string;
}
interface ProtectedDirGetUserOutputResultTypeDataType extends _ProtectedDirGetUserOutputResultTypeDataType { constructor: { new(): ProtectedDirGetUserOutputResultTypeDataType }; }

interface _ProtectedDirInput extends BaseType {
	add: ProtectedDirAddInput[];
	addUser: ProtectedDirAddUserInput[];
	delete: ProtectedDirDeleteInput[];
	deleteUser: ProtectedDirDeleteUserInput[];
	get: ProtectedDirGetInput[];
	getPdlocationdescriptor: ProtectedDirGetLocationDescriptor[];
	getUser: ProtectedDirGetUserInput[];
	set: ProtectedDirSetInput[];
	setUser: ProtectedDirSetUserInput[];
}
export interface ProtectedDirInput extends _ProtectedDirInput { constructor: { new(): ProtectedDirInput }; }
export var ProtectedDirInput: { new(): ProtectedDirInput };

interface _ProtectedDirLocation extends BaseType {
	name: string[];
	value: string[];
}
export interface ProtectedDirLocation extends _ProtectedDirLocation { constructor: { new(): ProtectedDirLocation }; }
export var ProtectedDirLocation: { new(): ProtectedDirLocation };

interface _ProtectedDirLocationProperty extends BaseType {
	name: string;
	value: boolean;
}
export interface ProtectedDirLocationProperty extends _ProtectedDirLocationProperty { constructor: { new(): ProtectedDirLocationProperty }; }
export var ProtectedDirLocationProperty: { new(): ProtectedDirLocationProperty };

interface _ProtectedDirLocationType extends BaseType {
	property: ProtectedDirLocationProperty[];
}
interface ProtectedDirLocationType extends _ProtectedDirLocationType { constructor: { new(): ProtectedDirLocationType }; }

interface _ProtectedDirOutput extends BaseType {
	add: ProtectedDirAddOutput[];
	addUser: ProtectedDirAddUserOutput[];
	delete: ProtectedDirDeleteOutput[];
	deleteUser: ProtectedDirDeleteUserOutput[];
	get: ProtectedDirGetOutput[];
	getPdlocationdescriptor: ProtectedDirOutputGetPdlocationdescriptorType[];
	getUser: ProtectedDirGetUserOutput[];
	set: ProtectedDirSetOutput[];
	setUser: ProtectedDirSetUserOutput[];
}
export interface ProtectedDirOutput extends _ProtectedDirOutput { constructor: { new(): ProtectedDirOutput }; }
export var ProtectedDirOutput: { new(): ProtectedDirOutput };

interface _ProtectedDirOutputGetPdlocationdescriptorType extends BaseType {
	result?: ProtectedDirOutputGetPdlocationdescriptorTypeResultType[];
}
interface ProtectedDirOutputGetPdlocationdescriptorType extends _ProtectedDirOutputGetPdlocationdescriptorType { constructor: { new(): ProtectedDirOutputGetPdlocationdescriptorType }; }

interface _ProtectedDirOutputGetPdlocationdescriptorTypeResultType extends _resultFilterType {
	descriptor?: ObjectDescriptor;
}
interface ProtectedDirOutputGetPdlocationdescriptorTypeResultType extends _ProtectedDirOutputGetPdlocationdescriptorTypeResultType { constructor: { new(): ProtectedDirOutputGetPdlocationdescriptorTypeResultType }; }

interface _ProtectedDirSetInput extends BaseType {
	filter: ProtectedDirFilter;
	values: ProtectedDir;
}
export interface ProtectedDirSetInput extends _ProtectedDirSetInput { constructor: { new(): ProtectedDirSetInput }; }
export var ProtectedDirSetInput: { new(): ProtectedDirSetInput };

interface _ProtectedDirSetOutput extends BaseType {
	result: resultFilterType[];
}
export interface ProtectedDirSetOutput extends _ProtectedDirSetOutput { constructor: { new(): ProtectedDirSetOutput }; }
export var ProtectedDirSetOutput: { new(): ProtectedDirSetOutput };

interface _ProtectedDirSetUserInput extends BaseType {
	filter: ProtectedDirUserFilter;
	values: ProtectedDirUser;
}
export interface ProtectedDirSetUserInput extends _ProtectedDirSetUserInput { constructor: { new(): ProtectedDirSetUserInput }; }
export var ProtectedDirSetUserInput: { new(): ProtectedDirSetUserInput };

interface _ProtectedDirSetUserOutput extends BaseType {
	result: resultFilterType[];
}
export interface ProtectedDirSetUserOutput extends _ProtectedDirSetUserOutput { constructor: { new(): ProtectedDirSetUserOutput }; }
export var ProtectedDirSetUserOutput: { new(): ProtectedDirSetUserOutput };

interface _ProtectedDirUser extends BaseType {
	id?: number;
	login?: string;
	password?: string;
	passwordType?: passwdType;
}
export interface ProtectedDirUser extends _ProtectedDirUser { constructor: { new(): ProtectedDirUser }; }
export var ProtectedDirUser: { new(): ProtectedDirUser };

interface _ProtectedDirUserFilter extends BaseType {
	id?: number[];
	pdId?: number[];
}
export interface ProtectedDirUserFilter extends _ProtectedDirUserFilter { constructor: { new(): ProtectedDirUserFilter }; }
export var ProtectedDirUserFilter: { new(): ProtectedDirUserFilter };

interface _ProtosList extends BaseType {
	proto: string[];
}
export interface ProtosList extends _ProtosList { constructor: { new(): ProtosList }; }
export var ProtosList: { new(): ProtosList };

export type RealDirPath = string;
type _RealDirPath = _string;

interface _RelevantType extends BaseType {
	/** Property identifer */
	name: string;
	readOnly: boolean;
	value: string;
}
export interface RelevantType extends _RelevantType { constructor: { new(): RelevantType }; }
export var RelevantType: { new(): RelevantType };

interface _RemoveVDirInputType extends BaseType {
	name: string;
	siteId: number;
	subdomainId: number;
}
export interface RemoveVDirInputType extends _RemoveVDirInputType { constructor: { new(): RemoveVDirInputType }; }
export var RemoveVDirInputType: { new(): RemoveVDirInputType };

interface _RenewAdditionalKeyResultType extends _resultType {
	name?: string;
}
export interface RenewAdditionalKeyResultType extends _RenewAdditionalKeyResultType { constructor: { new(): RenewAdditionalKeyResultType }; }
export var RenewAdditionalKeyResultType: { new(): RenewAdditionalKeyResultType };

interface _RenewAdditionalKeyType extends BaseType {
	result?: RenewAdditionalKeyResultType[];
}
export interface RenewAdditionalKeyType extends _RenewAdditionalKeyType { constructor: { new(): RenewAdditionalKeyType }; }
export var RenewAdditionalKeyType: { new(): RenewAdditionalKeyType };

/** Reseller adding data */
interface _ResellerAddGenInfo extends BaseType {
	address?: string;
	city?: string;
	cname?: string;
	/** Example: US */
	country?: string;
	description?: string;
	email?: string;
	externalId?: string;
	fax?: string;
	locale?: string;
	login: string;
	passwd: string;
	/** Should be filled for US country */
	pcode?: string;
	phone?: string;
	pname: string;
	powerUser?: boolean;
	/** Should be filled for US country */
	state?: string;
	/** 0:ACTIVE, 16:DISABLED_BY ADMIN, 4:UNDER BACKUP/RESTORE, 256: EXPIRED */
	status?: number;
}
export interface ResellerAddGenInfo extends _ResellerAddGenInfo { constructor: { new(): ResellerAddGenInfo }; }
export var ResellerAddGenInfo: { new(): ResellerAddGenInfo };

interface _ResellerAddInput extends BaseType {
	genInfo: ResellerAddGenInfo;
	limits?: ResellerLimits;
	permissions?: clientPerms;
	/** Resellers template external id */
	planExternalid?: string;
	/** Resellers template guid */
	planGuid?: string;
	/** Resellers template id */
	planId?: number;
	/** Resellers template name */
	planName?: string;
}
export interface ResellerAddInput extends _ResellerAddInput { constructor: { new(): ResellerAddInput }; }
export var ResellerAddInput: { new(): ResellerAddInput };

interface _ResellerAddOutput extends BaseType {
	result: ResellerAddOutputResultType;
}
export interface ResellerAddOutput extends _ResellerAddOutput { constructor: { new(): ResellerAddOutput }; }
export var ResellerAddOutput: { new(): ResellerAddOutput };

interface _ResellerAddOutputResultType extends _resultType {
	/** New reseller GUID on success */
	guid?: string;
	/** New reseller ID on success */
	id?: number;
}
interface ResellerAddOutputResultType extends _ResellerAddOutputResultType { constructor: { new(): ResellerAddOutputResultType }; }

interface _ResellerApplicationInput extends BaseType {
	/** Filter objects to be updated */
	filter: ResellerSelectionFilter;
	package: ApplicationInput[];
}
export interface ResellerApplicationInput extends _ResellerApplicationInput { constructor: { new(): ResellerApplicationInput }; }
export var ResellerApplicationInput: { new(): ResellerApplicationInput };

interface _ResellerApsFilterTypeInput extends BaseType {
	/** Filter objects to be updated */
	filter: ResellerSelectionFilter;
}
export interface ResellerApsFilterTypeInput extends _ResellerApsFilterTypeInput { constructor: { new(): ResellerApsFilterTypeInput }; }
export var ResellerApsFilterTypeInput: { new(): ResellerApsFilterTypeInput };

interface _ResellerCFormButtonsListOutput extends BaseType {
	result: ResellerCFormButtonsListOutputResultType[];
}
export interface ResellerCFormButtonsListOutput extends _ResellerCFormButtonsListOutput { constructor: { new(): ResellerCFormButtonsListOutput }; }
export var ResellerCFormButtonsListOutput: { new(): ResellerCFormButtonsListOutput };

interface _ResellerCFormButtonsListOutputResultType extends _resultFilterType {
	/** Buttons list if no error occured */
	button?: buttonDataType[];
}
interface ResellerCFormButtonsListOutputResultType extends _ResellerCFormButtonsListOutputResultType { constructor: { new(): ResellerCFormButtonsListOutputResultType }; }

/** Information about reseller */
interface _ResellerData extends BaseType {}
export interface ResellerData extends _ResellerData { constructor: { new(): ResellerData }; }
export var ResellerData: { new(): ResellerData };

/** Data to be operated */
interface _ResellerDataset extends BaseType {}
export interface ResellerDataset extends _ResellerDataset { constructor: { new(): ResellerDataset }; }
export var ResellerDataset: { new(): ResellerDataset };

interface _ResellerDelInput extends BaseType {
	/** Fliter Resellers to be deleted */
	filter: ResellerSelectionFilter;
}
export interface ResellerDelInput extends _ResellerDelInput { constructor: { new(): ResellerDelInput }; }
export var ResellerDelInput: { new(): ResellerDelInput };

interface _ResellerDescriptorOutput extends BaseType {
	result?: ResellerDescriptorOutputResultType[];
}
export interface ResellerDescriptorOutput extends _ResellerDescriptorOutput { constructor: { new(): ResellerDescriptorOutput }; }
export var ResellerDescriptorOutput: { new(): ResellerDescriptorOutput };

interface _ResellerDescriptorOutputResultType extends _resultFilterType {
	descriptor?: ObjectDescriptor;
}
interface ResellerDescriptorOutputResultType extends _ResellerDescriptorOutputResultType { constructor: { new(): ResellerDescriptorOutputResultType }; }

/** General information about reseller */
interface _ResellerGetGenInfo extends BaseType {}
export interface ResellerGetGenInfo extends _ResellerGetGenInfo { constructor: { new(): ResellerGetGenInfo }; }
export var ResellerGetGenInfo: { new(): ResellerGetGenInfo };

interface _ResellerGetInput extends BaseType {
	/** Resellers information to be retrieved */
	dataset: ResellerDataset;
	/** Filter resellers to be retrieved */
	filter: ResellerSelectionFilter;
}
export interface ResellerGetInput extends _ResellerGetInput { constructor: { new(): ResellerGetInput }; }
export var ResellerGetInput: { new(): ResellerGetInput };

interface _ResellerGetOutput extends BaseType {
	result: ResellerGetOutputResultType[];
}
export interface ResellerGetOutput extends _ResellerGetOutput { constructor: { new(): ResellerGetOutput }; }
export var ResellerGetOutput: { new(): ResellerGetOutput };

interface _ResellerGetOutputResultType extends _resultFilterType {
	/** Reselllers data. Will not be returned if status isn't "ok" */
	data?: ResellerData;
}
interface ResellerGetOutputResultType extends _ResellerGetOutputResultType { constructor: { new(): ResellerGetOutputResultType }; }

interface _ResellerInput extends BaseType {
	add: ResellerAddInput[];
	addPackage: ResellerApplicationInput[];
	/** List reseller control form buttons */
	cformButtonslist: ResellerInputCformButtonslistType[];
	convertTocustomer: ResellerInputConvertTocustomerType[];
	del: ResellerDelInput[];
	disableApsfilter: ResellerApsFilterTypeInput[];
	enableApsfilter: ResellerApsFilterTypeInput[];
	get: ResellerGetInput[];
	/** Get list of domains for a reseller */
	getDomainlist: ResellerInputGetDomainlistType[];
	getLimitdescriptor: ResellerInputGetLimitdescriptorType[];
	getPermissiondescriptor: ResellerInputGetPermissiondescriptorType[];
	/** Add IP address(es) to reseller's/client's IP pool */
	ippoolAddip: ResellerIpPoolOperation[];
	/** Delete the IP address(es) from the reseller's/client's IP pool */
	ippoolDelip: ResellerIpPoolDelInput[];
	/** Reseller has ability to change ip type in his pool */
	ippoolSetip: ipPoolResellerSet[];
	removePackage: ResellerApplicationInput[];
	set: ResellerSetInput[];
	switchSubscription: ResellerInputSwitchSubscriptionType[];
	syncSubscription: ResellerInputSyncSubscriptionType[];
}
export interface ResellerInput extends _ResellerInput { constructor: { new(): ResellerInput }; }
export var ResellerInput: { new(): ResellerInput };

interface _ResellerInputCformButtonslistType extends BaseType {
	/** Fliter resellers to be listed */
	filter: ResellerSelectionFilter;
}
interface ResellerInputCformButtonslistType extends _ResellerInputCformButtonslistType { constructor: { new(): ResellerInputCformButtonslistType }; }

interface _ResellerInputConvertTocustomerType extends BaseType {
	/** Filter resellers */
	filter: ResellerSelectionFilter;
	planName?: string;
}
interface ResellerInputConvertTocustomerType extends _ResellerInputConvertTocustomerType { constructor: { new(): ResellerInputConvertTocustomerType }; }

interface _ResellerInputGetDomainlistType extends BaseType {
	/** Filter resellers */
	filter: ResellerSelectionFilter;
}
interface ResellerInputGetDomainlistType extends _ResellerInputGetDomainlistType { constructor: { new(): ResellerInputGetDomainlistType }; }

interface _ResellerInputGetLimitdescriptorType extends BaseType {
	/** Fliter resellers to get limits descriptor */
	filter: ResellerSelectionFilter;
}
interface ResellerInputGetLimitdescriptorType extends _ResellerInputGetLimitdescriptorType { constructor: { new(): ResellerInputGetLimitdescriptorType }; }

interface _ResellerInputGetPermissiondescriptorType extends BaseType {
	/** Filter resellers to get permissions descriptor */
	filter: ResellerSelectionFilter;
}
interface ResellerInputGetPermissiondescriptorType extends _ResellerInputGetPermissiondescriptorType { constructor: { new(): ResellerInputGetPermissiondescriptorType }; }

interface _ResellerInputSwitchSubscriptionType extends BaseType {
	filter: ResellerSelectionFilter;
	planExternalid: string;
	planGuid: string;
}
interface ResellerInputSwitchSubscriptionType extends _ResellerInputSwitchSubscriptionType { constructor: { new(): ResellerInputSwitchSubscriptionType }; }

interface _ResellerInputSyncSubscriptionType extends BaseType {
	/** Filter resellers */
	filter: ResellerSelectionFilter;
}
interface ResellerInputSyncSubscriptionType extends _ResellerInputSyncSubscriptionType { constructor: { new(): ResellerInputSyncSubscriptionType }; }

interface _ResellerIp extends BaseType {
	ipAddress: string;
	ipType: string;
}
export interface ResellerIp extends _ResellerIp { constructor: { new(): ResellerIp }; }
export var ResellerIp: { new(): ResellerIp };

/** Reseller's IP pool address removal request */
interface _ResellerIpPoolDelInput extends BaseType {
	externalId: string;
	ipAddress: string[];
	resellerId: number;
}
export interface ResellerIpPoolDelInput extends _ResellerIpPoolDelInput { constructor: { new(): ResellerIpPoolDelInput }; }
export var ResellerIpPoolDelInput: { new(): ResellerIpPoolDelInput };

/** Reseller's IP pool data request */
interface _ResellerIpPoolOperation extends BaseType {
	externalId: string;
	ip: ResellerIpPoolOperationIpType[];
	resellerId: number;
}
export interface ResellerIpPoolOperation extends _ResellerIpPoolOperation { constructor: { new(): ResellerIpPoolOperation }; }
export var ResellerIpPoolOperation: { new(): ResellerIpPoolOperation };

interface _ResellerIpPoolOperationIpType extends BaseType {
	ipAddress: string;
	ipType?: ipType;
}
interface ResellerIpPoolOperationIpType extends _ResellerIpPoolOperationIpType { constructor: { new(): ResellerIpPoolOperationIpType }; }

/** IP pool operation result */
interface _ResellerIpPoolOperationOutput extends BaseType {
	result: ResellerIpPoolOperationOutputResultType[];
}
export interface ResellerIpPoolOperationOutput extends _ResellerIpPoolOperationOutput { constructor: { new(): ResellerIpPoolOperationOutput }; }
export var ResellerIpPoolOperationOutput: { new(): ResellerIpPoolOperationOutput };

interface _ResellerIpPoolOperationOutputResultType extends _resultType {
	ipAddress?: string;
	resellerId?: number;
}
interface ResellerIpPoolOperationOutputResultType extends _ResellerIpPoolOperationOutputResultType { constructor: { new(): ResellerIpPoolOperationOutputResultType }; }

/** Reseller Limits */
interface _ResellerLimits extends BaseType {
	limit?: PleskLimitType[];
	resourcePolicy?: ResellerLimitsResourcePolicyType;
}
export interface ResellerLimits extends _ResellerLimits { constructor: { new(): ResellerLimits }; }
export var ResellerLimits: { new(): ResellerLimits };

interface _ResellerLimitsResourcePolicyType extends BaseType {
	oversell?: boolean;
	overuse?: ResellerLimitsResourcePolicyTypeOveruseType;
}
interface ResellerLimitsResourcePolicyType extends _ResellerLimitsResourcePolicyType { constructor: { new(): ResellerLimitsResourcePolicyType }; }

type ResellerLimitsResourcePolicyTypeOveruseType = ("notify" | "block" | "normal" | "not_suspend" | "not_suspend_notify");
interface _ResellerLimitsResourcePolicyTypeOveruseType extends _string { content: ResellerLimitsResourcePolicyTypeOveruseType; }

interface _ResellerOutput extends BaseType {
	add: ResellerAddOutput[];
	addPackage: ResellerOutputAddPackageType[];
	cformButtonslist: ResellerCFormButtonsListOutput[];
	convertTocustomer: ResellerOutputConvertTocustomerType[];
	/** Response on reseller removing */
	del: ResellerOutputDelType[];
	disableApsfilter: ResellerOutputDisableApsfilterType[];
	enableApsfilter: ResellerOutputEnableApsfilterType[];
	get: ResellerGetOutput[];
	getDomainlist: resultDomainListOutputType[];
	getLimitdescriptor: ResellerDescriptorOutput[];
	getPermissiondescriptor: ResellerDescriptorOutput[];
	ippoolAddip: ResellerIpPoolOperationOutput[];
	ippoolDelip: ResellerIpPoolOperationOutput[];
	ippoolSetip: ResellerIpPoolOperationOutput[];
	removePackage: ResellerOutputRemovePackageType[];
	/** Response on modifying reseller */
	set: ResellerOutputSetType[];
	switchSubscription: ResellerOutputSwitchSubscriptionType[];
	syncSubscription: ResellerOutputSyncSubscriptionType[];
}
export interface ResellerOutput extends _ResellerOutput { constructor: { new(): ResellerOutput }; }
export var ResellerOutput: { new(): ResellerOutput };

interface _ResellerOutputAddPackageType extends BaseType {
	result: resultFilterType[];
}
interface ResellerOutputAddPackageType extends _ResellerOutputAddPackageType { constructor: { new(): ResellerOutputAddPackageType }; }

interface _ResellerOutputConvertTocustomerType extends BaseType {
	result: resultFilterType[];
}
interface ResellerOutputConvertTocustomerType extends _ResellerOutputConvertTocustomerType { constructor: { new(): ResellerOutputConvertTocustomerType }; }

interface _ResellerOutputDelType extends BaseType {
	result: resultFilterType[];
}
interface ResellerOutputDelType extends _ResellerOutputDelType { constructor: { new(): ResellerOutputDelType }; }

interface _ResellerOutputDisableApsfilterType extends BaseType {
	result: resultFilterType[];
}
interface ResellerOutputDisableApsfilterType extends _ResellerOutputDisableApsfilterType { constructor: { new(): ResellerOutputDisableApsfilterType }; }

interface _ResellerOutputEnableApsfilterType extends BaseType {
	result: resultFilterType[];
}
interface ResellerOutputEnableApsfilterType extends _ResellerOutputEnableApsfilterType { constructor: { new(): ResellerOutputEnableApsfilterType }; }

interface _ResellerOutputRemovePackageType extends BaseType {
	result: resultFilterType[];
}
interface ResellerOutputRemovePackageType extends _ResellerOutputRemovePackageType { constructor: { new(): ResellerOutputRemovePackageType }; }

interface _ResellerOutputSetType extends BaseType {
	result: resultFilterType[];
}
interface ResellerOutputSetType extends _ResellerOutputSetType { constructor: { new(): ResellerOutputSetType }; }

interface _ResellerOutputSwitchSubscriptionType extends BaseType {
	result: ResellerOutputSwitchSubscriptionTypeResultType[];
}
interface ResellerOutputSwitchSubscriptionType extends _ResellerOutputSwitchSubscriptionType { constructor: { new(): ResellerOutputSwitchSubscriptionType }; }

interface _ResellerOutputSwitchSubscriptionTypeResultType extends _resultFilterType {
	problems?: string;
}
interface ResellerOutputSwitchSubscriptionTypeResultType extends _ResellerOutputSwitchSubscriptionTypeResultType { constructor: { new(): ResellerOutputSwitchSubscriptionTypeResultType }; }

interface _ResellerOutputSyncSubscriptionType extends BaseType {
	result: ResellerOutputSyncSubscriptionTypeResultType[];
}
interface ResellerOutputSyncSubscriptionType extends _ResellerOutputSyncSubscriptionType { constructor: { new(): ResellerOutputSyncSubscriptionType }; }

interface _ResellerOutputSyncSubscriptionTypeResultType extends _resultFilterType {
	problems?: string;
}
interface ResellerOutputSyncSubscriptionTypeResultType extends _ResellerOutputSyncSubscriptionTypeResultType { constructor: { new(): ResellerOutputSyncSubscriptionTypeResultType }; }

interface _ResellerPlanApplicationInput extends BaseType {
	/** Filter objects to be updated */
	filter: ResellerTemplateFilterType;
	package: ApplicationInput[];
}
export interface ResellerPlanApplicationInput extends _ResellerPlanApplicationInput { constructor: { new(): ResellerPlanApplicationInput }; }
export var ResellerPlanApplicationInput: { new(): ResellerPlanApplicationInput };

/** Fliter resellers list */
interface _ResellerSelectionFilter extends BaseType {
	/** All resellers on server */
	all?: NoneType;
	externalId?: string[];
	/** Reseller GUID */
	guid?: string[];
	/** Reseller ID */
	id?: number[];
	/** Reseller login */
	login?: string[];
}
export interface ResellerSelectionFilter extends _ResellerSelectionFilter { constructor: { new(): ResellerSelectionFilter }; }
export var ResellerSelectionFilter: { new(): ResellerSelectionFilter };

/** Reseller setting data */
interface _ResellerSetGenInfo extends BaseType {
	address?: string;
	city?: string;
	cname?: string;
	country?: string;
	description?: string;
	email?: string;
	externalId?: string;
	fax?: string;
	guid?: NoneType;
	locale?: string;
	login?: string;
	passwd?: string;
	pcode?: string;
	phone?: string;
	pname?: string;
	powerUser?: boolean;
	state?: string;
	status?: number;
}
export interface ResellerSetGenInfo extends _ResellerSetGenInfo { constructor: { new(): ResellerSetGenInfo }; }
export var ResellerSetGenInfo: { new(): ResellerSetGenInfo };

type ResellerSetGenInfoCnameType = string;
type _ResellerSetGenInfoCnameType = _string;

interface _ResellerSetInput extends BaseType {
	/** Filter clients to be refreshed */
	filter: ResellerSelectionFilter;
	values: ResellerSetInputValuesType;
}
export interface ResellerSetInput extends _ResellerSetInput { constructor: { new(): ResellerSetInput }; }
export var ResellerSetInput: { new(): ResellerSetInput };

interface _ResellerSetInputValuesType extends BaseType {
	/** client client info */
	genInfo?: ResellerSetGenInfo;
	/** Client limits */
	limits?: ResellerLimits;
	/** Client Permissions */
	permissions?: clientPerms;
}
interface ResellerSetInputValuesType extends _ResellerSetInputValuesType { constructor: { new(): ResellerSetInputValuesType }; }

/** Resellers statistics */
interface _ResellerStatType extends BaseType {
	activeClients: number;
	activeDomains: number;
	clients: number;
	dataBases: number;
	diskSpace: number;
	domainAliases: number;
	domains: number;
	mailGroups: number;
	mailLists: number;
	mailResps: number;
	mboxQuota: number;
	mssqlDatabases: number;
	postboxs: number;
	redirects: number;
	subdomains: number;
	/** Monthly traffic in bytes */
	traffic: number;
	/** Total traffic for prev.day ( in bytes) */
	trafficPrevday: number;
	webUsers: number;
}
export interface ResellerStatType extends _ResellerStatType { constructor: { new(): ResellerStatType }; }
export var ResellerStatType: { new(): ResellerStatType };

interface _ResellerTemplateAddInputType extends BaseType {
	externalId?: string;
	ipPool?: ResellerTemplateIpPoolType;
	limits?: ResellerLimits;
	name: string;
	permissions?: clientPerms;
}
export interface ResellerTemplateAddInputType extends _ResellerTemplateAddInputType { constructor: { new(): ResellerTemplateAddInputType }; }
export var ResellerTemplateAddInputType: { new(): ResellerTemplateAddInputType };

interface _ResellerTemplateDelInputType extends BaseType {
	filter: ResellerTemplateFilterType;
}
export interface ResellerTemplateDelInputType extends _ResellerTemplateDelInputType { constructor: { new(): ResellerTemplateDelInputType }; }
export var ResellerTemplateDelInputType: { new(): ResellerTemplateDelInputType };

interface _ResellerTemplateDuplicateInputType extends BaseType {
	duplicateName: string;
	name: string;
}
export interface ResellerTemplateDuplicateInputType extends _ResellerTemplateDuplicateInputType { constructor: { new(): ResellerTemplateDuplicateInputType }; }
export var ResellerTemplateDuplicateInputType: { new(): ResellerTemplateDuplicateInputType };

interface _ResellerTemplateFilterType extends BaseType {
	all: NoneType;
	externalId: string[];
	guid: string[];
	id: number[];
	name: string[];
}
export interface ResellerTemplateFilterType extends _ResellerTemplateFilterType { constructor: { new(): ResellerTemplateFilterType }; }
export var ResellerTemplateFilterType: { new(): ResellerTemplateFilterType };

interface _ResellerTemplateGetInputType extends BaseType {
	filter: ResellerTemplateFilterType;
	ipPool?: NoneType;
	limits?: NoneType;
	packages?: NoneType;
	permissions?: NoneType;
}
export interface ResellerTemplateGetInputType extends _ResellerTemplateGetInputType { constructor: { new(): ResellerTemplateGetInputType }; }
export var ResellerTemplateGetInputType: { new(): ResellerTemplateGetInputType };

interface _ResellerTemplateInputType extends BaseType {
	add: ResellerTemplateAddInputType[];
	addPackage: ResellerPlanApplicationInput[];
	del: ResellerTemplateDelInputType[];
	disableApsfilter: ResellerTemplateDelInputType[];
	duplicate: ResellerTemplateDuplicateInputType[];
	enableApsfilter: ResellerTemplateDelInputType[];
	get: ResellerTemplateGetInputType[];
	removePackage: ResellerPlanApplicationInput[];
	set: ResellerTemplateSetInputType[];
}
export interface ResellerTemplateInputType extends _ResellerTemplateInputType { constructor: { new(): ResellerTemplateInputType }; }
export var ResellerTemplateInputType: { new(): ResellerTemplateInputType };

interface _ResellerTemplateIpPoolType extends BaseType {
	allocateIp?: number;
	allocateIpv6?: number;
	ipAddress?: string[];
}
export interface ResellerTemplateIpPoolType extends _ResellerTemplateIpPoolType { constructor: { new(): ResellerTemplateIpPoolType }; }
export var ResellerTemplateIpPoolType: { new(): ResellerTemplateIpPoolType };

interface _ResellerTemplateOutputAddType extends BaseType {
	result: ResellerTemplateOutputResulttype;
}
export interface ResellerTemplateOutputAddType extends _ResellerTemplateOutputAddType { constructor: { new(): ResellerTemplateOutputAddType }; }
export var ResellerTemplateOutputAddType: { new(): ResellerTemplateOutputAddType };

interface _ResellerTemplateOutputApplicationPackagesType extends BaseType {
	package?: APSIdentifierType[];
}
export interface ResellerTemplateOutputApplicationPackagesType extends _ResellerTemplateOutputApplicationPackagesType { constructor: { new(): ResellerTemplateOutputApplicationPackagesType }; }
export var ResellerTemplateOutputApplicationPackagesType: { new(): ResellerTemplateOutputApplicationPackagesType };

interface _ResellerTemplateOutputDelType extends BaseType {
	result: ResellerTemplateOutputResulttype[];
}
export interface ResellerTemplateOutputDelType extends _ResellerTemplateOutputDelType { constructor: { new(): ResellerTemplateOutputDelType }; }
export var ResellerTemplateOutputDelType: { new(): ResellerTemplateOutputDelType };

interface _ResellerTemplateOutputGetType extends BaseType {
	result: ResellerTemplateOutputGetTypeResultType[];
}
export interface ResellerTemplateOutputGetType extends _ResellerTemplateOutputGetType { constructor: { new(): ResellerTemplateOutputGetType }; }
export var ResellerTemplateOutputGetType: { new(): ResellerTemplateOutputGetType };

interface _ResellerTemplateOutputGetTypeResultType extends _ResellerTemplateOutputResulttype {
	apsFilter?: boolean;
	ipPool?: ResellerTemplateIpPoolType;
	limits?: ResellerLimits;
	packages?: ResellerTemplateOutputApplicationPackagesType;
	permissions?: clientPerms;
}
interface ResellerTemplateOutputGetTypeResultType extends _ResellerTemplateOutputGetTypeResultType { constructor: { new(): ResellerTemplateOutputGetTypeResultType }; }

interface _ResellerTemplateOutputResulttype extends _resultType {
	externalId?: string;
	guid?: string;
	id?: number;
	name?: string;
	problems?: string;
}
export interface ResellerTemplateOutputResulttype extends _ResellerTemplateOutputResulttype { constructor: { new(): ResellerTemplateOutputResulttype }; }
export var ResellerTemplateOutputResulttype: { new(): ResellerTemplateOutputResulttype };

interface _ResellerTemplateOutputSetType extends BaseType {
	result: ResellerTemplateOutputResulttype[];
}
export interface ResellerTemplateOutputSetType extends _ResellerTemplateOutputSetType { constructor: { new(): ResellerTemplateOutputSetType }; }
export var ResellerTemplateOutputSetType: { new(): ResellerTemplateOutputSetType };

interface _ResellerTemplateOutputType extends BaseType {
	add: ResellerTemplateOutputAddType[];
	addPackage: ResellerTemplateOutputTypeAddPackageType[];
	del: ResellerTemplateOutputDelType[];
	disableApsfilter: ResellerTemplateOutputTypeDisableApsfilterType[];
	duplicate: ResellerTemplateOutputAddType[];
	enableApsfilter: ResellerTemplateOutputTypeEnableApsfilterType[];
	get: ResellerTemplateOutputGetType[];
	getLimitdescriptor: ResellerDescriptorOutput[];
	getPermissiondescriptor: ResellerDescriptorOutput[];
	removePackage: ResellerTemplateOutputTypeRemovePackageType[];
	set: ResellerTemplateOutputSetType[];
}
export interface ResellerTemplateOutputType extends _ResellerTemplateOutputType { constructor: { new(): ResellerTemplateOutputType }; }
export var ResellerTemplateOutputType: { new(): ResellerTemplateOutputType };

interface _ResellerTemplateOutputTypeAddPackageType extends BaseType {
	result: resultFilterType[];
}
interface ResellerTemplateOutputTypeAddPackageType extends _ResellerTemplateOutputTypeAddPackageType { constructor: { new(): ResellerTemplateOutputTypeAddPackageType }; }

interface _ResellerTemplateOutputTypeDisableApsfilterType extends BaseType {
	result: resultFilterType[];
}
interface ResellerTemplateOutputTypeDisableApsfilterType extends _ResellerTemplateOutputTypeDisableApsfilterType { constructor: { new(): ResellerTemplateOutputTypeDisableApsfilterType }; }

interface _ResellerTemplateOutputTypeEnableApsfilterType extends BaseType {
	result: resultFilterType[];
}
interface ResellerTemplateOutputTypeEnableApsfilterType extends _ResellerTemplateOutputTypeEnableApsfilterType { constructor: { new(): ResellerTemplateOutputTypeEnableApsfilterType }; }

interface _ResellerTemplateOutputTypeRemovePackageType extends BaseType {
	result: resultFilterType[];
}
interface ResellerTemplateOutputTypeRemovePackageType extends _ResellerTemplateOutputTypeRemovePackageType { constructor: { new(): ResellerTemplateOutputTypeRemovePackageType }; }

interface _ResellerTemplatePreferencesType extends BaseType {
	/** Create Sitebuilder user */
	sbnetUser?: boolean;
}
export interface ResellerTemplatePreferencesType extends _ResellerTemplatePreferencesType { constructor: { new(): ResellerTemplatePreferencesType }; }
export var ResellerTemplatePreferencesType: { new(): ResellerTemplatePreferencesType };

interface _ResellerTemplateSetInputType extends BaseType {
	externalId?: string;
	filter: ResellerTemplateFilterType;
	ipPool?: ResellerTemplateIpPoolType;
	limits?: ResellerLimits;
	name?: string;
	permissions?: clientPerms;
}
export interface ResellerTemplateSetInputType extends _ResellerTemplateSetInputType { constructor: { new(): ResellerTemplateSetInputType }; }
export var ResellerTemplateSetInputType: { new(): ResellerTemplateSetInputType };

/** Resourse usage */
interface _resourceUsage extends BaseType {
	counter?: resourceUsageType[];
	resource: resourceUsageType[];
}
export interface resourceUsage extends _resourceUsage { constructor: { new(): resourceUsage }; }
export var resourceUsage: { new(): resourceUsage };

interface _resourceUsageType extends BaseType {}
export interface resourceUsageType extends _resourceUsageType { constructor: { new(): resourceUsageType }; }
export var resourceUsageType: { new(): resourceUsageType };

interface _ResponsePacketType extends BaseType {
	version: string;
	aps: APSOutputType[];
	certificate: CertificateResponseType[];
	customer: ClientResponseType[];
	database: DatabaseOutputType[];
	db_server: DatabaseServerResponseType[];
	dns: DNSResponseType[];
	event_log: EventLogResponseType[];
	extension: ExtensionOutputType[];
	ftpUser: FtpUserOutputType[];
	ip: IpResponseType[];
	locale: LocaleOutput[];
	logRotation: LogRotationOutput[];
	mail: MailResponseType[];
	output?: string;
	phpHandler: PhpHandlerOutput[];
	protectedDir: ProtectedDirOutput[];
	reseller: ResellerOutput[];
	resellerPlan: ResellerTemplateOutputType[];
	secret_key: SecretKeyResponseType[];
	server: ServerOperatorType[];
	servicePlan: DomainTemplateOutputType[];
	servicePlanaddon: DomainAddonTemplateOutputType[];
	session: SessionOutputType[];
	site: SiteResponseType[];
	siteAlias: DomainAliasResponseType[];
	subdomain: SubdomainOutputType[];
	system: resultType;
	ui: UIResponseType[];
	upload: UploadOutputType[];
	virtdir: VDirOutputType[];
	webspace: DomainResponseType[];
}
export interface ResponsePacketType extends _ResponsePacketType { constructor: { new(): ResponsePacketType }; }
export var ResponsePacketType: { new(): ResponsePacketType };

/** Result status */
export type result_status = ("ok" | "error");
interface _result_status extends Primitive._string { content: result_status; }

interface _resultDomainListOutputType extends BaseType {
	result?: resultDomainListOutputTypeResultType[];
}
export interface resultDomainListOutputType extends _resultDomainListOutputType { constructor: { new(): resultDomainListOutputType }; }
export var resultDomainListOutputType: { new(): resultDomainListOutputType };

interface _resultDomainListOutputTypeResultType extends _resultFilterType {
	domains?: domainListOutputType;
}
interface resultDomainListOutputTypeResultType extends _resultDomainListOutputTypeResultType { constructor: { new(): resultDomainListOutputTypeResultType }; }

interface _resultFilterType extends _resultType {
	/** This node is used for binding operation resull with input value that specified in filter. */
	filterId?: string;
	/** Object ID */
	id?: number;
}
export interface resultFilterType extends _resultFilterType { constructor: { new(): resultFilterType }; }
export var resultFilterType: { new(): resultFilterType };

interface _resultOpType extends _resultType {
	siteAliasid?: number;
	siteId?: number;
}
export interface resultOpType extends _resultOpType { constructor: { new(): resultOpType }; }
export var resultOpType: { new(): resultOpType };

/** Operation result */
interface _resultType extends BaseType {
	/** Error code if error occurred */
	errcode?: number;
	/** Error message if error occurred */
	errtext?: string;
	/** Result status (ok/error) */
	status: result_status;
}
export interface resultType extends _resultType { constructor: { new(): resultType }; }
export var resultType: { new(): resultType };

interface _SecretKeyInfo extends BaseType {
	description: string;
	ip_address: string;
	key: string;
	login?: string;
}
export interface SecretKeyInfo extends _SecretKeyInfo { constructor: { new(): SecretKeyInfo }; }
export var SecretKeyInfo: { new(): SecretKeyInfo };

interface _SecretKeyResponseType extends BaseType {
	create: SecretKeyResponseTypeCreateType[];
	delete: SecretKeyResponseTypeDeleteType[];
	get_info: SecretKeyResponseTypeGet_infoType[];
}
export interface SecretKeyResponseType extends _SecretKeyResponseType { constructor: { new(): SecretKeyResponseType }; }
export var SecretKeyResponseType: { new(): SecretKeyResponseType };

interface _SecretKeyResponseTypeCreateType extends BaseType {
	result: SecretKeyResponseTypeCreateTypeResultType;
}
interface SecretKeyResponseTypeCreateType extends _SecretKeyResponseTypeCreateType { constructor: { new(): SecretKeyResponseTypeCreateType }; }

interface _SecretKeyResponseTypeCreateTypeResultType extends _resultType {
	key?: string;
}
interface SecretKeyResponseTypeCreateTypeResultType extends _SecretKeyResponseTypeCreateTypeResultType { constructor: { new(): SecretKeyResponseTypeCreateTypeResultType }; }

interface _SecretKeyResponseTypeDeleteType extends BaseType {
	result: SecretKeyResponseTypeDeleteTypeResultType[];
}
interface SecretKeyResponseTypeDeleteType extends _SecretKeyResponseTypeDeleteType { constructor: { new(): SecretKeyResponseTypeDeleteType }; }

interface _SecretKeyResponseTypeDeleteTypeResultType extends _resultType {
	key?: string;
}
interface SecretKeyResponseTypeDeleteTypeResultType extends _SecretKeyResponseTypeDeleteTypeResultType { constructor: { new(): SecretKeyResponseTypeDeleteTypeResultType }; }

interface _SecretKeyResponseTypeGet_infoType extends BaseType {
	result: SecretKeyResponseTypeGet_infoTypeResultType[];
}
interface SecretKeyResponseTypeGet_infoType extends _SecretKeyResponseTypeGet_infoType { constructor: { new(): SecretKeyResponseTypeGet_infoType }; }

interface _SecretKeyResponseTypeGet_infoTypeResultType extends _resultType {
	key?: string;
	key_info?: SecretKeyInfo[];
}
interface SecretKeyResponseTypeGet_infoTypeResultType extends _SecretKeyResponseTypeGet_infoTypeResultType { constructor: { new(): SecretKeyResponseTypeGet_infoTypeResultType }; }

/** Server Certificates */
interface _serverCertificates extends BaseType {}
export interface serverCertificates extends _serverCertificates { constructor: { new(): serverCertificates }; }
export var serverCertificates: { new(): serverCertificates };

/** Server general info */
interface _serverGenInfoType extends BaseType {
	externalId?: string;
	mode?: serverGenInfoTypeModeType;
	server_guid: string;
	server_name: string;
	/** Show VPS optimized status. */
	vpsOptimizedstatus?: VPSOptimizedStatus;
}
export interface serverGenInfoType extends _serverGenInfoType { constructor: { new(): serverGenInfoType }; }
export var serverGenInfoType: { new(): serverGenInfoType };

type serverGenInfoTypeModeType = ("poweruser" | "standard");
interface _serverGenInfoTypeModeType extends _string { content: serverGenInfoTypeModeType; }

interface _ServerOperatorType extends BaseType {
	addAdminalias: ServerOperatorTypeAddAdminaliasType[];
	cleanMailqueue: ServerOperatorTypeCleanMailqueueType[];
	create_session: CreateSessionType[];
	delAdminalias: ServerOperatorTypeDelAdminaliasType[];
	del_misc: DelMiscType[];
	domainRestrictionadd: ServerOperatorTypeDomainRestrictionaddType[];
	domainRestrictiondisable: ServerOperatorTypeDomainRestrictiondisableType[];
	domainRestrictionenable: ServerOperatorTypeDomainRestrictionenableType[];
	domainRestrictionlist: ServerOperatorTypeDomainRestrictionlistType[];
	domainRestrictionremove: ServerOperatorTypeDomainRestrictionremoveType[];
	domainRestrictionrename: ServerOperatorTypeDomainRestrictionrenameType[];
	/** Get operation */
	get: GetType[];
	get_additional_key: GetAdditionalKeyType[];
	get_misc: GetMiscType[];
	/** Get supported PA protocols */
	get_protos: GetProtosType[];
	/** Initial setup result */
	initial_setup: initialSetupType[];
	lic_get_info: keyType[];
	/** Reports license installation started */
	lic_install: LicenseInstallType[];
	/** Reports license update done */
	lic_update: resultType[];
	licenseRetrievekeys: ServerOperatorTypeLicenseRetrievekeysType[];
	licenseRollbackkey: ServerOperatorTypeLicenseRollbackkeyType[];
	reboot: ServerOperatorTypeRebootType[];
	remove_additional_key: GetValidationModeResultType[];
	renew_additional_key: RenewAdditionalKeyType[];
	/** Setup server */
	set: SetType[];
	setAdminalias: ServerOperatorTypeSetAdminaliasType[];
	setPpbconnection: ServerOperatorTypeSetPpbconnectionType[];
	set_misc: SetMiscType[];
	/** Services management */
	srv_man: ServicesManagementType[];
}
export interface ServerOperatorType extends _ServerOperatorType { constructor: { new(): ServerOperatorType }; }
export var ServerOperatorType: { new(): ServerOperatorType };

interface _ServerOperatorTypeAddAdminaliasType extends BaseType {
	result: resultType;
}
interface ServerOperatorTypeAddAdminaliasType extends _ServerOperatorTypeAddAdminaliasType { constructor: { new(): ServerOperatorTypeAddAdminaliasType }; }

interface _ServerOperatorTypeCleanMailqueueType extends BaseType {
	result: resultType;
}
interface ServerOperatorTypeCleanMailqueueType extends _ServerOperatorTypeCleanMailqueueType { constructor: { new(): ServerOperatorTypeCleanMailqueueType }; }

interface _ServerOperatorTypeDelAdminaliasType extends BaseType {
	result: resultType;
}
interface ServerOperatorTypeDelAdminaliasType extends _ServerOperatorTypeDelAdminaliasType { constructor: { new(): ServerOperatorTypeDelAdminaliasType }; }

interface _ServerOperatorTypeDomainRestrictionaddType extends BaseType {
	result: resultType;
}
interface ServerOperatorTypeDomainRestrictionaddType extends _ServerOperatorTypeDomainRestrictionaddType { constructor: { new(): ServerOperatorTypeDomainRestrictionaddType }; }

interface _ServerOperatorTypeDomainRestrictiondisableType extends BaseType {
	result: resultType;
}
interface ServerOperatorTypeDomainRestrictiondisableType extends _ServerOperatorTypeDomainRestrictiondisableType { constructor: { new(): ServerOperatorTypeDomainRestrictiondisableType }; }

interface _ServerOperatorTypeDomainRestrictionenableType extends BaseType {
	result: resultType;
}
interface ServerOperatorTypeDomainRestrictionenableType extends _ServerOperatorTypeDomainRestrictionenableType { constructor: { new(): ServerOperatorTypeDomainRestrictionenableType }; }

interface _ServerOperatorTypeDomainRestrictionlistType extends BaseType {
	enable: number;
	name?: string[];
}
interface ServerOperatorTypeDomainRestrictionlistType extends _ServerOperatorTypeDomainRestrictionlistType { constructor: { new(): ServerOperatorTypeDomainRestrictionlistType }; }

interface _ServerOperatorTypeDomainRestrictionremoveType extends BaseType {
	result: resultType;
}
interface ServerOperatorTypeDomainRestrictionremoveType extends _ServerOperatorTypeDomainRestrictionremoveType { constructor: { new(): ServerOperatorTypeDomainRestrictionremoveType }; }

interface _ServerOperatorTypeDomainRestrictionrenameType extends BaseType {
	result: resultType;
}
interface ServerOperatorTypeDomainRestrictionrenameType extends _ServerOperatorTypeDomainRestrictionrenameType { constructor: { new(): ServerOperatorTypeDomainRestrictionrenameType }; }

interface _ServerOperatorTypeLicenseRetrievekeysType extends BaseType {
	result: resultType;
}
interface ServerOperatorTypeLicenseRetrievekeysType extends _ServerOperatorTypeLicenseRetrievekeysType { constructor: { new(): ServerOperatorTypeLicenseRetrievekeysType }; }

interface _ServerOperatorTypeLicenseRollbackkeyType extends BaseType {
	result: ServerOperatorTypeLicenseRollbackkeyTypeResultType;
}
interface ServerOperatorTypeLicenseRollbackkeyType extends _ServerOperatorTypeLicenseRollbackkeyType { constructor: { new(): ServerOperatorTypeLicenseRollbackkeyType }; }

interface _ServerOperatorTypeLicenseRollbackkeyTypeResultType extends _resultType {
	/** New key id */
	keyId?: string;
}
interface ServerOperatorTypeLicenseRollbackkeyTypeResultType extends _ServerOperatorTypeLicenseRollbackkeyTypeResultType { constructor: { new(): ServerOperatorTypeLicenseRollbackkeyTypeResultType }; }

interface _ServerOperatorTypeRebootType extends BaseType {
	result: resultType;
}
interface ServerOperatorTypeRebootType extends _ServerOperatorTypeRebootType { constructor: { new(): ServerOperatorTypeRebootType }; }

interface _ServerOperatorTypeSetAdminaliasType extends BaseType {
	result: resultType;
}
interface ServerOperatorTypeSetAdminaliasType extends _ServerOperatorTypeSetAdminaliasType { constructor: { new(): ServerOperatorTypeSetAdminaliasType }; }

interface _ServerOperatorTypeSetPpbconnectionType extends BaseType {
	result: resultType;
}
interface ServerOperatorTypeSetPpbconnectionType extends _ServerOperatorTypeSetPpbconnectionType { constructor: { new(): ServerOperatorTypeSetPpbconnectionType }; }

/** Server Admin Password */
export type serverPassword = string;
type _serverPassword = _string;

/** Server preferences */
interface _serverPrefs extends BaseType {}
export interface serverPrefs extends _serverPrefs { constructor: { new(): serverPrefs }; }
export var serverPrefs: { new(): serverPrefs };

/** Server Session Setup */
interface _serverSessionSetup extends BaseType {}
export interface serverSessionSetup extends _serverSessionSetup { constructor: { new(): serverSessionSetup }; }
export var serverSessionSetup: { new(): serverSessionSetup };

interface _ServicePlanAddonApplicationInput extends BaseType {
	filter: DomainAddonTemplateFilterType;
	ownerId?: number;
	ownerLogin?: string;
	package: ApplicationInput[];
}
export interface ServicePlanAddonApplicationInput extends _ServicePlanAddonApplicationInput { constructor: { new(): ServicePlanAddonApplicationInput }; }
export var ServicePlanAddonApplicationInput: { new(): ServicePlanAddonApplicationInput };

interface _ServicePlanAddonApsFilterInputType extends BaseType {
	/** Filter objects to be updated */
	filter: DomainAddonTemplateFilterType;
	ownerId?: number;
	ownerLogin?: string;
}
export interface ServicePlanAddonApsFilterInputType extends _ServicePlanAddonApsFilterInputType { constructor: { new(): ServicePlanAddonApsFilterInputType }; }
export var ServicePlanAddonApsFilterInputType: { new(): ServicePlanAddonApsFilterInputType };

interface _ServicePlanApplicationInput extends BaseType {
	filter: DomainTemplateFilterType;
	ownerId?: number;
	ownerLogin?: string;
	package: ApplicationInput[];
}
export interface ServicePlanApplicationInput extends _ServicePlanApplicationInput { constructor: { new(): ServicePlanApplicationInput }; }
export var ServicePlanApplicationInput: { new(): ServicePlanApplicationInput };

interface _ServicePlanApsFilterInputType extends BaseType {
	/** Filter objects to be updated */
	filter: DomainTemplateFilterType;
	ownerId?: number;
	ownerLogin?: string;
}
export interface ServicePlanApsFilterInputType extends _ServicePlanApsFilterInputType { constructor: { new(): ServicePlanApsFilterInputType }; }
export var ServicePlanApsFilterInputType: { new(): ServicePlanApsFilterInputType };

interface _ServicePlanPlanItemInputType extends BaseType {
	filter: DomainTemplateFilterType;
	ownerId?: number;
	ownerLogin?: string;
	planItem: ServicePlanPlanItemInputTypePlanItemType;
}
export interface ServicePlanPlanItemInputType extends _ServicePlanPlanItemInputType { constructor: { new(): ServicePlanPlanItemInputType }; }
export var ServicePlanPlanItemInputType: { new(): ServicePlanPlanItemInputType };

interface _ServicePlanPlanItemInputTypePlanItemType extends BaseType {
	name: string;
}
interface ServicePlanPlanItemInputTypePlanItemType extends _ServicePlanPlanItemInputTypePlanItemType { constructor: { new(): ServicePlanPlanItemInputTypePlanItemType }; }

interface _ServicesManagementResultType extends _resultType {
	/** Operated service ID */
	id?: string;
}
export interface ServicesManagementResultType extends _ServicesManagementResultType { constructor: { new(): ServicesManagementResultType }; }
export var ServicesManagementResultType: { new(): ServicesManagementResultType };

interface _ServicesManagementType extends BaseType {
	result: ServicesManagementResultType;
}
export interface ServicesManagementType extends _ServicesManagementType { constructor: { new(): ServicesManagementType }; }
export var ServicesManagementType: { new(): ServicesManagementType };

/** Server services state */
interface _servicesState extends BaseType {
	srv?: servicesStateSrvType[];
}
export interface servicesState extends _servicesState { constructor: { new(): servicesState }; }
export var servicesState: { new(): servicesState };

interface _servicesStateSrvType extends BaseType {}
interface servicesStateSrvType extends _servicesStateSrvType { constructor: { new(): servicesStateSrvType }; }

interface _Session extends BaseType {
	id: string;
	idle: Date;
	ipAddress: string;
	login: string;
	loginTime: Date;
	type: SessionType;
}
export interface Session extends _Session { constructor: { new(): Session }; }
export var Session: { new(): Session };

interface _SessionGetOutputType extends BaseType {
	result: SessionGetOutputTypeResultType;
}
export interface SessionGetOutputType extends _SessionGetOutputType { constructor: { new(): SessionGetOutputType }; }
export var SessionGetOutputType: { new(): SessionGetOutputType };

interface _SessionGetOutputTypeResultType extends _resultType {
	session?: Session[];
}
interface SessionGetOutputTypeResultType extends _SessionGetOutputTypeResultType { constructor: { new(): SessionGetOutputTypeResultType }; }

interface _SessionInputType extends BaseType {
	terminate: SessionTerminateInput[];
}
export interface SessionInputType extends _SessionInputType { constructor: { new(): SessionInputType }; }
export var SessionInputType: { new(): SessionInputType };

interface _SessionOutputType extends BaseType {
	get: SessionGetOutputType[];
	terminate: SessionTerminateOutput[];
}
export interface SessionOutputType extends _SessionOutputType { constructor: { new(): SessionOutputType }; }
export var SessionOutputType: { new(): SessionOutputType };

interface _SessionTerminateInput extends BaseType {
	sessionId: string;
}
export interface SessionTerminateInput extends _SessionTerminateInput { constructor: { new(): SessionTerminateInput }; }
export var SessionTerminateInput: { new(): SessionTerminateInput };

interface _SessionTerminateOutput extends BaseType {
	result: resultType;
}
export interface SessionTerminateOutput extends _SessionTerminateOutput { constructor: { new(): SessionTerminateOutput }; }
export var SessionTerminateOutput: { new(): SessionTerminateOutput };

export type SessionType = ("admin" | "client" | "domain-admin" | "mail-user" | "reseller");
interface _SessionType extends _string { content: SessionType; }

/** Domain general setup info */
interface _setGenSetupType extends BaseType {
	adminAsvendor?: NoneType[];
	adminDescription?: string[];
	description?: string[];
	externalId?: string[];
	guid?: NoneType[];
	ip_address?: string[];
	name?: string[];
	ownerExternalid?: string[];
	ownerGuid?: string[];
	ownerId?: number[];
	ownerLogin?: string[];
	resellerDescription?: string[];
	status?: number[];
}
export interface setGenSetupType extends _setGenSetupType { constructor: { new(): setGenSetupType }; }
export var setGenSetupType: { new(): setGenSetupType };

interface _SetMiscType extends BaseType {
	result?: miscResultType[];
}
export interface SetMiscType extends _SetMiscType { constructor: { new(): SetMiscType }; }
export var SetMiscType: { new(): SetMiscType };

interface _SetResultType extends _resultType {}
export interface SetResultType extends _SetResultType { constructor: { new(): SetResultType }; }
export var SetResultType: { new(): SetResultType };

/** Domain general setup info */
interface _setSiteGenSetupType extends BaseType {}
export interface setSiteGenSetupType extends _setSiteGenSetupType { constructor: { new(): setSiteGenSetupType }; }
export var setSiteGenSetupType: { new(): setSiteGenSetupType };

interface _Settings extends BaseType {
	manageDns?: boolean;
	pref?: SettingsPrefType;
	status?: number;
}
export interface Settings extends _Settings { constructor: { new(): Settings }; }
export var Settings: { new(): Settings };

interface _SettingsPrefType extends BaseType {
	/** ICP permit for the domain name */
	icpPermit?: string;
	/** ICP status is true if the domain name is approved */
	icpStatus?: boolean;
	mail?: boolean;
	seoRedirect?: boolean;
	web?: boolean;
}
interface SettingsPrefType extends _SettingsPrefType { constructor: { new(): SettingsPrefType }; }

interface _SetType extends BaseType {
	result: SetResultType;
}
export interface SetType extends _SetType { constructor: { new(): SetType }; }
export var SetType: { new(): SetType };

interface _SetValidationModeResultType extends BaseType {
	result: resultType;
}
export interface SetValidationModeResultType extends _SetValidationModeResultType { constructor: { new(): SetValidationModeResultType }; }
export var SetValidationModeResultType: { new(): SetValidationModeResultType };

interface _ShellsList extends BaseType {
	shell: shellType[];
}
export interface ShellsList extends _ShellsList { constructor: { new(): ShellsList }; }
export var ShellsList: { new(): ShellsList };

/** Server shell */
interface _shellType extends BaseType {
	name: string;
	path: string;
}
export interface shellType extends _shellType { constructor: { new(): shellType }; }
export var shellType: { new(): shellType };

export type short = number;
type _short = Primitive._number;

/** Data to be operated */
interface _siteDatasetType extends BaseType {}
export interface siteDatasetType extends _siteDatasetType { constructor: { new(): siteDatasetType }; }
export var siteDatasetType: { new(): siteDatasetType };

/** Fliter domains list */
interface _siteFilterType extends BaseType {
	/** Site GUID */
	guid?: string[];
	/** site ID ( ID in Plesk DB) */
	id?: number[];
	/** site name (UTF-8) */
	name?: string[];
	/** webspace GUID */
	parentGuid?: string[];
	/** webspace ID */
	parentId?: number[];
	/** webspace name */
	parentName?: string[];
	/** site GUID */
	parentSiteguid?: string[];
	/** site ID */
	parentSiteid?: number[];
	/** site name */
	parentSitename?: string[];
}
export interface siteFilterType extends _siteFilterType { constructor: { new(): siteFilterType }; }
export var siteFilterType: { new(): siteFilterType };

/** General domain information */
interface _siteGenInfoType extends BaseType {
	asciiName: string;
	cr_date: Date;
	description?: string;
	/** Domain IP addresses in DNS A and AAAA records. Use it in case of unexisted domain hosting. */
	dns_ip_address?: string[];
	guid: string;
	htype: domainHType;
	/** Domain name to be displayed in UI */
	name: string;
	real_size: number;
	sbSiteuuid?: string;
	status: number;
	turnOffaction?: turnOffAction;
	webspaceGuid: string;
	webspaceId: number;
}
export interface siteGenInfoType extends _siteGenInfoType { constructor: { new(): siteGenInfoType }; }
export var siteGenInfoType: { new(): siteGenInfoType };

/** Domain Hosting (Plesk Agent specific) for 'set' operation */
interface _siteHostingAgentSet extends BaseType {
	/** Frame forwarding */
	frm_fwd: domainFFHostingBase;
	/** Standard forwarding */
	std_fwd: domainSFHostingBase;
	/** Physical hosting */
	vrt_hst: siteHostingAgentSetVrt_hstType;
}
export interface siteHostingAgentSet extends _siteHostingAgentSet { constructor: { new(): siteHostingAgentSet }; }
export var siteHostingAgentSet: { new(): siteHostingAgentSet };

interface _siteHostingAgentSetVrt_hstType extends _sitePhHostingSet {}
interface siteHostingAgentSetVrt_hstType extends _siteHostingAgentSetVrt_hstType { constructor: { new(): siteHostingAgentSetVrt_hstType }; }

interface _siteIsolationConfigOutput extends BaseType {
	property: siteIsolationConfigOutputPropertyType[];
}
export interface siteIsolationConfigOutput extends _siteIsolationConfigOutput { constructor: { new(): siteIsolationConfigOutput }; }
export var siteIsolationConfigOutput: { new(): siteIsolationConfigOutput };

interface _siteIsolationConfigOutputPropertyType extends BaseType {
	name: string;
	value: string[];
}
interface siteIsolationConfigOutputPropertyType extends _siteIsolationConfigOutputPropertyType { constructor: { new(): siteIsolationConfigOutputPropertyType }; }

interface _SiteMailPreferences extends BaseType {
	mailservice?: boolean;
}
export interface SiteMailPreferences extends _SiteMailPreferences { constructor: { new(): SiteMailPreferences }; }
export var SiteMailPreferences: { new(): SiteMailPreferences };

/** Domain Physical Hosting for 'set' operation */
interface _sitePhHostingSet extends BaseType {
	property: PleskPhysHostingPropertyType[];
}
export interface sitePhHostingSet extends _sitePhHostingSet { constructor: { new(): sitePhHostingSet }; }
export var sitePhHostingSet: { new(): sitePhHostingSet };

interface _SiteResponseType extends BaseType {
	/** Add domain */
	add: SiteResponseTypeAddType[];
	/** List domain control form buttons result */
	cform_buttons_list: SiteResponseTypeCform_buttons_listType[];
	/** Deleting result */
	del: SiteResponseTypeDelType[];
	/** Getting result */
	get: SiteResponseTypeGetType[];
	getPhysicalhostingdescriptor: SiteResponseTypeGetPhysicalhostingdescriptorType[];
	get_traffic: SiteResponseTypeGet_trafficType[];
	/** Updating result */
	set: SiteResponseTypeSetType[];
	set_traffic: SiteResponseTypeSet_trafficType[];
}
export interface SiteResponseType extends _SiteResponseType { constructor: { new(): SiteResponseType }; }
export var SiteResponseType: { new(): SiteResponseType };

interface _SiteResponseTypeAddType extends BaseType {
	result: SiteResponseTypeAddTypeResultType;
}
interface SiteResponseTypeAddType extends _SiteResponseTypeAddType { constructor: { new(): SiteResponseTypeAddType }; }

interface _SiteResponseTypeAddTypeResultType extends _resultType {
	/** New domain GUID */
	guid?: string;
	/** New domain ID */
	id?: number;
}
interface SiteResponseTypeAddTypeResultType extends _SiteResponseTypeAddTypeResultType { constructor: { new(): SiteResponseTypeAddTypeResultType }; }

interface _SiteResponseTypeCform_buttons_listType extends BaseType {
	result: SiteResponseTypeCform_buttons_listTypeResultType[];
}
interface SiteResponseTypeCform_buttons_listType extends _SiteResponseTypeCform_buttons_listType { constructor: { new(): SiteResponseTypeCform_buttons_listType }; }

interface _SiteResponseTypeCform_buttons_listTypeResultType extends _resultFilterType {
	/** BUttons list if no error occured */
	button?: buttonDataType[];
}
interface SiteResponseTypeCform_buttons_listTypeResultType extends _SiteResponseTypeCform_buttons_listTypeResultType { constructor: { new(): SiteResponseTypeCform_buttons_listTypeResultType }; }

interface _SiteResponseTypeDelType extends BaseType {
	result?: resultFilterType[];
}
interface SiteResponseTypeDelType extends _SiteResponseTypeDelType { constructor: { new(): SiteResponseTypeDelType }; }

interface _SiteResponseTypeGet_trafficType extends BaseType {
	result?: SiteResponseTypeGet_trafficTypeResultType[];
}
interface SiteResponseTypeGet_trafficType extends _SiteResponseTypeGet_trafficType { constructor: { new(): SiteResponseTypeGet_trafficType }; }

interface _SiteResponseTypeGet_trafficTypeResultType extends _resultFilterType {
	traffic?: trafficType[];
}
interface SiteResponseTypeGet_trafficTypeResultType extends _SiteResponseTypeGet_trafficTypeResultType { constructor: { new(): SiteResponseTypeGet_trafficTypeResultType }; }

interface _SiteResponseTypeGetPhysicalhostingdescriptorType extends BaseType {
	result?: SiteResponseTypeGetPhysicalhostingdescriptorTypeResultType[];
}
interface SiteResponseTypeGetPhysicalhostingdescriptorType extends _SiteResponseTypeGetPhysicalhostingdescriptorType { constructor: { new(): SiteResponseTypeGetPhysicalhostingdescriptorType }; }

interface _SiteResponseTypeGetPhysicalhostingdescriptorTypeResultType extends _resultFilterType {
	descriptor?: ObjectDescriptor;
}
interface SiteResponseTypeGetPhysicalhostingdescriptorTypeResultType extends _SiteResponseTypeGetPhysicalhostingdescriptorTypeResultType { constructor: { new(): SiteResponseTypeGetPhysicalhostingdescriptorTypeResultType }; }

interface _SiteResponseTypeGetType extends BaseType {
	result?: SiteResponseTypeGetTypeResultType[];
}
interface SiteResponseTypeGetType extends _SiteResponseTypeGetType { constructor: { new(): SiteResponseTypeGetType }; }

interface _SiteResponseTypeGetTypeResultType extends _resultFilterType {
	/** Domain datas. Will not returned if status isn't "ok" */
	data?: SiteResponseTypeGetTypeResultTypeDataType;
}
interface SiteResponseTypeGetTypeResultType extends _SiteResponseTypeGetTypeResultType { constructor: { new(): SiteResponseTypeGetTypeResultType }; }

interface _SiteResponseTypeGetTypeResultTypeDataType extends BaseType {
	disk_usage?: SiteResponseTypeGetTypeResultTypeDataTypeDisk_usageType;
	gen_info?: siteGenInfoType;
	hosting?: domainHostingAgentGet;
	performance?: DomainPerformanceType;
	prefs?: domainPrefs;
	stat?: siteStat;
}
interface SiteResponseTypeGetTypeResultTypeDataType extends _SiteResponseTypeGetTypeResultTypeDataType { constructor: { new(): SiteResponseTypeGetTypeResultTypeDataType }; }

interface _SiteResponseTypeGetTypeResultTypeDataTypeDisk_usageType extends BaseType {
	anonftp: number;
	chroot?: number;
	configs?: number;
	/** for Unix Plesk */
	dbases: number;
	domaindumps: number;
	httpdocs: number;
	httpsdocs: number;
	logs: number;
	mailboxes: number;
	maillists: number;
	/** for Win Plesk */
	mssql_dbases: number;
	/** for Win Plesk */
	mysql_dbases: number;
	subdomains: number;
	web_users: number;
}
interface SiteResponseTypeGetTypeResultTypeDataTypeDisk_usageType extends _SiteResponseTypeGetTypeResultTypeDataTypeDisk_usageType { constructor: { new(): SiteResponseTypeGetTypeResultTypeDataTypeDisk_usageType }; }

interface _SiteResponseTypeSet_trafficType extends BaseType {
	result: SiteResponseTypeSet_trafficTypeResultType;
}
interface SiteResponseTypeSet_trafficType extends _SiteResponseTypeSet_trafficType { constructor: { new(): SiteResponseTypeSet_trafficType }; }

interface _SiteResponseTypeSet_trafficTypeResultType extends _resultType {
	id?: number;
}
interface SiteResponseTypeSet_trafficTypeResultType extends _SiteResponseTypeSet_trafficTypeResultType { constructor: { new(): SiteResponseTypeSet_trafficTypeResultType }; }

interface _SiteResponseTypeSetType extends BaseType {
	result?: resultFilterType[];
}
interface SiteResponseTypeSetType extends _SiteResponseTypeSetType { constructor: { new(): SiteResponseTypeSetType }; }

/** Domain statistics */
interface _siteStat extends BaseType {}
export interface siteStat extends _siteStat { constructor: { new(): siteStat }; }
export var siteStat: { new(): siteStat };

interface _SiteTypeRequest extends BaseType {
	add: SiteTypeRequestAddType[];
	/** List domain control form buttons */
	cform_buttons_list: SiteTypeRequestCform_buttons_listType[];
	/** Delete domain(s) from server */
	del: SiteTypeRequestDelType[];
	/** Get domain(s) data from server */
	get: SiteTypeRequestGetType[];
	getPhysicalhostingdescriptor: SiteTypeRequestGetPhysicalhostingdescriptorType[];
	get_traffic: SiteTypeRequestGet_trafficType[];
	/** Set domain(s) data from server */
	set: SiteTypeRequestSetType[];
	set_traffic: SiteTypeRequestSet_trafficType[];
}
export interface SiteTypeRequest extends _SiteTypeRequest { constructor: { new(): SiteTypeRequest }; }
export var SiteTypeRequest: { new(): SiteTypeRequest };

interface _SiteTypeRequestAddType extends BaseType {
	gen_setup: SiteTypeRequestAddTypeGen_setupType;
	hosting?: siteHostingAgentSet;
	mail?: SiteMailPreferences;
	performance?: DomainPerformanceType;
	prefs?: domainPrefs;
}
interface SiteTypeRequestAddType extends _SiteTypeRequestAddType { constructor: { new(): SiteTypeRequestAddType }; }

interface _SiteTypeRequestAddTypeGen_setupType extends BaseType {
	description?: string;
	htype?: domainHType;
	name: string;
	parentSiteguid?: string;
	parentSiteid?: number;
	parentSitename?: string;
	status?: string;
	webspaceGuid?: string;
	webspaceId?: number;
	webspaceName?: string;
}
interface SiteTypeRequestAddTypeGen_setupType extends _SiteTypeRequestAddTypeGen_setupType { constructor: { new(): SiteTypeRequestAddTypeGen_setupType }; }

interface _SiteTypeRequestCform_buttons_listType extends BaseType {
	/** Fliter domains to be listed */
	filter: siteFilterType;
}
interface SiteTypeRequestCform_buttons_listType extends _SiteTypeRequestCform_buttons_listType { constructor: { new(): SiteTypeRequestCform_buttons_listType }; }

interface _SiteTypeRequestDelType extends BaseType {
	/** Fliter domains to be deleted */
	filter: siteFilterType;
}
interface SiteTypeRequestDelType extends _SiteTypeRequestDelType { constructor: { new(): SiteTypeRequestDelType }; }

interface _SiteTypeRequestGet_trafficType extends BaseType {
	filter: siteFilterType;
	since_date?: Date;
	to_date?: Date;
}
interface SiteTypeRequestGet_trafficType extends _SiteTypeRequestGet_trafficType { constructor: { new(): SiteTypeRequestGet_trafficType }; }

interface _SiteTypeRequestGetPhysicalhostingdescriptorType extends BaseType {
	/** Fliter domains to be deleted */
	filter: siteFilterType;
}
interface SiteTypeRequestGetPhysicalhostingdescriptorType extends _SiteTypeRequestGetPhysicalhostingdescriptorType { constructor: { new(): SiteTypeRequestGetPhysicalhostingdescriptorType }; }

interface _SiteTypeRequestGetType extends BaseType {
	/** Domain information to be retrieved */
	dataset: siteDatasetType;
	/** Filter domains to be refreshed */
	filter: siteFilterType;
}
interface SiteTypeRequestGetType extends _SiteTypeRequestGetType { constructor: { new(): SiteTypeRequestGetType }; }

interface _SiteTypeRequestSet_trafficType extends BaseType {
	date: Date;
	dom_id: number;
	pop3_imap_in: number;
	pop3_imap_out: number;
	smtp_in: number;
	smtp_out: number;
}
interface SiteTypeRequestSet_trafficType extends _SiteTypeRequestSet_trafficType { constructor: { new(): SiteTypeRequestSet_trafficType }; }

interface _SiteTypeRequestSetType extends BaseType {
	/** Filter domains to be refreshed */
	filter: siteFilterType;
	/** Domain information to be updated */
	values: SiteTypeRequestSetTypeValuesType;
}
interface SiteTypeRequestSetType extends _SiteTypeRequestSetType { constructor: { new(): SiteTypeRequestSetType }; }

interface _SiteTypeRequestSetTypeValuesType extends BaseType {
	disk_usage?: SiteTypeRequestSetTypeValuesTypeDisk_usageType;
	gen_setup?: setSiteGenSetupType;
	hosting?: siteHostingAgentSet;
	performance?: DomainPerformanceType;
	prefs?: domainPrefs;
}
interface SiteTypeRequestSetTypeValuesType extends _SiteTypeRequestSetTypeValuesType { constructor: { new(): SiteTypeRequestSetTypeValuesType }; }

interface _SiteTypeRequestSetTypeValuesTypeDisk_usageType extends BaseType {}
interface SiteTypeRequestSetTypeValuesTypeDisk_usageType extends _SiteTypeRequestSetTypeValuesTypeDisk_usageType { constructor: { new(): SiteTypeRequestSetTypeValuesTypeDisk_usageType }; }

export type size = number;
type _size = Primitive._number;

interface _SOAType extends BaseType {}
export interface SOAType extends _SOAType { constructor: { new(): SOAType }; }
export var SOAType: { new(): SOAType };

/** Service ID */
export type srvIdType = string;
type _srvIdType = _string;

/** Service operation */
export type srvOpType = ("start" | "stop" | "restart");
interface _srvOpType extends _string { content: srvOpType; }

/** The number-or-normal values can be either a positive integer or zero or an empty string. */
export type statTtl = string;
type _statTtl = _string;

/** Server statistics info */
interface _statType extends BaseType {
	/** Disk usage */
	diskspace: diskspaceStatType;
	/** Server load */
	load_avg: load_avgStatType;
	/** Memory usage */
	mem: memStatType;
	/** Logical objects usage */
	objects: objectsStatType;
	/** Misc server stats */
	other: otherStatType;
	/** Swap usage */
	swap: swapStatType;
	/** Server version info */
	version: versionStatType;
}
export interface statType extends _statType { constructor: { new(): statType }; }
export var statType: { new(): statType };

export type string = string;
type _string = Primitive._string;

interface _SubdomainAddInputType extends _SubdomainObjectType {}
export interface SubdomainAddInputType extends _SubdomainAddInputType { constructor: { new(): SubdomainAddInputType }; }
export var SubdomainAddInputType: { new(): SubdomainAddInputType };

interface _SubdomainAddOutputType extends BaseType {
	result: SubdomainAddOutputTypeResultType;
}
export interface SubdomainAddOutputType extends _SubdomainAddOutputType { constructor: { new(): SubdomainAddOutputType }; }
export var SubdomainAddOutputType: { new(): SubdomainAddOutputType };

interface _SubdomainAddOutputTypeResultType extends _resultType {
	/** Subdomain ID */
	id?: number;
}
interface SubdomainAddOutputTypeResultType extends _SubdomainAddOutputTypeResultType { constructor: { new(): SubdomainAddOutputTypeResultType }; }

interface _SubdomainDeleteInputType extends BaseType {
	filter: SubdomainFilterType;
}
export interface SubdomainDeleteInputType extends _SubdomainDeleteInputType { constructor: { new(): SubdomainDeleteInputType }; }
export var SubdomainDeleteInputType: { new(): SubdomainDeleteInputType };

interface _SubdomainDelOutputType extends BaseType {
	result: resultFilterType[];
}
export interface SubdomainDelOutputType extends _SubdomainDelOutputType { constructor: { new(): SubdomainDelOutputType }; }
export var SubdomainDelOutputType: { new(): SubdomainDelOutputType };

interface _SubdomainFilterType extends BaseType {
	id?: number[];
	name?: string[];
}
export interface SubdomainFilterType extends _SubdomainFilterType { constructor: { new(): SubdomainFilterType }; }
export var SubdomainFilterType: { new(): SubdomainFilterType };

interface _SubdomainGetInputType extends BaseType {
	filter: SubdomainFilterType;
}
export interface SubdomainGetInputType extends _SubdomainGetInputType { constructor: { new(): SubdomainGetInputType }; }
export var SubdomainGetInputType: { new(): SubdomainGetInputType };

interface _SubdomainGetOutputType extends BaseType {
	result: SubdomainGetOutputTypeResultType[];
}
export interface SubdomainGetOutputType extends _SubdomainGetOutputType { constructor: { new(): SubdomainGetOutputType }; }
export var SubdomainGetOutputType: { new(): SubdomainGetOutputType };

interface _SubdomainGetOutputTypeResultType extends _resultFilterType {
	data?: SubdomainObjectType;
}
interface SubdomainGetOutputTypeResultType extends _SubdomainGetOutputTypeResultType { constructor: { new(): SubdomainGetOutputTypeResultType }; }

interface _SubdomainInputType extends BaseType {
	add: SubdomainAddInputType[];
	del: SubdomainDeleteInputType[];
	get: SubdomainGetInputType[];
	rename: SubdomainRenameInputType[];
	set: SubdomainSetInputType[];
}
export interface SubdomainInputType extends _SubdomainInputType { constructor: { new(): SubdomainInputType }; }
export var SubdomainInputType: { new(): SubdomainInputType };

interface _SubdomainObjectType extends BaseType {
	/** Site home directory */
	home?: string;
	/** Subdomain name */
	name: string;
	/** Parent domain name */
	parent: string;
	property?: SubdomainPropertyType[];
}
export interface SubdomainObjectType extends _SubdomainObjectType { constructor: { new(): SubdomainObjectType }; }
export var SubdomainObjectType: { new(): SubdomainObjectType };

interface _SubdomainOutputType extends BaseType {
	add: SubdomainAddOutputType[];
	del: SubdomainDelOutputType[];
	get: SubdomainGetOutputType[];
	rename: SubdomainRenameOutputType[];
	set: SubdomainSetOutputType[];
}
export interface SubdomainOutputType extends _SubdomainOutputType { constructor: { new(): SubdomainOutputType }; }
export var SubdomainOutputType: { new(): SubdomainOutputType };

interface _SubdomainPropertyType extends BaseType {
	name: string;
	value: string;
}
export interface SubdomainPropertyType extends _SubdomainPropertyType { constructor: { new(): SubdomainPropertyType }; }
export var SubdomainPropertyType: { new(): SubdomainPropertyType };

interface _SubdomainRenameInputType extends BaseType {
	/** Subdomain id */
	id: number;
}
export interface SubdomainRenameInputType extends _SubdomainRenameInputType { constructor: { new(): SubdomainRenameInputType }; }
export var SubdomainRenameInputType: { new(): SubdomainRenameInputType };

interface _SubdomainRenameOutputType extends BaseType {
	result: resultType;
}
export interface SubdomainRenameOutputType extends _SubdomainRenameOutputType { constructor: { new(): SubdomainRenameOutputType }; }
export var SubdomainRenameOutputType: { new(): SubdomainRenameOutputType };

interface _SubdomainSetInputType extends BaseType {
	filter: SubdomainFilterType;
	property: SubdomainPropertyType[];
}
export interface SubdomainSetInputType extends _SubdomainSetInputType { constructor: { new(): SubdomainSetInputType }; }
export var SubdomainSetInputType: { new(): SubdomainSetInputType };

interface _SubdomainSetOutputType extends BaseType {
	result: resultFilterType[];
}
export interface SubdomainSetOutputType extends _SubdomainSetOutputType { constructor: { new(): SubdomainSetOutputType }; }
export var SubdomainSetOutputType: { new(): SubdomainSetOutputType };

interface _SubscriptionsList extends BaseType {
	subscription?: SubscriptionsListSubscriptionType;
}
export interface SubscriptionsList extends _SubscriptionsList { constructor: { new(): SubscriptionsList }; }
export var SubscriptionsList: { new(): SubscriptionsList };

interface _SubscriptionsListSubscriptionType extends BaseType {
	locked: string;
	plan: PlanOutputInfo[];
	synchronized: string;
}
interface SubscriptionsListSubscriptionType extends _SubscriptionsListSubscriptionType { constructor: { new(): SubscriptionsListSubscriptionType }; }

/** Swap usage */
interface _swapStatType extends BaseType {
	free: number;
	total: number;
	used: number;
}
export interface swapStatType extends _swapStatType { constructor: { new(): swapStatType }; }
export var swapStatType: { new(): swapStatType };

export type text = string;
type _text = Primitive._string;

interface _trafficType extends BaseType {
	date: Date;
	ftp_in: number;
	ftp_out: number;
	http_in: number;
	http_out: number;
	pop3_imap_in: number;
	pop3_imap_out: number;
	smtp_in: number;
	smtp_out: number;
}
export interface trafficType extends _trafficType { constructor: { new(): trafficType }; }
export var trafficType: { new(): trafficType };

/** Domain's turn off action */
export type turnOffAction = ("disable" | "suspend");
interface _turnOffAction extends _string { content: turnOffAction; }

interface _UIResponseType extends BaseType {
	brandingThemeinstall: BrandingResult[];
	brandingThemeuninstall: BrandingResult[];
	/** Creation of simple custom button or custom button linked with site application. */
	createCustombutton: UIResponseTypeCreateCustombuttonType[];
	/** Removal of specified custom buttons */
	deleteCustombutton: UIResponseTypeDeleteCustombuttonType[];
	/** Retrieving information about custom button. */
	getCustombutton: UIResponseTypeGetCustombuttonType[];
	getNavigation: GetNavigationOutputType[];
}
export interface UIResponseType extends _UIResponseType { constructor: { new(): UIResponseType }; }
export var UIResponseType: { new(): UIResponseType };

interface _UIResponseTypeCreateCustombuttonType extends BaseType {
	result: UIResponseTypeCreateCustombuttonTypeResultType;
}
interface UIResponseTypeCreateCustombuttonType extends _UIResponseTypeCreateCustombuttonType { constructor: { new(): UIResponseTypeCreateCustombuttonType }; }

interface _UIResponseTypeCreateCustombuttonTypeResultType extends _resultType {
	/** Database ID of the newly created custom button */
	id?: number;
}
interface UIResponseTypeCreateCustombuttonTypeResultType extends _UIResponseTypeCreateCustombuttonTypeResultType { constructor: { new(): UIResponseTypeCreateCustombuttonTypeResultType }; }

interface _UIResponseTypeDeleteCustombuttonType extends BaseType {
	result?: UIResponseTypeDeleteCustombuttonTypeResultType[];
}
interface UIResponseTypeDeleteCustombuttonType extends _UIResponseTypeDeleteCustombuttonType { constructor: { new(): UIResponseTypeDeleteCustombuttonType }; }

interface _UIResponseTypeDeleteCustombuttonTypeResultType extends _resultType {
	/** Database ID of the removed custom button */
	id?: number;
}
interface UIResponseTypeDeleteCustombuttonTypeResultType extends _UIResponseTypeDeleteCustombuttonTypeResultType { constructor: { new(): UIResponseTypeDeleteCustombuttonTypeResultType }; }

interface _UIResponseTypeGetCustombuttonType extends BaseType {
	result?: UIResponseTypeGetCustombuttonTypeResultType[];
}
interface UIResponseTypeGetCustombuttonType extends _UIResponseTypeGetCustombuttonType { constructor: { new(): UIResponseTypeGetCustombuttonType }; }

interface _UIResponseTypeGetCustombuttonTypeResultType extends _resultType {
	/** Database ID of custom button */
	id?: number;
	/** Custom button's owner specification */
	owner?: CBOwner;
	properties?: CBProps;
	urlComponents?: CBUrlComponents;
}
interface UIResponseTypeGetCustombuttonTypeResultType extends _UIResponseTypeGetCustombuttonTypeResultType { constructor: { new(): UIResponseTypeGetCustombuttonTypeResultType }; }

export type unsignedInt = number;
type _unsignedInt = Primitive._number;

export type unsignedLong = number;
type _unsignedLong = Primitive._number;

export type unsignedShort = number;
type _unsignedShort = Primitive._number;

interface _updatesOutput extends BaseType {
	available_update: string;
	available_update_type: string;
	install_system_package_updates_automatically: boolean;
	install_third_party_updates: boolean;
	install_updates_automatically: boolean;
	last_installed_update: string;
	security_updates: string;
}
export interface updatesOutput extends _updatesOutput { constructor: { new(): updatesOutput }; }
export var updatesOutput: { new(): updatesOutput };

interface _UpdateVDirInputType extends BaseType {
	/** Virtual directory name */
	name: string;
	properties: VDirProperties;
	siteId: number;
	subdomainId: number;
}
export interface UpdateVDirInputType extends _UpdateVDirInputType { constructor: { new(): UpdateVDirInputType }; }
export var UpdateVDirInputType: { new(): UpdateVDirInputType };

interface _UploadOutputResultType extends _resultType {
	file: string;
	name: string;
}
export interface UploadOutputResultType extends _UploadOutputResultType { constructor: { new(): UploadOutputResultType }; }
export var UploadOutputResultType: { new(): UploadOutputResultType };

interface _UploadOutputType extends BaseType {
	result: UploadOutputResultType[];
}
export interface UploadOutputType extends _UploadOutputType { constructor: { new(): UploadOutputType }; }
export var UploadOutputType: { new(): UploadOutputType };

/** URL */
export type urlType = string;
type _urlType = _string;

/** Virtual directory application characteristics */
interface _VDirAppType extends BaseType {
	/** Microsoft ASP.NET version */
	aspnetVersion?: string;
	disabled: VDirAppTypeDisabledType;
	enabled: VDirAppTypeEnabledType;
	/** Enable parent paths (default: false) */
	parentPaths?: boolean;
	/** Enable to run in MTA (default: false) */
	runInmta: boolean;
}
export interface VDirAppType extends _VDirAppType { constructor: { new(): VDirAppType }; }
export var VDirAppType: { new(): VDirAppType };

interface _VDirAppTypeDisabledType extends BaseType {}
interface VDirAppTypeDisabledType extends _VDirAppTypeDisabledType { constructor: { new(): VDirAppTypeDisabledType }; }

interface _VDirAppTypeEnabledType extends BaseType {}
interface VDirAppTypeEnabledType extends _VDirAppTypeEnabledType { constructor: { new(): VDirAppTypeEnabledType }; }

/** Default content page and documents search order */
interface _VDirDefaultDocType extends BaseType {
	disabled: VDirDefaultDocTypeDisabledType;
	enabled: VDirDefaultDocTypeEnabledType;
	/** Document search order. You may specify several elements. Their appearance in XML will define the search order */
	search?: string[];
}
export interface VDirDefaultDocType extends _VDirDefaultDocType { constructor: { new(): VDirDefaultDocType }; }
export var VDirDefaultDocType: { new(): VDirDefaultDocType };

interface _VDirDefaultDocTypeDisabledType extends BaseType {}
interface VDirDefaultDocTypeDisabledType extends _VDirDefaultDocTypeDisabledType { constructor: { new(): VDirDefaultDocTypeDisabledType }; }

interface _VDirDefaultDocTypeEnabledType extends BaseType {}
interface VDirDefaultDocTypeEnabledType extends _VDirDefaultDocTypeEnabledType { constructor: { new(): VDirDefaultDocTypeEnabledType }; }

/** Execute permissions */
export type VDirExecutePermissionsType = ("none" | "script" | "script_execute");
interface _VDirExecutePermissionsType extends _string { content: VDirExecutePermissionsType; }

interface _VDirGetResultType extends BaseType {
	result: VDirGetResultTypeResultType[];
}
export interface VDirGetResultType extends _VDirGetResultType { constructor: { new(): VDirGetResultType }; }
export var VDirGetResultType: { new(): VDirGetResultType };

interface _VDirGetResultTypeResultType extends _resultFilterType {
	properties?: VDirProperties;
}
interface VDirGetResultTypeResultType extends _VDirGetResultTypeResultType { constructor: { new(): VDirGetResultTypeResultType }; }

interface _VDirInputType extends BaseType {
	create: CreateVDirInputType[];
	get: GetVDirInputType[];
	remove: RemoveVDirInputType[];
	update: UpdateVDirInputType[];
}
export interface VDirInputType extends _VDirInputType { constructor: { new(): VDirInputType }; }
export var VDirInputType: { new(): VDirInputType };

interface _VDirOutputType extends BaseType {
	create: VDirResultType[];
	get: VDirGetResultType[];
	remove: VDirResultType[];
	update: VDirResultType[];
}
export interface VDirOutputType extends _VDirOutputType { constructor: { new(): VDirOutputType }; }
export var VDirOutputType: { new(): VDirOutputType };

export type VDirPath = string;
type _VDirPath = Primitive._string;

/** Virtual directory properties */
interface _VDirProperties extends BaseType {
	/** Enable anonymous authentication */
	accessAnonymous?: boolean;
	/** Read permission (default: true) */
	accessRead?: boolean;
	/** Script source access (default: false) */
	accessSource?: boolean;
	/** Enable Windows authentication */
	accessWindows?: boolean;
	/** Write permission (default: false) */
	accessWrite?: boolean;
	/** Virtual directory's application properties */
	application?: VDirAppType;
	aspBufferinglimit?: number;
	aspEnabledclientdebug?: boolean;
	aspEnabledserverdebug?: boolean;
	aspMaxrequestentityallowed?: number;
	/** Default content page and search order */
	defaultDoc?: VDirDefaultDocType;
	/** Directory browsing (default: false) */
	dirBrowsing?: boolean;
	/** Execute permissions (default: script) */
	executePerm?: VDirExecutePermissionsType;
	ipAllow?: string[];
	ipDeny?: string[];
	isDenybyconcurrentrequests?: boolean;
	isDenybyrequestrate?: boolean;
	/** Log visits (default: true) */
	logVisits?: boolean;
	maxConcurrentrequests?: number;
	maxRequests?: number;
	mimeType?: string[];
	/** Real filesystem path of virtual directory, relative to the parent directory (default: equal to name) */
	realPath?: string;
	requestInterval?: number;
	/** Require SSL */
	requireSsl?: boolean;
}
export interface VDirProperties extends _VDirProperties { constructor: { new(): VDirProperties }; }
export var VDirProperties: { new(): VDirProperties };

interface _VDirResultType extends BaseType {
	result: resultType;
}
export interface VDirResultType extends _VDirResultType { constructor: { new(): VDirResultType }; }
export var VDirResultType: { new(): VDirResultType };

/** Server versions */
interface _versionStatType extends BaseType {
	os_release: string;
	plesk_build: string;
	plesk_name: string;
	/** f.e. "RedHat","FedoraCore" */
	plesk_os: string;
	/** f.e. "9.0" */
	plesk_os_version: string;
	plesk_version: string;
	veid?: number;
}
export interface versionStatType extends _versionStatType { constructor: { new(): versionStatType }; }
export var versionStatType: { new(): versionStatType };

type versionStatTypeOs_releaseType = string;
type _versionStatTypeOs_releaseType = Primitive._string;

type versionStatTypePlesk_buildType = string;
type _versionStatTypePlesk_buildType = Primitive._string;

type versionStatTypePlesk_nameType = string;
type _versionStatTypePlesk_nameType = Primitive._string;

type versionStatTypePlesk_os_versionType = string;
type _versionStatTypePlesk_os_versionType = Primitive._string;

type versionStatTypePlesk_osType = string;
type _versionStatTypePlesk_osType = Primitive._string;

type versionStatTypePlesk_versionType = string;
type _versionStatTypePlesk_versionType = Primitive._string;

interface _VPSOptimizedStatus extends BaseType {
	aspect: VPSOptimizedStatusAspectType[];
}
export interface VPSOptimizedStatus extends _VPSOptimizedStatus { constructor: { new(): VPSOptimizedStatus }; }
export var VPSOptimizedStatus: { new(): VPSOptimizedStatus };

interface _VPSOptimizedStatusAspectType extends BaseType {
	name: string;
	value: string;
}
interface VPSOptimizedStatusAspectType extends _VPSOptimizedStatusAspectType { constructor: { new(): VPSOptimizedStatusAspectType }; }

/** Web server settings */
interface _webServerSettings extends BaseType {
	additional?: string;
	additionalNginx?: string;
	additionalSsl?: string;
	nginxProxymode?: string;
	restrictFollowsymlinks?: string;
}
export interface webServerSettings extends _webServerSettings { constructor: { new(): webServerSettings }; }
export var webServerSettings: { new(): webServerSettings };

interface _WebspaceApplicationInput extends BaseType {
	/** Filter objects to be updated */
	filter: domainFilterType;
	package: ApplicationInput[];
}
export interface WebspaceApplicationInput extends _WebspaceApplicationInput { constructor: { new(): WebspaceApplicationInput }; }
export var WebspaceApplicationInput: { new(): WebspaceApplicationInput };

interface _WebspaceApsFilterInputType extends BaseType {
	/** Filter objects to be updated */
	filter: domainFilterType;
}
export interface WebspaceApsFilterInputType extends _WebspaceApsFilterInputType { constructor: { new(): WebspaceApsFilterInputType }; }
export var WebspaceApsFilterInputType: { new(): WebspaceApsFilterInputType };

interface _WebspaceApsFilterOutputType extends BaseType {
	result?: resultFilterType[];
}
export interface WebspaceApsFilterOutputType extends _WebspaceApsFilterOutputType { constructor: { new(): WebspaceApsFilterOutputType }; }
export var WebspaceApsFilterOutputType: { new(): WebspaceApsFilterOutputType };

interface _WebspaceDbServerInput extends BaseType {
	dbServer: dbServerInput[];
	filter: domainFilterType;
}
export interface WebspaceDbServerInput extends _WebspaceDbServerInput { constructor: { new(): WebspaceDbServerInput }; }
export var WebspaceDbServerInput: { new(): WebspaceDbServerInput };

interface _WebspaceDbServerListOutputType extends BaseType {
	result: WebspaceDbServerListOutputTypeResultType;
}
export interface WebspaceDbServerListOutputType extends _WebspaceDbServerListOutputType { constructor: { new(): WebspaceDbServerListOutputType }; }
export var WebspaceDbServerListOutputType: { new(): WebspaceDbServerListOutputType };

interface _WebspaceDbServerListOutputTypeResultType extends _resultFilterType {
	dbServer?: dbServerOutput[];
}
interface WebspaceDbServerListOutputTypeResultType extends _WebspaceDbServerListOutputTypeResultType { constructor: { new(): WebspaceDbServerListOutputTypeResultType }; }

interface _WebspaceMailPreferences extends _MailPreferences {
	/** Domain outgoing messages (per hour) */
	outgoingMessagesdomainlimit?: string;
	/** Scripts will be able to send mail even when the limits on outgoing messages are reached for the corresponding mailbox and domain. */
	outgoingMessagesenablesendmail?: booleanWithDefault;
	/** Mailname outgoing messages (per hour) */
	outgoingMessagesmboxlimit?: string;
	/** Percentage of email messages to accept into mail queue and retry for delivery in next hour */
	outgoingMessagesoverlimitpercent?: number;
	/** Subscription outgoing messages (per hour) */
	outgoingMessagessubscriptionlimit?: string;
}
export interface WebspaceMailPreferences extends _WebspaceMailPreferences { constructor: { new(): WebspaceMailPreferences }; }
export var WebspaceMailPreferences: { new(): WebspaceMailPreferences };

interface _WebspacePlanItemInputType extends BaseType {
	/** Filter objects to be updated */
	filter: domainFilterType;
	planItem: WebspacePlanItemInputTypePlanItemType;
}
export interface WebspacePlanItemInputType extends _WebspacePlanItemInputType { constructor: { new(): WebspacePlanItemInputType }; }
export var WebspacePlanItemInputType: { new(): WebspacePlanItemInputType };

interface _WebspacePlanItemInputTypePlanItemType extends BaseType {
	name: string;
}
interface WebspacePlanItemInputTypePlanItemType extends _WebspacePlanItemInputTypePlanItemType { constructor: { new(): WebspacePlanItemInputTypePlanItemType }; }

interface _WebspacePlanItemResultType extends _resultFilterType {
	item?: string;
}
export interface WebspacePlanItemResultType extends _WebspacePlanItemResultType { constructor: { new(): WebspacePlanItemResultType }; }
export var WebspacePlanItemResultType: { new(): WebspacePlanItemResultType };

interface _webStat2 extends BaseType {
	protected: boolean;
}
export interface webStat2 extends _webStat2 { constructor: { new(): webStat2 }; }
export var webStat2: { new(): webStat2 };

/** Web statistics type definition */
export type webstatType = ("none" | "awstats" | "webalizer" | "smarterstats");
interface _webstatType extends _string { content: webstatType; }

export type zipcodeType = string;
type _zipcodeType = _string;

export type ZoneStatusType = ("enabled" | "disabled");
interface _ZoneStatusType extends _string { content: ZoneStatusType; }

export type ZoneType = ("master" | "slave");
interface _ZoneType extends _string { content: ZoneType; }

export interface document extends BaseType {
	descriptor: ObjectDescriptor;
	packet: ResponsePacketType;
}
export var document: document;
