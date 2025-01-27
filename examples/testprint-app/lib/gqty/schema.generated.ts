/**
 * GQty AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

import { SchemaUnionsKey, type ScalarsEnumsHash } from "gqty";

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** The `AWSDateTime` scalar type provided by AWS AppSync, represents a valid ***extended*** [ISO 8601 DateTime](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) string. In other words, this scalar type accepts datetime strings of the form `YYYY-MM-DDThh:mm:ss.SSSZ`.  The scalar can also accept "negative years" of the form `-YYYY` which correspond to years before `0000`. For example, "**-2017-01-01T00:00Z**" and "**-9999-01-01T00:00Z**" are both valid datetime strings.  The field after the two digit seconds field is a nanoseconds field. It can accept between 1 and 9 digits. So, for example, "**1970-01-01T12:00:00.2Z**", "**1970-01-01T12:00:00.277Z**" and "**1970-01-01T12:00:00.123456789Z**" are all valid datetime strings.  The seconds and nanoseconds fields are optional (the seconds field must be specified if the nanoseconds field is to be used).  The [time zone offset](https://en.wikipedia.org/wiki/ISO_8601#Time_zone_designators) is compulsory for this scalar. The time zone offset must either be `Z` (representing the UTC time zone) or be in the format `±hh:mm:ss`. The seconds field in the timezone offset will be considered valid even though it is not part of the ISO 8601 standard. */
  AWSDateTime: { input: string; output: string };
  /** The `AWSEmail` scalar type provided by AWS AppSync, represents an Email address string that complies with [RFC 822](https://www.ietf.org/rfc/rfc822.txt). For example, "**username@example.com**" is a valid Email address. */
  AWSEmail: { input: string; output: string };
  /** The `AWSJSON` scalar type provided by AWS AppSync, represents a JSON string that complies with [RFC 8259](https://tools.ietf.org/html/rfc8259).  Maps like "**{\\"upvotes\\": 10}**", lists like "**[1,2,3]**", and scalar values like "**\\"AWSJSON example string\\"**", "**1**", and "**true**" are accepted as valid JSON and will automatically be parsed and loaded in the resolver mapping templates as Maps, Lists, or Scalar values rather than as the literal input strings.  Invalid JSON strings like "**{a: 1}**", "**{'a': 1}**" and "**Unquoted string**" will throw GraphQL validation errors. */
  AWSJSON: { input: any; output: any };
  /** The `AWSPhone` scalar type provided by AWS AppSync, represents a valid Phone Number. Phone numbers are serialized and deserialized as Strings. Segments of the phone number may be whitespace delimited or hyphenated.  The number can specify a country code at the beginning. However, United States numbers without country codes are still considered to be valid. */
  AWSPhone: { input: string; output: string };
  /** The `AWSURL` scalar type provided by AWS AppSync, represents a valid URL string (Ex: <https://www.amazon.com/>). The URL may use any scheme and may also be a local URL (Ex: <http://localhost/>).  URLs without schemes like "**amazon.com**" or "**www.amazon.com**" are considered invalid. URLs which contain double slashes (two consecutive forward slashes) in their path are also considered invalid. */
  AWSURL: { input: string; output: string };
}

export const enum AccountHolderType {
  company = "company",
  individual = "individual",
}

export interface AddOnProductFilterInput {
  active?: InputMaybe<FilterInput>;
  amount?: InputMaybe<FilterInput>;
  cost?: InputMaybe<FilterInput>;
  id?: InputMaybe<FilterInput>;
  ignoreStock?: InputMaybe<FilterInput>;
  name?: InputMaybe<FilterInput>;
  productId?: InputMaybe<FilterInput>;
  publishAt?: InputMaybe<FilterInput>;
  publishThru?: InputMaybe<FilterInput>;
  sku?: InputMaybe<FilterInput>;
  type?: InputMaybe<FilterInput>;
  unitPrice?: InputMaybe<FilterInput>;
  weight?: InputMaybe<FilterInput>;
}

export interface AddOnProductInput {
  active: Scalars["Boolean"]["input"];
  amount?: InputMaybe<Scalars["Float"]["input"]>;
  barcode?: InputMaybe<Scalars["String"]["input"]>;
  cost?: InputMaybe<Scalars["Float"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  hashtags?: InputMaybe<Array<Scalars["String"]["input"]>>;
  ignoreStock: Scalars["Boolean"]["input"];
  medias?: InputMaybe<Array<MediaInput>>;
  name: Scalars["String"]["input"];
  productId?: InputMaybe<Scalars["ID"]["input"]>;
  publishAt?: InputMaybe<Scalars["AWSDateTime"]["input"]>;
  publishThru?: InputMaybe<Scalars["AWSDateTime"]["input"]>;
  purchaseLimit?: InputMaybe<Scalars["Int"]["input"]>;
  quantity?: InputMaybe<Scalars["Int"]["input"]>;
  shopId: Scalars["ID"]["input"];
  sku: Scalars["String"]["input"];
  type: AddOnProductType;
  unitPrice: Scalars["Float"]["input"];
  weight?: InputMaybe<Scalars["Float"]["input"]>;
}

export const enum AddOnProductType {
  AMOUNT = "AMOUNT",
  PRODUCT = "PRODUCT",
}

export interface AddressInput {
  city?: InputMaybe<Scalars["String"]["input"]>;
  country: Country;
  district?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  lines?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /**   Short display name of the address, e.g. 'Home'. */
  name?: InputMaybe<Scalars["String"]["input"]>;
  person?: InputMaybe<Scalars["String"]["input"]>;
  postalCode?: InputMaybe<Scalars["String"]["input"]>;
  state?: InputMaybe<Scalars["String"]["input"]>;
  tel?: InputMaybe<Scalars["String"]["input"]>;
}

export interface AgencyServiceApplicationInput {
  serviceId: Scalars["ID"]["input"];
  shopId: Scalars["ID"]["input"];
}

export interface AgencyServiceInput {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  title: Scalars["String"]["input"];
}

export interface AnalysisToolFilterInput {
  active?: InputMaybe<FilterInput>;
  context?: InputMaybe<FilterInput>;
  createdAt?: InputMaybe<FilterInput>;
  id?: InputMaybe<FilterInput>;
  type?: InputMaybe<FilterInput>;
  updatedAt?: InputMaybe<FilterInput>;
}

export interface AnalysisToolInput {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  context: Scalars["String"]["input"];
  shopId: Scalars["ID"]["input"];
  type: Scalars["String"]["input"];
}

export interface ApplicationCommentInput {
  content: Scalars["String"]["input"];
}

export const enum ApplicationStatus {
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
  PENDING = "PENDING",
  PROCESSING = "PROCESSING",
}

export const enum AppointmentAttendanceStatus {
  ATTENDED = "ATTENDED",
  NO_SHOW = "NO_SHOW",
  PENDING = "PENDING",
}

export interface AppointmentBookInput {
  appointmentId: Scalars["ID"]["input"];
  contactAddress?: InputMaybe<AddressInput>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  remark?: InputMaybe<Scalars["String"]["input"]>;
  serviceLocationId: Scalars["ID"]["input"];
  startedAt: Scalars["AWSDateTime"]["input"];
  startedThru: Scalars["AWSDateTime"]["input"];
}

export interface AppointmentCreateInput {
  checkoutServiceId?: InputMaybe<Scalars["ID"]["input"]>;
  contactAddress?: InputMaybe<AddressInput>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  orderItemId?: InputMaybe<Scalars["ID"]["input"]>;
  remark?: InputMaybe<Scalars["String"]["input"]>;
  serviceId: Scalars["ID"]["input"];
  serviceLocationId: Scalars["ID"]["input"];
  startedAt: Scalars["AWSDateTime"]["input"];
  startedThru: Scalars["AWSDateTime"]["input"];
  status?: InputMaybe<AppointmentStatus>;
}

export const enum AppointmentStatus {
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
  CONFIRMED = "CONFIRMED",
  PENDING = "PENDING",
}

export interface AppointmentUpdateInput {
  contactAddress?: InputMaybe<AddressInput>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  remark?: InputMaybe<Scalars["String"]["input"]>;
  serviceLocationId?: InputMaybe<Scalars["ID"]["input"]>;
  startedAt?: InputMaybe<Scalars["AWSDateTime"]["input"]>;
  startedThru?: InputMaybe<Scalars["AWSDateTime"]["input"]>;
}

export interface AttendanceCreateInput {
  createdAt?: InputMaybe<Scalars["AWSDateTime"]["input"]>;
  direction: AttendanceDirection;
  metadata?: InputMaybe<Array<MetadataInput>>;
  shopId: Scalars["ID"]["input"];
  staffId: Scalars["ID"]["input"];
}

export const enum AttendanceDirection {
  IN = "IN",
  OUT = "OUT",
}

export interface AttendanceFilterInput {
  createdAt?: InputMaybe<FilterInput>;
  direction?: InputMaybe<FilterInput>;
  shopId?: InputMaybe<FilterInput>;
  staffId?: InputMaybe<FilterInput>;
  updatedAt?: InputMaybe<FilterInput>;
}

export interface AttributeFilterInput {
  key: Scalars["String"]["input"];
  operator: AttributeFilterOperator;
  value: Array<Scalars["String"]["input"]>;
}

export const enum AttributeFilterOperator {
  BETWEEN = "BETWEEN",
  IN = "IN",
  MATCH = "MATCH",
}

export interface BankAccountInput {
  account_holder_name?: InputMaybe<Scalars["String"]["input"]>;
  account_holder_type?: InputMaybe<AccountHolderType>;
  account_number?: InputMaybe<Scalars["String"]["input"]>;
  branch_number?: InputMaybe<Scalars["String"]["input"]>;
  country?: InputMaybe<Scalars["String"]["input"]>;
  currency?: InputMaybe<Scalars["String"]["input"]>;
  routing_number?: InputMaybe<Scalars["String"]["input"]>;
}

export const enum BatchAssignmentOperator {
  SET = "SET",
  UNSET = "UNSET",
}

export const enum BatchOperator {
  ADD = "ADD",
  SET = "SET",
  TIMES = "TIMES",
  UNSET = "UNSET",
}

export interface BundleProductCreateInput {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  barcode?: InputMaybe<Scalars["String"]["input"]>;
  collectionCodes?: InputMaybe<Array<Scalars["String"]["input"]>>;
  cost?: InputMaybe<Scalars["Float"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  display?: InputMaybe<Scalars["Boolean"]["input"]>;
  hashtags: Array<Scalars["String"]["input"]>;
  ignoreStock?: InputMaybe<Scalars["Boolean"]["input"]>;
  medias: Array<MediaInput>;
  metaDescription?: InputMaybe<Scalars["String"]["input"]>;
  metaKeywords?: InputMaybe<Scalars["String"]["input"]>;
  metaTitle?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
  primarySortIndex?: InputMaybe<Scalars["Int"]["input"]>;
  publishAt?: InputMaybe<Scalars["AWSDateTime"]["input"]>;
  publishThru?: InputMaybe<Scalars["AWSDateTime"]["input"]>;
  quantity?: InputMaybe<Scalars["Int"]["input"]>;
  rewriteUri?: InputMaybe<Scalars["String"]["input"]>;
  salesChannels?: InputMaybe<Array<SalesChannel>>;
  sections: Array<ShopBundleProductSectionInput>;
  shippingZoneIds?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  shopId: Scalars["ID"]["input"];
  sku: Scalars["String"]["input"];
  subtitle?: InputMaybe<Scalars["String"]["input"]>;
  suggestedRetailPrice?: InputMaybe<Scalars["Float"]["input"]>;
  unitPrice: Scalars["Float"]["input"];
  weight?: InputMaybe<Scalars["Float"]["input"]>;
}

export interface BundleProductFilterInput {
  active?: InputMaybe<FilterInput>;
  barcode?: InputMaybe<FilterInput>;
  cost?: InputMaybe<FilterInput>;
  createdAt?: InputMaybe<FilterInput>;
  display?: InputMaybe<FilterInput>;
  id?: InputMaybe<FilterInput>;
  ignoreStock?: InputMaybe<FilterInput>;
  name?: InputMaybe<FilterInput>;
  primarySortIndex?: InputMaybe<FilterInput>;
  sku?: InputMaybe<FilterInput>;
  suggestedRetailPrice?: InputMaybe<FilterInput>;
  unitPrice?: InputMaybe<FilterInput>;
  updatedAt?: InputMaybe<FilterInput>;
  weight?: InputMaybe<FilterInput>;
}

export interface BundleProductUpdateInput {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  barcode?: InputMaybe<Scalars["String"]["input"]>;
  collectionCodes?: InputMaybe<Array<Scalars["String"]["input"]>>;
  cost?: InputMaybe<Scalars["Float"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  display?: InputMaybe<Scalars["Boolean"]["input"]>;
  hashtags?: InputMaybe<Array<Scalars["String"]["input"]>>;
  ignoreStock?: InputMaybe<Scalars["Boolean"]["input"]>;
  medias?: InputMaybe<Array<MediaInput>>;
  metaDescription?: InputMaybe<Scalars["String"]["input"]>;
  metaKeywords?: InputMaybe<Scalars["String"]["input"]>;
  metaTitle?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  primarySortIndex?: InputMaybe<Scalars["Int"]["input"]>;
  publishAt?: InputMaybe<Scalars["AWSDateTime"]["input"]>;
  publishThru?: InputMaybe<Scalars["AWSDateTime"]["input"]>;
  quantity?: InputMaybe<Scalars["Int"]["input"]>;
  rewriteUri?: InputMaybe<Scalars["String"]["input"]>;
  salesChannels?: InputMaybe<Array<SalesChannel>>;
  sections?: InputMaybe<Array<ShopBundleProductSectionInput>>;
  shippingZoneIds?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  sku?: InputMaybe<Scalars["String"]["input"]>;
  subtitle?: InputMaybe<Scalars["String"]["input"]>;
  suggestedRetailPrice?: InputMaybe<Scalars["Float"]["input"]>;
  unitPrice?: InputMaybe<Scalars["Float"]["input"]>;
  weight?: InputMaybe<Scalars["Float"]["input"]>;
}

export interface CampaignActionFilterInput {
  active?: InputMaybe<FilterInput>;
  content?: InputMaybe<FilterInput>;
  createdAt?: InputMaybe<FilterInput>;
  createdBy?: InputMaybe<FilterInput>;
  id?: InputMaybe<FilterInput>;
  type?: InputMaybe<FilterInput>;
  updatedAt?: InputMaybe<FilterInput>;
  updatedBy?: InputMaybe<FilterInput>;
}

export interface CampaignActionInput {
  content: Scalars["String"]["input"];
  id?: InputMaybe<Scalars["ID"]["input"]>;
  richContent?: InputMaybe<Scalars["String"]["input"]>;
  type: CampaignActionType;
}

export const enum CampaignActionType {
  EMAIL = "EMAIL",
  PUSH = "PUSH",
  SMS = "SMS",
}

export interface CampaignFilterInput {
  actionTypes?: InputMaybe<FilterInput>;
  active?: InputMaybe<FilterInput>;
  content?: InputMaybe<FilterInput>;
  couponId?: InputMaybe<FilterInput>;
  createdAt?: InputMaybe<FilterInput>;
  excludedHashtags?: InputMaybe<FilterInput>;
  id?: InputMaybe<FilterInput>;
  name?: InputMaybe<FilterInput>;
  shopId?: InputMaybe<FilterInput>;
  targetHashtags?: InputMaybe<FilterInput>;
  updatedAt?: InputMaybe<FilterInput>;
}

export const enum CampaignMatchMode {
  ALL = "ALL",
  ANY = "ANY",
}

export const enum CampaignRecipientActionStatus {
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  OPTOUT = "OPTOUT",
}

export interface CampaignRecipientFilterInput {
  actionTypes?: InputMaybe<FilterInput>;
  active?: InputMaybe<FilterInput>;
  campaignId?: InputMaybe<FilterInput>;
  contact?: InputMaybe<FilterInput>;
  createdAt?: InputMaybe<FilterInput>;
  id?: InputMaybe<FilterInput>;
  referenceId?: InputMaybe<FilterInput>;
  responseMessage?: InputMaybe<FilterInput>;
  sendingStatus?: InputMaybe<FilterInput>;
  updatedAt?: InputMaybe<FilterInput>;
  userId?: InputMaybe<FilterInput>;
}

export const enum CampaignRecipientStatus {
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  PENDING = "PENDING",
}

export interface CampaignSetInput {
  actionType?: InputMaybe<CampaignActionType>;
  actionTypes?: InputMaybe<Array<CampaignActionType>>;
  actions?: InputMaybe<Array<CampaignActionInput>>;
  content?: InputMaybe<Scalars["String"]["input"]>;
  /**   Optional parent coupon to be assigned to matching users. */
  couponId?: InputMaybe<Scalars["ID"]["input"]>;
  /**   Optional parent coupons to be assigned to matching users. */
  couponIds?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  excludedHashtags?: InputMaybe<Array<Scalars["String"]["input"]>>;
  excludedMatchMode?: InputMaybe<CampaignMatchMode>;
  /**   Customers must have all the target hashtags to be included in the campaign. */
  matchMode?: InputMaybe<CampaignMatchMode>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  richContent?: InputMaybe<Scalars["String"]["input"]>;
  shopId: Scalars["ID"]["input"];
  /**   Customer with these hashtags will be included in the campaign. */
  targetHashtags?: InputMaybe<Array<Scalars["String"]["input"]>>;
  targetMatchMode?: InputMaybe<CampaignMatchMode>;
  thumbnail?: InputMaybe<MediaInput>;
  validAt?: InputMaybe<Scalars["AWSDateTime"]["input"]>;
  validThru?: InputMaybe<Scalars["AWSDateTime"]["input"]>;
}

export interface CashFlowFilterInput {
  amount?: InputMaybe<FilterInput>;
  createdAt?: InputMaybe<FilterInput>;
  deviceId?: InputMaybe<FilterInput>;
  direction?: InputMaybe<FilterInput>;
  id?: InputMaybe<FilterInput>;
  remark?: InputMaybe<FilterInput>;
  updatedAt?: InputMaybe<FilterInput>;
}

export interface CashFlowInput {
  amount: Scalars["Float"]["input"];
  deviceId: Scalars["String"]["input"];
  direction: ShopCashFlowDirection;
  remark?: InputMaybe<Scalars["String"]["input"]>;
  shopId: Scalars["ID"]["input"];
}

export const enum CashVoucherCodeStatus {
  READY = "READY",
  USED = "USED",
  VOIDED = "VOIDED",
}

export interface CashVoucherSetInput {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  companyId: Scalars["ID"]["input"];
  description: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  numberOfVoucher: Scalars["Int"]["input"];
  singleVoucherValue: Scalars["Float"]["input"];
  thumbnail?: InputMaybe<MediaInput>;
  unitPrice: Scalars["Float"]["input"];
  validFor?: InputMaybe<Scalars["String"]["input"]>;
}

export interface ChannelFilterInput {
  active?: InputMaybe<FilterInput>;
  code?: InputMaybe<FilterInput>;
  createdAt?: InputMaybe<FilterInput>;
  id?: InputMaybe<FilterInput>;
  pin?: InputMaybe<FilterInput>;
  type?: InputMaybe<FilterInput>;
  updatedAt?: InputMaybe<FilterInput>;
}

export interface ChannelMessageFilterInput {
  active?: InputMaybe<FilterInput>;
  channelId?: InputMaybe<FilterInput>;
  channelPlayerId?: InputMaybe<FilterInput>;
  channelType?: InputMaybe<FilterInput>;
  createdAt?: InputMaybe<FilterInput>;
  id?: InputMaybe<FilterInput>;
  pin?: InputMaybe<FilterInput>;
  readChannelPlayerIds?: InputMaybe<FilterInput>;
  shopId?: InputMaybe<FilterInput>;
  type?: InputMaybe<FilterInput>;
  updatedAt?: InputMaybe<FilterInput>;
}

export interface ChannelMessageSetInput {
  channelId: Scalars["ID"]["input"];
  channelPlayerId: Scalars["String"]["input"];
  /**
   *  TEXT: message content
   * IMAGE/VIDEO/LINK/FILE: url
   */
  content?: InputMaybe<Scalars["String"]["input"]>;
  pin?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<ChannelMessageType>;
}

export const enum ChannelMessageType {
  FILE = "FILE",
  IMAGE = "IMAGE",
  LINK = "LINK",
  TEXT = "TEXT",
  VIDEO = "VIDEO",
}

export interface ChannelPlayerSetInput {
  channelId: Scalars["ID"]["input"];
  email: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  picture?: InputMaybe<Scalars["String"]["input"]>;
  userId?: InputMaybe<Scalars["String"]["input"]>;
}

export interface ChannelSetInput {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  code: Scalars["String"]["input"];
  metadata?: InputMaybe<Array<MetadataInput>>;
  pin?: InputMaybe<Scalars["Boolean"]["input"]>;
  shopId: Scalars["ID"]["input"];
  type?: InputMaybe<ChannelType>;
}

export const enum ChannelType {
  GENERAL = "GENERAL",
  ORDER = "ORDER",
  SYSTEM = "SYSTEM",
}

export interface CheckoutAddOnProductInput {
  id: Scalars["ID"]["input"];
  quantity: Scalars["Int"]["input"];
}

export interface CheckoutAdjustmentInput {
  amount: Scalars["Float"]["input"];
  description?: InputMaybe<Scalars["String"]["input"]>;
  referenceId?: InputMaybe<Scalars["ID"]["input"]>;
  sortIndex: Scalars["Int"]["input"];
  typename?: InputMaybe<Scalars["String"]["input"]>;
}

export interface CheckoutBundleProductInput {
  /**   Bundle Product ID */
  id: Scalars["ID"]["input"];
  /**   An array of flattened ID of BundleProductOption. */
  options: Array<CheckoutBundleProductOptionInput>;
  sku?: InputMaybe<Scalars["String"]["input"]>;
}

export interface CheckoutBundleProductOptionInput {
  /**   Option Id */
  id: Scalars["ID"]["input"];
  modifiers?: InputMaybe<Array<CheckoutItemModifierInput>>;
  remark?: InputMaybe<Scalars["String"]["input"]>;
  sku?: InputMaybe<Scalars["String"]["input"]>;
  variationId: Scalars["ID"]["input"];
}

export interface CheckoutCashVoucherInput {
  cashVoucherId: Scalars["ID"]["input"];
  id?: InputMaybe<Scalars["ID"]["input"]>;
  quantity: Scalars["Int"]["input"];
}

export interface CheckoutCreateOfflineInput {
  billingAddress?: InputMaybe<AddressInput>;
  cashier?: InputMaybe<Scalars["String"]["input"]>;
  couponDiscount?: InputMaybe<Scalars["Float"]["input"]>;
  coupons?: InputMaybe<Scalars["String"]["input"]>;
  createdAt: Scalars["AWSDateTime"]["input"];
  currency?: InputMaybe<Currency>;
  customer?: InputMaybe<CheckoutCreateOfflineUserInput>;
  deviceId?: InputMaybe<Scalars["String"]["input"]>;
  discounts?: InputMaybe<Scalars["String"]["input"]>;
  /**   Customer earns member points for this checkout */
  gainMemberPoints?: InputMaybe<Scalars["Int"]["input"]>;
  id: Scalars["ID"]["input"];
  isInSitu?: InputMaybe<Scalars["Boolean"]["input"]>;
  isPreOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  items?: InputMaybe<Array<CheckoutCreateOfflineItemInput>>;
  memberPoints?: InputMaybe<Scalars["Int"]["input"]>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  order?: InputMaybe<CheckoutCreateOfflineOrderInput>;
  pickUpAddressId?: InputMaybe<Scalars["ID"]["input"]>;
  referenceNo: Scalars["String"]["input"];
  salespersonId?: InputMaybe<Scalars["ID"]["input"]>;
  shippingAddress?: InputMaybe<AddressInput>;
  shippingFee: Scalars["Float"]["input"];
  shippingProviderId?: InputMaybe<Scalars["ID"]["input"]>;
  shopDiscount?: InputMaybe<Scalars["Float"]["input"]>;
  shopId: Scalars["ID"]["input"];
  staffId?: InputMaybe<Scalars["ID"]["input"]>;
  subtotal: Scalars["Float"]["input"];
  taxFee: Scalars["Float"]["input"];
  total: Scalars["Float"]["input"];
  totalAdjustments?: InputMaybe<Array<CheckoutAdjustmentInput>>;
  updatedAt: Scalars["AWSDateTime"]["input"];
}

export interface CheckoutCreateOfflineInvoiceInput {
  change: Scalars["Float"]["input"];
  createdAt: Scalars["AWSDateTime"]["input"];
  credential: Scalars["String"]["input"];
  id: Scalars["String"]["input"];
  paymentMethod?: InputMaybe<Scalars["String"]["input"]>;
  provider?: InputMaybe<PaymentProvider>;
  status: OrderInvoiceStatus;
  total: Scalars["Float"]["input"];
  updatedAt: Scalars["AWSDateTime"]["input"];
}

export interface CheckoutCreateOfflineItemInput {
  bundleProduct?: InputMaybe<CheckoutBundleProductInput>;
  createdAt?: InputMaybe<Scalars["AWSDateTime"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  media?: InputMaybe<MediaInput>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  metadataFields?: InputMaybe<Array<CompanyMemberMetadataFieldInput>>;
  productVariationId?: InputMaybe<Scalars["String"]["input"]>;
  quantity: Scalars["Int"]["input"];
  remark?: InputMaybe<Scalars["String"]["input"]>;
  sku?: InputMaybe<Scalars["String"]["input"]>;
  unitPrice: Scalars["Float"]["input"];
  updatedAt?: InputMaybe<Scalars["AWSDateTime"]["input"]>;
}

export interface CheckoutCreateOfflineOrderInput {
  createdAt: Scalars["AWSDateTime"]["input"];
  id: Scalars["String"]["input"];
  internalRemark?: InputMaybe<Scalars["String"]["input"]>;
  internalRemarkMedias?: InputMaybe<Array<MediaInput>>;
  invoices?: InputMaybe<Array<CheckoutCreateOfflineInvoiceInput>>;
  kitchenStatus?: InputMaybe<ShopOrderKitchenStatus>;
  remark?: InputMaybe<Scalars["String"]["input"]>;
  remarkMedias?: InputMaybe<Array<MediaInput>>;
  totalAdjustments?: InputMaybe<Array<CheckoutAdjustmentInput>>;
  updatedAt: Scalars["AWSDateTime"]["input"];
}

export interface CheckoutCreateOfflineUserInput {
  email?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
}

export interface CheckoutFilterInput {
  status?: InputMaybe<FilterInput>;
}

export interface CheckoutInput {
  billingAddress?: InputMaybe<AddressInput>;
  cashier?: InputMaybe<Scalars["String"]["input"]>;
  customerId?: InputMaybe<Scalars["ID"]["input"]>;
  deviceId?: InputMaybe<Scalars["String"]["input"]>;
  internalMetadata?: InputMaybe<Array<MetadataInput>>;
  internalRemark?: InputMaybe<Scalars["String"]["input"]>;
  internalRemarkMedias?: InputMaybe<Array<MediaInput>>;
  isInSitu?: InputMaybe<Scalars["Boolean"]["input"]>;
  memberPoints?: InputMaybe<Scalars["Int"]["input"]>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  pickUpAddressId?: InputMaybe<Scalars["ID"]["input"]>;
  referenceNo?: InputMaybe<Scalars["String"]["input"]>;
  remark?: InputMaybe<Scalars["String"]["input"]>;
  remarkMedias?: InputMaybe<Array<MediaInput>>;
  salespersonId?: InputMaybe<Scalars["ID"]["input"]>;
  /**   Coupon will be remove if no couponId received. */
  shippingAddress?: InputMaybe<AddressInput>;
  shippingProviderId?: InputMaybe<Scalars["ID"]["input"]>;
  shopId: Scalars["ID"]["input"];
  staffId?: InputMaybe<Scalars["ID"]["input"]>;
  tableId?: InputMaybe<Scalars["String"]["input"]>;
  totalAdjustments?: InputMaybe<Array<CheckoutAdjustmentInput>>;
}

export interface CheckoutItemCreateInput {
  bundleProduct?: InputMaybe<CheckoutBundleProductInput>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  /**   F&B checkout item ID */
  fnbCheckoutItemId?: InputMaybe<Scalars["ID"]["input"]>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  modifiers?: InputMaybe<Array<CheckoutItemModifierInput>>;
  productVariationId?: InputMaybe<Scalars["ID"]["input"]>;
  quantity: Scalars["Int"]["input"];
  remark?: InputMaybe<Scalars["String"]["input"]>;
  serviceBundle?: InputMaybe<CheckoutServiceBundleInput>;
  unitPrice?: InputMaybe<Scalars["Float"]["input"]>;
}

export interface CheckoutItemInput {
  bundleProduct?: InputMaybe<CheckoutBundleProductInput>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  modifiers?: InputMaybe<Array<CheckoutItemModifierInput>>;
  productVariationId?: InputMaybe<Scalars["ID"]["input"]>;
  quantity?: InputMaybe<Scalars["Int"]["input"]>;
  remark?: InputMaybe<Scalars["String"]["input"]>;
  serviceBundle?: InputMaybe<CheckoutServiceBundleInput>;
  unitPrice?: InputMaybe<Scalars["Float"]["input"]>;
}

export interface CheckoutItemModifierInput {
  name: Scalars["String"]["input"];
  option: Scalars["String"]["input"];
}

export const enum CheckoutItemSetOperator {
  ADD = "ADD",
  SET = "SET",
  SUBTRACT = "SUBTRACT",
}

export interface CheckoutPayInput {
  charge?: InputMaybe<Scalars["Float"]["input"]>;
  credentialId?: InputMaybe<Scalars["ID"]["input"]>;
  invoiceId: Scalars["ID"]["input"];
  isSavingPaymentSource?: InputMaybe<Scalars["Boolean"]["input"]>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  paymentDetail?: InputMaybe<Scalars["AWSJSON"]["input"]>;
  provider: PaymentProvider;
  token?: InputMaybe<Scalars["String"]["input"]>;
}

export interface CheckoutPaymentInput {
  charge?: InputMaybe<Scalars["Float"]["input"]>;
  credentialId?: InputMaybe<Scalars["ID"]["input"]>;
  failureUrl?: InputMaybe<Scalars["String"]["input"]>;
  paymentMethodId?: InputMaybe<Scalars["ID"]["input"]>;
  provider: PaymentProvider;
  successUrl?: InputMaybe<Scalars["String"]["input"]>;
  token?: InputMaybe<Scalars["String"]["input"]>;
}

export interface CheckoutRoundingPolicyInput {
  maximumFractionDigits: Scalars["Int"]["input"];
  strategy: CheckoutRoundingStrategy;
}

export const enum CheckoutRoundingStrategy {
  CEILING = "CEILING",
  FLOOR = "FLOOR",
  ROUND = "ROUND",
}

export interface CheckoutServiceBundleInput {
  /**   Service Bundle ID */
  id: Scalars["ID"]["input"];
  modifiers?: InputMaybe<Array<CheckoutItemModifierInput>>;
  services: Array<CheckoutServiceInput>;
  sku?: InputMaybe<Scalars["String"]["input"]>;
}

export interface CheckoutServiceInput {
  contactAddress?: InputMaybe<AddressInput>;
  /**   Service ID */
  id: Scalars["ID"]["input"];
  outboundSkus?: InputMaybe<Array<Scalars["String"]["input"]>>;
  serviceLocationId?: InputMaybe<Scalars["ID"]["input"]>;
  startedAt?: InputMaybe<Scalars["AWSDateTime"]["input"]>;
  startedThru?: InputMaybe<Scalars["AWSDateTime"]["input"]>;
}

export const enum CheckoutStatus {
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
  PENDING = "PENDING",
  PROCESSING = "PROCESSING",
}

export const enum CollectionBulkAction {
  DELETE = "DELETE",
}

export interface CollectionFilterInput {
  active?: InputMaybe<FilterInput>;
  code?: InputMaybe<FilterInput>;
  collectionPaths?: InputMaybe<FilterInput>;
  createdAt?: InputMaybe<FilterInput>;
  id?: InputMaybe<FilterInput>;
  name?: InputMaybe<FilterInput>;
  parentId?: InputMaybe<FilterInput>;
  publishAt?: InputMaybe<FilterInput>;
  publishThru?: InputMaybe<FilterInput>;
  rewriteUri?: InputMaybe<FilterInput>;
  sortIndex?: InputMaybe<FilterInput>;
  updatedAt?: InputMaybe<FilterInput>;
}

export interface CollectionInput {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  /**   Common code for the collection to be addressed by products and discounts. */
  code?: InputMaybe<Scalars["String"]["input"]>;
  dailyAvailability?: InputMaybe<DailyAvailabilityInput>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  media?: InputMaybe<MediaInput>;
  metaDescription?: InputMaybe<Scalars["String"]["input"]>;
  metaKeywords?: InputMaybe<Scalars["String"]["input"]>;
  metaTitle?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
  /**   For layered collection */
  parentId?: InputMaybe<Scalars["ID"]["input"]>;
  productIds?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  products?: InputMaybe<Array<CollectionProductInput>>;
  publishAt?: InputMaybe<Scalars["AWSDateTime"]["input"]>;
  publishThru?: InputMaybe<Scalars["AWSDateTime"]["input"]>;
  rewriteUri?: InputMaybe<Scalars["String"]["input"]>;
  shopId: Scalars["ID"]["input"];
  sortIndex?: InputMaybe<Scalars["Int"]["input"]>;
  thumbnail?: InputMaybe<Scalars["AWSURL"]["input"]>;
}

export interface CollectionParentSetInput {
  id: Scalars["ID"]["input"];
  parentId?: InputMaybe<Scalars["ID"]["input"]>;
  sortIndex?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface CollectionProductInput {
  id: Scalars["ID"]["input"];
  sortIndex?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface CompanyCouponFilterInput {
  active?: InputMaybe<FilterInput>;
  createdAt?: InputMaybe<FilterInput>;
  discardSubsequent?: InputMaybe<FilterInput>;
  display?: InputMaybe<FilterInput>;
  enabled?: InputMaybe<FilterInput>;
  handle?: InputMaybe<FilterInput>;
  id?: InputMaybe<FilterInput>;
  isRedeemable?: InputMaybe<FilterInput>;
  memberPointCost?: InputMaybe<FilterInput>;
  membersOnly?: InputMaybe<FilterInput>;
  name?: InputMaybe<FilterInput>;
  publishAt?: InputMaybe<FilterInput>;
  publishLimit?: InputMaybe<FilterInput>;
  publishThru?: InputMaybe<FilterInput>;
  remark?: InputMaybe<FilterInput>;
  resolveCode?: InputMaybe<FilterInput>;
  updatedAt?: InputMaybe<FilterInput>;
  validAt?: InputMaybe<FilterInput>;
  validForPeriod?: InputMaybe<FilterInput>;
  validThru?: InputMaybe<FilterInput>;
}

export interface CompanyHashtagScheduleInput {
  hashtags: Array<Scalars["String"]["input"]>;
  validAt: Scalars["AWSDateTime"]["input"];
  validThru?: InputMaybe<Scalars["AWSDateTime"]["input"]>;
}

export interface CompanyMemberMetadataFieldInput {
  /**   Index */
  key: Scalars["String"]["input"];
  metadata?: InputMaybe<Array<MetadataInput>>;
  /**   Column Name */
  name: Scalars["String"]["input"];
  required: Scalars["Boolean"]["input"];
  type: CompanyMemberMetadataFieldType;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  values: Array<Scalars["String"]["input"]>;
  visible?: InputMaybe<Scalars["Boolean"]["input"]>;
}

export const enum CompanyMemberMetadataFieldType {
  CHECKBOX = "CHECKBOX",
  COLOR = "COLOR",
  DATE = "DATE",
  DATETIME = "DATETIME",
  EMAIL = "EMAIL",
  HTML = "HTML",
  IMAGE = "IMAGE",
  LIST_MULTIPLE = "LIST_MULTIPLE",
  LIST_SINGLE = "LIST_SINGLE",
  MONTH = "MONTH",
  NUMBER = "NUMBER",
  PASSWORD = "PASSWORD",
  RADIO = "RADIO",
  TEL = "TEL",
  TEXT = "TEXT",
  TEXT_MULTIPLE = "TEXT_MULTIPLE",
  TIME = "TIME",
  URL = "URL",
  WEEK = "WEEK",
  YEAR = "YEAR",
}

export interface CompanyMemberTierFilterInput {
  active?: InputMaybe<FilterInput>;
  createdAt?: InputMaybe<FilterInput>;
  expiryType?: InputMaybe<FilterInput>;
  extensionAmount?: InputMaybe<FilterInput>;
  extensionMonths?: InputMaybe<FilterInput>;
  extensionType?: InputMaybe<FilterInput>;
  id?: InputMaybe<FilterInput>;
  isDefault?: InputMaybe<FilterInput>;
  level?: InputMaybe<FilterInput>;
  memberPointActive?: InputMaybe<FilterInput>;
  memberPointPerUnit?: InputMaybe<FilterInput>;
  memberPointUnitPrice?: InputMaybe<FilterInput>;
  name?: InputMaybe<FilterInput>;
  updatedAt?: InputMaybe<FilterInput>;
  upgradeConditionAmount?: InputMaybe<FilterInput>;
  upgradeConditionMonths?: InputMaybe<FilterInput>;
  upgradeConditionType?: InputMaybe<FilterInput>;
  validMonths?: InputMaybe<FilterInput>;
}

export interface CompanyMemberTierInput {
  companyId: Scalars["ID"]["input"];
  expiryType?: InputMaybe<ExpiryDateTypes>;
  extensionAmount?: InputMaybe<Scalars["Int"]["input"]>;
  extensionMonths?: InputMaybe<Scalars["Int"]["input"]>;
  extensionType?: InputMaybe<UpgradeConditionType>;
  isDefault?: InputMaybe<Scalars["Boolean"]["input"]>;
  level: Scalars["Int"]["input"];
  memberPointActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  memberPointPerUnit?: InputMaybe<Scalars["Int"]["input"]>;
  memberPointUnitPrice?: InputMaybe<Scalars["Int"]["input"]>;
  name: Scalars["String"]["input"];
  upgradeConditionAmount?: InputMaybe<Scalars["Int"]["input"]>;
  upgradeConditionMonths?: InputMaybe<Scalars["Int"]["input"]>;
  upgradeConditionType?: InputMaybe<UpgradeConditionType>;
  upgradeConditions?: InputMaybe<Array<MemberTierUpgradeConditionInput>>;
  validMonths?: InputMaybe<Scalars["Int"]["input"]>;
}

export const enum CompanyReceivePurchaseStatus {
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
  PENDING = "PENDING",
  VOIDED = "VOIDED",
}

export interface CompanyShopContactEmailsFilterInput {
  active?: InputMaybe<FilterInput>;
  createdAt?: InputMaybe<FilterInput>;
  email?: InputMaybe<FilterInput>;
  id?: InputMaybe<FilterInput>;
  shopId?: InputMaybe<FilterInput>;
  type?: InputMaybe<FilterInput>;
  updatedAt?: InputMaybe<FilterInput>;
  verified?: InputMaybe<FilterInput>;
}

export interface CompanyShopCredentialInput {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
  username: Scalars["String"]["input"];
}

export interface CompanyShopInput {
  address?: InputMaybe<AddressInput>;
  agentId?: InputMaybe<Scalars["ID"]["input"]>;
  allowGuestCheckout?: InputMaybe<Scalars["Boolean"]["input"]>;
  allowMemberPointCheckout?: InputMaybe<Scalars["Boolean"]["input"]>;
  autoConfirm?: InputMaybe<Scalars["Boolean"]["input"]>;
  autoConfirmRegistration?: InputMaybe<Scalars["Boolean"]["input"]>;
  branchType?: InputMaybe<ShopBranchType>;
  checkoutRounding?: InputMaybe<CheckoutRoundingPolicyInput>;
  contactEmail?: InputMaybe<Scalars["String"]["input"]>;
  contactEmails?: InputMaybe<Array<ContactEmailInput>>;
  currency?: InputMaybe<Currency>;
  customDomain?: InputMaybe<Scalars["String"]["input"]>;
  deliveryNoteAutoComplete?: InputMaybe<DurationInput>;
  domain?: InputMaybe<Scalars["String"]["input"]>;
  expiredAt?: InputMaybe<Scalars["AWSDateTime"]["input"]>;
  hasRegistrationEmail?: InputMaybe<Scalars["Boolean"]["input"]>;
  icoMedia?: InputMaybe<MediaInput>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  logoMedia?: InputMaybe<MediaInput>;
  lowStock?: InputMaybe<ReminderSettingInput>;
  maxDeviceCount?: InputMaybe<Scalars["Int"]["input"]>;
  memberMetadataFields?: InputMaybe<Array<CompanyMemberMetadataFieldInput>>;
  /**   A graceful period to be safe from point clearance, ISO duration. */
  memberPointClearanceGracefulPeriod?: InputMaybe<Scalars["String"]["input"]>;
  memberPointReleaseDelay?: InputMaybe<Scalars["Int"]["input"]>;
  memberPointReleasePolicy?: InputMaybe<MemberPointReleasePolicy>;
  memberPointUseActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  memberPointUsePerUnit?: InputMaybe<Scalars["Int"]["input"]>;
  memberPointUseUnitPoint?: InputMaybe<Scalars["Int"]["input"]>;
  metaDescription?: InputMaybe<Scalars["String"]["input"]>;
  metaKeywords?: InputMaybe<Scalars["String"]["input"]>;
  metaTitle?: InputMaybe<Scalars["String"]["input"]>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  name: Scalars["String"]["input"];
  nameEN?: InputMaybe<Scalars["String"]["input"]>;
  /**   Specify null for indefinite pending orders */
  orderExpiry?: InputMaybe<DurationInput>;
  /**   In days, how long pending orders will be kept before automatically cancelled. */
  orderExpiryDay?: InputMaybe<Scalars["Int"]["input"]>;
  overStock?: InputMaybe<ReminderSettingInput>;
  rasterLogoMedia?: InputMaybe<MediaInput>;
  referenceNoLength?: InputMaybe<Scalars["Int"]["input"]>;
  referenceNoPrefix?: InputMaybe<Scalars["String"]["input"]>;
  registrationMessages?: InputMaybe<Array<Scalars["String"]["input"]>>;
  remarks?: InputMaybe<Scalars["String"]["input"]>;
  returnWarehouseId?: InputMaybe<Scalars["ID"]["input"]>;
  stockWarehouseId?: InputMaybe<Scalars["ID"]["input"]>;
  /**   admin only */
  stripeRateExpression?: InputMaybe<Scalars["String"]["input"]>;
  timezone?: InputMaybe<Scalars["String"]["input"]>;
  transferWarehouseId?: InputMaybe<Scalars["ID"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
  underStock?: InputMaybe<ReminderSettingInput>;
  useCollectionProductSortIndex?: InputMaybe<Scalars["Boolean"]["input"]>;
  welcomeMessages?: InputMaybe<Array<Scalars["String"]["input"]>>;
}

export interface CompanyStaffCreateInput {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  address?: InputMaybe<AddressInput>;
  code: Scalars["String"]["input"];
  metadata?: InputMaybe<Array<MetadataInput>>;
  name: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
  role: StaffRole;
  shopId: Scalars["ID"]["input"];
  startedAt?: InputMaybe<Scalars["AWSDateTime"]["input"]>;
  startedThru?: InputMaybe<Scalars["AWSDateTime"]["input"]>;
  thumbnail?: InputMaybe<MediaInput>;
}

export interface CompanyStaffFilterInput {
  code?: InputMaybe<FilterInput>;
  id?: InputMaybe<FilterInput>;
  name?: InputMaybe<FilterInput>;
  phoneNumber?: InputMaybe<FilterInput>;
  role?: InputMaybe<FilterInput>;
  shopId?: InputMaybe<FilterInput>;
  startedAt?: InputMaybe<FilterInput>;
  startedThru?: InputMaybe<FilterInput>;
}

export interface CompanyStaffUpdateInput {
  address?: InputMaybe<AddressInput>;
  code?: InputMaybe<Scalars["String"]["input"]>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
  role?: InputMaybe<StaffRole>;
  shopId?: InputMaybe<Scalars["ID"]["input"]>;
  startedAt?: InputMaybe<Scalars["AWSDateTime"]["input"]>;
  startedThru?: InputMaybe<Scalars["AWSDateTime"]["input"]>;
  thumbnail?: InputMaybe<MediaInput>;
}

export const enum CompanyStockTransferStatus {
  COMPLETED = "COMPLETED",
  IN_TRANSIT = "IN_TRANSIT",
  PENDING = "PENDING",
  VOIDED = "VOIDED",
}

export const enum CompanyStocktakeStatus {
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  PENDING = "PENDING",
  PROCESSING = "PROCESSING",
}

export interface CompanyUpdateInput {
  defaultMemberHashtagSchedules?: InputMaybe<
    Array<CompanyHashtagScheduleInput>
  >;
  memberPointResetDates?: InputMaybe<Array<Scalars["String"]["input"]>>;
  memberPointResetGracefulPeriod?: InputMaybe<Scalars["String"]["input"]>;
}

export const enum CompanyWarehouseTypes {
  RESERVE = "RESERVE",
  STOCK = "STOCK",
  TRANSFER = "TRANSFER",
}

export interface ContactEmailInput {
  email: Scalars["AWSEmail"]["input"];
  type: ShopContactEmailType;
}

export const enum Country {
  ABW = "ABW",
  AFG = "AFG",
  AGO = "AGO",
  AIA = "AIA",
  ALA = "ALA",
  ALB = "ALB",
  AND = "AND",
  ARE = "ARE",
  ARG = "ARG",
  ARM = "ARM",
  ASM = "ASM",
  ATA = "ATA",
  ATF = "ATF",
  ATG = "ATG",
  AUS = "AUS",
  AUT = "AUT",
  AZE = "AZE",
  BDI = "BDI",
  BEL = "BEL",
  BEN = "BEN",
  BES = "BES",
  BFA = "BFA",
  BGD = "BGD",
  BGR = "BGR",
  BHR = "BHR",
  BHS = "BHS",
  BIH = "BIH",
  BLM = "BLM",
  BLR = "BLR",
  BLZ = "BLZ",
  BMU = "BMU",
  BOL = "BOL",
  BRA = "BRA",
  BRB = "BRB",
  BRN = "BRN",
  BTN = "BTN",
  BVT = "BVT",
  BWA = "BWA",
  CAF = "CAF",
  CAN = "CAN",
  CCK = "CCK",
  CHE = "CHE",
  CHL = "CHL",
  CHN = "CHN",
  CIV = "CIV",
  CMR = "CMR",
  COD = "COD",
  COG = "COG",
  COK = "COK",
  COL = "COL",
  COM = "COM",
  CPV = "CPV",
  CRI = "CRI",
  CUB = "CUB",
  CUW = "CUW",
  CXR = "CXR",
  CYM = "CYM",
  CYP = "CYP",
  CZE = "CZE",
  DEU = "DEU",
  DJI = "DJI",
  DMA = "DMA",
  DNK = "DNK",
  DOM = "DOM",
  DZA = "DZA",
  ECU = "ECU",
  EGY = "EGY",
  ERI = "ERI",
  ESH = "ESH",
  ESP = "ESP",
  EST = "EST",
  ETH = "ETH",
  FIN = "FIN",
  FJI = "FJI",
  FLK = "FLK",
  FRA = "FRA",
  FRO = "FRO",
  FSM = "FSM",
  GAB = "GAB",
  GBR = "GBR",
  GEO = "GEO",
  GGY = "GGY",
  GHA = "GHA",
  GIB = "GIB",
  GIN = "GIN",
  GLP = "GLP",
  GMB = "GMB",
  GNB = "GNB",
  GNQ = "GNQ",
  GRC = "GRC",
  GRD = "GRD",
  GRL = "GRL",
  GTM = "GTM",
  GUF = "GUF",
  GUM = "GUM",
  GUY = "GUY",
  HKG = "HKG",
  HMD = "HMD",
  HND = "HND",
  HRV = "HRV",
  HTI = "HTI",
  HUN = "HUN",
  IDN = "IDN",
  IMN = "IMN",
  IND = "IND",
  IOT = "IOT",
  IRL = "IRL",
  IRN = "IRN",
  IRQ = "IRQ",
  ISL = "ISL",
  ISR = "ISR",
  ITA = "ITA",
  JAM = "JAM",
  JEY = "JEY",
  JOR = "JOR",
  JPN = "JPN",
  KAZ = "KAZ",
  KEN = "KEN",
  KGZ = "KGZ",
  KHM = "KHM",
  KIR = "KIR",
  KNA = "KNA",
  KOR = "KOR",
  KWT = "KWT",
  LAO = "LAO",
  LBN = "LBN",
  LBR = "LBR",
  LBY = "LBY",
  LCA = "LCA",
  LIE = "LIE",
  LKA = "LKA",
  LSO = "LSO",
  LTU = "LTU",
  LUX = "LUX",
  LVA = "LVA",
  MAC = "MAC",
  MAF = "MAF",
  MAR = "MAR",
  MCO = "MCO",
  MDA = "MDA",
  MDG = "MDG",
  MDV = "MDV",
  MEX = "MEX",
  MHL = "MHL",
  MKD = "MKD",
  MLI = "MLI",
  MLT = "MLT",
  MMR = "MMR",
  MNE = "MNE",
  MNG = "MNG",
  MNP = "MNP",
  MOZ = "MOZ",
  MRT = "MRT",
  MSR = "MSR",
  MTQ = "MTQ",
  MUS = "MUS",
  MWI = "MWI",
  MYS = "MYS",
  MYT = "MYT",
  NAM = "NAM",
  NCL = "NCL",
  NER = "NER",
  NFK = "NFK",
  NGA = "NGA",
  NIC = "NIC",
  NIU = "NIU",
  NLD = "NLD",
  NOR = "NOR",
  NPL = "NPL",
  NRU = "NRU",
  NZL = "NZL",
  OMN = "OMN",
  PAK = "PAK",
  PAN = "PAN",
  PCN = "PCN",
  PER = "PER",
  PHL = "PHL",
  PLW = "PLW",
  PNG = "PNG",
  POL = "POL",
  PRI = "PRI",
  PRK = "PRK",
  PRT = "PRT",
  PRY = "PRY",
  PSE = "PSE",
  PYF = "PYF",
  QAT = "QAT",
  REU = "REU",
  ROU = "ROU",
  RUS = "RUS",
  RWA = "RWA",
  SAU = "SAU",
  SDN = "SDN",
  SEN = "SEN",
  SGP = "SGP",
  SGS = "SGS",
  SHN = "SHN",
  SJM = "SJM",
  SLB = "SLB",
  SLE = "SLE",
  SLV = "SLV",
  SMR = "SMR",
  SOM = "SOM",
  SPM = "SPM",
  SRB = "SRB",
  SSD = "SSD",
  STP = "STP",
  SUR = "SUR",
  SVK = "SVK",
  SVN = "SVN",
  SWE = "SWE",
  SWZ = "SWZ",
  SXM = "SXM",
  SYC = "SYC",
  SYR = "SYR",
  TCA = "TCA",
  TCD = "TCD",
  TGO = "TGO",
  THA = "THA",
  TJK = "TJK",
  TKL = "TKL",
  TKM = "TKM",
  TLS = "TLS",
  TON = "TON",
  TTO = "TTO",
  TUN = "TUN",
  TUR = "TUR",
  TUV = "TUV",
  TWN = "TWN",
  TZA = "TZA",
  UGA = "UGA",
  UKR = "UKR",
  UMI = "UMI",
  URY = "URY",
  USA = "USA",
  UZB = "UZB",
  VAT = "VAT",
  VCT = "VCT",
  VEN = "VEN",
  VGB = "VGB",
  VIR = "VIR",
  VNM = "VNM",
  VUT = "VUT",
  WLF = "WLF",
  WSM = "WSM",
  YEM = "YEM",
  ZAF = "ZAF",
  ZMB = "ZMB",
  ZWE = "ZWE",
}

export interface CouponActionInput {
  actionId?: InputMaybe<Scalars["ID"]["input"]>;
  actionIds?: InputMaybe<Array<Scalars["String"]["input"]>>;
  actionType: CouponActionType;
  actionValue?: InputMaybe<Scalars["String"]["input"]>;
  actionValueType?: InputMaybe<CouponActionValueType>;
}

export const enum CouponActionType {
  COLLECTION = "COLLECTION",
  FREE_SHIP = "FREE_SHIP",
  MEMBER_POINTS = "MEMBER_POINTS",
  ORDER = "ORDER",
  PRODUCT = "PRODUCT",
  PRODUCT_TAG = "PRODUCT_TAG",
  SINGLE_COLLECTION = "SINGLE_COLLECTION",
  SINGLE_PRODUCT = "SINGLE_PRODUCT",
  SINGLE_PRODUCT_TAG = "SINGLE_PRODUCT_TAG",
  TRIGGERED_ITEMS = "TRIGGERED_ITEMS",
}

export const enum CouponActionValueType {
  AMOUNT = "AMOUNT",
  FORMULA = "FORMULA",
  GIFT = "GIFT",
  PERCENTAGE = "PERCENTAGE",
}

export const enum CouponApplyCode {
  MAIN_CODE = "MAIN_CODE",
  SUB_CODE = "SUB_CODE",
}

export interface CouponInput {
  actions: Array<CouponActionInput>;
  /**   可用 */
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  companyId: Scalars["ID"]["input"];
  /**   優惠劵內容 */
  description?: InputMaybe<Scalars["String"]["input"]>;
  discardSubsequent?: InputMaybe<Scalars["Boolean"]["input"]>;
  display?: InputMaybe<Scalars["Boolean"]["input"]>;
  enabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  excludedCouponIds?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  excludedDiscountIds?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  excludedProductIds?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /**   Human-readable key. 優惠劵編號 */
  handle: Scalars["String"]["input"];
  media?: InputMaybe<MediaInput>;
  memberLimit?: InputMaybe<Scalars["Int"]["input"]>;
  membersOnly?: InputMaybe<Scalars["Boolean"]["input"]>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  /**   優惠劵名稱 */
  name: Scalars["String"]["input"];
  /**   領劵時限 由 */
  publishAt?: InputMaybe<Scalars["AWSDateTime"]["input"]>;
  /**   領劵上限 */
  publishLimit?: InputMaybe<Scalars["Int"]["input"]>;
  /**   領劵時限 至 */
  publishThru?: InputMaybe<Scalars["AWSDateTime"]["input"]>;
  /**   後台備註 */
  remark?: InputMaybe<Scalars["String"]["input"]>;
  repeat?: InputMaybe<Scalars["Int"]["input"]>;
  resolveCode?: InputMaybe<Scalars["String"]["input"]>;
  sortIndex?: InputMaybe<Scalars["Int"]["input"]>;
  triggers: Array<CouponTriggerInput>;
  usage?: InputMaybe<Scalars["Int"]["input"]>;
  /**   有效期 由 */
  validAt?: InputMaybe<Scalars["AWSDateTime"]["input"]>;
  /**   有效期 ISO Duration */
  validForPeriod?: InputMaybe<Scalars["String"]["input"]>;
  /**   有效期 至 */
  validThru?: InputMaybe<Scalars["AWSDateTime"]["input"]>;
}

export interface CouponTriggerInput {
  triggerId?: InputMaybe<Scalars["ID"]["input"]>;
  triggerIds?: InputMaybe<Array<Scalars["String"]["input"]>>;
  triggerType: CouponTriggerType;
  triggerValue?: InputMaybe<Scalars["Float"]["input"]>;
  triggerValueType?: InputMaybe<CouponTriggerValueType>;
}

export const enum CouponTriggerType {
  ALL = "ALL",
  BIRTH_MONTH = "BIRTH_MONTH",
  CHECKOUT_TAG = "CHECKOUT_TAG",
  COLLECTION = "COLLECTION",
  EXCLUDE_PRODUCT = "EXCLUDE_PRODUCT",
  MEMBER_TAG = "MEMBER_TAG",
  MEMBER_TIER = "MEMBER_TIER",
  ORDER = "ORDER",
  PRODUCT = "PRODUCT",
  PRODUCT_TAG = "PRODUCT_TAG",
  SHIPPING_COUNTRY = "SHIPPING_COUNTRY",
  SHOP = "SHOP",
  TIME = "TIME",
  WEEK_DAY = "WEEK_DAY",
}

export const enum CouponTriggerValueType {
  AMOUNT = "AMOUNT",
  QUANTITY = "QUANTITY",
}

export interface CredentialFilter {
  createdAt?: InputMaybe<FilterInput>;
  id?: InputMaybe<FilterInput>;
  name?: InputMaybe<FilterInput>;
  platforms?: InputMaybe<Array<ShopCredentialPlatform>>;
  types?: InputMaybe<Array<ShopCredentialType>>;
  updatedAt?: InputMaybe<FilterInput>;
}

export interface CredentialFilterInput {
  createdAt?: InputMaybe<FilterInput>;
  id?: InputMaybe<FilterInput>;
  name?: InputMaybe<FilterInput>;
  platforms?: InputMaybe<Array<ShopCredentialPlatform>>;
  types?: InputMaybe<Array<ShopCredentialType>>;
  updatedAt?: InputMaybe<FilterInput>;
}

export interface CredentialOCGCInput {
  description?: InputMaybe<Scalars["String"]["input"]>;
  identity: Scalars["String"]["input"];
  platforms?: InputMaybe<ShopCredentialPlatform>;
  secret?: InputMaybe<Scalars["String"]["input"]>;
}

export interface CredentialSetInput {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  identity: Scalars["String"]["input"];
  metadata?: InputMaybe<Array<MetadataInput>>;
  name: Scalars["String"]["input"];
  platform: ShopCredentialPlatform;
  secret: Scalars["String"]["input"];
  shopId: Scalars["ID"]["input"];
  type: ShopCredentialType;
}

export interface CreditNoteFilterInput {
  active?: InputMaybe<FilterInput>;
  createdAt?: InputMaybe<FilterInput>;
  currency?: InputMaybe<FilterInput>;
  id?: InputMaybe<FilterInput>;
  invoiceId?: InputMaybe<FilterInput>;
  orderId?: InputMaybe<FilterInput>;
  referenceNo?: InputMaybe<FilterInput>;
  shopId?: InputMaybe<FilterInput>;
  status?: InputMaybe<FilterInput>;
  total?: InputMaybe<FilterInput>;
  updatedAt?: InputMaybe<FilterInput>;
  userId?: InputMaybe<FilterInput>;
}

export const enum Currency {
  AED = "AED",
  AFN = "AFN",
  ALL = "ALL",
  AMD = "AMD",
  ANG = "ANG",
  AOA = "AOA",
  ARS = "ARS",
  AUD = "AUD",
  AWG = "AWG",
  AZN = "AZN",
  BAM = "BAM",
  BBD = "BBD",
  BDT = "BDT",
  BGN = "BGN",
  BHD = "BHD",
  BIF = "BIF",
  BMD = "BMD",
  BND = "BND",
  BOB = "BOB",
  BOV = "BOV",
  BRL = "BRL",
  BSD = "BSD",
  BTN = "BTN",
  BWP = "BWP",
  BYN = "BYN",
  BZD = "BZD",
  CAD = "CAD",
  CDF = "CDF",
  CHE = "CHE",
  CHF = "CHF",
  CHW = "CHW",
  CLF = "CLF",
  CLP = "CLP",
  CNY = "CNY",
  COP = "COP",
  COU = "COU",
  CRC = "CRC",
  CUP = "CUP",
  CVE = "CVE",
  CZK = "CZK",
  DJF = "DJF",
  DKK = "DKK",
  DOP = "DOP",
  DZD = "DZD",
  EGP = "EGP",
  ERN = "ERN",
  ETB = "ETB",
  EUR = "EUR",
  FJD = "FJD",
  FKP = "FKP",
  GBP = "GBP",
  GEL = "GEL",
  GHS = "GHS",
  GIP = "GIP",
  GMD = "GMD",
  GNF = "GNF",
  GTQ = "GTQ",
  GYD = "GYD",
  HKD = "HKD",
  HNL = "HNL",
  HTG = "HTG",
  HUF = "HUF",
  IDR = "IDR",
  ILS = "ILS",
  INR = "INR",
  IQD = "IQD",
  IRR = "IRR",
  ISK = "ISK",
  JMD = "JMD",
  JOD = "JOD",
  JPY = "JPY",
  KES = "KES",
  KGS = "KGS",
  KHR = "KHR",
  KMF = "KMF",
  KPW = "KPW",
  KRW = "KRW",
  KWD = "KWD",
  KYD = "KYD",
  KZT = "KZT",
  LAK = "LAK",
  LBP = "LBP",
  LKR = "LKR",
  LRD = "LRD",
  LSL = "LSL",
  LYD = "LYD",
  MAD = "MAD",
  MDL = "MDL",
  MGA = "MGA",
  MKD = "MKD",
  MMK = "MMK",
  MNT = "MNT",
  MOP = "MOP",
  MRU = "MRU",
  MUR = "MUR",
  MVR = "MVR",
  MWK = "MWK",
  MXN = "MXN",
  MXV = "MXV",
  MYR = "MYR",
  MZN = "MZN",
  NAD = "NAD",
  NGN = "NGN",
  NIO = "NIO",
  NOK = "NOK",
  NPR = "NPR",
  NZD = "NZD",
  OMR = "OMR",
  PAB = "PAB",
  PEN = "PEN",
  PGK = "PGK",
  PHP = "PHP",
  PKR = "PKR",
  PLN = "PLN",
  PYG = "PYG",
  QAR = "QAR",
  RON = "RON",
  RSD = "RSD",
  RUB = "RUB",
  RWF = "RWF",
  SAR = "SAR",
  SBD = "SBD",
  SCR = "SCR",
  SDG = "SDG",
  SEK = "SEK",
  SGD = "SGD",
  SHP = "SHP",
  SLE = "SLE",
  SOS = "SOS",
  SRD = "SRD",
  SSP = "SSP",
  STN = "STN",
  SVC = "SVC",
  SYP = "SYP",
  SZL = "SZL",
  THB = "THB",
  TJS = "TJS",
  TMT = "TMT",
  TND = "TND",
  TOP = "TOP",
  TRY = "TRY",
  TTD = "TTD",
  TWD = "TWD",
  TZS = "TZS",
  UAH = "UAH",
  UGX = "UGX",
  USD = "USD",
  USN = "USN",
  UYI = "UYI",
  UYU = "UYU",
  UYW = "UYW",
  UZS = "UZS",
  VED = "VED",
  VES = "VES",
  VND = "VND",
  VUV = "VUV",
  WST = "WST",
  XAF = "XAF",
  XAG = "XAG",
  XAU = "XAU",
  XBA = "XBA",
  XBB = "XBB",
  XBC = "XBC",
  XBD = "XBD",
  XCD = "XCD",
  XDR = "XDR",
  XOF = "XOF",
  XPD = "XPD",
  XPF = "XPF",
  XPT = "XPT",
  XSU = "XSU",
  XTS = "XTS",
  XUA = "XUA",
  YER = "YER",
  ZAR = "ZAR",
  ZMW = "ZMW",
  ZWG = "ZWG",
  ZWL = "ZWL",
}

export interface CustomerAddressCreateInput {
  city?: InputMaybe<Scalars["String"]["input"]>;
  country?: InputMaybe<Country>;
  district?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  isDefault?: InputMaybe<Scalars["Boolean"]["input"]>;
  lines: Array<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  person?: InputMaybe<Scalars["String"]["input"]>;
  postalCode?: InputMaybe<Scalars["String"]["input"]>;
  state?: InputMaybe<Scalars["String"]["input"]>;
  tel?: InputMaybe<Scalars["String"]["input"]>;
}

export interface CustomerAddressUpdateInput {
  city?: InputMaybe<Scalars["String"]["input"]>;
  country?: InputMaybe<Country>;
  district?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  isDefault?: InputMaybe<Scalars["Boolean"]["input"]>;
  lines?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  person?: InputMaybe<Scalars["String"]["input"]>;
  postalCode?: InputMaybe<Scalars["String"]["input"]>;
  state?: InputMaybe<Scalars["String"]["input"]>;
  tel?: InputMaybe<Scalars["String"]["input"]>;
}

export interface CustomerCredentialInput {
  email?: InputMaybe<Scalars["AWSEmail"]["input"]>;
  mobile?: InputMaybe<Scalars["AWSPhone"]["input"]>;
  /**   Validation of AWSPhone is outdated for HK, using awesome-phonenumber. */
  mobileV2?: InputMaybe<Scalars["String"]["input"]>;
  password: Scalars["String"]["input"];
}

export interface CustomerFilterInput {
  createdAt?: InputMaybe<FilterInput>;
  email?: InputMaybe<FilterInput>;
  hashtags?: InputMaybe<Array<Scalars["String"]["input"]>>;
  id?: InputMaybe<FilterInput>;
  lastLogin?: InputMaybe<FilterInput>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  phoneNumber?: InputMaybe<FilterInput>;
  search?: InputMaybe<FilterInput>;
  updatedAt?: InputMaybe<FilterInput>;
}

export interface CustomerProfileInput {
  addresses?: InputMaybe<Array<UserAddressInput>>;
  familyName?: InputMaybe<Scalars["String"]["input"]>;
  givenName?: InputMaybe<Scalars["String"]["input"]>;
  hashTags?: InputMaybe<Array<Scalars["String"]["input"]>>;
  hashtags?: InputMaybe<Array<Scalars["String"]["input"]>>;
  isEmailVerified?: InputMaybe<Scalars["Boolean"]["input"]>;
  isPhoneNumberVerified?: InputMaybe<Scalars["Boolean"]["input"]>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  nickname?: InputMaybe<Scalars["String"]["input"]>;
  oneSignalPlayerId?: InputMaybe<Scalars["String"]["input"]>;
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
  picture?: InputMaybe<Scalars["AWSURL"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
}

export interface DailyAvailabilityInput {
  /**   ['0','1','2','3','4','5','6'] 0=Sunday, 1=Monday. */
  daysOfWeek?: InputMaybe<Array<Scalars["String"]["input"]>>;
  startedAt?: InputMaybe<Scalars["AWSDateTime"]["input"]>;
  startedThru?: InputMaybe<Scalars["AWSDateTime"]["input"]>;
}

export interface DeliveryNoteCreateInput {
  items: Array<DeliveryNoteItemInput>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  orderId: Scalars["ID"]["input"];
  shippingAddress?: InputMaybe<AddressInput>;
  shippingZoneId?: InputMaybe<Scalars["ID"]["input"]>;
  trackingNumber?: InputMaybe<Scalars["String"]["input"]>;
}

export interface DeliveryNoteItemInput {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  orderItemId: Scalars["ID"]["input"];
  quantity: Scalars["Int"]["input"];
}

export interface DeliveryNoteSetInput {
  items?: InputMaybe<Array<DeliveryNoteItemInput>>;
  meta?: InputMaybe<Scalars["String"]["input"]>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  orderId: Scalars["ID"]["input"];
  shippingAddress?: InputMaybe<AddressInput>;
  shippingZoneId?: InputMaybe<Scalars["ID"]["input"]>;
  trackingNumber?: InputMaybe<Scalars["String"]["input"]>;
}

export const enum DeliveryNoteStatus {
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
  PENDING = "PENDING",
  PROCESSING = "PROCESSING",
  VOIDED = "VOIDED",
}

export interface DeliveryNoteUpdateInput {
  items?: InputMaybe<Array<DeliveryNoteItemInput>>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  shippingAddress?: InputMaybe<AddressInput>;
  shippingZoneId?: InputMaybe<Scalars["ID"]["input"]>;
  trackingNumber?: InputMaybe<Scalars["String"]["input"]>;
}

export interface DeliveryNotesFilterInput {
  active?: InputMaybe<FilterInput>;
  address?: InputMaybe<FilterInput>;
  completedAt?: InputMaybe<FilterInput>;
  createdAt?: InputMaybe<FilterInput>;
  deliveryDetails?: InputMaybe<FilterInput>;
  id?: InputMaybe<FilterInput>;
  meta?: InputMaybe<FilterInput>;
  orderId?: InputMaybe<FilterInput>;
  provider?: InputMaybe<FilterInput>;
  shippingProvider?: InputMaybe<FilterInput>;
  shopId?: InputMaybe<FilterInput>;
  status?: InputMaybe<FilterInput>;
  updatedAt?: InputMaybe<FilterInput>;
  userId?: InputMaybe<FilterInput>;
}

export interface DeviceConfigUpdateInput {
  configs: Scalars["AWSJSON"]["input"];
}

export interface DiscountActionInput {
  actionId?: InputMaybe<Scalars["ID"]["input"]>;
  actionIds?: InputMaybe<Array<Scalars["String"]["input"]>>;
  actionType: DiscountActionType;
  actionValue?: InputMaybe<Scalars["String"]["input"]>;
  actionValueType?: InputMaybe<DiscountActionValueType>;
}

export const enum DiscountActionType {
  COLLECTION = "COLLECTION",
  FREE_SHIP = "FREE_SHIP",
  MEMBER_POINTS = "MEMBER_POINTS",
  ORDER = "ORDER",
  PRODUCT = "PRODUCT",
  PRODUCT_TAG = "PRODUCT_TAG",
  SINGLE_COLLECTION = "SINGLE_COLLECTION",
  SINGLE_PRODUCT = "SINGLE_PRODUCT",
  SINGLE_PRODUCT_TAG = "SINGLE_PRODUCT_TAG",
  TRIGGERED_ITEMS = "TRIGGERED_ITEMS",
}

export const enum DiscountActionValueType {
  AMOUNT = "AMOUNT",
  FORMULA = "FORMULA",
  GIFT = "GIFT",
  PERCENTAGE = "PERCENTAGE",
}

export interface DiscountFilterInput {
  active?: InputMaybe<FilterInput>;
  companyId?: InputMaybe<FilterInput>;
  createdAt?: InputMaybe<FilterInput>;
  description?: InputMaybe<FilterInput>;
  discardSubsequent?: InputMaybe<FilterInput>;
  id?: InputMaybe<FilterInput>;
  name?: InputMaybe<FilterInput>;
  publishAt?: InputMaybe<FilterInput>;
  publishThru?: InputMaybe<FilterInput>;
  remark?: InputMaybe<FilterInput>;
  repeat?: InputMaybe<FilterInput>;
  search?: InputMaybe<FilterInput>;
  sortIndex?: InputMaybe<FilterInput>;
  updatedAt?: InputMaybe<FilterInput>;
}

export interface DiscountInput {
  actions: Array<DiscountActionInput>;
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  companyId: Scalars["ID"]["input"];
  /**   優惠劵內容 */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /**   排除以後的優惠 */
  discardSubsequent?: InputMaybe<Scalars["Boolean"]["input"]>;
  excludedCouponIds?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  excludedDiscountIds?: InputMaybe<Array<Scalars["String"]["input"]>>;
  excludedProductIds?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  membersOnly?: InputMaybe<Scalars["Boolean"]["input"]>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  /**   優惠劵名稱 */
  name: Scalars["String"]["input"];
  publishAt?: InputMaybe<Scalars["AWSDateTime"]["input"]>;
  publishThru?: InputMaybe<Scalars["AWSDateTime"]["input"]>;
  remark?: InputMaybe<Scalars["String"]["input"]>;
  repeat?: InputMaybe<Scalars["Int"]["input"]>;
  sortIndex?: InputMaybe<Scalars["Int"]["input"]>;
  triggers: Array<DiscountTriggerInput>;
}

export interface DiscountTriggerInput {
  triggerId?: InputMaybe<Scalars["ID"]["input"]>;
  triggerIds?: InputMaybe<Array<Scalars["String"]["input"]>>;
  triggerType: DiscountTriggerType;
  triggerValue?: InputMaybe<Scalars["Float"]["input"]>;
  triggerValueType?: InputMaybe<DiscountTriggerValueType>;
}

export const enum DiscountTriggerType {
  ALL = "ALL",
  BIRTH_MONTH = "BIRTH_MONTH",
  CHECKOUT_TAG = "CHECKOUT_TAG",
  COLLECTION = "COLLECTION",
  EXCLUDE_PRODUCT = "EXCLUDE_PRODUCT",
  MEMBER_TAG = "MEMBER_TAG",
  MEMBER_TIER = "MEMBER_TIER",
  ORDER = "ORDER",
  PRODUCT = "PRODUCT",
  PRODUCT_TAG = "PRODUCT_TAG",
  SHIPPING_COUNTRY = "SHIPPING_COUNTRY",
  SHOP = "SHOP",
  TIME = "TIME",
  WEEK_DAY = "WEEK_DAY",
}

export const enum DiscountTriggerValueType {
  AMOUNT = "AMOUNT",
  QUANTITY = "QUANTITY",
}

/**
 *  1. For infinite durations, specify `null` in the seconds field.
 * 2. Negative durations are allowed.
 */
export interface DurationInput {
  days?: InputMaybe<Scalars["Int"]["input"]>;
  hours?: InputMaybe<Scalars["Int"]["input"]>;
  minutes?: InputMaybe<Scalars["Int"]["input"]>;
  months?: InputMaybe<Scalars["Int"]["input"]>;
  /**   Specify `null` for infinite duration, use `0` for immediate triggers. */
  seconds?: InputMaybe<Scalars["Int"]["input"]>;
  weeks?: InputMaybe<Scalars["Int"]["input"]>;
  years?: InputMaybe<Scalars["Int"]["input"]>;
}

export const enum ExpiryDateTypes {
  DATE = "DATE",
  END_OF_MONTH = "END_OF_MONTH",
  START_OF_MONTH = "START_OF_MONTH",
}

export interface FilterInput {
  operator: FilterOperator;
  value: Array<InputMaybe<Scalars["String"]["input"]>>;
}

export const enum FilterOperator {
  BETWEEN = "BETWEEN",
  IN = "IN",
  LIKE = "LIKE",
  MATCH = "MATCH",
  NATCH = "NATCH",
  NIKE = "NIKE",
  NIN = "NIN",
  NLIKE = "NLIKE",
  NMATCH = "NMATCH",
}

export interface GiftPointAdjustmentConnectionFilterInput {
  companyId?: InputMaybe<FilterInput>;
  createdAt?: InputMaybe<FilterInput>;
  direction?: InputMaybe<GiftPointDirection>;
  expiryDate?: InputMaybe<FilterInput>;
  id?: InputMaybe<FilterInput>;
  shopId?: InputMaybe<FilterInput>;
  updatedAt?: InputMaybe<FilterInput>;
  userId?: InputMaybe<FilterInput>;
}

export const enum GiftPointDirection {
  INBOUND = "INBOUND",
  OUTBOUND = "OUTBOUND",
}

export interface GiftPointExportFilterInput {
  /**   調整日期 */
  createdAt?: InputMaybe<FilterInput>;
  customerId?: InputMaybe<FilterInput>;
  /**   積分有效日期 - support BETWEEN only */
  memberPointResetDates?: InputMaybe<FilterInput>;
  /**   備註 (Remark) - support MATCH fulltext search only */
  metadataValue?: InputMaybe<FilterInput>;
}

export const enum GiftPointStatus {
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
  PENDING = "PENDING",
}

export interface HonorProductSerialFilterInput {
  active?: InputMaybe<FilterInput>;
  createdAt?: InputMaybe<FilterInput>;
  imei?: InputMaybe<FilterInput>;
  sku?: InputMaybe<FilterInput>;
  sn1?: InputMaybe<FilterInput>;
  sn2?: InputMaybe<FilterInput>;
  updatedAt?: InputMaybe<FilterInput>;
}

export interface IngredientInput {
  companyId: Scalars["ID"]["input"];
  name: Scalars["String"]["input"];
}

export interface InventoryReportDataFilterInput {
  sku?: InputMaybe<FilterInput>;
}

export const enum InvoiceCreditNoteStatus {
  COMPLETED = "COMPLETED",
  PENDING = "PENDING",
  VOIDED = "VOIDED",
}

export interface InvoiceFilterInput {
  createdAt?: InputMaybe<FilterInput>;
  id?: InputMaybe<FilterInput>;
  orderId?: InputMaybe<FilterInput>;
  paymentMethod?: InputMaybe<FilterInput>;
  status?: InputMaybe<FilterInput>;
  total?: InputMaybe<FilterInput>;
  updatedAt?: InputMaybe<FilterInput>;
  userId?: InputMaybe<FilterInput>;
}

export const enum InvoiceRefundStatus {
  FULL = "FULL",
  PARTIAL = "PARTIAL",
}

export const enum MediaContentType {
  GIF = "GIF",
  JPG = "JPG",
  PNG = "PNG",
  TIFF = "TIFF",
}

export const enum MediaFitting {
  CONTAIN = "CONTAIN",
  COVER = "COVER",
  RESIZE = "RESIZE",
}

export const enum MediaGravity {
  CENTER = "CENTER",
  CENTRE = "CENTRE",
  EAST = "EAST",
  NORTH = "NORTH",
  NORTHEAST = "NORTHEAST",
  NORTHWEST = "NORTHWEST",
  SOUTH = "SOUTH",
  SOUTHEAST = "SOUTHEAST",
  SOUTHWEST = "SOUTHWEST",
  WEST = "WEST",
}

export interface MediaInput {
  alt?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  src?: InputMaybe<Scalars["AWSURL"]["input"]>;
}

export const enum MemberPointReleasePolicy {
  ORDER_CONFIRM = "ORDER_CONFIRM",
  ORDER_PAYMENT_COMPLETE = "ORDER_PAYMENT_COMPLETE",
  ORDER_SHIPPING_PROCESSING = "ORDER_SHIPPING_PROCESSING",
}

export interface MemberTierUpgradeConditionInput {
  type: UpgradeConditionType;
  upgradeConditionAmount: Scalars["Int"]["input"];
  upgradeConditionMonths?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface MetadataInput {
  key: Scalars["String"]["input"];
  value: Scalars["String"]["input"];
}

export interface NavigationTemplateCreateInput {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  configs?: InputMaybe<Scalars["AWSJSON"]["input"]>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  name: Scalars["String"]["input"];
  shopId: Scalars["ID"]["input"];
  type: NavigationTemplateType;
}

export interface NavigationTemplateFilterInput {
  active?: InputMaybe<FilterInput>;
  createdAt?: InputMaybe<FilterInput>;
  name?: InputMaybe<FilterInput>;
  type?: InputMaybe<FilterInput>;
  updatedAt?: InputMaybe<FilterInput>;
}

export const enum NavigationTemplateType {
  FOOTER = "FOOTER",
  HEADER = "HEADER",
}

export interface NavigationTemplateUpdateInput {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  configs?: InputMaybe<Scalars["AWSJSON"]["input"]>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  name?: InputMaybe<Scalars["String"]["input"]>;
}

export interface NewsletterSubscriptionFilterInput {
  active?: InputMaybe<FilterInput>;
  companyId?: InputMaybe<FilterInput>;
  contact?: InputMaybe<FilterInput>;
  createdAt?: InputMaybe<FilterInput>;
  id?: InputMaybe<FilterInput>;
  shopId?: InputMaybe<FilterInput>;
  type?: InputMaybe<FilterInput>;
  updatedAt?: InputMaybe<FilterInput>;
  userId?: InputMaybe<FilterInput>;
}

export interface NewsletterSubscriptionSetInput {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  contact: Scalars["String"]["input"];
  shopId?: InputMaybe<Scalars["ID"]["input"]>;
  type?: InputMaybe<SubscriptionType>;
  userId?: InputMaybe<Scalars["ID"]["input"]>;
}

export const enum OneTimeTokenStatus {
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
  EXPIRED = "EXPIRED",
  PENDING = "PENDING",
}

export const enum OneTimeTokenType {
  CONTACT_EMAIL_VERIFY = "CONTACT_EMAIL_VERIFY",
  CUSTOMER_VERIFY = "CUSTOMER_VERIFY",
  MOBILE_VERIFICATION = "MOBILE_VERIFICATION",
  RESET_PASSWORD = "RESET_PASSWORD",
  USER_VERIFY = "USER_VERIFY",
  VERIFICATION = "VERIFICATION",
}

export interface OrderAdjustmentInput {
  amount: Scalars["Float"]["input"];
  description: Scalars["String"]["input"];
}

export const enum OrderAdjustmentTypes {
  CompanyCoupons = "CompanyCoupons",
  CompanyDiscounts = "CompanyDiscounts",
  ShopShippingZones = "ShopShippingZones",
  ShopTaxZones = "ShopTaxZones",
  Text = "Text",
}

export const enum OrderBulkAction {
  EXPORT = "EXPORT",
}

export interface OrderCancelInput {
  cancelReason: Scalars["String"]["input"];
}

export interface OrderCommentInput {
  content: Scalars["String"]["input"];
  orderId?: InputMaybe<Scalars["String"]["input"]>;
}

export interface OrderFilterInput {
  active?: InputMaybe<FilterInput>;
  cancelReason?: InputMaybe<FilterInput>;
  companyId?: InputMaybe<FilterInput>;
  couponDiscount?: InputMaybe<FilterInput>;
  coupons?: InputMaybe<FilterInput>;
  createdAt?: InputMaybe<FilterInput>;
  customerId?: InputMaybe<FilterInput>;
  id?: InputMaybe<FilterInput>;
  isPreOrder?: InputMaybe<FilterInput>;
  kitchenStatus?: InputMaybe<FilterInput>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  paymentProvider?: InputMaybe<FilterInput>;
  paymentStatus?: InputMaybe<FilterInput>;
  referenceNo?: InputMaybe<FilterInput>;
  remark?: InputMaybe<FilterInput>;
  search?: InputMaybe<FilterInput>;
  shippingFee?: InputMaybe<FilterInput>;
  shippingStatus?: InputMaybe<FilterInput>;
  shopDiscount?: InputMaybe<FilterInput>;
  shopId?: InputMaybe<FilterInput>;
  status?: InputMaybe<FilterInput>;
  subtotal?: InputMaybe<FilterInput>;
  taxFee?: InputMaybe<FilterInput>;
  total?: InputMaybe<FilterInput>;
  totalAdjustment?: InputMaybe<FilterInput>;
  updatedAt?: InputMaybe<FilterInput>;
}

export const enum OrderInvoiceStatus {
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
  OVERPAID = "OVERPAID",
  PENDING = "PENDING",
  PROCESSING = "PROCESSING",
}

export interface OrderItemFilterInput {
  addOnProductId?: InputMaybe<FilterInput>;
  bundleProductId?: InputMaybe<FilterInput>;
  checkoutItemId?: InputMaybe<FilterInput>;
  orderId?: InputMaybe<FilterInput>;
  productId?: InputMaybe<FilterInput>;
  productVariationId?: InputMaybe<FilterInput>;
  quantity?: InputMaybe<FilterInput>;
  remark?: InputMaybe<FilterInput>;
  serviceBundleId?: InputMaybe<FilterInput>;
  sku?: InputMaybe<FilterInput>;
  unitPrice?: InputMaybe<FilterInput>;
}

export interface OrderUpdateInput {
  billingAddress?: InputMaybe<AddressInput>;
  internalMetadata?: InputMaybe<Array<MetadataInput>>;
  internalRemark?: InputMaybe<Scalars["String"]["input"]>;
  internalRemarkMedias?: InputMaybe<Array<MediaInput>>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  remark?: InputMaybe<Scalars["String"]["input"]>;
  remarkMedias?: InputMaybe<Array<MediaInput>>;
  shippingAddress?: InputMaybe<AddressInput>;
}

export const enum PageBulkAction {
  DELETE = "DELETE",
}

export interface PageFilterInput {
  active?: InputMaybe<FilterInput>;
  atFooter?: InputMaybe<FilterInput>;
  atHeader?: InputMaybe<FilterInput>;
  atMenu?: InputMaybe<FilterInput>;
  createdAt?: InputMaybe<FilterInput>;
  display?: InputMaybe<FilterInput>;
  group?: InputMaybe<FilterInput>;
  hashtags?: InputMaybe<FilterInput>;
  href?: InputMaybe<FilterInput>;
  id?: InputMaybe<FilterInput>;
  name?: InputMaybe<FilterInput>;
  rewriteUri?: InputMaybe<FilterInput>;
  sortIndex?: InputMaybe<FilterInput>;
  updatedAt?: InputMaybe<FilterInput>;
}

export interface PageInput {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  atFooter?: InputMaybe<Scalars["Boolean"]["input"]>;
  atHeader?: InputMaybe<Scalars["Boolean"]["input"]>;
  atMenu?: InputMaybe<Scalars["Boolean"]["input"]>;
  body?: InputMaybe<Scalars["String"]["input"]>;
  display?: InputMaybe<Scalars["Boolean"]["input"]>;
  group?: InputMaybe<Scalars["String"]["input"]>;
  hashtags?: InputMaybe<Array<Scalars["String"]["input"]>>;
  href: Scalars["String"]["input"];
  metaDescription?: InputMaybe<Scalars["String"]["input"]>;
  metaKeywords?: InputMaybe<Scalars["String"]["input"]>;
  metaTitle?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
  rewriteUri?: InputMaybe<Scalars["String"]["input"]>;
  shopId: Scalars["ID"]["input"];
  sortIndex?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface PaymentMethodCreateInput {
  credentialId: Scalars["ID"]["input"];
  description?: InputMaybe<Scalars["String"]["input"]>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  name: Scalars["String"]["input"];
  provider: PaymentProvider;
  sortIndex?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface PaymentMethodFilterInput {
  active?: InputMaybe<FilterInput>;
  createdAt?: InputMaybe<FilterInput>;
  credentialId?: InputMaybe<FilterInput>;
  enabled?: InputMaybe<FilterInput>;
  id?: InputMaybe<FilterInput>;
  name?: InputMaybe<FilterInput>;
  provider?: InputMaybe<FilterInput>;
  updatedAt?: InputMaybe<FilterInput>;
}

export interface PaymentMethodUpdateInput {
  description?: InputMaybe<Scalars["String"]["input"]>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  sortIndex?: InputMaybe<Scalars["Int"]["input"]>;
}

export const enum PaymentProvider {
  BBMSL_POS_ALIPAY = "BBMSL_POS_ALIPAY",
  BBMSL_POS_CREDIT_CARD = "BBMSL_POS_CREDIT_CARD",
  BBMSL_POS_OCTOPUS = "BBMSL_POS_OCTOPUS",
  BBMSL_POS_WECHAT = "BBMSL_POS_WECHAT",
  CASH_VOUCHER = "CASH_VOUCHER",
  EFT_ALIPAYCN = "EFT_ALIPAYCN",
  EFT_ALIPAYHK = "EFT_ALIPAYHK",
  EFT_FPS = "EFT_FPS",
  EFT_OCTOPUS = "EFT_OCTOPUS",
  EFT_PAYME = "EFT_PAYME",
  EFT_POS_CREDIT_CARD = "EFT_POS_CREDIT_CARD",
  EFT_POS_OCTOPUS = "EFT_POS_OCTOPUS",
  EFT_POS_SCAN = "EFT_POS_SCAN",
  EFT_UNIONPAY = "EFT_UNIONPAY",
  EFT_VM = "EFT_VM",
  EFT_WECHAT = "EFT_WECHAT",
  FREIGHT_AMIGO_ALIPAY_CN = "FREIGHT_AMIGO_ALIPAY_CN",
  FREIGHT_AMIGO_ALIPAY_HK = "FREIGHT_AMIGO_ALIPAY_HK",
  FREIGHT_AMIGO_CREDIT_CARD = "FREIGHT_AMIGO_CREDIT_CARD",
  FREIGHT_AMIGO_WECHAT = "FREIGHT_AMIGO_WECHAT",
  FREIGHT_AMIGO_WECHAT_CN = "FREIGHT_AMIGO_WECHAT_CN",
  FREIGHT_AMIGO_WECHAT_HK = "FREIGHT_AMIGO_WECHAT_HK",
  KPAY_ALIPAY_SALE_QR = "KPAY_ALIPAY_SALE_QR",
  KPAY_CNP_SALES_GATEWAY = "KPAY_CNP_SALES_GATEWAY",
  KPAY_POS_OCTOPUS = "KPAY_POS_OCTOPUS",
  KPAY_POS_PAYME = "KPAY_POS_PAYME",
  KPAY_POS_PAYMENT = "KPAY_POS_PAYMENT",
  KPAY_POS_SCAN = "KPAY_POS_SCAN",
  KPAY_UNIONPAY_SALE_QR = "KPAY_UNIONPAY_SALE_QR",
  KPAY_WXPAY_SALE_QR = "KPAY_WXPAY_SALE_QR",
  MANUAL = "MANUAL",
  OCGC_ALIPAY_HK_PREAUTH = "OCGC_ALIPAY_HK_PREAUTH",
  OCGC_ALIPAY_HK_SCAN = "OCGC_ALIPAY_HK_SCAN",
  OCGC_SMARTPAY_CREDITCARD = "OCGC_SMARTPAY_CREDITCARD",
  OCGC_SMARTPAY_UNIONPAY = "OCGC_SMARTPAY_UNIONPAY",
  OCGC_WEB_ALIPAY = "OCGC_WEB_ALIPAY",
  OCGC_WEB_UNIONPAY = "OCGC_WEB_UNIONPAY",
  OCGC_WEB_WECHAT = "OCGC_WEB_WECHAT",
  OCGC_WECHAT_PAY_HK_BRIDGE = "OCGC_WECHAT_PAY_HK_BRIDGE",
  OCGC_WECHAT_PAY_HK_PREAUTH = "OCGC_WECHAT_PAY_HK_PREAUTH",
  OCGC_WECHAT_PAY_HK_SCAN = "OCGC_WECHAT_PAY_HK_SCAN",
  OCTOPUS_POS = "OCTOPUS_POS",
  PAYPAL_STANDARD = "PAYPAL_STANDARD",
  QFPAY_ALIPAY_MPM = "QFPAY_ALIPAY_MPM",
  QFPAY_ALIPAY_WEB = "QFPAY_ALIPAY_WEB",
  QFPAY_CHECKOUT_SERVICE = "QFPAY_CHECKOUT_SERVICE",
  QFPAY_FPS_MPM = "QFPAY_FPS_MPM",
  QFPAY_PAYME_WEB = "QFPAY_PAYME_WEB",
  QFPAY_POS_ALIPAY = "QFPAY_POS_ALIPAY",
  QFPAY_POS_AMEX = "QFPAY_POS_AMEX",
  QFPAY_POS_CARD = "QFPAY_POS_CARD",
  QFPAY_POS_FPS = "QFPAY_POS_FPS",
  QFPAY_POS_OCTOPUS = "QFPAY_POS_OCTOPUS",
  QFPAY_POS_PAYME = "QFPAY_POS_PAYME",
  QFPAY_POS_UNION = "QFPAY_POS_UNION",
  QFPAY_POS_UNIONCARD = "QFPAY_POS_UNIONCARD",
  QFPAY_POS_WECHATPAY = "QFPAY_POS_WECHATPAY",
  QFPAY_VISA_MASTER_ONLINE = "QFPAY_VISA_MASTER_ONLINE",
  QFPAY_WECHAT_MPM = "QFPAY_WECHAT_MPM",
  SOEPAY_POS_CARD = "SOEPAY_POS_CARD",
  SOEPAY_POS_CASH = "SOEPAY_POS_CASH",
  SOEPAY_POS_QR = "SOEPAY_POS_QR",
  STRIPE_CONNECT_CUSTOM = "STRIPE_CONNECT_CUSTOM",
  STRIPE_CREDIT_CARD = "STRIPE_CREDIT_CARD",
  SWIFTPASS_ALIPAY_PREAUTH = "SWIFTPASS_ALIPAY_PREAUTH",
  SWIFTPASS_ALIPAY_SCAN = "SWIFTPASS_ALIPAY_SCAN",
  SWIFTPASS_WECHAT_PAY_BRIDGE = "SWIFTPASS_WECHAT_PAY_BRIDGE",
  SWIFTPASS_WECHAT_PAY_PREAUTH = "SWIFTPASS_WECHAT_PAY_PREAUTH",
  SWIFTPASS_WECHAT_PAY_SCAN = "SWIFTPASS_WECHAT_PAY_SCAN",
  UPRISE_PAYMENT = "UPRISE_PAYMENT",
}

export interface PermissionInput {
  /**   User access permission key, e.g. companyId/shopId */
  key: Scalars["String"]["input"];
  /**   Roles to assign to the user. */
  value: Array<Scalars["String"]["input"]>;
}

export const enum ProcessStatus {
  FAILURE = "FAILURE",
  PENDING = "PENDING",
  RUNNING = "RUNNING",
  SUCCESS = "SUCCESS",
}

export interface ProductCombinationInput {
  name: Scalars["String"]["input"];
  options: Array<ProductCombinationOptionInput>;
}

export interface ProductCombinationOptionInput {
  name: Scalars["String"]["input"];
  priceAdjustment?: InputMaybe<Scalars["Float"]["input"]>;
}

export interface ProductDetailInput {
  content: Scalars["String"]["input"];
  title: Scalars["String"]["input"];
}

export interface ProductFilterInput {
  active?: InputMaybe<FilterInput>;
  attributes?: InputMaybe<Array<AttributeFilterInput>>;
  barcode?: InputMaybe<FilterInput>;
  basePrice?: InputMaybe<FilterInput>;
  collectionId?: InputMaybe<FilterInput>;
  collectionIds?: InputMaybe<FilterInput>;
  createdAt?: InputMaybe<FilterInput>;
  display?: InputMaybe<FilterInput>;
  hashtags?: InputMaybe<FilterInput>;
  id?: InputMaybe<FilterInput>;
  maxPrice?: InputMaybe<FilterInput>;
  name?: InputMaybe<FilterInput>;
  primarySortIndex?: InputMaybe<FilterInput>;
  publishAt?: InputMaybe<FilterInput>;
  publishThru?: InputMaybe<FilterInput>;
  purchaseLimit?: InputMaybe<FilterInput>;
  quantity?: InputMaybe<FilterInput>;
  rewriteUri?: InputMaybe<FilterInput>;
  salesChannels?: InputMaybe<FilterInput>;
  search?: InputMaybe<FilterInput>;
  sku?: InputMaybe<FilterInput>;
  subtitle?: InputMaybe<FilterInput>;
  updatedAt?: InputMaybe<FilterInput>;
  variationBarcodes?: InputMaybe<FilterInput>;
  variationCost?: InputMaybe<FilterInput>;
  variationHashtags?: InputMaybe<FilterInput>;
  variationQuantity?: InputMaybe<FilterInput>;
  variationSkus?: InputMaybe<FilterInput>;
  variationStockLocations?: InputMaybe<FilterInput>;
}

export interface ProductInput {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  attributes?: InputMaybe<Array<ShopAttributeValueInput>>;
  barcode?: InputMaybe<Scalars["String"]["input"]>;
  barcodes?: InputMaybe<Array<Scalars["String"]["input"]>>;
  basePrice?: InputMaybe<Scalars["Float"]["input"]>;
  /**   Address collections via handles. */
  collectionCodes?: InputMaybe<Array<Scalars["String"]["input"]>>;
  collectionIds?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  combinations?: InputMaybe<Array<ProductCombinationInput>>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  details?: InputMaybe<Array<ProductDetailInput>>;
  display?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasPublishDuration?: InputMaybe<Scalars["Boolean"]["input"]>;
  hashTagsArray?: InputMaybe<Array<Scalars["String"]["input"]>>;
  hashtags?: InputMaybe<Array<Scalars["String"]["input"]>>;
  images?: InputMaybe<Array<Scalars["AWSURL"]["input"]>>;
  maxPrice?: InputMaybe<Scalars["Float"]["input"]>;
  medias?: InputMaybe<Array<ProductMediaInput>>;
  metaDescription?: InputMaybe<Scalars["String"]["input"]>;
  metaKeywords?: InputMaybe<Scalars["String"]["input"]>;
  metaTitle?: InputMaybe<Scalars["String"]["input"]>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  metadataFields?: InputMaybe<Array<CompanyMemberMetadataFieldInput>>;
  modifiers?: InputMaybe<Array<ProductModifierInput>>;
  name: Scalars["String"]["input"];
  primarySortIndex?: InputMaybe<Scalars["Int"]["input"]>;
  printDescription?: InputMaybe<Scalars["String"]["input"]>;
  publishAt?: InputMaybe<Scalars["AWSDateTime"]["input"]>;
  publishThru?: InputMaybe<Scalars["AWSDateTime"]["input"]>;
  purchaseLimit?: InputMaybe<Scalars["Float"]["input"]>;
  remarkSet?: InputMaybe<Scalars["String"]["input"]>;
  rewriteUri?: InputMaybe<Scalars["String"]["input"]>;
  salesChannels?: InputMaybe<Array<SalesChannel>>;
  shippingZoneIds?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  shopId: Scalars["ID"]["input"];
  sku: Scalars["String"]["input"];
  subtitle?: InputMaybe<Scalars["String"]["input"]>;
  variations?: InputMaybe<Array<ProductVariationInput>>;
}

export interface ProductMediaInput {
  alt?: InputMaybe<Scalars["String"]["input"]>;
  /**   Partial combination of a product, to act as quick filters for front end. */
  combination?: InputMaybe<Array<ProductVariationCombinationInput>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  src?: InputMaybe<Scalars["AWSURL"]["input"]>;
}

export interface ProductModifierInput {
  /**   Maximum option selection */
  max?: InputMaybe<Scalars["Int"]["input"]>;
  /**   Minimum option selection */
  min?: InputMaybe<Scalars["Int"]["input"]>;
  name: Scalars["String"]["input"];
  options: Array<ProductCombinationOptionInput>;
}

export interface ProductModifierOptionInput {
  name: Scalars["String"]["input"];
  priceAdjustment?: InputMaybe<Scalars["Float"]["input"]>;
}

export interface ProductUnionFilterInput {
  active?: InputMaybe<FilterInput>;
  attributes?: InputMaybe<Array<AttributeFilterInput>>;
  barcode?: InputMaybe<FilterInput>;
  basePrice?: InputMaybe<FilterInput>;
  collectionIds?: InputMaybe<FilterInput>;
  createdAt?: InputMaybe<FilterInput>;
  hashtags?: InputMaybe<FilterInput>;
  id?: InputMaybe<FilterInput>;
  maxPrice?: InputMaybe<FilterInput>;
  name?: InputMaybe<FilterInput>;
  primarySortIndex?: InputMaybe<FilterInput>;
  publishAt?: InputMaybe<FilterInput>;
  publishThru?: InputMaybe<FilterInput>;
  sku?: InputMaybe<FilterInput>;
  subtitle?: InputMaybe<FilterInput>;
  updatedAt?: InputMaybe<FilterInput>;
}

export interface ProductVariationCombinationInput {
  name: Scalars["String"]["input"];
  option: Scalars["String"]["input"];
}

export interface ProductVariationInput {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  barcode?: InputMaybe<Scalars["String"]["input"]>;
  barcodes?: InputMaybe<Array<Scalars["String"]["input"]>>;
  combination?: InputMaybe<Array<ProductVariationCombinationInput>>;
  cost: Scalars["Float"]["input"];
  display?: InputMaybe<Scalars["Boolean"]["input"]>;
  hashtags?: InputMaybe<Array<Scalars["String"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  ignoreStock?: InputMaybe<Scalars["Boolean"]["input"]>;
  images?: InputMaybe<Array<Scalars["AWSURL"]["input"]>>;
  ingredients?: InputMaybe<Scalars["ID"]["input"]>;
  lowStock?: InputMaybe<ReminderSettingInput>;
  medias?: InputMaybe<Array<MediaInput>>;
  quantity?: InputMaybe<Scalars["Int"]["input"]>;
  sku: Scalars["String"]["input"];
  stockLocations?: InputMaybe<Array<Scalars["String"]["input"]>>;
  suggestedRetailPrice?: InputMaybe<Scalars["Float"]["input"]>;
  unitPrice: Scalars["Float"]["input"];
  weight?: InputMaybe<Scalars["Float"]["input"]>;
}

export interface ProfileUpdateInput {
  familyName?: InputMaybe<Scalars["String"]["input"]>;
  givenName?: InputMaybe<Scalars["String"]["input"]>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  nickname?: InputMaybe<Scalars["String"]["input"]>;
  picture?: InputMaybe<Scalars["AWSURL"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
}

export const enum ReceiptTemplateType {
  FRONT = "FRONT",
  KITCHEN = "KITCHEN",
  LABEL = "LABEL",
  ORDER = "ORDER",
  QRCODE = "QRCODE",
  RECEIPT = "RECEIPT",
  RETURN = "RETURN",
}

export interface ReceivePurchaseCreateInput {
  deviceId?: InputMaybe<Scalars["ID"]["input"]>;
  items: Array<ReceivePurchaseItemInput>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  referenceNo?: InputMaybe<Scalars["String"]["input"]>;
  remark?: InputMaybe<Scalars["String"]["input"]>;
  salespersonId?: InputMaybe<Scalars["ID"]["input"]>;
  /**   specify shop's variation. */
  shopId?: InputMaybe<Scalars["ID"]["input"]>;
  staffId?: InputMaybe<Scalars["ID"]["input"]>;
  warehouseId: Scalars["ID"]["input"];
}

export interface ReceivePurchaseFilterInput {
  active?: InputMaybe<FilterInput>;
  companyId?: InputMaybe<FilterInput>;
  createdAt?: InputMaybe<FilterInput>;
  id?: InputMaybe<FilterInput>;
  remark?: InputMaybe<FilterInput>;
  staffId?: InputMaybe<FilterInput>;
  status?: InputMaybe<FilterInput>;
  updatedAt?: InputMaybe<FilterInput>;
  warehouseId?: InputMaybe<FilterInput>;
}

export interface ReceivePurchaseItemInput {
  cost: Scalars["Float"]["input"];
  id?: InputMaybe<Scalars["ID"]["input"]>;
  quantity: Scalars["Int"]["input"];
  sku: Scalars["ID"]["input"];
}

export interface ReceivePurchaseUpdateInput {
  deviceId?: InputMaybe<Scalars["ID"]["input"]>;
  items?: InputMaybe<Array<ReceivePurchaseItemInput>>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  remark?: InputMaybe<Scalars["String"]["input"]>;
  salespersonId?: InputMaybe<Scalars["ID"]["input"]>;
  /**   specify shop's variation. */
  shopId?: InputMaybe<Scalars["ID"]["input"]>;
  staffId?: InputMaybe<Scalars["ID"]["input"]>;
  warehouseId?: InputMaybe<Scalars["ID"]["input"]>;
}

export interface ReminderSettingInput {
  quantity?: InputMaybe<Scalars["Int"]["input"]>;
  remind: Scalars["Boolean"]["input"];
}

export interface ReturnNoteCreateInput {
  items: Array<ReturnNoteItemSetInput>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  orderId: Scalars["ID"]["input"];
  referenceNo?: InputMaybe<Scalars["String"]["input"]>;
  remark?: InputMaybe<Scalars["String"]["input"]>;
  shopId: Scalars["ID"]["input"];
}

export interface ReturnNoteFilterInput {
  createdAt?: InputMaybe<FilterInput>;
  id?: InputMaybe<FilterInput>;
  orderId?: InputMaybe<FilterInput>;
  orderReferenceNo?: InputMaybe<FilterInput>;
  /**   Order Shop */
  orderShopId?: InputMaybe<FilterInput>;
  productId?: InputMaybe<FilterInput>;
  productVariationId?: InputMaybe<FilterInput>;
  referenceNo?: InputMaybe<FilterInput>;
  remark?: InputMaybe<FilterInput>;
  /**   Return Shop */
  shopId?: InputMaybe<FilterInput>;
  status?: InputMaybe<FilterInput>;
  updatedAt?: InputMaybe<FilterInput>;
}

export interface ReturnNoteItemFilterInput {
  createdAt?: InputMaybe<FilterInput>;
  description?: InputMaybe<FilterInput>;
  quantity?: InputMaybe<FilterInput>;
  reason?: InputMaybe<FilterInput>;
  resalable?: InputMaybe<FilterInput>;
  sku?: InputMaybe<FilterInput>;
  unitPrice?: InputMaybe<FilterInput>;
  updatedAt?: InputMaybe<FilterInput>;
}

export interface ReturnNoteItemSetInput {
  bundleProductOptionId?: InputMaybe<Scalars["ID"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  orderItemId: Scalars["ID"]["input"];
  reason?: InputMaybe<Scalars["String"]["input"]>;
  remark?: InputMaybe<Scalars["String"]["input"]>;
  resalable: Scalars["Boolean"]["input"];
  sortIndex?: InputMaybe<Scalars["Int"]["input"]>;
}

export const enum ReturnNoteStatus {
  APPROVED = "APPROVED",
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
  PENDING = "PENDING",
  REJECTED = "REJECTED",
}

export interface ReturnNoteUpdateInput {
  items?: InputMaybe<Array<ReturnNoteItemSetInput>>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  remark?: InputMaybe<Scalars["String"]["input"]>;
}

export const enum SalesChannel {
  CUTSOMERADO = "CUTSOMERADO",
  DEFAULT = "DEFAULT",
  POS = "POS",
}

export interface SalesFilterInput {
  deviceId?: InputMaybe<Scalars["String"]["input"]>;
  orderStatus?: InputMaybe<ShopOrderStatus>;
  paymentStatus?: InputMaybe<ShopOrderInvoiceStatus>;
  shippingStatus?: InputMaybe<ShopOrderDeliveryNoteStatus>;
  startedAt?: InputMaybe<Scalars["AWSDateTime"]["input"]>;
  startedThru?: InputMaybe<Scalars["AWSDateTime"]["input"]>;
}

export interface ServiceBundleCreateInput {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  barcode?: InputMaybe<Scalars["String"]["input"]>;
  collectionCodes?: InputMaybe<Array<Scalars["String"]["input"]>>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  hashtags?: InputMaybe<Array<Scalars["String"]["input"]>>;
  ignoreStock?: InputMaybe<Scalars["Boolean"]["input"]>;
  medias?: InputMaybe<Array<MediaInput>>;
  metaDescription?: InputMaybe<Scalars["String"]["input"]>;
  metaKeywords?: InputMaybe<Scalars["String"]["input"]>;
  metaTitle?: InputMaybe<Scalars["String"]["input"]>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  metadataFields?: InputMaybe<Array<CompanyMemberMetadataFieldInput>>;
  modifiers?: InputMaybe<Array<ServiceBundleModifierInput>>;
  name: Scalars["String"]["input"];
  primarySortIndex?: InputMaybe<Scalars["Int"]["input"]>;
  publishAt?: InputMaybe<Scalars["AWSDateTime"]["input"]>;
  publishThru?: InputMaybe<Scalars["AWSDateTime"]["input"]>;
  quantity?: InputMaybe<Scalars["Int"]["input"]>;
  rewriteUri?: InputMaybe<Scalars["String"]["input"]>;
  services: Array<ServiceSetInput>;
  shopId: Scalars["ID"]["input"];
  sku: Scalars["String"]["input"];
  slotRequiredAtCheckout: Scalars["Boolean"]["input"];
  subtitle?: InputMaybe<Scalars["String"]["input"]>;
  suggestedRetailPrice?: InputMaybe<Scalars["Float"]["input"]>;
  unitPrice: Scalars["Float"]["input"];
  validationStrategy?: InputMaybe<ServiceValidationStrategy>;
}

export interface ServiceBundleFilterInput {
  active?: InputMaybe<FilterInput>;
  createdAt?: InputMaybe<FilterInput>;
  hashtags?: InputMaybe<FilterInput>;
  metaKeywords?: InputMaybe<FilterInput>;
  metaTitle?: InputMaybe<FilterInput>;
  name?: InputMaybe<FilterInput>;
  primarySortIndex?: InputMaybe<FilterInput>;
  publishAt?: InputMaybe<FilterInput>;
  publishThru?: InputMaybe<FilterInput>;
  rewriteUri?: InputMaybe<FilterInput>;
  shopId?: InputMaybe<FilterInput>;
  sku?: InputMaybe<FilterInput>;
  slotRequiredAtCheckout?: InputMaybe<FilterInput>;
  subtitle?: InputMaybe<FilterInput>;
  suggestedRetailPrice?: InputMaybe<FilterInput>;
  unitPrice?: InputMaybe<FilterInput>;
  updatedAt?: InputMaybe<FilterInput>;
  validationStrategy?: InputMaybe<FilterInput>;
}

export interface ServiceBundleModifierInput {
  /**   Maximum option selection */
  max?: InputMaybe<Scalars["Int"]["input"]>;
  /**   Minimum option selection */
  min?: InputMaybe<Scalars["Int"]["input"]>;
  name: Scalars["String"]["input"];
  options: Array<ServiceBundleModifierOptionInput>;
}

export interface ServiceBundleModifierOptionInput {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  minutesAdjustment?: InputMaybe<Scalars["Int"]["input"]>;
  name: Scalars["String"]["input"];
  priceAdjustment: Scalars["Float"]["input"];
  suggestedRetailPrice?: InputMaybe<Scalars["Float"]["input"]>;
}

export interface ServiceBundleUpdateInput {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  barcode?: InputMaybe<Scalars["String"]["input"]>;
  collectionCodes?: InputMaybe<Array<Scalars["String"]["input"]>>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  hashtags?: InputMaybe<Array<Scalars["String"]["input"]>>;
  ignoreStock?: InputMaybe<Scalars["Boolean"]["input"]>;
  medias?: InputMaybe<Array<MediaInput>>;
  metaDescription?: InputMaybe<Scalars["String"]["input"]>;
  metaKeywords?: InputMaybe<Scalars["String"]["input"]>;
  metaTitle?: InputMaybe<Scalars["String"]["input"]>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  metadataFields?: InputMaybe<Array<CompanyMemberMetadataFieldInput>>;
  modifiers?: InputMaybe<Array<ServiceBundleModifierInput>>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  primarySortIndex?: InputMaybe<Scalars["Int"]["input"]>;
  publishAt?: InputMaybe<Scalars["AWSDateTime"]["input"]>;
  publishThru?: InputMaybe<Scalars["AWSDateTime"]["input"]>;
  quantity?: InputMaybe<Scalars["Int"]["input"]>;
  rewriteUri?: InputMaybe<Scalars["String"]["input"]>;
  services?: InputMaybe<Array<ServiceSetInput>>;
  sku?: InputMaybe<Scalars["String"]["input"]>;
  subtitle?: InputMaybe<Scalars["String"]["input"]>;
  suggestedRetailPrice?: InputMaybe<Scalars["Float"]["input"]>;
  unitPrice?: InputMaybe<Scalars["Float"]["input"]>;
  validationStrategy?: InputMaybe<ServiceValidationStrategy>;
}

export interface ServiceFilterInput {
  active?: InputMaybe<FilterInput>;
  autoConfirm?: InputMaybe<FilterInput>;
  code?: InputMaybe<FilterInput>;
  createdAt?: InputMaybe<FilterInput>;
  daysOfWeek?: InputMaybe<FilterInput>;
  durationMins?: InputMaybe<FilterInput>;
  intervalMins?: InputMaybe<FilterInput>;
  name?: InputMaybe<FilterInput>;
  reserveMins?: InputMaybe<FilterInput>;
  serviceBundleId?: InputMaybe<FilterInput>;
  serviceLocationName?: InputMaybe<FilterInput>;
  showStartTimeOnly?: InputMaybe<FilterInput>;
  sortIndex?: InputMaybe<FilterInput>;
  startedAt?: InputMaybe<FilterInput>;
  startedThru?: InputMaybe<FilterInput>;
  updatedAt?: InputMaybe<FilterInput>;
}

export interface ServiceLocationCreateInput {
  address?: InputMaybe<AddressInput>;
  medias?: InputMaybe<Array<MediaInput>>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  name: Scalars["String"]["input"];
  rules?: InputMaybe<Array<ServiceLocationRuleSetInput>>;
  shopId: Scalars["ID"]["input"];
  sortIndex?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface ServiceLocationFilterInput {
  addressDistrict?: InputMaybe<FilterInput>;
  createdAt?: InputMaybe<FilterInput>;
  name?: InputMaybe<FilterInput>;
  sortIndex?: InputMaybe<FilterInput>;
  updatedAt?: InputMaybe<FilterInput>;
}

export interface ServiceLocationRuleCreateInput {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  capacity?: InputMaybe<Scalars["Int"]["input"]>;
  daysOfWeek?: InputMaybe<Array<Scalars["String"]["input"]>>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  serviceLocationId: Scalars["ID"]["input"];
  sortIndex?: InputMaybe<Scalars["Int"]["input"]>;
  startedAt: Scalars["AWSDateTime"]["input"];
  startedThru: Scalars["AWSDateTime"]["input"];
}

export interface ServiceLocationRuleFilterInput {
  active?: InputMaybe<FilterInput>;
  capacity?: InputMaybe<FilterInput>;
  createdAt?: InputMaybe<FilterInput>;
  daysOfWeek?: InputMaybe<FilterInput>;
  sortIndex?: InputMaybe<FilterInput>;
  startedAt?: InputMaybe<FilterInput>;
  startedThru?: InputMaybe<FilterInput>;
  updatedAt?: InputMaybe<FilterInput>;
}

export interface ServiceLocationRuleSetInput {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  capacity?: InputMaybe<Scalars["Int"]["input"]>;
  daysOfWeek?: InputMaybe<Array<Scalars["String"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  sortIndex?: InputMaybe<Scalars["Int"]["input"]>;
  startedAt: Scalars["AWSDateTime"]["input"];
  startedThru: Scalars["AWSDateTime"]["input"];
}

export interface ServiceLocationRuleUpdateInput {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  capacity?: InputMaybe<Scalars["Int"]["input"]>;
  daysOfWeek?: InputMaybe<Array<Scalars["String"]["input"]>>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  sortIndex?: InputMaybe<Scalars["Int"]["input"]>;
  startedAt?: InputMaybe<Scalars["AWSDateTime"]["input"]>;
  startedThru?: InputMaybe<Scalars["AWSDateTime"]["input"]>;
}

export interface ServiceLocationUpdateInput {
  address?: InputMaybe<AddressInput>;
  medias?: InputMaybe<Array<MediaInput>>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  rules?: InputMaybe<Array<ServiceLocationRuleSetInput>>;
  sortIndex?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface ServiceSetInput {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  autoConfirm?: InputMaybe<Scalars["Boolean"]["input"]>;
  availableUntil?: InputMaybe<DurationInput>;
  code?: InputMaybe<Scalars["String"]["input"]>;
  daysOfWeek?: InputMaybe<Array<Scalars["String"]["input"]>>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  durationMins: Scalars["Int"]["input"];
  id?: InputMaybe<Scalars["ID"]["input"]>;
  intervalMins: Scalars["Int"]["input"];
  medias?: InputMaybe<Array<MediaInput>>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  name: Scalars["String"]["input"];
  outboundSkus?: InputMaybe<Array<Scalars["String"]["input"]>>;
  reserveMins: Scalars["Int"]["input"];
  serviceLocationIds: Array<Scalars["ID"]["input"]>;
  serviceLocationName?: InputMaybe<Scalars["String"]["input"]>;
  showStartTimeOnly?: InputMaybe<Scalars["Boolean"]["input"]>;
  sortIndex?: InputMaybe<Scalars["Int"]["input"]>;
  startedAt: Scalars["AWSDateTime"]["input"];
  startedThru: Scalars["AWSDateTime"]["input"];
  validSince?: InputMaybe<DurationInput>;
  validUntil?: InputMaybe<DurationInput>;
}

export const enum ServiceValidationStrategy {
  PARALLEL = "PARALLEL",
  SERIES = "SERIES",
}

export interface ShippingZoneAddressFilterInput {
  active?: InputMaybe<FilterInput>;
  city?: InputMaybe<FilterInput>;
  country?: InputMaybe<FilterInput>;
  createdAt?: InputMaybe<FilterInput>;
  description?: InputMaybe<FilterInput>;
  district?: InputMaybe<FilterInput>;
  email?: InputMaybe<FilterInput>;
  id?: InputMaybe<FilterInput>;
  name?: InputMaybe<FilterInput>;
  person?: InputMaybe<FilterInput>;
  postalCode?: InputMaybe<FilterInput>;
  sortIndex?: InputMaybe<FilterInput>;
  state?: InputMaybe<FilterInput>;
  tel?: InputMaybe<FilterInput>;
  type?: InputMaybe<FilterInput>;
  updatedAt?: InputMaybe<FilterInput>;
}

export interface ShippingZoneAddressInput {
  city?: InputMaybe<Scalars["String"]["input"]>;
  country?: InputMaybe<Country>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  district?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  lines?: InputMaybe<Array<Scalars["String"]["input"]>>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  person?: InputMaybe<Scalars["String"]["input"]>;
  postalCode?: InputMaybe<Scalars["String"]["input"]>;
  sortIndex?: InputMaybe<Scalars["Int"]["input"]>;
  state?: InputMaybe<Scalars["String"]["input"]>;
  tel?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<ShippingZoneAddressType>;
}

export const enum ShippingZoneAddressType {
  CONVENIENCE_STORE = "CONVENIENCE_STORE",
  LOCKER = "LOCKER",
  PETROL_STATION = "PETROL_STATION",
  STORE = "STORE",
}

export interface ShippingZoneExpressionsInput {
  maxWeight?: InputMaybe<Scalars["Float"]["input"]>;
  unit: Scalars["Int"]["input"];
  unitPrice: Scalars["Float"]["input"];
}

export const enum ShippingZoneProvider {
  DELIVERY = "DELIVERY",
  FREIGHT_AMIGO = "FREIGHT_AMIGO",
  FREIGHT_AMIGO_PICKUP = "FREIGHT_AMIGO_PICKUP",
  HK_POST = "HK_POST",
  HK_POST_PICKUP = "HK_POST_PICKUP",
  IN_SITU = "IN_SITU",
  MANUAL = "MANUAL",
  PICKUP = "PICKUP",
  SF_EXPRESS = "SF_EXPRESS",
  SF_PICKUP = "SF_PICKUP",
  SHIPANY_SF_ALCOHOL_DELIVERY = "SHIPANY_SF_ALCOHOL_DELIVERY",
  SHIPANY_SF_ESHIP = "SHIPANY_SF_ESHIP",
  SHIPANY_SF_EXPRESS = "SHIPANY_SF_EXPRESS",
  SHIPANY_SF_E_COMM_BOX_F2 = "SHIPANY_SF_E_COMM_BOX_F2",
  SHIPANY_SF_E_COMM_BOX_F4 = "SHIPANY_SF_E_COMM_BOX_F4",
  SHIPANY_SF_E_COMM_BOX_F6 = "SHIPANY_SF_E_COMM_BOX_F6",
  SHIPANY_SF_INTERNATIONAL_ECONOMY_EXPRESS = "SHIPANY_SF_INTERNATIONAL_ECONOMY_EXPRESS",
  SHIPANY_SF_INTERNATIONAL_STANDARD_EXPRESS = "SHIPANY_SF_INTERNATIONAL_STANDARD_EXPRESS",
  SHIPANY_SF_PICKUP = "SHIPANY_SF_PICKUP",
  SHIPANY_SF_RETURN = "SHIPANY_SF_RETURN",
  SHIPANY_SF_SPEEDY_EXPRESS_TW = "SHIPANY_SF_SPEEDY_EXPRESS_TW",
  SHIPANY_SF_TEMPERATURE_CONTROLLED_DELIVERY = "SHIPANY_SF_TEMPERATURE_CONTROLLED_DELIVERY",
  SHIPANY_SF_TEMPERATURE_CONTROLLED_DELIVERY_ALCOHOL = "SHIPANY_SF_TEMPERATURE_CONTROLLED_DELIVERY_ALCOHOL",
}

export interface ShopAddressInput {
  city: Scalars["String"]["input"];
  country: Country;
  district?: InputMaybe<Scalars["String"]["input"]>;
  email: Scalars["String"]["input"];
  isDefault: Scalars["Boolean"]["input"];
  lines?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  person: Scalars["String"]["input"];
  postalCode?: InputMaybe<Scalars["String"]["input"]>;
  shopId: Scalars["ID"]["input"];
  state?: InputMaybe<Scalars["String"]["input"]>;
  tel: Scalars["String"]["input"];
}

export interface ShopAppointmentFilterInput {
  active?: InputMaybe<FilterInput>;
  attendanceStatus?: InputMaybe<FilterInput>;
  attendedAt?: InputMaybe<FilterInput>;
  companyId?: InputMaybe<FilterInput>;
  createdAt?: InputMaybe<FilterInput>;
  customerId?: InputMaybe<FilterInput>;
  deliveryNoteId?: InputMaybe<FilterInput>;
  deliveryNoteItemId?: InputMaybe<FilterInput>;
  orderId?: InputMaybe<FilterInput>;
  orderItemId?: InputMaybe<FilterInput>;
  referenceNo?: InputMaybe<FilterInput>;
  remark?: InputMaybe<FilterInput>;
  serviceBundleId?: InputMaybe<FilterInput>;
  serviceId?: InputMaybe<FilterInput>;
  serviceLocationId?: InputMaybe<FilterInput>;
  shopId?: InputMaybe<FilterInput>;
  startedAt?: InputMaybe<FilterInput>;
  startedThru?: InputMaybe<FilterInput>;
  status?: InputMaybe<FilterInput>;
  updatedAt?: InputMaybe<FilterInput>;
}

export interface ShopAttributeCreateInput {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  key: Scalars["String"]["input"];
  metadata?: InputMaybe<Array<MetadataInput>>;
  name: Scalars["String"]["input"];
  shopId: Scalars["ID"]["input"];
  sortIndex?: InputMaybe<Scalars["Int"]["input"]>;
  type: ShopAttributeType;
  typename: ShopAttributeTypename;
}

export interface ShopAttributeFilterInput {
  active?: InputMaybe<FilterInput>;
  createdAt?: InputMaybe<FilterInput>;
  key?: InputMaybe<FilterInput>;
  name?: InputMaybe<FilterInput>;
  sortIndex?: InputMaybe<FilterInput>;
  system?: InputMaybe<FilterInput>;
  type?: InputMaybe<FilterInput>;
  typename?: InputMaybe<FilterInput>;
  updatedAt?: InputMaybe<FilterInput>;
}

export const enum ShopAttributeType {
  COLOR = "COLOR",
  NUMBER = "NUMBER",
  TEXT = "TEXT",
}

export const enum ShopAttributeTypename {
  ShopProducts = "ShopProducts",
}

export interface ShopAttributeUpdateInput {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  sortIndex?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface ShopAttributeValueInput {
  attributeId?: InputMaybe<Scalars["ID"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  key?: InputMaybe<Scalars["String"]["input"]>;
  value: Scalars["String"]["input"];
}

export interface ShopAuthenticationCredentialInput {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  identity?: InputMaybe<Scalars["String"]["input"]>;
  meta?: InputMaybe<ShopCredentialMetaInput>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  platform: ShopAuthenticationCredentialPlatform;
  secret?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<ShopCredentialType>;
}

export const enum ShopAuthenticationCredentialPlatform {
  KCONNECT = "KCONNECT",
}

export const enum ShopBranchType {
  BRANCH = "BRANCH",
  MAIN = "MAIN",
}

export interface ShopBundleProductOptionInput {
  collectionId?: InputMaybe<Scalars["ID"]["input"]>;
  hashtags?: InputMaybe<Array<Scalars["String"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  price: Scalars["Float"]["input"];
  productId?: InputMaybe<Scalars["ID"]["input"]>;
}

export interface ShopBundleProductSectionInput {
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  label: Scalars["String"]["input"];
  options: Array<ShopBundleProductOptionInput>;
}

export const enum ShopCashFlowDirection {
  INBOUND = "INBOUND",
  OUTBOUND = "OUTBOUND",
}

export const enum ShopContactEmailType {
  BILLING = "BILLING",
  EXPORT = "EXPORT",
  GENERAL = "GENERAL",
  ORDER = "ORDER",
}

export interface ShopCredentialInput {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  identity?: InputMaybe<Scalars["String"]["input"]>;
  meta?: InputMaybe<Scalars["AWSJSON"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  platform: ShopCredentialPlatform;
  secret?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<ShopCredentialType>;
}

export interface ShopCredentialMetaInput {
  loginId?: InputMaybe<Scalars["String"]["input"]>;
  loginPWD?: InputMaybe<Scalars["String"]["input"]>;
}

export const enum ShopCredentialPlatform {
  BBMSL = "BBMSL",
  CPCB = "CPCB",
  EFT = "EFT",
  EFT_ALIPAYCN = "EFT_ALIPAYCN",
  EFT_ALIPAYHK = "EFT_ALIPAYHK",
  EFT_FPS = "EFT_FPS",
  EFT_OCTOPUS = "EFT_OCTOPUS",
  EFT_PAYME = "EFT_PAYME",
  EFT_POS = "EFT_POS",
  EFT_UNIONPAY = "EFT_UNIONPAY",
  EFT_VM = "EFT_VM",
  EFT_WECHAT = "EFT_WECHAT",
  FOODPANDA = "FOODPANDA",
  FREIGHT_AMIGO = "FREIGHT_AMIGO",
  FREIGHT_AMIGO_PAYMENT = "FREIGHT_AMIGO_PAYMENT",
  FREIGHT_AMIGO_SHIPMENT = "FREIGHT_AMIGO_SHIPMENT",
  HK_POST = "HK_POST",
  KCONNECT = "KCONNECT",
  KEETA = "KEETA",
  KPAY = "KPAY",
  KPAY_ALIPAY_SALE_QR = "KPAY_ALIPAY_SALE_QR",
  KPAY_CNP_SALES_GATEWAY = "KPAY_CNP_SALES_GATEWAY",
  KPAY_POS = "KPAY_POS",
  KPAY_POS_PAYMENT = "KPAY_POS_PAYMENT",
  KPAY_POS_SCAN = "KPAY_POS_SCAN",
  KPAY_UNIONPAY_SALE_QR = "KPAY_UNIONPAY_SALE_QR",
  KPAY_WXPAY_SALE_QR = "KPAY_WXPAY_SALE_QR",
  MANUAL = "MANUAL",
  OCGC = "OCGC",
  OCGC_ALIPAY_HK = "OCGC_ALIPAY_HK",
  OCGC_ALIPAY_HK_PREAUTH = "OCGC_ALIPAY_HK_PREAUTH",
  OCGC_ALIPAY_HK_SCAN = "OCGC_ALIPAY_HK_SCAN",
  OCGC_ALIPAY_OVERSEA = "OCGC_ALIPAY_OVERSEA",
  OCGC_SMARTPAY = "OCGC_SMARTPAY",
  OCGC_SMARTPAY_CREDITCARD = "OCGC_SMARTPAY_CREDITCARD",
  OCGC_SMARTPAY_UNIONPAY = "OCGC_SMARTPAY_UNIONPAY",
  OCGC_WECHAT_PAY_HK = "OCGC_WECHAT_PAY_HK",
  OCGC_WECHAT_PAY_HK_BRIDGE = "OCGC_WECHAT_PAY_HK_BRIDGE",
  OCGC_WECHAT_PAY_HK_PREAUTH = "OCGC_WECHAT_PAY_HK_PREAUTH",
  OCGC_WECHAT_PAY_HK_SCAN = "OCGC_WECHAT_PAY_HK_SCAN",
  OCGC_WECHAT_PAY_OVERSEA = "OCGC_WECHAT_PAY_OVERSEA",
  OCTOPUS_POS = "OCTOPUS_POS",
  OPENAI = "OPENAI",
  PAYPAL = "PAYPAL",
  QFPAY = "QFPAY",
  QFPAY_POS = "QFPAY_POS",
  SF_EXPRESS = "SF_EXPRESS",
  SHIPANY = "SHIPANY",
  SOEPAY_POS = "SOEPAY_POS",
  STRIPE_CONNECT_CUSTOM = "STRIPE_CONNECT_CUSTOM",
  STRIPE_CREDIT_CARD = "STRIPE_CREDIT_CARD",
  SWIFTPASS = "SWIFTPASS",
  SWIFTPASS_ALIPAY = "SWIFTPASS_ALIPAY",
  SWIFTPASS_ALIPAY_PREAUTH = "SWIFTPASS_ALIPAY_PREAUTH",
  SWIFTPASS_ALIPAY_SCAN = "SWIFTPASS_ALIPAY_SCAN",
  SWIFTPASS_WECHAT_PAY = "SWIFTPASS_WECHAT_PAY",
  SWIFTPASS_WECHAT_PAY_BRIDGE = "SWIFTPASS_WECHAT_PAY_BRIDGE",
  SWIFTPASS_WECHAT_PAY_PREAUTH = "SWIFTPASS_WECHAT_PAY_PREAUTH",
  SWIFTPASS_WECHAT_PAY_SCAN = "SWIFTPASS_WECHAT_PAY_SCAN",
  UPRISE_PAYMENT = "UPRISE_PAYMENT",
  WECHAT_AUTH = "WECHAT_AUTH",
}

export const enum ShopCredentialType {
  AUTHENTICATION = "AUTHENTICATION",
  PAYMENT = "PAYMENT",
  SHIPMENT = "SHIPMENT",
}

export interface ShopDeviceCreateInput {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  configs?: InputMaybe<Scalars["AWSJSON"]["input"]>;
  defaultConfigs?: InputMaybe<Scalars["AWSJSON"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  deviceId: Scalars["ID"]["input"];
  metadata?: InputMaybe<Array<MetadataInput>>;
  name: Scalars["String"]["input"];
  shopId: Scalars["ID"]["input"];
}

export interface ShopDeviceMetricCreateInput {
  metadata: Array<MetadataInput>;
}

export const enum ShopDeviceStatus {
  OFFLINE = "OFFLINE",
  ONLINE = "ONLINE",
}

export interface ShopDeviceUpdateInput {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  configs?: InputMaybe<Scalars["AWSJSON"]["input"]>;
  defaultConfigs?: InputMaybe<Scalars["AWSJSON"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  name?: InputMaybe<Scalars["String"]["input"]>;
}

export interface ShopEmailSendInput {
  from?: InputMaybe<Scalars["String"]["input"]>;
  html?: InputMaybe<Scalars["String"]["input"]>;
  shopId: Scalars["ID"]["input"];
  subject: Scalars["String"]["input"];
  templateData?: InputMaybe<Scalars["String"]["input"]>;
  templateType?: InputMaybe<ShopEmailTemplateType>;
  to: Array<Scalars["String"]["input"]>;
}

export interface ShopEmailTemplateCreateInput {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  configs?: InputMaybe<Scalars["AWSJSON"]["input"]>;
  isDefault?: InputMaybe<Scalars["Boolean"]["input"]>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  name: Scalars["String"]["input"];
  shopId: Scalars["ID"]["input"];
  type: ShopEmailTemplateType;
}

export interface ShopEmailTemplateFilterInput {
  active?: InputMaybe<FilterInput>;
  createdAt?: InputMaybe<FilterInput>;
  name?: InputMaybe<FilterInput>;
  type?: InputMaybe<FilterInput>;
  updatedAt?: InputMaybe<FilterInput>;
}

export const enum ShopEmailTemplateType {
  APPOINTMENT_ATTEND = "APPOINTMENT_ATTEND",
  APPOINTMENT_CANCEL = "APPOINTMENT_CANCEL",
  APPOINTMENT_CONFIRM = "APPOINTMENT_CONFIRM",
  APPOINTMENT_NO_SHOW = "APPOINTMENT_NO_SHOW",
  APPOINTMENT_UPDATE = "APPOINTMENT_UPDATE",
  CUSTOMER_BLOCK = "CUSTOMER_BLOCK",
  ORDER_CANCELLATION = "ORDER_CANCELLATION",
  ORDER_CONFIRMATION = "ORDER_CONFIRMATION",
  PASSWORD_CHANGE_SUCCESS = "PASSWORD_CHANGE_SUCCESS",
  PASSWORD_RESET = "PASSWORD_RESET",
  PRODUCT_ENQUIRY = "PRODUCT_ENQUIRY",
  SHIPMENT_TRACKING_UPDATES = "SHIPMENT_TRACKING_UPDATES",
  WELCOME_AND_VERIFY = "WELCOME_AND_VERIFY",
}

export interface ShopEmailTemplateUpdateInput {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  configs?: InputMaybe<Scalars["AWSJSON"]["input"]>;
  isDefault?: InputMaybe<Scalars["Boolean"]["input"]>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  name?: InputMaybe<Scalars["String"]["input"]>;
}

export interface ShopFormCreateInput {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  autoApprove?: InputMaybe<Scalars["Boolean"]["input"]>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  metadataFields: Array<CompanyMemberMetadataFieldInput>;
  name: Scalars["String"]["input"];
  shopId: Scalars["ID"]["input"];
  validAt?: InputMaybe<Scalars["AWSDateTime"]["input"]>;
  validThru?: InputMaybe<Scalars["AWSDateTime"]["input"]>;
}

export interface ShopFormFilterInput {
  active?: InputMaybe<FilterInput>;
  autoApprove?: InputMaybe<FilterInput>;
  createdAt?: InputMaybe<FilterInput>;
  name?: InputMaybe<FilterInput>;
  updatedAt?: InputMaybe<FilterInput>;
  validAt?: InputMaybe<FilterInput>;
  validThru?: InputMaybe<FilterInput>;
}

export interface ShopFormRecordFilterInput {
  active?: InputMaybe<FilterInput>;
  createdAt?: InputMaybe<FilterInput>;
  customerId?: InputMaybe<FilterInput>;
  status?: InputMaybe<FilterInput>;
  updatedAt?: InputMaybe<FilterInput>;
}

export const enum ShopFormRecordStatus {
  APPROVED = "APPROVED",
  PENDING = "PENDING",
  REJECTED = "REJECTED",
}

export interface ShopFormUpdateInput {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  autoApprove?: InputMaybe<Scalars["Boolean"]["input"]>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  metadataFields?: InputMaybe<Array<CompanyMemberMetadataFieldInput>>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  validAt?: InputMaybe<Scalars["AWSDateTime"]["input"]>;
  validThru?: InputMaybe<Scalars["AWSDateTime"]["input"]>;
}

export interface ShopManualCredentialInput {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  name: Scalars["String"]["input"];
}

export interface ShopMarqueeFilterInput {
  active?: InputMaybe<FilterInput>;
  createdAt?: InputMaybe<FilterInput>;
  updatedAt?: InputMaybe<FilterInput>;
}

export interface ShopMarqueeInput {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  backgroundColor?: InputMaybe<Scalars["String"]["input"]>;
  closable?: InputMaybe<Scalars["Boolean"]["input"]>;
  content?: InputMaybe<Scalars["String"]["input"]>;
  path?: InputMaybe<Scalars["String"]["input"]>;
  positionBottom?: InputMaybe<Scalars["String"]["input"]>;
  positionTop?: InputMaybe<Scalars["String"]["input"]>;
  shopId: Scalars["ID"]["input"];
}

export const enum ShopOrderDeliveryNoteStatus {
  COMPLETED = "COMPLETED",
  PARTIAL = "PARTIAL",
  PENDING = "PENDING",
  PROCESSING = "PROCESSING",
  SHIPPING = "SHIPPING",
}

export const enum ShopOrderInvoiceStatus {
  COMPLETED = "COMPLETED",
  PARTIAL_PAID = "PARTIAL_PAID",
  PENDING = "PENDING",
  PROCESSING = "PROCESSING",
}

export const enum ShopOrderKitchenStatus {
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
  PENDING = "PENDING",
  PROCESSING = "PROCESSING",
}

export const enum ShopOrderStatus {
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
  PENDING = "PENDING",
  PROCESSING = "PROCESSING",
}

export interface ShopPaymentCredentialInput {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  identity?: InputMaybe<Scalars["String"]["input"]>;
  meta?: InputMaybe<ShopCredentialMetaInput>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  platform: ShopPaymentCredentialPlatform;
  secret?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<ShopCredentialType>;
}

export const enum ShopPaymentCredentialPlatform {
  CPCB = "CPCB",
  EFT_ALIPAYCN = "EFT_ALIPAYCN",
  EFT_ALIPAYHK = "EFT_ALIPAYHK",
  EFT_FPS = "EFT_FPS",
  EFT_OCTOPUS = "EFT_OCTOPUS",
  EFT_PAYME = "EFT_PAYME",
  EFT_UNIONPAY = "EFT_UNIONPAY",
  EFT_VM = "EFT_VM",
  EFT_WECHAT = "EFT_WECHAT",
  KPAY_ALIPAY_SALE_QR = "KPAY_ALIPAY_SALE_QR",
  KPAY_CNP_SALES_GATEWAY = "KPAY_CNP_SALES_GATEWAY",
  KPAY_POS_PAYMENT = "KPAY_POS_PAYMENT",
  KPAY_POS_SCAN = "KPAY_POS_SCAN",
  KPAY_UNIONPAY_SALE_QR = "KPAY_UNIONPAY_SALE_QR",
  KPAY_WXPAY_SALE_QR = "KPAY_WXPAY_SALE_QR",
  MANUAL = "MANUAL",
  OCGC_ALIPAY_HK = "OCGC_ALIPAY_HK",
  OCGC_ALIPAY_HK_PREAUTH = "OCGC_ALIPAY_HK_PREAUTH",
  OCGC_ALIPAY_HK_SCAN = "OCGC_ALIPAY_HK_SCAN",
  OCGC_ALIPAY_OVERSEA = "OCGC_ALIPAY_OVERSEA",
  OCGC_SMARTPAY_CREDITCARD = "OCGC_SMARTPAY_CREDITCARD",
  OCGC_SMARTPAY_UNIONPAY = "OCGC_SMARTPAY_UNIONPAY",
  OCGC_WECHAT_PAY_HK = "OCGC_WECHAT_PAY_HK",
  OCGC_WECHAT_PAY_HK_BRIDGE = "OCGC_WECHAT_PAY_HK_BRIDGE",
  OCGC_WECHAT_PAY_HK_PREAUTH = "OCGC_WECHAT_PAY_HK_PREAUTH",
  OCGC_WECHAT_PAY_HK_SCAN = "OCGC_WECHAT_PAY_HK_SCAN",
  OCGC_WECHAT_PAY_OVERSEA = "OCGC_WECHAT_PAY_OVERSEA",
  STRIPE_CONNECT_CUSTOM = "STRIPE_CONNECT_CUSTOM",
  STRIPE_CREDIT_CARD = "STRIPE_CREDIT_CARD",
  SWIFTPASS_ALIPAY = "SWIFTPASS_ALIPAY",
  SWIFTPASS_ALIPAY_PREAUTH = "SWIFTPASS_ALIPAY_PREAUTH",
  SWIFTPASS_ALIPAY_SCAN = "SWIFTPASS_ALIPAY_SCAN",
  SWIFTPASS_WECHAT_PAY = "SWIFTPASS_WECHAT_PAY",
  SWIFTPASS_WECHAT_PAY_BRIDGE = "SWIFTPASS_WECHAT_PAY_BRIDGE",
  SWIFTPASS_WECHAT_PAY_PREAUTH = "SWIFTPASS_WECHAT_PAY_PREAUTH",
  SWIFTPASS_WECHAT_PAY_SCAN = "SWIFTPASS_WECHAT_PAY_SCAN",
  UPRISE_PAYMENT = "UPRISE_PAYMENT",
  WECHAT_AUTH = "WECHAT_AUTH",
}

export interface ShopPopupCreateInput {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  content?: InputMaybe<Scalars["String"]["input"]>;
  href?: InputMaybe<Scalars["String"]["input"]>;
  path?: InputMaybe<Scalars["String"]["input"]>;
  shopId: Scalars["ID"]["input"];
  validAt?: InputMaybe<Scalars["AWSDateTime"]["input"]>;
  validThru?: InputMaybe<Scalars["AWSDateTime"]["input"]>;
}

export interface ShopPopupUpdateInput {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  content?: InputMaybe<Scalars["String"]["input"]>;
  href?: InputMaybe<Scalars["String"]["input"]>;
  path?: InputMaybe<Scalars["String"]["input"]>;
  validAt?: InputMaybe<Scalars["AWSDateTime"]["input"]>;
  validThru?: InputMaybe<Scalars["AWSDateTime"]["input"]>;
}

export interface ShopProductModifierCreateInput {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  code: Scalars["String"]["input"];
  metadata?: InputMaybe<Array<MetadataInput>>;
  metadataFields?: InputMaybe<Array<CompanyMemberMetadataFieldInput>>;
  modifiers: Array<ProductModifierInput>;
  name: Scalars["String"]["input"];
  shopId: Scalars["ID"]["input"];
  sortIndex?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface ShopProductModifierFilterInput {
  active?: InputMaybe<FilterInput>;
  code?: InputMaybe<FilterInput>;
  createdAt?: InputMaybe<FilterInput>;
  name?: InputMaybe<FilterInput>;
  sortIndex?: InputMaybe<FilterInput>;
  updatedAt?: InputMaybe<FilterInput>;
}

export interface ShopProductModifierUpdateInput {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  code?: InputMaybe<Scalars["String"]["input"]>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  metadataFields?: InputMaybe<Array<CompanyMemberMetadataFieldInput>>;
  modifiers?: InputMaybe<Array<ProductModifierInput>>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  sortIndex?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface ShopReceiptTemplateCreateInput {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  configs?: InputMaybe<Scalars["AWSJSON"]["input"]>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  name: Scalars["String"]["input"];
  shopId: Scalars["ID"]["input"];
  type: ReceiptTemplateType;
}

export interface ShopReceiptTemplateFilterInput {
  active?: InputMaybe<FilterInput>;
  createdAt?: InputMaybe<FilterInput>;
  name?: InputMaybe<FilterInput>;
  type?: InputMaybe<FilterInput>;
  updatedAt?: InputMaybe<FilterInput>;
}

export interface ShopReceiptTemplateUpdateInput {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  configs?: InputMaybe<Scalars["AWSJSON"]["input"]>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  name?: InputMaybe<Scalars["String"]["input"]>;
}

export interface ShopReferenceNoFormatCreateInput {
  length: Scalars["Int"]["input"];
  prefix: Scalars["String"]["input"];
  shopId: Scalars["String"]["input"];
  type: ShopReferenceNoFormatType;
}

export interface ShopReferenceNoFormatFilterInput {
  active?: InputMaybe<FilterInput>;
  completedAt?: InputMaybe<FilterInput>;
  createdAt?: InputMaybe<FilterInput>;
  id?: InputMaybe<FilterInput>;
  length?: InputMaybe<FilterInput>;
  prefix?: InputMaybe<FilterInput>;
  shopId?: InputMaybe<FilterInput>;
  type?: InputMaybe<FilterInput>;
  updatedAt?: InputMaybe<FilterInput>;
}

export const enum ShopReferenceNoFormatType {
  INVOICE_CREDIT_NOTES = "INVOICE_CREDIT_NOTES",
  ORDER_DELIVERY_NOTES = "ORDER_DELIVERY_NOTES",
  ORDER_INVOICES = "ORDER_INVOICES",
  SHOP_ORDERS = "SHOP_ORDERS",
}

export interface ShopReferenceNoFormatUpdateInput {
  length?: InputMaybe<Scalars["Int"]["input"]>;
  prefix?: InputMaybe<Scalars["String"]["input"]>;
}

export interface ShopShippingCredentialInput {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  identity?: InputMaybe<Scalars["String"]["input"]>;
  meta?: InputMaybe<Scalars["AWSJSON"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  platform: ShopShippingCredentialPlatform;
  secret?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<ShopCredentialType>;
}

export const enum ShopShippingCredentialPlatform {
  HK_POST = "HK_POST",
  SF_EXPRESS = "SF_EXPRESS",
}

export const enum ShopShippingZoneBulkAction {
  DELETE = "DELETE",
}

export interface ShopShippingZoneFilterInput {
  active?: InputMaybe<FilterInput>;
  createdAt?: InputMaybe<FilterInput>;
  id?: InputMaybe<FilterInput>;
  maxWeight?: InputMaybe<FilterInput>;
  name?: InputMaybe<FilterInput>;
  provider?: InputMaybe<FilterInput>;
  sortIndex?: InputMaybe<FilterInput>;
  updatedAt?: InputMaybe<FilterInput>;
}

export interface ShopShippingZoneInput {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  addresses?: InputMaybe<Array<ShippingZoneAddressInput>>;
  countries?: InputMaybe<Array<Country>>;
  expressions?: InputMaybe<Array<ShippingZoneExpressionsInput>>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  name: Scalars["String"]["input"];
  provider: ShippingZoneProvider;
  shopId: Scalars["ID"]["input"];
  sortIndex?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface ShopSitemapFilterInput {
  active?: InputMaybe<FilterInput>;
  createdAt?: InputMaybe<FilterInput>;
  name?: InputMaybe<FilterInput>;
  updatedAt?: InputMaybe<FilterInput>;
  url?: InputMaybe<FilterInput>;
}

export interface ShopSitemapInput {
  name: Scalars["String"]["input"];
  shopId: Scalars["ID"]["input"];
  url: Scalars["AWSURL"]["input"];
}

export interface ShopTaxZoneInput {
  countries?: InputMaybe<Array<Country>>;
  shopId: Scalars["ID"]["input"];
  taxRate?: InputMaybe<Scalars["Float"]["input"]>;
}

export const enum SortOrder {
  ASC = "ASC",
  DESC = "DESC",
}

export interface SorterInput {
  field: Scalars["String"]["input"];
  order: SortOrder;
}

export const enum StaffRole {
  MANAGER = "MANAGER",
  STAFF = "STAFF",
}

export interface StockAdjustmentCreateInput {
  items: Array<StockAdjustmentItemSetInput>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  referenceNo?: InputMaybe<Scalars["String"]["input"]>;
  remark?: InputMaybe<Scalars["String"]["input"]>;
  shopId: Scalars["ID"]["input"];
  staffId?: InputMaybe<Scalars["ID"]["input"]>;
  warehouseId: Scalars["ID"]["input"];
}

export interface StockAdjustmentFilterInput {
  createdAt?: InputMaybe<FilterInput>;
  deviceId?: InputMaybe<FilterInput>;
  id?: InputMaybe<FilterInput>;
  referenceNo?: InputMaybe<FilterInput>;
  remark?: InputMaybe<FilterInput>;
  shopId?: InputMaybe<FilterInput>;
  staffId?: InputMaybe<FilterInput>;
  status?: InputMaybe<FilterInput>;
  updatedAt?: InputMaybe<FilterInput>;
  warehouseId?: InputMaybe<FilterInput>;
}

export interface StockAdjustmentItemFilterInput {
  cost?: InputMaybe<FilterInput>;
  createdAt?: InputMaybe<FilterInput>;
  quantity?: InputMaybe<FilterInput>;
  remark?: InputMaybe<FilterInput>;
  sku?: InputMaybe<FilterInput>;
  sortIndex?: InputMaybe<FilterInput>;
  updatedAt?: InputMaybe<FilterInput>;
}

export interface StockAdjustmentItemSetInput {
  cost?: InputMaybe<Scalars["Float"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  quantity: Scalars["Int"]["input"];
  remark?: InputMaybe<Scalars["String"]["input"]>;
  sku: Scalars["String"]["input"];
  sortIndex?: InputMaybe<Scalars["Int"]["input"]>;
}

export const enum StockAdjustmentStatus {
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
  PENDING = "PENDING",
  VOIDED = "VOIDED",
}

export interface StockAdjustmentUpdateInput {
  items?: InputMaybe<Array<StockAdjustmentItemSetInput>>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  remark?: InputMaybe<Scalars["String"]["input"]>;
  staffId?: InputMaybe<Scalars["ID"]["input"]>;
  warehouseId?: InputMaybe<Scalars["ID"]["input"]>;
}

export const enum StockMovementDirection {
  INBOUND = "INBOUND",
  OUTBOUND = "OUTBOUND",
}

export interface StockMovementFilterInput {
  createdAt?: InputMaybe<FilterInput>;
  reference?: InputMaybe<FilterInput>;
  sku?: InputMaybe<FilterInput>;
}

export const enum StockMovementStatus {
  NORMAL = "NORMAL",
  VOIDED = "VOIDED",
}

export interface StockTransferCreateInput {
  deviceId?: InputMaybe<Scalars["ID"]["input"]>;
  inboundWarehouseId: Scalars["ID"]["input"];
  items: Array<TransferItemInput>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  outboundWarehouseId: Scalars["ID"]["input"];
  referenceNo?: InputMaybe<Scalars["String"]["input"]>;
  remark?: InputMaybe<Scalars["String"]["input"]>;
  salespersonId?: InputMaybe<Scalars["ID"]["input"]>;
  shopId?: InputMaybe<Scalars["ID"]["input"]>;
  staffId?: InputMaybe<Scalars["ID"]["input"]>;
  transferWarehouseId: Scalars["ID"]["input"];
}

export interface StockTransferFilterInput {
  active?: InputMaybe<FilterInput>;
  companyId?: InputMaybe<FilterInput>;
  createdAt?: InputMaybe<FilterInput>;
  deviceId?: InputMaybe<FilterInput>;
  id?: InputMaybe<FilterInput>;
  inboundWarehouseId?: InputMaybe<FilterInput>;
  outboundWarehouseId?: InputMaybe<FilterInput>;
  referenceNo?: InputMaybe<FilterInput>;
  remark?: InputMaybe<FilterInput>;
  sku?: InputMaybe<FilterInput>;
  staffId?: InputMaybe<FilterInput>;
  status?: InputMaybe<FilterInput>;
  transferWarehouseId?: InputMaybe<FilterInput>;
  updatedAt?: InputMaybe<FilterInput>;
}

export interface StockTransferItemFilterInput {
  createdAt?: InputMaybe<FilterInput>;
  quantity?: InputMaybe<FilterInput>;
  remark?: InputMaybe<FilterInput>;
  sku?: InputMaybe<FilterInput>;
  sortIndex?: InputMaybe<FilterInput>;
  updatedAt?: InputMaybe<FilterInput>;
}

export interface StockTransferUpdateInput {
  deviceId?: InputMaybe<Scalars["ID"]["input"]>;
  inboundWarehouseId?: InputMaybe<Scalars["ID"]["input"]>;
  items?: InputMaybe<Array<TransferItemInput>>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  outboundWarehouseId?: InputMaybe<Scalars["ID"]["input"]>;
  remark?: InputMaybe<Scalars["String"]["input"]>;
  salespersonId?: InputMaybe<Scalars["ID"]["input"]>;
  staffId?: InputMaybe<Scalars["ID"]["input"]>;
  transferWarehouseId?: InputMaybe<Scalars["ID"]["input"]>;
}

export interface StocktakeInput {
  deviceId?: InputMaybe<Scalars["ID"]["input"]>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  referenceNo?: InputMaybe<Scalars["String"]["input"]>;
  remark?: InputMaybe<Scalars["String"]["input"]>;
  salespersonId?: InputMaybe<Scalars["ID"]["input"]>;
  shopId?: InputMaybe<Scalars["ID"]["input"]>;
  staffId?: InputMaybe<Scalars["ID"]["input"]>;
  warehouseId: Scalars["ID"]["input"];
}

export interface StocktakeItemInput {
  currentStock: Scalars["Int"]["input"];
  quantity: Scalars["Int"]["input"];
  sku: Scalars["String"]["input"];
}

export interface SubCouponInput {
  applyCode: CouponApplyCode;
  isRedeemable?: InputMaybe<Scalars["Boolean"]["input"]>;
  memberPointCost?: InputMaybe<Scalars["Int"]["input"]>;
  numberOfRedeem?: InputMaybe<Scalars["Int"]["input"]>;
  usage?: InputMaybe<Scalars["Int"]["input"]>;
}

export const enum SubscriptionType {
  EMAIL = "EMAIL",
  PUSH = "PUSH",
  SMS = "SMS",
}

export interface TableCreateInput {
  metadata?: InputMaybe<Array<MetadataInput>>;
  name: Scalars["String"]["input"];
  shape?: InputMaybe<TableShape>;
  shapeData?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  shopId: Scalars["ID"]["input"];
  sortIndex?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<TableStatus>;
  venueId: Scalars["ID"]["input"];
}

export interface TableFilterInput {
  color?: InputMaybe<FilterInput>;
  createdAt?: InputMaybe<FilterInput>;
  name?: InputMaybe<FilterInput>;
  shape?: InputMaybe<FilterInput>;
  sortIndex?: InputMaybe<FilterInput>;
  status?: InputMaybe<FilterInput>;
  updatedAt?: InputMaybe<FilterInput>;
  venueId?: InputMaybe<FilterInput>;
}

export const enum TableShape {
  CIRCLE = "CIRCLE",
  POLYGON = "POLYGON",
}

export const enum TableStatus {
  CANCELED = "CANCELED",
  COMPLETED = "COMPLETED",
  PENDING = "PENDING",
  PROCESSING = "PROCESSING",
}

export interface TableUpdateInput {
  metadata?: InputMaybe<Array<MetadataInput>>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  shape?: InputMaybe<TableShape>;
  shapeData?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  sortIndex?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<TableStatus>;
  venueId?: InputMaybe<Scalars["ID"]["input"]>;
}

export interface TransferItemInput {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  quantity: Scalars["Int"]["input"];
  remark?: InputMaybe<Scalars["String"]["input"]>;
  sku: Scalars["ID"]["input"];
}

export const enum UpgradeConditionType {
  SINGLE_PURCHASE = "SINGLE_PURCHASE",
  SPECIFIC_PERIOD = "SPECIFIC_PERIOD",
}

export interface UploadUrlInput {
  /**   Description of the uploaded file, reserved for future use. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /**   Desinated mime type of the file to be uploaded, this affects the resulting file extension. */
  mime?: InputMaybe<Scalars["String"]["input"]>;
}

export interface UserAddressInput {
  city?: InputMaybe<Scalars["String"]["input"]>;
  country?: InputMaybe<Country>;
  district?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isDefault?: InputMaybe<Scalars["Boolean"]["input"]>;
  lines?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  person?: InputMaybe<Scalars["String"]["input"]>;
  postalCode?: InputMaybe<Scalars["String"]["input"]>;
  state?: InputMaybe<Scalars["String"]["input"]>;
  tel?: InputMaybe<Scalars["String"]["input"]>;
}

export interface UserCouponExportFilterInput {
  /**   Redeem Date */
  createdAt?: InputMaybe<FilterInput>;
  customerId?: InputMaybe<FilterInput>;
  /**   couponId */
  id?: InputMaybe<FilterInput>;
  status?: InputMaybe<FilterInput>;
  /**   Use Date */
  usedAt?: InputMaybe<FilterInput>;
  validAt?: InputMaybe<FilterInput>;
  /**   Expiry Date */
  validThru?: InputMaybe<FilterInput>;
}

export interface UserCouponFilterInput {
  /**   Customer.coupons only */
  couponResolvable?: InputMaybe<Scalars["Boolean"]["input"]>;
  createdAt?: InputMaybe<FilterInput>;
  id?: InputMaybe<FilterInput>;
  status?: InputMaybe<FilterInput>;
  updatedAt?: InputMaybe<FilterInput>;
  usedAt?: InputMaybe<FilterInput>;
  userId?: InputMaybe<FilterInput>;
  validAt?: InputMaybe<FilterInput>;
  validThru?: InputMaybe<FilterInput>;
}

export const enum UserCouponStatus {
  ACTIVE = "ACTIVE",
  CANCELLED = "CANCELLED",
  EXPIRED = "EXPIRED",
  USED = "USED",
}

export interface UserCreateInput {
  hashtags?: InputMaybe<Array<Scalars["String"]["input"]>>;
  isEmailVerified?: InputMaybe<Scalars["Boolean"]["input"]>;
  isPhoneNumberVerified?: InputMaybe<Scalars["Boolean"]["input"]>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  name: Scalars["String"]["input"];
  permissions: Array<PermissionInput>;
  picture?: InputMaybe<Scalars["AWSURL"]["input"]>;
}

export interface UserCredentialInput {
  email: Scalars["AWSEmail"]["input"];
  mobile?: InputMaybe<Scalars["AWSPhone"]["input"]>;
  /**   Validation of AWSPhone is outdated for HK, using awesome-phonenumber. */
  mobileV2?: InputMaybe<Scalars["String"]["input"]>;
  password: Scalars["String"]["input"];
}

export interface UserCredentialUpdateInput {
  email?: InputMaybe<Scalars["AWSEmail"]["input"]>;
  mobile?: InputMaybe<Scalars["AWSPhone"]["input"]>;
  /**   Validation of AWSPhone is outdated for HK, using awesome-phonenumber. */
  mobileV2?: InputMaybe<Scalars["String"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
}

export interface UserFilterInput {
  active?: InputMaybe<FilterInput>;
  companyId?: InputMaybe<FilterInput>;
  createdAt?: InputMaybe<FilterInput>;
  email?: InputMaybe<FilterInput>;
  hashTags?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  hashtags?: InputMaybe<Array<Scalars["String"]["input"]>>;
  id?: InputMaybe<FilterInput>;
  name?: InputMaybe<FilterInput>;
  phoneNumber?: InputMaybe<FilterInput>;
  query?: InputMaybe<Array<UserQueryFilterInput>>;
  search?: InputMaybe<FilterInput>;
  shopId?: InputMaybe<FilterInput>;
  updatedAt?: InputMaybe<FilterInput>;
  userId?: InputMaybe<FilterInput>;
}

export interface UserMemberTierFilterInput {
  createdAt?: InputMaybe<FilterInput>;
  id?: InputMaybe<FilterInput>;
  memberTierId?: InputMaybe<FilterInput>;
  startedAt?: InputMaybe<FilterInput>;
  startedThru?: InputMaybe<FilterInput>;
  updatedAt?: InputMaybe<FilterInput>;
  userId?: InputMaybe<FilterInput>;
}

export interface UserMemberTierSetInput {
  memberTierId: Scalars["String"]["input"];
  metadata?: InputMaybe<Array<MetadataInput>>;
  /**   Optional expiry date, defaults to be calcualted with CompanyMemberTier.validForPeriod. */
  startedThru?: InputMaybe<Scalars["AWSDateTime"]["input"]>;
}

export interface UserQueryFilterInput {
  key: Scalars["String"]["input"];
  value: Scalars["String"]["input"];
}

export interface UserRegisterShopInput {
  name: Scalars["String"]["input"];
}

export interface UserRegisterUserInput {
  name?: InputMaybe<Scalars["String"]["input"]>;
}

export interface UserSalesFilterInput {
  startedAt?: InputMaybe<Scalars["AWSDateTime"]["input"]>;
  startedThru?: InputMaybe<Scalars["AWSDateTime"]["input"]>;
}

export interface UserShopsFilterInput {
  active?: InputMaybe<FilterInput>;
  branchType?: InputMaybe<FilterInput>;
  createdAt?: InputMaybe<FilterInput>;
  expiredAt?: InputMaybe<FilterInput>;
  id?: InputMaybe<FilterInput>;
  isContactEmailVerified?: InputMaybe<FilterInput>;
  name?: InputMaybe<FilterInput>;
  updatedAt?: InputMaybe<FilterInput>;
}

export interface UserUpdateInput {
  hashtags?: InputMaybe<Array<Scalars["String"]["input"]>>;
  isEmailVerified?: InputMaybe<Scalars["Boolean"]["input"]>;
  isPhoneNumberVerified?: InputMaybe<Scalars["Boolean"]["input"]>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  permissions?: InputMaybe<Array<PermissionInput>>;
  picture?: InputMaybe<Scalars["AWSURL"]["input"]>;
}

export interface VenueCreateInput {
  media?: InputMaybe<MediaInput>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  name: Scalars["String"]["input"];
  shopId: Scalars["ID"]["input"];
  sortIndex?: InputMaybe<Scalars["Int"]["input"]>;
  tables?: InputMaybe<Array<VenueTableSetInput>>;
}

export interface VenueFilterInput {
  createdAt?: InputMaybe<FilterInput>;
  name?: InputMaybe<FilterInput>;
  sortIndex?: InputMaybe<FilterInput>;
  updatedAt?: InputMaybe<FilterInput>;
}

export interface VenueTableSetInput {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  name: Scalars["String"]["input"];
  shape?: InputMaybe<TableShape>;
  shapeData?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  sortIndex?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<TableStatus>;
}

export interface VenueUpdateInput {
  media?: InputMaybe<MediaInput>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  sortIndex?: InputMaybe<Scalars["Int"]["input"]>;
  tables?: InputMaybe<Array<VenueTableSetInput>>;
}

export interface WarehouseFilterInput {
  active?: InputMaybe<FilterInput>;
  createdAt?: InputMaybe<FilterInput>;
  id?: InputMaybe<FilterInput>;
  name?: InputMaybe<FilterInput>;
  sortIndex?: InputMaybe<FilterInput>;
  type?: InputMaybe<FilterInput>;
  updatedAt?: InputMaybe<FilterInput>;
}

export interface WarehouseSetInput {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  address?: InputMaybe<AddressInput>;
  companyId: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  shopIds?: InputMaybe<Array<Scalars["String"]["input"]>>;
  sortIndex?: InputMaybe<Scalars["Int"]["input"]>;
  type?: InputMaybe<CompanyWarehouseTypes>;
}

export interface WishItemFilterInput {
  active?: InputMaybe<FilterInput>;
  createdAt?: InputMaybe<FilterInput>;
  id?: InputMaybe<FilterInput>;
  productId?: InputMaybe<FilterInput>;
  updatedAt?: InputMaybe<FilterInput>;
  userId?: InputMaybe<FilterInput>;
  wishlistId?: InputMaybe<FilterInput>;
}

export interface WishItemSetInput {
  bundleProductId?: InputMaybe<Scalars["ID"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  productId?: InputMaybe<Scalars["ID"]["input"]>;
  wishlistId?: InputMaybe<Scalars["ID"]["input"]>;
}

export interface WishlistFilterInput {
  active?: InputMaybe<FilterInput>;
  createdAt?: InputMaybe<FilterInput>;
  id?: InputMaybe<FilterInput>;
  isDefault?: InputMaybe<FilterInput>;
  name?: InputMaybe<FilterInput>;
  updatedAt?: InputMaybe<FilterInput>;
  userId?: InputMaybe<FilterInput>;
}

export interface WishlistSetInput {
  description?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
}

export const scalarsEnumsHash: ScalarsEnumsHash = {
  AWSDateTime: true,
  AWSEmail: true,
  AWSJSON: true,
  AWSPhone: true,
  AWSURL: true,
  AccountHolderType: true,
  AddOnProductType: true,
  ApplicationStatus: true,
  AppointmentAttendanceStatus: true,
  AppointmentStatus: true,
  AttendanceDirection: true,
  AttributeFilterOperator: true,
  BatchAssignmentOperator: true,
  BatchOperator: true,
  Boolean: true,
  CampaignActionType: true,
  CampaignMatchMode: true,
  CampaignRecipientActionStatus: true,
  CampaignRecipientStatus: true,
  CashVoucherCodeStatus: true,
  ChannelMessageType: true,
  ChannelType: true,
  CheckoutItemSetOperator: true,
  CheckoutRoundingStrategy: true,
  CheckoutStatus: true,
  CollectionBulkAction: true,
  CompanyMemberMetadataFieldType: true,
  CompanyReceivePurchaseStatus: true,
  CompanyStockTransferStatus: true,
  CompanyStocktakeStatus: true,
  CompanyWarehouseTypes: true,
  Country: true,
  CouponActionType: true,
  CouponActionValueType: true,
  CouponApplyCode: true,
  CouponTriggerType: true,
  CouponTriggerValueType: true,
  Currency: true,
  DeliveryNoteStatus: true,
  DiscountActionType: true,
  DiscountActionValueType: true,
  DiscountTriggerType: true,
  DiscountTriggerValueType: true,
  ExpiryDateTypes: true,
  FilterOperator: true,
  Float: true,
  GiftPointDirection: true,
  GiftPointStatus: true,
  ID: true,
  Int: true,
  InvoiceCreditNoteStatus: true,
  InvoiceRefundStatus: true,
  MediaContentType: true,
  MediaFitting: true,
  MediaGravity: true,
  MemberPointReleasePolicy: true,
  NavigationTemplateType: true,
  OneTimeTokenStatus: true,
  OneTimeTokenType: true,
  OrderAdjustmentTypes: true,
  OrderBulkAction: true,
  OrderInvoiceStatus: true,
  PageBulkAction: true,
  PaymentProvider: true,
  ProcessStatus: true,
  ReceiptTemplateType: true,
  ReturnNoteStatus: true,
  SalesChannel: true,
  ServiceValidationStrategy: true,
  ShippingZoneAddressType: true,
  ShippingZoneProvider: true,
  ShopAttributeType: true,
  ShopAttributeTypename: true,
  ShopAuthenticationCredentialPlatform: true,
  ShopBranchType: true,
  ShopCashFlowDirection: true,
  ShopContactEmailType: true,
  ShopCredentialPlatform: true,
  ShopCredentialType: true,
  ShopDeviceStatus: true,
  ShopEmailTemplateType: true,
  ShopFormRecordStatus: true,
  ShopOrderDeliveryNoteStatus: true,
  ShopOrderInvoiceStatus: true,
  ShopOrderKitchenStatus: true,
  ShopOrderStatus: true,
  ShopPaymentCredentialPlatform: true,
  ShopReferenceNoFormatType: true,
  ShopShippingCredentialPlatform: true,
  ShopShippingZoneBulkAction: true,
  SortOrder: true,
  StaffRole: true,
  StockAdjustmentStatus: true,
  StockMovementDirection: true,
  StockMovementStatus: true,
  String: true,
  SubscriptionType: true,
  TableShape: true,
  TableStatus: true,
  UpgradeConditionType: true,
  UserCouponStatus: true,
};
export const generatedSchema = {
  AddOnProductFilterInput: {
    active: { __type: "FilterInput" },
    amount: { __type: "FilterInput" },
    cost: { __type: "FilterInput" },
    id: { __type: "FilterInput" },
    ignoreStock: { __type: "FilterInput" },
    name: { __type: "FilterInput" },
    productId: { __type: "FilterInput" },
    publishAt: { __type: "FilterInput" },
    publishThru: { __type: "FilterInput" },
    sku: { __type: "FilterInput" },
    type: { __type: "FilterInput" },
    unitPrice: { __type: "FilterInput" },
    weight: { __type: "FilterInput" },
  },
  AddOnProductInput: {
    active: { __type: "Boolean!" },
    amount: { __type: "Float" },
    barcode: { __type: "String" },
    cost: { __type: "Float" },
    description: { __type: "String" },
    hashtags: { __type: "[String!]" },
    ignoreStock: { __type: "Boolean!" },
    medias: { __type: "[MediaInput!]" },
    name: { __type: "String!" },
    productId: { __type: "ID" },
    publishAt: { __type: "AWSDateTime" },
    publishThru: { __type: "AWSDateTime" },
    purchaseLimit: { __type: "Int" },
    quantity: { __type: "Int" },
    shopId: { __type: "ID!" },
    sku: { __type: "String!" },
    type: { __type: "AddOnProductType!" },
    unitPrice: { __type: "Float!" },
    weight: { __type: "Float" },
  },
  Address: {
    __typename: { __type: "String!" },
    city: { __type: "String" },
    country: { __type: "Country!" },
    district: { __type: "String" },
    email: { __type: "String" },
    lines: { __type: "[String!]" },
    name: { __type: "String" },
    person: { __type: "String" },
    postalCode: { __type: "String" },
    state: { __type: "String" },
    tel: { __type: "String" },
  },
  AddressInput: {
    city: { __type: "String" },
    country: { __type: "Country!" },
    district: { __type: "String" },
    email: { __type: "String" },
    lines: { __type: "[String!]" },
    name: { __type: "String" },
    person: { __type: "String" },
    postalCode: { __type: "String" },
    state: { __type: "String" },
    tel: { __type: "String" },
  },
  AgencyService: {
    __typename: { __type: "String!" },
    active: { __type: "Boolean!" },
    agent: { __type: "User!" },
    applications: {
      __type: "ServiceApplicationConnection!",
      __args: { cursor: "Int", limits: "Int" },
    },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    description: { __type: "String!" },
    id: { __type: "ID!" },
    name: { __type: "String!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
  },
  AgencyServiceApplication: {
    __typename: { __type: "String!" },
    agent: { __type: "User!" },
    comments: { __type: "[ApplicationComment]!" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    id: { __type: "ID!" },
    meta: { __type: "AWSJSON" },
    service: { __type: "AgencyService!" },
    shop: { __type: "CompanyShop!" },
    status: { __type: "ApplicationStatus!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
  },
  AgencyServiceApplicationInput: {
    serviceId: { __type: "ID!" },
    shopId: { __type: "ID!" },
  },
  AgencyServiceConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[AgencyService!]!" },
    totalCount: { __type: "Int!" },
  },
  AgencyServiceInput: {
    active: { __type: "Boolean" },
    description: { __type: "String" },
    title: { __type: "String!" },
  },
  AnalysisToolFilterInput: {
    active: { __type: "FilterInput" },
    context: { __type: "FilterInput" },
    createdAt: { __type: "FilterInput" },
    id: { __type: "FilterInput" },
    type: { __type: "FilterInput" },
    updatedAt: { __type: "FilterInput" },
  },
  AnalysisToolInput: {
    active: { __type: "Boolean" },
    context: { __type: "String!" },
    shopId: { __type: "ID!" },
    type: { __type: "String!" },
  },
  ApplicationComment: {
    __typename: { __type: "String!" },
    application: { __type: "AgencyServiceApplication!" },
    content: { __type: "String!" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    id: { __type: "ID!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
    user: { __type: "User!" },
  },
  ApplicationCommentInput: { content: { __type: "String!" } },
  AppointmentBookInput: {
    appointmentId: { __type: "ID!" },
    contactAddress: { __type: "AddressInput" },
    metadata: { __type: "[MetadataInput!]" },
    remark: { __type: "String" },
    serviceLocationId: { __type: "ID!" },
    startedAt: { __type: "AWSDateTime!" },
    startedThru: { __type: "AWSDateTime!" },
  },
  AppointmentCreateInput: {
    checkoutServiceId: { __type: "ID" },
    contactAddress: { __type: "AddressInput" },
    metadata: { __type: "[MetadataInput!]" },
    orderItemId: { __type: "ID" },
    remark: { __type: "String" },
    serviceId: { __type: "ID!" },
    serviceLocationId: { __type: "ID!" },
    startedAt: { __type: "AWSDateTime!" },
    startedThru: { __type: "AWSDateTime!" },
    status: { __type: "AppointmentStatus" },
  },
  AppointmentUpdateInput: {
    contactAddress: { __type: "AddressInput" },
    metadata: { __type: "[MetadataInput!]" },
    remark: { __type: "String" },
    serviceLocationId: { __type: "ID" },
    startedAt: { __type: "AWSDateTime" },
    startedThru: { __type: "AWSDateTime" },
  },
  AttendanceConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[ShopAttendance!]!" },
    totalCount: { __type: "Int!" },
  },
  AttendanceCreateInput: {
    createdAt: { __type: "AWSDateTime" },
    direction: { __type: "AttendanceDirection!" },
    metadata: { __type: "[MetadataInput!]" },
    shopId: { __type: "ID!" },
    staffId: { __type: "ID!" },
  },
  AttendanceFilterInput: {
    createdAt: { __type: "FilterInput" },
    direction: { __type: "FilterInput" },
    shopId: { __type: "FilterInput" },
    staffId: { __type: "FilterInput" },
    updatedAt: { __type: "FilterInput" },
  },
  AttendanceSecondsByDay: {
    __typename: { __type: "String!" },
    createdAt: { __type: "AWSDateTime!" },
    createdThru: { __type: "AWSDateTime!" },
    seconds: { __type: "Int!" },
    shopId: { __type: "ID!" },
    shopName: { __type: "String!" },
  },
  AttributeFilter: {
    __typename: { __type: "String!" },
    key: { __type: "String!" },
    name: { __type: "String!" },
    type: { __type: "ShopAttributeType!" },
    value: { __type: "[String!]!" },
  },
  AttributeFilterInput: {
    key: { __type: "String!" },
    operator: { __type: "AttributeFilterOperator!" },
    value: { __type: "[String!]!" },
  },
  BankAccountInput: {
    account_holder_name: { __type: "String" },
    account_holder_type: { __type: "AccountHolderType" },
    account_number: { __type: "String" },
    branch_number: { __type: "String" },
    country: { __type: "String" },
    currency: { __type: "String" },
    routing_number: { __type: "String" },
  },
  BundleProductCreateInput: {
    active: { __type: "Boolean" },
    barcode: { __type: "String" },
    collectionCodes: { __type: "[String!]" },
    cost: { __type: "Float" },
    description: { __type: "String" },
    display: { __type: "Boolean" },
    hashtags: { __type: "[String!]!" },
    ignoreStock: { __type: "Boolean" },
    medias: { __type: "[MediaInput!]!" },
    metaDescription: { __type: "String" },
    metaKeywords: { __type: "String" },
    metaTitle: { __type: "String" },
    name: { __type: "String!" },
    primarySortIndex: { __type: "Int" },
    publishAt: { __type: "AWSDateTime" },
    publishThru: { __type: "AWSDateTime" },
    quantity: { __type: "Int" },
    rewriteUri: { __type: "String" },
    salesChannels: { __type: "[SalesChannel!]" },
    sections: { __type: "[ShopBundleProductSectionInput!]!" },
    shippingZoneIds: { __type: "[ID!]" },
    shopId: { __type: "ID!" },
    sku: { __type: "String!" },
    subtitle: { __type: "String" },
    suggestedRetailPrice: { __type: "Float" },
    unitPrice: { __type: "Float!" },
    weight: { __type: "Float" },
  },
  BundleProductFilterInput: {
    active: { __type: "FilterInput" },
    barcode: { __type: "FilterInput" },
    cost: { __type: "FilterInput" },
    createdAt: { __type: "FilterInput" },
    display: { __type: "FilterInput" },
    id: { __type: "FilterInput" },
    ignoreStock: { __type: "FilterInput" },
    name: { __type: "FilterInput" },
    primarySortIndex: { __type: "FilterInput" },
    sku: { __type: "FilterInput" },
    suggestedRetailPrice: { __type: "FilterInput" },
    unitPrice: { __type: "FilterInput" },
    updatedAt: { __type: "FilterInput" },
    weight: { __type: "FilterInput" },
  },
  BundleProductUpdateInput: {
    active: { __type: "Boolean" },
    barcode: { __type: "String" },
    collectionCodes: { __type: "[String!]" },
    cost: { __type: "Float" },
    description: { __type: "String" },
    display: { __type: "Boolean" },
    hashtags: { __type: "[String!]" },
    ignoreStock: { __type: "Boolean" },
    medias: { __type: "[MediaInput!]" },
    metaDescription: { __type: "String" },
    metaKeywords: { __type: "String" },
    metaTitle: { __type: "String" },
    name: { __type: "String" },
    primarySortIndex: { __type: "Int" },
    publishAt: { __type: "AWSDateTime" },
    publishThru: { __type: "AWSDateTime" },
    quantity: { __type: "Int" },
    rewriteUri: { __type: "String" },
    salesChannels: { __type: "[SalesChannel!]" },
    sections: { __type: "[ShopBundleProductSectionInput!]" },
    shippingZoneIds: { __type: "[ID!]" },
    sku: { __type: "String" },
    subtitle: { __type: "String" },
    suggestedRetailPrice: { __type: "Float" },
    unitPrice: { __type: "Float" },
    weight: { __type: "Float" },
  },
  CampaignAction: {
    __typename: { __type: "String!" },
    active: { __type: "Boolean" },
    campaign: { __type: "ShopCampaign!" },
    content: { __type: "String!" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    id: { __type: "ID!" },
    richContent: { __type: "String" },
    type: { __type: "CampaignActionType!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
  },
  CampaignActionFilterInput: {
    active: { __type: "FilterInput" },
    content: { __type: "FilterInput" },
    createdAt: { __type: "FilterInput" },
    createdBy: { __type: "FilterInput" },
    id: { __type: "FilterInput" },
    type: { __type: "FilterInput" },
    updatedAt: { __type: "FilterInput" },
    updatedBy: { __type: "FilterInput" },
  },
  CampaignActionInput: {
    content: { __type: "String!" },
    id: { __type: "ID" },
    richContent: { __type: "String" },
    type: { __type: "CampaignActionType!" },
  },
  CampaignActionResult: {
    __typename: { __type: "String!" },
    action: { __type: "CampaignActionType!" },
    failureCount: { __type: "Int!" },
    successCount: { __type: "Int!" },
  },
  CampaignConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[ShopCampaign!]!" },
    totalCount: { __type: "Int!" },
  },
  CampaignFilterInput: {
    actionTypes: { __type: "FilterInput" },
    active: { __type: "FilterInput" },
    content: { __type: "FilterInput" },
    couponId: { __type: "FilterInput" },
    createdAt: { __type: "FilterInput" },
    excludedHashtags: { __type: "FilterInput" },
    id: { __type: "FilterInput" },
    name: { __type: "FilterInput" },
    shopId: { __type: "FilterInput" },
    targetHashtags: { __type: "FilterInput" },
    updatedAt: { __type: "FilterInput" },
  },
  CampaignRecipient: {
    __typename: { __type: "String!" },
    active: { __type: "Boolean" },
    campaign: { __type: "ShopCampaign!" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    id: { __type: "ID!" },
    referenceId: { __type: "String" },
    responseMessage: { __type: "AWSJSON" },
    sendingStatus: { __type: "CampaignRecipientStatus!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
    userId: { __type: "String!" },
  },
  CampaignRecipientConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[CampaignRecipient!]!" },
    totalCount: { __type: "Int!" },
  },
  CampaignRecipientFilterInput: {
    actionTypes: { __type: "FilterInput" },
    active: { __type: "FilterInput" },
    campaignId: { __type: "FilterInput" },
    contact: { __type: "FilterInput" },
    createdAt: { __type: "FilterInput" },
    id: { __type: "FilterInput" },
    referenceId: { __type: "FilterInput" },
    responseMessage: { __type: "FilterInput" },
    sendingStatus: { __type: "FilterInput" },
    updatedAt: { __type: "FilterInput" },
    userId: { __type: "FilterInput" },
  },
  CampaignResult: {
    __typename: { __type: "String!" },
    failureCount: { __type: "Int!" },
    pendingCount: { __type: "Int!" },
    successCount: { __type: "Int!" },
  },
  CampaignSetInput: {
    actionType: { __type: "CampaignActionType" },
    actionTypes: { __type: "[CampaignActionType!]" },
    actions: { __type: "[CampaignActionInput!]" },
    content: { __type: "String" },
    couponId: { __type: "ID" },
    couponIds: { __type: "[ID!]" },
    excludedHashtags: { __type: "[String!]" },
    excludedMatchMode: { __type: "CampaignMatchMode" },
    matchMode: { __type: "CampaignMatchMode" },
    name: { __type: "String" },
    richContent: { __type: "String" },
    shopId: { __type: "ID!" },
    targetHashtags: { __type: "[String!]" },
    targetMatchMode: { __type: "CampaignMatchMode" },
    thumbnail: { __type: "MediaInput" },
    validAt: { __type: "AWSDateTime" },
    validThru: { __type: "AWSDateTime" },
  },
  CashFlowFilterInput: {
    amount: { __type: "FilterInput" },
    createdAt: { __type: "FilterInput" },
    deviceId: { __type: "FilterInput" },
    direction: { __type: "FilterInput" },
    id: { __type: "FilterInput" },
    remark: { __type: "FilterInput" },
    updatedAt: { __type: "FilterInput" },
  },
  CashFlowInput: {
    amount: { __type: "Float!" },
    deviceId: { __type: "String!" },
    direction: { __type: "ShopCashFlowDirection!" },
    remark: { __type: "String" },
    shopId: { __type: "ID!" },
  },
  CashVoucherSetInput: {
    active: { __type: "Boolean" },
    companyId: { __type: "ID!" },
    description: { __type: "String!" },
    name: { __type: "String!" },
    numberOfVoucher: { __type: "Int!" },
    singleVoucherValue: { __type: "Float!" },
    thumbnail: { __type: "MediaInput" },
    unitPrice: { __type: "Float!" },
    validFor: { __type: "String" },
  },
  Channel: {
    __typename: { __type: "String!" },
    active: { __type: "Boolean!" },
    code: { __type: "String!" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    id: { __type: "ID!" },
    messages: {
      __type: "ChannelMessageConnection!",
      __args: {
        cursor: "Int",
        filter: "ChannelMessageFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    metadata: { __type: "[Metadata!]" },
    pin: { __type: "Boolean!" },
    players: { __type: "[ChannelPlayer!]!" },
    shop: { __type: "CompanyShop!" },
    shopId: { __type: "ID" },
    type: { __type: "ChannelType!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
  },
  ChannelConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[Channel!]!" },
    totalCount: { __type: "Int!" },
    unreadCount: { __type: "Int!" },
  },
  ChannelFilterInput: {
    active: { __type: "FilterInput" },
    code: { __type: "FilterInput" },
    createdAt: { __type: "FilterInput" },
    id: { __type: "FilterInput" },
    pin: { __type: "FilterInput" },
    type: { __type: "FilterInput" },
    updatedAt: { __type: "FilterInput" },
  },
  ChannelMessage: {
    __typename: { __type: "String!" },
    active: { __type: "Boolean!" },
    allRead: { __type: "Boolean!" },
    attachments: { __type: "[Node!]" },
    channel: { __type: "Channel!" },
    channelId: { __type: "ID" },
    channelPlayerId: { __type: "String!" },
    channelType: { __type: "ChannelType!" },
    content: { __type: "String" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    id: { __type: "ID!" },
    pin: { __type: "Boolean!" },
    process: { __type: "Process" },
    read: { __type: "Boolean!", __args: { playerId: "String!" } },
    richContent: { __type: "String" },
    sender: { __type: "ChannelPlayer" },
    shop: { __type: "CompanyShop!" },
    shopId: { __type: "ID" },
    thumbnail: { __type: "Media" },
    type: { __type: "ChannelMessageType!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
  },
  ChannelMessageConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[ChannelMessage!]!" },
    totalCount: { __type: "Int!" },
  },
  ChannelMessageFilterInput: {
    active: { __type: "FilterInput" },
    channelId: { __type: "FilterInput" },
    channelPlayerId: { __type: "FilterInput" },
    channelType: { __type: "FilterInput" },
    createdAt: { __type: "FilterInput" },
    id: { __type: "FilterInput" },
    pin: { __type: "FilterInput" },
    readChannelPlayerIds: { __type: "FilterInput" },
    shopId: { __type: "FilterInput" },
    type: { __type: "FilterInput" },
    updatedAt: { __type: "FilterInput" },
  },
  ChannelMessageSetInput: {
    channelId: { __type: "ID!" },
    channelPlayerId: { __type: "String!" },
    content: { __type: "String" },
    pin: { __type: "Boolean" },
    type: { __type: "ChannelMessageType" },
  },
  ChannelPlayer: {
    __typename: { __type: "String!" },
    active: { __type: "Boolean!" },
    channel: { __type: "Channel!" },
    createdAt: { __type: "AWSDateTime" },
    createdBy: { __type: "User" },
    email: { __type: "String" },
    id: { __type: "String" },
    isSystem: { __type: "Boolean" },
    messages: {
      __type: "ChannelMessageConnection!",
      __args: {
        cursor: "Int",
        filter: "ChannelMessageFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    name: { __type: "String" },
    picture: { __type: "String" },
    updatedAt: { __type: "AWSDateTime" },
    updatedBy: { __type: "User" },
  },
  ChannelPlayerSetInput: {
    channelId: { __type: "ID!" },
    email: { __type: "String!" },
    name: { __type: "String!" },
    picture: { __type: "String" },
    userId: { __type: "String" },
  },
  ChannelSetInput: {
    active: { __type: "Boolean" },
    code: { __type: "String!" },
    metadata: { __type: "[MetadataInput!]" },
    pin: { __type: "Boolean" },
    shopId: { __type: "ID!" },
    type: { __type: "ChannelType" },
  },
  ChartData: {
    __typename: { __type: "String!" },
    name: { __type: "String!" },
    value: { __type: "Float!" },
  },
  CheckoutAddOnProductInput: {
    id: { __type: "ID!" },
    quantity: { __type: "Int!" },
  },
  CheckoutAdjustment: {
    __typename: { __type: "String!" },
    amount: { __type: "Float!" },
    description: { __type: "String" },
    points: { __type: "Int" },
    sortIndex: { __type: "Int!" },
  },
  CheckoutAdjustmentInput: {
    amount: { __type: "Float!" },
    description: { __type: "String" },
    referenceId: { __type: "ID" },
    sortIndex: { __type: "Int!" },
    typename: { __type: "String" },
  },
  CheckoutBundleProduct: {
    __typename: { __type: "String!" },
    bundleProduct: { __type: "ShopBundleProduct!" },
    options: { __type: "[CheckoutBundleProductOption!]!" },
  },
  CheckoutBundleProductInput: {
    id: { __type: "ID!" },
    options: { __type: "[CheckoutBundleProductOptionInput!]!" },
    sku: { __type: "String" },
  },
  CheckoutBundleProductOption: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    label: { __type: "String!" },
    price: { __type: "Float!" },
    product: { __type: "ShopProduct" },
    remark: { __type: "String" },
    variation: { __type: "ProductVariation" },
  },
  CheckoutBundleProductOptionInput: {
    id: { __type: "ID!" },
    modifiers: { __type: "[CheckoutItemModifierInput!]" },
    remark: { __type: "String" },
    sku: { __type: "String" },
    variationId: { __type: "ID!" },
  },
  CheckoutCashVoucher: {
    __typename: { __type: "String!" },
    active: { __type: "Boolean" },
    cashVoucher: { __type: "CompanyCashVoucher" },
    checkout: { __type: "ShopCheckout!" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    id: { __type: "ID!" },
    quantity: { __type: "Int!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
  },
  CheckoutCashVoucherConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[CheckoutCashVoucher!]!" },
    totalCount: { __type: "Int!" },
  },
  CheckoutCashVoucherInput: {
    cashVoucherId: { __type: "ID!" },
    id: { __type: "ID" },
    quantity: { __type: "Int!" },
  },
  CheckoutCoupon: {
    __typename: { __type: "String!" },
    coupon: { __type: "CompanyCoupon" },
    handle: { __type: "String" },
    id: { __type: "ID!" },
  },
  CheckoutCreateOfflineInput: {
    billingAddress: { __type: "AddressInput" },
    cashier: { __type: "String" },
    couponDiscount: { __type: "Float" },
    coupons: { __type: "String" },
    createdAt: { __type: "AWSDateTime!" },
    currency: { __type: "Currency" },
    customer: { __type: "CheckoutCreateOfflineUserInput" },
    deviceId: { __type: "String" },
    discounts: { __type: "String" },
    gainMemberPoints: { __type: "Int" },
    id: { __type: "ID!" },
    isInSitu: { __type: "Boolean" },
    isPreOrder: { __type: "Boolean" },
    items: { __type: "[CheckoutCreateOfflineItemInput!]" },
    memberPoints: { __type: "Int" },
    metadata: { __type: "[MetadataInput!]" },
    order: { __type: "CheckoutCreateOfflineOrderInput" },
    pickUpAddressId: { __type: "ID" },
    referenceNo: { __type: "String!" },
    salespersonId: { __type: "ID" },
    shippingAddress: { __type: "AddressInput" },
    shippingFee: { __type: "Float!" },
    shippingProviderId: { __type: "ID" },
    shopDiscount: { __type: "Float" },
    shopId: { __type: "ID!" },
    staffId: { __type: "ID" },
    subtotal: { __type: "Float!" },
    taxFee: { __type: "Float!" },
    total: { __type: "Float!" },
    totalAdjustments: { __type: "[CheckoutAdjustmentInput!]" },
    updatedAt: { __type: "AWSDateTime!" },
  },
  CheckoutCreateOfflineInvoiceInput: {
    change: { __type: "Float!" },
    createdAt: { __type: "AWSDateTime!" },
    credential: { __type: "String!" },
    id: { __type: "String!" },
    paymentMethod: { __type: "String" },
    provider: { __type: "PaymentProvider" },
    status: { __type: "OrderInvoiceStatus!" },
    total: { __type: "Float!" },
    updatedAt: { __type: "AWSDateTime!" },
  },
  CheckoutCreateOfflineItemInput: {
    bundleProduct: { __type: "CheckoutBundleProductInput" },
    createdAt: { __type: "AWSDateTime" },
    description: { __type: "String" },
    id: { __type: "String" },
    media: { __type: "MediaInput" },
    metadata: { __type: "[MetadataInput!]" },
    metadataFields: { __type: "[CompanyMemberMetadataFieldInput!]" },
    productVariationId: { __type: "String" },
    quantity: { __type: "Int!" },
    remark: { __type: "String" },
    sku: { __type: "String" },
    unitPrice: { __type: "Float!" },
    updatedAt: { __type: "AWSDateTime" },
  },
  CheckoutCreateOfflineOrderInput: {
    createdAt: { __type: "AWSDateTime!" },
    id: { __type: "String!" },
    internalRemark: { __type: "String" },
    internalRemarkMedias: { __type: "[MediaInput!]" },
    invoices: { __type: "[CheckoutCreateOfflineInvoiceInput!]" },
    kitchenStatus: { __type: "ShopOrderKitchenStatus" },
    remark: { __type: "String" },
    remarkMedias: { __type: "[MediaInput!]" },
    totalAdjustments: { __type: "[CheckoutAdjustmentInput!]" },
    updatedAt: { __type: "AWSDateTime!" },
  },
  CheckoutCreateOfflineUserInput: {
    email: { __type: "String" },
    id: { __type: "ID" },
    name: { __type: "String" },
  },
  CheckoutFilterInput: { status: { __type: "FilterInput" } },
  CheckoutInput: {
    billingAddress: { __type: "AddressInput" },
    cashier: { __type: "String" },
    customerId: { __type: "ID" },
    deviceId: { __type: "String" },
    internalMetadata: { __type: "[MetadataInput!]" },
    internalRemark: { __type: "String" },
    internalRemarkMedias: { __type: "[MediaInput!]" },
    isInSitu: { __type: "Boolean" },
    memberPoints: { __type: "Int" },
    metadata: { __type: "[MetadataInput!]" },
    pickUpAddressId: { __type: "ID" },
    referenceNo: { __type: "String" },
    remark: { __type: "String" },
    remarkMedias: { __type: "[MediaInput!]" },
    salespersonId: { __type: "ID" },
    shippingAddress: { __type: "AddressInput" },
    shippingProviderId: { __type: "ID" },
    shopId: { __type: "ID!" },
    staffId: { __type: "ID" },
    tableId: { __type: "String" },
    totalAdjustments: { __type: "[CheckoutAdjustmentInput!]" },
  },
  CheckoutItem: {
    __typename: { __type: "String!" },
    addOnProduct: { __type: "ShopAddOnProduct" },
    bundleProduct: { __type: "CheckoutBundleProduct" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    deletedAt: { __type: "AWSDateTime" },
    description: { __type: "String" },
    id: { __type: "ID!" },
    media: { __type: "Media" },
    metadata: { __type: "[Metadata!]" },
    metadataFields: { __type: "[CompanyMemberMetadataField!]" },
    productVariation: { __type: "ProductVariation" },
    quantity: { __type: "Int!" },
    remark: { __type: "String" },
    serviceBundle: { __type: "CheckoutServiceBundle" },
    unitPrice: { __type: "Float!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
  },
  CheckoutItemConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[CheckoutItem!]!" },
    totalCount: { __type: "Int!" },
  },
  CheckoutItemCreateInput: {
    bundleProduct: { __type: "CheckoutBundleProductInput" },
    description: { __type: "String" },
    fnbCheckoutItemId: { __type: "ID" },
    metadata: { __type: "[MetadataInput!]" },
    modifiers: { __type: "[CheckoutItemModifierInput!]" },
    productVariationId: { __type: "ID" },
    quantity: { __type: "Int!" },
    remark: { __type: "String" },
    serviceBundle: { __type: "CheckoutServiceBundleInput" },
    unitPrice: { __type: "Float" },
  },
  CheckoutItemInput: {
    bundleProduct: { __type: "CheckoutBundleProductInput" },
    description: { __type: "String" },
    id: { __type: "ID" },
    metadata: { __type: "[MetadataInput!]" },
    modifiers: { __type: "[CheckoutItemModifierInput!]" },
    productVariationId: { __type: "ID" },
    quantity: { __type: "Int" },
    remark: { __type: "String" },
    serviceBundle: { __type: "CheckoutServiceBundleInput" },
    unitPrice: { __type: "Float" },
  },
  CheckoutItemModifierInput: {
    name: { __type: "String!" },
    option: { __type: "String!" },
  },
  CheckoutPayInput: {
    charge: { __type: "Float" },
    credentialId: { __type: "ID" },
    invoiceId: { __type: "ID!" },
    isSavingPaymentSource: { __type: "Boolean" },
    metadata: { __type: "[MetadataInput!]" },
    paymentDetail: { __type: "AWSJSON" },
    provider: { __type: "PaymentProvider!" },
    token: { __type: "String" },
  },
  CheckoutPayment: {
    __typename: { __type: "String!" },
    charge: { __type: "Float" },
    credentialId: { __type: "ID" },
    invoiceId: { __type: "ID!" },
    provider: { __type: "PaymentProvider!" },
    token: { __type: "String" },
  },
  CheckoutPaymentInput: {
    charge: { __type: "Float" },
    credentialId: { __type: "ID" },
    failureUrl: { __type: "String" },
    paymentMethodId: { __type: "ID" },
    provider: { __type: "PaymentProvider!" },
    successUrl: { __type: "String" },
    token: { __type: "String" },
  },
  CheckoutRoundingPolicy: {
    __typename: { __type: "String!" },
    maximumFractionDigits: { __type: "Int!" },
    strategy: { __type: "CheckoutRoundingStrategy!" },
  },
  CheckoutRoundingPolicyInput: {
    maximumFractionDigits: { __type: "Int!" },
    strategy: { __type: "CheckoutRoundingStrategy!" },
  },
  CheckoutService: {
    __typename: { __type: "String!" },
    appointment: { __type: "ShopAppointment" },
    contactAddress: { __type: "Address" },
    id: { __type: "ID!" },
    location: { __type: "ShopServiceLocation" },
    service: { __type: "ShopService!" },
    slots: { __type: "[ServiceSlot!]" },
  },
  CheckoutServiceBundle: {
    __typename: { __type: "String!" },
    serviceBundle: { __type: "ShopServiceBundle!" },
    services: { __type: "[CheckoutService!]!" },
  },
  CheckoutServiceBundleInput: {
    id: { __type: "ID!" },
    modifiers: { __type: "[CheckoutItemModifierInput!]" },
    services: { __type: "[CheckoutServiceInput!]!" },
    sku: { __type: "String" },
  },
  CheckoutServiceInput: {
    contactAddress: { __type: "AddressInput" },
    id: { __type: "ID!" },
    outboundSkus: { __type: "[String!]" },
    serviceLocationId: { __type: "ID" },
    startedAt: { __type: "AWSDateTime" },
    startedThru: { __type: "AWSDateTime" },
  },
  CollectionConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[ShopCollection!]!" },
    totalCount: { __type: "Int!" },
  },
  CollectionFilterInput: {
    active: { __type: "FilterInput" },
    code: { __type: "FilterInput" },
    collectionPaths: { __type: "FilterInput" },
    createdAt: { __type: "FilterInput" },
    id: { __type: "FilterInput" },
    name: { __type: "FilterInput" },
    parentId: { __type: "FilterInput" },
    publishAt: { __type: "FilterInput" },
    publishThru: { __type: "FilterInput" },
    rewriteUri: { __type: "FilterInput" },
    sortIndex: { __type: "FilterInput" },
    updatedAt: { __type: "FilterInput" },
  },
  CollectionInput: {
    active: { __type: "Boolean" },
    code: { __type: "String" },
    dailyAvailability: { __type: "DailyAvailabilityInput" },
    description: { __type: "String" },
    media: { __type: "MediaInput" },
    metaDescription: { __type: "String" },
    metaKeywords: { __type: "String" },
    metaTitle: { __type: "String" },
    name: { __type: "String!" },
    parentId: { __type: "ID" },
    productIds: { __type: "[ID!]" },
    products: { __type: "[CollectionProductInput!]" },
    publishAt: { __type: "AWSDateTime" },
    publishThru: { __type: "AWSDateTime" },
    rewriteUri: { __type: "String" },
    shopId: { __type: "ID!" },
    sortIndex: { __type: "Int" },
    thumbnail: { __type: "AWSURL" },
  },
  CollectionParentSetInput: {
    id: { __type: "ID!" },
    parentId: { __type: "ID" },
    sortIndex: { __type: "Int" },
  },
  CollectionProductInput: {
    id: { __type: "ID!" },
    sortIndex: { __type: "Int" },
  },
  CollectionSales: {
    __typename: { __type: "String!" },
    amount: { __type: "Float!" },
    avgCount: { __type: "Float!" },
    avgPrice: { __type: "Float!" },
    code: { __type: "String" },
    conversionRate: { __type: "Float!" },
    count: { __type: "Int!" },
    countries: { __type: "[ChartData!]!" },
    hitRate: { __type: "Int!" },
    id: { __type: "ID!" },
    memberAmount: { __type: "Float!" },
    memberLevelAmounts: { __type: "[ChartData!]!" },
    memberLevels: { __type: "[ChartData!]!" },
    name: { __type: "String!" },
    nonMemberAmount: { __type: "Float!" },
    orderCount: { __type: "Int!" },
    pageView: { __type: "Int!" },
    salesPoints: { __type: "[ChartData!]!" },
    salesRecords: {
      __type: "ProductSalesRecordConnection!",
      __args: {
        cursor: "Int",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
      },
    },
    salesTrends: { __type: "[LineChartData!]!" },
    shopId: { __type: "ID!" },
  },
  CollectionSalesConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[CollectionSales!]!" },
    totalCount: { __type: "Int!" },
  },
  Company: {
    __typename: { __type: "String!" },
    address: { __type: "Address" },
    appointments: {
      __type: "ShopAppointmentConnection!",
      __args: {
        cursor: "Int",
        filter: "ShopAppointmentFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    attendances: {
      __type: "AttendanceConnection!",
      __args: {
        cursor: "Int",
        filter: "AttendanceFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    cashVouchers: {
      __type: "CompanyCashVoucherConnection!",
      __args: {
        cursor: "Int",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
      },
    },
    channels: {
      __type: "ChannelConnection!",
      __args: {
        cursor: "Int",
        filter: "ChannelFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    coupons: {
      __type: "CompanyCouponConnection!",
      __args: {
        cursor: "Int",
        filter: "CompanyCouponFilterInput",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
      },
    },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    customers: {
      __type: "CustomerConnection!",
      __args: {
        cursor: "Int",
        filter: "CustomerFilterInput",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
      },
    },
    defaultMemberHashtagSchedules: { __type: "[CompanyHashtagSchedule!]" },
    deliveryNotes: {
      __type: "DeliveryNoteConnection!",
      __args: {
        cursor: "Int",
        filter: "DeliveryNotesFilterInput",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
      },
    },
    description: { __type: "String" },
    devices: {
      __type: "ShopDeviceConnection!",
      __args: {
        cursor: "Int",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
      },
    },
    discounts: {
      __type: "CompanyDiscountConnection!",
      __args: {
        cursor: "Int",
        filter: "DiscountFilterInput",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
      },
    },
    honorProductSerials: {
      __type: "ProductConnection!",
      __args: {
        cursor: "Int",
        filter: "HonorProductSerialFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    id: { __type: "ID!" },
    industry: { __type: "String" },
    ingredients: {
      __type: "IngredientConnection!",
      __args: { cursor: "Int", limits: "Int", sortBy: "[SorterInput!]" },
    },
    memberPointResetDates: { __type: "[String!]" },
    memberPointResetGracefulPeriod: { __type: "String" },
    memberTiers: {
      __type: "CompanyMemberTierConnection!",
      __args: {
        cursor: "Int",
        filter: "CompanyMemberTierFilterInput",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
      },
    },
    name: { __type: "String!" },
    orders: {
      __type: "OrderConnection!",
      __args: {
        cursor: "Int",
        filter: "OrderFilterInput",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
      },
    },
    paymentSources: {
      __type: "PaymentSourceConnection!",
      __args: { cursor: "Int", limits: "Int" },
    },
    receivePurchases: {
      __type: "CompanyReceivePurchaseConnection!",
      __args: {
        cursor: "Int",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
      },
    },
    report: { __type: "CompanyReport!" },
    returnNotes: {
      __type: "ShopReturnNoteConnection!",
      __args: {
        cursor: "Int",
        filter: "ReturnNoteFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    serviceBundles: {
      __type: "ShopServiceBundleConnection!",
      __args: {
        cursor: "Int",
        filter: "ServiceBundleFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    serviceLocations: {
      __type: "ShopServiceLocationConnection!",
      __args: {
        cursor: "Int",
        filter: "ServiceLocationFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    services: {
      __type: "ShopServiceConnection!",
      __args: {
        cursor: "Int",
        filter: "ServiceFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    shops: {
      __type: "ShopConnection!",
      __args: { cursor: "Int", limits: "Int", sortBy: "[SorterInput!]" },
    },
    sitemaps: {
      __type: "ShopSitemapConnection!",
      __args: {
        cursor: "Int",
        filter: "ShopSitemapFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    staffs: {
      __type: "CompanyStaffConnection!",
      __args: {
        cursor: "Int",
        filter: "CompanyStaffFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    stockAdjustments: {
      __type: "CompanyStockAdjustmentConnection!",
      __args: {
        cursor: "Int",
        filter: "StockAdjustmentFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    stockTransfers: {
      __type: "CompanyStockTransferConnection!",
      __args: {
        cursor: "Int",
        filter: "StockTransferFilterInput",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
      },
    },
    stocktakes: {
      __type: "CompanyStocktakeConnection!",
      __args: {
        cursor: "Int",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
      },
    },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
    users: {
      __type: "UserConnection!",
      __args: {
        cursor: "Int",
        filter: "UserFilterInput",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
      },
    },
    warehouses: {
      __type: "WarehouseConnection!",
      __args: {
        cursor: "Int",
        filter: "WarehouseFilterInput",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
      },
    },
    webhooks: { __type: "[Webhook!]!" },
  },
  CompanyCashVoucher: {
    __typename: { __type: "String!" },
    active: { __type: "Boolean" },
    codes: {
      __type: "CompanyCashVoucherCodeConnection!",
      __args: { cursor: "Int", limits: "Int" },
    },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    description: { __type: "String!" },
    id: { __type: "ID!" },
    name: { __type: "String!" },
    numberOfVoucher: { __type: "Int!" },
    singleVoucherValue: { __type: "Float!" },
    thumbnail: { __type: "Media" },
    unitPrice: { __type: "Float!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
    validFor: { __type: "String" },
  },
  CompanyCashVoucherCode: {
    __typename: { __type: "String!" },
    cashVoucher: { __type: "CompanyCashVoucher!" },
    code: { __type: "String!" },
    id: { __type: "ID!" },
    status: { __type: "CashVoucherCodeStatus!" },
    validFor: { __type: "String" },
  },
  CompanyCashVoucherCodeConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[CompanyCashVoucherCode!]!" },
    totalCount: { __type: "Int!" },
  },
  CompanyCashVoucherConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[CompanyCashVoucher!]!" },
    totalCount: { __type: "Int!" },
  },
  CompanyConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[Company!]!" },
    totalCount: { __type: "Int!" },
  },
  CompanyCoupon: {
    __typename: { __type: "String!" },
    actions: { __type: "[CouponAction!]" },
    active: { __type: "Boolean!" },
    applyCode: { __type: "CouponApplyCode" },
    company: { __type: "Company!" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    description: { __type: "String" },
    discardSubsequent: { __type: "Boolean!" },
    display: { __type: "Boolean" },
    enabled: { __type: "Boolean!" },
    excludedCouponIds: { __type: "[ID!]" },
    excludedCoupons: {
      __type: "CompanyCouponConnection!",
      __args: { cursor: "Int", limits: "Int", sortBy: "[SorterInput!]" },
    },
    excludedDiscountIds: { __type: "[ID!]" },
    excludedDiscounts: {
      __type: "CompanyDiscountConnection!",
      __args: { cursor: "Int", limits: "Int", sortBy: "[SorterInput!]" },
    },
    excludedProductIds: { __type: "[ID!]" },
    handle: { __type: "String!" },
    id: { __type: "ID!" },
    isRedeemable: { __type: "Boolean!" },
    media: { __type: "Media" },
    memberLimit: { __type: "Int" },
    memberPointCost: { __type: "Int!" },
    membersOnly: { __type: "Boolean!" },
    metadata: { __type: "[Metadata!]" },
    name: { __type: "String!" },
    orders: {
      __type: "OrderConnection!",
      __args: { cursor: "Int", limits: "Int", sortBy: "[SorterInput!]" },
    },
    products: { __type: "[ShopProduct!]!" },
    publishAt: { __type: "AWSDateTime!" },
    publishLimit: { __type: "Int" },
    publishThru: { __type: "AWSDateTime" },
    remark: { __type: "String" },
    repeat: { __type: "Int" },
    resolveCode: { __type: "String" },
    shops: { __type: "[CompanyShop!]!" },
    sortIndex: { __type: "Int!" },
    thumbnail: { __type: "AWSURL" },
    triggers: { __type: "[CouponTrigger!]" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
    usage: { __type: "Int!", __args: { customerId: "String" } },
    userCoupons: {
      __type: "UserCouponConnection",
      __args: {
        cursor: "Int",
        filter: "UserCouponFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    validAt: { __type: "AWSDateTime!" },
    validForPeriod: { __type: "String" },
    validThru: { __type: "AWSDateTime" },
  },
  CompanyCouponConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[CompanyCoupon!]!" },
    totalCount: { __type: "Int!" },
  },
  CompanyCouponFilterInput: {
    active: { __type: "FilterInput" },
    createdAt: { __type: "FilterInput" },
    discardSubsequent: { __type: "FilterInput" },
    display: { __type: "FilterInput" },
    enabled: { __type: "FilterInput" },
    handle: { __type: "FilterInput" },
    id: { __type: "FilterInput" },
    isRedeemable: { __type: "FilterInput" },
    memberPointCost: { __type: "FilterInput" },
    membersOnly: { __type: "FilterInput" },
    name: { __type: "FilterInput" },
    publishAt: { __type: "FilterInput" },
    publishLimit: { __type: "FilterInput" },
    publishThru: { __type: "FilterInput" },
    remark: { __type: "FilterInput" },
    resolveCode: { __type: "FilterInput" },
    updatedAt: { __type: "FilterInput" },
    validAt: { __type: "FilterInput" },
    validForPeriod: { __type: "FilterInput" },
    validThru: { __type: "FilterInput" },
  },
  CompanyDiscount: {
    __typename: { __type: "String!" },
    actions: { __type: "[DiscountAction!]" },
    active: { __type: "Boolean!" },
    company: { __type: "Company!" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    description: { __type: "String" },
    discardSubsequent: { __type: "Boolean!" },
    excludedCouponIds: { __type: "[ID!]" },
    excludedCoupons: {
      __type: "CompanyCouponConnection!",
      __args: { cursor: "Int", limits: "Int", sortBy: "[SorterInput!]" },
    },
    excludedDiscountIds: { __type: "[String!]" },
    excludedDiscounts: {
      __type: "CompanyDiscountConnection!",
      __args: { cursor: "Int", limits: "Int", sortBy: "[SorterInput!]" },
    },
    excludedProductIds: { __type: "[ID!]" },
    id: { __type: "ID!" },
    membersOnly: { __type: "Boolean!" },
    metadata: { __type: "[Metadata!]" },
    name: { __type: "String!" },
    publishAt: { __type: "AWSDateTime!" },
    publishThru: { __type: "AWSDateTime!" },
    remark: { __type: "String" },
    repeat: { __type: "Int!" },
    sortIndex: { __type: "Int!" },
    triggers: { __type: "[DiscountTrigger!]" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
  },
  CompanyDiscountConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[CompanyDiscount!]!" },
    totalCount: { __type: "Int!" },
  },
  CompanyHashtagSchedule: {
    __typename: { __type: "String!" },
    hashtags: { __type: "[String!]!" },
    validAt: { __type: "AWSDateTime!" },
    validThru: { __type: "AWSDateTime" },
  },
  CompanyHashtagScheduleInput: {
    hashtags: { __type: "[String!]!" },
    validAt: { __type: "AWSDateTime!" },
    validThru: { __type: "AWSDateTime" },
  },
  CompanyMemberMetadataField: {
    __typename: { __type: "String!" },
    key: { __type: "String!" },
    metadata: { __type: "[Metadata!]" },
    name: { __type: "String!" },
    required: { __type: "Boolean!" },
    type: { __type: "CompanyMemberMetadataFieldType!" },
    unique: { __type: "Boolean" },
    values: { __type: "[String!]!" },
    visible: { __type: "Boolean" },
  },
  CompanyMemberMetadataFieldInput: {
    key: { __type: "String!" },
    metadata: { __type: "[MetadataInput!]" },
    name: { __type: "String!" },
    required: { __type: "Boolean!" },
    type: { __type: "CompanyMemberMetadataFieldType!" },
    unique: { __type: "Boolean" },
    values: { __type: "[String!]!" },
    visible: { __type: "Boolean" },
  },
  CompanyMemberTier: {
    __typename: { __type: "String!" },
    active: { __type: "Boolean" },
    company: { __type: "Company!" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    customers: {
      __type: "CustomerConnection!",
      __args: { cursor: "Int", limits: "Int", sortBy: "[SorterInput!]" },
    },
    expiryType: { __type: "ExpiryDateTypes!" },
    extensionAmount: { __type: "Int!" },
    extensionMonths: { __type: "Int!" },
    extensionType: { __type: "UpgradeConditionType!" },
    id: { __type: "ID!" },
    isDefault: { __type: "Boolean" },
    level: { __type: "Int!" },
    memberPointActive: { __type: "Boolean!" },
    memberPointPerUnit: { __type: "Int!" },
    memberPointUnitPrice: { __type: "Int!" },
    name: { __type: "String!" },
    nextExtendedAt: { __type: "AWSDateTime" },
    startedAt: { __type: "AWSDateTime" },
    startedThru: { __type: "AWSDateTime" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
    upgradeConditionAmount: { __type: "Int!" },
    upgradeConditionMonths: { __type: "Int!" },
    upgradeConditionType: { __type: "UpgradeConditionType!" },
    upgradeConditions: { __type: "[MemberTierUpgradeCondition!]" },
    userId: { __type: "String" },
    validMonths: { __type: "Int!" },
  },
  CompanyMemberTierConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[CompanyMemberTier!]!" },
    totalCount: { __type: "Int!" },
  },
  CompanyMemberTierFilterInput: {
    active: { __type: "FilterInput" },
    createdAt: { __type: "FilterInput" },
    expiryType: { __type: "FilterInput" },
    extensionAmount: { __type: "FilterInput" },
    extensionMonths: { __type: "FilterInput" },
    extensionType: { __type: "FilterInput" },
    id: { __type: "FilterInput" },
    isDefault: { __type: "FilterInput" },
    level: { __type: "FilterInput" },
    memberPointActive: { __type: "FilterInput" },
    memberPointPerUnit: { __type: "FilterInput" },
    memberPointUnitPrice: { __type: "FilterInput" },
    name: { __type: "FilterInput" },
    updatedAt: { __type: "FilterInput" },
    upgradeConditionAmount: { __type: "FilterInput" },
    upgradeConditionMonths: { __type: "FilterInput" },
    upgradeConditionType: { __type: "FilterInput" },
    validMonths: { __type: "FilterInput" },
  },
  CompanyMemberTierInput: {
    companyId: { __type: "ID!" },
    expiryType: { __type: "ExpiryDateTypes" },
    extensionAmount: { __type: "Int" },
    extensionMonths: { __type: "Int" },
    extensionType: { __type: "UpgradeConditionType" },
    isDefault: { __type: "Boolean" },
    level: { __type: "Int!" },
    memberPointActive: { __type: "Boolean" },
    memberPointPerUnit: { __type: "Int" },
    memberPointUnitPrice: { __type: "Int" },
    name: { __type: "String!" },
    upgradeConditionAmount: { __type: "Int" },
    upgradeConditionMonths: { __type: "Int" },
    upgradeConditionType: { __type: "UpgradeConditionType" },
    upgradeConditions: { __type: "[MemberTierUpgradeConditionInput!]" },
    validMonths: { __type: "Int" },
  },
  CompanyReceivePurchase: {
    __typename: { __type: "String!" },
    active: { __type: "Boolean" },
    completedAt: { __type: "AWSDateTime" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    deviceId: { __type: "ID" },
    id: { __type: "ID!" },
    items: {
      __type: "CompanyReceivePurchaseItemConnection!",
      __args: {
        cursor: "Int",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
      },
    },
    metadata: { __type: "[Metadata!]" },
    referenceNo: { __type: "String!" },
    remark: { __type: "String" },
    salespersonId: { __type: "ID" },
    staff: { __type: "CompanyStaff" },
    staffId: { __type: "ID" },
    status: { __type: "CompanyReceivePurchaseStatus!" },
    totalQuantity: { __type: "Int!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
    warehouse: { __type: "CompanyWarehouse!" },
  },
  CompanyReceivePurchaseConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[CompanyReceivePurchase!]!" },
    totalCount: { __type: "Int!" },
  },
  CompanyReceivePurchaseItem: {
    __typename: { __type: "String!" },
    cost: { __type: "Float!" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    id: { __type: "ID!" },
    productVariation: { __type: "ProductVariation" },
    quantity: { __type: "Int!" },
    sku: { __type: "String!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
  },
  CompanyReceivePurchaseItemConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[CompanyReceivePurchaseItem!]!" },
    totalCount: { __type: "Int!" },
  },
  CompanyReport: {
    __typename: { __type: "String!" },
    collectionSales: {
      __type: "CollectionSales!",
      __args: {
        code: "String",
        id: "ID",
        shopId: "ID",
        startedAt: "AWSDateTime!",
        startedThru: "AWSDateTime!",
      },
    },
    couponSales: {
      __type: "CouponSales!",
      __args: {
        id: "ID!",
        startedAt: "AWSDateTime!",
        startedThru: "AWSDateTime!",
      },
    },
    discountSales: {
      __type: "DiscountSales!",
      __args: {
        id: "ID!",
        startedAt: "AWSDateTime!",
        startedThru: "AWSDateTime!",
      },
    },
    inventory: {
      __type: "InventoryReportDataConnection!",
      __args: {
        cursor: "Int",
        filter: "InventoryReportDataFilterInput",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
        warehouseIds: "[ID!]!",
      },
    },
    memberTierSales: {
      __type: "MemberTierSales!",
      __args: {
        id: "ID!",
        startedAt: "AWSDateTime!",
        startedThru: "AWSDateTime!",
      },
    },
    productSales: {
      __type: "ProductSales!",
      __args: {
        shopId: "ID",
        sku: "String!",
        startedAt: "AWSDateTime!",
        startedThru: "AWSDateTime!",
      },
    },
    promotionCodeSales: {
      __type: "CouponSales!",
      __args: {
        id: "ID!",
        startedAt: "AWSDateTime!",
        startedThru: "AWSDateTime!",
      },
    },
    salespersonSales: {
      __type: "SalespersonSales!",
      __args: {
        id: "ID!",
        startedAt: "AWSDateTime!",
        startedThru: "AWSDateTime!",
      },
    },
    topCollectionSales: {
      __type: "CollectionSalesConnection!",
      __args: {
        cursor: "Int",
        limits: "Int",
        query: "String",
        shopId: "ID",
        sortBy: "[SorterInput!]",
        startedAt: "AWSDateTime!",
        startedThru: "AWSDateTime!",
      },
    },
    topCouponSales: {
      __type: "CouponSalesConnection!",
      __args: {
        cursor: "Int",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
        startedAt: "AWSDateTime!",
        startedThru: "AWSDateTime!",
      },
    },
    topDiscountSales: {
      __type: "DiscountSalesConnection!",
      __args: {
        cursor: "Int",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
        startedAt: "AWSDateTime!",
        startedThru: "AWSDateTime!",
      },
    },
    topMemberTierSales: {
      __type: "MemberTierSalesConnection!",
      __args: {
        cursor: "Int",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
        startedAt: "AWSDateTime!",
        startedThru: "AWSDateTime!",
      },
    },
    topProductSales: {
      __type: "ProductSalesConnection!",
      __args: {
        cursor: "Int",
        limits: "Int",
        query: "String",
        shopId: "ID",
        sortBy: "[SorterInput!]",
        startedAt: "AWSDateTime!",
        startedThru: "AWSDateTime!",
      },
    },
    topPromotionCodeSales: {
      __type: "CouponSalesConnection!",
      __args: {
        cursor: "Int",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
        startedAt: "AWSDateTime!",
        startedThru: "AWSDateTime!",
      },
    },
    topSalespersonSales: {
      __type: "SalespersonSalesConnection!",
      __args: {
        cursor: "Int",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
        startedAt: "AWSDateTime!",
        startedThru: "AWSDateTime!",
      },
    },
    topShopSales: {
      __type: "ShopSalesConnection!",
      __args: {
        cursor: "Int",
        limits: "Int",
        query: "String",
        shopId: "ID",
        sortBy: "[SorterInput!]",
        startedAt: "AWSDateTime!",
        startedThru: "AWSDateTime!",
      },
    },
    topVariationSales: {
      __type: "VariationSalesConnection!",
      __args: {
        cursor: "Int",
        limits: "Int",
        query: "String",
        shopId: "ID",
        sortBy: "[SorterInput!]",
        startedAt: "AWSDateTime!",
        startedThru: "AWSDateTime!",
      },
    },
    totalCollectionSales: {
      __type: "TotalCollectionSales!",
      __args: {
        shopId: "ID",
        startedAt: "AWSDateTime!",
        startedThru: "AWSDateTime!",
      },
    },
    totalCouponSales: {
      __type: "TotalCouponSales!",
      __args: { startedAt: "AWSDateTime!", startedThru: "AWSDateTime!" },
    },
    totalDiscountSales: {
      __type: "TotalDiscountSales!",
      __args: { startedAt: "AWSDateTime!", startedThru: "AWSDateTime!" },
    },
    totalMemberTierSales: {
      __type: "TotalMemberTierSales!",
      __args: { startedAt: "AWSDateTime!", startedThru: "AWSDateTime!" },
    },
    totalProductSales: {
      __type: "TotalProductSales!",
      __args: {
        shopId: "ID",
        startedAt: "AWSDateTime!",
        startedThru: "AWSDateTime!",
      },
    },
    totalPromotionCodeSales: {
      __type: "TotalCouponSales!",
      __args: { startedAt: "AWSDateTime!", startedThru: "AWSDateTime!" },
    },
    totalSalespersonSales: {
      __type: "TotalSalespersonSales!",
      __args: { startedAt: "AWSDateTime!", startedThru: "AWSDateTime!" },
    },
    totalShopSales: {
      __type: "TotalShopSales!",
      __args: {
        shopId: "ID",
        startedAt: "AWSDateTime!",
        startedThru: "AWSDateTime!",
      },
    },
    totalVariationSales: {
      __type: "TotalVariationSales!",
      __args: {
        shopId: "ID",
        startedAt: "AWSDateTime!",
        startedThru: "AWSDateTime!",
      },
    },
    turnover: {
      __type: "Float!",
      __args: { startedAt: "AWSDateTime!", startedThru: "AWSDateTime!" },
    },
    variationSales: {
      __type: "VariationSales!",
      __args: {
        shopId: "ID",
        sku: "String!",
        startedAt: "AWSDateTime!",
        startedThru: "AWSDateTime!",
      },
    },
    volume: {
      __type: "Int!",
      __args: { startedAt: "AWSDateTime!", startedThru: "AWSDateTime!" },
    },
  },
  CompanyShop: {
    __typename: { __type: "String!" },
    active: { __type: "Boolean!" },
    addOnProducts: {
      __type: "ShopAddOnProductConnection!",
      __args: {
        cursor: "Int",
        filter: "AddOnProductFilterInput",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
      },
    },
    address: { __type: "ShopAddress" },
    addresses: { __type: "[ShopAddress!]" },
    agent: { __type: "User" },
    allProducts: {
      __type: "ProductConnection!",
      __args: {
        cursor: "String",
        filter: "ProductFilterInput",
        limits: "Int",
        query: "String",
      },
    },
    allowGuestCheckout: { __type: "Boolean!" },
    allowMemberPointCheckout: { __type: "Boolean" },
    analysisTools: {
      __type: "ShopAnalysisToolConnection!",
      __args: {
        cursor: "Int",
        filter: "AnalysisToolFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    appointments: {
      __type: "ShopAppointmentConnection!",
      __args: {
        cursor: "Int",
        filter: "ShopAppointmentFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    attendances: {
      __type: "AttendanceConnection!",
      __args: {
        cursor: "Int",
        filter: "AttendanceFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    attributes: {
      __type: "ShopAttributeConnection",
      __args: {
        cursor: "Int",
        filter: "ShopAttributeFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    autoConfirm: { __type: "Boolean" },
    autoConfirmRegistration: { __type: "Boolean" },
    availableWarehouses: {
      __type: "WarehouseConnection!",
      __args: {
        cursor: "Int",
        filter: "WarehouseFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    branchType: { __type: "ShopBranchType" },
    bundleProducts: {
      __type: "ShopBundleProductConnection!",
      __args: {
        cursor: "Int",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
      },
    },
    campaigns: {
      __type: "CampaignConnection!",
      __args: {
        cursor: "Int",
        filter: "CampaignFilterInput",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
      },
    },
    cashFlows: {
      __type: "ShopCashFlowConnection!",
      __args: {
        cursor: "Int",
        filter: "CashFlowFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    channelMessages: {
      __type: "ChannelMessageConnection!",
      __args: {
        cursor: "Int",
        filter: "ChannelMessageFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    channels: {
      __type: "ChannelConnection!",
      __args: {
        cursor: "Int",
        filter: "ChannelFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    checkoutRounding: { __type: "CheckoutRoundingPolicy" },
    checkouts: {
      __type: "ShopCheckoutConnection!",
      __args: {
        cursor: "Int",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
      },
    },
    collections: {
      __type: "CollectionConnection!",
      __args: {
        cursor: "Int",
        filter: "CollectionFilterInput",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
      },
    },
    company: { __type: "Company!" },
    companyVerifyData: { __type: "AWSJSON" },
    contactEmail: { __type: "String" },
    contactEmails: {
      __type: "ShopContactEmailConnection",
      __args: {
        cursor: "Int",
        filter: "CompanyShopContactEmailsFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    credentials: {
      __type: "[ShopCredential!]!",
      __args: { filter: "CredentialFilter", filterV2: "CredentialFilterInput" },
    },
    creditNotes: {
      __type: "CreditNoteConnection!",
      __args: {
        cursor: "Int",
        filter: "CreditNoteFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    currency: { __type: "Currency" },
    currentCashInDevice: {
      __type: "Float!",
      __args: { deviceId: "String!", filter: "CashFlowFilterInput" },
    },
    customDomain: { __type: "String" },
    customers: {
      __type: "CustomerConnection!",
      __args: {
        cursor: "Int",
        filter: "CustomerFilterInput",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
      },
    },
    deliveryNoteAutoComplete: { __type: "Duration" },
    deliveryNotes: {
      __type: "DeliveryNoteConnection!",
      __args: {
        cursor: "Int",
        filter: "DeliveryNotesFilterInput",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
      },
    },
    devices: {
      __type: "ShopDeviceConnection!",
      __args: {
        cursor: "Int",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
      },
    },
    emailTemplates: {
      __type: "ShopEmailTemplateConnection!",
      __args: {
        cursor: "Int",
        filter: "ShopEmailTemplateFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    expiredAt: { __type: "AWSDateTime" },
    forms: {
      __type: "ShopFormConnection!",
      __args: {
        cursor: "Int",
        filter: "ShopFormFilterInput",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
      },
    },
    hasRegistrationEmail: { __type: "Boolean" },
    honorProductSerials: {
      __type: "ProductConnection!",
      __args: {
        cursor: "Int",
        filter: "HonorProductSerialFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    hostname: { __type: "String" },
    ico: { __type: "String" },
    icoMedia: { __type: "Media" },
    id: { __type: "ID!" },
    invoices: {
      __type: "InvoiceConnection!",
      __args: {
        cursor: "Int",
        filter: "InvoiceFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    isContactEmailVerified: { __type: "Boolean" },
    locale: { __type: "String!" },
    logo: { __type: "String" },
    logoMedia: { __type: "Media" },
    lowStock: { __type: "ReminderSetting" },
    marquees: {
      __type: "ShopMarqueeConnection",
      __args: {
        cursor: "Int",
        filter: "ShopMarqueeFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    maxDeviceCount: { __type: "Int" },
    medias: { __type: "[Media!]" },
    memberMetadataFields: { __type: "[CompanyMemberMetadataField!]" },
    memberPointActive: { __type: "Boolean!" },
    memberPointClearanceGracefulPeriod: { __type: "String" },
    memberPointGracefulPeriod: { __type: "String" },
    memberPointReleaseDelay: { __type: "Int!" },
    memberPointReleasePolicy: { __type: "MemberPointReleasePolicy!" },
    memberPointResetDates: { __type: "[String!]" },
    memberPointResetMonth: { __type: "Int" },
    memberPointUseActive: { __type: "Boolean!" },
    memberPointUsePerUnit: { __type: "Int!" },
    memberPointUseUnitPoint: { __type: "Int!" },
    meta: { __type: "[Metadata]" },
    metaDescription: { __type: "String" },
    metaKeywords: { __type: "String" },
    metaTitle: { __type: "String" },
    metadata: { __type: "[Metadata!]" },
    name: { __type: "String!" },
    nameEN: { __type: "String" },
    navigationTemplates: {
      __type: "ShopNavigationTemplateConnection!",
      __args: {
        cursor: "Int",
        filter: "NavigationTemplateFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    node: { __type: "Node", __args: { handle: "String", id: "ID" } },
    nodes: { __type: "[Node!]", __args: { handle: "String!" } },
    orderExpiry: { __type: "Duration" },
    orderExpiryDay: { __type: "Int" },
    orders: {
      __type: "OrderConnection!",
      __args: {
        cursor: "Int",
        filter: "OrderFilterInput",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
      },
    },
    overStock: { __type: "ReminderSetting" },
    pages: {
      __type: "PageConnection!",
      __args: {
        cursor: "Int",
        filter: "PageFilterInput",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
      },
    },
    paymentMethods: {
      __type: "PaymentMethodConnection!",
      __args: {
        cursor: "Int",
        filter: "PaymentMethodFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    popups: {
      __type: "ShopPopupConnection",
      __args: {
        cursor: "Int",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
      },
    },
    productModifiers: {
      __type: "ShopProductModifierConnection!",
      __args: {
        cursor: "Int",
        filter: "ShopProductModifierFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    productUnions: {
      __type: "ProductUnionConnection!",
      __args: {
        cursor: "Int",
        filter: "ProductUnionFilterInput",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
      },
    },
    products: {
      __type: "ProductConnection!",
      __args: {
        cursor: "Int",
        filter: "ProductFilterInput",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
      },
    },
    rasterLogo: { __type: "String" },
    rasterLogoMedia: { __type: "Media" },
    receiptTemplates: {
      __type: "ShopReceiptTemplateConnection!",
      __args: {
        cursor: "Int",
        filter: "ShopReceiptTemplateFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    referenceNoLength: { __type: "Int" },
    referenceNoPrefix: { __type: "String" },
    registrationMessages: { __type: "[String!]" },
    remarks: { __type: "String" },
    report: { __type: "ShopReport!", __args: { filter: "SalesFilterInput" } },
    reservationWarehouse: { __type: "CompanyWarehouse!" },
    returnNotes: {
      __type: "ShopReturnNoteConnection!",
      __args: {
        cursor: "Int",
        filter: "ReturnNoteFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    returnWarehouse: { __type: "CompanyWarehouse!" },
    serviceBundles: {
      __type: "ShopServiceBundleConnection!",
      __args: {
        cursor: "Int",
        filter: "ServiceBundleFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    serviceLocations: {
      __type: "ShopServiceLocationConnection!",
      __args: {
        cursor: "Int",
        filter: "ServiceLocationFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    services: {
      __type: "ShopServiceConnection!",
      __args: {
        cursor: "Int",
        filter: "ServiceFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    shippingZones: {
      __type: "ShopShippingZoneConnection!",
      __args: {
        cursor: "Int",
        filter: "ShopShippingZoneFilterInput",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
      },
    },
    shopReferenceNoFormats: {
      __type: "ShopReferenceNoFormatConnection!",
      __args: {
        cursor: "Int",
        filter: "ShopReferenceNoFormatFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    sitemaps: {
      __type: "ShopSitemapConnection!",
      __args: {
        cursor: "Int",
        filter: "ShopSitemapFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    staffs: {
      __type: "CompanyStaffConnection!",
      __args: {
        cursor: "Int",
        filter: "CompanyStaffFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    stockAdjustments: {
      __type: "CompanyStockAdjustmentConnection!",
      __args: {
        cursor: "Int",
        filter: "StockAdjustmentFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    stockWarehouse: { __type: "CompanyWarehouse!" },
    stripeConnectLink: { __type: "String!" },
    stripeRateExpression: { __type: "String" },
    subscriptions: {
      __type: "NewsletterSubscriptionConnection!",
      __args: {
        cursor: "Int",
        filter: "NewsletterSubscriptionFilterInput",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
      },
    },
    tables: {
      __type: "ShopTableConnection!",
      __args: {
        cursor: "Int",
        filter: "TableFilterInput",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
      },
    },
    taxZoneSelectedCountries: { __type: "[Country!]!" },
    taxZones: {
      __type: "ShopTaxZoneConnection!",
      __args: { cursor: "Int", limits: "Int", sortBy: "[SorterInput!]" },
    },
    timezone: { __type: "String" },
    transferWarehouse: { __type: "CompanyWarehouse!" },
    type: { __type: "String" },
    underStock: { __type: "ReminderSetting" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
    useCollectionProductSortIndex: { __type: "Boolean" },
    variationStocks: {
      __type: "VariationStockConnection!",
      __args: {
        cursor: "Int",
        filter: "InventoryReportDataFilterInput",
        limits: "Int",
      },
    },
    variations: {
      __type: "VariationConnection!",
      __args: {
        cursor: "Int",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
      },
    },
    venues: {
      __type: "ShopVenueConnection!",
      __args: {
        cursor: "Int",
        filter: "VenueFilterInput",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
      },
    },
    welcomeMessages: { __type: "[String!]" },
  },
  CompanyShopContactEmailsFilterInput: {
    active: { __type: "FilterInput" },
    createdAt: { __type: "FilterInput" },
    email: { __type: "FilterInput" },
    id: { __type: "FilterInput" },
    shopId: { __type: "FilterInput" },
    type: { __type: "FilterInput" },
    updatedAt: { __type: "FilterInput" },
    verified: { __type: "FilterInput" },
  },
  CompanyShopCredentialInput: {
    email: { __type: "String!" },
    password: { __type: "String!" },
    username: { __type: "String!" },
  },
  CompanyShopInput: {
    address: { __type: "AddressInput" },
    agentId: { __type: "ID" },
    allowGuestCheckout: { __type: "Boolean" },
    allowMemberPointCheckout: { __type: "Boolean" },
    autoConfirm: { __type: "Boolean" },
    autoConfirmRegistration: { __type: "Boolean" },
    branchType: { __type: "ShopBranchType" },
    checkoutRounding: { __type: "CheckoutRoundingPolicyInput" },
    contactEmail: { __type: "String" },
    contactEmails: { __type: "[ContactEmailInput!]" },
    currency: { __type: "Currency" },
    customDomain: { __type: "String" },
    deliveryNoteAutoComplete: { __type: "DurationInput" },
    domain: { __type: "String" },
    expiredAt: { __type: "AWSDateTime" },
    hasRegistrationEmail: { __type: "Boolean" },
    icoMedia: { __type: "MediaInput" },
    locale: { __type: "String" },
    logoMedia: { __type: "MediaInput" },
    lowStock: { __type: "ReminderSettingInput" },
    maxDeviceCount: { __type: "Int" },
    memberMetadataFields: { __type: "[CompanyMemberMetadataFieldInput!]" },
    memberPointClearanceGracefulPeriod: { __type: "String" },
    memberPointReleaseDelay: { __type: "Int" },
    memberPointReleasePolicy: { __type: "MemberPointReleasePolicy" },
    memberPointUseActive: { __type: "Boolean" },
    memberPointUsePerUnit: { __type: "Int" },
    memberPointUseUnitPoint: { __type: "Int" },
    metaDescription: { __type: "String" },
    metaKeywords: { __type: "String" },
    metaTitle: { __type: "String" },
    metadata: { __type: "[MetadataInput!]" },
    name: { __type: "String!" },
    nameEN: { __type: "String" },
    orderExpiry: { __type: "DurationInput" },
    orderExpiryDay: { __type: "Int" },
    overStock: { __type: "ReminderSettingInput" },
    rasterLogoMedia: { __type: "MediaInput" },
    referenceNoLength: { __type: "Int" },
    referenceNoPrefix: { __type: "String" },
    registrationMessages: { __type: "[String!]" },
    remarks: { __type: "String" },
    returnWarehouseId: { __type: "ID" },
    stockWarehouseId: { __type: "ID" },
    stripeRateExpression: { __type: "String" },
    timezone: { __type: "String" },
    transferWarehouseId: { __type: "ID" },
    type: { __type: "String" },
    underStock: { __type: "ReminderSettingInput" },
    useCollectionProductSortIndex: { __type: "Boolean" },
    welcomeMessages: { __type: "[String!]" },
  },
  CompanyStaff: {
    __typename: { __type: "String!" },
    active: { __type: "Boolean" },
    address: { __type: "Address" },
    attendSecondsByDay: {
      __type: "[AttendanceSecondsByDay!]!",
      __args: { createdAt: "AWSDateTime", createdThru: "AWSDateTime" },
    },
    attendances: {
      __type: "AttendanceConnection!",
      __args: {
        cursor: "Int",
        filter: "AttendanceFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    code: { __type: "String!" },
    company: { __type: "Company!" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    id: { __type: "ID!" },
    metadata: { __type: "[Metadata!]" },
    name: { __type: "String!" },
    orders: {
      __type: "OrderConnection!",
      __args: {
        cursor: "Int",
        filter: "OrderFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    password: { __type: "String!" },
    phoneNumber: { __type: "String" },
    role: { __type: "StaffRole!" },
    salespersonOrders: {
      __type: "OrderConnection!",
      __args: {
        cursor: "Int",
        filter: "OrderFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    shop: { __type: "CompanyShop!" },
    startedAt: { __type: "AWSDateTime!" },
    startedThru: { __type: "AWSDateTime" },
    thumbnail: { __type: "Media" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
  },
  CompanyStaffConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[CompanyStaff!]!" },
    totalCount: { __type: "Int!" },
  },
  CompanyStaffCreateInput: {
    active: { __type: "Boolean" },
    address: { __type: "AddressInput" },
    code: { __type: "String!" },
    metadata: { __type: "[MetadataInput!]" },
    name: { __type: "String!" },
    password: { __type: "String!" },
    phoneNumber: { __type: "String" },
    role: { __type: "StaffRole!" },
    shopId: { __type: "ID!" },
    startedAt: { __type: "AWSDateTime" },
    startedThru: { __type: "AWSDateTime" },
    thumbnail: { __type: "MediaInput" },
  },
  CompanyStaffFilterInput: {
    code: { __type: "FilterInput" },
    id: { __type: "FilterInput" },
    name: { __type: "FilterInput" },
    phoneNumber: { __type: "FilterInput" },
    role: { __type: "FilterInput" },
    shopId: { __type: "FilterInput" },
    startedAt: { __type: "FilterInput" },
    startedThru: { __type: "FilterInput" },
  },
  CompanyStaffUpdateInput: {
    address: { __type: "AddressInput" },
    code: { __type: "String" },
    metadata: { __type: "[MetadataInput!]" },
    name: { __type: "String" },
    password: { __type: "String" },
    phoneNumber: { __type: "String" },
    role: { __type: "StaffRole" },
    shopId: { __type: "ID" },
    startedAt: { __type: "AWSDateTime" },
    startedThru: { __type: "AWSDateTime" },
    thumbnail: { __type: "MediaInput" },
  },
  CompanyStockAdjustment: {
    __typename: { __type: "String!" },
    active: { __type: "Boolean" },
    company: { __type: "Company!" },
    completedAt: { __type: "AWSDateTime" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    device: { __type: "ShopDevice" },
    deviceId: { __type: "ID" },
    id: { __type: "ID!" },
    items: {
      __type: "StockAdjustmentItemConnection!",
      __args: {
        cursor: "Int",
        filter: "StockAdjustmentItemFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    metadata: { __type: "[Metadata!]" },
    referenceNo: { __type: "String!" },
    remark: { __type: "String" },
    shop: { __type: "CompanyShop!" },
    staff: { __type: "CompanyStaff" },
    status: { __type: "StockAdjustmentStatus!" },
    totalQuantity: { __type: "Int!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
    warehouse: { __type: "CompanyWarehouse!" },
  },
  CompanyStockAdjustmentConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[CompanyStockAdjustment!]!" },
    totalCount: { __type: "Int!" },
  },
  CompanyStockTransfer: {
    __typename: { __type: "String!" },
    completedAt: { __type: "AWSDateTime" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    deviceId: { __type: "String" },
    id: { __type: "ID!" },
    inboundWarehouse: { __type: "CompanyWarehouse" },
    items: { __type: "[CompanyStockTransferItem!]!" },
    itemsV2: {
      __type: "StockTransferItemConnection!",
      __args: {
        cursor: "Int",
        filter: "StockTransferItemFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    metadata: { __type: "[Metadata!]" },
    outboundWarehouse: { __type: "CompanyWarehouse" },
    referenceNo: { __type: "String!" },
    remark: { __type: "String" },
    salespersonId: { __type: "ID" },
    sentAt: { __type: "AWSDateTime" },
    staff: { __type: "CompanyStaff" },
    staffId: { __type: "ID" },
    status: { __type: "CompanyStockTransferStatus!" },
    totalQuantity: { __type: "Int!" },
    totalReceivedQuantity: { __type: "Int!" },
    transferWarehouse: { __type: "CompanyWarehouse" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
  },
  CompanyStockTransferConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[CompanyStockTransfer!]!" },
    totalCount: { __type: "Int!" },
  },
  CompanyStockTransferItem: {
    __typename: { __type: "String!" },
    productVariation: { __type: "ProductVariation" },
    quantity: { __type: "Int!" },
    receivedQuantity: { __type: "Int!" },
    sku: { __type: "ID!" },
  },
  CompanyStocktake: {
    __typename: { __type: "String!" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    deviceId: { __type: "String" },
    id: { __type: "ID!" },
    items: {
      __type: "CompanyStocktakeItemConnection!",
      __args: {
        cursor: "Int",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
      },
    },
    metadata: { __type: "[Metadata!]" },
    referenceNo: { __type: "String!" },
    remark: { __type: "String" },
    salespersonId: { __type: "ID" },
    staff: { __type: "CompanyStaff" },
    staffId: { __type: "ID" },
    status: { __type: "CompanyStocktakeStatus!" },
    totalQuantity: { __type: "Int!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
    warehouse: { __type: "CompanyWarehouse!" },
  },
  CompanyStocktakeConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[CompanyStocktake!]!" },
    totalCount: { __type: "Int!" },
  },
  CompanyStocktakeItem: {
    __typename: { __type: "String!" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    currentStock: { __type: "Int!" },
    id: { __type: "ID!" },
    productVariation: { __type: "ProductVariation" },
    quantity: { __type: "Int!" },
    quantityDiff: { __type: "Int!" },
    sku: { __type: "String!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
  },
  CompanyStocktakeItemConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[CompanyStocktakeItem!]!" },
    totalCount: { __type: "Int!" },
  },
  CompanyUpdateInput: {
    defaultMemberHashtagSchedules: { __type: "[CompanyHashtagScheduleInput!]" },
    memberPointResetDates: { __type: "[String!]" },
    memberPointResetGracefulPeriod: { __type: "String" },
  },
  CompanyWarehouse: {
    __typename: { __type: "String!" },
    active: { __type: "Boolean!" },
    address: { __type: "Address" },
    company: { __type: "Company!" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    id: { __type: "ID!" },
    name: { __type: "String!" },
    shops: {
      __type: "ShopConnection!",
      __args: {
        cursor: "Int",
        filter: "UserShopsFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    sortIndex: { __type: "Int" },
    type: { __type: "CompanyWarehouseTypes!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
  },
  Connection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    totalCount: { __type: "Int!" },
    $on: { __type: "$Connection!" },
  },
  ContactEmailInput: {
    email: { __type: "AWSEmail!" },
    type: { __type: "ShopContactEmailType!" },
  },
  CouponAction: {
    __typename: { __type: "String!" },
    actionId: { __type: "ID" },
    actionIds: { __type: "[String!]" },
    actionType: { __type: "CouponActionType!" },
    actionValue: { __type: "String" },
    actionValueType: { __type: "CouponActionValueType" },
  },
  CouponActionInput: {
    actionId: { __type: "ID" },
    actionIds: { __type: "[String!]" },
    actionType: { __type: "CouponActionType!" },
    actionValue: { __type: "String" },
    actionValueType: { __type: "CouponActionValueType" },
  },
  CouponInput: {
    actions: { __type: "[CouponActionInput!]!" },
    active: { __type: "Boolean" },
    companyId: { __type: "ID!" },
    description: { __type: "String" },
    discardSubsequent: { __type: "Boolean" },
    display: { __type: "Boolean" },
    enabled: { __type: "Boolean" },
    excludedCouponIds: { __type: "[ID!]" },
    excludedDiscountIds: { __type: "[ID!]" },
    excludedProductIds: { __type: "[ID!]" },
    handle: { __type: "String!" },
    media: { __type: "MediaInput" },
    memberLimit: { __type: "Int" },
    membersOnly: { __type: "Boolean" },
    metadata: { __type: "[MetadataInput!]" },
    name: { __type: "String!" },
    publishAt: { __type: "AWSDateTime" },
    publishLimit: { __type: "Int" },
    publishThru: { __type: "AWSDateTime" },
    remark: { __type: "String" },
    repeat: { __type: "Int" },
    resolveCode: { __type: "String" },
    sortIndex: { __type: "Int" },
    triggers: { __type: "[CouponTriggerInput!]!" },
    usage: { __type: "Int" },
    validAt: { __type: "AWSDateTime" },
    validForPeriod: { __type: "String" },
    validThru: { __type: "AWSDateTime" },
  },
  CouponSales: {
    __typename: { __type: "String!" },
    amount: { __type: "Float!" },
    avgCount: { __type: "Float!" },
    avgPrice: { __type: "Float!" },
    count: { __type: "Int!" },
    countries: { __type: "[ChartData!]!" },
    discountAmount: { __type: "Float!" },
    handle: { __type: "String!" },
    id: { __type: "ID!" },
    memberAmount: { __type: "Float!" },
    memberLevelAmounts: { __type: "[ChartData!]!" },
    memberLevels: { __type: "[ChartData!]!" },
    name: { __type: "String!" },
    nonMemberAmount: { __type: "Float!" },
    orderCount: { __type: "Int!" },
    redeemCount: { __type: "Int" },
    salesPoints: { __type: "[ChartData!]!" },
    salesRecords: {
      __type: "CouponSalesRecordConnection!",
      __args: {
        cursor: "Int",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
      },
    },
    salesTrends: { __type: "[LineChartData!]!" },
    usageCount: { __type: "Int!" },
  },
  CouponSalesConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[CouponSales!]!" },
    totalCount: { __type: "Int!" },
  },
  CouponSalesRecord: {
    __typename: { __type: "String!" },
    amount: { __type: "Float!" },
    count: { __type: "Int!" },
    createdAt: { __type: "AWSDateTime!" },
    discountAmount: { __type: "Float!" },
    orderId: { __type: "ID!" },
    referenceNo: { __type: "String!" },
    shopId: { __type: "ID!" },
    shopName: { __type: "String!" },
  },
  CouponSalesRecordConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[CouponSalesRecord!]!" },
    totalCount: { __type: "Int!" },
  },
  CouponTrigger: {
    __typename: { __type: "String!" },
    triggerId: { __type: "ID" },
    triggerIds: { __type: "[String!]" },
    triggerType: { __type: "CouponTriggerType!" },
    triggerValue: { __type: "Float" },
    triggerValueType: { __type: "CouponTriggerValueType" },
  },
  CouponTriggerInput: {
    triggerId: { __type: "ID" },
    triggerIds: { __type: "[String!]" },
    triggerType: { __type: "CouponTriggerType!" },
    triggerValue: { __type: "Float" },
    triggerValueType: { __type: "CouponTriggerValueType" },
  },
  CredentialFilter: {
    createdAt: { __type: "FilterInput" },
    id: { __type: "FilterInput" },
    name: { __type: "FilterInput" },
    platforms: { __type: "[ShopCredentialPlatform!]" },
    types: { __type: "[ShopCredentialType!]" },
    updatedAt: { __type: "FilterInput" },
  },
  CredentialFilterInput: {
    createdAt: { __type: "FilterInput" },
    id: { __type: "FilterInput" },
    name: { __type: "FilterInput" },
    platforms: { __type: "[ShopCredentialPlatform!]" },
    types: { __type: "[ShopCredentialType!]" },
    updatedAt: { __type: "FilterInput" },
  },
  CredentialOCGCInput: {
    description: { __type: "String" },
    identity: { __type: "String!" },
    platforms: { __type: "ShopCredentialPlatform" },
    secret: { __type: "String" },
  },
  CredentialSetInput: {
    active: { __type: "Boolean" },
    description: { __type: "String" },
    identity: { __type: "String!" },
    metadata: { __type: "[MetadataInput!]" },
    name: { __type: "String!" },
    platform: { __type: "ShopCredentialPlatform!" },
    secret: { __type: "String!" },
    shopId: { __type: "ID!" },
    type: { __type: "ShopCredentialType!" },
  },
  CreditNoteConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[InvoiceCreditNote!]!" },
    totalCount: { __type: "Int!" },
  },
  CreditNoteFilterInput: {
    active: { __type: "FilterInput" },
    createdAt: { __type: "FilterInput" },
    currency: { __type: "FilterInput" },
    id: { __type: "FilterInput" },
    invoiceId: { __type: "FilterInput" },
    orderId: { __type: "FilterInput" },
    referenceNo: { __type: "FilterInput" },
    shopId: { __type: "FilterInput" },
    status: { __type: "FilterInput" },
    total: { __type: "FilterInput" },
    updatedAt: { __type: "FilterInput" },
    userId: { __type: "FilterInput" },
  },
  Customer: {
    __typename: { __type: "String!" },
    addresses: {
      __type: "CustomerAddressConnection!",
      __args: { cursor: "Int", limits: "Int", sortBy: "[SorterInput!]" },
    },
    appointments: {
      __type: "ShopAppointmentConnection!",
      __args: {
        cursor: "Int",
        filter: "ShopAppointmentFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    blocked: { __type: "Boolean!" },
    channels: {
      __type: "ChannelConnection!",
      __args: {
        cursor: "Int",
        filter: "ChannelFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    checkouts: {
      __type: "ShopCheckoutConnection!",
      __args: {
        cursor: "Int",
        filter: "CheckoutFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    company: { __type: "Company!" },
    coupons: {
      __type: "UserCouponConnection",
      __args: {
        cursor: "Int",
        filter: "UserCouponFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    email: { __type: "AWSEmail!" },
    emailVerified: { __type: "Boolean!" },
    giftPoints: { __type: "Int!", __args: { shopId: "ID" } },
    giftPointsBalance: {
      __type: "[GiftPointBalance!]!",
      __args: { shopId: "ID" },
    },
    giftPointsHistory: {
      __type: "GiftPointAdjustmentConnection!",
      __args: {
        cursor: "Int",
        filter: "GiftPointAdjustmentConnectionFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    hashtags: { __type: "[String!]!" },
    id: { __type: "ID!" },
    isEmailVerified: { __type: "Boolean" },
    isPhoneNumberVerified: { __type: "Boolean" },
    lastLogin: { __type: "AWSDateTime" },
    memberTier: { __type: "CompanyMemberTier" },
    metadata: { __type: "[Metadata!]!" },
    orderItems: {
      __type: "OrderItemConnection!",
      __args: {
        cursor: "Int",
        filter: "OrderItemFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    orders: {
      __type: "OrderConnection!",
      __args: {
        cursor: "Int",
        filter: "OrderFilterInput",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
      },
    },
    paymentSources: {
      __type: "PaymentSourceConnection!",
      __args: {
        cursor: "Int",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
      },
    },
    phoneNumber: { __type: "String" },
    phoneNumberVerified: { __type: "Boolean!" },
    picture: { __type: "AWSURL" },
    points: { __type: "Int!" },
    previousMemberTier: { __type: "CustomerMemberTier" },
    report: {
      __type: "UserReport!",
      __args: { filter: "UserSalesFilterInput" },
    },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
    wishlists: {
      __type: "WishlistConnection!",
      __args: {
        cursor: "Int",
        filter: "WishlistFilterInput",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
      },
    },
  },
  CustomerAddress: {
    __typename: { __type: "String!" },
    city: { __type: "String" },
    country: { __type: "Country" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    district: { __type: "String" },
    email: { __type: "String" },
    id: { __type: "ID!" },
    isDefault: { __type: "Boolean!" },
    lines: { __type: "[String!]" },
    name: { __type: "String" },
    person: { __type: "String" },
    postalCode: { __type: "String" },
    state: { __type: "String" },
    tel: { __type: "String" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
  },
  CustomerAddressConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[CustomerAddress!]!" },
    totalCount: { __type: "Int!" },
  },
  CustomerAddressCreateInput: {
    city: { __type: "String" },
    country: { __type: "Country" },
    district: { __type: "String" },
    email: { __type: "String" },
    isDefault: { __type: "Boolean" },
    lines: { __type: "[String!]!" },
    name: { __type: "String" },
    person: { __type: "String" },
    postalCode: { __type: "String" },
    state: { __type: "String" },
    tel: { __type: "String" },
  },
  CustomerAddressUpdateInput: {
    city: { __type: "String" },
    country: { __type: "Country" },
    district: { __type: "String" },
    email: { __type: "String" },
    isDefault: { __type: "Boolean" },
    lines: { __type: "[String!]" },
    name: { __type: "String" },
    person: { __type: "String" },
    postalCode: { __type: "String" },
    state: { __type: "String" },
    tel: { __type: "String" },
  },
  CustomerConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[Customer!]!" },
    totalCount: { __type: "Int!" },
  },
  CustomerCredentialInput: {
    email: { __type: "AWSEmail" },
    mobile: { __type: "AWSPhone" },
    mobileV2: { __type: "String" },
    password: { __type: "String!" },
  },
  CustomerFilterInput: {
    createdAt: { __type: "FilterInput" },
    email: { __type: "FilterInput" },
    hashtags: { __type: "[String!]" },
    id: { __type: "FilterInput" },
    lastLogin: { __type: "FilterInput" },
    metadata: { __type: "[MetadataInput!]" },
    phoneNumber: { __type: "FilterInput" },
    search: { __type: "FilterInput" },
    updatedAt: { __type: "FilterInput" },
  },
  CustomerMemberTier: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    name: { __type: "String!" },
    startedAt: { __type: "AWSDateTime!" },
    startedThru: { __type: "AWSDateTime" },
  },
  CustomerProfileInput: {
    addresses: { __type: "[UserAddressInput!]" },
    familyName: { __type: "String" },
    givenName: { __type: "String" },
    hashTags: { __type: "[String!]" },
    hashtags: { __type: "[String!]" },
    isEmailVerified: { __type: "Boolean" },
    isPhoneNumberVerified: { __type: "Boolean" },
    metadata: { __type: "[MetadataInput!]" },
    name: { __type: "String" },
    nickname: { __type: "String" },
    oneSignalPlayerId: { __type: "String" },
    phoneNumber: { __type: "String" },
    picture: { __type: "AWSURL" },
    title: { __type: "String" },
  },
  DailyAvailability: {
    __typename: { __type: "String!" },
    daysOfWeek: { __type: "[String!]" },
    startedAt: { __type: "AWSDateTime" },
    startedThru: { __type: "AWSDateTime" },
  },
  DailyAvailabilityInput: {
    daysOfWeek: { __type: "[String!]" },
    startedAt: { __type: "AWSDateTime" },
    startedThru: { __type: "AWSDateTime" },
  },
  DeliveryNoteConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[OrderDeliveryNote!]!" },
    totalCount: { __type: "Int!" },
  },
  DeliveryNoteCreateInput: {
    items: { __type: "[DeliveryNoteItemInput!]!" },
    metadata: { __type: "[MetadataInput!]" },
    orderId: { __type: "ID!" },
    shippingAddress: { __type: "AddressInput" },
    shippingZoneId: { __type: "ID" },
    trackingNumber: { __type: "String" },
  },
  DeliveryNoteItem: {
    __typename: { __type: "String!" },
    appointments: {
      __type: "ShopAppointmentConnection!",
      __args: {
        cursor: "Int",
        filter: "ShopAppointmentFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    id: { __type: "ID!" },
    order: { __type: "ShopOrder!" },
    orderItem: { __type: "OrderItem" },
    quantity: { __type: "Int!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
  },
  DeliveryNoteItemInput: {
    id: { __type: "ID" },
    orderItemId: { __type: "ID!" },
    quantity: { __type: "Int!" },
  },
  DeliveryNoteSetInput: {
    items: { __type: "[DeliveryNoteItemInput!]" },
    meta: { __type: "String" },
    metadata: { __type: "[MetadataInput!]" },
    orderId: { __type: "ID!" },
    shippingAddress: { __type: "AddressInput" },
    shippingZoneId: { __type: "ID" },
    trackingNumber: { __type: "String" },
  },
  DeliveryNoteUpdateInput: {
    items: { __type: "[DeliveryNoteItemInput!]" },
    metadata: { __type: "[MetadataInput!]" },
    shippingAddress: { __type: "AddressInput" },
    shippingZoneId: { __type: "ID" },
    trackingNumber: { __type: "String" },
  },
  DeliveryNotesFilterInput: {
    active: { __type: "FilterInput" },
    address: { __type: "FilterInput" },
    completedAt: { __type: "FilterInput" },
    createdAt: { __type: "FilterInput" },
    deliveryDetails: { __type: "FilterInput" },
    id: { __type: "FilterInput" },
    meta: { __type: "FilterInput" },
    orderId: { __type: "FilterInput" },
    provider: { __type: "FilterInput" },
    shippingProvider: { __type: "FilterInput" },
    shopId: { __type: "FilterInput" },
    status: { __type: "FilterInput" },
    updatedAt: { __type: "FilterInput" },
    userId: { __type: "FilterInput" },
  },
  DeviceConfigUpdateInput: { configs: { __type: "AWSJSON!" } },
  DiscountAction: {
    __typename: { __type: "String!" },
    actionId: { __type: "ID" },
    actionIds: { __type: "[String!]" },
    actionType: { __type: "DiscountActionType!" },
    actionValue: { __type: "String" },
    actionValueType: { __type: "DiscountActionValueType" },
  },
  DiscountActionInput: {
    actionId: { __type: "ID" },
    actionIds: { __type: "[String!]" },
    actionType: { __type: "DiscountActionType!" },
    actionValue: { __type: "String" },
    actionValueType: { __type: "DiscountActionValueType" },
  },
  DiscountFilterInput: {
    active: { __type: "FilterInput" },
    companyId: { __type: "FilterInput" },
    createdAt: { __type: "FilterInput" },
    description: { __type: "FilterInput" },
    discardSubsequent: { __type: "FilterInput" },
    id: { __type: "FilterInput" },
    name: { __type: "FilterInput" },
    publishAt: { __type: "FilterInput" },
    publishThru: { __type: "FilterInput" },
    remark: { __type: "FilterInput" },
    repeat: { __type: "FilterInput" },
    search: { __type: "FilterInput" },
    sortIndex: { __type: "FilterInput" },
    updatedAt: { __type: "FilterInput" },
  },
  DiscountInput: {
    actions: { __type: "[DiscountActionInput!]!" },
    active: { __type: "Boolean" },
    companyId: { __type: "ID!" },
    description: { __type: "String" },
    discardSubsequent: { __type: "Boolean" },
    excludedCouponIds: { __type: "[ID!]" },
    excludedDiscountIds: { __type: "[String!]" },
    excludedProductIds: { __type: "[ID!]" },
    membersOnly: { __type: "Boolean" },
    metadata: { __type: "[MetadataInput!]" },
    name: { __type: "String!" },
    publishAt: { __type: "AWSDateTime" },
    publishThru: { __type: "AWSDateTime" },
    remark: { __type: "String" },
    repeat: { __type: "Int" },
    sortIndex: { __type: "Int" },
    triggers: { __type: "[DiscountTriggerInput!]!" },
  },
  DiscountSales: {
    __typename: { __type: "String!" },
    amount: { __type: "Float!" },
    avgCount: { __type: "Float!" },
    avgPrice: { __type: "Float!" },
    count: { __type: "Int!" },
    countries: { __type: "[ChartData!]!" },
    discountAmount: { __type: "Float!" },
    id: { __type: "ID!" },
    memberAmount: { __type: "Float!" },
    memberLevelAmounts: { __type: "[ChartData!]!" },
    memberLevels: { __type: "[ChartData!]!" },
    name: { __type: "String!" },
    nonMemberAmount: { __type: "Float!" },
    orderCount: { __type: "Int!" },
    salesPoints: { __type: "[ChartData!]!" },
    salesRecords: {
      __type: "CouponSalesRecordConnection!",
      __args: {
        cursor: "Int",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
      },
    },
    salesTrends: { __type: "[LineChartData!]!" },
    usageCount: { __type: "Int!" },
  },
  DiscountSalesConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[DiscountSales!]!" },
    totalCount: { __type: "Int!" },
  },
  DiscountTrigger: {
    __typename: { __type: "String!" },
    triggerId: { __type: "ID" },
    triggerIds: { __type: "[String!]" },
    triggerType: { __type: "DiscountTriggerType!" },
    triggerValue: { __type: "Float" },
    triggerValueType: { __type: "DiscountTriggerValueType" },
  },
  DiscountTriggerInput: {
    triggerId: { __type: "ID" },
    triggerIds: { __type: "[String!]" },
    triggerType: { __type: "DiscountTriggerType!" },
    triggerValue: { __type: "Float" },
    triggerValueType: { __type: "DiscountTriggerValueType" },
  },
  Duration: {
    __typename: { __type: "String!" },
    days: { __type: "Int!" },
    hours: { __type: "Int!" },
    minutes: { __type: "Int!" },
    months: { __type: "Int!" },
    seconds: { __type: "Int" },
    weeks: { __type: "Int!" },
    years: { __type: "Int!" },
  },
  DurationInput: {
    days: { __type: "Int" },
    hours: { __type: "Int" },
    minutes: { __type: "Int" },
    months: { __type: "Int" },
    seconds: { __type: "Int" },
    weeks: { __type: "Int" },
    years: { __type: "Int" },
  },
  FilterInput: {
    operator: { __type: "FilterOperator!" },
    value: { __type: "[String]!" },
  },
  GiftPointAdjustment: {
    __typename: { __type: "String!" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    customer: { __type: "User!" },
    description: { __type: "String" },
    direction: { __type: "GiftPointDirection!" },
    id: { __type: "ID!" },
    metadata: { __type: "[Metadata!]" },
    points: { __type: "Int!" },
    remark: { __type: "String" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
  },
  GiftPointAdjustmentConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[GiftPointAdjustment!]!" },
    totalCount: { __type: "Int!" },
  },
  GiftPointAdjustmentConnectionFilterInput: {
    companyId: { __type: "FilterInput" },
    createdAt: { __type: "FilterInput" },
    direction: { __type: "GiftPointDirection" },
    expiryDate: { __type: "FilterInput" },
    id: { __type: "FilterInput" },
    shopId: { __type: "FilterInput" },
    updatedAt: { __type: "FilterInput" },
    userId: { __type: "FilterInput" },
  },
  GiftPointBalance: {
    __typename: { __type: "String!" },
    date: { __type: "AWSDateTime" },
    points: { __type: "Int!" },
  },
  GiftPointExportFilterInput: {
    createdAt: { __type: "FilterInput" },
    customerId: { __type: "FilterInput" },
    memberPointResetDates: { __type: "FilterInput" },
    metadataValue: { __type: "FilterInput" },
  },
  HonorProductSerial: {
    __typename: { __type: "String!" },
    active: { __type: "Boolean!" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    id: { __type: "ID!" },
    imei: { __type: "String" },
    metadata: { __type: "[Metadata!]" },
    sku: { __type: "String" },
    sn1: { __type: "String" },
    sn2: { __type: "String" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
  },
  HonorProductSerialConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[HonorProductSerial!]!" },
    totalCount: { __type: "Int!" },
  },
  HonorProductSerialFilterInput: {
    active: { __type: "FilterInput" },
    createdAt: { __type: "FilterInput" },
    imei: { __type: "FilterInput" },
    sku: { __type: "FilterInput" },
    sn1: { __type: "FilterInput" },
    sn2: { __type: "FilterInput" },
    updatedAt: { __type: "FilterInput" },
  },
  Ingredient: {
    __typename: { __type: "String!" },
    ProductVariation: { __type: "ProductVariation" },
    company: { __type: "Company!" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    id: { __type: "ID!" },
    name: { __type: "String!" },
    quantity: { __type: "Int!", __args: { warehouseId: "ID!" } },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
  },
  IngredientConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[Ingredient!]!" },
    totalCount: { __type: "Int!" },
  },
  IngredientInput: {
    companyId: { __type: "ID!" },
    name: { __type: "String!" },
  },
  InventoryReportDataConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[InventoryReportDatum!]!" },
    totalCount: { __type: "Int!" },
  },
  InventoryReportDataFilterInput: { sku: { __type: "FilterInput" } },
  InventoryReportDatum: {
    __typename: { __type: "String!" },
    combination: { __type: "String" },
    productName: { __type: "String", __args: { shopId: "ID!" } },
    sku: { __type: "String!" },
    stocks: { __type: "[InventoryReportStockDatum!]!" },
  },
  InventoryReportStockDatum: {
    __typename: { __type: "String!" },
    quantity: { __type: "Int!" },
    warehouseId: { __type: "ID!" },
  },
  InvoiceConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[OrderInvoice!]!" },
    totalCount: { __type: "Int!" },
  },
  InvoiceCredential: {
    __typename: { __type: "String!" },
    active: { __type: "Boolean" },
    createdAt: { __type: "AWSDateTime" },
    createdBy: { __type: "User" },
    description: { __type: "String" },
    id: { __type: "ID" },
    identity: { __type: "String" },
    meta: { __type: "AWSJSON" },
    name: { __type: "String" },
    platform: { __type: "ShopCredentialPlatform" },
    referenceNo: { __type: "String!" },
    secret: { __type: "String" },
    shop: { __type: "CompanyShop" },
    type: { __type: "ShopCredentialType" },
    updatedAt: { __type: "AWSDateTime" },
    updatedBy: { __type: "User" },
  },
  InvoiceCreditNote: {
    __typename: { __type: "String!" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    currency: { __type: "String!" },
    id: { __type: "ID!" },
    invoice: { __type: "OrderInvoice" },
    meta: { __type: "AWSJSON" },
    referenceNo: { __type: "String!" },
    remark: { __type: "String" },
    shop: { __type: "CompanyShop!" },
    status: { __type: "InvoiceCreditNoteStatus!" },
    total: { __type: "Float!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
    user: { __type: "User!" },
  },
  InvoiceFilterInput: {
    createdAt: { __type: "FilterInput" },
    id: { __type: "FilterInput" },
    orderId: { __type: "FilterInput" },
    paymentMethod: { __type: "FilterInput" },
    status: { __type: "FilterInput" },
    total: { __type: "FilterInput" },
    updatedAt: { __type: "FilterInput" },
    userId: { __type: "FilterInput" },
  },
  LineChartData: {
    __typename: { __type: "String!" },
    data: { __type: "[ChartData!]!" },
    name: { __type: "String!" },
  },
  Me: { __typename: { __type: "String!" }, $on: { __type: "$Me!" } },
  Media: {
    __typename: { __type: "String!" },
    alt: { __type: "String" },
    id: { __type: "ID" },
    metadata: { __type: "[Metadata!]" },
    optimizedSrc: {
      __type: "AWSURL",
      __args: {
        contentType: "MediaContentType",
        fitting: "MediaFitting",
        gravity: "MediaGravity",
        height: "Int",
        quality: "Int",
        width: "Int",
      },
    },
    src: { __type: "AWSURL!" },
    suggestedHashtags: { __type: "[String!]" },
  },
  MediaInput: {
    alt: { __type: "String" },
    id: { __type: "ID" },
    metadata: { __type: "[MetadataInput!]" },
    src: { __type: "AWSURL" },
  },
  MemberTierSales: {
    __typename: { __type: "String!" },
    amount: { __type: "Float!" },
    avgAmount: { __type: "Float!" },
    avgCount: { __type: "Float!" },
    avgPrice: { __type: "Float!" },
    count: { __type: "Int!" },
    id: { __type: "ID!" },
    memberCount: { __type: "Int!" },
    memberCountChange: { __type: "Int!" },
    memberTierTopHits: { __type: "[ChartData!]!", __args: { key: "String!" } },
    name: { __type: "String!" },
    newMemberCount: { __type: "Int!" },
    orderCount: { __type: "Int!" },
    salesRecords: {
      __type: "MemberTierSalesRecordConnection!",
      __args: {
        cursor: "Int",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
      },
    },
    salesTrends: { __type: "[LineChartData!]!" },
  },
  MemberTierSalesConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[MemberTierSales!]!" },
    totalCount: { __type: "Int!" },
  },
  MemberTierSalesRecord: {
    __typename: { __type: "String!" },
    amount: { __type: "Float!" },
    count: { __type: "Int!" },
    createdAt: { __type: "AWSDateTime!" },
    orderId: { __type: "ID!" },
    referenceNo: { __type: "String!" },
    shopId: { __type: "ID!" },
    shopName: { __type: "String!" },
  },
  MemberTierSalesRecordConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[MemberTierSalesRecord!]!" },
    totalCount: { __type: "Int!" },
  },
  MemberTierUpgradeCondition: {
    __typename: { __type: "String!" },
    type: { __type: "UpgradeConditionType!" },
    upgradeConditionAmount: { __type: "Int!" },
    upgradeConditionMonths: { __type: "Int" },
  },
  MemberTierUpgradeConditionInput: {
    type: { __type: "UpgradeConditionType!" },
    upgradeConditionAmount: { __type: "Int!" },
    upgradeConditionMonths: { __type: "Int" },
  },
  Metadata: {
    __typename: { __type: "String!" },
    key: { __type: "String!" },
    value: { __type: "String!" },
  },
  MetadataInput: { key: { __type: "String!" }, value: { __type: "String!" } },
  NavigationTemplateCreateInput: {
    active: { __type: "Boolean" },
    configs: { __type: "AWSJSON" },
    metadata: { __type: "[MetadataInput!]" },
    name: { __type: "String!" },
    shopId: { __type: "ID!" },
    type: { __type: "NavigationTemplateType!" },
  },
  NavigationTemplateFilterInput: {
    active: { __type: "FilterInput" },
    createdAt: { __type: "FilterInput" },
    name: { __type: "FilterInput" },
    type: { __type: "FilterInput" },
    updatedAt: { __type: "FilterInput" },
  },
  NavigationTemplateUpdateInput: {
    active: { __type: "Boolean" },
    configs: { __type: "AWSJSON" },
    metadata: { __type: "[MetadataInput!]" },
    name: { __type: "String" },
  },
  NewsletterSubscription: {
    __typename: { __type: "String!" },
    active: { __type: "Boolean" },
    company: { __type: "Company!" },
    contact: { __type: "String!" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    id: { __type: "ID!" },
    shop: { __type: "CompanyShop!" },
    type: { __type: "SubscriptionType!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
    userId: { __type: "String" },
  },
  NewsletterSubscriptionConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[NewsletterSubscription!]!" },
    totalCount: { __type: "Int!" },
  },
  NewsletterSubscriptionFilterInput: {
    active: { __type: "FilterInput" },
    companyId: { __type: "FilterInput" },
    contact: { __type: "FilterInput" },
    createdAt: { __type: "FilterInput" },
    id: { __type: "FilterInput" },
    shopId: { __type: "FilterInput" },
    type: { __type: "FilterInput" },
    updatedAt: { __type: "FilterInput" },
    userId: { __type: "FilterInput" },
  },
  NewsletterSubscriptionSetInput: {
    active: { __type: "Boolean" },
    contact: { __type: "String!" },
    shopId: { __type: "ID" },
    type: { __type: "SubscriptionType" },
    userId: { __type: "ID" },
  },
  Node: {
    __typename: { __type: "String!" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    id: { __type: "ID!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
    $on: { __type: "$Node!" },
  },
  OrderActivity: {
    __typename: { __type: "String!" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    event: { __type: "String!" },
    id: { __type: "ID!" },
    order: { __type: "ShopOrder!" },
    orderId: { __type: "ID!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
    userId: { __type: "ID" },
  },
  OrderActivityConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[OrderActivity]" },
    totalCount: { __type: "Int!" },
  },
  OrderAddOnProduct: {
    __typename: { __type: "String!" },
    active: { __type: "Boolean!" },
    addOnProduct: { __type: "ShopAddOnProduct!" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    id: { __type: "ID!" },
    quantity: { __type: "Int!" },
    remark: { __type: "String" },
    sortIndex: { __type: "Int!" },
    unitPrice: { __type: "Float" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
  },
  OrderAddOnProductConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[OrderAddOnProduct!]!" },
    totalCount: { __type: "Int!" },
  },
  OrderAdjustment: {
    __typename: { __type: "String!" },
    amount: { __type: "Float!" },
    description: { __type: "String" },
    id: { __type: "ID!" },
    points: { __type: "Int" },
    sortIndex: { __type: "Int!" },
  },
  OrderAdjustmentInput: {
    amount: { __type: "Float!" },
    description: { __type: "String!" },
  },
  OrderCancelInput: { cancelReason: { __type: "String!" } },
  OrderComment: {
    __typename: { __type: "String!" },
    content: { __type: "String!" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    id: { __type: "ID!" },
    order: { __type: "ShopOrder!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
    user: { __type: "User!" },
  },
  OrderCommentInput: {
    content: { __type: "String!" },
    orderId: { __type: "String" },
  },
  OrderConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[ShopOrder!]!" },
    totalAmount: { __type: "Float!" },
    totalCount: { __type: "Int!" },
  },
  OrderDeliveryNote: {
    __typename: { __type: "String!" },
    address: { __type: "Address" },
    appointments: {
      __type: "ShopAppointmentConnection!",
      __args: {
        cursor: "Int",
        filter: "ShopAppointmentFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    deliveryDetails: { __type: "AWSJSON" },
    id: { __type: "ID!" },
    items: { __type: "[DeliveryNoteItem!]!" },
    meta: { __type: "AWSJSON" },
    metadata: { __type: "[Metadata!]" },
    order: { __type: "ShopOrder!" },
    provider: { __type: "ShippingZoneProvider" },
    referenceNo: { __type: "String!" },
    shippingProvider: { __type: "ShopShippingProvider" },
    shop: { __type: "CompanyShop!" },
    status: { __type: "DeliveryNoteStatus!" },
    trackingNumber: { __type: "String" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
    user: { __type: "User" },
  },
  OrderFilterInput: {
    active: { __type: "FilterInput" },
    cancelReason: { __type: "FilterInput" },
    companyId: { __type: "FilterInput" },
    couponDiscount: { __type: "FilterInput" },
    coupons: { __type: "FilterInput" },
    createdAt: { __type: "FilterInput" },
    customerId: { __type: "FilterInput" },
    id: { __type: "FilterInput" },
    isPreOrder: { __type: "FilterInput" },
    kitchenStatus: { __type: "FilterInput" },
    metadata: { __type: "[MetadataInput!]" },
    paymentProvider: { __type: "FilterInput" },
    paymentStatus: { __type: "FilterInput" },
    referenceNo: { __type: "FilterInput" },
    remark: { __type: "FilterInput" },
    search: { __type: "FilterInput" },
    shippingFee: { __type: "FilterInput" },
    shippingStatus: { __type: "FilterInput" },
    shopDiscount: { __type: "FilterInput" },
    shopId: { __type: "FilterInput" },
    status: { __type: "FilterInput" },
    subtotal: { __type: "FilterInput" },
    taxFee: { __type: "FilterInput" },
    total: { __type: "FilterInput" },
    totalAdjustment: { __type: "FilterInput" },
    updatedAt: { __type: "FilterInput" },
  },
  OrderInvoice: {
    __typename: { __type: "String!" },
    address: { __type: "Address" },
    cancelReason: { __type: "String" },
    change: { __type: "Float!" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    credential: { __type: "InvoiceCredential!" },
    creditNotes: {
      __type: "CreditNoteConnection!",
      __args: {
        cursor: "Int",
        filter: "CreditNoteFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    currency: { __type: "String!" },
    customer: { __type: "User" },
    id: { __type: "ID!" },
    meta: { __type: "AWSJSON" },
    metadata: { __type: "[Metadata!]" },
    order: { __type: "ShopOrder!" },
    paymentMethod: { __type: "PaymentProvider!" },
    paymentMethodV2: { __type: "PaymentMethod" },
    referenceNo: { __type: "String" },
    refundStatus: { __type: "InvoiceRefundStatus" },
    shop: { __type: "CompanyShop!" },
    status: { __type: "OrderInvoiceStatus!" },
    total: { __type: "Float!" },
    totalPaid: { __type: "Float!" },
    totalRefund: { __type: "Float!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
  },
  OrderItem: {
    __typename: { __type: "String!" },
    addOnProduct: { __type: "ShopAddOnProduct" },
    appointments: {
      __type: "ShopAppointmentConnection!",
      __args: {
        cursor: "Int",
        filter: "ShopAppointmentFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    bundleProduct: { __type: "CheckoutBundleProduct" },
    checkout: { __type: "ShopCheckout!" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    deliverableQuantity: { __type: "Int!" },
    description: { __type: "String" },
    id: { __type: "ID!" },
    media: { __type: "Media" },
    metadata: { __type: "[Metadata!]" },
    metadataFields: { __type: "[CompanyMemberMetadataField!]" },
    order: { __type: "ShopOrder!" },
    productVariation: { __type: "ProductVariation" },
    quantity: { __type: "Int!" },
    remark: { __type: "String" },
    returnNoteItems: { __type: "[ReturnNoteItem!]" },
    serviceBundle: { __type: "CheckoutServiceBundle" },
    sku: { __type: "String" },
    unitPrice: { __type: "Float" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
  },
  OrderItemConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[OrderItem!]!" },
    totalCount: { __type: "Int!" },
  },
  OrderItemFilterInput: {
    addOnProductId: { __type: "FilterInput" },
    bundleProductId: { __type: "FilterInput" },
    checkoutItemId: { __type: "FilterInput" },
    orderId: { __type: "FilterInput" },
    productId: { __type: "FilterInput" },
    productVariationId: { __type: "FilterInput" },
    quantity: { __type: "FilterInput" },
    remark: { __type: "FilterInput" },
    serviceBundleId: { __type: "FilterInput" },
    sku: { __type: "FilterInput" },
    unitPrice: { __type: "FilterInput" },
  },
  OrderUpdateInput: {
    billingAddress: { __type: "AddressInput" },
    internalMetadata: { __type: "[MetadataInput!]" },
    internalRemark: { __type: "String" },
    internalRemarkMedias: { __type: "[MediaInput!]" },
    metadata: { __type: "[MetadataInput!]" },
    remark: { __type: "String" },
    remarkMedias: { __type: "[MediaInput!]" },
    shippingAddress: { __type: "AddressInput" },
  },
  OtherDiscount: {
    __typename: { __type: "String!" },
    amount: { __type: "Float!" },
    count: { __type: "Int!" },
    name: { __type: "String!" },
  },
  PageConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[ShopPage!]!" },
    totalCount: { __type: "Int!" },
  },
  PageFilterInput: {
    active: { __type: "FilterInput" },
    atFooter: { __type: "FilterInput" },
    atHeader: { __type: "FilterInput" },
    atMenu: { __type: "FilterInput" },
    createdAt: { __type: "FilterInput" },
    display: { __type: "FilterInput" },
    group: { __type: "FilterInput" },
    hashtags: { __type: "FilterInput" },
    href: { __type: "FilterInput" },
    id: { __type: "FilterInput" },
    name: { __type: "FilterInput" },
    rewriteUri: { __type: "FilterInput" },
    sortIndex: { __type: "FilterInput" },
    updatedAt: { __type: "FilterInput" },
  },
  PageInput: {
    active: { __type: "Boolean" },
    atFooter: { __type: "Boolean" },
    atHeader: { __type: "Boolean" },
    atMenu: { __type: "Boolean" },
    body: { __type: "String" },
    display: { __type: "Boolean" },
    group: { __type: "String" },
    hashtags: { __type: "[String!]" },
    href: { __type: "String!" },
    metaDescription: { __type: "String" },
    metaKeywords: { __type: "String" },
    metaTitle: { __type: "String" },
    name: { __type: "String!" },
    rewriteUri: { __type: "String" },
    shopId: { __type: "ID!" },
    sortIndex: { __type: "Int" },
  },
  PageViewsData: {
    __typename: { __type: "String!" },
    name: { __type: "String!" },
    value: { __type: "Float!" },
  },
  PaymentMethod: {
    __typename: { __type: "String!" },
    active: { __type: "Boolean!" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    credential: { __type: "ShopCredential!" },
    description: { __type: "String" },
    enabled: { __type: "Boolean!" },
    id: { __type: "ID!" },
    metadata: { __type: "[Metadata!]" },
    name: { __type: "String!" },
    provider: { __type: "PaymentProvider!" },
    shop: { __type: "CompanyShop!" },
    sortIndex: { __type: "Int!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
  },
  PaymentMethodConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[PaymentMethod!]!" },
    totalCount: { __type: "Int!" },
  },
  PaymentMethodCreateInput: {
    credentialId: { __type: "ID!" },
    description: { __type: "String" },
    metadata: { __type: "[MetadataInput!]" },
    name: { __type: "String!" },
    provider: { __type: "PaymentProvider!" },
    sortIndex: { __type: "Int" },
  },
  PaymentMethodFilterInput: {
    active: { __type: "FilterInput" },
    createdAt: { __type: "FilterInput" },
    credentialId: { __type: "FilterInput" },
    enabled: { __type: "FilterInput" },
    id: { __type: "FilterInput" },
    name: { __type: "FilterInput" },
    provider: { __type: "FilterInput" },
    updatedAt: { __type: "FilterInput" },
  },
  PaymentMethodUpdateInput: {
    description: { __type: "String" },
    metadata: { __type: "[MetadataInput!]" },
    name: { __type: "String" },
    sortIndex: { __type: "Int" },
  },
  PaymentSource: {
    __typename: { __type: "String!" },
    brand: { __type: "String!" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    expiryMonth: { __type: "Int!" },
    expiryYear: { __type: "Int!" },
    holderName: { __type: "String" },
    id: { __type: "ID!" },
    issuerCountry: { __type: "String" },
    last4: { __type: "String!" },
    provider: { __type: "String!" },
    sourceId: { __type: "String!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
  },
  PaymentSourceConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[PaymentSource!]!" },
    totalCount: { __type: "Int!" },
  },
  Permission: {
    __typename: { __type: "String!" },
    key: { __type: "String!" },
    value: { __type: "[String!]!" },
  },
  PermissionInput: {
    key: { __type: "String!" },
    value: { __type: "[String!]!" },
  },
  Process: {
    __typename: { __type: "String!" },
    createdAt: { __type: "AWSDateTime" },
    id: { __type: "ID!" },
    output: { __type: "AWSJSON" },
    status: { __type: "ProcessStatus!" },
    updatedAt: { __type: "AWSDateTime" },
  },
  ProductCombination: {
    __typename: { __type: "String!" },
    name: { __type: "String!" },
    options: { __type: "[ProductCombinationOption!]!" },
  },
  ProductCombinationInput: {
    name: { __type: "String!" },
    options: { __type: "[ProductCombinationOptionInput!]!" },
  },
  ProductCombinationOption: {
    __typename: { __type: "String!" },
    name: { __type: "String!" },
    priceAdjustment: { __type: "Float!" },
  },
  ProductCombinationOptionInput: {
    name: { __type: "String!" },
    priceAdjustment: { __type: "Float" },
  },
  ProductConnection: {
    __typename: { __type: "String!" },
    filters: { __type: "[AttributeFilter!]!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[ShopProduct!]!" },
    totalCount: { __type: "Int!" },
  },
  ProductDetail: {
    __typename: { __type: "String!" },
    content: { __type: "String" },
    title: { __type: "String" },
  },
  ProductDetailInput: {
    content: { __type: "String!" },
    title: { __type: "String!" },
  },
  ProductFilterInput: {
    active: { __type: "FilterInput" },
    attributes: { __type: "[AttributeFilterInput!]" },
    barcode: { __type: "FilterInput" },
    basePrice: { __type: "FilterInput" },
    collectionId: { __type: "FilterInput" },
    collectionIds: { __type: "FilterInput" },
    createdAt: { __type: "FilterInput" },
    display: { __type: "FilterInput" },
    hashtags: { __type: "FilterInput" },
    id: { __type: "FilterInput" },
    maxPrice: { __type: "FilterInput" },
    name: { __type: "FilterInput" },
    primarySortIndex: { __type: "FilterInput" },
    publishAt: { __type: "FilterInput" },
    publishThru: { __type: "FilterInput" },
    purchaseLimit: { __type: "FilterInput" },
    quantity: { __type: "FilterInput" },
    rewriteUri: { __type: "FilterInput" },
    salesChannels: { __type: "FilterInput" },
    search: { __type: "FilterInput" },
    sku: { __type: "FilterInput" },
    subtitle: { __type: "FilterInput" },
    updatedAt: { __type: "FilterInput" },
    variationBarcodes: { __type: "FilterInput" },
    variationCost: { __type: "FilterInput" },
    variationHashtags: { __type: "FilterInput" },
    variationQuantity: { __type: "FilterInput" },
    variationSkus: { __type: "FilterInput" },
    variationStockLocations: { __type: "FilterInput" },
  },
  ProductInput: {
    active: { __type: "Boolean" },
    attributes: { __type: "[ShopAttributeValueInput!]" },
    barcode: { __type: "String" },
    barcodes: { __type: "[String!]" },
    basePrice: { __type: "Float" },
    collectionCodes: { __type: "[String!]" },
    collectionIds: { __type: "[ID!]" },
    combinations: { __type: "[ProductCombinationInput!]" },
    description: { __type: "String" },
    details: { __type: "[ProductDetailInput!]" },
    display: { __type: "Boolean" },
    hasPublishDuration: { __type: "Boolean" },
    hashTagsArray: { __type: "[String!]" },
    hashtags: { __type: "[String!]" },
    images: { __type: "[AWSURL!]" },
    maxPrice: { __type: "Float" },
    medias: { __type: "[ProductMediaInput!]" },
    metaDescription: { __type: "String" },
    metaKeywords: { __type: "String" },
    metaTitle: { __type: "String" },
    metadata: { __type: "[MetadataInput!]" },
    metadataFields: { __type: "[CompanyMemberMetadataFieldInput!]" },
    modifiers: { __type: "[ProductModifierInput!]" },
    name: { __type: "String!" },
    primarySortIndex: { __type: "Int" },
    printDescription: { __type: "String" },
    publishAt: { __type: "AWSDateTime" },
    publishThru: { __type: "AWSDateTime" },
    purchaseLimit: { __type: "Float" },
    remarkSet: { __type: "String" },
    rewriteUri: { __type: "String" },
    salesChannels: { __type: "[SalesChannel!]" },
    shippingZoneIds: { __type: "[ID!]" },
    shopId: { __type: "ID!" },
    sku: { __type: "String!" },
    subtitle: { __type: "String" },
    variations: { __type: "[ProductVariationInput!]" },
  },
  ProductMedia: {
    __typename: { __type: "String!" },
    alt: { __type: "String" },
    combination: { __type: "[ProductVariationCombination!]" },
    id: { __type: "ID" },
    metadata: { __type: "[Metadata!]" },
    optimizedSrc: {
      __type: "AWSURL!",
      __args: {
        contentType: "MediaContentType",
        gravity: "MediaGravity",
        height: "Int",
        quality: "Int",
        width: "Int",
      },
    },
    src: { __type: "AWSURL!" },
  },
  ProductMediaInput: {
    alt: { __type: "String" },
    combination: { __type: "[ProductVariationCombinationInput!]" },
    id: { __type: "ID" },
    metadata: { __type: "[MetadataInput!]" },
    src: { __type: "AWSURL" },
  },
  ProductModifier: {
    __typename: { __type: "String!" },
    max: { __type: "Int" },
    min: { __type: "Int" },
    name: { __type: "String!" },
    options: { __type: "[ProductModifierOption!]!" },
  },
  ProductModifierInput: {
    max: { __type: "Int" },
    min: { __type: "Int" },
    name: { __type: "String!" },
    options: { __type: "[ProductCombinationOptionInput!]!" },
  },
  ProductModifierOption: {
    __typename: { __type: "String!" },
    name: { __type: "String!" },
    priceAdjustment: { __type: "Float!" },
  },
  ProductModifierOptionInput: {
    name: { __type: "String!" },
    priceAdjustment: { __type: "Float" },
  },
  ProductModifierValue: {
    __typename: { __type: "String!" },
    metadataFields: { __type: "[CompanyMemberMetadataField!]" },
    modifierId: { __type: "ID!" },
    modifiers: { __type: "[ProductModifier!]!" },
    sortIndex: { __type: "Int" },
  },
  ProductSales: {
    __typename: { __type: "String!" },
    amount: { __type: "Float!" },
    avgCount: { __type: "Float!" },
    avgPrice: { __type: "Float!" },
    barcode: { __type: "String" },
    barcodes: { __type: "[String!]" },
    conversionRate: { __type: "Float!" },
    count: { __type: "Int!" },
    countries: { __type: "[ChartData!]!" },
    hitRate: { __type: "Int!" },
    id: { __type: "ID!" },
    medias: { __type: "[Media!]", __args: { shopId: "ID!" } },
    memberAmount: { __type: "Float!" },
    memberLevelAmounts: { __type: "[ChartData!]!" },
    memberLevels: { __type: "[ChartData!]!" },
    name: { __type: "String!", __args: { shopId: "ID" } },
    nonMemberAmount: { __type: "Float!" },
    orderCount: { __type: "Int!" },
    pageView: { __type: "Int!" },
    salesPoints: { __type: "[ChartData!]!" },
    salesRecords: {
      __type: "ProductSalesRecordConnection!",
      __args: {
        cursor: "Int",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
      },
    },
    salesTrends: { __type: "[LineChartData!]!" },
    shopId: { __type: "ID!" },
    sku: { __type: "String!" },
  },
  ProductSalesConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[ProductSales!]!" },
    totalCount: { __type: "Int!" },
  },
  ProductSalesRecord: {
    __typename: { __type: "String!" },
    amount: { __type: "Float!" },
    createdAt: { __type: "AWSDateTime!" },
    productBarcode: { __type: "String" },
    productBarcodes: { __type: "[String!]" },
    productId: { __type: "ID!" },
    productName: { __type: "String!" },
    productSku: { __type: "String!" },
    quantity: { __type: "Int!" },
    referenceNo: { __type: "String!" },
    shopId: { __type: "ID!" },
    shopName: { __type: "String!" },
    unitPrice: { __type: "Float!" },
    variationBarcode: { __type: "String" },
    variationBarcodes: { __type: "[String!]" },
    variationId: { __type: "ID" },
    variationSku: { __type: "String" },
  },
  ProductSalesRecordConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[ProductSalesRecord!]!" },
    totalCount: { __type: "Int!" },
  },
  ProductUnion: {
    __typename: { __type: "String!" },
    $on: { __type: "$ProductUnion!" },
  },
  ProductUnionConnection: {
    __typename: { __type: "String!" },
    filters: { __type: "[AttributeFilter!]!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[ProductUnion!]!" },
    totalCount: { __type: "Int!" },
  },
  ProductUnionFilterInput: {
    active: { __type: "FilterInput" },
    attributes: { __type: "[AttributeFilterInput!]" },
    barcode: { __type: "FilterInput" },
    basePrice: { __type: "FilterInput" },
    collectionIds: { __type: "FilterInput" },
    createdAt: { __type: "FilterInput" },
    hashtags: { __type: "FilterInput" },
    id: { __type: "FilterInput" },
    maxPrice: { __type: "FilterInput" },
    name: { __type: "FilterInput" },
    primarySortIndex: { __type: "FilterInput" },
    publishAt: { __type: "FilterInput" },
    publishThru: { __type: "FilterInput" },
    sku: { __type: "FilterInput" },
    subtitle: { __type: "FilterInput" },
    updatedAt: { __type: "FilterInput" },
  },
  ProductVariation: {
    __typename: { __type: "String!" },
    active: { __type: "Boolean!" },
    averageCost: { __type: "Float!" },
    barcode: { __type: "String" },
    barcodes: { __type: "[String]" },
    combination: { __type: "[ProductVariationCombination!]!" },
    cost: { __type: "Float!" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    display: { __type: "Boolean" },
    hashtags: { __type: "[String]" },
    id: { __type: "ID!" },
    ignoreStock: { __type: "Boolean!" },
    images: { __type: "[AWSURL!]" },
    lowStock: { __type: "ReminderSetting" },
    medias: { __type: "[Media!]" },
    product: { __type: "ShopProduct" },
    productId: { __type: "String!" },
    quantities: {
      __type: "[WarehouseQuantity]!",
      __args: { warehouseIds: "[ID!]" },
    },
    quantity: { __type: "Int!", __args: { warehouseId: "ID" } },
    sku: { __type: "String!" },
    stockLocations: { __type: "[String]" },
    suggestedRetailPrice: { __type: "Float" },
    unitPrice: { __type: "Float!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
    weight: { __type: "Float" },
  },
  ProductVariationCombination: {
    __typename: { __type: "String!" },
    name: { __type: "String!" },
    option: { __type: "String!" },
  },
  ProductVariationCombinationInput: {
    name: { __type: "String!" },
    option: { __type: "String!" },
  },
  ProductVariationInput: {
    active: { __type: "Boolean" },
    barcode: { __type: "String" },
    barcodes: { __type: "[String!]" },
    combination: { __type: "[ProductVariationCombinationInput!]" },
    cost: { __type: "Float!" },
    display: { __type: "Boolean" },
    hashtags: { __type: "[String!]" },
    id: { __type: "ID" },
    ignoreStock: { __type: "Boolean" },
    images: { __type: "[AWSURL!]" },
    ingredients: { __type: "ID" },
    lowStock: { __type: "ReminderSettingInput" },
    medias: { __type: "[MediaInput!]" },
    quantity: { __type: "Int" },
    sku: { __type: "String!" },
    stockLocations: { __type: "[String!]" },
    suggestedRetailPrice: { __type: "Float" },
    unitPrice: { __type: "Float!" },
    weight: { __type: "Float" },
  },
  ProfileUpdateInput: {
    familyName: { __type: "String" },
    givenName: { __type: "String" },
    metadata: { __type: "[MetadataInput!]" },
    name: { __type: "String" },
    nickname: { __type: "String" },
    picture: { __type: "AWSURL" },
    title: { __type: "String" },
  },
  ReceivePurchaseCreateInput: {
    deviceId: { __type: "ID" },
    items: { __type: "[ReceivePurchaseItemInput!]!" },
    metadata: { __type: "[MetadataInput!]" },
    referenceNo: { __type: "String" },
    remark: { __type: "String" },
    salespersonId: { __type: "ID" },
    shopId: { __type: "ID" },
    staffId: { __type: "ID" },
    warehouseId: { __type: "ID!" },
  },
  ReceivePurchaseFilterInput: {
    active: { __type: "FilterInput" },
    companyId: { __type: "FilterInput" },
    createdAt: { __type: "FilterInput" },
    id: { __type: "FilterInput" },
    remark: { __type: "FilterInput" },
    staffId: { __type: "FilterInput" },
    status: { __type: "FilterInput" },
    updatedAt: { __type: "FilterInput" },
    warehouseId: { __type: "FilterInput" },
  },
  ReceivePurchaseItemInput: {
    cost: { __type: "Float!" },
    id: { __type: "ID" },
    quantity: { __type: "Int!" },
    sku: { __type: "ID!" },
  },
  ReceivePurchaseUpdateInput: {
    deviceId: { __type: "ID" },
    items: { __type: "[ReceivePurchaseItemInput!]" },
    metadata: { __type: "[MetadataInput!]" },
    remark: { __type: "String" },
    salespersonId: { __type: "ID" },
    shopId: { __type: "ID" },
    staffId: { __type: "ID" },
    warehouseId: { __type: "ID" },
  },
  ReminderSetting: {
    __typename: { __type: "String!" },
    quantity: { __type: "Int" },
    remind: { __type: "Boolean!" },
  },
  ReminderSettingInput: {
    quantity: { __type: "Int" },
    remind: { __type: "Boolean!" },
  },
  ReturnNoteCreateInput: {
    items: { __type: "[ReturnNoteItemSetInput!]!" },
    metadata: { __type: "[MetadataInput!]" },
    orderId: { __type: "ID!" },
    referenceNo: { __type: "String" },
    remark: { __type: "String" },
    shopId: { __type: "ID!" },
  },
  ReturnNoteFilterInput: {
    createdAt: { __type: "FilterInput" },
    id: { __type: "FilterInput" },
    orderId: { __type: "FilterInput" },
    orderReferenceNo: { __type: "FilterInput" },
    orderShopId: { __type: "FilterInput" },
    productId: { __type: "FilterInput" },
    productVariationId: { __type: "FilterInput" },
    referenceNo: { __type: "FilterInput" },
    remark: { __type: "FilterInput" },
    shopId: { __type: "FilterInput" },
    status: { __type: "FilterInput" },
    updatedAt: { __type: "FilterInput" },
  },
  ReturnNoteItem: {
    __typename: { __type: "String!" },
    active: { __type: "Boolean!" },
    bundleProductOptionId: { __type: "ID" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    description: { __type: "String!" },
    id: { __type: "ID!" },
    metadata: { __type: "[Metadata!]" },
    order: { __type: "ShopOrder!" },
    orderId: { __type: "ID!" },
    orderItem: { __type: "OrderItem!" },
    orderItemId: { __type: "ID!" },
    productId: { __type: "ID" },
    productVariationId: { __type: "ID" },
    quantity: { __type: "Int!" },
    reason: { __type: "String" },
    remark: { __type: "String" },
    resalable: { __type: "Boolean!" },
    returnNote: { __type: "ShopReturnNote!" },
    returnNoteId: { __type: "ID!" },
    sku: { __type: "String!" },
    sortIndex: { __type: "Int!" },
    unitPrice: { __type: "Float!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
    warehouse: { __type: "CompanyWarehouse" },
    warehouseId: { __type: "ID" },
  },
  ReturnNoteItemConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[ReturnNoteItem!]!" },
    totalCount: { __type: "Int!" },
  },
  ReturnNoteItemFilterInput: {
    createdAt: { __type: "FilterInput" },
    description: { __type: "FilterInput" },
    quantity: { __type: "FilterInput" },
    reason: { __type: "FilterInput" },
    resalable: { __type: "FilterInput" },
    sku: { __type: "FilterInput" },
    unitPrice: { __type: "FilterInput" },
    updatedAt: { __type: "FilterInput" },
  },
  ReturnNoteItemSetInput: {
    bundleProductOptionId: { __type: "ID" },
    id: { __type: "ID" },
    metadata: { __type: "[MetadataInput!]" },
    orderItemId: { __type: "ID!" },
    reason: { __type: "String" },
    remark: { __type: "String" },
    resalable: { __type: "Boolean!" },
    sortIndex: { __type: "Int" },
  },
  ReturnNoteUpdateInput: {
    items: { __type: "[ReturnNoteItemSetInput!]" },
    metadata: { __type: "[MetadataInput!]" },
    remark: { __type: "String" },
  },
  Sales: {
    __typename: { __type: "String!" },
    amount: { __type: "Float!" },
    count: { __type: "Int!" },
  },
  SalesByMethods: {
    __typename: { __type: "String!" },
    amount: { __type: "Float!" },
    count: { __type: "Int!" },
    name: { __type: "String!" },
  },
  SalesFilterInput: {
    deviceId: { __type: "String" },
    orderStatus: { __type: "ShopOrderStatus" },
    paymentStatus: { __type: "ShopOrderInvoiceStatus" },
    shippingStatus: { __type: "ShopOrderDeliveryNoteStatus" },
    startedAt: { __type: "AWSDateTime" },
    startedThru: { __type: "AWSDateTime" },
  },
  SalespersonSales: {
    __typename: { __type: "String!" },
    amount: { __type: "Float!" },
    avgAmount: { __type: "Float!" },
    avgCount: { __type: "Float!" },
    avgPrice: { __type: "Float!" },
    code: { __type: "String!" },
    count: { __type: "Int!" },
    id: { __type: "ID!" },
    name: { __type: "String!" },
    orderCount: { __type: "Int!" },
    salesRecords: {
      __type: "SalespersonSalesRecordConnection!",
      __args: {
        cursor: "Int",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
      },
    },
    salesTrends: { __type: "[LineChartData!]!" },
  },
  SalespersonSalesConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[SalespersonSales!]!" },
    totalCount: { __type: "Int!" },
  },
  SalespersonSalesRecord: {
    __typename: { __type: "String!" },
    amount: { __type: "Float!" },
    count: { __type: "Int!" },
    createdAt: { __type: "AWSDateTime!" },
    orderId: { __type: "ID!" },
    referenceNo: { __type: "String!" },
    shopId: { __type: "ID!" },
    shopName: { __type: "String!" },
  },
  SalespersonSalesRecordConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[SalespersonSalesRecord!]!" },
    totalCount: { __type: "Int!" },
  },
  ServiceApplicationConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[AgencyServiceApplication!]!" },
    totalCount: { __type: "Int!" },
  },
  ServiceBundleCreateInput: {
    active: { __type: "Boolean" },
    barcode: { __type: "String" },
    collectionCodes: { __type: "[String!]" },
    description: { __type: "String" },
    hashtags: { __type: "[String!]" },
    ignoreStock: { __type: "Boolean" },
    medias: { __type: "[MediaInput!]" },
    metaDescription: { __type: "String" },
    metaKeywords: { __type: "String" },
    metaTitle: { __type: "String" },
    metadata: { __type: "[MetadataInput!]" },
    metadataFields: { __type: "[CompanyMemberMetadataFieldInput!]" },
    modifiers: { __type: "[ServiceBundleModifierInput!]" },
    name: { __type: "String!" },
    primarySortIndex: { __type: "Int" },
    publishAt: { __type: "AWSDateTime" },
    publishThru: { __type: "AWSDateTime" },
    quantity: { __type: "Int" },
    rewriteUri: { __type: "String" },
    services: { __type: "[ServiceSetInput!]!" },
    shopId: { __type: "ID!" },
    sku: { __type: "String!" },
    slotRequiredAtCheckout: { __type: "Boolean!" },
    subtitle: { __type: "String" },
    suggestedRetailPrice: { __type: "Float" },
    unitPrice: { __type: "Float!" },
    validationStrategy: { __type: "ServiceValidationStrategy" },
  },
  ServiceBundleFilterInput: {
    active: { __type: "FilterInput" },
    createdAt: { __type: "FilterInput" },
    hashtags: { __type: "FilterInput" },
    metaKeywords: { __type: "FilterInput" },
    metaTitle: { __type: "FilterInput" },
    name: { __type: "FilterInput" },
    primarySortIndex: { __type: "FilterInput" },
    publishAt: { __type: "FilterInput" },
    publishThru: { __type: "FilterInput" },
    rewriteUri: { __type: "FilterInput" },
    shopId: { __type: "FilterInput" },
    sku: { __type: "FilterInput" },
    slotRequiredAtCheckout: { __type: "FilterInput" },
    subtitle: { __type: "FilterInput" },
    suggestedRetailPrice: { __type: "FilterInput" },
    unitPrice: { __type: "FilterInput" },
    updatedAt: { __type: "FilterInput" },
    validationStrategy: { __type: "FilterInput" },
  },
  ServiceBundleModifier: {
    __typename: { __type: "String!" },
    max: { __type: "Int" },
    min: { __type: "Int" },
    name: { __type: "String!" },
    options: { __type: "[ServiceBundleModifierOption!]!" },
  },
  ServiceBundleModifierInput: {
    max: { __type: "Int" },
    min: { __type: "Int" },
    name: { __type: "String!" },
    options: { __type: "[ServiceBundleModifierOptionInput!]!" },
  },
  ServiceBundleModifierOption: {
    __typename: { __type: "String!" },
    active: { __type: "Boolean" },
    minutesAdjustment: { __type: "Int" },
    name: { __type: "String!" },
    priceAdjustment: { __type: "Float!" },
    suggestedRetailPrice: { __type: "Float" },
  },
  ServiceBundleModifierOptionInput: {
    active: { __type: "Boolean" },
    minutesAdjustment: { __type: "Int" },
    name: { __type: "String!" },
    priceAdjustment: { __type: "Float!" },
    suggestedRetailPrice: { __type: "Float" },
  },
  ServiceBundleUpdateInput: {
    active: { __type: "Boolean" },
    barcode: { __type: "String" },
    collectionCodes: { __type: "[String!]" },
    description: { __type: "String" },
    hashtags: { __type: "[String!]" },
    ignoreStock: { __type: "Boolean" },
    medias: { __type: "[MediaInput!]" },
    metaDescription: { __type: "String" },
    metaKeywords: { __type: "String" },
    metaTitle: { __type: "String" },
    metadata: { __type: "[MetadataInput!]" },
    metadataFields: { __type: "[CompanyMemberMetadataFieldInput!]" },
    modifiers: { __type: "[ServiceBundleModifierInput!]" },
    name: { __type: "String" },
    primarySortIndex: { __type: "Int" },
    publishAt: { __type: "AWSDateTime" },
    publishThru: { __type: "AWSDateTime" },
    quantity: { __type: "Int" },
    rewriteUri: { __type: "String" },
    services: { __type: "[ServiceSetInput!]" },
    sku: { __type: "String" },
    subtitle: { __type: "String" },
    suggestedRetailPrice: { __type: "Float" },
    unitPrice: { __type: "Float" },
    validationStrategy: { __type: "ServiceValidationStrategy" },
  },
  ServiceFilterInput: {
    active: { __type: "FilterInput" },
    autoConfirm: { __type: "FilterInput" },
    code: { __type: "FilterInput" },
    createdAt: { __type: "FilterInput" },
    daysOfWeek: { __type: "FilterInput" },
    durationMins: { __type: "FilterInput" },
    intervalMins: { __type: "FilterInput" },
    name: { __type: "FilterInput" },
    reserveMins: { __type: "FilterInput" },
    serviceBundleId: { __type: "FilterInput" },
    serviceLocationName: { __type: "FilterInput" },
    showStartTimeOnly: { __type: "FilterInput" },
    sortIndex: { __type: "FilterInput" },
    startedAt: { __type: "FilterInput" },
    startedThru: { __type: "FilterInput" },
    updatedAt: { __type: "FilterInput" },
  },
  ServiceLocationCreateInput: {
    address: { __type: "AddressInput" },
    medias: { __type: "[MediaInput!]" },
    metadata: { __type: "[MetadataInput!]" },
    name: { __type: "String!" },
    rules: { __type: "[ServiceLocationRuleSetInput!]" },
    shopId: { __type: "ID!" },
    sortIndex: { __type: "Int" },
  },
  ServiceLocationFilterInput: {
    addressDistrict: { __type: "FilterInput" },
    createdAt: { __type: "FilterInput" },
    name: { __type: "FilterInput" },
    sortIndex: { __type: "FilterInput" },
    updatedAt: { __type: "FilterInput" },
  },
  ServiceLocationRule: {
    __typename: { __type: "String!" },
    active: { __type: "Boolean!" },
    capacity: { __type: "Int" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    daysOfWeek: { __type: "[String!]" },
    id: { __type: "ID!" },
    location: { __type: "ShopServiceLocation!" },
    metadata: { __type: "[Metadata!]" },
    sortIndex: { __type: "Int!" },
    startedAt: { __type: "AWSDateTime!" },
    startedThru: { __type: "AWSDateTime!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
  },
  ServiceLocationRuleConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[ServiceLocationRule!]!" },
    totalCount: { __type: "Int!" },
  },
  ServiceLocationRuleCreateInput: {
    active: { __type: "Boolean" },
    capacity: { __type: "Int" },
    daysOfWeek: { __type: "[String!]" },
    metadata: { __type: "[MetadataInput!]" },
    serviceLocationId: { __type: "ID!" },
    sortIndex: { __type: "Int" },
    startedAt: { __type: "AWSDateTime!" },
    startedThru: { __type: "AWSDateTime!" },
  },
  ServiceLocationRuleFilterInput: {
    active: { __type: "FilterInput" },
    capacity: { __type: "FilterInput" },
    createdAt: { __type: "FilterInput" },
    daysOfWeek: { __type: "FilterInput" },
    sortIndex: { __type: "FilterInput" },
    startedAt: { __type: "FilterInput" },
    startedThru: { __type: "FilterInput" },
    updatedAt: { __type: "FilterInput" },
  },
  ServiceLocationRuleSetInput: {
    active: { __type: "Boolean" },
    capacity: { __type: "Int" },
    daysOfWeek: { __type: "[String!]" },
    id: { __type: "ID" },
    metadata: { __type: "[MetadataInput!]" },
    sortIndex: { __type: "Int" },
    startedAt: { __type: "AWSDateTime!" },
    startedThru: { __type: "AWSDateTime!" },
  },
  ServiceLocationRuleUpdateInput: {
    active: { __type: "Boolean" },
    capacity: { __type: "Int" },
    daysOfWeek: { __type: "[String!]" },
    metadata: { __type: "[MetadataInput!]" },
    sortIndex: { __type: "Int" },
    startedAt: { __type: "AWSDateTime" },
    startedThru: { __type: "AWSDateTime" },
  },
  ServiceLocationSlot: {
    __typename: { __type: "String!" },
    appointments: {
      __type: "ShopAppointmentConnection!",
      __args: {
        cursor: "Int",
        filter: "ShopAppointmentFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    capacity: { __type: "Int" },
    id: { __type: "ID!" },
    startedAt: { __type: "AWSDateTime!" },
    startedThru: { __type: "AWSDateTime!" },
  },
  ServiceLocationSlotConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[ServiceLocationSlot!]!" },
    totalCount: { __type: "Int!" },
  },
  ServiceLocationUpdateInput: {
    address: { __type: "AddressInput" },
    medias: { __type: "[MediaInput!]" },
    metadata: { __type: "[MetadataInput!]" },
    name: { __type: "String" },
    rules: { __type: "[ServiceLocationRuleSetInput!]" },
    sortIndex: { __type: "Int" },
  },
  ServiceSetInput: {
    active: { __type: "Boolean" },
    autoConfirm: { __type: "Boolean" },
    availableUntil: { __type: "DurationInput" },
    code: { __type: "String" },
    daysOfWeek: { __type: "[String!]" },
    description: { __type: "String" },
    durationMins: { __type: "Int!" },
    id: { __type: "ID" },
    intervalMins: { __type: "Int!" },
    medias: { __type: "[MediaInput!]" },
    metadata: { __type: "[MetadataInput!]" },
    name: { __type: "String!" },
    outboundSkus: { __type: "[String!]" },
    reserveMins: { __type: "Int!" },
    serviceLocationIds: { __type: "[ID!]!" },
    serviceLocationName: { __type: "String" },
    showStartTimeOnly: { __type: "Boolean" },
    sortIndex: { __type: "Int" },
    startedAt: { __type: "AWSDateTime!" },
    startedThru: { __type: "AWSDateTime!" },
    validSince: { __type: "DurationInput" },
    validUntil: { __type: "DurationInput" },
  },
  ServiceSlot: {
    __typename: { __type: "String!" },
    availableCapacity: { __type: "Int" },
    capacity: { __type: "Int" },
    id: { __type: "ID!" },
    serviceLocationId: { __type: "ID!" },
    startedAt: { __type: "AWSDateTime!" },
    startedThru: { __type: "AWSDateTime!" },
  },
  ServiceSlotConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[ServiceSlot!]!" },
    totalCount: { __type: "Int!" },
  },
  Session: {
    __typename: { __type: "String!" },
    createdAt: { __type: "AWSDateTime!" },
    id: { __type: "ID!" },
    updatedAt: { __type: "AWSDateTime!" },
    user: { __type: "User!" },
  },
  SessionToken: {
    __typename: { __type: "String!" },
    access_token: { __type: "String!" },
    expires_in: { __type: "Int!" },
    id_token: { __type: "String" },
    refresh_token: { __type: "String" },
    scope: { __type: "String" },
    token_type: { __type: "String!" },
  },
  ShippingZoneAddress: {
    __typename: { __type: "String!" },
    active: { __type: "Boolean!" },
    city: { __type: "String" },
    country: { __type: "Country" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    description: { __type: "String" },
    district: { __type: "String" },
    email: { __type: "String" },
    id: { __type: "ID!" },
    lines: { __type: "[String!]" },
    metadata: { __type: "[Metadata!]" },
    name: { __type: "String" },
    person: { __type: "String" },
    postalCode: { __type: "String" },
    sortIndex: { __type: "Int" },
    state: { __type: "String" },
    tel: { __type: "String" },
    type: { __type: "ShippingZoneAddressType!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
  },
  ShippingZoneAddressConnection: {
    __typename: { __type: "String!" },
    availableDistricts: { __type: "[String!]" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[ShippingZoneAddress!]!" },
    totalCount: { __type: "Int!" },
  },
  ShippingZoneAddressFilterInput: {
    active: { __type: "FilterInput" },
    city: { __type: "FilterInput" },
    country: { __type: "FilterInput" },
    createdAt: { __type: "FilterInput" },
    description: { __type: "FilterInput" },
    district: { __type: "FilterInput" },
    email: { __type: "FilterInput" },
    id: { __type: "FilterInput" },
    name: { __type: "FilterInput" },
    person: { __type: "FilterInput" },
    postalCode: { __type: "FilterInput" },
    sortIndex: { __type: "FilterInput" },
    state: { __type: "FilterInput" },
    tel: { __type: "FilterInput" },
    type: { __type: "FilterInput" },
    updatedAt: { __type: "FilterInput" },
  },
  ShippingZoneAddressInput: {
    city: { __type: "String" },
    country: { __type: "Country" },
    description: { __type: "String" },
    district: { __type: "String" },
    email: { __type: "String" },
    id: { __type: "ID" },
    lines: { __type: "[String!]" },
    metadata: { __type: "[MetadataInput!]" },
    name: { __type: "String" },
    person: { __type: "String" },
    postalCode: { __type: "String" },
    sortIndex: { __type: "Int" },
    state: { __type: "String" },
    tel: { __type: "String" },
    type: { __type: "ShippingZoneAddressType" },
  },
  ShippingZoneExpressions: {
    __typename: { __type: "String!" },
    maxWeight: { __type: "Float!" },
    unit: { __type: "Int!" },
    unitPrice: { __type: "Float!" },
  },
  ShippingZoneExpressionsInput: {
    maxWeight: { __type: "Float" },
    unit: { __type: "Int!" },
    unitPrice: { __type: "Float!" },
  },
  ShopAddOnProduct: {
    __typename: { __type: "String!" },
    active: { __type: "Boolean!" },
    amount: { __type: "Float" },
    barcode: { __type: "String" },
    cost: { __type: "Float!" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    description: { __type: "String" },
    hashtags: { __type: "[String!]" },
    id: { __type: "ID!" },
    ignoreStock: { __type: "Boolean!" },
    medias: { __type: "[Media!]" },
    name: { __type: "String!" },
    product: { __type: "ShopProduct" },
    productId: { __type: "ID" },
    publishAt: { __type: "AWSDateTime" },
    publishThru: { __type: "AWSDateTime" },
    purchaseLimit: { __type: "Int!" },
    quantity: { __type: "Int!", __args: { warehouseId: "ID" } },
    sku: { __type: "String!" },
    type: { __type: "AddOnProductType!" },
    unitPrice: { __type: "Float!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
    weight: { __type: "Float!" },
  },
  ShopAddOnProductConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[ShopAddOnProduct!]!" },
    totalCount: { __type: "Int!" },
  },
  ShopAddress: {
    __typename: { __type: "String!" },
    city: { __type: "String" },
    country: { __type: "Country" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    default: { __type: "Boolean!" },
    district: { __type: "String" },
    email: { __type: "String" },
    id: { __type: "ID!" },
    lines: { __type: "[String!]" },
    name: { __type: "String" },
    person: { __type: "String" },
    postalCode: { __type: "String" },
    state: { __type: "String" },
    tel: { __type: "String" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
  },
  ShopAddressInput: {
    city: { __type: "String!" },
    country: { __type: "Country!" },
    district: { __type: "String" },
    email: { __type: "String!" },
    isDefault: { __type: "Boolean!" },
    lines: { __type: "[String!]" },
    name: { __type: "String" },
    person: { __type: "String!" },
    postalCode: { __type: "String" },
    shopId: { __type: "ID!" },
    state: { __type: "String" },
    tel: { __type: "String!" },
  },
  ShopAnalysisTool: {
    __typename: { __type: "String!" },
    active: { __type: "Boolean!" },
    context: { __type: "String!" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    id: { __type: "ID!" },
    shop: { __type: "CompanyShop!" },
    type: { __type: "String!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
  },
  ShopAnalysisToolConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[ShopAnalysisTool!]!" },
    totalCount: { __type: "Int!" },
  },
  ShopAppointment: {
    __typename: { __type: "String!" },
    active: { __type: "Boolean!" },
    attendanceStatus: { __type: "AppointmentAttendanceStatus!" },
    attendedAt: { __type: "AWSDateTime" },
    contactAddress: { __type: "Address" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    customer: { __type: "Customer" },
    id: { __type: "ID!" },
    isBookable: { __type: "Boolean" },
    location: { __type: "ShopServiceLocation" },
    metadata: { __type: "[Metadata!]" },
    order: { __type: "ShopOrder" },
    orderItem: { __type: "OrderItem" },
    referenceNo: { __type: "String!" },
    relatedAppointments: {
      __type: "ShopAppointmentConnection!",
      __args: {
        cursor: "Int",
        filter: "ShopAppointmentFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    remark: { __type: "String" },
    service: { __type: "ShopService!" },
    serviceBundle: { __type: "ShopServiceBundle" },
    shop: { __type: "CompanyShop!" },
    startedAt: { __type: "AWSDateTime" },
    startedThru: { __type: "AWSDateTime" },
    status: { __type: "AppointmentStatus!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
  },
  ShopAppointmentConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[ShopAppointment!]!" },
    totalCount: { __type: "Int!" },
  },
  ShopAppointmentFilterInput: {
    active: { __type: "FilterInput" },
    attendanceStatus: { __type: "FilterInput" },
    attendedAt: { __type: "FilterInput" },
    companyId: { __type: "FilterInput" },
    createdAt: { __type: "FilterInput" },
    customerId: { __type: "FilterInput" },
    deliveryNoteId: { __type: "FilterInput" },
    deliveryNoteItemId: { __type: "FilterInput" },
    orderId: { __type: "FilterInput" },
    orderItemId: { __type: "FilterInput" },
    referenceNo: { __type: "FilterInput" },
    remark: { __type: "FilterInput" },
    serviceBundleId: { __type: "FilterInput" },
    serviceId: { __type: "FilterInput" },
    serviceLocationId: { __type: "FilterInput" },
    shopId: { __type: "FilterInput" },
    startedAt: { __type: "FilterInput" },
    startedThru: { __type: "FilterInput" },
    status: { __type: "FilterInput" },
    updatedAt: { __type: "FilterInput" },
  },
  ShopAttendance: {
    __typename: { __type: "String!" },
    company: { __type: "Company!" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    direction: { __type: "AttendanceDirection!" },
    id: { __type: "ID!" },
    metadata: { __type: "[Metadata!]" },
    shop: { __type: "CompanyShop!" },
    staff: { __type: "CompanyStaff!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
  },
  ShopAttribute: {
    __typename: { __type: "String!" },
    active: { __type: "Boolean!" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    id: { __type: "ID!" },
    key: { __type: "String!" },
    metadata: { __type: "[Metadata!]" },
    name: { __type: "String!" },
    sortIndex: { __type: "Int!" },
    system: { __type: "Boolean!" },
    type: { __type: "ShopAttributeType!" },
    typename: { __type: "ShopAttributeTypename!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
  },
  ShopAttributeConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[ShopAttribute!]!" },
    totalCount: { __type: "Int!" },
  },
  ShopAttributeCreateInput: {
    active: { __type: "Boolean" },
    key: { __type: "String!" },
    metadata: { __type: "[MetadataInput!]" },
    name: { __type: "String!" },
    shopId: { __type: "ID!" },
    sortIndex: { __type: "Int" },
    type: { __type: "ShopAttributeType!" },
    typename: { __type: "ShopAttributeTypename!" },
  },
  ShopAttributeFilterInput: {
    active: { __type: "FilterInput" },
    createdAt: { __type: "FilterInput" },
    key: { __type: "FilterInput" },
    name: { __type: "FilterInput" },
    sortIndex: { __type: "FilterInput" },
    system: { __type: "FilterInput" },
    type: { __type: "FilterInput" },
    typename: { __type: "FilterInput" },
    updatedAt: { __type: "FilterInput" },
  },
  ShopAttributeUpdateInput: {
    active: { __type: "Boolean" },
    metadata: { __type: "[MetadataInput!]" },
    name: { __type: "String" },
    sortIndex: { __type: "Int" },
  },
  ShopAttributeValue: {
    __typename: { __type: "String!" },
    attributeId: { __type: "ID!" },
    id: { __type: "ID!" },
    key: { __type: "String!" },
    type: { __type: "ShopAttributeType!" },
    value: { __type: "String!" },
  },
  ShopAttributeValueInput: {
    attributeId: { __type: "ID" },
    id: { __type: "ID" },
    key: { __type: "String" },
    value: { __type: "String!" },
  },
  ShopAuthenticationCredentialInput: {
    active: { __type: "Boolean" },
    description: { __type: "String" },
    id: { __type: "ID" },
    identity: { __type: "String" },
    meta: { __type: "ShopCredentialMetaInput" },
    name: { __type: "String" },
    platform: { __type: "ShopAuthenticationCredentialPlatform!" },
    secret: { __type: "String" },
    type: { __type: "ShopCredentialType" },
  },
  ShopBundleProduct: {
    __typename: { __type: "String!" },
    active: { __type: "Boolean!" },
    ancestorCollectionCodes: { __type: "[String!]" },
    barcode: { __type: "String" },
    collectionCodes: { __type: "[String!]" },
    collections: {
      __type: "CollectionConnection!",
      __args: {
        cursor: "Int",
        filter: "CollectionFilterInput",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
      },
    },
    cost: { __type: "Float!" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    description: { __type: "String" },
    display: { __type: "Boolean" },
    hashtags: { __type: "[String!]" },
    id: { __type: "ID!" },
    ignoreStock: { __type: "Boolean!" },
    medias: { __type: "[Media!]" },
    metaDescription: { __type: "String" },
    metaKeywords: { __type: "String" },
    metaTitle: { __type: "String" },
    metadata: { __type: "[Metadata!]!" },
    name: { __type: "String!" },
    primarySortIndex: { __type: "Int" },
    publishAt: { __type: "AWSDateTime" },
    publishThru: { __type: "AWSDateTime" },
    quantity: { __type: "Int!", __args: { warehouseId: "ID" } },
    rewriteUri: { __type: "String" },
    salesChannels: { __type: "[SalesChannel!]" },
    sections: { __type: "[ShopBundleProductSection!]" },
    shippingZones: { __type: "[ShopShippingZone!]!" },
    shop: { __type: "CompanyShop!" },
    sku: { __type: "String" },
    subtitle: { __type: "String" },
    suggestedRetailPrice: { __type: "Float!" },
    unitPrice: { __type: "Float!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
    weight: { __type: "Float!" },
    wishItems: {
      __type: "WishItemConnection!",
      __args: { cursor: "Int", limits: "Int" },
    },
  },
  ShopBundleProductConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[ShopBundleProduct!]!" },
    totalCount: { __type: "Int!" },
  },
  ShopBundleProductOption: {
    __typename: { __type: "String!" },
    collection: { __type: "ShopCollection" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    hashtags: { __type: "[String!]" },
    id: { __type: "ID!" },
    price: { __type: "Float!" },
    product: { __type: "ShopProduct" },
    products: {
      __type: "ProductConnection!",
      __args: {
        cursor: "Int",
        filter: "ProductFilterInput",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
      },
    },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
  },
  ShopBundleProductOptionInput: {
    collectionId: { __type: "ID" },
    hashtags: { __type: "[String!]" },
    id: { __type: "ID" },
    price: { __type: "Float!" },
    productId: { __type: "ID" },
  },
  ShopBundleProductSection: {
    __typename: { __type: "String!" },
    description: { __type: "String" },
    id: { __type: "ID" },
    label: { __type: "String!" },
    options: { __type: "[ShopBundleProductOption!]!" },
  },
  ShopBundleProductSectionInput: {
    description: { __type: "String" },
    id: { __type: "ID" },
    label: { __type: "String!" },
    options: { __type: "[ShopBundleProductOptionInput!]!" },
  },
  ShopCampaign: {
    __typename: { __type: "String!" },
    actionResults: { __type: "[CampaignActionResult!]!" },
    actionType: { __type: "CampaignActionType!" },
    actionTypes: { __type: "[CampaignActionType!]!" },
    actions: { __type: "[CampaignAction!]!" },
    active: { __type: "Boolean" },
    content: { __type: "String!" },
    coupon: { __type: "CompanyCoupon" },
    coupons: { __type: "[CompanyCoupon!]" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    excludedHashtags: { __type: "[String!]" },
    excludedMatchMode: { __type: "CampaignMatchMode!" },
    id: { __type: "ID!" },
    matchMode: { __type: "CampaignMatchMode" },
    name: { __type: "String" },
    recipients: {
      __type: "CampaignRecipientConnection!",
      __args: {
        cursor: "Int",
        filter: "CampaignRecipientFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    result: { __type: "CampaignResult!" },
    richContent: { __type: "String" },
    shop: { __type: "CompanyShop!" },
    targetHashtags: { __type: "[String]!" },
    targetMatchMode: { __type: "CampaignMatchMode!" },
    thumbnail: { __type: "Media" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
    validAt: { __type: "AWSDateTime!" },
    validThru: { __type: "AWSDateTime" },
  },
  ShopCashFlow: {
    __typename: { __type: "String!" },
    amount: { __type: "Float!" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    deviceId: { __type: "String" },
    direction: { __type: "ShopCashFlowDirection!" },
    id: { __type: "ID!" },
    locale: { __type: "String!" },
    remark: { __type: "String" },
    shop: { __type: "CompanyShop!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
  },
  ShopCashFlowConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[ShopCashFlow!]!" },
    totalCount: { __type: "Int!" },
  },
  ShopCheckout: {
    __typename: { __type: "String!" },
    addOnProducts: {
      __type: "ShopAddOnProductConnection!",
      __args: { cursor: "Int", limits: "Int" },
    },
    availableAddOnProducts: {
      __type: "ShopAddOnProductConnection!",
      __args: { cursor: "Int", limits: "Int" },
    },
    availablePaymentMethods: { __type: "[ShopCredential!]" },
    availablePaymentMethodsV2: { __type: "[PaymentMethod!]" },
    availableShippingZones: { __type: "[ShopShippingZone!]!" },
    availableShippingZonesV2: {
      __type: "ShopShippingZoneConnection!",
      __args: {
        cursor: "Int",
        filter: "ShopShippingZoneFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    billingAddress: { __type: "Address" },
    cashVouchers: {
      __type: "CheckoutCashVoucherConnection!",
      __args: { cursor: "Int", limits: "Int", sortBy: "[SorterInput!]" },
    },
    cashier: { __type: "String" },
    couponDiscount: { __type: "Float!" },
    coupons: { __type: "[CheckoutCoupon!]!" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    currency: { __type: "Currency!" },
    customer: { __type: "Customer" },
    deviceId: { __type: "String" },
    estimationShippingFee: { __type: "Float" },
    id: { __type: "ID!" },
    internalRemark: { __type: "String" },
    internalRemarkMedias: { __type: "[Media!]" },
    isPreOrder: { __type: "Boolean" },
    items: { __type: "[CheckoutItem!]!", __args: { withDeleted: "Boolean" } },
    lastPaidTime: { __type: "AWSDateTime" },
    metadata: { __type: "[Metadata!]" },
    order: { __type: "ShopOrder" },
    payment: {
      __type: "CheckoutPayment",
      __args: { input: "CheckoutPaymentInput!" },
    },
    pickUpAddress: { __type: "Address" },
    pickUpAddressId: { __type: "ID" },
    referenceNo: { __type: "String" },
    remark: { __type: "String" },
    remarkMedias: { __type: "[Media!]" },
    salesperson: { __type: "CompanyStaff" },
    salespersonId: { __type: "ID" },
    selectedAddOnProducts: { __type: "[ShopAddOnProduct!]!" },
    shippingAddress: { __type: "Address" },
    shippingFee: { __type: "Float!" },
    shippingProvider: { __type: "ShopShippingProvider" },
    shop: { __type: "CompanyShop!" },
    shopDiscount: { __type: "Float!" },
    staff: { __type: "CompanyStaff" },
    staffId: { __type: "ID" },
    status: { __type: "CheckoutStatus!" },
    subtotal: { __type: "Float!" },
    table: { __type: "ShopTable" },
    taxFee: { __type: "Float!" },
    total: { __type: "Float" },
    totalAdjustments: { __type: "[CheckoutAdjustment!]!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
  },
  ShopCheckoutConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[ShopCheckout!]!" },
    totalCount: { __type: "Int!" },
  },
  ShopCollection: {
    __typename: { __type: "String!" },
    active: { __type: "Boolean!" },
    allChildren: {
      __type: "CollectionConnection!",
      __args: {
        cursor: "Int",
        filter: "CollectionFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    allProducts: {
      __type: "ProductConnection!",
      __args: {
        cursor: "Int",
        filter: "ProductFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    bundleProducts: {
      __type: "ShopBundleProductConnection!",
      __args: {
        cursor: "Int",
        filter: "BundleProductFilterInput",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
      },
    },
    children: {
      __type: "CollectionConnection!",
      __args: {
        cursor: "Int",
        filter: "CollectionFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    code: { __type: "String!" },
    collectionPaths: { __type: "String" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    dailyAvailability: { __type: "DailyAvailability" },
    descendentProductUnions: {
      __type: "ProductUnionConnection!",
      __args: {
        cursor: "Int",
        filter: "ProductUnionFilterInput",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
      },
    },
    descendentProducts: {
      __type: "ProductConnection!",
      __args: {
        cursor: "Int",
        filter: "ProductFilterInput",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
      },
    },
    description: { __type: "String" },
    id: { __type: "ID!" },
    media: { __type: "Media" },
    metaDescription: { __type: "String" },
    metaKeywords: { __type: "String" },
    metaTitle: { __type: "String" },
    name: { __type: "String!" },
    parent: { __type: "ShopCollection" },
    parentId: { __type: "String" },
    parentIds: { __type: "String" },
    parents: { __type: "[ShopCollection!]" },
    productUnions: {
      __type: "ProductUnionConnection!",
      __args: {
        cursor: "Int",
        filter: "ProductUnionFilterInput",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
      },
    },
    products: {
      __type: "ProductConnection!",
      __args: {
        cursor: "Int",
        filter: "ProductFilterInput",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
      },
    },
    publishAt: { __type: "AWSDateTime" },
    publishThru: { __type: "AWSDateTime" },
    rewriteUri: { __type: "String" },
    serviceBundles: {
      __type: "ShopServiceBundleConnection!",
      __args: {
        cursor: "Int",
        filter: "ServiceBundleFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    shop: { __type: "CompanyShop!" },
    sortIndex: { __type: "Int!" },
    thumbnail: { __type: "AWSURL" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
  },
  ShopConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[CompanyShop!]!" },
    totalCount: { __type: "Int!" },
  },
  ShopContactEmail: {
    __typename: { __type: "String!" },
    active: { __type: "Boolean!" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    email: { __type: "String!" },
    id: { __type: "ID!" },
    type: { __type: "ShopContactEmailType!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
    verified: { __type: "Boolean!" },
  },
  ShopContactEmailConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[ShopContactEmail!]!" },
    totalCount: { __type: "Int!" },
  },
  ShopCredential: {
    __typename: { __type: "String!" },
    active: { __type: "Boolean!" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    description: { __type: "String" },
    id: { __type: "ID!" },
    identity: { __type: "String!" },
    meta: { __type: "ShopCredentialMeta" },
    metadata: { __type: "[Metadata!]" },
    name: { __type: "String" },
    paymentMethods: { __type: "[PaymentMethod!]!" },
    platform: { __type: "ShopCredentialPlatform!" },
    secret: { __type: "String" },
    shop: { __type: "CompanyShop!" },
    type: { __type: "ShopCredentialType" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
  },
  ShopCredentialInput: {
    active: { __type: "Boolean" },
    description: { __type: "String" },
    id: { __type: "ID" },
    identity: { __type: "String" },
    meta: { __type: "AWSJSON" },
    name: { __type: "String" },
    platform: { __type: "ShopCredentialPlatform!" },
    secret: { __type: "String" },
    type: { __type: "ShopCredentialType" },
  },
  ShopCredentialMeta: {
    __typename: { __type: "String!" },
    capabilitiesStatusActive: { __type: "Boolean" },
    loginId: { __type: "String" },
    loginPWD: { __type: "String" },
  },
  ShopCredentialMetaInput: {
    loginId: { __type: "String" },
    loginPWD: { __type: "String" },
  },
  ShopDevice: {
    __typename: { __type: "String!" },
    active: { __type: "Boolean!" },
    cashFlows: {
      __type: "ShopCashFlowConnection!",
      __args: { cursor: "Int", limits: "Int", sortBy: "[SorterInput!]" },
    },
    configs: { __type: "AWSJSON" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    defaultConfigs: { __type: "AWSJSON" },
    description: { __type: "String" },
    deviceId: { __type: "String!" },
    id: { __type: "ID!" },
    lastLogin: { __type: "AWSDateTime" },
    metadata: { __type: "[Metadata!]" },
    metrics: {
      __type: "ShopDeviceMetricConnection!",
      __args: {
        cursor: "Int",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
      },
    },
    name: { __type: "String!" },
    shop: { __type: "CompanyShop" },
    status: { __type: "ShopDeviceStatus!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
  },
  ShopDeviceConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[ShopDevice!]!" },
    totalCount: { __type: "Int!" },
  },
  ShopDeviceCreateInput: {
    active: { __type: "Boolean" },
    configs: { __type: "AWSJSON" },
    defaultConfigs: { __type: "AWSJSON" },
    description: { __type: "String" },
    deviceId: { __type: "ID!" },
    metadata: { __type: "[MetadataInput!]" },
    name: { __type: "String!" },
    shopId: { __type: "ID!" },
  },
  ShopDeviceMetric: {
    __typename: { __type: "String!" },
    createdAt: { __type: "AWSDateTime!" },
    id: { __type: "ID!" },
    metadata: { __type: "[Metadata!]!" },
  },
  ShopDeviceMetricConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[ShopDeviceMetric!]!" },
    totalCount: { __type: "Int!" },
  },
  ShopDeviceMetricCreateInput: { metadata: { __type: "[MetadataInput!]!" } },
  ShopDeviceUpdateInput: {
    active: { __type: "Boolean" },
    configs: { __type: "AWSJSON" },
    defaultConfigs: { __type: "AWSJSON" },
    description: { __type: "String" },
    metadata: { __type: "[MetadataInput!]" },
    name: { __type: "String" },
  },
  ShopEmailSendInput: {
    from: { __type: "String" },
    html: { __type: "String" },
    shopId: { __type: "ID!" },
    subject: { __type: "String!" },
    templateData: { __type: "String" },
    templateType: { __type: "ShopEmailTemplateType" },
    to: { __type: "[String!]!" },
  },
  ShopEmailTemplate: {
    __typename: { __type: "String!" },
    active: { __type: "Boolean!" },
    configs: { __type: "AWSJSON" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    id: { __type: "ID!" },
    isDefault: { __type: "Boolean!" },
    metadata: { __type: "[Metadata!]" },
    name: { __type: "String!" },
    shop: { __type: "CompanyShop!" },
    type: { __type: "ShopEmailTemplateType!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
  },
  ShopEmailTemplateConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[ShopEmailTemplate!]!" },
    totalCount: { __type: "Int!" },
  },
  ShopEmailTemplateCreateInput: {
    active: { __type: "Boolean" },
    configs: { __type: "AWSJSON" },
    isDefault: { __type: "Boolean" },
    metadata: { __type: "[MetadataInput!]" },
    name: { __type: "String!" },
    shopId: { __type: "ID!" },
    type: { __type: "ShopEmailTemplateType!" },
  },
  ShopEmailTemplateFilterInput: {
    active: { __type: "FilterInput" },
    createdAt: { __type: "FilterInput" },
    name: { __type: "FilterInput" },
    type: { __type: "FilterInput" },
    updatedAt: { __type: "FilterInput" },
  },
  ShopEmailTemplateUpdateInput: {
    active: { __type: "Boolean" },
    configs: { __type: "AWSJSON" },
    isDefault: { __type: "Boolean" },
    metadata: { __type: "[MetadataInput!]" },
    name: { __type: "String" },
  },
  ShopForm: {
    __typename: { __type: "String!" },
    active: { __type: "Boolean!" },
    autoApprove: { __type: "Boolean!" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    id: { __type: "ID!" },
    metadata: { __type: "[Metadata!]" },
    metadataFields: { __type: "[CompanyMemberMetadataField!]!" },
    name: { __type: "String!" },
    records: {
      __type: "ShopFormRecordConnection!",
      __args: {
        cursor: "Int",
        filter: "ShopFormRecordFilterInput",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
      },
    },
    shop: { __type: "CompanyShop!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
    validAt: { __type: "AWSDateTime" },
    validThru: { __type: "AWSDateTime" },
  },
  ShopFormConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[ShopForm!]!" },
    totalCount: { __type: "Int!" },
  },
  ShopFormCreateInput: {
    active: { __type: "Boolean" },
    autoApprove: { __type: "Boolean" },
    metadata: { __type: "[MetadataInput!]" },
    metadataFields: { __type: "[CompanyMemberMetadataFieldInput!]!" },
    name: { __type: "String!" },
    shopId: { __type: "ID!" },
    validAt: { __type: "AWSDateTime" },
    validThru: { __type: "AWSDateTime" },
  },
  ShopFormFilterInput: {
    active: { __type: "FilterInput" },
    autoApprove: { __type: "FilterInput" },
    createdAt: { __type: "FilterInput" },
    name: { __type: "FilterInput" },
    updatedAt: { __type: "FilterInput" },
    validAt: { __type: "FilterInput" },
    validThru: { __type: "FilterInput" },
  },
  ShopFormRecord: {
    __typename: { __type: "String!" },
    active: { __type: "Boolean!" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    customer: { __type: "Customer" },
    form: { __type: "ShopForm" },
    id: { __type: "ID!" },
    metadata: { __type: "[Metadata!]!" },
    status: { __type: "ShopFormRecordStatus!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
  },
  ShopFormRecordConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[ShopFormRecord!]!" },
    totalCount: { __type: "Int!" },
  },
  ShopFormRecordFilterInput: {
    active: { __type: "FilterInput" },
    createdAt: { __type: "FilterInput" },
    customerId: { __type: "FilterInput" },
    status: { __type: "FilterInput" },
    updatedAt: { __type: "FilterInput" },
  },
  ShopFormUpdateInput: {
    active: { __type: "Boolean" },
    autoApprove: { __type: "Boolean" },
    metadata: { __type: "[MetadataInput!]" },
    metadataFields: { __type: "[CompanyMemberMetadataFieldInput!]" },
    name: { __type: "String" },
    validAt: { __type: "AWSDateTime" },
    validThru: { __type: "AWSDateTime" },
  },
  ShopManualCredentialInput: {
    active: { __type: "Boolean" },
    description: { __type: "String" },
    id: { __type: "ID" },
    name: { __type: "String!" },
  },
  ShopMarquee: {
    __typename: { __type: "String!" },
    active: { __type: "Boolean!" },
    backgroundColor: { __type: "String" },
    closable: { __type: "Boolean" },
    content: { __type: "String" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    id: { __type: "ID!" },
    path: { __type: "String" },
    positionBottom: { __type: "String" },
    positionTop: { __type: "String" },
    shopId: { __type: "ID!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
  },
  ShopMarqueeConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[ShopMarquee!]!" },
    totalCount: { __type: "Int!" },
  },
  ShopMarqueeFilterInput: {
    active: { __type: "FilterInput" },
    createdAt: { __type: "FilterInput" },
    updatedAt: { __type: "FilterInput" },
  },
  ShopMarqueeInput: {
    active: { __type: "Boolean" },
    backgroundColor: { __type: "String" },
    closable: { __type: "Boolean" },
    content: { __type: "String" },
    path: { __type: "String" },
    positionBottom: { __type: "String" },
    positionTop: { __type: "String" },
    shopId: { __type: "ID!" },
  },
  ShopNavigationTemplate: {
    __typename: { __type: "String!" },
    active: { __type: "Boolean!" },
    configs: { __type: "AWSJSON" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    id: { __type: "ID!" },
    metadata: { __type: "[Metadata!]" },
    name: { __type: "String!" },
    shop: { __type: "CompanyShop!" },
    type: { __type: "NavigationTemplateType!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
  },
  ShopNavigationTemplateConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[ShopNavigationTemplate!]!" },
    totalCount: { __type: "Int!" },
  },
  ShopOrder: {
    __typename: { __type: "String!" },
    activities: {
      __type: "OrderActivityConnection",
      __args: { cursor: "Int", limits: "Int" },
    },
    appointments: {
      __type: "ShopAppointmentConnection!",
      __args: {
        cursor: "Int",
        filter: "ShopAppointmentFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    billingAddress: { __type: "Address" },
    cancelReason: { __type: "String" },
    channel: { __type: "Channel" },
    checkout: { __type: "ShopCheckout!" },
    checkoutId: { __type: "ID" },
    comments: { __type: "[OrderComment!]!" },
    company: { __type: "Company!" },
    couponDiscount: { __type: "Float!" },
    coupons: { __type: "[CompanyCoupon!]!" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    creditNotes: {
      __type: "CreditNoteConnection!",
      __args: {
        cursor: "Int",
        filter: "CreditNoteFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    currency: { __type: "String!" },
    customer: { __type: "Customer" },
    deductibleMemberPoints: { __type: "Int!" },
    deliveryNotes: {
      __type: "DeliveryNoteConnection!",
      __args: {
        cursor: "Int",
        filter: "DeliveryNotesFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    deviceId: { __type: "String" },
    gainMemberPoints: { __type: "Int" },
    id: { __type: "ID!" },
    internalRemark: { __type: "String" },
    internalRemarkMedias: { __type: "[Media!]" },
    invoices: {
      __type: "InvoiceConnection!",
      __args: {
        cursor: "Int",
        filter: "InvoiceFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    isPreOrder: { __type: "Boolean" },
    items: { __type: "[OrderItem!]!" },
    itemsV2: {
      __type: "OrderItemConnection!",
      __args: {
        cursor: "Int",
        filter: "OrderItemFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    kitchenStatus: { __type: "ShopOrderKitchenStatus!" },
    memberPointDiscount: { __type: "Float!" },
    memberPoints: { __type: "Float!" },
    metadata: { __type: "[Metadata!]" },
    paymentProvider: { __type: "PaymentProvider" },
    paymentStatus: { __type: "ShopOrderInvoiceStatus!" },
    pickUpAddress: { __type: "Address" },
    referenceNo: { __type: "String!" },
    remark: { __type: "String" },
    remarkMedias: { __type: "[Media!]" },
    returnNoteItems: {
      __type: "ReturnNoteItemConnection!",
      __args: {
        cursor: "Int",
        filter: "ReturnNoteItemFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    rewardedMemberPoints: { __type: "Int!" },
    salesperson: { __type: "CompanyStaff" },
    shippingAddress: { __type: "Address" },
    shippingFee: { __type: "Float!" },
    shippingProvider: { __type: "ShopShippingProvider" },
    shippingStatus: { __type: "ShopOrderDeliveryNoteStatus!" },
    shop: { __type: "CompanyShop!" },
    shopDiscount: { __type: "Float!" },
    staff: { __type: "CompanyStaff" },
    status: { __type: "ShopOrderStatus!" },
    subtotal: { __type: "Float!" },
    taxFee: { __type: "Float!" },
    total: { __type: "Float!" },
    totalAdjustments: { __type: "[OrderAdjustment!]!" },
    totalPaid: { __type: "Float!" },
    totalRefund: { __type: "Float!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
  },
  ShopPage: {
    __typename: { __type: "String!" },
    active: { __type: "Boolean!" },
    atFooter: { __type: "Boolean" },
    atHeader: { __type: "Boolean" },
    atMenu: { __type: "Boolean" },
    body: { __type: "String" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    display: { __type: "Boolean!" },
    group: { __type: "String" },
    hashtags: { __type: "[String!]" },
    href: { __type: "String!" },
    id: { __type: "ID!" },
    metaDescription: { __type: "String" },
    metaKeywords: { __type: "String" },
    metaTitle: { __type: "String" },
    name: { __type: "String!" },
    rewriteUri: { __type: "String" },
    shop: { __type: "CompanyShop!" },
    sortIndex: { __type: "Int" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
  },
  ShopPaymentCredentialInput: {
    active: { __type: "Boolean" },
    description: { __type: "String" },
    id: { __type: "ID" },
    identity: { __type: "String" },
    meta: { __type: "ShopCredentialMetaInput" },
    name: { __type: "String" },
    platform: { __type: "ShopPaymentCredentialPlatform!" },
    secret: { __type: "String" },
    type: { __type: "ShopCredentialType" },
  },
  ShopPopup: {
    __typename: { __type: "String!" },
    active: { __type: "Boolean!" },
    content: { __type: "String" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    href: { __type: "String" },
    id: { __type: "ID!" },
    path: { __type: "String" },
    shopId: { __type: "ID!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
    validAt: { __type: "AWSDateTime!" },
    validThru: { __type: "AWSDateTime" },
  },
  ShopPopupConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[ShopPopup!]!" },
    totalCount: { __type: "Int!" },
  },
  ShopPopupCreateInput: {
    active: { __type: "Boolean" },
    content: { __type: "String" },
    href: { __type: "String" },
    path: { __type: "String" },
    shopId: { __type: "ID!" },
    validAt: { __type: "AWSDateTime" },
    validThru: { __type: "AWSDateTime" },
  },
  ShopPopupUpdateInput: {
    active: { __type: "Boolean" },
    content: { __type: "String" },
    href: { __type: "String" },
    path: { __type: "String" },
    validAt: { __type: "AWSDateTime" },
    validThru: { __type: "AWSDateTime" },
  },
  ShopProduct: {
    __typename: { __type: "String!" },
    active: { __type: "Boolean!" },
    ancestorCollectionCodes: { __type: "[String!]" },
    attributes: {
      __type: "[ShopAttributeValue!]",
      __args: { keys: "[String!]" },
    },
    barcode: { __type: "String" },
    barcodes: { __type: "[String!]" },
    basePrice: { __type: "Float!" },
    bundleProducts: {
      __type: "ShopBundleProductConnection!",
      __args: {
        cursor: "Int",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
      },
    },
    collectionCodes: { __type: "[String!]" },
    collectionPaths: { __type: "[String!]" },
    collections: {
      __type: "CollectionConnection!",
      __args: {
        cursor: "Int",
        filter: "CollectionFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    combinations: { __type: "[ProductCombination!]!" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    description: { __type: "String" },
    details: { __type: "[ProductDetail!]" },
    display: { __type: "Boolean" },
    hasPublishDuration: { __type: "Boolean" },
    hashTagsArray: { __type: "[String!]" },
    hashtags: { __type: "[String!]" },
    id: { __type: "ID!" },
    images: { __type: "[AWSURL!]" },
    maxPrice: { __type: "Float!" },
    medias: { __type: "[Media!]" },
    metaDescription: { __type: "String" },
    metaKeywords: { __type: "String" },
    metaTitle: { __type: "String" },
    metadata: { __type: "[Metadata!]" },
    metadataFields: { __type: "[CompanyMemberMetadataField!]" },
    modifierValues: { __type: "[ProductModifierValue!]" },
    modifiers: { __type: "[ProductModifier!]!" },
    name: { __type: "String!" },
    paginatedVariations: {
      __type: "VariationConnection!",
      __args: { cursor: "Int", limits: "Int", sortBy: "[SorterInput!]" },
    },
    primarySortIndex: { __type: "Int" },
    printDescription: { __type: "String" },
    publishAt: { __type: "AWSDateTime" },
    publishThru: { __type: "AWSDateTime" },
    purchaseLimit: { __type: "Float" },
    remarkSet: { __type: "String" },
    rewriteUri: { __type: "String" },
    salesChannels: { __type: "[SalesChannel!]" },
    shippingZones: { __type: "[ShopShippingZone!]" },
    shop: { __type: "CompanyShop!" },
    sku: { __type: "String" },
    stockMovements: {
      __type: "StockMovementConnection!",
      __args: {
        cursor: "Int",
        filter: "StockMovementFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    subtitle: { __type: "String" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
    variations: { __type: "[ProductVariation!]!" },
    wishItems: {
      __type: "WishItemConnection!",
      __args: { cursor: "Int", limits: "Int" },
    },
  },
  ShopProductModifier: {
    __typename: { __type: "String!" },
    active: { __type: "Boolean!" },
    code: { __type: "String!" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    id: { __type: "ID!" },
    metadata: { __type: "[Metadata!]" },
    metadataFields: { __type: "[CompanyMemberMetadataField!]" },
    modifiers: { __type: "[ProductModifier!]!" },
    name: { __type: "String!" },
    productCount: { __type: "Int!" },
    products: {
      __type: "ProductConnection!",
      __args: {
        cursor: "Int",
        filter: "ProductFilterInput",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
      },
    },
    shop: { __type: "CompanyShop!" },
    sortIndex: { __type: "Int!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
  },
  ShopProductModifierConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[ShopProductModifier!]!" },
    totalCount: { __type: "Int!" },
  },
  ShopProductModifierCreateInput: {
    active: { __type: "Boolean" },
    code: { __type: "String!" },
    metadata: { __type: "[MetadataInput!]" },
    metadataFields: { __type: "[CompanyMemberMetadataFieldInput!]" },
    modifiers: { __type: "[ProductModifierInput!]!" },
    name: { __type: "String!" },
    shopId: { __type: "ID!" },
    sortIndex: { __type: "Int" },
  },
  ShopProductModifierFilterInput: {
    active: { __type: "FilterInput" },
    code: { __type: "FilterInput" },
    createdAt: { __type: "FilterInput" },
    name: { __type: "FilterInput" },
    sortIndex: { __type: "FilterInput" },
    updatedAt: { __type: "FilterInput" },
  },
  ShopProductModifierUpdateInput: {
    active: { __type: "Boolean" },
    code: { __type: "String" },
    metadata: { __type: "[MetadataInput!]" },
    metadataFields: { __type: "[CompanyMemberMetadataFieldInput!]" },
    modifiers: { __type: "[ProductModifierInput!]" },
    name: { __type: "String" },
    sortIndex: { __type: "Int" },
  },
  ShopReceiptTemplate: {
    __typename: { __type: "String!" },
    active: { __type: "Boolean!" },
    configs: { __type: "AWSJSON" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    id: { __type: "ID!" },
    metadata: { __type: "[Metadata!]" },
    name: { __type: "String!" },
    shop: { __type: "CompanyShop!" },
    type: { __type: "ReceiptTemplateType!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
  },
  ShopReceiptTemplateConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[ShopReceiptTemplate!]!" },
    totalCount: { __type: "Int!" },
  },
  ShopReceiptTemplateCreateInput: {
    active: { __type: "Boolean" },
    configs: { __type: "AWSJSON" },
    metadata: { __type: "[MetadataInput!]" },
    name: { __type: "String!" },
    shopId: { __type: "ID!" },
    type: { __type: "ReceiptTemplateType!" },
  },
  ShopReceiptTemplateFilterInput: {
    active: { __type: "FilterInput" },
    createdAt: { __type: "FilterInput" },
    name: { __type: "FilterInput" },
    type: { __type: "FilterInput" },
    updatedAt: { __type: "FilterInput" },
  },
  ShopReceiptTemplateUpdateInput: {
    active: { __type: "Boolean" },
    configs: { __type: "AWSJSON" },
    metadata: { __type: "[MetadataInput!]" },
    name: { __type: "String" },
  },
  ShopReferenceNoFormat: {
    __typename: { __type: "String!" },
    active: { __type: "Boolean!" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    id: { __type: "ID!" },
    length: { __type: "Int!" },
    prefix: { __type: "String!" },
    shopId: { __type: "String!" },
    type: { __type: "ShopReferenceNoFormatType!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
  },
  ShopReferenceNoFormatConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[ShopReferenceNoFormat!]!" },
    totalCount: { __type: "Int!" },
  },
  ShopReferenceNoFormatCreateInput: {
    length: { __type: "Int!" },
    prefix: { __type: "String!" },
    shopId: { __type: "String!" },
    type: { __type: "ShopReferenceNoFormatType!" },
  },
  ShopReferenceNoFormatFilterInput: {
    active: { __type: "FilterInput" },
    completedAt: { __type: "FilterInput" },
    createdAt: { __type: "FilterInput" },
    id: { __type: "FilterInput" },
    length: { __type: "FilterInput" },
    prefix: { __type: "FilterInput" },
    shopId: { __type: "FilterInput" },
    type: { __type: "FilterInput" },
    updatedAt: { __type: "FilterInput" },
  },
  ShopReferenceNoFormatUpdateInput: {
    length: { __type: "Int" },
    prefix: { __type: "String" },
  },
  ShopReport: {
    __typename: { __type: "String!" },
    amount: { __type: "Float!" },
    collectionSales: {
      __type: "CollectionSales!",
      __args: {
        id: "ID!",
        startedAt: "AWSDateTime!",
        startedThru: "AWSDateTime!",
      },
    },
    count: { __type: "Float!" },
    couponSales: {
      __type: "CouponSales!",
      __args: {
        id: "ID!",
        startedAt: "AWSDateTime!",
        startedThru: "AWSDateTime!",
      },
    },
    customerSales: {
      __type: "Sales!",
      __args: { startedAt: "AWSDateTime!", startedThru: "AWSDateTime!" },
    },
    discountSales: {
      __type: "DiscountSales!",
      __args: {
        id: "ID!",
        startedAt: "AWSDateTime!",
        startedThru: "AWSDateTime!",
      },
    },
    memberTierSales: {
      __type: "MemberTierSales!",
      __args: {
        id: "ID!",
        startedAt: "AWSDateTime!",
        startedThru: "AWSDateTime!",
      },
    },
    newCustomerSales: {
      __type: "Sales!",
      __args: { startedAt: "AWSDateTime!", startedThru: "AWSDateTime!" },
    },
    nonCustomerSales: {
      __type: "Sales!",
      __args: { startedAt: "AWSDateTime!", startedThru: "AWSDateTime!" },
    },
    oldCustomerSales: {
      __type: "Sales!",
      __args: { startedAt: "AWSDateTime!", startedThru: "AWSDateTime!" },
    },
    otherDiscounts: {
      __type: "[OtherDiscount!]!",
      __args: { startedAt: "AWSDateTime!", startedThru: "AWSDateTime!" },
    },
    pageViews: {
      __type: "[PageViewsData!]!",
      __args: { startedAt: "AWSDateTime!", startedThru: "AWSDateTime!" },
    },
    pendingOrderCount: {
      __type: "Float!",
      __args: { startedAt: "AWSDateTime!", startedThru: "AWSDateTime!" },
    },
    productSales: {
      __type: "ProductSales!",
      __args: {
        id: "ID!",
        startedAt: "AWSDateTime!",
        startedThru: "AWSDateTime!",
      },
    },
    promotionCodeSales: {
      __type: "CouponSales!",
      __args: {
        id: "ID!",
        startedAt: "AWSDateTime!",
        startedThru: "AWSDateTime!",
      },
    },
    refund: {
      __type: "Float!",
      __args: { startedAt: "AWSDateTime!", startedThru: "AWSDateTime!" },
    },
    refundByMethods: {
      __type: "[SalesByMethods!]!",
      __args: { startedAt: "AWSDateTime!", startedThru: "AWSDateTime!" },
    },
    salesByMethods: {
      __type: "[SalesByMethods!]!",
      __args: { startedAt: "AWSDateTime!", startedThru: "AWSDateTime!" },
    },
    salesByOrderItems: {
      __type: "[SalesByMethods!]!",
      __args: { startedAt: "AWSDateTime!", startedThru: "AWSDateTime!" },
    },
    topCollectionSales: {
      __type: "CollectionSalesConnection!",
      __args: {
        cursor: "Int",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
        startedAt: "AWSDateTime!",
        startedThru: "AWSDateTime!",
      },
    },
    topCouponSales: {
      __type: "CouponSalesConnection!",
      __args: {
        cursor: "Int",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
        startedAt: "AWSDateTime!",
        startedThru: "AWSDateTime!",
      },
    },
    topDiscountSales: {
      __type: "DiscountSalesConnection!",
      __args: {
        cursor: "Int",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
        startedAt: "AWSDateTime!",
        startedThru: "AWSDateTime!",
      },
    },
    topMemberTierSales: {
      __type: "MemberTierSalesConnection!",
      __args: {
        cursor: "Int",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
        startedAt: "AWSDateTime!",
        startedThru: "AWSDateTime!",
      },
    },
    topProductSales: {
      __type: "ProductSalesConnection!",
      __args: {
        cursor: "Int",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
        startedAt: "AWSDateTime!",
        startedThru: "AWSDateTime!",
      },
    },
    topPromotionCodeSales: {
      __type: "CouponSalesConnection!",
      __args: {
        cursor: "Int",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
        startedAt: "AWSDateTime!",
        startedThru: "AWSDateTime!",
      },
    },
    topSalesProducts: {
      __type: "[TopSalesProduct!]!",
      __args: {
        limits: "Int",
        startedAt: "AWSDateTime!",
        startedThru: "AWSDateTime!",
      },
    },
    topSalesVariations: {
      __type: "[TopSalesVariations!]!",
      __args: { startedAt: "AWSDateTime!", startedThru: "AWSDateTime!" },
    },
    topViewProducts: {
      __type: "[PageViewsData!]!",
      __args: {
        limits: "Int",
        startedAt: "AWSDateTime!",
        startedThru: "AWSDateTime!",
      },
    },
    totalCollectionSales: {
      __type: "TotalCollectionSales!",
      __args: { startedAt: "AWSDateTime!", startedThru: "AWSDateTime!" },
    },
    totalCouponSales: {
      __type: "TotalCouponSales!",
      __args: { startedAt: "AWSDateTime!", startedThru: "AWSDateTime!" },
    },
    totalDiscountSales: {
      __type: "TotalDiscountSales!",
      __args: { startedAt: "AWSDateTime!", startedThru: "AWSDateTime!" },
    },
    totalItemSales: {
      __type: "TotalItemSales!",
      __args: { startedAt: "AWSDateTime!", startedThru: "AWSDateTime!" },
    },
    totalMemberTierSales: {
      __type: "TotalMemberTierSales!",
      __args: { startedAt: "AWSDateTime!", startedThru: "AWSDateTime!" },
    },
    totalProductSales: {
      __type: "TotalProductSales!",
      __args: { startedAt: "AWSDateTime!", startedThru: "AWSDateTime!" },
    },
    totalPromotionCodeSales: {
      __type: "TotalCouponSales!",
      __args: { startedAt: "AWSDateTime!", startedThru: "AWSDateTime!" },
    },
    turnover: {
      __type: "Float!",
      __args: { startedAt: "AWSDateTime!", startedThru: "AWSDateTime!" },
    },
    unpaidOrderAmount: {
      __type: "Float!",
      __args: { startedAt: "AWSDateTime!", startedThru: "AWSDateTime!" },
    },
    unpaidOrderCount: {
      __type: "Int!",
      __args: { startedAt: "AWSDateTime!", startedThru: "AWSDateTime!" },
    },
    userAge: {
      __type: "[PageViewsData!]!",
      __args: { startedAt: "AWSDateTime!", startedThru: "AWSDateTime!" },
    },
    userCountry: {
      __type: "[PageViewsData!]!",
      __args: { startedAt: "AWSDateTime!", startedThru: "AWSDateTime!" },
    },
    userGender: {
      __type: "[PageViewsData!]!",
      __args: { startedAt: "AWSDateTime!", startedThru: "AWSDateTime!" },
    },
    volume: {
      __type: "Int!",
      __args: { startedAt: "AWSDateTime!", startedThru: "AWSDateTime!" },
    },
  },
  ShopReturnNote: {
    __typename: { __type: "String!" },
    active: { __type: "Boolean!" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    id: { __type: "ID!" },
    items: {
      __type: "ReturnNoteItemConnection!",
      __args: {
        cursor: "Int",
        filter: "ReturnNoteItemFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    metadata: { __type: "[Metadata!]" },
    order: { __type: "ShopOrder!" },
    referenceNo: { __type: "String!" },
    remark: { __type: "String" },
    shop: { __type: "CompanyShop!" },
    status: { __type: "ReturnNoteStatus!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
    warehouse: { __type: "CompanyWarehouse!" },
  },
  ShopReturnNoteConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[ShopReturnNote!]!" },
    totalCount: { __type: "Int!" },
  },
  ShopSales: {
    __typename: { __type: "String!" },
    amount: { __type: "Float!" },
    avgCount: { __type: "Float!" },
    avgPrice: { __type: "Float!" },
    count: { __type: "Int!" },
    id: { __type: "ID!" },
    memberAmount: { __type: "Float!" },
    nonMemberAmount: { __type: "Float!" },
    orderCount: { __type: "Int!" },
  },
  ShopSalesConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[ShopSales!]!" },
    totalCount: { __type: "Int!" },
  },
  ShopService: {
    __typename: { __type: "String!" },
    active: { __type: "Boolean!" },
    appointments: {
      __type: "ShopAppointmentConnection!",
      __args: {
        cursor: "Int",
        filter: "ShopAppointmentFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    autoConfirm: { __type: "Boolean!" },
    availableServiceLocationDistricts: { __type: "[String!]" },
    availableUntil: { __type: "Duration" },
    code: { __type: "String!" },
    company: { __type: "Company!" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    daysOfWeek: { __type: "[String!]" },
    description: { __type: "String" },
    durationMins: { __type: "Int!" },
    id: { __type: "ID!" },
    intervalMins: { __type: "Int!" },
    medias: { __type: "[Media!]" },
    metadata: { __type: "[Metadata!]" },
    name: { __type: "String!" },
    outboundSkus: { __type: "[String!]" },
    productVariations: { __type: "[ProductVariation!]" },
    reserveMins: { __type: "Int!" },
    serviceBundle: { __type: "ShopServiceBundle!" },
    serviceLocationName: { __type: "String" },
    serviceLocations: {
      __type: "ShopServiceLocationConnection!",
      __args: {
        cursor: "Int",
        filter: "ServiceLocationFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    shop: { __type: "CompanyShop!" },
    showStartTimeOnly: { __type: "Boolean" },
    slots: {
      __type: "ServiceSlotConnection!",
      __args: {
        cursor: "Int",
        isAvailable: "Boolean",
        limits: "Int",
        modifiers: "[CheckoutItemModifierInput!]",
        serviceLocationId: "[ID!]",
        startedAt: "AWSDateTime",
        startedThru: "AWSDateTime",
      },
    },
    sortIndex: { __type: "Int!" },
    startedAt: { __type: "AWSDateTime!" },
    startedThru: { __type: "AWSDateTime!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
    validSince: { __type: "Duration" },
    validUntil: { __type: "Duration" },
  },
  ShopServiceBundle: {
    __typename: { __type: "String!" },
    active: { __type: "Boolean!" },
    barcode: { __type: "String" },
    collections: {
      __type: "CollectionConnection!",
      __args: {
        cursor: "Int",
        filter: "CollectionFilterInput",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
      },
    },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    description: { __type: "String" },
    hashtags: { __type: "[String!]" },
    id: { __type: "ID!" },
    ignoreStock: { __type: "Boolean!" },
    medias: { __type: "[Media!]" },
    metaDescription: { __type: "String" },
    metaKeywords: { __type: "String" },
    metaTitle: { __type: "String" },
    metadata: { __type: "[Metadata!]" },
    metadataFields: { __type: "[CompanyMemberMetadataField!]" },
    modifiers: { __type: "[ServiceBundleModifier!]" },
    name: { __type: "String!" },
    primarySortIndex: { __type: "Int" },
    publishAt: { __type: "AWSDateTime" },
    publishThru: { __type: "AWSDateTime" },
    quantity: { __type: "Int!", __args: { warehouseId: "ID" } },
    rewriteUri: { __type: "String" },
    serviceLocations: {
      __type: "ShopServiceLocationConnection!",
      __args: {
        cursor: "Int",
        filter: "ServiceLocationFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    services: {
      __type: "ShopServiceConnection!",
      __args: {
        cursor: "Int",
        filter: "ServiceFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    shop: { __type: "CompanyShop!" },
    sku: { __type: "String" },
    slotRequiredAtCheckout: { __type: "Boolean!" },
    subtitle: { __type: "String" },
    suggestedRetailPrice: { __type: "Float!" },
    unitPrice: { __type: "Float!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
    validationStrategy: { __type: "ServiceValidationStrategy!" },
  },
  ShopServiceBundleConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[ShopServiceBundle!]!" },
    totalCount: { __type: "Int!" },
  },
  ShopServiceConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[ShopService!]!" },
    totalCount: { __type: "Int!" },
  },
  ShopServiceLocation: {
    __typename: { __type: "String!" },
    address: { __type: "Address" },
    appointments: {
      __type: "ShopAppointmentConnection!",
      __args: {
        cursor: "Int",
        filter: "ShopAppointmentFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    id: { __type: "ID!" },
    medias: { __type: "[Media!]" },
    metadata: { __type: "[Metadata!]" },
    name: { __type: "String!" },
    rules: {
      __type: "ServiceLocationRuleConnection!",
      __args: {
        cursor: "Int",
        filter: "ServiceLocationRuleFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    serviceBundles: {
      __type: "ShopServiceConnection!",
      __args: {
        cursor: "Int",
        filter: "ServiceBundleFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    services: {
      __type: "ShopServiceConnection!",
      __args: {
        cursor: "Int",
        filter: "ServiceFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    shop: { __type: "CompanyShop!" },
    slots: {
      __type: "ServiceLocationSlotConnection!",
      __args: {
        cursor: "Int",
        limits: "Int",
        startedAt: "AWSDateTime",
        startedThru: "AWSDateTime",
      },
    },
    sortIndex: { __type: "Int!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
  },
  ShopServiceLocationConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[ShopServiceLocation!]!" },
    totalCount: { __type: "Int!" },
  },
  ShopShippingCredentialInput: {
    active: { __type: "Boolean" },
    description: { __type: "String" },
    id: { __type: "ID" },
    identity: { __type: "String" },
    meta: { __type: "AWSJSON" },
    name: { __type: "String" },
    platform: { __type: "ShopShippingCredentialPlatform!" },
    secret: { __type: "String" },
    type: { __type: "ShopCredentialType" },
  },
  ShopShippingProvider: {
    __typename: { __type: "String!" },
    active: { __type: "Boolean" },
    addresses: { __type: "[ShippingZoneAddress!]" },
    addressesV2: {
      __type: "ShippingZoneAddressConnection!",
      __args: {
        cursor: "Int",
        filter: "ShippingZoneAddressFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    countries: { __type: "[Country!]" },
    createdAt: { __type: "AWSDateTime" },
    createdBy: { __type: "User" },
    expressions: { __type: "[ShippingZoneExpressions!]" },
    id: { __type: "ID" },
    metadata: { __type: "[Metadata!]" },
    name: { __type: "String" },
    provider: { __type: "ShippingZoneProvider" },
    shop: { __type: "CompanyShop" },
    sortIndex: { __type: "Int" },
    updatedAt: { __type: "AWSDateTime" },
    updatedBy: { __type: "User" },
  },
  ShopShippingZone: {
    __typename: { __type: "String!" },
    active: { __type: "Boolean!" },
    addresses: { __type: "[ShippingZoneAddress!]" },
    addressesV2: {
      __type: "ShippingZoneAddressConnection!",
      __args: {
        cursor: "Int",
        filter: "ShippingZoneAddressFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    countries: { __type: "[Country!]!" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    expressions: { __type: "[ShippingZoneExpressions!]!" },
    id: { __type: "ID!" },
    metadata: { __type: "[Metadata!]" },
    name: { __type: "String!" },
    provider: { __type: "ShippingZoneProvider!" },
    shop: { __type: "CompanyShop!" },
    sortIndex: { __type: "Int!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
  },
  ShopShippingZoneConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[ShopShippingZone!]!" },
    totalCount: { __type: "Int!" },
  },
  ShopShippingZoneFilterInput: {
    active: { __type: "FilterInput" },
    createdAt: { __type: "FilterInput" },
    id: { __type: "FilterInput" },
    maxWeight: { __type: "FilterInput" },
    name: { __type: "FilterInput" },
    provider: { __type: "FilterInput" },
    sortIndex: { __type: "FilterInput" },
    updatedAt: { __type: "FilterInput" },
  },
  ShopShippingZoneInput: {
    active: { __type: "Boolean" },
    addresses: { __type: "[ShippingZoneAddressInput!]" },
    countries: { __type: "[Country!]" },
    expressions: { __type: "[ShippingZoneExpressionsInput!]" },
    metadata: { __type: "[MetadataInput!]" },
    name: { __type: "String!" },
    provider: { __type: "ShippingZoneProvider!" },
    shopId: { __type: "ID!" },
    sortIndex: { __type: "Int" },
  },
  ShopSitemap: {
    __typename: { __type: "String!" },
    active: { __type: "Boolean!" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    id: { __type: "ID!" },
    name: { __type: "String!" },
    shop: { __type: "CompanyShop!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
    url: { __type: "String!" },
  },
  ShopSitemapConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[ShopSitemap!]!" },
    totalCount: { __type: "Int!" },
  },
  ShopSitemapFilterInput: {
    active: { __type: "FilterInput" },
    createdAt: { __type: "FilterInput" },
    name: { __type: "FilterInput" },
    updatedAt: { __type: "FilterInput" },
    url: { __type: "FilterInput" },
  },
  ShopSitemapInput: {
    name: { __type: "String!" },
    shopId: { __type: "ID!" },
    url: { __type: "AWSURL!" },
  },
  ShopTable: {
    __typename: { __type: "String!" },
    checkouts: {
      __type: "ShopCheckoutConnection!",
      __args: {
        cursor: "Int",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
      },
    },
    color: { __type: "String" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    group: { __type: "String" },
    id: { __type: "ID!" },
    meta: { __type: "String" },
    metadata: { __type: "[Metadata!]" },
    name: { __type: "String!" },
    shape: { __type: "TableShape" },
    shapeData: { __type: "[Int!]" },
    shop: { __type: "CompanyShop!" },
    sortIndex: { __type: "Int!" },
    status: { __type: "TableStatus!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
    venue: { __type: "ShopVenue!" },
  },
  ShopTableConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[ShopTable!]!" },
    totalCount: { __type: "Int!" },
  },
  ShopTaxZone: {
    __typename: { __type: "String!" },
    countries: { __type: "[Country!]!" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    id: { __type: "ID!" },
    shop: { __type: "CompanyShop!" },
    taxRate: { __type: "Float!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
  },
  ShopTaxZoneConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[ShopTaxZone!]!" },
    totalCount: { __type: "Int!" },
  },
  ShopTaxZoneInput: {
    countries: { __type: "[Country!]" },
    shopId: { __type: "ID!" },
    taxRate: { __type: "Float" },
  },
  ShopVenue: {
    __typename: { __type: "String!" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    id: { __type: "ID!" },
    media: { __type: "Media" },
    metadata: { __type: "[Metadata!]" },
    name: { __type: "String!" },
    shop: { __type: "CompanyShop!" },
    sortIndex: { __type: "Int!" },
    tables: {
      __type: "ShopTableConnection!",
      __args: {
        cursor: "Int",
        filter: "TableFilterInput",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
      },
    },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
  },
  ShopVenueConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[ShopVenue!]!" },
    totalCount: { __type: "Int!" },
  },
  SorterInput: {
    field: { __type: "String!" },
    order: { __type: "SortOrder!" },
  },
  StockAdjustmentCreateInput: {
    items: { __type: "[StockAdjustmentItemSetInput!]!" },
    metadata: { __type: "[MetadataInput!]" },
    referenceNo: { __type: "String" },
    remark: { __type: "String" },
    shopId: { __type: "ID!" },
    staffId: { __type: "ID" },
    warehouseId: { __type: "ID!" },
  },
  StockAdjustmentFilterInput: {
    createdAt: { __type: "FilterInput" },
    deviceId: { __type: "FilterInput" },
    id: { __type: "FilterInput" },
    referenceNo: { __type: "FilterInput" },
    remark: { __type: "FilterInput" },
    shopId: { __type: "FilterInput" },
    staffId: { __type: "FilterInput" },
    status: { __type: "FilterInput" },
    updatedAt: { __type: "FilterInput" },
    warehouseId: { __type: "FilterInput" },
  },
  StockAdjustmentItem: {
    __typename: { __type: "String!" },
    cost: { __type: "Float!" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    id: { __type: "ID!" },
    productVariation: { __type: "ProductVariation" },
    quantity: { __type: "Int!" },
    sku: { __type: "String!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
  },
  StockAdjustmentItemConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[StockAdjustmentItem!]!" },
    totalCount: { __type: "Int!" },
  },
  StockAdjustmentItemFilterInput: {
    cost: { __type: "FilterInput" },
    createdAt: { __type: "FilterInput" },
    quantity: { __type: "FilterInput" },
    remark: { __type: "FilterInput" },
    sku: { __type: "FilterInput" },
    sortIndex: { __type: "FilterInput" },
    updatedAt: { __type: "FilterInput" },
  },
  StockAdjustmentItemSetInput: {
    cost: { __type: "Float" },
    id: { __type: "ID" },
    metadata: { __type: "[MetadataInput!]" },
    quantity: { __type: "Int!" },
    remark: { __type: "String" },
    sku: { __type: "String!" },
    sortIndex: { __type: "Int" },
  },
  StockAdjustmentUpdateInput: {
    items: { __type: "[StockAdjustmentItemSetInput!]" },
    metadata: { __type: "[MetadataInput!]" },
    remark: { __type: "String" },
    staffId: { __type: "ID" },
    warehouseId: { __type: "ID" },
  },
  StockMovement: {
    __typename: { __type: "String!" },
    active: { __type: "Boolean!" },
    combination: { __type: "String" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    direction: { __type: "StockMovementDirection!" },
    id: { __type: "ID!" },
    quantity: { __type: "Int!" },
    reference: { __type: "String" },
    referenceSourceNo: { __type: "String" },
    sku: { __type: "String!" },
    status: { __type: "StockMovementStatus!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
  },
  StockMovementConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[StockMovement!]!" },
    totalCount: { __type: "Int!" },
  },
  StockMovementFilterInput: {
    createdAt: { __type: "FilterInput" },
    reference: { __type: "FilterInput" },
    sku: { __type: "FilterInput" },
  },
  StockTransferCreateInput: {
    deviceId: { __type: "ID" },
    inboundWarehouseId: { __type: "ID!" },
    items: { __type: "[TransferItemInput!]!" },
    metadata: { __type: "[MetadataInput!]" },
    outboundWarehouseId: { __type: "ID!" },
    referenceNo: { __type: "String" },
    remark: { __type: "String" },
    salespersonId: { __type: "ID" },
    shopId: { __type: "ID" },
    staffId: { __type: "ID" },
    transferWarehouseId: { __type: "ID!" },
  },
  StockTransferFilterInput: {
    active: { __type: "FilterInput" },
    companyId: { __type: "FilterInput" },
    createdAt: { __type: "FilterInput" },
    deviceId: { __type: "FilterInput" },
    id: { __type: "FilterInput" },
    inboundWarehouseId: { __type: "FilterInput" },
    outboundWarehouseId: { __type: "FilterInput" },
    referenceNo: { __type: "FilterInput" },
    remark: { __type: "FilterInput" },
    sku: { __type: "FilterInput" },
    staffId: { __type: "FilterInput" },
    status: { __type: "FilterInput" },
    transferWarehouseId: { __type: "FilterInput" },
    updatedAt: { __type: "FilterInput" },
  },
  StockTransferItem: {
    __typename: { __type: "String!" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    id: { __type: "ID!" },
    metadata: { __type: "[Metadata!]" },
    productVariation: { __type: "ProductVariation" },
    quantity: { __type: "Int!" },
    receivedQuantity: { __type: "Int!" },
    remark: { __type: "String" },
    sku: { __type: "String!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
  },
  StockTransferItemConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[StockTransferItem!]!" },
    totalCount: { __type: "Int!" },
  },
  StockTransferItemFilterInput: {
    createdAt: { __type: "FilterInput" },
    quantity: { __type: "FilterInput" },
    remark: { __type: "FilterInput" },
    sku: { __type: "FilterInput" },
    sortIndex: { __type: "FilterInput" },
    updatedAt: { __type: "FilterInput" },
  },
  StockTransferUpdateInput: {
    deviceId: { __type: "ID" },
    inboundWarehouseId: { __type: "ID" },
    items: { __type: "[TransferItemInput!]" },
    metadata: { __type: "[MetadataInput!]" },
    outboundWarehouseId: { __type: "ID" },
    remark: { __type: "String" },
    salespersonId: { __type: "ID" },
    staffId: { __type: "ID" },
    transferWarehouseId: { __type: "ID" },
  },
  StocktakeInput: {
    deviceId: { __type: "ID" },
    metadata: { __type: "[MetadataInput!]" },
    referenceNo: { __type: "String" },
    remark: { __type: "String" },
    salespersonId: { __type: "ID" },
    shopId: { __type: "ID" },
    staffId: { __type: "ID" },
    warehouseId: { __type: "ID!" },
  },
  StocktakeItemInput: {
    currentStock: { __type: "Int!" },
    quantity: { __type: "Int!" },
    sku: { __type: "String!" },
  },
  SubCouponInput: {
    applyCode: { __type: "CouponApplyCode!" },
    isRedeemable: { __type: "Boolean" },
    memberPointCost: { __type: "Int" },
    numberOfRedeem: { __type: "Int" },
    usage: { __type: "Int" },
  },
  TableCreateInput: {
    metadata: { __type: "[MetadataInput!]" },
    name: { __type: "String!" },
    shape: { __type: "TableShape" },
    shapeData: { __type: "[Int!]" },
    shopId: { __type: "ID!" },
    sortIndex: { __type: "Int" },
    status: { __type: "TableStatus" },
    venueId: { __type: "ID!" },
  },
  TableFilterInput: {
    color: { __type: "FilterInput" },
    createdAt: { __type: "FilterInput" },
    name: { __type: "FilterInput" },
    shape: { __type: "FilterInput" },
    sortIndex: { __type: "FilterInput" },
    status: { __type: "FilterInput" },
    updatedAt: { __type: "FilterInput" },
    venueId: { __type: "FilterInput" },
  },
  TableUpdateInput: {
    metadata: { __type: "[MetadataInput!]" },
    name: { __type: "String" },
    shape: { __type: "TableShape" },
    shapeData: { __type: "[Int!]" },
    sortIndex: { __type: "Int" },
    status: { __type: "TableStatus" },
    venueId: { __type: "ID" },
  },
  TopSalesProduct: {
    __typename: { __type: "String!" },
    amount: { __type: "Float!" },
    count: { __type: "Int!" },
    product: { __type: "ShopProduct" },
    productName: { __type: "String!" },
  },
  TopSalesVariations: {
    __typename: { __type: "String!" },
    amount: { __type: "Float!" },
    count: { __type: "Int!" },
    orderCount: { __type: "Int!" },
    variation: { __type: "ProductVariation!" },
  },
  TotalCollectionSales: {
    __typename: { __type: "String!" },
    totalAmount: { __type: "Float!" },
    totalAvgCount: { __type: "Float!" },
    totalAvgPrice: { __type: "Float!" },
    totalConversionRate: { __type: "Float!" },
    totalCount: { __type: "Float!" },
    totalHitRate: { __type: "Int!" },
    totalOrder: { __type: "Int!" },
    totalPageView: { __type: "Int!" },
  },
  TotalCouponSales: {
    __typename: { __type: "String!" },
    totalAmount: { __type: "Float!" },
    totalAvgCount: { __type: "Float!" },
    totalAvgPrice: { __type: "Float!" },
    totalCount: { __type: "Float!" },
    totalDiscountAmount: { __type: "Float!" },
    totalOrder: { __type: "Int!" },
    totalRedeemCount: { __type: "Int!" },
    totalUsageCount: { __type: "Int!" },
  },
  TotalDiscountSales: {
    __typename: { __type: "String!" },
    totalAmount: { __type: "Float!" },
    totalAvgCount: { __type: "Float!" },
    totalAvgPrice: { __type: "Float!" },
    totalCount: { __type: "Float!" },
    totalDiscountAmount: { __type: "Float!" },
    totalOrder: { __type: "Int!" },
    totalUsageCount: { __type: "Int!" },
  },
  TotalItemSales: {
    __typename: { __type: "String!" },
    amount: { __type: "Float!" },
    count: { __type: "Int!" },
    orderCount: { __type: "Int!" },
  },
  TotalMemberTierSales: {
    __typename: { __type: "String!" },
    totalAmount: { __type: "Float!" },
    totalAvgCount: { __type: "Float!" },
    totalAvgPrice: { __type: "Float!" },
    totalCount: { __type: "Int!" },
    totalMemberCount: { __type: "Int!" },
    totalNewMemberCount: { __type: "Int!" },
    totalOrder: { __type: "Int!" },
  },
  TotalProductSales: {
    __typename: { __type: "String!" },
    totalAmount: { __type: "Float!" },
    totalAvgCount: { __type: "Float!" },
    totalAvgPrice: { __type: "Float!" },
    totalConversionRate: { __type: "Float!" },
    totalCount: { __type: "Float!" },
    totalHitRate: { __type: "Int!" },
    totalOrder: { __type: "Int!" },
    totalPageView: { __type: "Int!" },
  },
  TotalSalespersonSales: {
    __typename: { __type: "String!" },
    totalAmount: { __type: "Float!" },
    totalAvgCount: { __type: "Float!" },
    totalAvgPrice: { __type: "Float!" },
    totalCount: { __type: "Int!" },
    totalOrder: { __type: "Int!" },
  },
  TotalShopSales: {
    __typename: { __type: "String!" },
    totalAmount: { __type: "Float!" },
    totalAvgCount: { __type: "Float!" },
    totalAvgPrice: { __type: "Float!" },
    totalCount: { __type: "Int!" },
    totalMemberAmount: { __type: "Float!" },
    totalNonMemberAmount: { __type: "Float!" },
    totalOrder: { __type: "Int!" },
  },
  TotalVariationSales: {
    __typename: { __type: "String!" },
    totalAmount: { __type: "Float!" },
    totalAvgCount: { __type: "Float!" },
    totalAvgPrice: { __type: "Float!" },
    totalCount: { __type: "Float!" },
    totalOrder: { __type: "Int!" },
  },
  TransferItemInput: {
    id: { __type: "ID" },
    metadata: { __type: "[MetadataInput!]" },
    quantity: { __type: "Int!" },
    remark: { __type: "String" },
    sku: { __type: "ID!" },
  },
  UploadUrlInput: {
    description: { __type: "String" },
    mime: { __type: "String" },
  },
  User: {
    __typename: { __type: "String!" },
    addresses: {
      __type: "UserAddressConnection!",
      __args: { cursor: "Int", limits: "Int", sortBy: "[SorterInput!]" },
    },
    agencyServices: {
      __type: "AgencyServiceConnection!",
      __args: { cursor: "Int", limits: "Int", sortBy: "[SorterInput!]" },
    },
    blocked: { __type: "Boolean!" },
    channels: {
      __type: "ChannelConnection!",
      __args: {
        cursor: "Int",
        filter: "ChannelFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    companies: {
      __type: "CompanyConnection!",
      __args: { cursor: "Int", limits: "Int", sortBy: "[SorterInput!]" },
    },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    devices: {
      __type: "ShopDeviceConnection!",
      __args: {
        cursor: "Int",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
      },
    },
    email: { __type: "AWSEmail!" },
    id: { __type: "ID!" },
    isEmailVerified: { __type: "Boolean!" },
    isPhoneNumberVerified: { __type: "Boolean!" },
    lastLogin: { __type: "AWSDateTime" },
    metadata: { __type: "AWSJSON" },
    name: { __type: "String!" },
    permissions: { __type: "[Permission!]!" },
    phoneNumber: { __type: "String" },
    picture: { __type: "AWSURL" },
    shops: {
      __type: "ShopConnection!",
      __args: {
        cursor: "Int",
        filter: "UserShopsFilterInput",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
      },
    },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
  },
  UserAddress: {
    __typename: { __type: "String!" },
    city: { __type: "String" },
    country: { __type: "Country" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    district: { __type: "String" },
    email: { __type: "String" },
    id: { __type: "ID!" },
    isDefault: { __type: "Boolean!" },
    lines: { __type: "[String!]" },
    name: { __type: "String" },
    person: { __type: "String" },
    postalCode: { __type: "String" },
    state: { __type: "String" },
    tel: { __type: "String" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
  },
  UserAddressConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[UserAddress!]!" },
    totalCount: { __type: "Int!" },
  },
  UserAddressInput: {
    city: { __type: "String" },
    country: { __type: "Country" },
    district: { __type: "String" },
    email: { __type: "String" },
    id: { __type: "ID" },
    isDefault: { __type: "Boolean" },
    lines: { __type: "[String!]" },
    name: { __type: "String" },
    person: { __type: "String" },
    postalCode: { __type: "String" },
    state: { __type: "String" },
    tel: { __type: "String" },
  },
  UserCard: {
    __typename: { __type: "String!" },
    active: { __type: "Boolean!" },
    card: { __type: "AWSJSON!" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    default: { __type: "Boolean!" },
    id: { __type: "ID!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
    user: { __type: "User!" },
  },
  UserConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[User!]!" },
    totalCount: { __type: "Int!" },
  },
  UserCoupon: {
    __typename: { __type: "String!" },
    coupon: { __type: "CompanyCoupon!" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    customer: { __type: "Customer" },
    handle: { __type: "String!" },
    id: { __type: "ID!" },
    status: { __type: "UserCouponStatus!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
    usage: { __type: "Int!" },
    usedAt: { __type: "AWSDateTime" },
    user: { __type: "User" },
    validAt: { __type: "AWSDateTime" },
    validThru: { __type: "AWSDateTime" },
  },
  UserCouponConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[UserCoupon!]!" },
    totalCount: { __type: "Int!" },
  },
  UserCouponExportFilterInput: {
    createdAt: { __type: "FilterInput" },
    customerId: { __type: "FilterInput" },
    id: { __type: "FilterInput" },
    status: { __type: "FilterInput" },
    usedAt: { __type: "FilterInput" },
    validAt: { __type: "FilterInput" },
    validThru: { __type: "FilterInput" },
  },
  UserCouponFilterInput: {
    couponResolvable: { __type: "Boolean" },
    createdAt: { __type: "FilterInput" },
    id: { __type: "FilterInput" },
    status: { __type: "FilterInput" },
    updatedAt: { __type: "FilterInput" },
    usedAt: { __type: "FilterInput" },
    userId: { __type: "FilterInput" },
    validAt: { __type: "FilterInput" },
    validThru: { __type: "FilterInput" },
  },
  UserCreateInput: {
    hashtags: { __type: "[String!]" },
    isEmailVerified: { __type: "Boolean" },
    isPhoneNumberVerified: { __type: "Boolean" },
    metadata: { __type: "[MetadataInput!]" },
    name: { __type: "String!" },
    permissions: { __type: "[PermissionInput!]!" },
    picture: { __type: "AWSURL" },
  },
  UserCredentialInput: {
    email: { __type: "AWSEmail!" },
    mobile: { __type: "AWSPhone" },
    mobileV2: { __type: "String" },
    password: { __type: "String!" },
  },
  UserCredentialUpdateInput: {
    email: { __type: "AWSEmail" },
    mobile: { __type: "AWSPhone" },
    mobileV2: { __type: "String" },
    password: { __type: "String" },
  },
  UserFilterInput: {
    active: { __type: "FilterInput" },
    companyId: { __type: "FilterInput" },
    createdAt: { __type: "FilterInput" },
    email: { __type: "FilterInput" },
    hashTags: { __type: "[String]" },
    hashtags: { __type: "[String!]" },
    id: { __type: "FilterInput" },
    name: { __type: "FilterInput" },
    phoneNumber: { __type: "FilterInput" },
    query: { __type: "[UserQueryFilterInput!]" },
    search: { __type: "FilterInput" },
    shopId: { __type: "FilterInput" },
    updatedAt: { __type: "FilterInput" },
    userId: { __type: "FilterInput" },
  },
  UserMemberTierFilterInput: {
    createdAt: { __type: "FilterInput" },
    id: { __type: "FilterInput" },
    memberTierId: { __type: "FilterInput" },
    startedAt: { __type: "FilterInput" },
    startedThru: { __type: "FilterInput" },
    updatedAt: { __type: "FilterInput" },
    userId: { __type: "FilterInput" },
  },
  UserMemberTierSetInput: {
    memberTierId: { __type: "String!" },
    metadata: { __type: "[MetadataInput!]" },
    startedThru: { __type: "AWSDateTime" },
  },
  UserOrCustomer: {
    __typename: { __type: "String!" },
    $on: { __type: "$UserOrCustomer!" },
  },
  UserQueryFilterInput: {
    key: { __type: "String!" },
    value: { __type: "String!" },
  },
  UserRegisterShopInput: { name: { __type: "String!" } },
  UserRegisterUserInput: { name: { __type: "String" } },
  UserReport: {
    __typename: { __type: "String!" },
    averageConsumption: { __type: "Float!" },
    turnover: { __type: "Float!" },
    volume: { __type: "Int!" },
  },
  UserSalesFilterInput: {
    startedAt: { __type: "AWSDateTime" },
    startedThru: { __type: "AWSDateTime" },
  },
  UserShopsFilterInput: {
    active: { __type: "FilterInput" },
    branchType: { __type: "FilterInput" },
    createdAt: { __type: "FilterInput" },
    expiredAt: { __type: "FilterInput" },
    id: { __type: "FilterInput" },
    isContactEmailVerified: { __type: "FilterInput" },
    name: { __type: "FilterInput" },
    updatedAt: { __type: "FilterInput" },
  },
  UserUpdateInput: {
    hashtags: { __type: "[String!]" },
    isEmailVerified: { __type: "Boolean" },
    isPhoneNumberVerified: { __type: "Boolean" },
    metadata: { __type: "[MetadataInput!]" },
    name: { __type: "String" },
    permissions: { __type: "[PermissionInput!]" },
    picture: { __type: "AWSURL" },
  },
  VariationConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[ProductVariation!]!" },
    totalCount: { __type: "Int!" },
  },
  VariationSales: {
    __typename: { __type: "String!" },
    amount: { __type: "Float!" },
    avgCount: { __type: "Float!" },
    avgPrice: { __type: "Float!" },
    barcode: { __type: "String" },
    barcodes: { __type: "[String!]" },
    count: { __type: "Int!" },
    countries: { __type: "[ChartData!]!" },
    id: { __type: "ID!" },
    memberAmount: { __type: "Float!" },
    memberLevelAmounts: { __type: "[ChartData!]!" },
    memberLevels: { __type: "[ChartData!]!" },
    name: { __type: "String!" },
    nonMemberAmount: { __type: "Float!" },
    orderCount: { __type: "Int!" },
    salesPoints: { __type: "[ChartData!]!" },
    salesRecords: {
      __type: "ProductSalesRecordConnection!",
      __args: {
        cursor: "Int",
        limits: "Int",
        query: "String",
        sortBy: "[SorterInput!]",
      },
    },
    salesTrends: { __type: "[LineChartData!]!" },
    shopId: { __type: "ID!" },
    sku: { __type: "String!" },
  },
  VariationSalesConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[VariationSales!]!" },
    totalCount: { __type: "Int!" },
  },
  VariationStock: {
    __typename: { __type: "String!" },
    quantity: { __type: "Int!" },
    sku: { __type: "String!" },
  },
  VariationStockConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[VariationStock!]!" },
    totalCount: { __type: "Int!" },
  },
  VenueCreateInput: {
    media: { __type: "MediaInput" },
    metadata: { __type: "[MetadataInput!]" },
    name: { __type: "String!" },
    shopId: { __type: "ID!" },
    sortIndex: { __type: "Int" },
    tables: { __type: "[VenueTableSetInput!]" },
  },
  VenueFilterInput: {
    createdAt: { __type: "FilterInput" },
    name: { __type: "FilterInput" },
    sortIndex: { __type: "FilterInput" },
    updatedAt: { __type: "FilterInput" },
  },
  VenueTableSetInput: {
    id: { __type: "ID" },
    metadata: { __type: "[MetadataInput!]" },
    name: { __type: "String!" },
    shape: { __type: "TableShape" },
    shapeData: { __type: "[Int!]" },
    sortIndex: { __type: "Int" },
    status: { __type: "TableStatus" },
  },
  VenueUpdateInput: {
    media: { __type: "MediaInput" },
    metadata: { __type: "[MetadataInput!]" },
    name: { __type: "String" },
    sortIndex: { __type: "Int" },
    tables: { __type: "[VenueTableSetInput!]" },
  },
  WarehouseConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[CompanyWarehouse!]!" },
    totalCount: { __type: "Int!" },
  },
  WarehouseFilterInput: {
    active: { __type: "FilterInput" },
    createdAt: { __type: "FilterInput" },
    id: { __type: "FilterInput" },
    name: { __type: "FilterInput" },
    sortIndex: { __type: "FilterInput" },
    type: { __type: "FilterInput" },
    updatedAt: { __type: "FilterInput" },
  },
  WarehouseQuantity: {
    __typename: { __type: "String!" },
    quantity: { __type: "Int!" },
    warehouse: { __type: "CompanyWarehouse!" },
    warehouseId: { __type: "ID!" },
  },
  WarehouseSetInput: {
    active: { __type: "Boolean" },
    address: { __type: "AddressInput" },
    companyId: { __type: "String!" },
    name: { __type: "String!" },
    shopIds: { __type: "[String!]" },
    sortIndex: { __type: "Int" },
    type: { __type: "CompanyWarehouseTypes" },
  },
  Webhook: {
    __typename: { __type: "String!" },
    active: { __type: "Boolean!" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    event: { __type: "String!" },
    id: { __type: "ID!" },
    query: { __type: "String!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
    uri: { __type: "AWSURL!" },
  },
  WishItem: {
    __typename: { __type: "String!" },
    bundleProduct: { __type: "ShopBundleProduct" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    description: { __type: "String" },
    id: { __type: "ID!" },
    product: { __type: "ShopProduct" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
    wishlist: { __type: "Wishlist!" },
  },
  WishItemConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[WishItem!]!" },
    totalCount: { __type: "Int!" },
  },
  WishItemFilterInput: {
    active: { __type: "FilterInput" },
    createdAt: { __type: "FilterInput" },
    id: { __type: "FilterInput" },
    productId: { __type: "FilterInput" },
    updatedAt: { __type: "FilterInput" },
    userId: { __type: "FilterInput" },
    wishlistId: { __type: "FilterInput" },
  },
  WishItemSetInput: {
    bundleProductId: { __type: "ID" },
    description: { __type: "String" },
    productId: { __type: "ID" },
    wishlistId: { __type: "ID" },
  },
  Wishlist: {
    __typename: { __type: "String!" },
    createdAt: { __type: "AWSDateTime!" },
    createdBy: { __type: "User" },
    description: { __type: "String" },
    id: { __type: "ID!" },
    isDefault: { __type: "Boolean!" },
    items: {
      __type: "WishItemConnection!",
      __args: {
        cursor: "Int",
        filter: "WishItemFilterInput",
        limits: "Int",
        sortBy: "[SorterInput!]",
      },
    },
    name: { __type: "String!" },
    updatedAt: { __type: "AWSDateTime!" },
    updatedBy: { __type: "User" },
  },
  WishlistConnection: {
    __typename: { __type: "String!" },
    nextCursor: { __type: "ID" },
    nodes: { __type: "[Wishlist!]!" },
    totalCount: { __type: "Int!" },
  },
  WishlistFilterInput: {
    active: { __type: "FilterInput" },
    createdAt: { __type: "FilterInput" },
    id: { __type: "FilterInput" },
    isDefault: { __type: "FilterInput" },
    name: { __type: "FilterInput" },
    updatedAt: { __type: "FilterInput" },
    userId: { __type: "FilterInput" },
  },
  WishlistSetInput: {
    description: { __type: "String" },
    name: { __type: "String!" },
  },
  mutation: {
    __typename: { __type: "String!" },
    addOnProductSet: {
      __type: "ShopAddOnProduct!",
      __args: { id: "ID", input: "AddOnProductInput!" },
    },
    addOnProductUnset: { __type: "ShopAddOnProduct!", __args: { id: "ID!" } },
    addOnProductsActivate: {
      __type: "Process!",
      __args: {
        filter: "AddOnProductFilterInput",
        query: "String",
        shopId: "ID!",
      },
    },
    addOnProductsDeactivate: {
      __type: "Process!",
      __args: {
        filter: "AddOnProductFilterInput",
        query: "String",
        shopId: "ID!",
      },
    },
    addOnProductsDelete: {
      __type: "Process!",
      __args: {
        filter: "AddOnProductFilterInput",
        query: "String",
        shopId: "ID!",
      },
    },
    addOnProductsPriceAdjust: {
      __type: "Process!",
      __args: {
        filter: "AddOnProductFilterInput",
        operator: "BatchOperator!",
        query: "String",
        safetyThreshold: "Float",
        shopId: "ID!",
        value: "Float!",
      },
    },
    addOnProductsQuantitySet: {
      __type: "Process!",
      __args: {
        filter: "AddOnProductFilterInput",
        operator: "BatchOperator!",
        quantity: "Int!",
        query: "String",
        shopId: "ID!",
      },
    },
    agentServiceSet: {
      __type: "AgencyService!",
      __args: { id: "ID", input: "AgencyServiceInput!" },
    },
    agentServiceUnset: { __type: "AgencyService!", __args: { id: "ID!" } },
    appointmentAttend: { __type: "ShopAppointment!", __args: { id: "ID!" } },
    appointmentBook: {
      __type: "ShopAppointment!",
      __args: { input: "AppointmentBookInput!" },
    },
    appointmentCancel: { __type: "ShopAppointment!", __args: { id: "ID!" } },
    appointmentConfirm: { __type: "ShopAppointment!", __args: { id: "ID!" } },
    appointmentCreate: {
      __type: "ShopAppointment!",
      __args: { input: "AppointmentCreateInput!" },
    },
    appointmentNoShow: { __type: "ShopAppointment!", __args: { id: "ID!" } },
    appointmentUpdate: {
      __type: "ShopAppointment!",
      __args: { id: "ID!", input: "AppointmentUpdateInput!" },
    },
    attendanceCreate: {
      __type: "ShopAttendance!",
      __args: { input: "AttendanceCreateInput!" },
    },
    attendancesExport: {
      __type: "Process!",
      __args: { filter: "AttendanceFilterInput", shopId: "ID!" },
    },
    bundleProductCreate: {
      __type: "ShopBundleProduct!",
      __args: { input: "BundleProductCreateInput!" },
    },
    bundleProductDelete: {
      __type: "ShopBundleProduct!",
      __args: { id: "ID!" },
    },
    bundleProductUpdate: {
      __type: "ShopBundleProduct!",
      __args: { id: "ID!", input: "BundleProductUpdateInput!" },
    },
    campaignActivate: { __type: "ShopCampaign!", __args: { id: "ID!" } },
    campaignDeactivate: { __type: "ShopCampaign!", __args: { id: "ID!" } },
    campaignDeliveryReportExport: { __type: "Process!", __args: { id: "ID!" } },
    campaignMessageSend: {
      __type: "ShopCampaign!",
      __args: { id: "ID!", isResend: "Boolean" },
    },
    campaignRecipientActionsExport: {
      __type: "Process!",
      __args: { id: "ID!" },
    },
    campaignSet: {
      __type: "ShopCampaign!",
      __args: { id: "ID", input: "CampaignSetInput!" },
    },
    campaignUnset: { __type: "ShopCampaign!", __args: { id: "ID!" } },
    campaignsActivate: {
      __type: "Process!",
      __args: { filter: "CampaignFilterInput", query: "String", shopId: "ID!" },
    },
    campaignsDeactivate: {
      __type: "Process!",
      __args: { filter: "CampaignFilterInput", query: "String", shopId: "ID!" },
    },
    campaignsDelete: {
      __type: "Process!",
      __args: { filter: "CampaignFilterInput", query: "String", shopId: "ID!" },
    },
    cashFlowCreate: {
      __type: "ShopCashFlow!",
      __args: { input: "CashFlowInput!" },
    },
    cashVoucherSet: {
      __type: "CompanyCashVoucher!",
      __args: { id: "ID", input: "CashVoucherSetInput!" },
    },
    cashVoucherUnset: { __type: "CompanyCashVoucher!", __args: { id: "ID!" } },
    cashVouchersActivate: {
      __type: "Process!",
      __args: { query: "String", shopId: "ID!" },
    },
    cashVouchersDeactivate: {
      __type: "Process!",
      __args: { query: "String", shopId: "ID!" },
    },
    cashVouchersDelete: {
      __type: "Process!",
      __args: { query: "String", shopId: "ID!" },
    },
    channelMessageRead: {
      __type: "ChannelMessage!",
      __args: { channelPlayerId: "String!", messageId: "ID!" },
    },
    channelMessageSet: {
      __type: "ChannelMessage!",
      __args: { id: "ID", input: "ChannelMessageSetInput!" },
    },
    channelPlayerSet: {
      __type: "ChannelPlayer!",
      __args: { id: "String", input: "ChannelPlayerSetInput!" },
    },
    channelPlayerUnset: {
      __type: "ChannelPlayer!",
      __args: { channelId: "ID!", id: "String!" },
    },
    channelRead: {
      __type: "ChannelMessage!",
      __args: { channelId: "ID!", channelPlayerId: "String!" },
    },
    channelSet: {
      __type: "Channel!",
      __args: { id: "ID", input: "ChannelSetInput!" },
    },
    channelUnset: { __type: "Channel!", __args: { id: "ID!" } },
    checkoutCancel: { __type: "ShopCheckout!", __args: { id: "ID!" } },
    checkoutCashVoucherSet: {
      __type: "ShopCheckout!",
      __args: { id: "ID!", input: "CheckoutCashVoucherInput!" },
    },
    checkoutCouponSet: {
      __type: "ShopCheckout!",
      __args: { couponId: "ID", handle: "String", id: "ID!" },
    },
    checkoutCouponUnset: {
      __type: "ShopCheckout!",
      __args: { checkoutCouponId: "ID", handle: "String", id: "ID!" },
    },
    checkoutCreateOffline: {
      __type: "ShopCheckout!",
      __args: { input: "CheckoutCreateOfflineInput!" },
    },
    checkoutItemSet: {
      __type: "ShopCheckout!",
      __args: {
        id: "ID!",
        input: "CheckoutItemInput!",
        operator: "CheckoutItemSetOperator!",
        progressive: "Boolean",
        softDelete: "Boolean",
      },
    },
    checkoutItemsCreate: {
      __type: "ShopCheckout!",
      __args: {
        id: "ID!",
        input: "[CheckoutItemCreateInput!]!",
        progressive: "Boolean",
      },
    },
    checkoutItemsDelete: {
      __type: "ShopCheckout!",
      __args: { checkoutItemIds: "[ID!]!", id: "ID!" },
    },
    checkoutPay: {
      __type: "ShopCheckout!",
      __args: {
        id: "ID!",
        idempotencyKey: "String",
        input: "CheckoutPayInput!",
      },
    },
    checkoutPriceRecalculate: {
      __type: "ShopCheckout!",
      __args: { id: "ID!" },
    },
    checkoutProcess: {
      __type: "ShopCheckout!",
      __args: { addOnProductInputs: "[CheckoutAddOnProductInput!]", id: "ID!" },
    },
    checkoutSet: {
      __type: "ShopCheckout!",
      __args: { id: "ID", input: "CheckoutInput!" },
    },
    collectionParentSet: {
      __type: "[ShopCollection!]!",
      __args: { input: "[CollectionParentSetInput!]!" },
    },
    collectionProductsAdd: {
      __type: "ShopCollection!",
      __args: { id: "ID!", productIds: "[ID!]!" },
    },
    collectionProductsRemove: {
      __type: "ShopCollection!",
      __args: { id: "ID!", productIds: "[ID!]!" },
    },
    collectionSet: {
      __type: "ShopCollection!",
      __args: { id: "ID", input: "CollectionInput!" },
    },
    collectionUnset: { __type: "ShopCollection!", __args: { id: "ID!" } },
    collectionsActivate: {
      __type: "Process!",
      __args: {
        filter: "CollectionFilterInput",
        query: "String",
        shopId: "ID!",
      },
    },
    collectionsDeactivate: {
      __type: "Process!",
      __args: {
        filter: "CollectionFilterInput",
        query: "String",
        shopId: "ID!",
      },
    },
    collectionsExport: {
      __type: "Process!",
      __args: { filter: "CollectionFilterInput", shopId: "ID!" },
    },
    collectionsImport: {
      __type: "Process!",
      __args: { shopId: "ID!", url: "AWSURL!" },
    },
    collectionsReportExport: {
      __type: "Process!",
      __args: {
        exportShopIds: "[ID!]",
        shopId: "ID!",
        startedAt: "AWSDateTime!",
        startedThru: "AWSDateTime!",
      },
    },
    collectionsUnset: {
      __type: "Process!",
      __args: {
        filter: "CollectionFilterInput",
        query: "String",
        shopId: "ID!",
      },
    },
    companyCouponActivate: { __type: "CompanyCoupon!", __args: { id: "ID!" } },
    companyCouponDeactivate: {
      __type: "CompanyCoupon!",
      __args: { id: "ID!" },
    },
    companyCouponSet: {
      __type: "CompanyCoupon!",
      __args: {
        id: "ID",
        input: "CouponInput!",
        subCouponInput: "SubCouponInput",
      },
    },
    companyCouponUnset: { __type: "CompanyCoupon!", __args: { id: "ID!" } },
    companyDiscountSet: {
      __type: "CompanyDiscount!",
      __args: { id: "ID", input: "DiscountInput!" },
    },
    companyDiscountUnset: { __type: "CompanyDiscount!", __args: { id: "ID!" } },
    companyMemberTierSet: {
      __type: "CompanyMemberTier!",
      __args: { id: "ID", input: "CompanyMemberTierInput!" },
    },
    companyMemberTierUnset: {
      __type: "CompanyMemberTier!",
      __args: { id: "ID!" },
    },
    companyPaymentSourceDelete: {
      __type: "PaymentSource!",
      __args: { companyId: "ID!", id: "ID!" },
    },
    companyShopActivate: { __type: "CompanyShop!", __args: { id: "ID!" } },
    companyShopCreate: {
      __type: "CompanyShop!",
      __args: {
        companyId: "ID!",
        credential: "CompanyShopCredentialInput",
        input: "CompanyShopInput!",
      },
    },
    companyShopDeactivate: { __type: "CompanyShop!", __args: { id: "ID!" } },
    companyShopSet: {
      __type: "CompanyShop!",
      __args: { id: "ID!", input: "CompanyShopInput!" },
    },
    companyShopUpdate: {
      __type: "CompanyShop!",
      __args: { id: "ID!", input: "CompanyShopInput!" },
    },
    companyUpdate: {
      __type: "Company!",
      __args: { id: "ID!", input: "CompanyUpdateInput!" },
    },
    companyWebhookSet: {
      __type: "Webhook!",
      __args: { event: "String!", id: "ID!", query: "String!", uri: "String!" },
    },
    couponRedeem: {
      __type: "UserCoupon!",
      __args: { couponId: "ID!", userId: "ID" },
    },
    couponsActivate: {
      __type: "Process!",
      __args: {
        filter: "CompanyCouponFilterInput",
        query: "String",
        shopId: "ID!",
      },
    },
    couponsDeactivate: {
      __type: "Process!",
      __args: {
        filter: "CompanyCouponFilterInput",
        query: "String",
        shopId: "ID!",
      },
    },
    couponsDelete: {
      __type: "Process!",
      __args: {
        filter: "CompanyCouponFilterInput",
        query: "String",
        shopId: "ID!",
      },
    },
    couponsReportExport: {
      __type: "Process!",
      __args: {
        shopId: "ID!",
        startedAt: "AWSDateTime!",
        startedThru: "AWSDateTime!",
      },
    },
    credentialEFTPaySet: {
      __type: "[ShopCredential!]!",
      __args: { input: "ShopPaymentCredentialInput!", shopId: "ID!" },
    },
    credentialKConnectSet: {
      __type: "ShopCredential!",
      __args: { input: "ShopAuthenticationCredentialInput!", shopId: "ID!" },
    },
    credentialKPayPosSet: {
      __type: "[ShopCredential!]!",
      __args: { input: "ShopPaymentCredentialInput!", shopId: "ID!" },
    },
    credentialKPaySet: {
      __type: "[ShopCredential!]!",
      __args: { input: "ShopPaymentCredentialInput!", shopId: "ID!" },
    },
    credentialManualSet: {
      __type: "[ShopCredential!]!",
      __args: { input: "ShopManualCredentialInput!", shopId: "ID!" },
    },
    credentialOCGCSet: {
      __type: "[ShopCredential!]!",
      __args: { input: "ShopPaymentCredentialInput!", shopId: "ID!" },
    },
    credentialSFExpressSet: {
      __type: "[ShopCredential!]!",
      __args: { input: "ShopShippingCredentialInput!", shopId: "ID!" },
    },
    credentialSet: {
      __type: "ShopCredential!",
      __args: { id: "ID", input: "CredentialSetInput!" },
    },
    credentialSmartPaySet: {
      __type: "[ShopCredential!]!",
      __args: { input: "ShopPaymentCredentialInput!", shopId: "ID!" },
    },
    credentialStripeConnectRegister: {
      __type: "[ShopCredential!]!",
      __args: { input: "ShopPaymentCredentialInput!", shopId: "ID!" },
    },
    credentialStripeConnectSet: {
      __type: "[ShopCredential!]!",
      __args: { input: "ShopPaymentCredentialInput!", shopId: "ID!" },
    },
    credentialStripeSet: {
      __type: "[ShopCredential!]!",
      __args: { input: "ShopPaymentCredentialInput!", shopId: "ID!" },
    },
    credentialSwiftPassSet: {
      __type: "[ShopCredential!]!",
      __args: { input: "ShopPaymentCredentialInput!", shopId: "ID!" },
    },
    credentialUnset: { __type: "ShopCredential!", __args: { id: "ID!" } },
    credentialUprisePaymentSet: {
      __type: "[ShopCredential!]!",
      __args: { input: "ShopPaymentCredentialInput!", shopId: "ID!" },
    },
    creditNoteVoid: { __type: "InvoiceCreditNote!", __args: { id: "ID!" } },
    customerAddressCreate: {
      __type: "CustomerAddress!",
      __args: { input: "CustomerAddressCreateInput!" },
    },
    customerAddressDelete: {
      __type: "CustomerAddress!",
      __args: { id: "ID!" },
    },
    customerAddressUpdate: {
      __type: "CustomerAddress!",
      __args: { id: "ID!", input: "CustomerAddressUpdateInput!" },
    },
    customerBlock: {
      __type: "Customer!",
      __args: { id: "ID!", shopId: "ID!" },
    },
    customerCouponCancel: {
      __type: "UserCoupon!",
      __args: { couponId: "ID!" },
    },
    customerCouponVoid: { __type: "UserCoupon!", __args: { couponId: "ID!" } },
    customerGiftPointsSet: {
      __type: "Customer!",
      __args: { id: "ID!", points: "Int!", remarks: "String", shopId: "ID!" },
    },
    customerPaymentSourceCreate: {
      __type: "PaymentSource!",
      __args: { credentialId: "String!", token: "String!" },
    },
    customerPaymentSourceDelete: {
      __type: "PaymentSource!",
      __args: { id: "ID!" },
    },
    customerRecover: { __type: "Boolean", __args: { email: "AWSEmail!" } },
    customerRecoverByMobile: {
      __type: "Boolean",
      __args: { mobile: "AWSPhone", mobileV2: "String" },
    },
    customerRegister: {
      __type: "Customer!",
      __args: {
        captchaToken: "String",
        credential: "CustomerCredentialInput!",
        input: "CustomerProfileInput!",
        shopId: "ID",
      },
    },
    customerReset: {
      __type: "Boolean",
      __args: { password: "String!", token: "String!" },
    },
    customerUnblock: {
      __type: "Customer!",
      __args: { id: "ID!", shopId: "ID!" },
    },
    customerUpdate: {
      __type: "Customer!",
      __args: {
        credential: "UserCredentialUpdateInput",
        id: "ID!",
        input: "CustomerProfileInput!",
        shopId: "ID!",
      },
    },
    customerVerify: { __type: "Customer!", __args: { token: "String!" } },
    customersExport: {
      __type: "Process!",
      __args: {
        filter: "CustomerFilterInput",
        query: "String",
        shopId: "ID!",
        timezone: "String",
      },
    },
    customersGiftPointsExport: {
      __type: "Process!",
      __args: {
        filter: "GiftPointExportFilterInput",
        shopId: "ID!",
        timezone: "String",
      },
    },
    customersGiftPointsSet: {
      __type: "Process!",
      __args: {
        filter: "CustomerFilterInput",
        operator: "BatchOperator!",
        points: "Int!",
        query: "String",
        shopId: "ID!",
      },
    },
    customersHashtagsSet: {
      __type: "Process!",
      __args: {
        filter: "CustomerFilterInput",
        hashtags: "[String!]!",
        operator: "BatchAssignmentOperator!",
        query: "String",
        shopId: "ID!",
      },
    },
    customersImport: {
      __type: "Process!",
      __args: { shopId: "ID!", timezone: "String", url: "AWSURL!" },
    },
    customersMemberTierSet: {
      __type: "Process!",
      __args: {
        filter: "CustomerFilterInput",
        input: "UserMemberTierSetInput!",
        query: "String",
        shopId: "ID!",
      },
    },
    customersUpdateImport: {
      __type: "Process!",
      __args: { shopId: "ID!", url: "AWSURL!" },
    },
    deliveryNoteComplete: {
      __type: "OrderDeliveryNote!",
      __args: { id: "ID!" },
    },
    deliveryNoteCompleteV2: {
      __type: "OrderDeliveryNote!",
      __args: { id: "ID!" },
    },
    deliveryNoteCreate: {
      __type: "OrderDeliveryNote!",
      __args: { input: "DeliveryNoteCreateInput!" },
    },
    deliveryNoteProcess: {
      __type: "OrderDeliveryNote!",
      __args: { id: "ID!" },
    },
    deliveryNoteSet: {
      __type: "OrderDeliveryNote!",
      __args: { id: "ID", input: "DeliveryNoteSetInput!" },
    },
    deliveryNoteUpdate: {
      __type: "OrderDeliveryNote!",
      __args: { id: "ID!", input: "DeliveryNoteUpdateInput!" },
    },
    deliveryNoteVoid: { __type: "OrderDeliveryNote!", __args: { id: "ID!" } },
    deliveryNotesComplete: {
      __type: "Process!",
      __args: {
        filter: "DeliveryNotesFilterInput",
        query: "String",
        shopId: "ID!",
      },
    },
    deliveryNotesProcess: {
      __type: "Process!",
      __args: {
        filter: "DeliveryNotesFilterInput",
        query: "String",
        shopId: "ID!",
      },
    },
    deliveryNotesSet: {
      __type: "Process!",
      __args: {
        filter: "DeliveryNotesFilterInput",
        input: "DeliveryNoteSetInput!",
        query: "String",
        shopId: "ID!",
      },
    },
    deviceConfigUpdate: {
      __type: "Boolean!",
      __args: { input: "DeviceConfigUpdateInput!" },
    },
    discountsActivate: {
      __type: "Process!",
      __args: { filter: "DiscountFilterInput", query: "String", shopId: "ID!" },
    },
    discountsDeactivate: {
      __type: "Process!",
      __args: { filter: "DiscountFilterInput", query: "String", shopId: "ID!" },
    },
    discountsDelete: {
      __type: "Process!",
      __args: { filter: "DiscountFilterInput", query: "String", shopId: "ID!" },
    },
    discountsReportExport: {
      __type: "Process!",
      __args: {
        shopId: "ID!",
        startedAt: "AWSDateTime!",
        startedThru: "AWSDateTime!",
      },
    },
    emailTemplateCreate: {
      __type: "ShopEmailTemplate!",
      __args: { input: "ShopEmailTemplateCreateInput!" },
    },
    emailTemplateDelete: {
      __type: "ShopEmailTemplate!",
      __args: { id: "ID!" },
    },
    emailTemplateUpdate: {
      __type: "ShopEmailTemplate!",
      __args: { id: "ID!", input: "ShopEmailTemplateUpdateInput!" },
    },
    honorProductSerialsImport: {
      __type: "Process!",
      __args: { url: "String!" },
    },
    ingredientSet: {
      __type: "Ingredient!",
      __args: { id: "ID", input: "IngredientInput!" },
    },
    ingredientUnset: { __type: "Ingredient!", __args: { id: "ID!" } },
    internal_processSet: {
      __type: "Process!",
      __args: { id: "ID!", output: "AWSJSON", status: "ProcessStatus" },
    },
    inventoryReportExport: {
      __type: "Process!",
      __args: { exportShopIds: "[ID!]", shopId: "ID!" },
    },
    invoiceRefund: {
      __type: "OrderInvoice!",
      __args: { amount: "Float", id: "ID!" },
    },
    invoiceVoid: { __type: "OrderInvoice!", __args: { id: "ID!" } },
    invoicesPrint: {
      __type: "Process!",
      __args: {
        filter: "InvoiceFilterInput",
        query: "String",
        shopId: "ID!",
        sortBy: "[SorterInput!]",
      },
    },
    modifierProductsAdd: {
      __type: "ShopProductModifier!",
      __args: { id: "ID!", productIds: "[ID!]!" },
    },
    modifierProductsRemove: {
      __type: "ShopProductModifier!",
      __args: { id: "ID!", productIds: "[ID!]!" },
    },
    navigationTemplateCreate: {
      __type: "ShopNavigationTemplate!",
      __args: { input: "NavigationTemplateCreateInput!" },
    },
    navigationTemplateDelete: {
      __type: "ShopNavigationTemplate!",
      __args: { id: "ID!" },
    },
    navigationTemplateUpdate: {
      __type: "ShopNavigationTemplate!",
      __args: { id: "ID!", input: "NavigationTemplateUpdateInput!" },
    },
    newsletterSubscribe: {
      __type: "NewsletterSubscription!",
      __args: { id: "ID", input: "NewsletterSubscriptionSetInput!" },
    },
    newsletterUnset: {
      __type: "NewsletterSubscription!",
      __args: { id: "ID!" },
    },
    orderAdjustmentAdd: {
      __type: "ShopOrder!",
      __args: { input: "OrderAdjustmentInput!", orderId: "ID!" },
    },
    orderAdjustmentRemove: { __type: "ShopOrder!", __args: { id: "ID!" } },
    orderBillingAddressUpdate: {
      __type: "ShopOrder!",
      __args: { address: "AddressInput!", id: "ID!" },
    },
    orderCancel: {
      __type: "ShopOrder!",
      __args: { id: "ID!", input: "OrderCancelInput!" },
    },
    orderCommentSet: {
      __type: "OrderComment!",
      __args: { id: "ID", input: "OrderCommentInput!" },
    },
    orderCommentUnset: { __type: "OrderComment!", __args: { id: "ID!" } },
    orderConfirm: { __type: "ShopOrder!", __args: { id: "ID!" } },
    orderItemMetadataAdd: {
      __type: "ShopOrder!",
      __args: { id: "ID!", metadata: "[MetadataInput!]!" },
    },
    orderItemMetadataRemove: {
      __type: "ShopOrder!",
      __args: { id: "ID!", keys: "[String!]!" },
    },
    orderItemRemarkUpdate: {
      __type: "ShopOrder!",
      __args: { id: "ID!", remark: "String!" },
    },
    orderItemUnitPriceUpdate: {
      __type: "ShopOrder!",
      __args: { id: "ID!", unitPrice: "Float!" },
    },
    orderKitchenStatusUpdate: {
      __type: "ShopOrder!",
      __args: { id: "ID!", status: "ShopOrderKitchenStatus!" },
    },
    orderMemberPointsDeduct: {
      __type: "ShopOrder!",
      __args: { id: "ID!", points: "Int" },
    },
    orderRefund: {
      __type: "ShopOrder!",
      __args: { amount: "Float", id: "ID!" },
    },
    orderResendConfirmationEmail: {
      __type: "ShopOrder!",
      __args: { id: "ID!" },
    },
    orderUpdate: {
      __type: "ShopOrder!",
      __args: { id: "ID!", input: "OrderUpdateInput!" },
    },
    ordersActivate: {
      __type: "Process!",
      __args: { filter: "OrderFilterInput", shopId: "ID!" },
    },
    ordersCancel: {
      __type: "Process!",
      __args: {
        cancelReason: "String",
        filter: "OrderFilterInput",
        query: "String",
        shopId: "ID!",
      },
    },
    ordersConfirm: {
      __type: "Process!",
      __args: { filter: "OrderFilterInput", query: "String", shopId: "ID!" },
    },
    ordersDeactivate: {
      __type: "Process!",
      __args: { filter: "OrderFilterInput", shopId: "ID!" },
    },
    ordersExport: {
      __type: "Process!",
      __args: { filter: "OrderFilterInput", query: "String", shopId: "ID!" },
    },
    pageBulkAction: {
      __type: "Boolean",
      __args: {
        action: "PageBulkAction!",
        data: "String",
        filter: "PageFilterInput!",
        shopId: "ID!",
      },
    },
    pageSet: { __type: "ShopPage!", __args: { id: "ID", input: "PageInput!" } },
    pageUnset: { __type: "ShopPage!", __args: { id: "ID!" } },
    pagesDelete: {
      __type: "Process",
      __args: { filter: "PageFilterInput", query: "String", shopId: "ID!" },
    },
    paymentMethodActivate: { __type: "PaymentMethod!", __args: { id: "ID!" } },
    paymentMethodCreate: {
      __type: "PaymentMethod!",
      __args: { input: "PaymentMethodCreateInput!" },
    },
    paymentMethodDeactivate: {
      __type: "PaymentMethod!",
      __args: { id: "ID!" },
    },
    paymentMethodDelete: { __type: "PaymentMethod!", __args: { id: "ID!" } },
    paymentMethodDisable: { __type: "PaymentMethod!", __args: { id: "ID!" } },
    paymentMethodEnable: { __type: "PaymentMethod!", __args: { id: "ID!" } },
    paymentMethodUpdate: {
      __type: "PaymentMethod!",
      __args: { id: "ID!", input: "PaymentMethodUpdateInput!" },
    },
    productModifierCreate: {
      __type: "ShopProductModifier!",
      __args: { input: "ShopProductModifierCreateInput!" },
    },
    productModifierDelete: {
      __type: "ShopProductModifier!",
      __args: { id: "ID!" },
    },
    productModifierUpdate: {
      __type: "ShopProductModifier!",
      __args: { id: "ID!", input: "ShopProductModifierUpdateInput!" },
    },
    productReportExport: {
      __type: "Process!",
      __args: {
        exportShopIds: "[ID!]",
        shopId: "ID!",
        sku: "String!",
        startedAt: "AWSDateTime!",
        startedThru: "AWSDateTime!",
      },
    },
    productSet: {
      __type: "ShopProduct!",
      __args: { allShop: "Boolean", id: "ID", input: "ProductInput!" },
    },
    productUnset: { __type: "ShopProduct!", __args: { id: "ID!" } },
    productsActivate: {
      __type: "Process!",
      __args: { filter: "ProductFilterInput", query: "String", shopId: "ID!" },
    },
    productsCollectionSet: {
      __type: "Process!",
      __args: {
        collectionCodes: "[String!]!",
        collectionIds: "[ID!]!",
        filter: "ProductFilterInput",
        operator: "BatchAssignmentOperator!",
        query: "String",
        shopId: "ID!",
      },
    },
    productsDeactivate: {
      __type: "Process!",
      __args: { filter: "ProductFilterInput", query: "String", shopId: "ID!" },
    },
    productsDelete: {
      __type: "Process!",
      __args: { filter: "ProductFilterInput", query: "String", shopId: "ID!" },
    },
    productsExport: {
      __type: "Process!",
      __args: { filter: "ProductFilterInput", shopId: "ID!" },
    },
    productsHashtagsSet: {
      __type: "Process!",
      __args: {
        filter: "ProductFilterInput",
        hashtags: "[String!]!",
        operator: "BatchAssignmentOperator!",
        query: "String",
        shopId: "ID!",
      },
    },
    productsImport: {
      __type: "Process!",
      __args: { shopId: "ID!", url: "AWSURL!" },
    },
    productsPriceAdjust: {
      __type: "Process!",
      __args: {
        filter: "ProductFilterInput",
        operator: "BatchOperator!",
        query: "String",
        safetyThreshold: "Float",
        shopId: "ID!",
        value: "Float!",
      },
    },
    productsQuantitySet: {
      __type: "Process!",
      __args: {
        filter: "ProductFilterInput",
        operator: "BatchOperator!",
        quantity: "Int!",
        query: "String",
        shopId: "ID!",
      },
    },
    productsReportExport: {
      __type: "Process!",
      __args: {
        exportShopIds: "[ID!]",
        shopId: "ID!",
        startedAt: "AWSDateTime!",
        startedThru: "AWSDateTime!",
      },
    },
    productsSeoExport: {
      __type: "Process!",
      __args: { filter: "ProductFilterInput", query: "String", shopId: "ID!" },
    },
    productsSeoImport: {
      __type: "Process!",
      __args: { shopId: "ID!", url: "AWSURL!" },
    },
    productsUpdateImport: {
      __type: "Process!",
      __args: { shopId: "ID!", url: "AWSURL!" },
    },
    profileUpdate: {
      __type: "UserOrCustomer!",
      __args: {
        credential: "UserCredentialUpdateInput",
        input: "ProfileUpdateInput!",
      },
    },
    promotionCodesReportExport: {
      __type: "Process!",
      __args: {
        shopId: "ID!",
        startedAt: "AWSDateTime!",
        startedThru: "AWSDateTime!",
      },
    },
    receiptTemplateCreate: {
      __type: "ShopReceiptTemplate!",
      __args: { input: "ShopReceiptTemplateCreateInput!" },
    },
    receiptTemplateDelete: {
      __type: "ShopReceiptTemplate!",
      __args: { id: "ID!" },
    },
    receiptTemplateUpdate: {
      __type: "ShopReceiptTemplate!",
      __args: { id: "ID!", input: "ShopReceiptTemplateUpdateInput!" },
    },
    receivePurchaseCancel: {
      __type: "CompanyReceivePurchase!",
      __args: { id: "ID!" },
    },
    receivePurchaseComplete: {
      __type: "CompanyReceivePurchase!",
      __args: { id: "ID!" },
    },
    receivePurchaseCreate: {
      __type: "CompanyReceivePurchase!",
      __args: { input: "ReceivePurchaseCreateInput!" },
    },
    receivePurchaseExport: {
      __type: "Process!",
      __args: { filter: "ReceivePurchaseFilterInput", shopId: "ID!" },
    },
    receivePurchaseImport: {
      __type: "Process!",
      __args: { id: "ID!", shopId: "ID!", url: "AWSURL!" },
    },
    receivePurchaseUpdate: {
      __type: "CompanyReceivePurchase!",
      __args: { id: "ID!", input: "ReceivePurchaseUpdateInput!" },
    },
    receivePurchaseVoid: {
      __type: "CompanyReceivePurchase!",
      __args: { id: "ID!" },
    },
    returnNoteApprove: { __type: "ShopReturnNote!", __args: { id: "ID!" } },
    returnNoteCancel: { __type: "ShopReturnNote!", __args: { id: "ID!" } },
    returnNoteComplete: { __type: "ShopReturnNote!", __args: { id: "ID!" } },
    returnNoteCreate: {
      __type: "ShopReturnNote!",
      __args: { input: "ReturnNoteCreateInput!" },
    },
    returnNoteReject: { __type: "ShopReturnNote!", __args: { id: "ID!" } },
    returnNoteUpdate: {
      __type: "ShopReturnNote!",
      __args: { id: "ID!", input: "ReturnNoteUpdateInput!" },
    },
    returnNotesExport: {
      __type: "Process!",
      __args: { filter: "ReturnNoteFilterInput", shopId: "ID!" },
    },
    serviceBundleCreate: {
      __type: "ShopServiceBundle!",
      __args: { input: "ServiceBundleCreateInput!" },
    },
    serviceBundleDelete: {
      __type: "ShopServiceBundle!",
      __args: { id: "ID!" },
    },
    serviceBundleUpdate: {
      __type: "ShopServiceBundle!",
      __args: { id: "ID!", input: "ServiceBundleUpdateInput!" },
    },
    serviceLocationCreate: {
      __type: "ShopServiceLocation!",
      __args: { input: "ServiceLocationCreateInput!" },
    },
    serviceLocationDelete: {
      __type: "ShopServiceLocation!",
      __args: { id: "ID!" },
    },
    serviceLocationRuleCreate: {
      __type: "ServiceLocationRule!",
      __args: { input: "ServiceLocationRuleCreateInput!" },
    },
    serviceLocationRuleDelete: {
      __type: "ServiceLocationRule!",
      __args: { id: "ID!" },
    },
    serviceLocationRuleUpdate: {
      __type: "ServiceLocationRule!",
      __args: { id: "ID!", input: "ServiceLocationRuleUpdateInput!" },
    },
    serviceLocationUpdate: {
      __type: "ShopServiceLocation!",
      __args: { id: "ID!", input: "ServiceLocationUpdateInput!" },
    },
    sessionCreate: {
      __type: "String!",
      __args: { email: "AWSEmail", password: "String!", username: "String" },
    },
    sessionRefresh: {
      __type: "SessionToken!",
      __args: { refreshToken: "String!", shopId: "ID" },
    },
    sessionStart: {
      __type: "SessionToken!",
      __args: {
        email: "AWSEmail",
        mobile: "AWSPhone",
        mobileV2: "String",
        oneSignalPlayerId: "ID",
        password: "String!",
      },
    },
    shippingZonesDelete: {
      __type: "Process",
      __args: {
        filter: "ShopShippingZoneFilterInput",
        query: "String",
        shopId: "ID!",
      },
    },
    shopAddressSet: {
      __type: "ShopAddress!",
      __args: { id: "ID", input: "ShopAddressInput!" },
    },
    shopAddressUnset: { __type: "ShopAddress!", __args: { id: "ID!" } },
    shopAnalysisToolSet: {
      __type: "ShopAnalysisTool!",
      __args: { id: "ID", input: "AnalysisToolInput!" },
    },
    shopAnalysisToolUnset: {
      __type: "ShopAnalysisTool!",
      __args: { id: "ID!" },
    },
    shopAttributeCreate: {
      __type: "ShopAttribute!",
      __args: { input: "ShopAttributeCreateInput!" },
    },
    shopAttributeDelete: { __type: "ShopAttribute!", __args: { id: "ID!" } },
    shopAttributeUpdate: {
      __type: "ShopAttribute!",
      __args: { id: "ID!", input: "ShopAttributeUpdateInput!" },
    },
    shopContactEmailResendVerify: { __type: "Boolean!", __args: { id: "ID!" } },
    shopContactEmailVerify: {
      __type: "CompanyShop!",
      __args: { token: "String!" },
    },
    shopCredentialUnset: { __type: "ShopCredential!", __args: { id: "ID!" } },
    shopDeviceCreate: {
      __type: "ShopDevice!",
      __args: { input: "ShopDeviceCreateInput!" },
    },
    shopDeviceDelete: { __type: "ShopDevice!", __args: { id: "ID!" } },
    shopDeviceMetricsCreate: {
      __type: "ShopDeviceMetric!",
      __args: { input: "ShopDeviceMetricCreateInput!", shopId: "ID" },
    },
    shopDeviceOneSignalAuth: { __type: "Boolean!" },
    shopDeviceUpdate: {
      __type: "ShopDevice!",
      __args: { id: "ID", input: "ShopDeviceUpdateInput!" },
    },
    shopEmailSend: {
      __type: "Boolean!",
      __args: { input: "ShopEmailSendInput!" },
    },
    shopFormCreate: {
      __type: "ShopForm!",
      __args: { input: "ShopFormCreateInput!" },
    },
    shopFormDelete: { __type: "ShopForm!", __args: { id: "ID!" } },
    shopFormRecordApprove: { __type: "ShopFormRecord!", __args: { id: "ID!" } },
    shopFormRecordReject: { __type: "ShopFormRecord!", __args: { id: "ID!" } },
    shopFormRecordUpdate: {
      __type: "ShopFormRecord!",
      __args: { fields: "[MetadataInput!]!", id: "ID!" },
    },
    shopFormRecordsExport: {
      __type: "Process!",
      __args: { id: "ID!", query: "String", timezone: "String" },
    },
    shopFormSubmit: {
      __type: "ShopFormRecord!",
      __args: { fields: "[MetadataInput!]!", id: "ID!" },
    },
    shopFormUpdate: {
      __type: "ShopForm!",
      __args: { id: "ID!", input: "ShopFormUpdateInput!" },
    },
    shopMarqueeSet: {
      __type: "ShopMarquee!",
      __args: { id: "ID", input: "ShopMarqueeInput!" },
    },
    shopMarqueeUnset: { __type: "ShopMarquee!", __args: { id: "ID!" } },
    shopPopupCreate: {
      __type: "ShopPopup!",
      __args: { input: "ShopPopupCreateInput!" },
    },
    shopPopupDelete: { __type: "ShopPopup!", __args: { id: "ID!" } },
    shopPopupUpdate: {
      __type: "ShopPopup!",
      __args: { id: "ID!", input: "ShopPopupUpdateInput!" },
    },
    shopReferenceNoFormatCreate: {
      __type: "ShopReferenceNoFormat!",
      __args: { input: "ShopReferenceNoFormatCreateInput!" },
    },
    shopReferenceNoFormatDelete: {
      __type: "ShopReferenceNoFormat!",
      __args: { id: "ID!" },
    },
    shopReferenceNoFormatUpdate: {
      __type: "ShopReferenceNoFormat!",
      __args: { id: "ID!", input: "ShopReferenceNoFormatUpdateInput!" },
    },
    shopShippingZoneBulkAction: {
      __type: "Boolean",
      __args: {
        action: "ShopShippingZoneBulkAction!",
        data: "String",
        filter: "ShopShippingZoneFilterInput!",
        shopId: "ID!",
      },
    },
    shopShippingZoneSet: {
      __type: "ShopShippingZone!",
      __args: { id: "ID", input: "ShopShippingZoneInput!" },
    },
    shopShippingZoneUnset: {
      __type: "ShopShippingZone!",
      __args: { id: "ID!" },
    },
    shopTaxZoneSet: {
      __type: "ShopTaxZone!",
      __args: { id: "ID", input: "ShopTaxZoneInput!" },
    },
    shopTaxZoneUnset: { __type: "ShopTaxZone!", __args: { id: "ID!" } },
    shopWarehousesAdd: {
      __type: "CompanyShop!",
      __args: { shopId: "ID!", warehouseIds: "[ID!]!" },
    },
    shopWarehousesRemove: {
      __type: "CompanyShop!",
      __args: { shopId: "ID!", warehouseIds: "[ID!]!" },
    },
    shopsReportExport: {
      __type: "Process!",
      __args: {
        shopId: "ID!",
        startedAt: "AWSDateTime!",
        startedThru: "AWSDateTime!",
      },
    },
    sitemapActivate: { __type: "ShopSitemap!", __args: { id: "ID!" } },
    sitemapCreate: {
      __type: "ShopSitemap!",
      __args: { input: "ShopSitemapInput!" },
    },
    sitemapDelete: { __type: "ShopSitemap!", __args: { id: "ID!" } },
    staffActivate: { __type: "CompanyStaff!", __args: { id: "ID!" } },
    staffCreate: {
      __type: "CompanyStaff!",
      __args: { input: "CompanyStaffCreateInput!" },
    },
    staffDeactivate: { __type: "CompanyStaff!", __args: { id: "ID!" } },
    staffDelete: { __type: "CompanyStaff!", __args: { id: "ID!" } },
    staffUpdate: {
      __type: "CompanyStaff!",
      __args: { id: "ID!", input: "CompanyStaffUpdateInput!" },
    },
    stockAdjustmentCancel: {
      __type: "CompanyStockAdjustment!",
      __args: { id: "ID!" },
    },
    stockAdjustmentComplete: {
      __type: "CompanyStockAdjustment!",
      __args: { id: "ID!" },
    },
    stockAdjustmentCreate: {
      __type: "CompanyStockAdjustment!",
      __args: { input: "StockAdjustmentCreateInput!" },
    },
    stockAdjustmentExport: {
      __type: "Process!",
      __args: { filter: "StockAdjustmentFilterInput", shopId: "ID!" },
    },
    stockAdjustmentImport: {
      __type: "Process!",
      __args: { id: "ID!", shopId: "ID!", url: "AWSURL!" },
    },
    stockAdjustmentUpdate: {
      __type: "CompanyStockAdjustment!",
      __args: { id: "ID!", input: "StockAdjustmentUpdateInput!" },
    },
    stockAdjustmentVoid: {
      __type: "CompanyStockAdjustment!",
      __args: { id: "ID!" },
    },
    stockTransferComplete: {
      __type: "CompanyStockTransfer!",
      __args: { id: "ID!", items: "[TransferItemInput!]" },
    },
    stockTransferCreate: {
      __type: "CompanyStockTransfer!",
      __args: {
        input: "StockTransferCreateInput!",
        status: "CompanyStockTransferStatus",
      },
    },
    stockTransferExport: {
      __type: "Process!",
      __args: { filter: "StockTransferFilterInput", shopId: "ID!" },
    },
    stockTransferImport: {
      __type: "Process!",
      __args: { id: "ID!", shopId: "ID!", url: "AWSURL!" },
    },
    stockTransferSend: {
      __type: "CompanyStockTransfer!",
      __args: { id: "ID!" },
    },
    stockTransferUpdate: {
      __type: "CompanyStockTransfer!",
      __args: { id: "ID!", input: "StockTransferUpdateInput!" },
    },
    stockTransferVoid: {
      __type: "CompanyStockTransfer!",
      __args: { id: "ID!" },
    },
    stocktakeCancel: { __type: "CompanyStocktake!", __args: { id: "ID!" } },
    stocktakeComplete: {
      __type: "Process!",
      __args: { id: "ID!", replace: "Boolean", shopId: "ID!" },
    },
    stocktakeExport: {
      __type: "Process!",
      __args: { shopId: "ID!", warehouseId: "ID!" },
    },
    stocktakeExportV2: {
      __type: "Process!",
      __args: { id: "ID!", shopId: "ID!" },
    },
    stocktakeImport: {
      __type: "CompanyStocktake!",
      __args: { id: "ID!", url: "AWSURL!" },
    },
    stocktakeImportV2: {
      __type: "Process!",
      __args: { id: "ID!", shopId: "ID!", url: "AWSURL!" },
    },
    stocktakeItemsSet: {
      __type: "CompanyStocktake!",
      __args: { id: "ID!", input: "[StocktakeItemInput!]!" },
    },
    stocktakeSet: {
      __type: "CompanyStocktake!",
      __args: { id: "ID", input: "StocktakeInput!" },
    },
    tableCreate: {
      __type: "ShopTable!",
      __args: { input: "TableCreateInput!" },
    },
    tableDelete: { __type: "ShopTable!", __args: { id: "ID!" } },
    tableUpdate: {
      __type: "ShopTable!",
      __args: { id: "ID!", input: "TableUpdateInput!" },
    },
    userAddressSet: {
      __type: "UserAddress!",
      __args: { id: "ID", input: "UserAddressInput!", userId: "ID!" },
    },
    userAddressUnset: { __type: "UserAddress!", __args: { id: "ID!" } },
    userBlock: { __type: "User!", __args: { companyId: "ID!", id: "ID!" } },
    userCouponsExport: {
      __type: "Process!",
      __args: {
        filter: "UserCouponExportFilterInput",
        shopId: "ID!",
        timezone: "String",
      },
    },
    userCouponsGenerate: {
      __type: "CompanyCoupon!",
      __args: { count: "Int!", id: "ID!" },
    },
    userCouponsImport: {
      __type: "Process!",
      __args: { id: "ID!", shopId: "ID!", url: "AWSURL!" },
    },
    userCreate: {
      __type: "User!",
      __args: {
        companyId: "ID!",
        credential: "UserCredentialInput!",
        input: "UserCreateInput!",
      },
    },
    userDelete: { __type: "User!", __args: { companyId: "ID!", id: "ID!" } },
    userForgotPassword: {
      __type: "Boolean",
      __args: {
        email: "AWSEmail",
        mobile: "AWSPhone",
        mobileV2: "String",
        shopId: "ID",
      },
    },
    userMemberTierSet: {
      __type: "CompanyMemberTier",
      __args: { customerId: "ID!", input: "UserMemberTierSetInput!" },
    },
    userRegister: {
      __type: "User!",
      __args: {
        credential: "UserCredentialInput!",
        fingerPrint: "String",
        shop: "UserRegisterShopInput",
        user: "UserRegisterUserInput",
      },
    },
    userResendVerification: {
      __type: "Boolean!",
      __args: { email: "AWSEmail", mobile: "AWSPhone", mobileV2: "String" },
    },
    userResetPassword: {
      __type: "Boolean",
      __args: { key: "String!", password: "String!" },
    },
    userUnblock: { __type: "User!", __args: { companyId: "ID!", id: "ID!" } },
    userUpdate: {
      __type: "User!",
      __args: {
        companyId: "ID!",
        credential: "UserCredentialUpdateInput",
        id: "ID!",
        input: "UserUpdateInput!",
      },
    },
    userVerify: { __type: "User!", __args: { token: "String!" } },
    venueCreate: {
      __type: "ShopVenue!",
      __args: { input: "VenueCreateInput!" },
    },
    venueDelete: { __type: "ShopVenue!", __args: { id: "ID!" } },
    venueTablesCleanUp: { __type: "ShopVenue!", __args: { id: "ID!" } },
    venueUpdate: {
      __type: "ShopVenue!",
      __args: { id: "ID!", input: "VenueUpdateInput!" },
    },
    warehouseSet: {
      __type: "CompanyWarehouse!",
      __args: { id: "ID", input: "WarehouseSetInput!" },
    },
    warehouseUnset: { __type: "CompanyWarehouse!", __args: { id: "ID!" } },
    webhookActivate: { __type: "Webhook!", __args: { id: "ID!" } },
    webhookDeactivate: { __type: "Webhook!", __args: { id: "ID!" } },
    wishItemSet: {
      __type: "WishItem!",
      __args: { id: "ID", input: "WishItemSetInput!" },
    },
    wishItemUnset: { __type: "WishItem!", __args: { id: "ID!" } },
    wishlistSet: {
      __type: "Wishlist!",
      __args: { id: "ID", input: "WishlistSetInput!" },
    },
    wishlistUnset: { __type: "Wishlist!", __args: { id: "ID!" } },
  },
  query: {
    __typename: { __type: "String!" },
    apiVersion: { __type: "String" },
    appVersion: { __type: "String", __args: { bundleId: "ID!" } },
    me: { __type: "Me" },
    node: { __type: "Node", __args: { handle: "String", id: "ID!" } },
    process: { __type: "Process", __args: { id: "ID!" } },
    shopByHostname: {
      __type: "CompanyShop",
      __args: { acceptLanguage: "String", hostname: "String" },
    },
    uploadUrl: { __type: "AWSURL!", __args: { input: "UploadUrlInput!" } },
  },
  subscription: {
    __typename: { __type: "String!" },
    channelMessageUpdate: {
      __type: "ChannelMessage",
      __args: { channelId: "ID", shopId: "ID" },
    },
    channelUpdate: {
      __type: "Channel",
      __args: { code: "String", shopId: "ID" },
    },
    checkoutUpdate: { __type: "ShopCheckout" },
    processUpdate: { __type: "Process!", __args: { id: "ID!" } },
  },
  [SchemaUnionsKey]: {
    Node: [
      "AgencyService",
      "AgencyServiceApplication",
      "ApplicationComment",
      "CampaignAction",
      "CampaignRecipient",
      "Channel",
      "ChannelMessage",
      "CheckoutCashVoucher",
      "CheckoutItem",
      "Company",
      "CompanyCashVoucher",
      "CompanyCoupon",
      "CompanyDiscount",
      "CompanyMemberTier",
      "CompanyReceivePurchase",
      "CompanyReceivePurchaseItem",
      "CompanyShop",
      "CompanyStaff",
      "CompanyStockAdjustment",
      "CompanyStockTransfer",
      "CompanyStocktake",
      "CompanyStocktakeItem",
      "CompanyWarehouse",
      "Customer",
      "CustomerAddress",
      "DeliveryNoteItem",
      "GiftPointAdjustment",
      "HonorProductSerial",
      "Ingredient",
      "InvoiceCreditNote",
      "NewsletterSubscription",
      "OrderActivity",
      "OrderAddOnProduct",
      "OrderComment",
      "OrderDeliveryNote",
      "OrderInvoice",
      "OrderItem",
      "PaymentMethod",
      "PaymentSource",
      "ProductVariation",
      "ReturnNoteItem",
      "ServiceLocationRule",
      "ShippingZoneAddress",
      "ShopAddOnProduct",
      "ShopAddress",
      "ShopAnalysisTool",
      "ShopAppointment",
      "ShopAttendance",
      "ShopAttribute",
      "ShopBundleProduct",
      "ShopBundleProductOption",
      "ShopCampaign",
      "ShopCashFlow",
      "ShopCheckout",
      "ShopCollection",
      "ShopContactEmail",
      "ShopCredential",
      "ShopDevice",
      "ShopEmailTemplate",
      "ShopForm",
      "ShopFormRecord",
      "ShopMarquee",
      "ShopNavigationTemplate",
      "ShopOrder",
      "ShopPage",
      "ShopPopup",
      "ShopProduct",
      "ShopProductModifier",
      "ShopReceiptTemplate",
      "ShopReferenceNoFormat",
      "ShopReturnNote",
      "ShopService",
      "ShopServiceBundle",
      "ShopServiceLocation",
      "ShopShippingZone",
      "ShopSitemap",
      "ShopTable",
      "ShopTaxZone",
      "ShopVenue",
      "StockAdjustmentItem",
      "StockMovement",
      "StockTransferItem",
      "User",
      "UserAddress",
      "UserCard",
      "UserCoupon",
      "Webhook",
      "WishItem",
      "Wishlist",
    ],
    Connection: [
      "AgencyServiceConnection",
      "AttendanceConnection",
      "CampaignConnection",
      "CampaignRecipientConnection",
      "ChannelConnection",
      "ChannelMessageConnection",
      "CheckoutCashVoucherConnection",
      "CheckoutItemConnection",
      "CollectionConnection",
      "CollectionSalesConnection",
      "CompanyCashVoucherCodeConnection",
      "CompanyCashVoucherConnection",
      "CompanyConnection",
      "CompanyCouponConnection",
      "CompanyDiscountConnection",
      "CompanyMemberTierConnection",
      "CompanyReceivePurchaseConnection",
      "CompanyReceivePurchaseItemConnection",
      "CompanyStaffConnection",
      "CompanyStockAdjustmentConnection",
      "CompanyStockTransferConnection",
      "CompanyStocktakeConnection",
      "CompanyStocktakeItemConnection",
      "CouponSalesConnection",
      "CouponSalesRecordConnection",
      "CreditNoteConnection",
      "CustomerAddressConnection",
      "CustomerConnection",
      "DeliveryNoteConnection",
      "DiscountSalesConnection",
      "GiftPointAdjustmentConnection",
      "HonorProductSerialConnection",
      "IngredientConnection",
      "InventoryReportDataConnection",
      "InvoiceConnection",
      "MemberTierSalesConnection",
      "MemberTierSalesRecordConnection",
      "NewsletterSubscriptionConnection",
      "OrderActivityConnection",
      "OrderAddOnProductConnection",
      "OrderConnection",
      "OrderItemConnection",
      "PageConnection",
      "PaymentMethodConnection",
      "PaymentSourceConnection",
      "ProductConnection",
      "ProductSalesConnection",
      "ProductSalesRecordConnection",
      "ProductUnionConnection",
      "ReturnNoteItemConnection",
      "SalespersonSalesConnection",
      "SalespersonSalesRecordConnection",
      "ServiceApplicationConnection",
      "ServiceLocationRuleConnection",
      "ServiceLocationSlotConnection",
      "ServiceSlotConnection",
      "ShippingZoneAddressConnection",
      "ShopAddOnProductConnection",
      "ShopAnalysisToolConnection",
      "ShopAppointmentConnection",
      "ShopAttributeConnection",
      "ShopBundleProductConnection",
      "ShopCashFlowConnection",
      "ShopCheckoutConnection",
      "ShopConnection",
      "ShopContactEmailConnection",
      "ShopDeviceConnection",
      "ShopDeviceMetricConnection",
      "ShopEmailTemplateConnection",
      "ShopFormConnection",
      "ShopFormRecordConnection",
      "ShopMarqueeConnection",
      "ShopNavigationTemplateConnection",
      "ShopPopupConnection",
      "ShopProductModifierConnection",
      "ShopReceiptTemplateConnection",
      "ShopReferenceNoFormatConnection",
      "ShopReturnNoteConnection",
      "ShopSalesConnection",
      "ShopServiceBundleConnection",
      "ShopServiceConnection",
      "ShopServiceLocationConnection",
      "ShopShippingZoneConnection",
      "ShopSitemapConnection",
      "ShopTableConnection",
      "ShopTaxZoneConnection",
      "ShopVenueConnection",
      "StockAdjustmentItemConnection",
      "StockMovementConnection",
      "StockTransferItemConnection",
      "UserAddressConnection",
      "UserConnection",
      "UserCouponConnection",
      "VariationConnection",
      "VariationSalesConnection",
      "VariationStockConnection",
      "WarehouseConnection",
      "WishItemConnection",
      "WishlistConnection",
    ],
    Me: ["Customer", "User"],
    ProductUnion: ["ShopBundleProduct", "ShopProduct", "ShopServiceBundle"],
    UserOrCustomer: ["Customer", "User"],
  },
} as const;

export interface Address {
  __typename?: "Address";
  city?: Maybe<ScalarsEnums["String"]>;
  country: ScalarsEnums["Country"];
  district?: Maybe<ScalarsEnums["String"]>;
  email?: Maybe<ScalarsEnums["String"]>;
  lines?: Maybe<Array<ScalarsEnums["String"]>>;
  /**
   * Short display name of the address, e.g. 'Home'.
   */
  name?: Maybe<ScalarsEnums["String"]>;
  person?: Maybe<ScalarsEnums["String"]>;
  postalCode?: Maybe<ScalarsEnums["String"]>;
  state?: Maybe<ScalarsEnums["String"]>;
  tel?: Maybe<ScalarsEnums["String"]>;
}

export interface AgencyService {
  __typename?: "AgencyService";
  active: ScalarsEnums["Boolean"];
  agent: User;
  applications: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
  }) => ServiceApplicationConnection;
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  description: ScalarsEnums["String"];
  id: ScalarsEnums["ID"];
  name: ScalarsEnums["String"];
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
}

export interface AgencyServiceApplication {
  __typename?: "AgencyServiceApplication";
  agent: User;
  comments: Array<Maybe<ApplicationComment>>;
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  id: ScalarsEnums["ID"];
  meta?: Maybe<ScalarsEnums["AWSJSON"]>;
  service: AgencyService;
  shop: CompanyShop;
  status: ScalarsEnums["ApplicationStatus"];
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
}

export interface AgencyServiceConnection {
  __typename?: "AgencyServiceConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<AgencyService>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface ApplicationComment {
  __typename?: "ApplicationComment";
  application: AgencyServiceApplication;
  content: ScalarsEnums["String"];
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  id: ScalarsEnums["ID"];
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
  user: User;
}

export interface AttendanceConnection {
  __typename?: "AttendanceConnection";
  /**
   * Base64 encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Data nodes of current page.
   */
  nodes: Array<ShopAttendance>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface AttendanceSecondsByDay {
  __typename?: "AttendanceSecondsByDay";
  createdAt: ScalarsEnums["AWSDateTime"];
  createdThru: ScalarsEnums["AWSDateTime"];
  seconds: ScalarsEnums["Int"];
  shopId: ScalarsEnums["ID"];
  shopName: ScalarsEnums["String"];
}

/**
 * AttributeFilter limits 25 attributes per query
 */
export interface AttributeFilter {
  __typename?: "AttributeFilter";
  key: ScalarsEnums["String"];
  name: ScalarsEnums["String"];
  type: ScalarsEnums["ShopAttributeType"];
  value: Array<ScalarsEnums["String"]>;
}

export interface CampaignAction {
  __typename?: "CampaignAction";
  active?: Maybe<ScalarsEnums["Boolean"]>;
  campaign: ShopCampaign;
  content: ScalarsEnums["String"];
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  id: ScalarsEnums["ID"];
  richContent?: Maybe<ScalarsEnums["String"]>;
  type: ScalarsEnums["CampaignActionType"];
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
}

export interface CampaignActionResult {
  __typename?: "CampaignActionResult";
  action: ScalarsEnums["CampaignActionType"];
  failureCount: ScalarsEnums["Int"];
  successCount: ScalarsEnums["Int"];
}

export interface CampaignConnection {
  __typename?: "CampaignConnection";
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  nodes: Array<ShopCampaign>;
  totalCount: ScalarsEnums["Int"];
}

export interface CampaignRecipient {
  __typename?: "CampaignRecipient";
  active?: Maybe<ScalarsEnums["Boolean"]>;
  campaign: ShopCampaign;
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  id: ScalarsEnums["ID"];
  referenceId?: Maybe<ScalarsEnums["String"]>;
  responseMessage?: Maybe<ScalarsEnums["AWSJSON"]>;
  sendingStatus: ScalarsEnums["CampaignRecipientStatus"];
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
  userId: ScalarsEnums["String"];
}

export interface CampaignRecipientConnection {
  __typename?: "CampaignRecipientConnection";
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  nodes: Array<CampaignRecipient>;
  totalCount: ScalarsEnums["Int"];
}

export interface CampaignResult {
  __typename?: "CampaignResult";
  failureCount: ScalarsEnums["Int"];
  pendingCount: ScalarsEnums["Int"];
  successCount: ScalarsEnums["Int"];
}

export interface Channel {
  __typename?: "Channel";
  active: ScalarsEnums["Boolean"];
  code: ScalarsEnums["String"];
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  id: ScalarsEnums["ID"];
  messages: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<ChannelMessageFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ChannelMessageConnection;
  metadata?: Maybe<Array<Metadata>>;
  pin: ScalarsEnums["Boolean"];
  players: Array<ChannelPlayer>;
  shop: CompanyShop;
  shopId?: Maybe<ScalarsEnums["ID"]>;
  type: ScalarsEnums["ChannelType"];
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
}

export interface ChannelConnection {
  __typename?: "ChannelConnection";
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  nodes: Array<Channel>;
  totalCount: ScalarsEnums["Int"];
  unreadCount: ScalarsEnums["Int"];
}

export interface ChannelMessage {
  __typename?: "ChannelMessage";
  active: ScalarsEnums["Boolean"];
  allRead: ScalarsEnums["Boolean"];
  /**
   * Message attachments.
   */
  attachments?: Maybe<Array<Node>>;
  channel: Channel;
  /**
   * @deprecated Use `channel.id` instead.
   */
  channelId?: Maybe<ScalarsEnums["ID"]>;
  /**
   * you should use channelPlayerId with Channel.players to determine the message player more quickly
   * @deprecated Use `sender` instead.
   */
  channelPlayerId: ScalarsEnums["String"];
  channelType: ScalarsEnums["ChannelType"];
  content?: Maybe<ScalarsEnums["String"]>;
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  id: ScalarsEnums["ID"];
  pin: ScalarsEnums["Boolean"];
  /**
   * Processes are attached to system messages, dashboard can aggregate all process
   *  status for the loading status of the bell icon. Dashboard can also display
   *  a download link parsed from the output of the process.
   */
  process?: Maybe<Process>;
  read: (args: { playerId: ScalarsEnums["String"] }) => ScalarsEnums["Boolean"];
  richContent?: Maybe<ScalarsEnums["String"]>;
  sender?: Maybe<ChannelPlayer>;
  shop: CompanyShop;
  /**
   * @deprecated Use `shop.id` instead.
   */
  shopId?: Maybe<ScalarsEnums["ID"]>;
  thumbnail?: Maybe<Media>;
  type: ScalarsEnums["ChannelMessageType"];
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
}

export interface ChannelMessageConnection {
  __typename?: "ChannelMessageConnection";
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  nodes: Array<ChannelMessage>;
  totalCount: ScalarsEnums["Int"];
}

export interface ChannelPlayer {
  __typename?: "ChannelPlayer";
  active: ScalarsEnums["Boolean"];
  channel: Channel;
  createdAt?: Maybe<ScalarsEnums["AWSDateTime"]>;
  createdBy?: Maybe<User>;
  email?: Maybe<ScalarsEnums["String"]>;
  id?: Maybe<ScalarsEnums["String"]>;
  /**
   * @deprecated System users no longer joins the channel.
   */
  isSystem?: Maybe<ScalarsEnums["Boolean"]>;
  messages: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<ChannelMessageFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ChannelMessageConnection;
  name?: Maybe<ScalarsEnums["String"]>;
  picture?: Maybe<ScalarsEnums["String"]>;
  updatedAt?: Maybe<ScalarsEnums["AWSDateTime"]>;
  updatedBy?: Maybe<User>;
}

export interface ChartData {
  __typename?: "ChartData";
  name: ScalarsEnums["String"];
  value: ScalarsEnums["Float"];
}

export interface CheckoutAdjustment {
  __typename?: "CheckoutAdjustment";
  amount: ScalarsEnums["Float"];
  description?: Maybe<ScalarsEnums["String"]>;
  points?: Maybe<ScalarsEnums["Int"]>;
  sortIndex: ScalarsEnums["Int"];
}

export interface CheckoutBundleProduct {
  __typename?: "CheckoutBundleProduct";
  bundleProduct: ShopBundleProduct;
  options: Array<CheckoutBundleProductOption>;
}

export interface CheckoutBundleProductOption {
  __typename?: "CheckoutBundleProductOption";
  id: ScalarsEnums["ID"];
  label: ScalarsEnums["String"];
  price: ScalarsEnums["Float"];
  product?: Maybe<ShopProduct>;
  remark?: Maybe<ScalarsEnums["String"]>;
  variation?: Maybe<ProductVariation>;
}

export interface CheckoutCashVoucher {
  __typename?: "CheckoutCashVoucher";
  active?: Maybe<ScalarsEnums["Boolean"]>;
  cashVoucher?: Maybe<CompanyCashVoucher>;
  checkout: ShopCheckout;
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  id: ScalarsEnums["ID"];
  quantity: ScalarsEnums["Int"];
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
}

export interface CheckoutCashVoucherConnection {
  __typename?: "CheckoutCashVoucherConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<CheckoutCashVoucher>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface CheckoutCoupon {
  __typename?: "CheckoutCoupon";
  coupon?: Maybe<CompanyCoupon>;
  handle?: Maybe<ScalarsEnums["String"]>;
  id: ScalarsEnums["ID"];
}

export interface CheckoutItem {
  __typename?: "CheckoutItem";
  addOnProduct?: Maybe<ShopAddOnProduct>;
  bundleProduct?: Maybe<CheckoutBundleProduct>;
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  deletedAt?: Maybe<ScalarsEnums["AWSDateTime"]>;
  description?: Maybe<ScalarsEnums["String"]>;
  id: ScalarsEnums["ID"];
  media?: Maybe<Media>;
  metadata?: Maybe<Array<Metadata>>;
  metadataFields?: Maybe<Array<CompanyMemberMetadataField>>;
  productVariation?: Maybe<ProductVariation>;
  quantity: ScalarsEnums["Int"];
  remark?: Maybe<ScalarsEnums["String"]>;
  serviceBundle?: Maybe<CheckoutServiceBundle>;
  unitPrice: ScalarsEnums["Float"];
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
}

export interface CheckoutItemConnection {
  __typename?: "CheckoutItemConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<CheckoutItem>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface CheckoutPayment {
  __typename?: "CheckoutPayment";
  charge?: Maybe<ScalarsEnums["Float"]>;
  credentialId?: Maybe<ScalarsEnums["ID"]>;
  invoiceId: ScalarsEnums["ID"];
  provider: ScalarsEnums["PaymentProvider"];
  token?: Maybe<ScalarsEnums["String"]>;
}

export interface CheckoutRoundingPolicy {
  __typename?: "CheckoutRoundingPolicy";
  maximumFractionDigits: ScalarsEnums["Int"];
  strategy: ScalarsEnums["CheckoutRoundingStrategy"];
}

export interface CheckoutService {
  __typename?: "CheckoutService";
  appointment?: Maybe<ShopAppointment>;
  contactAddress?: Maybe<Address>;
  /**
   * Checkout Service ID (UUID)
   */
  id: ScalarsEnums["ID"];
  location?: Maybe<ShopServiceLocation>;
  service: ShopService;
  slots?: Maybe<Array<ServiceSlot>>;
}

export interface CheckoutServiceBundle {
  __typename?: "CheckoutServiceBundle";
  serviceBundle: ShopServiceBundle;
  services: Array<CheckoutService>;
}

export interface CollectionConnection {
  __typename?: "CollectionConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<ShopCollection>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface CollectionSales {
  __typename?: "CollectionSales";
  /**
   * 銷售額(折扣後)
   */
  amount: ScalarsEnums["Float"];
  /**
   * 平均購買數量 = 賣出數量 / 訂單
   */
  avgCount: ScalarsEnums["Float"];
  /**
   * 平均單價 = 銷售額 / 賣出數量
   */
  avgPrice: ScalarsEnums["Float"];
  code?: Maybe<ScalarsEnums["String"]>;
  /**
   * 轉化率 = 訂單 / 點擊率
   */
  conversionRate: ScalarsEnums["Float"];
  /**
   * 賣出數量
   */
  count: ScalarsEnums["Int"];
  /**
   * 地區分佈
   */
  countries: Array<ChartData>;
  /**
   * 點擊率
   */
  hitRate: ScalarsEnums["Int"];
  id: ScalarsEnums["ID"];
  /**
   * 會員銷售額
   */
  memberAmount: ScalarsEnums["Float"];
  /**
   * 會員級別消費
   */
  memberLevelAmounts: Array<ChartData>;
  /**
   * 會員級別分佈
   */
  memberLevels: Array<ChartData>;
  name: ScalarsEnums["String"];
  /**
   * 非會員銷售額
   */
  nonMemberAmount: ScalarsEnums["Float"];
  /**
   * 訂單
   */
  orderCount: ScalarsEnums["Int"];
  /**
   * 瀏覽量
   */
  pageView: ScalarsEnums["Int"];
  /**
   * 銷售點分佈
   */
  salesPoints: Array<ChartData>;
  /**
   * 銷售記錄
   */
  salesRecords: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ProductSalesRecordConnection;
  /**
   * 銷售趨勢
   */
  salesTrends: Array<LineChartData>;
  shopId: ScalarsEnums["ID"];
}

export interface CollectionSalesConnection {
  __typename?: "CollectionSalesConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<CollectionSales>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface Company {
  __typename?: "Company";
  address?: Maybe<Address>;
  appointments: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<ShopAppointmentFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ShopAppointmentConnection;
  attendances: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<AttendanceFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => AttendanceConnection;
  cashVouchers: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => CompanyCashVoucherConnection;
  channels: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<ChannelFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ChannelConnection;
  coupons: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<CompanyCouponFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => CompanyCouponConnection;
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  customers: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<CustomerFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => CustomerConnection;
  defaultMemberHashtagSchedules?: Maybe<Array<CompanyHashtagSchedule>>;
  deliveryNotes: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<DeliveryNotesFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => DeliveryNoteConnection;
  description?: Maybe<ScalarsEnums["String"]>;
  devices: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ShopDeviceConnection;
  discounts: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<DiscountFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => CompanyDiscountConnection;
  honorProductSerials: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<HonorProductSerialFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ProductConnection;
  id: ScalarsEnums["ID"];
  industry?: Maybe<ScalarsEnums["String"]>;
  ingredients: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => IngredientConnection;
  memberPointResetDates?: Maybe<Array<ScalarsEnums["String"]>>;
  memberPointResetGracefulPeriod?: Maybe<ScalarsEnums["String"]>;
  memberTiers: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<CompanyMemberTierFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => CompanyMemberTierConnection;
  name: ScalarsEnums["String"];
  orders: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<OrderFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => OrderConnection;
  paymentSources: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
  }) => PaymentSourceConnection;
  receivePurchases: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => CompanyReceivePurchaseConnection;
  report: CompanyReport;
  returnNotes: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<ReturnNoteFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ShopReturnNoteConnection;
  serviceBundles: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<ServiceBundleFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ShopServiceBundleConnection;
  serviceLocations: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<ServiceLocationFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ShopServiceLocationConnection;
  services: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<ServiceFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ShopServiceConnection;
  shops: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ShopConnection;
  sitemaps: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<ShopSitemapFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ShopSitemapConnection;
  staffs: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<CompanyStaffFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => CompanyStaffConnection;
  stockAdjustments: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<StockAdjustmentFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => CompanyStockAdjustmentConnection;
  stockTransfers: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<StockTransferFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => CompanyStockTransferConnection;
  stocktakes: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => CompanyStocktakeConnection;
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
  users: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<UserFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => UserConnection;
  warehouses: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<WarehouseFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => WarehouseConnection;
  /**
   * Registered webhooks in this company.
   */
  webhooks: Array<Webhook>;
}

export interface CompanyCashVoucher {
  __typename?: "CompanyCashVoucher";
  active?: Maybe<ScalarsEnums["Boolean"]>;
  codes: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
  }) => CompanyCashVoucherCodeConnection;
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  description: ScalarsEnums["String"];
  id: ScalarsEnums["ID"];
  name: ScalarsEnums["String"];
  numberOfVoucher: ScalarsEnums["Int"];
  singleVoucherValue: ScalarsEnums["Float"];
  thumbnail?: Maybe<Media>;
  unitPrice: ScalarsEnums["Float"];
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
  validFor?: Maybe<ScalarsEnums["String"]>;
}

export interface CompanyCashVoucherCode {
  __typename?: "CompanyCashVoucherCode";
  cashVoucher: CompanyCashVoucher;
  code: ScalarsEnums["String"];
  id: ScalarsEnums["ID"];
  status: ScalarsEnums["CashVoucherCodeStatus"];
  validFor?: Maybe<ScalarsEnums["String"]>;
}

export interface CompanyCashVoucherCodeConnection {
  __typename?: "CompanyCashVoucherCodeConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<CompanyCashVoucherCode>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface CompanyCashVoucherConnection {
  __typename?: "CompanyCashVoucherConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<CompanyCashVoucher>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface CompanyConnection {
  __typename?: "CompanyConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<Company>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface CompanyCoupon {
  __typename?: "CompanyCoupon";
  actions?: Maybe<Array<CouponAction>>;
  active: ScalarsEnums["Boolean"];
  applyCode?: Maybe<ScalarsEnums["CouponApplyCode"]>;
  company: Company;
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  description?: Maybe<ScalarsEnums["String"]>;
  discardSubsequent: ScalarsEnums["Boolean"];
  display?: Maybe<ScalarsEnums["Boolean"]>;
  enabled: ScalarsEnums["Boolean"];
  excludedCouponIds?: Maybe<Array<ScalarsEnums["ID"]>>;
  excludedCoupons: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => CompanyCouponConnection;
  excludedDiscountIds?: Maybe<Array<ScalarsEnums["ID"]>>;
  excludedDiscounts: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => CompanyDiscountConnection;
  excludedProductIds?: Maybe<Array<ScalarsEnums["ID"]>>;
  handle: ScalarsEnums["String"];
  id: ScalarsEnums["ID"];
  isRedeemable: ScalarsEnums["Boolean"];
  media?: Maybe<Media>;
  memberLimit?: Maybe<ScalarsEnums["Int"]>;
  memberPointCost: ScalarsEnums["Int"];
  membersOnly: ScalarsEnums["Boolean"];
  metadata?: Maybe<Array<Metadata>>;
  name: ScalarsEnums["String"];
  orders: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => OrderConnection;
  products: Array<ShopProduct>;
  publishAt: ScalarsEnums["AWSDateTime"];
  publishLimit?: Maybe<ScalarsEnums["Int"]>;
  publishThru?: Maybe<ScalarsEnums["AWSDateTime"]>;
  /**
   * 後台備註
   */
  remark?: Maybe<ScalarsEnums["String"]>;
  repeat?: Maybe<ScalarsEnums["Int"]>;
  resolveCode?: Maybe<ScalarsEnums["String"]>;
  shops: Array<CompanyShop>;
  sortIndex: ScalarsEnums["Int"];
  /**
   * @deprecated Changed to media
   */
  thumbnail?: Maybe<ScalarsEnums["AWSURL"]>;
  triggers?: Maybe<Array<CouponTrigger>>;
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
  usage: (args?: {
    customerId?: Maybe<ScalarsEnums["String"]>;
  }) => ScalarsEnums["Int"];
  userCoupons: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<UserCouponFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => Maybe<UserCouponConnection>;
  validAt: ScalarsEnums["AWSDateTime"];
  validForPeriod?: Maybe<ScalarsEnums["String"]>;
  validThru?: Maybe<ScalarsEnums["AWSDateTime"]>;
}

export interface CompanyCouponConnection {
  __typename?: "CompanyCouponConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<CompanyCoupon>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface CompanyDiscount {
  __typename?: "CompanyDiscount";
  actions?: Maybe<Array<DiscountAction>>;
  active: ScalarsEnums["Boolean"];
  company: Company;
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  description?: Maybe<ScalarsEnums["String"]>;
  discardSubsequent: ScalarsEnums["Boolean"];
  excludedCouponIds?: Maybe<Array<ScalarsEnums["ID"]>>;
  excludedCoupons: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => CompanyCouponConnection;
  excludedDiscountIds?: Maybe<Array<ScalarsEnums["String"]>>;
  excludedDiscounts: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => CompanyDiscountConnection;
  excludedProductIds?: Maybe<Array<ScalarsEnums["ID"]>>;
  id: ScalarsEnums["ID"];
  membersOnly: ScalarsEnums["Boolean"];
  metadata?: Maybe<Array<Metadata>>;
  name: ScalarsEnums["String"];
  publishAt: ScalarsEnums["AWSDateTime"];
  publishThru: ScalarsEnums["AWSDateTime"];
  remark?: Maybe<ScalarsEnums["String"]>;
  repeat: ScalarsEnums["Int"];
  sortIndex: ScalarsEnums["Int"];
  triggers?: Maybe<Array<DiscountTrigger>>;
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
}

export interface CompanyDiscountConnection {
  __typename?: "CompanyDiscountConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<CompanyDiscount>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface CompanyHashtagSchedule {
  __typename?: "CompanyHashtagSchedule";
  hashtags: Array<ScalarsEnums["String"]>;
  validAt: ScalarsEnums["AWSDateTime"];
  validThru?: Maybe<ScalarsEnums["AWSDateTime"]>;
}

export interface CompanyMemberMetadataField {
  __typename?: "CompanyMemberMetadataField";
  /**
   * Index
   */
  key: ScalarsEnums["String"];
  metadata?: Maybe<Array<Metadata>>;
  /**
   * Column Name
   */
  name: ScalarsEnums["String"];
  required: ScalarsEnums["Boolean"];
  type: ScalarsEnums["CompanyMemberMetadataFieldType"];
  unique?: Maybe<ScalarsEnums["Boolean"]>;
  values: Array<ScalarsEnums["String"]>;
  visible?: Maybe<ScalarsEnums["Boolean"]>;
}

export interface CompanyMemberTier {
  __typename?: "CompanyMemberTier";
  active?: Maybe<ScalarsEnums["Boolean"]>;
  company: Company;
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  customers: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => CustomerConnection;
  expiryType: ScalarsEnums["ExpiryDateTypes"];
  extensionAmount: ScalarsEnums["Int"];
  extensionMonths: ScalarsEnums["Int"];
  extensionType: ScalarsEnums["UpgradeConditionType"];
  id: ScalarsEnums["ID"];
  isDefault?: Maybe<ScalarsEnums["Boolean"]>;
  level: ScalarsEnums["Int"];
  memberPointActive: ScalarsEnums["Boolean"];
  memberPointPerUnit: ScalarsEnums["Int"];
  memberPointUnitPrice: ScalarsEnums["Int"];
  name: ScalarsEnums["String"];
  nextExtendedAt?: Maybe<ScalarsEnums["AWSDateTime"]>;
  startedAt?: Maybe<ScalarsEnums["AWSDateTime"]>;
  startedThru?: Maybe<ScalarsEnums["AWSDateTime"]>;
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
  upgradeConditionAmount: ScalarsEnums["Int"];
  upgradeConditionMonths: ScalarsEnums["Int"];
  upgradeConditionType: ScalarsEnums["UpgradeConditionType"];
  upgradeConditions?: Maybe<Array<MemberTierUpgradeCondition>>;
  userId?: Maybe<ScalarsEnums["String"]>;
  validMonths: ScalarsEnums["Int"];
}

export interface CompanyMemberTierConnection {
  __typename?: "CompanyMemberTierConnection";
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  nodes: Array<CompanyMemberTier>;
  totalCount: ScalarsEnums["Int"];
}

export interface CompanyReceivePurchase {
  __typename?: "CompanyReceivePurchase";
  active?: Maybe<ScalarsEnums["Boolean"]>;
  completedAt?: Maybe<ScalarsEnums["AWSDateTime"]>;
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  deviceId?: Maybe<ScalarsEnums["ID"]>;
  id: ScalarsEnums["ID"];
  items: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => CompanyReceivePurchaseItemConnection;
  metadata?: Maybe<Array<Metadata>>;
  referenceNo: ScalarsEnums["String"];
  remark?: Maybe<ScalarsEnums["String"]>;
  /**
   * @deprecated Use staffId instead.
   */
  salespersonId?: Maybe<ScalarsEnums["ID"]>;
  staff?: Maybe<CompanyStaff>;
  staffId?: Maybe<ScalarsEnums["ID"]>;
  status: ScalarsEnums["CompanyReceivePurchaseStatus"];
  totalQuantity: ScalarsEnums["Int"];
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
  warehouse: CompanyWarehouse;
}

export interface CompanyReceivePurchaseConnection {
  __typename?: "CompanyReceivePurchaseConnection";
  /**
   * Base64 encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Data nodes of current page.
   */
  nodes: Array<CompanyReceivePurchase>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface CompanyReceivePurchaseItem {
  __typename?: "CompanyReceivePurchaseItem";
  cost: ScalarsEnums["Float"];
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  id: ScalarsEnums["ID"];
  productVariation?: Maybe<ProductVariation>;
  quantity: ScalarsEnums["Int"];
  sku: ScalarsEnums["String"];
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
}

export interface CompanyReceivePurchaseItemConnection {
  __typename?: "CompanyReceivePurchaseItemConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<CompanyReceivePurchaseItem>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface CompanyReport {
  __typename?: "CompanyReport";
  collectionSales: (args: {
    code?: Maybe<ScalarsEnums["String"]>;
    id?: Maybe<ScalarsEnums["ID"]>;
    shopId?: Maybe<ScalarsEnums["ID"]>;
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => CollectionSales;
  couponSales: (args: {
    id: ScalarsEnums["ID"];
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => CouponSales;
  discountSales: (args: {
    id: ScalarsEnums["ID"];
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => DiscountSales;
  /**
   * 倉庫總覽
   */
  inventory: (args: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<InventoryReportDataFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
    warehouseIds: Array<ScalarsEnums["ID"]>;
  }) => InventoryReportDataConnection;
  memberTierSales: (args: {
    id: ScalarsEnums["ID"];
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => MemberTierSales;
  productSales: (args: {
    shopId?: Maybe<ScalarsEnums["ID"]>;
    sku: ScalarsEnums["String"];
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => ProductSales;
  promotionCodeSales: (args: {
    id: ScalarsEnums["ID"];
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => CouponSales;
  salespersonSales: (args: {
    id: ScalarsEnums["ID"];
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => SalespersonSales;
  topCollectionSales: (args: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    shopId?: Maybe<ScalarsEnums["ID"]>;
    sortBy?: Maybe<Array<SorterInput>>;
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => CollectionSalesConnection;
  topCouponSales: (args: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => CouponSalesConnection;
  topDiscountSales: (args: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => DiscountSalesConnection;
  topMemberTierSales: (args: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => MemberTierSalesConnection;
  topProductSales: (args: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    shopId?: Maybe<ScalarsEnums["ID"]>;
    sortBy?: Maybe<Array<SorterInput>>;
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => ProductSalesConnection;
  topPromotionCodeSales: (args: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => CouponSalesConnection;
  topSalespersonSales: (args: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => SalespersonSalesConnection;
  topShopSales: (args: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    shopId?: Maybe<ScalarsEnums["ID"]>;
    sortBy?: Maybe<Array<SorterInput>>;
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => ShopSalesConnection;
  topVariationSales: (args: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    shopId?: Maybe<ScalarsEnums["ID"]>;
    sortBy?: Maybe<Array<SorterInput>>;
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => VariationSalesConnection;
  /**
   * 所有類別數據
   */
  totalCollectionSales: (args: {
    shopId?: Maybe<ScalarsEnums["ID"]>;
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => TotalCollectionSales;
  /**
   * 所有優惠券數據
   */
  totalCouponSales: (args: {
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => TotalCouponSales;
  /**
   * 所有折扣數據
   */
  totalDiscountSales: (args: {
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => TotalDiscountSales;
  /**
   * 所有會員級別數據
   */
  totalMemberTierSales: (args: {
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => TotalMemberTierSales;
  /**
   * 所有產品數據
   */
  totalProductSales: (args: {
    shopId?: Maybe<ScalarsEnums["ID"]>;
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => TotalProductSales;
  /**
   * 所有推廣碼數據
   */
  totalPromotionCodeSales: (args: {
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => TotalCouponSales;
  /**
   * 所有職員銷售數據
   */
  totalSalespersonSales: (args: {
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => TotalSalespersonSales;
  /**
   * 所有訂單數據
   */
  totalShopSales: (args: {
    shopId?: Maybe<ScalarsEnums["ID"]>;
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => TotalShopSales;
  /**
   * 所有產品細項數據
   */
  totalVariationSales: (args: {
    shopId?: Maybe<ScalarsEnums["ID"]>;
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => TotalVariationSales;
  /**
   * 成交額
   */
  turnover: (args: {
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => ScalarsEnums["Float"];
  variationSales: (args: {
    shopId?: Maybe<ScalarsEnums["ID"]>;
    sku: ScalarsEnums["String"];
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => VariationSales;
  /**
   * 成交量
   */
  volume: (args: {
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => ScalarsEnums["Int"];
}

export interface CompanyShop {
  __typename?: "CompanyShop";
  active: ScalarsEnums["Boolean"];
  addOnProducts: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<AddOnProductFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ShopAddOnProductConnection;
  address?: Maybe<ShopAddress>;
  /**
   * @deprecated Change to single address
   */
  addresses?: Maybe<Array<ShopAddress>>;
  agent?: Maybe<User>;
  allProducts: (args?: {
    cursor?: Maybe<ScalarsEnums["String"]>;
    filter?: Maybe<ProductFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
  }) => ProductConnection;
  allowGuestCheckout: ScalarsEnums["Boolean"];
  allowMemberPointCheckout?: Maybe<ScalarsEnums["Boolean"]>;
  analysisTools: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<AnalysisToolFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ShopAnalysisToolConnection;
  appointments: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<ShopAppointmentFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ShopAppointmentConnection;
  attendances: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<AttendanceFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => AttendanceConnection;
  attributes: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<ShopAttributeFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => Maybe<ShopAttributeConnection>;
  autoConfirm?: Maybe<ScalarsEnums["Boolean"]>;
  autoConfirmRegistration?: Maybe<ScalarsEnums["Boolean"]>;
  availableWarehouses: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<WarehouseFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => WarehouseConnection;
  branchType?: Maybe<ScalarsEnums["ShopBranchType"]>;
  bundleProducts: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ShopBundleProductConnection;
  campaigns: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<CampaignFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => CampaignConnection;
  cashFlows: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<CashFlowFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ShopCashFlowConnection;
  /**
   * @deprecated use `CompanyShop.channels` instead
   */
  channelMessages: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<ChannelMessageFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ChannelMessageConnection;
  channels: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<ChannelFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ChannelConnection;
  checkoutRounding?: Maybe<CheckoutRoundingPolicy>;
  checkouts: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ShopCheckoutConnection;
  collections: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<CollectionFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => CollectionConnection;
  company: Company;
  companyVerifyData?: Maybe<ScalarsEnums["AWSJSON"]>;
  /**
   * @deprecated Change to contactEmails.
   */
  contactEmail?: Maybe<ScalarsEnums["String"]>;
  contactEmails: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<CompanyShopContactEmailsFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => Maybe<ShopContactEmailConnection>;
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  credentials: (args?: {
    filter?: Maybe<CredentialFilter>;
    filterV2?: Maybe<CredentialFilterInput>;
  }) => Array<ShopCredential>;
  creditNotes: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<CreditNoteFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => CreditNoteConnection;
  currency?: Maybe<ScalarsEnums["Currency"]>;
  currentCashInDevice: (args: {
    deviceId: ScalarsEnums["String"];
    filter?: Maybe<CashFlowFilterInput>;
  }) => ScalarsEnums["Float"];
  customDomain?: Maybe<ScalarsEnums["String"]>;
  customers: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<CustomerFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => CustomerConnection;
  deliveryNoteAutoComplete?: Maybe<Duration>;
  deliveryNotes: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<DeliveryNotesFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => DeliveryNoteConnection;
  devices: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ShopDeviceConnection;
  emailTemplates: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<ShopEmailTemplateFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ShopEmailTemplateConnection;
  expiredAt?: Maybe<ScalarsEnums["AWSDateTime"]>;
  forms: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<ShopFormFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ShopFormConnection;
  hasRegistrationEmail?: Maybe<ScalarsEnums["Boolean"]>;
  honorProductSerials: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<HonorProductSerialFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ProductConnection;
  hostname?: Maybe<ScalarsEnums["String"]>;
  /**
   * @deprecated Use icoMedia instead
   */
  ico?: Maybe<ScalarsEnums["String"]>;
  icoMedia?: Maybe<Media>;
  id: ScalarsEnums["ID"];
  invoices: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<InvoiceFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => InvoiceConnection;
  /**
   * @deprecated Change to contactEmails.
   */
  isContactEmailVerified?: Maybe<ScalarsEnums["Boolean"]>;
  locale: ScalarsEnums["String"];
  /**
   * @deprecated Use logoMedia instead
   */
  logo?: Maybe<ScalarsEnums["String"]>;
  logoMedia?: Maybe<Media>;
  /**
   * 低庫存
   */
  lowStock?: Maybe<ReminderSetting>;
  marquees: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<ShopMarqueeFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => Maybe<ShopMarqueeConnection>;
  maxDeviceCount?: Maybe<ScalarsEnums["Int"]>;
  medias?: Maybe<Array<Media>>;
  memberMetadataFields?: Maybe<Array<CompanyMemberMetadataField>>;
  memberPointActive: ScalarsEnums["Boolean"];
  memberPointClearanceGracefulPeriod?: Maybe<ScalarsEnums["String"]>;
  /**
   * A graceful period to be safe from point clearance, ISO duration.
   */
  memberPointGracefulPeriod?: Maybe<ScalarsEnums["String"]>;
  memberPointReleaseDelay: ScalarsEnums["Int"];
  memberPointReleasePolicy: ScalarsEnums["MemberPointReleasePolicy"];
  /**
   * @deprecated Moved to company level
   */
  memberPointResetDates?: Maybe<Array<ScalarsEnums["String"]>>;
  /**
   * @deprecated Use memberPointResetDates instead
   */
  memberPointResetMonth?: Maybe<ScalarsEnums["Int"]>;
  memberPointUseActive: ScalarsEnums["Boolean"];
  /**
   * checkout.memberPointDiscount = (memberPoints / memberPointUseUnitPoint) * memberPointUsePerUnit
   */
  memberPointUsePerUnit: ScalarsEnums["Int"];
  memberPointUseUnitPoint: ScalarsEnums["Int"];
  /**
   * @deprecated Change to metadata.
   */
  meta?: Maybe<Array<Maybe<Metadata>>>;
  metaDescription?: Maybe<ScalarsEnums["String"]>;
  metaKeywords?: Maybe<ScalarsEnums["String"]>;
  metaTitle?: Maybe<ScalarsEnums["String"]>;
  metadata?: Maybe<Array<Metadata>>;
  name: ScalarsEnums["String"];
  nameEN?: Maybe<ScalarsEnums["String"]>;
  navigationTemplates: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<NavigationTemplateFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ShopNavigationTemplateConnection;
  node: (args?: {
    handle?: Maybe<ScalarsEnums["String"]>;
    id?: Maybe<ScalarsEnums["ID"]>;
  }) => Maybe<Node>;
  nodes: (args: { handle: ScalarsEnums["String"] }) => Maybe<Array<Node>>;
  /**
   * Specify null for indefinite pending orders
   */
  orderExpiry?: Maybe<Duration>;
  /**
   * @deprecated Use `orderExpiryDuration` instead.
   */
  orderExpiryDay?: Maybe<ScalarsEnums["Int"]>;
  orders: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<OrderFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => OrderConnection;
  /**
   * 滯銷
   */
  overStock?: Maybe<ReminderSetting>;
  pages: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<PageFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => PageConnection;
  paymentMethods: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<PaymentMethodFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => PaymentMethodConnection;
  popups: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => Maybe<ShopPopupConnection>;
  productModifiers: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<ShopProductModifierFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ShopProductModifierConnection;
  productUnions: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<ProductUnionFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ProductUnionConnection;
  products: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<ProductFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ProductConnection;
  /**
   * @deprecated Use rasterLogoMedia instead
   */
  rasterLogo?: Maybe<ScalarsEnums["String"]>;
  rasterLogoMedia?: Maybe<Media>;
  receiptTemplates: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<ShopReceiptTemplateFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ShopReceiptTemplateConnection;
  referenceNoLength?: Maybe<ScalarsEnums["Int"]>;
  referenceNoPrefix?: Maybe<ScalarsEnums["String"]>;
  registrationMessages?: Maybe<Array<ScalarsEnums["String"]>>;
  remarks?: Maybe<ScalarsEnums["String"]>;
  report: (args?: { filter?: Maybe<SalesFilterInput> }) => ShopReport;
  reservationWarehouse: CompanyWarehouse;
  returnNotes: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<ReturnNoteFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ShopReturnNoteConnection;
  returnWarehouse: CompanyWarehouse;
  serviceBundles: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<ServiceBundleFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ShopServiceBundleConnection;
  serviceLocations: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<ServiceLocationFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ShopServiceLocationConnection;
  services: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<ServiceFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ShopServiceConnection;
  shippingZones: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<ShopShippingZoneFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ShopShippingZoneConnection;
  shopReferenceNoFormats: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<ShopReferenceNoFormatFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ShopReferenceNoFormatConnection;
  sitemaps: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<ShopSitemapFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ShopSitemapConnection;
  staffs: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<CompanyStaffFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => CompanyStaffConnection;
  stockAdjustments: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<StockAdjustmentFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => CompanyStockAdjustmentConnection;
  stockWarehouse: CompanyWarehouse;
  stripeConnectLink: ScalarsEnums["String"];
  stripeRateExpression?: Maybe<ScalarsEnums["String"]>;
  subscriptions: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<NewsletterSubscriptionFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => NewsletterSubscriptionConnection;
  tables: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<TableFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ShopTableConnection;
  taxZoneSelectedCountries: Array<ScalarsEnums["Country"]>;
  taxZones: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ShopTaxZoneConnection;
  timezone?: Maybe<ScalarsEnums["String"]>;
  transferWarehouse: CompanyWarehouse;
  type?: Maybe<ScalarsEnums["String"]>;
  /**
   * 缺貨
   */
  underStock?: Maybe<ReminderSetting>;
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
  useCollectionProductSortIndex?: Maybe<ScalarsEnums["Boolean"]>;
  /**
   * Getting warehouse sku stocks
   */
  variationStocks: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<InventoryReportDataFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
  }) => VariationStockConnection;
  variations: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => VariationConnection;
  venues: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<VenueFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ShopVenueConnection;
  welcomeMessages?: Maybe<Array<ScalarsEnums["String"]>>;
}

export interface CompanyStaff {
  __typename?: "CompanyStaff";
  active?: Maybe<ScalarsEnums["Boolean"]>;
  address?: Maybe<Address>;
  attendSecondsByDay: (args?: {
    createdAt?: Maybe<ScalarsEnums["AWSDateTime"]>;
    createdThru?: Maybe<ScalarsEnums["AWSDateTime"]>;
  }) => Array<AttendanceSecondsByDay>;
  attendances: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<AttendanceFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => AttendanceConnection;
  code: ScalarsEnums["String"];
  company: Company;
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  id: ScalarsEnums["ID"];
  metadata?: Maybe<Array<Metadata>>;
  name: ScalarsEnums["String"];
  /**
   * Orders that are assigned to the staff.
   */
  orders: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<OrderFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => OrderConnection;
  password: ScalarsEnums["String"];
  phoneNumber?: Maybe<ScalarsEnums["String"]>;
  role: ScalarsEnums["StaffRole"];
  /**
   * Orders that are assigned to the salesperson.
   */
  salespersonOrders: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<OrderFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => OrderConnection;
  shop: CompanyShop;
  startedAt: ScalarsEnums["AWSDateTime"];
  startedThru?: Maybe<ScalarsEnums["AWSDateTime"]>;
  thumbnail?: Maybe<Media>;
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
}

export interface CompanyStaffConnection {
  __typename?: "CompanyStaffConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<CompanyStaff>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface CompanyStockAdjustment {
  __typename?: "CompanyStockAdjustment";
  active?: Maybe<ScalarsEnums["Boolean"]>;
  company: Company;
  completedAt?: Maybe<ScalarsEnums["AWSDateTime"]>;
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  device?: Maybe<ShopDevice>;
  deviceId?: Maybe<ScalarsEnums["ID"]>;
  id: ScalarsEnums["ID"];
  items: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<StockAdjustmentItemFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => StockAdjustmentItemConnection;
  metadata?: Maybe<Array<Metadata>>;
  referenceNo: ScalarsEnums["String"];
  remark?: Maybe<ScalarsEnums["String"]>;
  shop: CompanyShop;
  staff?: Maybe<CompanyStaff>;
  status: ScalarsEnums["StockAdjustmentStatus"];
  totalQuantity: ScalarsEnums["Int"];
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
  warehouse: CompanyWarehouse;
}

export interface CompanyStockAdjustmentConnection {
  __typename?: "CompanyStockAdjustmentConnection";
  /**
   * Base64 encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Data nodes of current page.
   */
  nodes: Array<CompanyStockAdjustment>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface CompanyStockTransfer {
  __typename?: "CompanyStockTransfer";
  completedAt?: Maybe<ScalarsEnums["AWSDateTime"]>;
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  deviceId?: Maybe<ScalarsEnums["String"]>;
  id: ScalarsEnums["ID"];
  inboundWarehouse?: Maybe<CompanyWarehouse>;
  /**
   * @deprecated Use itemsV2
   */
  items: Array<CompanyStockTransferItem>;
  itemsV2: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<StockTransferItemFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => StockTransferItemConnection;
  metadata?: Maybe<Array<Metadata>>;
  outboundWarehouse?: Maybe<CompanyWarehouse>;
  referenceNo: ScalarsEnums["String"];
  remark?: Maybe<ScalarsEnums["String"]>;
  /**
   * @deprecated Use staffId instead.
   */
  salespersonId?: Maybe<ScalarsEnums["ID"]>;
  sentAt?: Maybe<ScalarsEnums["AWSDateTime"]>;
  staff?: Maybe<CompanyStaff>;
  staffId?: Maybe<ScalarsEnums["ID"]>;
  status: ScalarsEnums["CompanyStockTransferStatus"];
  totalQuantity: ScalarsEnums["Int"];
  totalReceivedQuantity: ScalarsEnums["Int"];
  transferWarehouse?: Maybe<CompanyWarehouse>;
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
}

export interface CompanyStockTransferConnection {
  __typename?: "CompanyStockTransferConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  nodes: Array<CompanyStockTransfer>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface CompanyStockTransferItem {
  __typename?: "CompanyStockTransferItem";
  productVariation?: Maybe<ProductVariation>;
  quantity: ScalarsEnums["Int"];
  receivedQuantity: ScalarsEnums["Int"];
  sku: ScalarsEnums["ID"];
}

export interface CompanyStocktake {
  __typename?: "CompanyStocktake";
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  deviceId?: Maybe<ScalarsEnums["String"]>;
  id: ScalarsEnums["ID"];
  items: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => CompanyStocktakeItemConnection;
  metadata?: Maybe<Array<Metadata>>;
  referenceNo: ScalarsEnums["String"];
  remark?: Maybe<ScalarsEnums["String"]>;
  /**
   * @deprecated Use staffId instead.
   */
  salespersonId?: Maybe<ScalarsEnums["ID"]>;
  staff?: Maybe<CompanyStaff>;
  staffId?: Maybe<ScalarsEnums["ID"]>;
  status: ScalarsEnums["CompanyStocktakeStatus"];
  totalQuantity: ScalarsEnums["Int"];
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
  warehouse: CompanyWarehouse;
}

export interface CompanyStocktakeConnection {
  __typename?: "CompanyStocktakeConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<CompanyStocktake>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface CompanyStocktakeItem {
  __typename?: "CompanyStocktakeItem";
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  currentStock: ScalarsEnums["Int"];
  id: ScalarsEnums["ID"];
  productVariation?: Maybe<ProductVariation>;
  quantity: ScalarsEnums["Int"];
  quantityDiff: ScalarsEnums["Int"];
  sku: ScalarsEnums["String"];
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
}

export interface CompanyStocktakeItemConnection {
  __typename?: "CompanyStocktakeItemConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<CompanyStocktakeItem>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface CompanyWarehouse {
  __typename?: "CompanyWarehouse";
  active: ScalarsEnums["Boolean"];
  address?: Maybe<Address>;
  company: Company;
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  id: ScalarsEnums["ID"];
  name: ScalarsEnums["String"];
  shops: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<UserShopsFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ShopConnection;
  sortIndex?: Maybe<ScalarsEnums["Int"]>;
  type: ScalarsEnums["CompanyWarehouseTypes"];
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
}

/**
 * Base connection for paginated data in the system.
 */
export interface Connection {
  __typename?:
    | "AgencyServiceConnection"
    | "AttendanceConnection"
    | "CampaignConnection"
    | "CampaignRecipientConnection"
    | "ChannelConnection"
    | "ChannelMessageConnection"
    | "CheckoutCashVoucherConnection"
    | "CheckoutItemConnection"
    | "CollectionConnection"
    | "CollectionSalesConnection"
    | "CompanyCashVoucherCodeConnection"
    | "CompanyCashVoucherConnection"
    | "CompanyConnection"
    | "CompanyCouponConnection"
    | "CompanyDiscountConnection"
    | "CompanyMemberTierConnection"
    | "CompanyReceivePurchaseConnection"
    | "CompanyReceivePurchaseItemConnection"
    | "CompanyStaffConnection"
    | "CompanyStockAdjustmentConnection"
    | "CompanyStockTransferConnection"
    | "CompanyStocktakeConnection"
    | "CompanyStocktakeItemConnection"
    | "CouponSalesConnection"
    | "CouponSalesRecordConnection"
    | "CreditNoteConnection"
    | "CustomerAddressConnection"
    | "CustomerConnection"
    | "DeliveryNoteConnection"
    | "DiscountSalesConnection"
    | "GiftPointAdjustmentConnection"
    | "HonorProductSerialConnection"
    | "IngredientConnection"
    | "InventoryReportDataConnection"
    | "InvoiceConnection"
    | "MemberTierSalesConnection"
    | "MemberTierSalesRecordConnection"
    | "NewsletterSubscriptionConnection"
    | "OrderActivityConnection"
    | "OrderAddOnProductConnection"
    | "OrderConnection"
    | "OrderItemConnection"
    | "PageConnection"
    | "PaymentMethodConnection"
    | "PaymentSourceConnection"
    | "ProductConnection"
    | "ProductSalesConnection"
    | "ProductSalesRecordConnection"
    | "ProductUnionConnection"
    | "ReturnNoteItemConnection"
    | "SalespersonSalesConnection"
    | "SalespersonSalesRecordConnection"
    | "ServiceApplicationConnection"
    | "ServiceLocationRuleConnection"
    | "ServiceLocationSlotConnection"
    | "ServiceSlotConnection"
    | "ShippingZoneAddressConnection"
    | "ShopAddOnProductConnection"
    | "ShopAnalysisToolConnection"
    | "ShopAppointmentConnection"
    | "ShopAttributeConnection"
    | "ShopBundleProductConnection"
    | "ShopCashFlowConnection"
    | "ShopCheckoutConnection"
    | "ShopConnection"
    | "ShopContactEmailConnection"
    | "ShopDeviceConnection"
    | "ShopDeviceMetricConnection"
    | "ShopEmailTemplateConnection"
    | "ShopFormConnection"
    | "ShopFormRecordConnection"
    | "ShopMarqueeConnection"
    | "ShopNavigationTemplateConnection"
    | "ShopPopupConnection"
    | "ShopProductModifierConnection"
    | "ShopReceiptTemplateConnection"
    | "ShopReferenceNoFormatConnection"
    | "ShopReturnNoteConnection"
    | "ShopSalesConnection"
    | "ShopServiceBundleConnection"
    | "ShopServiceConnection"
    | "ShopServiceLocationConnection"
    | "ShopShippingZoneConnection"
    | "ShopSitemapConnection"
    | "ShopTableConnection"
    | "ShopTaxZoneConnection"
    | "ShopVenueConnection"
    | "StockAdjustmentItemConnection"
    | "StockMovementConnection"
    | "StockTransferItemConnection"
    | "UserAddressConnection"
    | "UserConnection"
    | "UserCouponConnection"
    | "VariationConnection"
    | "VariationSalesConnection"
    | "VariationStockConnection"
    | "WarehouseConnection"
    | "WishItemConnection"
    | "WishlistConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
  $on: $Connection;
}

export interface CouponAction {
  __typename?: "CouponAction";
  actionId?: Maybe<ScalarsEnums["ID"]>;
  actionIds?: Maybe<Array<ScalarsEnums["String"]>>;
  actionType: ScalarsEnums["CouponActionType"];
  actionValue?: Maybe<ScalarsEnums["String"]>;
  actionValueType?: Maybe<ScalarsEnums["CouponActionValueType"]>;
}

export interface CouponSales {
  __typename?: "CouponSales";
  /**
   * 銷售額
   */
  amount: ScalarsEnums["Float"];
  /**
   * 平均購買數量 = 賣出數量 / 訂單
   */
  avgCount: ScalarsEnums["Float"];
  /**
   * 平均單價 = 銷售額 / 訂單
   */
  avgPrice: ScalarsEnums["Float"];
  /**
   * 賣出數量
   */
  count: ScalarsEnums["Int"];
  /**
   * 地區分佈
   */
  countries: Array<ChartData>;
  /**
   * 折扣金額
   */
  discountAmount: ScalarsEnums["Float"];
  handle: ScalarsEnums["String"];
  id: ScalarsEnums["ID"];
  /**
   * 會員銷售額
   */
  memberAmount: ScalarsEnums["Float"];
  /**
   * 會員級別消費
   */
  memberLevelAmounts: Array<ChartData>;
  /**
   * 會員級別分佈
   */
  memberLevels: Array<ChartData>;
  name: ScalarsEnums["String"];
  /**
   * 非會員銷售額
   */
  nonMemberAmount: ScalarsEnums["Float"];
  /**
   * 訂單
   */
  orderCount: ScalarsEnums["Int"];
  /**
   * 派出數量
   */
  redeemCount?: Maybe<ScalarsEnums["Int"]>;
  /**
   * 銷售點分佈
   */
  salesPoints: Array<ChartData>;
  /**
   * 銷售記錄
   */
  salesRecords: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => CouponSalesRecordConnection;
  /**
   * 銷售趨勢
   */
  salesTrends: Array<LineChartData>;
  /**
   * 使用數量
   */
  usageCount: ScalarsEnums["Int"];
}

export interface CouponSalesConnection {
  __typename?: "CouponSalesConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<CouponSales>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface CouponSalesRecord {
  __typename?: "CouponSalesRecord";
  /**
   * 金額
   */
  amount: ScalarsEnums["Float"];
  /**
   * 數量
   */
  count: ScalarsEnums["Int"];
  createdAt: ScalarsEnums["AWSDateTime"];
  discountAmount: ScalarsEnums["Float"];
  orderId: ScalarsEnums["ID"];
  referenceNo: ScalarsEnums["String"];
  shopId: ScalarsEnums["ID"];
  shopName: ScalarsEnums["String"];
}

export interface CouponSalesRecordConnection {
  __typename?: "CouponSalesRecordConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<CouponSalesRecord>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface CouponTrigger {
  __typename?: "CouponTrigger";
  triggerId?: Maybe<ScalarsEnums["ID"]>;
  triggerIds?: Maybe<Array<ScalarsEnums["String"]>>;
  triggerType: ScalarsEnums["CouponTriggerType"];
  triggerValue?: Maybe<ScalarsEnums["Float"]>;
  triggerValueType?: Maybe<ScalarsEnums["CouponTriggerValueType"]>;
}

export interface CreditNoteConnection {
  __typename?: "CreditNoteConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<InvoiceCreditNote>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface Customer {
  __typename?: "Customer";
  addresses: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => CustomerAddressConnection;
  appointments: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<ShopAppointmentFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ShopAppointmentConnection;
  blocked: ScalarsEnums["Boolean"];
  channels: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<ChannelFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ChannelConnection;
  checkouts: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<CheckoutFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ShopCheckoutConnection;
  /**
   * Company that owns this customer.
   */
  company: Company;
  coupons: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<UserCouponFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => Maybe<UserCouponConnection>;
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  email: ScalarsEnums["AWSEmail"];
  emailVerified: ScalarsEnums["Boolean"];
  /**
   * Gift points if the immediate parent object is a shop, null for merchant users.
   */
  giftPoints: (args?: {
    shopId?: Maybe<ScalarsEnums["ID"]>;
  }) => ScalarsEnums["Int"];
  /**
   * Gift points balance that is available before the next reset date.
   */
  giftPointsBalance: (args?: {
    shopId?: Maybe<ScalarsEnums["ID"]>;
  }) => Array<GiftPointBalance>;
  /**
   * Gift point adjustment records.
   */
  giftPointsHistory: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<GiftPointAdjustmentConnectionFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => GiftPointAdjustmentConnection;
  hashtags: Array<ScalarsEnums["String"]>;
  id: ScalarsEnums["ID"];
  /**
   * @deprecated Use `emailVerified` instead.
   */
  isEmailVerified?: Maybe<ScalarsEnums["Boolean"]>;
  /**
   * @deprecated Use `phoneNumberVerified` instead.
   */
  isPhoneNumberVerified?: Maybe<ScalarsEnums["Boolean"]>;
  lastLogin?: Maybe<ScalarsEnums["AWSDateTime"]>;
  memberTier?: Maybe<CompanyMemberTier>;
  /**
   * These attributes are stored under app_metadata as an object and can be used in
   *  filters.
   */
  metadata: Array<Metadata>;
  orderItems: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<OrderItemFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => OrderItemConnection;
  orders: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<OrderFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => OrderConnection;
  paymentSources: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => PaymentSourceConnection;
  phoneNumber?: Maybe<ScalarsEnums["String"]>;
  phoneNumberVerified: ScalarsEnums["Boolean"];
  picture?: Maybe<ScalarsEnums["AWSURL"]>;
  /**
   * @deprecated Use giftPoints
   */
  points: ScalarsEnums["Int"];
  previousMemberTier?: Maybe<CustomerMemberTier>;
  report: (args?: { filter?: Maybe<UserSalesFilterInput> }) => UserReport;
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
  wishlists: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<WishlistFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => WishlistConnection;
}

export interface CustomerAddress {
  __typename?: "CustomerAddress";
  city?: Maybe<ScalarsEnums["String"]>;
  country?: Maybe<ScalarsEnums["Country"]>;
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  district?: Maybe<ScalarsEnums["String"]>;
  email?: Maybe<ScalarsEnums["String"]>;
  id: ScalarsEnums["ID"];
  isDefault: ScalarsEnums["Boolean"];
  lines?: Maybe<Array<ScalarsEnums["String"]>>;
  name?: Maybe<ScalarsEnums["String"]>;
  person?: Maybe<ScalarsEnums["String"]>;
  postalCode?: Maybe<ScalarsEnums["String"]>;
  state?: Maybe<ScalarsEnums["String"]>;
  tel?: Maybe<ScalarsEnums["String"]>;
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
}

export interface CustomerAddressConnection {
  __typename?: "CustomerAddressConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<CustomerAddress>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface CustomerConnection {
  __typename?: "CustomerConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<Customer>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface CustomerMemberTier {
  __typename?: "CustomerMemberTier";
  /**
   * CompanyMemberTierId
   */
  id: ScalarsEnums["ID"];
  name: ScalarsEnums["String"];
  startedAt: ScalarsEnums["AWSDateTime"];
  startedThru?: Maybe<ScalarsEnums["AWSDateTime"]>;
}

export interface DailyAvailability {
  __typename?: "DailyAvailability";
  /**
   * ['0','1','2','3','4','5','6'] 0=Sunday, 1=Monday.
   */
  daysOfWeek?: Maybe<Array<ScalarsEnums["String"]>>;
  /**
   * HH:mm
   */
  startedAt?: Maybe<ScalarsEnums["AWSDateTime"]>;
  /**
   * HH:mm
   */
  startedThru?: Maybe<ScalarsEnums["AWSDateTime"]>;
}

export interface DeliveryNoteConnection {
  __typename?: "DeliveryNoteConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<OrderDeliveryNote>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface DeliveryNoteItem {
  __typename?: "DeliveryNoteItem";
  appointments: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<ShopAppointmentFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ShopAppointmentConnection;
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  id: ScalarsEnums["ID"];
  order: ShopOrder;
  orderItem?: Maybe<OrderItem>;
  quantity: ScalarsEnums["Int"];
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
}

export interface DiscountAction {
  __typename?: "DiscountAction";
  actionId?: Maybe<ScalarsEnums["ID"]>;
  actionIds?: Maybe<Array<ScalarsEnums["String"]>>;
  actionType: ScalarsEnums["DiscountActionType"];
  actionValue?: Maybe<ScalarsEnums["String"]>;
  actionValueType?: Maybe<ScalarsEnums["DiscountActionValueType"]>;
}

export interface DiscountSales {
  __typename?: "DiscountSales";
  /**
   * 銷售額
   */
  amount: ScalarsEnums["Float"];
  /**
   * 平均購買數量 = 賣出數量 / 訂單
   */
  avgCount: ScalarsEnums["Float"];
  /**
   * 平均單價 = 銷售額 / 訂單
   */
  avgPrice: ScalarsEnums["Float"];
  /**
   * 賣出數量
   */
  count: ScalarsEnums["Int"];
  /**
   * 地區分佈
   */
  countries: Array<ChartData>;
  /**
   * 折扣金額
   */
  discountAmount: ScalarsEnums["Float"];
  id: ScalarsEnums["ID"];
  /**
   * 會員銷售額
   */
  memberAmount: ScalarsEnums["Float"];
  /**
   * 會員級別消費
   */
  memberLevelAmounts: Array<ChartData>;
  /**
   * 會員級別分佈
   */
  memberLevels: Array<ChartData>;
  name: ScalarsEnums["String"];
  /**
   * 非會員銷售額
   */
  nonMemberAmount: ScalarsEnums["Float"];
  /**
   * 訂單
   */
  orderCount: ScalarsEnums["Int"];
  /**
   * 銷售點分佈
   */
  salesPoints: Array<ChartData>;
  /**
   * 銷售記錄
   */
  salesRecords: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => CouponSalesRecordConnection;
  /**
   * 銷售趨勢
   */
  salesTrends: Array<LineChartData>;
  /**
   * 使用數量
   */
  usageCount: ScalarsEnums["Int"];
}

export interface DiscountSalesConnection {
  __typename?: "DiscountSalesConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<DiscountSales>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface DiscountTrigger {
  __typename?: "DiscountTrigger";
  triggerId?: Maybe<ScalarsEnums["ID"]>;
  triggerIds?: Maybe<Array<ScalarsEnums["String"]>>;
  triggerType: ScalarsEnums["DiscountTriggerType"];
  triggerValue?: Maybe<ScalarsEnums["Float"]>;
  triggerValueType?: Maybe<ScalarsEnums["DiscountTriggerValueType"]>;
}

/**
 * Structured duration format, partially inspired by ISO 8601.
 */
export interface Duration {
  __typename?: "Duration";
  days: ScalarsEnums["Int"];
  hours: ScalarsEnums["Int"];
  minutes: ScalarsEnums["Int"];
  months: ScalarsEnums["Int"];
  seconds?: Maybe<ScalarsEnums["Int"]>;
  weeks: ScalarsEnums["Int"];
  years: ScalarsEnums["Int"];
}

export interface GiftPointAdjustment {
  __typename?: "GiftPointAdjustment";
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  customer: User;
  /**
   * Human readable remarks when adjusted manually.
   */
  description?: Maybe<ScalarsEnums["String"]>;
  direction: ScalarsEnums["GiftPointDirection"];
  id: ScalarsEnums["ID"];
  metadata?: Maybe<Array<Metadata>>;
  /**
   * Gift points adjusted in this transaction.
   */
  points: ScalarsEnums["Int"];
  remark?: Maybe<ScalarsEnums["String"]>;
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
}

export interface GiftPointAdjustmentConnection {
  __typename?: "GiftPointAdjustmentConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<GiftPointAdjustment>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface GiftPointBalance {
  __typename?: "GiftPointBalance";
  date?: Maybe<ScalarsEnums["AWSDateTime"]>;
  points: ScalarsEnums["Int"];
}

export interface HonorProductSerial {
  __typename?: "HonorProductSerial";
  active: ScalarsEnums["Boolean"];
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  id: ScalarsEnums["ID"];
  imei?: Maybe<ScalarsEnums["String"]>;
  metadata?: Maybe<Array<Metadata>>;
  sku?: Maybe<ScalarsEnums["String"]>;
  sn1?: Maybe<ScalarsEnums["String"]>;
  sn2?: Maybe<ScalarsEnums["String"]>;
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
}

export interface HonorProductSerialConnection {
  __typename?: "HonorProductSerialConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<HonorProductSerial>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface Ingredient {
  __typename?: "Ingredient";
  ProductVariation?: Maybe<ProductVariation>;
  company: Company;
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  id: ScalarsEnums["ID"];
  name: ScalarsEnums["String"];
  quantity: (args: { warehouseId: ScalarsEnums["ID"] }) => ScalarsEnums["Int"];
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
}

export interface IngredientConnection {
  __typename?: "IngredientConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<Ingredient>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface InventoryReportDataConnection {
  __typename?: "InventoryReportDataConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<InventoryReportDatum>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface InventoryReportDatum {
  __typename?: "InventoryReportDatum";
  combination?: Maybe<ScalarsEnums["String"]>;
  productName: (args: {
    shopId: ScalarsEnums["ID"];
  }) => Maybe<ScalarsEnums["String"]>;
  /**
   * variation sku
   */
  sku: ScalarsEnums["String"];
  stocks: Array<InventoryReportStockDatum>;
}

export interface InventoryReportStockDatum {
  __typename?: "InventoryReportStockDatum";
  quantity: ScalarsEnums["Int"];
  warehouseId: ScalarsEnums["ID"];
}

export interface InvoiceConnection {
  __typename?: "InvoiceConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<OrderInvoice>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface InvoiceCredential {
  __typename?: "InvoiceCredential";
  active?: Maybe<ScalarsEnums["Boolean"]>;
  createdAt?: Maybe<ScalarsEnums["AWSDateTime"]>;
  createdBy?: Maybe<User>;
  description?: Maybe<ScalarsEnums["String"]>;
  id?: Maybe<ScalarsEnums["ID"]>;
  identity?: Maybe<ScalarsEnums["String"]>;
  meta?: Maybe<ScalarsEnums["AWSJSON"]>;
  name?: Maybe<ScalarsEnums["String"]>;
  platform?: Maybe<ScalarsEnums["ShopCredentialPlatform"]>;
  referenceNo: ScalarsEnums["String"];
  secret?: Maybe<ScalarsEnums["String"]>;
  shop?: Maybe<CompanyShop>;
  type?: Maybe<ScalarsEnums["ShopCredentialType"]>;
  updatedAt?: Maybe<ScalarsEnums["AWSDateTime"]>;
  updatedBy?: Maybe<User>;
}

export interface InvoiceCreditNote {
  __typename?: "InvoiceCreditNote";
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  currency: ScalarsEnums["String"];
  id: ScalarsEnums["ID"];
  invoice?: Maybe<OrderInvoice>;
  meta?: Maybe<ScalarsEnums["AWSJSON"]>;
  referenceNo: ScalarsEnums["String"];
  remark?: Maybe<ScalarsEnums["String"]>;
  shop: CompanyShop;
  status: ScalarsEnums["InvoiceCreditNoteStatus"];
  total: ScalarsEnums["Float"];
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
  user: User;
}

export interface LineChartData {
  __typename?: "LineChartData";
  data: Array<ChartData>;
  name: ScalarsEnums["String"];
}

export interface Me {
  __typename?: "Customer" | "User";
  $on: $Me;
}

export interface Media {
  __typename?: "Media";
  alt?: Maybe<ScalarsEnums["String"]>;
  id?: Maybe<ScalarsEnums["ID"]>;
  metadata?: Maybe<Array<Metadata>>;
  /**
   * Converts the source media into specified size and content type, optionally
   *  cropping with the image positioned according to gravity.
   */
  optimizedSrc: (args?: {
    contentType?: Maybe<MediaContentType>;
    fitting?: Maybe<MediaFitting>;
    gravity?: Maybe<MediaGravity>;
    height?: Maybe<ScalarsEnums["Int"]>;
    quality?: Maybe<ScalarsEnums["Int"]>;
    width?: Maybe<ScalarsEnums["Int"]>;
  }) => Maybe<ScalarsEnums["AWSURL"]>;
  src: ScalarsEnums["AWSURL"];
  /**
   * Hashtags describing the source image, generated from the perceived contents.
   */
  suggestedHashtags?: Maybe<Array<ScalarsEnums["String"]>>;
}

export interface MemberTierSales {
  __typename?: "MemberTierSales";
  /**
   * 銷售額(折扣後)
   */
  amount: ScalarsEnums["Float"];
  /**
   * 平均消費 = 銷售額 / 賣出數量
   */
  avgAmount: ScalarsEnums["Float"];
  /**
   * 平均購買數量 = 賣出數量 / 訂單
   */
  avgCount: ScalarsEnums["Float"];
  /**
   * 平均單價 = 銷售額 / 訂單
   */
  avgPrice: ScalarsEnums["Float"];
  /**
   * 賣出數量
   */
  count: ScalarsEnums["Int"];
  id: ScalarsEnums["ID"];
  /**
   * 人數
   */
  memberCount: ScalarsEnums["Int"];
  /**
   * 人數變化
   */
  memberCountChange: ScalarsEnums["Int"];
  /**
   * shopMetadataFields, e.g. 性別, 年份, 生日月份, 地區分佈
   */
  memberTierTopHits: (args: {
    key: ScalarsEnums["String"];
  }) => Array<ChartData>;
  /**
   * 級別
   */
  name: ScalarsEnums["String"];
  /**
   * 新註冊人數
   */
  newMemberCount: ScalarsEnums["Int"];
  /**
   * 訂單
   */
  orderCount: ScalarsEnums["Int"];
  /**
   * 銷售記錄
   */
  salesRecords: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => MemberTierSalesRecordConnection;
  /**
   * 銷售趨勢
   */
  salesTrends: Array<LineChartData>;
}

export interface MemberTierSalesConnection {
  __typename?: "MemberTierSalesConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<MemberTierSales>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface MemberTierSalesRecord {
  __typename?: "MemberTierSalesRecord";
  /**
   * 金額
   */
  amount: ScalarsEnums["Float"];
  /**
   * 數量
   */
  count: ScalarsEnums["Int"];
  createdAt: ScalarsEnums["AWSDateTime"];
  orderId: ScalarsEnums["ID"];
  referenceNo: ScalarsEnums["String"];
  shopId: ScalarsEnums["ID"];
  shopName: ScalarsEnums["String"];
}

export interface MemberTierSalesRecordConnection {
  __typename?: "MemberTierSalesRecordConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<MemberTierSalesRecord>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface MemberTierUpgradeCondition {
  __typename?: "MemberTierUpgradeCondition";
  type: ScalarsEnums["UpgradeConditionType"];
  upgradeConditionAmount: ScalarsEnums["Int"];
  upgradeConditionMonths?: Maybe<ScalarsEnums["Int"]>;
}

export interface Metadata {
  __typename?: "Metadata";
  key: ScalarsEnums["String"];
  value: ScalarsEnums["String"];
}

export interface NewsletterSubscription {
  __typename?: "NewsletterSubscription";
  active?: Maybe<ScalarsEnums["Boolean"]>;
  company: Company;
  contact: ScalarsEnums["String"];
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  id: ScalarsEnums["ID"];
  shop: CompanyShop;
  type: ScalarsEnums["SubscriptionType"];
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
  userId?: Maybe<ScalarsEnums["String"]>;
}

export interface NewsletterSubscriptionConnection {
  __typename?: "NewsletterSubscriptionConnection";
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  nodes: Array<NewsletterSubscription>;
  totalCount: ScalarsEnums["Int"];
}

/**
 * Base data node for all enttities in the system.
 */
export interface Node {
  __typename?:
    | "AgencyService"
    | "AgencyServiceApplication"
    | "ApplicationComment"
    | "CampaignAction"
    | "CampaignRecipient"
    | "Channel"
    | "ChannelMessage"
    | "CheckoutCashVoucher"
    | "CheckoutItem"
    | "Company"
    | "CompanyCashVoucher"
    | "CompanyCoupon"
    | "CompanyDiscount"
    | "CompanyMemberTier"
    | "CompanyReceivePurchase"
    | "CompanyReceivePurchaseItem"
    | "CompanyShop"
    | "CompanyStaff"
    | "CompanyStockAdjustment"
    | "CompanyStockTransfer"
    | "CompanyStocktake"
    | "CompanyStocktakeItem"
    | "CompanyWarehouse"
    | "Customer"
    | "CustomerAddress"
    | "DeliveryNoteItem"
    | "GiftPointAdjustment"
    | "HonorProductSerial"
    | "Ingredient"
    | "InvoiceCreditNote"
    | "NewsletterSubscription"
    | "OrderActivity"
    | "OrderAddOnProduct"
    | "OrderComment"
    | "OrderDeliveryNote"
    | "OrderInvoice"
    | "OrderItem"
    | "PaymentMethod"
    | "PaymentSource"
    | "ProductVariation"
    | "ReturnNoteItem"
    | "ServiceLocationRule"
    | "ShippingZoneAddress"
    | "ShopAddOnProduct"
    | "ShopAddress"
    | "ShopAnalysisTool"
    | "ShopAppointment"
    | "ShopAttendance"
    | "ShopAttribute"
    | "ShopBundleProduct"
    | "ShopBundleProductOption"
    | "ShopCampaign"
    | "ShopCashFlow"
    | "ShopCheckout"
    | "ShopCollection"
    | "ShopContactEmail"
    | "ShopCredential"
    | "ShopDevice"
    | "ShopEmailTemplate"
    | "ShopForm"
    | "ShopFormRecord"
    | "ShopMarquee"
    | "ShopNavigationTemplate"
    | "ShopOrder"
    | "ShopPage"
    | "ShopPopup"
    | "ShopProduct"
    | "ShopProductModifier"
    | "ShopReceiptTemplate"
    | "ShopReferenceNoFormat"
    | "ShopReturnNote"
    | "ShopService"
    | "ShopServiceBundle"
    | "ShopServiceLocation"
    | "ShopShippingZone"
    | "ShopSitemap"
    | "ShopTable"
    | "ShopTaxZone"
    | "ShopVenue"
    | "StockAdjustmentItem"
    | "StockMovement"
    | "StockTransferItem"
    | "User"
    | "UserAddress"
    | "UserCard"
    | "UserCoupon"
    | "Webhook"
    | "WishItem"
    | "Wishlist";
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  id: ScalarsEnums["ID"];
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
  $on: $Node;
}

export interface OrderActivity {
  __typename?: "OrderActivity";
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  event: ScalarsEnums["String"];
  id: ScalarsEnums["ID"];
  order: ShopOrder;
  orderId: ScalarsEnums["ID"];
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
  userId?: Maybe<ScalarsEnums["ID"]>;
}

export interface OrderActivityConnection {
  __typename?: "OrderActivityConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes?: Maybe<Array<Maybe<OrderActivity>>>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface OrderAddOnProduct {
  __typename?: "OrderAddOnProduct";
  active: ScalarsEnums["Boolean"];
  addOnProduct: ShopAddOnProduct;
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  id: ScalarsEnums["ID"];
  quantity: ScalarsEnums["Int"];
  remark?: Maybe<ScalarsEnums["String"]>;
  sortIndex: ScalarsEnums["Int"];
  unitPrice?: Maybe<ScalarsEnums["Float"]>;
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
}

export interface OrderAddOnProductConnection {
  __typename?: "OrderAddOnProductConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<OrderAddOnProduct>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface OrderAdjustment {
  __typename?: "OrderAdjustment";
  amount: ScalarsEnums["Float"];
  description?: Maybe<ScalarsEnums["String"]>;
  id: ScalarsEnums["ID"];
  points?: Maybe<ScalarsEnums["Int"]>;
  sortIndex: ScalarsEnums["Int"];
}

export interface OrderComment {
  __typename?: "OrderComment";
  content: ScalarsEnums["String"];
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  id: ScalarsEnums["ID"];
  order: ShopOrder;
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
  user: User;
}

export interface OrderConnection {
  __typename?: "OrderConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<ShopOrder>;
  /**
   * Orders total amount.
   */
  totalAmount: ScalarsEnums["Float"];
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface OrderDeliveryNote {
  __typename?: "OrderDeliveryNote";
  address?: Maybe<Address>;
  appointments: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<ShopAppointmentFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ShopAppointmentConnection;
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  /**
   * @deprecated Should not show deliveryDetails
   */
  deliveryDetails?: Maybe<ScalarsEnums["AWSJSON"]>;
  id: ScalarsEnums["ID"];
  items: Array<DeliveryNoteItem>;
  /**
   * @deprecated Use metadata instead
   */
  meta?: Maybe<ScalarsEnums["AWSJSON"]>;
  metadata?: Maybe<Array<Metadata>>;
  order: ShopOrder;
  provider?: Maybe<ScalarsEnums["ShippingZoneProvider"]>;
  referenceNo: ScalarsEnums["String"];
  shippingProvider?: Maybe<ShopShippingProvider>;
  shop: CompanyShop;
  status: ScalarsEnums["DeliveryNoteStatus"];
  trackingNumber?: Maybe<ScalarsEnums["String"]>;
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
  user?: Maybe<User>;
}

export interface OrderInvoice {
  __typename?: "OrderInvoice";
  address?: Maybe<Address>;
  cancelReason?: Maybe<ScalarsEnums["String"]>;
  change: ScalarsEnums["Float"];
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  /**
   * @deprecated Use paymentMethodV2 instead.
   */
  credential: InvoiceCredential;
  creditNotes: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<CreditNoteFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => CreditNoteConnection;
  currency: ScalarsEnums["String"];
  customer?: Maybe<User>;
  id: ScalarsEnums["ID"];
  meta?: Maybe<ScalarsEnums["AWSJSON"]>;
  metadata?: Maybe<Array<Metadata>>;
  order: ShopOrder;
  paymentMethod: ScalarsEnums["PaymentProvider"];
  paymentMethodV2?: Maybe<PaymentMethod>;
  referenceNo?: Maybe<ScalarsEnums["String"]>;
  refundStatus?: Maybe<ScalarsEnums["InvoiceRefundStatus"]>;
  shop: CompanyShop;
  status: ScalarsEnums["OrderInvoiceStatus"];
  total: ScalarsEnums["Float"];
  totalPaid: ScalarsEnums["Float"];
  totalRefund: ScalarsEnums["Float"];
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
}

export interface OrderItem {
  __typename?: "OrderItem";
  addOnProduct?: Maybe<ShopAddOnProduct>;
  appointments: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<ShopAppointmentFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ShopAppointmentConnection;
  bundleProduct?: Maybe<CheckoutBundleProduct>;
  checkout: ShopCheckout;
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  deliverableQuantity: ScalarsEnums["Int"];
  description?: Maybe<ScalarsEnums["String"]>;
  id: ScalarsEnums["ID"];
  media?: Maybe<Media>;
  metadata?: Maybe<Array<Metadata>>;
  metadataFields?: Maybe<Array<CompanyMemberMetadataField>>;
  order: ShopOrder;
  productVariation?: Maybe<ProductVariation>;
  quantity: ScalarsEnums["Int"];
  remark?: Maybe<ScalarsEnums["String"]>;
  returnNoteItems?: Maybe<Array<ReturnNoteItem>>;
  serviceBundle?: Maybe<CheckoutServiceBundle>;
  sku?: Maybe<ScalarsEnums["String"]>;
  unitPrice?: Maybe<ScalarsEnums["Float"]>;
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
}

export interface OrderItemConnection {
  __typename?: "OrderItemConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<OrderItem>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface OtherDiscount {
  __typename?: "OtherDiscount";
  amount: ScalarsEnums["Float"];
  count: ScalarsEnums["Int"];
  name: ScalarsEnums["String"];
}

export interface PageConnection {
  __typename?: "PageConnection";
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  nodes: Array<ShopPage>;
  totalCount: ScalarsEnums["Int"];
}

export interface PageViewsData {
  __typename?: "PageViewsData";
  name: ScalarsEnums["String"];
  value: ScalarsEnums["Float"];
}

export interface PaymentMethod {
  __typename?: "PaymentMethod";
  active: ScalarsEnums["Boolean"];
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  credential: ShopCredential;
  description?: Maybe<ScalarsEnums["String"]>;
  enabled: ScalarsEnums["Boolean"];
  id: ScalarsEnums["ID"];
  metadata?: Maybe<Array<Metadata>>;
  name: ScalarsEnums["String"];
  provider: ScalarsEnums["PaymentProvider"];
  shop: CompanyShop;
  sortIndex: ScalarsEnums["Int"];
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
}

export interface PaymentMethodConnection {
  __typename?: "PaymentMethodConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<PaymentMethod>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

/**
 * Stored payment methods for future payments.
 */
export interface PaymentSource {
  __typename?: "PaymentSource";
  brand: ScalarsEnums["String"];
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  expiryMonth: ScalarsEnums["Int"];
  expiryYear: ScalarsEnums["Int"];
  holderName?: Maybe<ScalarsEnums["String"]>;
  id: ScalarsEnums["ID"];
  issuerCountry?: Maybe<ScalarsEnums["String"]>;
  last4: ScalarsEnums["String"];
  provider: ScalarsEnums["String"];
  sourceId: ScalarsEnums["String"];
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
}

export interface PaymentSourceConnection {
  __typename?: "PaymentSourceConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<PaymentSource>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface Permission {
  __typename?: "Permission";
  key: ScalarsEnums["String"];
  value: Array<ScalarsEnums["String"]>;
}

/**
 * A general representation of a deferred action that the server handles at the
 *  next available schedule for a given resource owner, i.e. available job queues
 *  for each shop.
 */
export interface Process {
  __typename?: "Process";
  createdAt?: Maybe<ScalarsEnums["AWSDateTime"]>;
  id: ScalarsEnums["ID"];
  /**
   * Example outputs:
   *  1. status: RUNNING `{ "progress": 0.12, "message": "12 of 1032 products exported." }`
   *  2. status: SUCCESS `{ "href": "https://s3.amazonaws.com/exports/products.xlsx", "message": "1032 products exported." }`
   *  3. status: FAILURE `{ "code": 500, "error": "Internal Server Error" }`
   */
  output?: Maybe<ScalarsEnums["AWSJSON"]>;
  status: ScalarsEnums["ProcessStatus"];
  updatedAt?: Maybe<ScalarsEnums["AWSDateTime"]>;
}

export interface ProductCombination {
  __typename?: "ProductCombination";
  name: ScalarsEnums["String"];
  options: Array<ProductCombinationOption>;
}

export interface ProductCombinationOption {
  __typename?: "ProductCombinationOption";
  name: ScalarsEnums["String"];
  priceAdjustment: ScalarsEnums["Float"];
}

export interface ProductConnection {
  __typename?: "ProductConnection";
  filters: Array<AttributeFilter>;
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<ShopProduct>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface ProductDetail {
  __typename?: "ProductDetail";
  content?: Maybe<ScalarsEnums["String"]>;
  title?: Maybe<ScalarsEnums["String"]>;
}

export interface ProductMedia {
  __typename?: "ProductMedia";
  alt?: Maybe<ScalarsEnums["String"]>;
  /**
   * Partial combination of a product, to act as quick filters for front end.
   */
  combination?: Maybe<Array<ProductVariationCombination>>;
  id?: Maybe<ScalarsEnums["ID"]>;
  metadata?: Maybe<Array<Metadata>>;
  /**
   * Converts the source media into specified size and content type, optionally
   *  cropping with the image positioned according to gravity.
   */
  optimizedSrc: (args?: {
    contentType?: Maybe<MediaContentType>;
    gravity?: Maybe<MediaGravity>;
    height?: Maybe<ScalarsEnums["Int"]>;
    quality?: Maybe<ScalarsEnums["Int"]>;
    width?: Maybe<ScalarsEnums["Int"]>;
  }) => ScalarsEnums["AWSURL"];
  src: ScalarsEnums["AWSURL"];
}

export interface ProductModifier {
  __typename?: "ProductModifier";
  /**
   * Maximum option selection
   */
  max?: Maybe<ScalarsEnums["Int"]>;
  /**
   * Minimum option selection
   */
  min?: Maybe<ScalarsEnums["Int"]>;
  name: ScalarsEnums["String"];
  options: Array<ProductModifierOption>;
}

export interface ProductModifierOption {
  __typename?: "ProductModifierOption";
  name: ScalarsEnums["String"];
  priceAdjustment: ScalarsEnums["Float"];
}

export interface ProductModifierValue {
  __typename?: "ProductModifierValue";
  metadataFields?: Maybe<Array<CompanyMemberMetadataField>>;
  modifierId: ScalarsEnums["ID"];
  modifiers: Array<ProductModifier>;
  sortIndex?: Maybe<ScalarsEnums["Int"]>;
}

export interface ProductSales {
  __typename?: "ProductSales";
  /**
   * 銷售額(折扣後)
   */
  amount: ScalarsEnums["Float"];
  /**
   * 平均購買數量 = 賣出數量 / 訂單
   */
  avgCount: ScalarsEnums["Float"];
  /**
   * 平均單價 = 銷售額 / 賣出數量
   */
  avgPrice: ScalarsEnums["Float"];
  barcode?: Maybe<ScalarsEnums["String"]>;
  barcodes?: Maybe<Array<ScalarsEnums["String"]>>;
  /**
   * 轉化率 = 訂單 / 點擊率
   */
  conversionRate: ScalarsEnums["Float"];
  /**
   * 賣出數量
   */
  count: ScalarsEnums["Int"];
  /**
   * 地區分佈
   */
  countries: Array<ChartData>;
  /**
   * 點擊率
   */
  hitRate: ScalarsEnums["Int"];
  id: ScalarsEnums["ID"];
  medias: (args: { shopId: ScalarsEnums["ID"] }) => Maybe<Array<Media>>;
  /**
   * 會員銷售額
   */
  memberAmount: ScalarsEnums["Float"];
  /**
   * 會員級別消費
   */
  memberLevelAmounts: Array<ChartData>;
  /**
   * 會員級別分佈
   */
  memberLevels: Array<ChartData>;
  name: (args?: {
    shopId?: Maybe<ScalarsEnums["ID"]>;
  }) => ScalarsEnums["String"];
  /**
   * 非會員銷售額
   */
  nonMemberAmount: ScalarsEnums["Float"];
  /**
   * 訂單
   */
  orderCount: ScalarsEnums["Int"];
  /**
   * 瀏覽量
   */
  pageView: ScalarsEnums["Int"];
  /**
   * 銷售點分佈
   */
  salesPoints: Array<ChartData>;
  /**
   * 銷售記錄
   */
  salesRecords: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ProductSalesRecordConnection;
  /**
   * 銷售趨勢
   */
  salesTrends: Array<LineChartData>;
  shopId: ScalarsEnums["ID"];
  sku: ScalarsEnums["String"];
}

export interface ProductSalesConnection {
  __typename?: "ProductSalesConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<ProductSales>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface ProductSalesRecord {
  __typename?: "ProductSalesRecord";
  amount: ScalarsEnums["Float"];
  createdAt: ScalarsEnums["AWSDateTime"];
  productBarcode?: Maybe<ScalarsEnums["String"]>;
  productBarcodes?: Maybe<Array<ScalarsEnums["String"]>>;
  productId: ScalarsEnums["ID"];
  productName: ScalarsEnums["String"];
  productSku: ScalarsEnums["String"];
  quantity: ScalarsEnums["Int"];
  referenceNo: ScalarsEnums["String"];
  shopId: ScalarsEnums["ID"];
  shopName: ScalarsEnums["String"];
  unitPrice: ScalarsEnums["Float"];
  variationBarcode?: Maybe<ScalarsEnums["String"]>;
  variationBarcodes?: Maybe<Array<ScalarsEnums["String"]>>;
  variationId?: Maybe<ScalarsEnums["ID"]>;
  variationSku?: Maybe<ScalarsEnums["String"]>;
}

export interface ProductSalesRecordConnection {
  __typename?: "ProductSalesRecordConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<ProductSalesRecord>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface ProductUnion {
  __typename?: "ShopBundleProduct" | "ShopProduct" | "ShopServiceBundle";
  $on: $ProductUnion;
}

export interface ProductUnionConnection {
  __typename?: "ProductUnionConnection";
  filters: Array<AttributeFilter>;
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<ProductUnion>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface ProductVariation {
  __typename?: "ProductVariation";
  active: ScalarsEnums["Boolean"];
  averageCost: ScalarsEnums["Float"];
  barcode?: Maybe<ScalarsEnums["String"]>;
  barcodes?: Maybe<Array<Maybe<ScalarsEnums["String"]>>>;
  combination: Array<ProductVariationCombination>;
  cost: ScalarsEnums["Float"];
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  display?: Maybe<ScalarsEnums["Boolean"]>;
  hashtags?: Maybe<Array<Maybe<ScalarsEnums["String"]>>>;
  id: ScalarsEnums["ID"];
  ignoreStock: ScalarsEnums["Boolean"];
  /**
   * @deprecated Use product.medias instead.
   */
  images?: Maybe<Array<ScalarsEnums["AWSURL"]>>;
  /**
   * 低庫存
   */
  lowStock?: Maybe<ReminderSetting>;
  /**
   * @deprecated Use product.medias instead.
   */
  medias?: Maybe<Array<Media>>;
  product?: Maybe<ShopProduct>;
  productId: ScalarsEnums["String"];
  quantities: (args?: {
    warehouseIds?: Maybe<Array<ScalarsEnums["ID"]>>;
  }) => Array<Maybe<WarehouseQuantity>>;
  quantity: (args?: {
    warehouseId?: Maybe<ScalarsEnums["ID"]>;
  }) => ScalarsEnums["Int"];
  sku: ScalarsEnums["String"];
  stockLocations?: Maybe<Array<Maybe<ScalarsEnums["String"]>>>;
  suggestedRetailPrice?: Maybe<ScalarsEnums["Float"]>;
  unitPrice: ScalarsEnums["Float"];
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
  weight?: Maybe<ScalarsEnums["Float"]>;
}

export interface ProductVariationCombination {
  __typename?: "ProductVariationCombination";
  name: ScalarsEnums["String"];
  option: ScalarsEnums["String"];
}

export interface ReminderSetting {
  __typename?: "ReminderSetting";
  quantity?: Maybe<ScalarsEnums["Int"]>;
  remind: ScalarsEnums["Boolean"];
}

export interface ReturnNoteItem {
  __typename?: "ReturnNoteItem";
  active: ScalarsEnums["Boolean"];
  bundleProductOptionId?: Maybe<ScalarsEnums["ID"]>;
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  description: ScalarsEnums["String"];
  id: ScalarsEnums["ID"];
  metadata?: Maybe<Array<Metadata>>;
  order: ShopOrder;
  orderId: ScalarsEnums["ID"];
  orderItem: OrderItem;
  orderItemId: ScalarsEnums["ID"];
  productId?: Maybe<ScalarsEnums["ID"]>;
  productVariationId?: Maybe<ScalarsEnums["ID"]>;
  quantity: ScalarsEnums["Int"];
  reason?: Maybe<ScalarsEnums["String"]>;
  remark?: Maybe<ScalarsEnums["String"]>;
  resalable: ScalarsEnums["Boolean"];
  returnNote: ShopReturnNote;
  returnNoteId: ScalarsEnums["ID"];
  sku: ScalarsEnums["String"];
  sortIndex: ScalarsEnums["Int"];
  unitPrice: ScalarsEnums["Float"];
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
  warehouse?: Maybe<CompanyWarehouse>;
  warehouseId?: Maybe<ScalarsEnums["ID"]>;
}

export interface ReturnNoteItemConnection {
  __typename?: "ReturnNoteItemConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<ReturnNoteItem>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface Sales {
  __typename?: "Sales";
  amount: ScalarsEnums["Float"];
  count: ScalarsEnums["Int"];
}

export interface SalesByMethods {
  __typename?: "SalesByMethods";
  amount: ScalarsEnums["Float"];
  count: ScalarsEnums["Int"];
  name: ScalarsEnums["String"];
}

export interface SalespersonSales {
  __typename?: "SalespersonSales";
  /**
   * 銷售額(折扣後)
   */
  amount: ScalarsEnums["Float"];
  /**
   * 平均消費 = 銷售額 / 賣出數量
   */
  avgAmount: ScalarsEnums["Float"];
  /**
   * 平均購買數量 = 賣出數量 / 訂單
   */
  avgCount: ScalarsEnums["Float"];
  /**
   * 平均單價 = 銷售額 / 訂單
   */
  avgPrice: ScalarsEnums["Float"];
  /**
   * 職員編號
   */
  code: ScalarsEnums["String"];
  /**
   * 賣出數量
   */
  count: ScalarsEnums["Int"];
  id: ScalarsEnums["ID"];
  /**
   * 職員名稱
   */
  name: ScalarsEnums["String"];
  /**
   * 訂單
   */
  orderCount: ScalarsEnums["Int"];
  /**
   * 銷售記錄
   */
  salesRecords: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => SalespersonSalesRecordConnection;
  /**
   * 銷售趨勢
   */
  salesTrends: Array<LineChartData>;
}

export interface SalespersonSalesConnection {
  __typename?: "SalespersonSalesConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<SalespersonSales>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface SalespersonSalesRecord {
  __typename?: "SalespersonSalesRecord";
  /**
   * 金額
   */
  amount: ScalarsEnums["Float"];
  /**
   * 數量
   */
  count: ScalarsEnums["Int"];
  createdAt: ScalarsEnums["AWSDateTime"];
  orderId: ScalarsEnums["ID"];
  referenceNo: ScalarsEnums["String"];
  shopId: ScalarsEnums["ID"];
  shopName: ScalarsEnums["String"];
}

export interface SalespersonSalesRecordConnection {
  __typename?: "SalespersonSalesRecordConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<SalespersonSalesRecord>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface ServiceApplicationConnection {
  __typename?: "ServiceApplicationConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<AgencyServiceApplication>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface ServiceBundleModifier {
  __typename?: "ServiceBundleModifier";
  /**
   * Maximum option selection
   */
  max?: Maybe<ScalarsEnums["Int"]>;
  /**
   * Minimum option selection
   */
  min?: Maybe<ScalarsEnums["Int"]>;
  name: ScalarsEnums["String"];
  options: Array<ServiceBundleModifierOption>;
}

export interface ServiceBundleModifierOption {
  __typename?: "ServiceBundleModifierOption";
  active?: Maybe<ScalarsEnums["Boolean"]>;
  minutesAdjustment?: Maybe<ScalarsEnums["Int"]>;
  name: ScalarsEnums["String"];
  priceAdjustment: ScalarsEnums["Float"];
  suggestedRetailPrice?: Maybe<ScalarsEnums["Float"]>;
}

export interface ServiceLocationRule {
  __typename?: "ServiceLocationRule";
  active: ScalarsEnums["Boolean"];
  capacity?: Maybe<ScalarsEnums["Int"]>;
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  /**
   * ['0','1','2','3','4','5','6'] 0=Sunday, 1=Monday.
   */
  daysOfWeek?: Maybe<Array<ScalarsEnums["String"]>>;
  id: ScalarsEnums["ID"];
  location: ShopServiceLocation;
  metadata?: Maybe<Array<Metadata>>;
  sortIndex: ScalarsEnums["Int"];
  startedAt: ScalarsEnums["AWSDateTime"];
  startedThru: ScalarsEnums["AWSDateTime"];
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
}

export interface ServiceLocationRuleConnection {
  __typename?: "ServiceLocationRuleConnection";
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  nodes: Array<ServiceLocationRule>;
  totalCount: ScalarsEnums["Int"];
}

export interface ServiceLocationSlot {
  __typename?: "ServiceLocationSlot";
  appointments: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<ShopAppointmentFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ShopAppointmentConnection;
  capacity?: Maybe<ScalarsEnums["Int"]>;
  id: ScalarsEnums["ID"];
  startedAt: ScalarsEnums["AWSDateTime"];
  startedThru: ScalarsEnums["AWSDateTime"];
}

export interface ServiceLocationSlotConnection {
  __typename?: "ServiceLocationSlotConnection";
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  nodes: Array<ServiceLocationSlot>;
  totalCount: ScalarsEnums["Int"];
}

export interface ServiceSlot {
  __typename?: "ServiceSlot";
  availableCapacity?: Maybe<ScalarsEnums["Int"]>;
  capacity?: Maybe<ScalarsEnums["Int"]>;
  id: ScalarsEnums["ID"];
  serviceLocationId: ScalarsEnums["ID"];
  startedAt: ScalarsEnums["AWSDateTime"];
  startedThru: ScalarsEnums["AWSDateTime"];
}

export interface ServiceSlotConnection {
  __typename?: "ServiceSlotConnection";
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  nodes: Array<ServiceSlot>;
  totalCount: ScalarsEnums["Int"];
}

export interface Session {
  __typename?: "Session";
  createdAt: ScalarsEnums["AWSDateTime"];
  id: ScalarsEnums["ID"];
  updatedAt: ScalarsEnums["AWSDateTime"];
  user: User;
}

export interface SessionToken {
  __typename?: "SessionToken";
  access_token: ScalarsEnums["String"];
  expires_in: ScalarsEnums["Int"];
  id_token?: Maybe<ScalarsEnums["String"]>;
  refresh_token?: Maybe<ScalarsEnums["String"]>;
  scope?: Maybe<ScalarsEnums["String"]>;
  token_type: ScalarsEnums["String"];
}

export interface ShippingZoneAddress {
  __typename?: "ShippingZoneAddress";
  active: ScalarsEnums["Boolean"];
  city?: Maybe<ScalarsEnums["String"]>;
  country?: Maybe<ScalarsEnums["Country"]>;
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  description?: Maybe<ScalarsEnums["String"]>;
  district?: Maybe<ScalarsEnums["String"]>;
  email?: Maybe<ScalarsEnums["String"]>;
  id: ScalarsEnums["ID"];
  lines?: Maybe<Array<ScalarsEnums["String"]>>;
  metadata?: Maybe<Array<Metadata>>;
  name?: Maybe<ScalarsEnums["String"]>;
  person?: Maybe<ScalarsEnums["String"]>;
  postalCode?: Maybe<ScalarsEnums["String"]>;
  sortIndex?: Maybe<ScalarsEnums["Int"]>;
  state?: Maybe<ScalarsEnums["String"]>;
  tel?: Maybe<ScalarsEnums["String"]>;
  type: ScalarsEnums["ShippingZoneAddressType"];
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
}

export interface ShippingZoneAddressConnection {
  __typename?: "ShippingZoneAddressConnection";
  availableDistricts?: Maybe<Array<ScalarsEnums["String"]>>;
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<ShippingZoneAddress>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface ShippingZoneExpressions {
  __typename?: "ShippingZoneExpressions";
  maxWeight: ScalarsEnums["Float"];
  unit: ScalarsEnums["Int"];
  unitPrice: ScalarsEnums["Float"];
}

export interface ShopAddOnProduct {
  __typename?: "ShopAddOnProduct";
  active: ScalarsEnums["Boolean"];
  amount?: Maybe<ScalarsEnums["Float"]>;
  barcode?: Maybe<ScalarsEnums["String"]>;
  cost: ScalarsEnums["Float"];
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  description?: Maybe<ScalarsEnums["String"]>;
  hashtags?: Maybe<Array<ScalarsEnums["String"]>>;
  id: ScalarsEnums["ID"];
  ignoreStock: ScalarsEnums["Boolean"];
  medias?: Maybe<Array<Media>>;
  name: ScalarsEnums["String"];
  product?: Maybe<ShopProduct>;
  productId?: Maybe<ScalarsEnums["ID"]>;
  publishAt?: Maybe<ScalarsEnums["AWSDateTime"]>;
  publishThru?: Maybe<ScalarsEnums["AWSDateTime"]>;
  purchaseLimit: ScalarsEnums["Int"];
  quantity: (args?: {
    warehouseId?: Maybe<ScalarsEnums["ID"]>;
  }) => ScalarsEnums["Int"];
  sku: ScalarsEnums["String"];
  type: ScalarsEnums["AddOnProductType"];
  unitPrice: ScalarsEnums["Float"];
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
  weight: ScalarsEnums["Float"];
}

export interface ShopAddOnProductConnection {
  __typename?: "ShopAddOnProductConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<ShopAddOnProduct>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface ShopAddress {
  __typename?: "ShopAddress";
  city?: Maybe<ScalarsEnums["String"]>;
  country?: Maybe<ScalarsEnums["Country"]>;
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  default: ScalarsEnums["Boolean"];
  district?: Maybe<ScalarsEnums["String"]>;
  email?: Maybe<ScalarsEnums["String"]>;
  id: ScalarsEnums["ID"];
  lines?: Maybe<Array<ScalarsEnums["String"]>>;
  name?: Maybe<ScalarsEnums["String"]>;
  person?: Maybe<ScalarsEnums["String"]>;
  postalCode?: Maybe<ScalarsEnums["String"]>;
  state?: Maybe<ScalarsEnums["String"]>;
  tel?: Maybe<ScalarsEnums["String"]>;
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
}

export interface ShopAnalysisTool {
  __typename?: "ShopAnalysisTool";
  active: ScalarsEnums["Boolean"];
  context: ScalarsEnums["String"];
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  id: ScalarsEnums["ID"];
  shop: CompanyShop;
  type: ScalarsEnums["String"];
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
}

export interface ShopAnalysisToolConnection {
  __typename?: "ShopAnalysisToolConnection";
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  nodes: Array<ShopAnalysisTool>;
  totalCount: ScalarsEnums["Int"];
}

export interface ShopAppointment {
  __typename?: "ShopAppointment";
  active: ScalarsEnums["Boolean"];
  attendanceStatus: ScalarsEnums["AppointmentAttendanceStatus"];
  attendedAt?: Maybe<ScalarsEnums["AWSDateTime"]>;
  contactAddress?: Maybe<Address>;
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  customer?: Maybe<Customer>;
  id: ScalarsEnums["ID"];
  isBookable?: Maybe<ScalarsEnums["Boolean"]>;
  location?: Maybe<ShopServiceLocation>;
  metadata?: Maybe<Array<Metadata>>;
  order?: Maybe<ShopOrder>;
  orderItem?: Maybe<OrderItem>;
  referenceNo: ScalarsEnums["String"];
  relatedAppointments: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<ShopAppointmentFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ShopAppointmentConnection;
  remark?: Maybe<ScalarsEnums["String"]>;
  service: ShopService;
  serviceBundle?: Maybe<ShopServiceBundle>;
  shop: CompanyShop;
  startedAt?: Maybe<ScalarsEnums["AWSDateTime"]>;
  startedThru?: Maybe<ScalarsEnums["AWSDateTime"]>;
  status: ScalarsEnums["AppointmentStatus"];
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
}

export interface ShopAppointmentConnection {
  __typename?: "ShopAppointmentConnection";
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  nodes: Array<ShopAppointment>;
  totalCount: ScalarsEnums["Int"];
}

export interface ShopAttendance {
  __typename?: "ShopAttendance";
  company: Company;
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  direction: ScalarsEnums["AttendanceDirection"];
  id: ScalarsEnums["ID"];
  metadata?: Maybe<Array<Metadata>>;
  shop: CompanyShop;
  staff: CompanyStaff;
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
}

export interface ShopAttribute {
  __typename?: "ShopAttribute";
  active: ScalarsEnums["Boolean"];
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  id: ScalarsEnums["ID"];
  key: ScalarsEnums["String"];
  metadata?: Maybe<Array<Metadata>>;
  name: ScalarsEnums["String"];
  sortIndex: ScalarsEnums["Int"];
  system: ScalarsEnums["Boolean"];
  type: ScalarsEnums["ShopAttributeType"];
  typename: ScalarsEnums["ShopAttributeTypename"];
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
}

export interface ShopAttributeConnection {
  __typename?: "ShopAttributeConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<ShopAttribute>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface ShopAttributeValue {
  __typename?: "ShopAttributeValue";
  attributeId: ScalarsEnums["ID"];
  id: ScalarsEnums["ID"];
  key: ScalarsEnums["String"];
  type: ScalarsEnums["ShopAttributeType"];
  value: ScalarsEnums["String"];
}

export interface ShopBundleProduct {
  __typename?: "ShopBundleProduct";
  active: ScalarsEnums["Boolean"];
  ancestorCollectionCodes?: Maybe<Array<ScalarsEnums["String"]>>;
  barcode?: Maybe<ScalarsEnums["String"]>;
  collectionCodes?: Maybe<Array<ScalarsEnums["String"]>>;
  collections: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<CollectionFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => CollectionConnection;
  cost: ScalarsEnums["Float"];
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  description?: Maybe<ScalarsEnums["String"]>;
  display?: Maybe<ScalarsEnums["Boolean"]>;
  hashtags?: Maybe<Array<ScalarsEnums["String"]>>;
  id: ScalarsEnums["ID"];
  ignoreStock: ScalarsEnums["Boolean"];
  medias?: Maybe<Array<Media>>;
  metaDescription?: Maybe<ScalarsEnums["String"]>;
  metaKeywords?: Maybe<ScalarsEnums["String"]>;
  metaTitle?: Maybe<ScalarsEnums["String"]>;
  metadata: Array<Metadata>;
  name: ScalarsEnums["String"];
  primarySortIndex?: Maybe<ScalarsEnums["Int"]>;
  publishAt?: Maybe<ScalarsEnums["AWSDateTime"]>;
  publishThru?: Maybe<ScalarsEnums["AWSDateTime"]>;
  quantity: (args?: {
    warehouseId?: Maybe<ScalarsEnums["ID"]>;
  }) => ScalarsEnums["Int"];
  rewriteUri?: Maybe<ScalarsEnums["String"]>;
  salesChannels?: Maybe<Array<ScalarsEnums["SalesChannel"]>>;
  sections?: Maybe<Array<ShopBundleProductSection>>;
  shippingZones: Array<ShopShippingZone>;
  shop: CompanyShop;
  sku?: Maybe<ScalarsEnums["String"]>;
  subtitle?: Maybe<ScalarsEnums["String"]>;
  suggestedRetailPrice: ScalarsEnums["Float"];
  /**
   * the basic selling price of this bundle product
   */
  unitPrice: ScalarsEnums["Float"];
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
  weight: ScalarsEnums["Float"];
  wishItems: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
  }) => WishItemConnection;
}

export interface ShopBundleProductConnection {
  __typename?: "ShopBundleProductConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<ShopBundleProduct>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface ShopBundleProductOption {
  __typename?: "ShopBundleProductOption";
  collection?: Maybe<ShopCollection>;
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  hashtags?: Maybe<Array<ScalarsEnums["String"]>>;
  id: ScalarsEnums["ID"];
  price: ScalarsEnums["Float"];
  product?: Maybe<ShopProduct>;
  products: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<ProductFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ProductConnection;
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
}

export interface ShopBundleProductSection {
  __typename?: "ShopBundleProductSection";
  description?: Maybe<ScalarsEnums["String"]>;
  id?: Maybe<ScalarsEnums["ID"]>;
  label: ScalarsEnums["String"];
  options: Array<ShopBundleProductOption>;
}

export interface ShopCampaign {
  __typename?: "ShopCampaign";
  actionResults: Array<CampaignActionResult>;
  /**
   * @deprecated Use `actions` instead.
   */
  actionType: ScalarsEnums["CampaignActionType"];
  /**
   * @deprecated Use `actions` instead.
   */
  actionTypes: Array<ScalarsEnums["CampaignActionType"]>;
  actions: Array<CampaignAction>;
  active?: Maybe<ScalarsEnums["Boolean"]>;
  /**
   * Campaign default message content
   */
  content: ScalarsEnums["String"];
  /**
   * Optional coupon code to be applied to the campaign.
   * @deprecated Use `coupons` instead.
   */
  coupon?: Maybe<CompanyCoupon>;
  /**
   * Optional coupons code to be applied to the campaign.
   */
  coupons?: Maybe<Array<CompanyCoupon>>;
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  excludedHashtags?: Maybe<Array<ScalarsEnums["String"]>>;
  excludedMatchMode: ScalarsEnums["CampaignMatchMode"];
  id: ScalarsEnums["ID"];
  /**
   * Customers must have all the target hashtags to be included in the campaign.
   * @deprecated Use `targetMatchMode` instead.
   */
  matchMode?: Maybe<ScalarsEnums["CampaignMatchMode"]>;
  name?: Maybe<ScalarsEnums["String"]>;
  recipients: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<CampaignRecipientFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => CampaignRecipientConnection;
  result: CampaignResult;
  /**
   * @deprecated Use `actions` instead.
   */
  richContent?: Maybe<ScalarsEnums["String"]>;
  shop: CompanyShop;
  targetHashtags: Array<Maybe<ScalarsEnums["String"]>>;
  /**
   * Customer with these hashtags will be included in the campaign.
   */
  targetMatchMode: ScalarsEnums["CampaignMatchMode"];
  thumbnail?: Maybe<Media>;
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
  validAt: ScalarsEnums["AWSDateTime"];
  validThru?: Maybe<ScalarsEnums["AWSDateTime"]>;
}

export interface ShopCashFlow {
  __typename?: "ShopCashFlow";
  amount: ScalarsEnums["Float"];
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  deviceId?: Maybe<ScalarsEnums["String"]>;
  direction: ScalarsEnums["ShopCashFlowDirection"];
  id: ScalarsEnums["ID"];
  locale: ScalarsEnums["String"];
  remark?: Maybe<ScalarsEnums["String"]>;
  shop: CompanyShop;
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
}

export interface ShopCashFlowConnection {
  __typename?: "ShopCashFlowConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<ShopCashFlow>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface ShopCheckout {
  __typename?: "ShopCheckout";
  /**
   * Available add on products
   * @deprecated Use `availableAddOnProducts` instead
   */
  addOnProducts: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
  }) => ShopAddOnProductConnection;
  availableAddOnProducts: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
  }) => ShopAddOnProductConnection;
  availablePaymentMethods?: Maybe<Array<ShopCredential>>;
  availablePaymentMethodsV2?: Maybe<Array<PaymentMethod>>;
  availableShippingZones: Array<ShopShippingZone>;
  availableShippingZonesV2: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<ShopShippingZoneFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ShopShippingZoneConnection;
  billingAddress?: Maybe<Address>;
  cashVouchers: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => CheckoutCashVoucherConnection;
  /**
   * @deprecated Use `staffId` instead
   */
  cashier?: Maybe<ScalarsEnums["String"]>;
  couponDiscount: ScalarsEnums["Float"];
  coupons: Array<CheckoutCoupon>;
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  currency: ScalarsEnums["Currency"];
  customer?: Maybe<Customer>;
  deviceId?: Maybe<ScalarsEnums["String"]>;
  estimationShippingFee?: Maybe<ScalarsEnums["Float"]>;
  id: ScalarsEnums["ID"];
  internalRemark?: Maybe<ScalarsEnums["String"]>;
  internalRemarkMedias?: Maybe<Array<Media>>;
  isPreOrder?: Maybe<ScalarsEnums["Boolean"]>;
  items: (args?: {
    withDeleted?: Maybe<ScalarsEnums["Boolean"]>;
  }) => Array<CheckoutItem>;
  lastPaidTime?: Maybe<ScalarsEnums["AWSDateTime"]>;
  metadata?: Maybe<Array<Metadata>>;
  order?: Maybe<ShopOrder>;
  payment: (args: { input: CheckoutPaymentInput }) => Maybe<CheckoutPayment>;
  pickUpAddress?: Maybe<Address>;
  pickUpAddressId?: Maybe<ScalarsEnums["ID"]>;
  referenceNo?: Maybe<ScalarsEnums["String"]>;
  remark?: Maybe<ScalarsEnums["String"]>;
  remarkMedias?: Maybe<Array<Media>>;
  salesperson?: Maybe<CompanyStaff>;
  salespersonId?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Selected add on products
   */
  selectedAddOnProducts: Array<ShopAddOnProduct>;
  shippingAddress?: Maybe<Address>;
  shippingFee: ScalarsEnums["Float"];
  shippingProvider?: Maybe<ShopShippingProvider>;
  shop: CompanyShop;
  shopDiscount: ScalarsEnums["Float"];
  staff?: Maybe<CompanyStaff>;
  staffId?: Maybe<ScalarsEnums["ID"]>;
  status: ScalarsEnums["CheckoutStatus"];
  subtotal: ScalarsEnums["Float"];
  table?: Maybe<ShopTable>;
  taxFee: ScalarsEnums["Float"];
  total?: Maybe<ScalarsEnums["Float"]>;
  totalAdjustments: Array<CheckoutAdjustment>;
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
}

export interface ShopCheckoutConnection {
  __typename?: "ShopCheckoutConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<ShopCheckout>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface ShopCollection {
  __typename?: "ShopCollection";
  active: ScalarsEnums["Boolean"];
  allChildren: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<CollectionFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => CollectionConnection;
  /**
   * @deprecated Use `descendentProducts` instead.
   */
  allProducts: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<ProductFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ProductConnection;
  bundleProducts: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<BundleProductFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ShopBundleProductConnection;
  children: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<CollectionFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => CollectionConnection;
  /**
   * Common code for the collection to be addressed by products and discounts.
   */
  code: ScalarsEnums["String"];
  collectionPaths?: Maybe<ScalarsEnums["String"]>;
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  dailyAvailability?: Maybe<DailyAvailability>;
  descendentProductUnions: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<ProductUnionFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ProductUnionConnection;
  /**
   * Products of this collection and all its descendent collections.
   */
  descendentProducts: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<ProductFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ProductConnection;
  description?: Maybe<ScalarsEnums["String"]>;
  id: ScalarsEnums["ID"];
  media?: Maybe<Media>;
  metaDescription?: Maybe<ScalarsEnums["String"]>;
  metaKeywords?: Maybe<ScalarsEnums["String"]>;
  metaTitle?: Maybe<ScalarsEnums["String"]>;
  name: ScalarsEnums["String"];
  parent?: Maybe<ShopCollection>;
  parentId?: Maybe<ScalarsEnums["String"]>;
  parentIds?: Maybe<ScalarsEnums["String"]>;
  parents?: Maybe<Array<ShopCollection>>;
  productUnions: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<ProductUnionFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ProductUnionConnection;
  /**
   * Immediate child products of this collection.
   */
  products: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<ProductFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ProductConnection;
  publishAt?: Maybe<ScalarsEnums["AWSDateTime"]>;
  publishThru?: Maybe<ScalarsEnums["AWSDateTime"]>;
  rewriteUri?: Maybe<ScalarsEnums["String"]>;
  serviceBundles: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<ServiceBundleFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ShopServiceBundleConnection;
  shop: CompanyShop;
  sortIndex: ScalarsEnums["Int"];
  thumbnail?: Maybe<ScalarsEnums["AWSURL"]>;
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
}

export interface ShopConnection {
  __typename?: "ShopConnection";
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  nodes: Array<CompanyShop>;
  totalCount: ScalarsEnums["Int"];
}

export interface ShopContactEmail {
  __typename?: "ShopContactEmail";
  active: ScalarsEnums["Boolean"];
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  email: ScalarsEnums["String"];
  id: ScalarsEnums["ID"];
  type: ScalarsEnums["ShopContactEmailType"];
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
  verified: ScalarsEnums["Boolean"];
}

export interface ShopContactEmailConnection {
  __typename?: "ShopContactEmailConnection";
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  nodes: Array<ShopContactEmail>;
  totalCount: ScalarsEnums["Int"];
}

export interface ShopCredential {
  __typename?: "ShopCredential";
  active: ScalarsEnums["Boolean"];
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  description?: Maybe<ScalarsEnums["String"]>;
  id: ScalarsEnums["ID"];
  identity: ScalarsEnums["String"];
  /**
   * @deprecated Use metadata instead
   */
  meta?: Maybe<ShopCredentialMeta>;
  metadata?: Maybe<Array<Metadata>>;
  name?: Maybe<ScalarsEnums["String"]>;
  paymentMethods: Array<PaymentMethod>;
  platform: ScalarsEnums["ShopCredentialPlatform"];
  secret?: Maybe<ScalarsEnums["String"]>;
  shop: CompanyShop;
  type?: Maybe<ScalarsEnums["ShopCredentialType"]>;
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
}

export interface ShopCredentialMeta {
  __typename?: "ShopCredentialMeta";
  /**
   * @deprecated Use metadata instead
   */
  capabilitiesStatusActive?: Maybe<ScalarsEnums["Boolean"]>;
  /**
   * @deprecated Use metadata instead
   */
  loginId?: Maybe<ScalarsEnums["String"]>;
  /**
   * @deprecated Use metadata instead
   */
  loginPWD?: Maybe<ScalarsEnums["String"]>;
}

export interface ShopDevice {
  __typename?: "ShopDevice";
  active: ScalarsEnums["Boolean"];
  cashFlows: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ShopCashFlowConnection;
  configs?: Maybe<ScalarsEnums["AWSJSON"]>;
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  defaultConfigs?: Maybe<ScalarsEnums["AWSJSON"]>;
  description?: Maybe<ScalarsEnums["String"]>;
  deviceId: ScalarsEnums["String"];
  id: ScalarsEnums["ID"];
  lastLogin?: Maybe<ScalarsEnums["AWSDateTime"]>;
  metadata?: Maybe<Array<Metadata>>;
  metrics: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ShopDeviceMetricConnection;
  name: ScalarsEnums["String"];
  shop?: Maybe<CompanyShop>;
  status: ScalarsEnums["ShopDeviceStatus"];
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
}

export interface ShopDeviceConnection {
  __typename?: "ShopDeviceConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<ShopDevice>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface ShopDeviceMetric {
  __typename?: "ShopDeviceMetric";
  createdAt: ScalarsEnums["AWSDateTime"];
  id: ScalarsEnums["ID"];
  metadata: Array<Metadata>;
}

export interface ShopDeviceMetricConnection {
  __typename?: "ShopDeviceMetricConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<ShopDeviceMetric>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface ShopEmailTemplate {
  __typename?: "ShopEmailTemplate";
  active: ScalarsEnums["Boolean"];
  configs?: Maybe<ScalarsEnums["AWSJSON"]>;
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  id: ScalarsEnums["ID"];
  isDefault: ScalarsEnums["Boolean"];
  metadata?: Maybe<Array<Metadata>>;
  name: ScalarsEnums["String"];
  shop: CompanyShop;
  type: ScalarsEnums["ShopEmailTemplateType"];
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
}

export interface ShopEmailTemplateConnection {
  __typename?: "ShopEmailTemplateConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<ShopEmailTemplate>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface ShopForm {
  __typename?: "ShopForm";
  active: ScalarsEnums["Boolean"];
  autoApprove: ScalarsEnums["Boolean"];
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  id: ScalarsEnums["ID"];
  metadata?: Maybe<Array<Metadata>>;
  metadataFields: Array<CompanyMemberMetadataField>;
  name: ScalarsEnums["String"];
  records: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<ShopFormRecordFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ShopFormRecordConnection;
  shop: CompanyShop;
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
  validAt?: Maybe<ScalarsEnums["AWSDateTime"]>;
  validThru?: Maybe<ScalarsEnums["AWSDateTime"]>;
}

export interface ShopFormConnection {
  __typename?: "ShopFormConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<ShopForm>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface ShopFormRecord {
  __typename?: "ShopFormRecord";
  active: ScalarsEnums["Boolean"];
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  customer?: Maybe<Customer>;
  form?: Maybe<ShopForm>;
  id: ScalarsEnums["ID"];
  metadata: Array<Metadata>;
  status: ScalarsEnums["ShopFormRecordStatus"];
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
}

export interface ShopFormRecordConnection {
  __typename?: "ShopFormRecordConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<ShopFormRecord>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface ShopMarquee {
  __typename?: "ShopMarquee";
  active: ScalarsEnums["Boolean"];
  backgroundColor?: Maybe<ScalarsEnums["String"]>;
  closable?: Maybe<ScalarsEnums["Boolean"]>;
  content?: Maybe<ScalarsEnums["String"]>;
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  id: ScalarsEnums["ID"];
  path?: Maybe<ScalarsEnums["String"]>;
  positionBottom?: Maybe<ScalarsEnums["String"]>;
  positionTop?: Maybe<ScalarsEnums["String"]>;
  shopId: ScalarsEnums["ID"];
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
}

export interface ShopMarqueeConnection {
  __typename?: "ShopMarqueeConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<ShopMarquee>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface ShopNavigationTemplate {
  __typename?: "ShopNavigationTemplate";
  active: ScalarsEnums["Boolean"];
  configs?: Maybe<ScalarsEnums["AWSJSON"]>;
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  id: ScalarsEnums["ID"];
  metadata?: Maybe<Array<Metadata>>;
  name: ScalarsEnums["String"];
  shop: CompanyShop;
  type: ScalarsEnums["NavigationTemplateType"];
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
}

export interface ShopNavigationTemplateConnection {
  __typename?: "ShopNavigationTemplateConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<ShopNavigationTemplate>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface ShopOrder {
  __typename?: "ShopOrder";
  activities: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
  }) => Maybe<OrderActivityConnection>;
  appointments: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<ShopAppointmentFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ShopAppointmentConnection;
  billingAddress?: Maybe<Address>;
  cancelReason?: Maybe<ScalarsEnums["String"]>;
  channel?: Maybe<Channel>;
  checkout: ShopCheckout;
  checkoutId?: Maybe<ScalarsEnums["ID"]>;
  comments: Array<OrderComment>;
  company: Company;
  couponDiscount: ScalarsEnums["Float"];
  coupons: Array<CompanyCoupon>;
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  creditNotes: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<CreditNoteFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => CreditNoteConnection;
  currency: ScalarsEnums["String"];
  customer?: Maybe<Customer>;
  deductibleMemberPoints: ScalarsEnums["Int"];
  deliveryNotes: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<DeliveryNotesFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => DeliveryNoteConnection;
  deviceId?: Maybe<ScalarsEnums["String"]>;
  gainMemberPoints?: Maybe<ScalarsEnums["Int"]>;
  id: ScalarsEnums["ID"];
  internalRemark?: Maybe<ScalarsEnums["String"]>;
  internalRemarkMedias?: Maybe<Array<Media>>;
  invoices: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<InvoiceFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => InvoiceConnection;
  isPreOrder?: Maybe<ScalarsEnums["Boolean"]>;
  items: Array<OrderItem>;
  itemsV2: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<OrderItemFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => OrderItemConnection;
  kitchenStatus: ScalarsEnums["ShopOrderKitchenStatus"];
  memberPointDiscount: ScalarsEnums["Float"];
  memberPoints: ScalarsEnums["Float"];
  metadata?: Maybe<Array<Metadata>>;
  paymentProvider?: Maybe<ScalarsEnums["PaymentProvider"]>;
  paymentStatus: ScalarsEnums["ShopOrderInvoiceStatus"];
  pickUpAddress?: Maybe<Address>;
  referenceNo: ScalarsEnums["String"];
  remark?: Maybe<ScalarsEnums["String"]>;
  remarkMedias?: Maybe<Array<Media>>;
  returnNoteItems: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<ReturnNoteItemFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ReturnNoteItemConnection;
  /**
   * @deprecated Use `deductibleMemberPoints` instead
   */
  rewardedMemberPoints: ScalarsEnums["Int"];
  salesperson?: Maybe<CompanyStaff>;
  shippingAddress?: Maybe<Address>;
  shippingFee: ScalarsEnums["Float"];
  shippingProvider?: Maybe<ShopShippingProvider>;
  shippingStatus: ScalarsEnums["ShopOrderDeliveryNoteStatus"];
  shop: CompanyShop;
  shopDiscount: ScalarsEnums["Float"];
  staff?: Maybe<CompanyStaff>;
  status: ScalarsEnums["ShopOrderStatus"];
  subtotal: ScalarsEnums["Float"];
  taxFee: ScalarsEnums["Float"];
  total: ScalarsEnums["Float"];
  totalAdjustments: Array<OrderAdjustment>;
  totalPaid: ScalarsEnums["Float"];
  totalRefund: ScalarsEnums["Float"];
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
}

export interface ShopPage {
  __typename?: "ShopPage";
  active: ScalarsEnums["Boolean"];
  /**
   * @deprecated Frontend is not used.
   */
  atFooter?: Maybe<ScalarsEnums["Boolean"]>;
  /**
   * @deprecated Frontend is not used.
   */
  atHeader?: Maybe<ScalarsEnums["Boolean"]>;
  /**
   * @deprecated Frontend is not used.
   */
  atMenu?: Maybe<ScalarsEnums["Boolean"]>;
  body?: Maybe<ScalarsEnums["String"]>;
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  display: ScalarsEnums["Boolean"];
  /**
   * @deprecated Frontend is not used.
   */
  group?: Maybe<ScalarsEnums["String"]>;
  hashtags?: Maybe<Array<ScalarsEnums["String"]>>;
  href: ScalarsEnums["String"];
  id: ScalarsEnums["ID"];
  metaDescription?: Maybe<ScalarsEnums["String"]>;
  metaKeywords?: Maybe<ScalarsEnums["String"]>;
  metaTitle?: Maybe<ScalarsEnums["String"]>;
  name: ScalarsEnums["String"];
  rewriteUri?: Maybe<ScalarsEnums["String"]>;
  shop: CompanyShop;
  sortIndex?: Maybe<ScalarsEnums["Int"]>;
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
}

export interface ShopPopup {
  __typename?: "ShopPopup";
  active: ScalarsEnums["Boolean"];
  content?: Maybe<ScalarsEnums["String"]>;
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  href?: Maybe<ScalarsEnums["String"]>;
  id: ScalarsEnums["ID"];
  path?: Maybe<ScalarsEnums["String"]>;
  shopId: ScalarsEnums["ID"];
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
  validAt: ScalarsEnums["AWSDateTime"];
  validThru?: Maybe<ScalarsEnums["AWSDateTime"]>;
}

export interface ShopPopupConnection {
  __typename?: "ShopPopupConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<ShopPopup>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface ShopProduct {
  __typename?: "ShopProduct";
  active: ScalarsEnums["Boolean"];
  ancestorCollectionCodes?: Maybe<Array<ScalarsEnums["String"]>>;
  attributes: (args?: {
    keys?: Maybe<Array<ScalarsEnums["String"]>>;
  }) => Maybe<Array<ShopAttributeValue>>;
  barcode?: Maybe<ScalarsEnums["String"]>;
  barcodes?: Maybe<Array<ScalarsEnums["String"]>>;
  basePrice: ScalarsEnums["Float"];
  bundleProducts: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ShopBundleProductConnection;
  collectionCodes?: Maybe<Array<ScalarsEnums["String"]>>;
  /**
   * @deprecated for internal use only
   */
  collectionPaths?: Maybe<Array<ScalarsEnums["String"]>>;
  collections: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<CollectionFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => CollectionConnection;
  combinations: Array<ProductCombination>;
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  description?: Maybe<ScalarsEnums["String"]>;
  details?: Maybe<Array<ProductDetail>>;
  display?: Maybe<ScalarsEnums["Boolean"]>;
  /**
   * @deprecated Superseded by `publishAt` and `publishThru`.
   */
  hasPublishDuration?: Maybe<ScalarsEnums["Boolean"]>;
  /**
   * @deprecated Change to hashtags
   */
  hashTagsArray?: Maybe<Array<ScalarsEnums["String"]>>;
  hashtags?: Maybe<Array<ScalarsEnums["String"]>>;
  id: ScalarsEnums["ID"];
  /**
   * @deprecated No longer supported
   */
  images?: Maybe<Array<ScalarsEnums["AWSURL"]>>;
  maxPrice: ScalarsEnums["Float"];
  medias?: Maybe<Array<Media>>;
  metaDescription?: Maybe<ScalarsEnums["String"]>;
  metaKeywords?: Maybe<ScalarsEnums["String"]>;
  metaTitle?: Maybe<ScalarsEnums["String"]>;
  metadata?: Maybe<Array<Metadata>>;
  metadataFields?: Maybe<Array<CompanyMemberMetadataField>>;
  modifierValues?: Maybe<Array<ProductModifierValue>>;
  /**
   * POS remark options
   */
  modifiers: Array<ProductModifier>;
  name: ScalarsEnums["String"];
  paginatedVariations: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => VariationConnection;
  primarySortIndex?: Maybe<ScalarsEnums["Int"]>;
  printDescription?: Maybe<ScalarsEnums["String"]>;
  publishAt?: Maybe<ScalarsEnums["AWSDateTime"]>;
  publishThru?: Maybe<ScalarsEnums["AWSDateTime"]>;
  /**
   * @deprecated unused field
   */
  purchaseLimit?: Maybe<ScalarsEnums["Float"]>;
  /**
   * @deprecated Change to modifiers
   */
  remarkSet?: Maybe<ScalarsEnums["String"]>;
  rewriteUri?: Maybe<ScalarsEnums["String"]>;
  salesChannels?: Maybe<Array<ScalarsEnums["SalesChannel"]>>;
  shippingZones?: Maybe<Array<ShopShippingZone>>;
  shop: CompanyShop;
  sku?: Maybe<ScalarsEnums["String"]>;
  stockMovements: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<StockMovementFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => StockMovementConnection;
  subtitle?: Maybe<ScalarsEnums["String"]>;
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
  variations: Array<ProductVariation>;
  wishItems: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
  }) => WishItemConnection;
}

export interface ShopProductModifier {
  __typename?: "ShopProductModifier";
  active: ScalarsEnums["Boolean"];
  code: ScalarsEnums["String"];
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  id: ScalarsEnums["ID"];
  metadata?: Maybe<Array<Metadata>>;
  metadataFields?: Maybe<Array<CompanyMemberMetadataField>>;
  modifiers: Array<ProductModifier>;
  name: ScalarsEnums["String"];
  productCount: ScalarsEnums["Int"];
  products: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<ProductFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ProductConnection;
  shop: CompanyShop;
  sortIndex: ScalarsEnums["Int"];
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
}

export interface ShopProductModifierConnection {
  __typename?: "ShopProductModifierConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<ShopProductModifier>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface ShopReceiptTemplate {
  __typename?: "ShopReceiptTemplate";
  active: ScalarsEnums["Boolean"];
  configs?: Maybe<ScalarsEnums["AWSJSON"]>;
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  id: ScalarsEnums["ID"];
  metadata?: Maybe<Array<Metadata>>;
  name: ScalarsEnums["String"];
  shop: CompanyShop;
  type: ScalarsEnums["ReceiptTemplateType"];
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
}

export interface ShopReceiptTemplateConnection {
  __typename?: "ShopReceiptTemplateConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<ShopReceiptTemplate>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface ShopReferenceNoFormat {
  __typename?: "ShopReferenceNoFormat";
  active: ScalarsEnums["Boolean"];
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  id: ScalarsEnums["ID"];
  length: ScalarsEnums["Int"];
  prefix: ScalarsEnums["String"];
  shopId: ScalarsEnums["String"];
  type: ScalarsEnums["ShopReferenceNoFormatType"];
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
}

export interface ShopReferenceNoFormatConnection {
  __typename?: "ShopReferenceNoFormatConnection";
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  nodes: Array<ShopReferenceNoFormat>;
  totalCount: ScalarsEnums["Int"];
}

export interface ShopReport {
  __typename?: "ShopReport";
  /**
   * @deprecated Change to turnover.
   */
  amount: ScalarsEnums["Float"];
  /**
   * 類別分析明細
   * @deprecated Use CompanyReport.collectionSales instead
   */
  collectionSales: (args: {
    id: ScalarsEnums["ID"];
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => CollectionSales;
  /**
   * @deprecated Change to volume.
   */
  count: ScalarsEnums["Float"];
  /**
   * 優惠券分析明細
   * @deprecated Use CompanyReport.couponSales instead
   */
  couponSales: (args: {
    id: ScalarsEnums["ID"];
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => CouponSales;
  /**
   * 會員總消費
   */
  customerSales: (args: {
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => Sales;
  /**
   * 折扣分析明細
   * @deprecated Use CompanyReport.discountSales instead
   */
  discountSales: (args: {
    id: ScalarsEnums["ID"];
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => DiscountSales;
  /**
   * 會員級別分析明細
   * @deprecated Use CompanyReport.memberTierSales instead
   */
  memberTierSales: (args: {
    id: ScalarsEnums["ID"];
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => MemberTierSales;
  /**
   * 新客總消費
   */
  newCustomerSales: (args: {
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => Sales;
  /**
   * 非會員總消費
   */
  nonCustomerSales: (args: {
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => Sales;
  /**
   * 舊客總消費
   */
  oldCustomerSales: (args: {
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => Sales;
  otherDiscounts: (args: {
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => Array<OtherDiscount>;
  pageViews: (args: {
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => Array<PageViewsData>;
  /**
   * 待處理訂單
   */
  pendingOrderCount: (args: {
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => ScalarsEnums["Float"];
  /**
   * 產品分析明細
   * @deprecated Use CompanyReport.productSales instead
   */
  productSales: (args: {
    id: ScalarsEnums["ID"];
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => ProductSales;
  /**
   * 推廣碼分析明細
   * @deprecated Use CompanyReport.promotionCodeSales instead
   */
  promotionCodeSales: (args: {
    id: ScalarsEnums["ID"];
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => CouponSales;
  refund: (args: {
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => ScalarsEnums["Float"];
  refundByMethods: (args: {
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => Array<SalesByMethods>;
  salesByMethods: (args: {
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => Array<SalesByMethods>;
  salesByOrderItems: (args: {
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => Array<SalesByMethods>;
  /**
   * @deprecated Use CompanyReport.topCollectionSales instead
   */
  topCollectionSales: (args: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => CollectionSalesConnection;
  /**
   * @deprecated Use CompanyReport.topCouponSales instead
   */
  topCouponSales: (args: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => CouponSalesConnection;
  /**
   * @deprecated Use CompanyReport.topDiscountSales instead
   */
  topDiscountSales: (args: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => DiscountSalesConnection;
  /**
   * @deprecated Use CompanyReport.topMemberTierSales instead
   */
  topMemberTierSales: (args: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => MemberTierSalesConnection;
  /**
   * @deprecated Use CompanyReport.topProductSales instead
   */
  topProductSales: (args: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => ProductSalesConnection;
  /**
   * @deprecated Use CompanyReport.topPromotionCodeSales instead
   */
  topPromotionCodeSales: (args: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => CouponSalesConnection;
  /**
   * 產品銷售分析
   */
  topSalesProducts: (args: {
    limits?: Maybe<ScalarsEnums["Int"]>;
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => Array<TopSalesProduct>;
  /**
   * 產品銷售分析
   */
  topSalesVariations: (args: {
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => Array<TopSalesVariations>;
  /**
   * 產品瀏覽分析
   */
  topViewProducts: (args: {
    limits?: Maybe<ScalarsEnums["Int"]>;
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => Array<PageViewsData>;
  /**
   * 所有類別數據
   * @deprecated Use CompanyReport.totalCollectionSales instead
   */
  totalCollectionSales: (args: {
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => TotalCollectionSales;
  /**
   * 所有優惠券數據
   * @deprecated Use CompanyReport.totalCouponSales instead
   */
  totalCouponSales: (args: {
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => TotalCouponSales;
  /**
   * 所有折扣數據
   * @deprecated Use CompanyReport.totalDiscountSales instead
   */
  totalDiscountSales: (args: {
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => TotalDiscountSales;
  /**
   * 所有產品銷售分析
   */
  totalItemSales: (args: {
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => TotalItemSales;
  /**
   * 所有會員級別數據
   * @deprecated Use CompanyReport.totalMemberTierSales instead
   */
  totalMemberTierSales: (args: {
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => TotalMemberTierSales;
  /**
   * 所有產品數據
   * @deprecated Use CompanyReport.totalProductSales instead
   */
  totalProductSales: (args: {
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => TotalProductSales;
  /**
   * 所有推廣碼數據
   * @deprecated Use CompanyReport.totalPromotionCodeSales instead
   */
  totalPromotionCodeSales: (args: {
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => TotalCouponSales;
  /**
   * 成交額
   */
  turnover: (args: {
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => ScalarsEnums["Float"];
  /**
   * 未付款訂單
   */
  unpaidOrderAmount: (args: {
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => ScalarsEnums["Float"];
  unpaidOrderCount: (args: {
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => ScalarsEnums["Int"];
  /**
   * 客戶年齡分析
   */
  userAge: (args: {
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => Array<PageViewsData>;
  /**
   * 客戶地域分析
   */
  userCountry: (args: {
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => Array<PageViewsData>;
  /**
   * 客戶性別分析
   */
  userGender: (args: {
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => Array<PageViewsData>;
  /**
   * 成交量
   */
  volume: (args: {
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => ScalarsEnums["Int"];
}

export interface ShopReturnNote {
  __typename?: "ShopReturnNote";
  active: ScalarsEnums["Boolean"];
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  id: ScalarsEnums["ID"];
  items: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<ReturnNoteItemFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ReturnNoteItemConnection;
  metadata?: Maybe<Array<Metadata>>;
  order: ShopOrder;
  referenceNo: ScalarsEnums["String"];
  remark?: Maybe<ScalarsEnums["String"]>;
  shop: CompanyShop;
  status: ScalarsEnums["ReturnNoteStatus"];
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
  warehouse: CompanyWarehouse;
}

export interface ShopReturnNoteConnection {
  __typename?: "ShopReturnNoteConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<ShopReturnNote>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface ShopSales {
  __typename?: "ShopSales";
  /**
   * 銷售額(折扣後)
   */
  amount: ScalarsEnums["Float"];
  /**
   * 平均購買數量 = 賣出數量 / 訂單
   */
  avgCount: ScalarsEnums["Float"];
  /**
   * 平均單價 = 銷售額 / 訂單
   */
  avgPrice: ScalarsEnums["Float"];
  /**
   * 賣出數量
   */
  count: ScalarsEnums["Int"];
  id: ScalarsEnums["ID"];
  /**
   * 會員銷售額
   */
  memberAmount: ScalarsEnums["Float"];
  /**
   * 非會員銷售額
   */
  nonMemberAmount: ScalarsEnums["Float"];
  /**
   * 訂單
   */
  orderCount: ScalarsEnums["Int"];
}

export interface ShopSalesConnection {
  __typename?: "ShopSalesConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<ShopSales>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface ShopService {
  __typename?: "ShopService";
  active: ScalarsEnums["Boolean"];
  appointments: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<ShopAppointmentFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ShopAppointmentConnection;
  autoConfirm: ScalarsEnums["Boolean"];
  availableServiceLocationDistricts?: Maybe<Array<ScalarsEnums["String"]>>;
  /**
   * e.g. 最小30mins或之前預約
   */
  availableUntil?: Maybe<Duration>;
  code: ScalarsEnums["String"];
  company: Company;
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  /**
   * ['0','1','2','3','4','5','6'] 0=Sunday, 1=Monday.
   */
  daysOfWeek?: Maybe<Array<ScalarsEnums["String"]>>;
  description?: Maybe<ScalarsEnums["String"]>;
  durationMins: ScalarsEnums["Int"];
  id: ScalarsEnums["ID"];
  intervalMins: ScalarsEnums["Int"];
  medias?: Maybe<Array<Media>>;
  metadata?: Maybe<Array<Metadata>>;
  name: ScalarsEnums["String"];
  outboundSkus?: Maybe<Array<ScalarsEnums["String"]>>;
  productVariations?: Maybe<Array<ProductVariation>>;
  reserveMins: ScalarsEnums["Int"];
  serviceBundle: ShopServiceBundle;
  /**
   * 項目名稱, e.g. 地點, 服務
   */
  serviceLocationName?: Maybe<ScalarsEnums["String"]>;
  serviceLocations: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<ServiceLocationFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ShopServiceLocationConnection;
  shop: CompanyShop;
  showStartTimeOnly?: Maybe<ScalarsEnums["Boolean"]>;
  slots: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    isAvailable?: Maybe<ScalarsEnums["Boolean"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    modifiers?: Maybe<Array<CheckoutItemModifierInput>>;
    serviceLocationId?: Maybe<Array<ScalarsEnums["ID"]>>;
    startedAt?: Maybe<ScalarsEnums["AWSDateTime"]>;
    startedThru?: Maybe<ScalarsEnums["AWSDateTime"]>;
  }) => ServiceSlotConnection;
  sortIndex: ScalarsEnums["Int"];
  startedAt: ScalarsEnums["AWSDateTime"];
  startedThru: ScalarsEnums["AWSDateTime"];
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
  /**
   * 生效日期
   */
  validSince?: Maybe<Duration>;
  /**
   * 有效期至
   */
  validUntil?: Maybe<Duration>;
}

export interface ShopServiceBundle {
  __typename?: "ShopServiceBundle";
  active: ScalarsEnums["Boolean"];
  barcode?: Maybe<ScalarsEnums["String"]>;
  collections: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<CollectionFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => CollectionConnection;
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  description?: Maybe<ScalarsEnums["String"]>;
  hashtags?: Maybe<Array<ScalarsEnums["String"]>>;
  id: ScalarsEnums["ID"];
  ignoreStock: ScalarsEnums["Boolean"];
  medias?: Maybe<Array<Media>>;
  metaDescription?: Maybe<ScalarsEnums["String"]>;
  metaKeywords?: Maybe<ScalarsEnums["String"]>;
  metaTitle?: Maybe<ScalarsEnums["String"]>;
  metadata?: Maybe<Array<Metadata>>;
  metadataFields?: Maybe<Array<CompanyMemberMetadataField>>;
  modifiers?: Maybe<Array<ServiceBundleModifier>>;
  name: ScalarsEnums["String"];
  primarySortIndex?: Maybe<ScalarsEnums["Int"]>;
  publishAt?: Maybe<ScalarsEnums["AWSDateTime"]>;
  publishThru?: Maybe<ScalarsEnums["AWSDateTime"]>;
  quantity: (args?: {
    warehouseId?: Maybe<ScalarsEnums["ID"]>;
  }) => ScalarsEnums["Int"];
  rewriteUri?: Maybe<ScalarsEnums["String"]>;
  serviceLocations: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<ServiceLocationFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ShopServiceLocationConnection;
  services: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<ServiceFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ShopServiceConnection;
  shop: CompanyShop;
  sku?: Maybe<ScalarsEnums["String"]>;
  slotRequiredAtCheckout: ScalarsEnums["Boolean"];
  subtitle?: Maybe<ScalarsEnums["String"]>;
  suggestedRetailPrice: ScalarsEnums["Float"];
  unitPrice: ScalarsEnums["Float"];
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
  validationStrategy: ScalarsEnums["ServiceValidationStrategy"];
}

export interface ShopServiceBundleConnection {
  __typename?: "ShopServiceBundleConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<ShopServiceBundle>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface ShopServiceConnection {
  __typename?: "ShopServiceConnection";
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  nodes: Array<ShopService>;
  totalCount: ScalarsEnums["Int"];
}

export interface ShopServiceLocation {
  __typename?: "ShopServiceLocation";
  address?: Maybe<Address>;
  appointments: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<ShopAppointmentFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ShopAppointmentConnection;
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  id: ScalarsEnums["ID"];
  medias?: Maybe<Array<Media>>;
  metadata?: Maybe<Array<Metadata>>;
  name: ScalarsEnums["String"];
  rules: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<ServiceLocationRuleFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ServiceLocationRuleConnection;
  serviceBundles: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<ServiceBundleFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ShopServiceConnection;
  services: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<ServiceFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ShopServiceConnection;
  shop: CompanyShop;
  slots: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    startedAt?: Maybe<ScalarsEnums["AWSDateTime"]>;
    startedThru?: Maybe<ScalarsEnums["AWSDateTime"]>;
  }) => ServiceLocationSlotConnection;
  sortIndex: ScalarsEnums["Int"];
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
}

export interface ShopServiceLocationConnection {
  __typename?: "ShopServiceLocationConnection";
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  nodes: Array<ShopServiceLocation>;
  totalCount: ScalarsEnums["Int"];
}

export interface ShopShippingProvider {
  __typename?: "ShopShippingProvider";
  active?: Maybe<ScalarsEnums["Boolean"]>;
  addresses?: Maybe<Array<ShippingZoneAddress>>;
  addressesV2: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<ShippingZoneAddressFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ShippingZoneAddressConnection;
  countries?: Maybe<Array<ScalarsEnums["Country"]>>;
  createdAt?: Maybe<ScalarsEnums["AWSDateTime"]>;
  createdBy?: Maybe<User>;
  expressions?: Maybe<Array<ShippingZoneExpressions>>;
  id?: Maybe<ScalarsEnums["ID"]>;
  metadata?: Maybe<Array<Metadata>>;
  name?: Maybe<ScalarsEnums["String"]>;
  provider?: Maybe<ScalarsEnums["ShippingZoneProvider"]>;
  shop?: Maybe<CompanyShop>;
  sortIndex?: Maybe<ScalarsEnums["Int"]>;
  updatedAt?: Maybe<ScalarsEnums["AWSDateTime"]>;
  updatedBy?: Maybe<User>;
}

/**
 * A shipping zone setting, pairing up countries and shipping methods (providers).
 */
export interface ShopShippingZone {
  __typename?: "ShopShippingZone";
  active: ScalarsEnums["Boolean"];
  addresses?: Maybe<Array<ShippingZoneAddress>>;
  addressesV2: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<ShippingZoneAddressFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ShippingZoneAddressConnection;
  countries: Array<ScalarsEnums["Country"]>;
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  expressions: Array<ShippingZoneExpressions>;
  id: ScalarsEnums["ID"];
  metadata?: Maybe<Array<Metadata>>;
  name: ScalarsEnums["String"];
  provider: ScalarsEnums["ShippingZoneProvider"];
  shop: CompanyShop;
  sortIndex: ScalarsEnums["Int"];
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
}

export interface ShopShippingZoneConnection {
  __typename?: "ShopShippingZoneConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<ShopShippingZone>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface ShopSitemap {
  __typename?: "ShopSitemap";
  active: ScalarsEnums["Boolean"];
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  id: ScalarsEnums["ID"];
  name: ScalarsEnums["String"];
  shop: CompanyShop;
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
  url: ScalarsEnums["String"];
}

export interface ShopSitemapConnection {
  __typename?: "ShopSitemapConnection";
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  nodes: Array<ShopSitemap>;
  totalCount: ScalarsEnums["Int"];
}

export interface ShopTable {
  __typename?: "ShopTable";
  checkouts: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ShopCheckoutConnection;
  /**
   * CIRCLE: [ x, y, radius ]
   *  POLYGON: [ x1, y1, x2, y2, x3, y3, ... ]
   */
  color?: Maybe<ScalarsEnums["String"]>;
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  /**
   * @deprecated Use `venue` instead
   */
  group?: Maybe<ScalarsEnums["String"]>;
  id: ScalarsEnums["ID"];
  /**
   * @deprecated Use `metadata` instead
   */
  meta?: Maybe<ScalarsEnums["String"]>;
  metadata?: Maybe<Array<Metadata>>;
  name: ScalarsEnums["String"];
  shape?: Maybe<ScalarsEnums["TableShape"]>;
  shapeData?: Maybe<Array<ScalarsEnums["Int"]>>;
  shop: CompanyShop;
  sortIndex: ScalarsEnums["Int"];
  status: ScalarsEnums["TableStatus"];
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
  venue: ShopVenue;
}

export interface ShopTableConnection {
  __typename?: "ShopTableConnection";
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  nodes: Array<ShopTable>;
  totalCount: ScalarsEnums["Int"];
}

export interface ShopTaxZone {
  __typename?: "ShopTaxZone";
  countries: Array<ScalarsEnums["Country"]>;
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  id: ScalarsEnums["ID"];
  shop: CompanyShop;
  taxRate: ScalarsEnums["Float"];
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
}

export interface ShopTaxZoneConnection {
  __typename?: "ShopTaxZoneConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<ShopTaxZone>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface ShopVenue {
  __typename?: "ShopVenue";
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  id: ScalarsEnums["ID"];
  media?: Maybe<Media>;
  metadata?: Maybe<Array<Metadata>>;
  name: ScalarsEnums["String"];
  shop: CompanyShop;
  sortIndex: ScalarsEnums["Int"];
  tables: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<TableFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ShopTableConnection;
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
}

export interface ShopVenueConnection {
  __typename?: "ShopVenueConnection";
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  nodes: Array<ShopVenue>;
  totalCount: ScalarsEnums["Int"];
}

export interface StockAdjustmentItem {
  __typename?: "StockAdjustmentItem";
  cost: ScalarsEnums["Float"];
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  id: ScalarsEnums["ID"];
  productVariation?: Maybe<ProductVariation>;
  quantity: ScalarsEnums["Int"];
  sku: ScalarsEnums["String"];
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
}

export interface StockAdjustmentItemConnection {
  __typename?: "StockAdjustmentItemConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<StockAdjustmentItem>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface StockMovement {
  __typename?: "StockMovement";
  active: ScalarsEnums["Boolean"];
  combination?: Maybe<ScalarsEnums["String"]>;
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  direction: ScalarsEnums["StockMovementDirection"];
  id: ScalarsEnums["ID"];
  quantity: ScalarsEnums["Int"];
  /**
   * typename#{id}, e.g. ShopCheckouts#UUID
   */
  reference?: Maybe<ScalarsEnums["String"]>;
  referenceSourceNo?: Maybe<ScalarsEnums["String"]>;
  sku: ScalarsEnums["String"];
  status: ScalarsEnums["StockMovementStatus"];
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
}

export interface StockMovementConnection {
  __typename?: "StockMovementConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<StockMovement>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface StockTransferItem {
  __typename?: "StockTransferItem";
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  id: ScalarsEnums["ID"];
  metadata?: Maybe<Array<Metadata>>;
  productVariation?: Maybe<ProductVariation>;
  quantity: ScalarsEnums["Int"];
  receivedQuantity: ScalarsEnums["Int"];
  remark?: Maybe<ScalarsEnums["String"]>;
  sku: ScalarsEnums["String"];
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
}

export interface StockTransferItemConnection {
  __typename?: "StockTransferItemConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<StockTransferItem>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface TopSalesProduct {
  __typename?: "TopSalesProduct";
  amount: ScalarsEnums["Float"];
  count: ScalarsEnums["Int"];
  product?: Maybe<ShopProduct>;
  productName: ScalarsEnums["String"];
}

export interface TopSalesVariations {
  __typename?: "TopSalesVariations";
  amount: ScalarsEnums["Float"];
  count: ScalarsEnums["Int"];
  orderCount: ScalarsEnums["Int"];
  variation: ProductVariation;
}

export interface TotalCollectionSales {
  __typename?: "TotalCollectionSales";
  /**
   * 所有.銷售額(折扣後)
   */
  totalAmount: ScalarsEnums["Float"];
  /**
   * 所有.平均購買數量 = 賣出數量 / 訂單
   */
  totalAvgCount: ScalarsEnums["Float"];
  /**
   * 所有.平均售價 = 銷售額 / 賣出數量
   */
  totalAvgPrice: ScalarsEnums["Float"];
  /**
   * 所有.轉化率 = 訂單 / 點擊率
   */
  totalConversionRate: ScalarsEnums["Float"];
  /**
   * 所有.賣出數量
   */
  totalCount: ScalarsEnums["Float"];
  /**
   * 所有.點擊率
   */
  totalHitRate: ScalarsEnums["Int"];
  /**
   * 所有.訂單
   */
  totalOrder: ScalarsEnums["Int"];
  /**
   * 所有.瀏覽量
   */
  totalPageView: ScalarsEnums["Int"];
}

export interface TotalCouponSales {
  __typename?: "TotalCouponSales";
  /**
   * 所有.銷售額(折扣後)
   */
  totalAmount: ScalarsEnums["Float"];
  /**
   * 所有.平均購買數量 = 賣出數量 / 訂單
   */
  totalAvgCount: ScalarsEnums["Float"];
  /**
   * 所有.平均訂單價 = 銷售額 / 訂單
   */
  totalAvgPrice: ScalarsEnums["Float"];
  /**
   * 所有.賣出數量(產品)
   */
  totalCount: ScalarsEnums["Float"];
  /**
   * 所有.折扣金額
   */
  totalDiscountAmount: ScalarsEnums["Float"];
  /**
   * 所有.訂單
   */
  totalOrder: ScalarsEnums["Int"];
  /**
   * 所有.派出數量
   */
  totalRedeemCount: ScalarsEnums["Int"];
  /**
   * 所有.使用數量
   */
  totalUsageCount: ScalarsEnums["Int"];
}

export interface TotalDiscountSales {
  __typename?: "TotalDiscountSales";
  /**
   * 所有.銷售額(折扣後)
   */
  totalAmount: ScalarsEnums["Float"];
  /**
   * 所有.平均購買數量 = 賣出數量 / 訂單
   */
  totalAvgCount: ScalarsEnums["Float"];
  /**
   * 所有.平均訂單價 = 銷售額 / 訂單
   */
  totalAvgPrice: ScalarsEnums["Float"];
  /**
   * 所有.賣出數量(產品)
   */
  totalCount: ScalarsEnums["Float"];
  /**
   * 所有.折扣金額
   */
  totalDiscountAmount: ScalarsEnums["Float"];
  /**
   * 所有.訂單
   */
  totalOrder: ScalarsEnums["Int"];
  /**
   * 所有.使用數量
   */
  totalUsageCount: ScalarsEnums["Int"];
}

export interface TotalItemSales {
  __typename?: "TotalItemSales";
  amount: ScalarsEnums["Float"];
  count: ScalarsEnums["Int"];
  orderCount: ScalarsEnums["Int"];
}

export interface TotalMemberTierSales {
  __typename?: "TotalMemberTierSales";
  /**
   * 所有.銷售額(折扣後)
   */
  totalAmount: ScalarsEnums["Float"];
  /**
   * 平均購買數量 = 賣出數量 / 訂單
   */
  totalAvgCount: ScalarsEnums["Float"];
  /**
   * 平均消費 = 銷售額 / 訂單
   */
  totalAvgPrice: ScalarsEnums["Float"];
  /**
   * 賣出數量(產品)
   */
  totalCount: ScalarsEnums["Int"];
  /**
   * 總人數
   */
  totalMemberCount: ScalarsEnums["Int"];
  /**
   * 新註冊人數
   */
  totalNewMemberCount: ScalarsEnums["Int"];
  /**
   * 訂單
   */
  totalOrder: ScalarsEnums["Int"];
}

export interface TotalProductSales {
  __typename?: "TotalProductSales";
  /**
   * 所有.銷售額(折扣後)
   */
  totalAmount: ScalarsEnums["Float"];
  /**
   * 所有.平均購買數量 = 賣出數量 / 訂單
   */
  totalAvgCount: ScalarsEnums["Float"];
  /**
   * 所有.平均售價 = 銷售額 / 賣出數量
   */
  totalAvgPrice: ScalarsEnums["Float"];
  /**
   * 所有.轉化率 = 訂單 / 點擊率
   */
  totalConversionRate: ScalarsEnums["Float"];
  /**
   * 所有.賣出數量
   */
  totalCount: ScalarsEnums["Float"];
  /**
   * 所有.點擊率
   */
  totalHitRate: ScalarsEnums["Int"];
  /**
   * 所有.訂單
   */
  totalOrder: ScalarsEnums["Int"];
  /**
   * 所有.瀏覽量
   */
  totalPageView: ScalarsEnums["Int"];
}

export interface TotalSalespersonSales {
  __typename?: "TotalSalespersonSales";
  /**
   * 銷售額(折扣後)
   */
  totalAmount: ScalarsEnums["Float"];
  /**
   * 平均購買數量 = 賣出數量 / 訂單
   */
  totalAvgCount: ScalarsEnums["Float"];
  /**
   * 平均消費 = 銷售額 / 訂單
   */
  totalAvgPrice: ScalarsEnums["Float"];
  /**
   * 賣出數量(產品)
   */
  totalCount: ScalarsEnums["Int"];
  /**
   * 訂單
   */
  totalOrder: ScalarsEnums["Int"];
}

export interface TotalShopSales {
  __typename?: "TotalShopSales";
  /**
   * 銷售額(折扣後)
   */
  totalAmount: ScalarsEnums["Float"];
  /**
   * 平均購買數量 = 賣出數量 / 訂單
   */
  totalAvgCount: ScalarsEnums["Float"];
  /**
   * 平均消費 = 銷售額 / 訂單
   */
  totalAvgPrice: ScalarsEnums["Float"];
  /**
   * 賣出數量(產品)
   */
  totalCount: ScalarsEnums["Int"];
  /**
   * 會員銷售額
   */
  totalMemberAmount: ScalarsEnums["Float"];
  /**
   * 非會員銷售額
   */
  totalNonMemberAmount: ScalarsEnums["Float"];
  /**
   * 訂單
   */
  totalOrder: ScalarsEnums["Int"];
}

export interface TotalVariationSales {
  __typename?: "TotalVariationSales";
  /**
   * 所有.銷售額(折扣後)
   */
  totalAmount: ScalarsEnums["Float"];
  /**
   * 所有.平均購買數量 = 賣出數量 / 訂單
   */
  totalAvgCount: ScalarsEnums["Float"];
  /**
   * 所有.平均售價 = 銷售額 / 賣出數量
   */
  totalAvgPrice: ScalarsEnums["Float"];
  /**
   * 所有.賣出數量
   */
  totalCount: ScalarsEnums["Float"];
  /**
   * 所有.訂單
   */
  totalOrder: ScalarsEnums["Int"];
}

export interface User {
  __typename?: "User";
  addresses: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => UserAddressConnection;
  agencyServices: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => AgencyServiceConnection;
  blocked: ScalarsEnums["Boolean"];
  channels: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<ChannelFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ChannelConnection;
  companies: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => CompanyConnection;
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  devices: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ShopDeviceConnection;
  email: ScalarsEnums["AWSEmail"];
  id: ScalarsEnums["ID"];
  isEmailVerified: ScalarsEnums["Boolean"];
  isPhoneNumberVerified: ScalarsEnums["Boolean"];
  lastLogin?: Maybe<ScalarsEnums["AWSDateTime"]>;
  metadata?: Maybe<ScalarsEnums["AWSJSON"]>;
  name: ScalarsEnums["String"];
  permissions: Array<Permission>;
  phoneNumber?: Maybe<ScalarsEnums["String"]>;
  picture?: Maybe<ScalarsEnums["AWSURL"]>;
  shops: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<UserShopsFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ShopConnection;
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
}

export interface UserAddress {
  __typename?: "UserAddress";
  city?: Maybe<ScalarsEnums["String"]>;
  country?: Maybe<ScalarsEnums["Country"]>;
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  district?: Maybe<ScalarsEnums["String"]>;
  email?: Maybe<ScalarsEnums["String"]>;
  id: ScalarsEnums["ID"];
  isDefault: ScalarsEnums["Boolean"];
  lines?: Maybe<Array<ScalarsEnums["String"]>>;
  name?: Maybe<ScalarsEnums["String"]>;
  person?: Maybe<ScalarsEnums["String"]>;
  postalCode?: Maybe<ScalarsEnums["String"]>;
  state?: Maybe<ScalarsEnums["String"]>;
  tel?: Maybe<ScalarsEnums["String"]>;
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
}

export interface UserAddressConnection {
  __typename?: "UserAddressConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<UserAddress>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface UserCard {
  __typename?: "UserCard";
  active: ScalarsEnums["Boolean"];
  card: ScalarsEnums["AWSJSON"];
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  default: ScalarsEnums["Boolean"];
  id: ScalarsEnums["ID"];
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
  user: User;
}

export interface UserConnection {
  __typename?: "UserConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<User>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface UserCoupon {
  __typename?: "UserCoupon";
  coupon: CompanyCoupon;
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  customer?: Maybe<Customer>;
  handle: ScalarsEnums["String"];
  id: ScalarsEnums["ID"];
  status: ScalarsEnums["UserCouponStatus"];
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
  usage: ScalarsEnums["Int"];
  usedAt?: Maybe<ScalarsEnums["AWSDateTime"]>;
  /**
   * @deprecated Use customer instead
   */
  user?: Maybe<User>;
  validAt?: Maybe<ScalarsEnums["AWSDateTime"]>;
  validThru?: Maybe<ScalarsEnums["AWSDateTime"]>;
}

export interface UserCouponConnection {
  __typename?: "UserCouponConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<UserCoupon>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface UserOrCustomer {
  __typename?: "Customer" | "User";
  $on: $UserOrCustomer;
}

export interface UserReport {
  __typename?: "UserReport";
  /**
   * @deprecated handled by frontend
   */
  averageConsumption: ScalarsEnums["Float"];
  turnover: ScalarsEnums["Float"];
  volume: ScalarsEnums["Int"];
}

export interface VariationConnection {
  __typename?: "VariationConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<ProductVariation>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface VariationSales {
  __typename?: "VariationSales";
  /**
   * 銷售額(折扣後)
   */
  amount: ScalarsEnums["Float"];
  /**
   * 平均購買數量 = 賣出數量 / 訂單
   */
  avgCount: ScalarsEnums["Float"];
  /**
   * 平均單價 = 銷售額 / 賣出數量
   */
  avgPrice: ScalarsEnums["Float"];
  barcode?: Maybe<ScalarsEnums["String"]>;
  barcodes?: Maybe<Array<ScalarsEnums["String"]>>;
  /**
   * 賣出數量
   */
  count: ScalarsEnums["Int"];
  /**
   * 地區分佈
   */
  countries: Array<ChartData>;
  id: ScalarsEnums["ID"];
  /**
   * 會員銷售額
   */
  memberAmount: ScalarsEnums["Float"];
  /**
   * 會員級別消費
   */
  memberLevelAmounts: Array<ChartData>;
  /**
   * 會員級別分佈
   */
  memberLevels: Array<ChartData>;
  name: ScalarsEnums["String"];
  /**
   * 非會員銷售額
   */
  nonMemberAmount: ScalarsEnums["Float"];
  /**
   * 訂單
   */
  orderCount: ScalarsEnums["Int"];
  /**
   * 銷售點分佈
   */
  salesPoints: Array<ChartData>;
  /**
   * 銷售記錄
   */
  salesRecords: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    query?: Maybe<ScalarsEnums["String"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => ProductSalesRecordConnection;
  /**
   * 銷售趨勢
   */
  salesTrends: Array<LineChartData>;
  shopId: ScalarsEnums["ID"];
  sku: ScalarsEnums["String"];
}

export interface VariationSalesConnection {
  __typename?: "VariationSalesConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<VariationSales>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface VariationStock {
  __typename?: "VariationStock";
  quantity: ScalarsEnums["Int"];
  sku: ScalarsEnums["String"];
}

export interface VariationStockConnection {
  __typename?: "VariationStockConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<VariationStock>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface WarehouseConnection {
  __typename?: "WarehouseConnection";
  /**
   * Encoded cursor for pagination if more records are available.
   */
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  /**
   * Actual data nodes in this page.
   */
  nodes: Array<CompanyWarehouse>;
  /**
   * Total collection count of the current collection.
   */
  totalCount: ScalarsEnums["Int"];
}

export interface WarehouseQuantity {
  __typename?: "WarehouseQuantity";
  quantity: ScalarsEnums["Int"];
  warehouse: CompanyWarehouse;
  /**
   * @deprecated Use warehouse instead.
   */
  warehouseId: ScalarsEnums["ID"];
}

/**
 * Webhook requests will always be a HTTP POST request with specified JSON payload.
 */
export interface Webhook {
  __typename?: "Webhook";
  /**
   * Webhooks enabled from a successful ping.
   */
  active: ScalarsEnums["Boolean"];
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  /**
   * The event subscribed to this webhook, formatted in glob pattern for wildcards.
   */
  event: ScalarsEnums["String"];
  id: ScalarsEnums["ID"];
  /**
   * GraphQL query to specify the event payload sent.
   */
  query: ScalarsEnums["String"];
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
  /**
   * Target URI to be invoked when a matching event happens.
   */
  uri: ScalarsEnums["AWSURL"];
}

export interface WishItem {
  __typename?: "WishItem";
  bundleProduct?: Maybe<ShopBundleProduct>;
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  description?: Maybe<ScalarsEnums["String"]>;
  id: ScalarsEnums["ID"];
  product?: Maybe<ShopProduct>;
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
  wishlist: Wishlist;
}

export interface WishItemConnection {
  __typename?: "WishItemConnection";
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  nodes: Array<WishItem>;
  totalCount: ScalarsEnums["Int"];
}

export interface Wishlist {
  __typename?: "Wishlist";
  createdAt: ScalarsEnums["AWSDateTime"];
  createdBy?: Maybe<User>;
  description?: Maybe<ScalarsEnums["String"]>;
  id: ScalarsEnums["ID"];
  isDefault: ScalarsEnums["Boolean"];
  items: (args?: {
    cursor?: Maybe<ScalarsEnums["Int"]>;
    filter?: Maybe<WishItemFilterInput>;
    limits?: Maybe<ScalarsEnums["Int"]>;
    sortBy?: Maybe<Array<SorterInput>>;
  }) => WishItemConnection;
  name: ScalarsEnums["String"];
  updatedAt: ScalarsEnums["AWSDateTime"];
  updatedBy?: Maybe<User>;
}

export interface WishlistConnection {
  __typename?: "WishlistConnection";
  nextCursor?: Maybe<ScalarsEnums["ID"]>;
  nodes: Array<Wishlist>;
  totalCount: ScalarsEnums["Int"];
}

export interface Mutation {
  __typename?: "Mutation";
  addOnProductSet: (args: {
    id?: Maybe<ScalarsEnums["ID"]>;
    input: AddOnProductInput;
  }) => ShopAddOnProduct;
  addOnProductUnset: (args: { id: ScalarsEnums["ID"] }) => ShopAddOnProduct;
  addOnProductsActivate: (args: {
    filter?: Maybe<AddOnProductFilterInput>;
    query?: Maybe<ScalarsEnums["String"]>;
    shopId: ScalarsEnums["ID"];
  }) => Process;
  addOnProductsDeactivate: (args: {
    filter?: Maybe<AddOnProductFilterInput>;
    query?: Maybe<ScalarsEnums["String"]>;
    shopId: ScalarsEnums["ID"];
  }) => Process;
  addOnProductsDelete: (args: {
    filter?: Maybe<AddOnProductFilterInput>;
    query?: Maybe<ScalarsEnums["String"]>;
    shopId: ScalarsEnums["ID"];
  }) => Process;
  addOnProductsPriceAdjust: (args: {
    filter?: Maybe<AddOnProductFilterInput>;
    operator: BatchOperator;
    query?: Maybe<ScalarsEnums["String"]>;
    safetyThreshold?: Maybe<ScalarsEnums["Float"]>;
    shopId: ScalarsEnums["ID"];
    value: ScalarsEnums["Float"];
  }) => Process;
  addOnProductsQuantitySet: (args: {
    filter?: Maybe<AddOnProductFilterInput>;
    operator: BatchOperator;
    quantity: ScalarsEnums["Int"];
    query?: Maybe<ScalarsEnums["String"]>;
    shopId: ScalarsEnums["ID"];
  }) => Process;
  agentServiceSet: (args: {
    id?: Maybe<ScalarsEnums["ID"]>;
    input: AgencyServiceInput;
  }) => AgencyService;
  agentServiceUnset: (args: { id: ScalarsEnums["ID"] }) => AgencyService;
  appointmentAttend: (args: { id: ScalarsEnums["ID"] }) => ShopAppointment;
  /**
   * Customer book an appointment
   */
  appointmentBook: (args: { input: AppointmentBookInput }) => ShopAppointment;
  appointmentCancel: (args: { id: ScalarsEnums["ID"] }) => ShopAppointment;
  appointmentConfirm: (args: { id: ScalarsEnums["ID"] }) => ShopAppointment;
  /**
   * Admin create an appointment
   */
  appointmentCreate: (args: {
    input: AppointmentCreateInput;
  }) => ShopAppointment;
  appointmentNoShow: (args: { id: ScalarsEnums["ID"] }) => ShopAppointment;
  appointmentUpdate: (args: {
    id: ScalarsEnums["ID"];
    input: AppointmentUpdateInput;
  }) => ShopAppointment;
  attendanceCreate: (args: { input: AttendanceCreateInput }) => ShopAttendance;
  attendancesExport: (args: {
    filter?: Maybe<AttendanceFilterInput>;
    shopId: ScalarsEnums["ID"];
  }) => Process;
  bundleProductCreate: (args: {
    input: BundleProductCreateInput;
  }) => ShopBundleProduct;
  bundleProductDelete: (args: { id: ScalarsEnums["ID"] }) => ShopBundleProduct;
  bundleProductUpdate: (args: {
    id: ScalarsEnums["ID"];
    input: BundleProductUpdateInput;
  }) => ShopBundleProduct;
  campaignActivate: (args: { id: ScalarsEnums["ID"] }) => ShopCampaign;
  campaignDeactivate: (args: { id: ScalarsEnums["ID"] }) => ShopCampaign;
  /**
   * Exports current delivery report of the specified campaign.
   */
  campaignDeliveryReportExport: (args: { id: ScalarsEnums["ID"] }) => Process;
  campaignMessageSend: (args: {
    id: ScalarsEnums["ID"];
    isResend?: Maybe<ScalarsEnums["Boolean"]>;
  }) => ShopCampaign;
  campaignRecipientActionsExport: (args: { id: ScalarsEnums["ID"] }) => Process;
  campaignSet: (args: {
    id?: Maybe<ScalarsEnums["ID"]>;
    input: CampaignSetInput;
  }) => ShopCampaign;
  campaignUnset: (args: { id: ScalarsEnums["ID"] }) => ShopCampaign;
  /**
   * Bulk actions
   */
  campaignsActivate: (args: {
    filter?: Maybe<CampaignFilterInput>;
    query?: Maybe<ScalarsEnums["String"]>;
    shopId: ScalarsEnums["ID"];
  }) => Process;
  campaignsDeactivate: (args: {
    filter?: Maybe<CampaignFilterInput>;
    query?: Maybe<ScalarsEnums["String"]>;
    shopId: ScalarsEnums["ID"];
  }) => Process;
  campaignsDelete: (args: {
    filter?: Maybe<CampaignFilterInput>;
    query?: Maybe<ScalarsEnums["String"]>;
    shopId: ScalarsEnums["ID"];
  }) => Process;
  cashFlowCreate: (args: { input: CashFlowInput }) => ShopCashFlow;
  cashVoucherSet: (args: {
    id?: Maybe<ScalarsEnums["ID"]>;
    input: CashVoucherSetInput;
  }) => CompanyCashVoucher;
  cashVoucherUnset: (args: { id: ScalarsEnums["ID"] }) => CompanyCashVoucher;
  cashVouchersActivate: (args: {
    query?: Maybe<ScalarsEnums["String"]>;
    shopId: ScalarsEnums["ID"];
  }) => Process;
  cashVouchersDeactivate: (args: {
    query?: Maybe<ScalarsEnums["String"]>;
    shopId: ScalarsEnums["ID"];
  }) => Process;
  cashVouchersDelete: (args: {
    query?: Maybe<ScalarsEnums["String"]>;
    shopId: ScalarsEnums["ID"];
  }) => Process;
  channelMessageRead: (args: {
    channelPlayerId: ScalarsEnums["String"];
    messageId: ScalarsEnums["ID"];
  }) => ChannelMessage;
  channelMessageSet: (args: {
    id?: Maybe<ScalarsEnums["ID"]>;
    input: ChannelMessageSetInput;
  }) => ChannelMessage;
  channelPlayerSet: (args: {
    id?: Maybe<ScalarsEnums["String"]>;
    input: ChannelPlayerSetInput;
  }) => ChannelPlayer;
  channelPlayerUnset: (args: {
    channelId: ScalarsEnums["ID"];
    id: ScalarsEnums["String"];
  }) => ChannelPlayer;
  /**
   * You can use playerId or userId or just id to reproduce the read behaviour
   *  Return the latest message.
   */
  channelRead: (args: {
    channelId: ScalarsEnums["ID"];
    channelPlayerId: ScalarsEnums["String"];
  }) => ChannelMessage;
  channelSet: (args: {
    id?: Maybe<ScalarsEnums["ID"]>;
    input: ChannelSetInput;
  }) => Channel;
  channelUnset: (args: { id: ScalarsEnums["ID"] }) => Channel;
  checkoutCancel: (args: { id: ScalarsEnums["ID"] }) => ShopCheckout;
  checkoutCashVoucherSet: (args: {
    id: ScalarsEnums["ID"];
    input: CheckoutCashVoucherInput;
  }) => ShopCheckout;
  /**
   * Adds a coupon by id or code into a checkout.
   */
  checkoutCouponSet: (args: {
    couponId?: Maybe<ScalarsEnums["ID"]>;
    handle?: Maybe<ScalarsEnums["String"]>;
    id: ScalarsEnums["ID"];
  }) => ShopCheckout;
  /**
   * Remove a previously added coupon from checkout.
   */
  checkoutCouponUnset: (args: {
    checkoutCouponId?: Maybe<ScalarsEnums["ID"]>;
    handle?: Maybe<ScalarsEnums["String"]>;
    id: ScalarsEnums["ID"];
  }) => ShopCheckout;
  checkoutCreateOffline: (args: {
    input: CheckoutCreateOfflineInput;
  }) => ShopCheckout;
  checkoutItemSet: (args: {
    id: ScalarsEnums["ID"];
    input: CheckoutItemInput;
    operator: CheckoutItemSetOperator;
    progressive?: Maybe<ScalarsEnums["Boolean"]>;
    softDelete?: Maybe<ScalarsEnums["Boolean"]>;
  }) => ShopCheckout;
  checkoutItemsCreate: (args: {
    id: ScalarsEnums["ID"];
    input: Array<CheckoutItemCreateInput>;
    progressive?: Maybe<ScalarsEnums["Boolean"]>;
  }) => ShopCheckout;
  checkoutItemsDelete: (args: {
    checkoutItemIds: Array<ScalarsEnums["ID"]>;
    id: ScalarsEnums["ID"];
  }) => ShopCheckout;
  checkoutPay: (args: {
    id: ScalarsEnums["ID"];
    idempotencyKey?: Maybe<ScalarsEnums["String"]>;
    input: CheckoutPayInput;
  }) => ShopCheckout;
  checkoutPriceRecalculate: (args: { id: ScalarsEnums["ID"] }) => ShopCheckout;
  /**
   * Stock checking and locking the checkout
   */
  checkoutProcess: (args: {
    addOnProductInputs?: Maybe<Array<CheckoutAddOnProductInput>>;
    id: ScalarsEnums["ID"];
  }) => ShopCheckout;
  checkoutSet: (args: {
    id?: Maybe<ScalarsEnums["ID"]>;
    input: CheckoutInput;
  }) => ShopCheckout;
  collectionParentSet: (args: {
    input: Array<CollectionParentSetInput>;
  }) => Array<ShopCollection>;
  collectionProductsAdd: (args: {
    id: ScalarsEnums["ID"];
    productIds: Array<ScalarsEnums["ID"]>;
  }) => ShopCollection;
  collectionProductsRemove: (args: {
    id: ScalarsEnums["ID"];
    productIds: Array<ScalarsEnums["ID"]>;
  }) => ShopCollection;
  collectionSet: (args: {
    id?: Maybe<ScalarsEnums["ID"]>;
    input: CollectionInput;
  }) => ShopCollection;
  collectionUnset: (args: { id: ScalarsEnums["ID"] }) => ShopCollection;
  collectionsActivate: (args: {
    filter?: Maybe<CollectionFilterInput>;
    query?: Maybe<ScalarsEnums["String"]>;
    shopId: ScalarsEnums["ID"];
  }) => Process;
  collectionsDeactivate: (args: {
    filter?: Maybe<CollectionFilterInput>;
    query?: Maybe<ScalarsEnums["String"]>;
    shopId: ScalarsEnums["ID"];
  }) => Process;
  /**
   * Export existing collections in a shop into a XLSX file.
   */
  collectionsExport: (args: {
    filter?: Maybe<CollectionFilterInput>;
    shopId: ScalarsEnums["ID"];
  }) => Process;
  collectionsImport: (args: {
    shopId: ScalarsEnums["ID"];
    url: ScalarsEnums["AWSURL"];
  }) => Process;
  collectionsReportExport: (args: {
    exportShopIds?: Maybe<Array<ScalarsEnums["ID"]>>;
    shopId: ScalarsEnums["ID"];
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => Process;
  /**
   * Delete collections in bulk.
   */
  collectionsUnset: (args: {
    filter?: Maybe<CollectionFilterInput>;
    query?: Maybe<ScalarsEnums["String"]>;
    shopId: ScalarsEnums["ID"];
  }) => Process;
  companyCouponActivate: (args: { id: ScalarsEnums["ID"] }) => CompanyCoupon;
  companyCouponDeactivate: (args: { id: ScalarsEnums["ID"] }) => CompanyCoupon;
  companyCouponSet: (args: {
    id?: Maybe<ScalarsEnums["ID"]>;
    input: CouponInput;
    subCouponInput?: Maybe<SubCouponInput>;
  }) => CompanyCoupon;
  companyCouponUnset: (args: { id: ScalarsEnums["ID"] }) => CompanyCoupon;
  companyDiscountSet: (args: {
    id?: Maybe<ScalarsEnums["ID"]>;
    input: DiscountInput;
  }) => CompanyDiscount;
  companyDiscountUnset: (args: { id: ScalarsEnums["ID"] }) => CompanyDiscount;
  companyMemberTierSet: (args: {
    id?: Maybe<ScalarsEnums["ID"]>;
    input: CompanyMemberTierInput;
  }) => CompanyMemberTier;
  companyMemberTierUnset: (args: {
    id: ScalarsEnums["ID"];
  }) => CompanyMemberTier;
  companyPaymentSourceDelete: (args: {
    companyId: ScalarsEnums["ID"];
    id: ScalarsEnums["ID"];
  }) => PaymentSource;
  companyShopActivate: (args: { id: ScalarsEnums["ID"] }) => CompanyShop;
  companyShopCreate: (args: {
    companyId: ScalarsEnums["ID"];
    credential?: Maybe<CompanyShopCredentialInput>;
    input: CompanyShopInput;
  }) => CompanyShop;
  companyShopDeactivate: (args: { id: ScalarsEnums["ID"] }) => CompanyShop;
  /**
   * @deprecated Use companyShopUpdate instead
   */
  companyShopSet: (args: {
    id: ScalarsEnums["ID"];
    input: CompanyShopInput;
  }) => CompanyShop;
  /**
   * Update shop settings.
   */
  companyShopUpdate: (args: {
    id: ScalarsEnums["ID"];
    input: CompanyShopInput;
  }) => CompanyShop;
  companyUpdate: (args: {
    id: ScalarsEnums["ID"];
    input: CompanyUpdateInput;
  }) => Company;
  /**
   * Creates a webhook, server will send a test event payload upon creation.
   *  Webhooks are automatically set to active on a successful ping.
   */
  companyWebhookSet: (args: {
    event: ScalarsEnums["String"];
    id: ScalarsEnums["ID"];
    query: ScalarsEnums["String"];
    uri: ScalarsEnums["String"];
  }) => Webhook;
  couponRedeem: (args: {
    couponId: ScalarsEnums["ID"];
    userId?: Maybe<ScalarsEnums["ID"]>;
  }) => UserCoupon;
  couponsActivate: (args: {
    filter?: Maybe<CompanyCouponFilterInput>;
    query?: Maybe<ScalarsEnums["String"]>;
    shopId: ScalarsEnums["ID"];
  }) => Process;
  couponsDeactivate: (args: {
    filter?: Maybe<CompanyCouponFilterInput>;
    query?: Maybe<ScalarsEnums["String"]>;
    shopId: ScalarsEnums["ID"];
  }) => Process;
  couponsDelete: (args: {
    filter?: Maybe<CompanyCouponFilterInput>;
    query?: Maybe<ScalarsEnums["String"]>;
    shopId: ScalarsEnums["ID"];
  }) => Process;
  couponsReportExport: (args: {
    shopId: ScalarsEnums["ID"];
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => Process;
  /**
   * @deprecated Use `credentialSet` instead.
   */
  credentialEFTPaySet: (args: {
    input: ShopPaymentCredentialInput;
    shopId: ScalarsEnums["ID"];
  }) => Array<ShopCredential>;
  /**
   * @deprecated Use `credentialSet` instead.
   */
  credentialKConnectSet: (args: {
    input: ShopAuthenticationCredentialInput;
    shopId: ScalarsEnums["ID"];
  }) => ShopCredential;
  /**
   * @deprecated Use `credentialSet` instead.
   */
  credentialKPayPosSet: (args: {
    input: ShopPaymentCredentialInput;
    shopId: ScalarsEnums["ID"];
  }) => Array<ShopCredential>;
  /**
   * @deprecated Use `credentialSet` instead.
   */
  credentialKPaySet: (args: {
    input: ShopPaymentCredentialInput;
    shopId: ScalarsEnums["ID"];
  }) => Array<ShopCredential>;
  /**
   * @deprecated Use `credentialSet` instead.
   */
  credentialManualSet: (args: {
    input: ShopManualCredentialInput;
    shopId: ScalarsEnums["ID"];
  }) => Array<ShopCredential>;
  /**
   * @deprecated Use `credentialSet` instead.
   */
  credentialOCGCSet: (args: {
    input: ShopPaymentCredentialInput;
    shopId: ScalarsEnums["ID"];
  }) => Array<ShopCredential>;
  /**
   * @deprecated Use `credentialSet` instead.
   */
  credentialSFExpressSet: (args: {
    input: ShopShippingCredentialInput;
    shopId: ScalarsEnums["ID"];
  }) => Array<ShopCredential>;
  credentialSet: (args: {
    id?: Maybe<ScalarsEnums["ID"]>;
    input: CredentialSetInput;
  }) => ShopCredential;
  /**
   * @deprecated Use `credentialSet` instead.
   */
  credentialSmartPaySet: (args: {
    input: ShopPaymentCredentialInput;
    shopId: ScalarsEnums["ID"];
  }) => Array<ShopCredential>;
  /**
   * @deprecated Use `credentialSet` instead.
   */
  credentialStripeConnectRegister: (args: {
    input: ShopPaymentCredentialInput;
    shopId: ScalarsEnums["ID"];
  }) => Array<ShopCredential>;
  /**
   * @deprecated Use `credentialSet` instead.
   */
  credentialStripeConnectSet: (args: {
    input: ShopPaymentCredentialInput;
    shopId: ScalarsEnums["ID"];
  }) => Array<ShopCredential>;
  /**
   * @deprecated Use `credentialSet` instead.
   */
  credentialStripeSet: (args: {
    input: ShopPaymentCredentialInput;
    shopId: ScalarsEnums["ID"];
  }) => Array<ShopCredential>;
  /**
   * @deprecated Use `credentialSet` instead.
   */
  credentialSwiftPassSet: (args: {
    input: ShopPaymentCredentialInput;
    shopId: ScalarsEnums["ID"];
  }) => Array<ShopCredential>;
  credentialUnset: (args: { id: ScalarsEnums["ID"] }) => ShopCredential;
  /**
   * @deprecated Use `credentialSet` instead.
   */
  credentialUprisePaymentSet: (args: {
    input: ShopPaymentCredentialInput;
    shopId: ScalarsEnums["ID"];
  }) => Array<ShopCredential>;
  creditNoteVoid: (args: { id: ScalarsEnums["ID"] }) => InvoiceCreditNote;
  customerAddressCreate: (args: {
    input: CustomerAddressCreateInput;
  }) => CustomerAddress;
  customerAddressDelete: (args: { id: ScalarsEnums["ID"] }) => CustomerAddress;
  customerAddressUpdate: (args: {
    id: ScalarsEnums["ID"];
    input: CustomerAddressUpdateInput;
  }) => CustomerAddress;
  customerBlock: (args: {
    id: ScalarsEnums["ID"];
    shopId: ScalarsEnums["ID"];
  }) => Customer;
  customerCouponCancel: (args: { couponId: ScalarsEnums["ID"] }) => UserCoupon;
  customerCouponVoid: (args: { couponId: ScalarsEnums["ID"] }) => UserCoupon;
  /**
   * SET: Assign a new points.
   */
  customerGiftPointsSet: (args: {
    id: ScalarsEnums["ID"];
    points: ScalarsEnums["Int"];
    remarks?: Maybe<ScalarsEnums["String"]>;
    shopId: ScalarsEnums["ID"];
  }) => Customer;
  customerPaymentSourceCreate: (args: {
    credentialId: ScalarsEnums["String"];
    token: ScalarsEnums["String"];
  }) => PaymentSource;
  customerPaymentSourceDelete: (args: {
    id: ScalarsEnums["ID"];
  }) => PaymentSource;
  /**
   * Sends a password resetting token via email to the customer.
   */
  customerRecover: (args: {
    email: ScalarsEnums["AWSEmail"];
  }) => Maybe<ScalarsEnums["Boolean"]>;
  /**
   * Sends a password resetting code via SMS to the customer.
   */
  customerRecoverByMobile: (args?: {
    mobile?: Maybe<ScalarsEnums["AWSPhone"]>;
    mobileV2?: Maybe<ScalarsEnums["String"]>;
  }) => Maybe<ScalarsEnums["Boolean"]>;
  /**
   * 1. A verification email will be sent to the user if an email address is specified.
   *  2. A verification SMS will be sent to the user if a mobile number is specified.
   */
  customerRegister: (args: {
    captchaToken?: Maybe<ScalarsEnums["String"]>;
    credential: CustomerCredentialInput;
    input: CustomerProfileInput;
    shopId?: Maybe<ScalarsEnums["ID"]>;
  }) => Customer;
  /**
   * Resetting a customer's password with the token received via email or SMS.
   */
  customerReset: (args: {
    password: ScalarsEnums["String"];
    token: ScalarsEnums["String"];
  }) => Maybe<ScalarsEnums["Boolean"]>;
  customerUnblock: (args: {
    id: ScalarsEnums["ID"];
    shopId: ScalarsEnums["ID"];
  }) => Customer;
  /**
   * Admin, or merchants maintaining their private customers details.
   */
  customerUpdate: (args: {
    credential?: Maybe<UserCredentialUpdateInput>;
    id: ScalarsEnums["ID"];
    input: CustomerProfileInput;
    shopId: ScalarsEnums["ID"];
  }) => Customer;
  customerVerify: (args: { token: ScalarsEnums["String"] }) => Customer;
  /**
   * Export existing members filtered from specified filter into excel format.
   */
  customersExport: (args: {
    filter?: Maybe<CustomerFilterInput>;
    query?: Maybe<ScalarsEnums["String"]>;
    shopId: ScalarsEnums["ID"];
    timezone?: Maybe<ScalarsEnums["String"]>;
  }) => Process;
  customersGiftPointsExport: (args: {
    filter?: Maybe<GiftPointExportFilterInput>;
    shopId: ScalarsEnums["ID"];
    timezone?: Maybe<ScalarsEnums["String"]>;
  }) => Process;
  customersGiftPointsSet: (args: {
    filter?: Maybe<CustomerFilterInput>;
    operator: BatchOperator;
    points: ScalarsEnums["Int"];
    query?: Maybe<ScalarsEnums["String"]>;
    shopId: ScalarsEnums["ID"];
  }) => Process;
  customersHashtagsSet: (args: {
    filter?: Maybe<CustomerFilterInput>;
    hashtags: Array<ScalarsEnums["String"]>;
    operator: BatchAssignmentOperator;
    query?: Maybe<ScalarsEnums["String"]>;
    shopId: ScalarsEnums["ID"];
  }) => Process;
  /**
   * Import customers from a publicly accessible URL, data-uri can be used but is not recommended for large files.
   */
  customersImport: (args: {
    shopId: ScalarsEnums["ID"];
    timezone?: Maybe<ScalarsEnums["String"]>;
    url: ScalarsEnums["AWSURL"];
  }) => Process;
  customersMemberTierSet: (args: {
    filter?: Maybe<CustomerFilterInput>;
    input: UserMemberTierSetInput;
    query?: Maybe<ScalarsEnums["String"]>;
    shopId: ScalarsEnums["ID"];
  }) => Process;
  customersUpdateImport: (args: {
    shopId: ScalarsEnums["ID"];
    url: ScalarsEnums["AWSURL"];
  }) => Process;
  deliveryNoteComplete: (args: { id: ScalarsEnums["ID"] }) => OrderDeliveryNote;
  deliveryNoteCompleteV2: (args: {
    id: ScalarsEnums["ID"];
  }) => OrderDeliveryNote;
  deliveryNoteCreate: (args: {
    input: DeliveryNoteCreateInput;
  }) => OrderDeliveryNote;
  deliveryNoteProcess: (args: { id: ScalarsEnums["ID"] }) => OrderDeliveryNote;
  /**
   * @deprecated Use deliveryNotesCreate Or deliveryNotesUpdate instead
   */
  deliveryNoteSet: (args: {
    id?: Maybe<ScalarsEnums["ID"]>;
    input: DeliveryNoteSetInput;
  }) => OrderDeliveryNote;
  deliveryNoteUpdate: (args: {
    id: ScalarsEnums["ID"];
    input: DeliveryNoteUpdateInput;
  }) => OrderDeliveryNote;
  deliveryNoteVoid: (args: { id: ScalarsEnums["ID"] }) => OrderDeliveryNote;
  /**
   * Mark delivery notes as completed in bulk.
   */
  deliveryNotesComplete: (args: {
    filter?: Maybe<DeliveryNotesFilterInput>;
    query?: Maybe<ScalarsEnums["String"]>;
    shopId: ScalarsEnums["ID"];
  }) => Process;
  /**
   * Mark delivery notes as processing in bulk.
   */
  deliveryNotesProcess: (args: {
    filter?: Maybe<DeliveryNotesFilterInput>;
    query?: Maybe<ScalarsEnums["String"]>;
    shopId: ScalarsEnums["ID"];
  }) => Process;
  /**
   * Update delivery notes in bulk.
   */
  deliveryNotesSet: (args: {
    filter?: Maybe<DeliveryNotesFilterInput>;
    input: DeliveryNoteSetInput;
    query?: Maybe<ScalarsEnums["String"]>;
    shopId: ScalarsEnums["ID"];
  }) => Process;
  /**
   * POS update configs to backend.
   */
  deviceConfigUpdate: (args: {
    input: DeviceConfigUpdateInput;
  }) => ScalarsEnums["Boolean"];
  discountsActivate: (args: {
    filter?: Maybe<DiscountFilterInput>;
    query?: Maybe<ScalarsEnums["String"]>;
    shopId: ScalarsEnums["ID"];
  }) => Process;
  discountsDeactivate: (args: {
    filter?: Maybe<DiscountFilterInput>;
    query?: Maybe<ScalarsEnums["String"]>;
    shopId: ScalarsEnums["ID"];
  }) => Process;
  discountsDelete: (args: {
    filter?: Maybe<DiscountFilterInput>;
    query?: Maybe<ScalarsEnums["String"]>;
    shopId: ScalarsEnums["ID"];
  }) => Process;
  discountsReportExport: (args: {
    shopId: ScalarsEnums["ID"];
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => Process;
  emailTemplateCreate: (args: {
    input: ShopEmailTemplateCreateInput;
  }) => ShopEmailTemplate;
  emailTemplateDelete: (args: { id: ScalarsEnums["ID"] }) => ShopEmailTemplate;
  emailTemplateUpdate: (args: {
    id: ScalarsEnums["ID"];
    input: ShopEmailTemplateUpdateInput;
  }) => ShopEmailTemplate;
  honorProductSerialsImport: (args: { url: ScalarsEnums["String"] }) => Process;
  ingredientSet: (args: {
    id?: Maybe<ScalarsEnums["ID"]>;
    input: IngredientInput;
  }) => Ingredient;
  ingredientUnset: (args: { id: ScalarsEnums["ID"] }) => Ingredient;
  /**
   * Creates or updates target process, reserved for internal use.
   */
  internal_processSet: (args: {
    id: ScalarsEnums["ID"];
    output?: Maybe<ScalarsEnums["AWSJSON"]>;
    status?: Maybe<ProcessStatus>;
  }) => Process;
  inventoryReportExport: (args: {
    exportShopIds?: Maybe<Array<ScalarsEnums["ID"]>>;
    shopId: ScalarsEnums["ID"];
  }) => Process;
  invoiceRefund: (args: {
    amount?: Maybe<ScalarsEnums["Float"]>;
    id: ScalarsEnums["ID"];
  }) => OrderInvoice;
  invoiceVoid: (args: { id: ScalarsEnums["ID"] }) => OrderInvoice;
  /**
   * This function has a maximum document limit, only the first 100 results will be
   *  printed.
   */
  invoicesPrint: (args: {
    filter?: Maybe<InvoiceFilterInput>;
    query?: Maybe<ScalarsEnums["String"]>;
    shopId: ScalarsEnums["ID"];
    sortBy?: Maybe<Array<SorterInput>>;
  }) => Process;
  modifierProductsAdd: (args: {
    id: ScalarsEnums["ID"];
    productIds: Array<ScalarsEnums["ID"]>;
  }) => ShopProductModifier;
  modifierProductsRemove: (args: {
    id: ScalarsEnums["ID"];
    productIds: Array<ScalarsEnums["ID"]>;
  }) => ShopProductModifier;
  navigationTemplateCreate: (args: {
    input: NavigationTemplateCreateInput;
  }) => ShopNavigationTemplate;
  navigationTemplateDelete: (args: {
    id: ScalarsEnums["ID"];
  }) => ShopNavigationTemplate;
  navigationTemplateUpdate: (args: {
    id: ScalarsEnums["ID"];
    input: NavigationTemplateUpdateInput;
  }) => ShopNavigationTemplate;
  newsletterSubscribe: (args: {
    id?: Maybe<ScalarsEnums["ID"]>;
    input: NewsletterSubscriptionSetInput;
  }) => NewsletterSubscription;
  newsletterUnset: (args: { id: ScalarsEnums["ID"] }) => NewsletterSubscription;
  orderAdjustmentAdd: (args: {
    input: OrderAdjustmentInput;
    orderId: ScalarsEnums["ID"];
  }) => ShopOrder;
  orderAdjustmentRemove: (args: { id: ScalarsEnums["ID"] }) => ShopOrder;
  orderBillingAddressUpdate: (args: {
    address: AddressInput;
    id: ScalarsEnums["ID"];
  }) => ShopOrder;
  orderCancel: (args: {
    id: ScalarsEnums["ID"];
    input: OrderCancelInput;
  }) => ShopOrder;
  orderCommentSet: (args: {
    id?: Maybe<ScalarsEnums["ID"]>;
    input: OrderCommentInput;
  }) => OrderComment;
  orderCommentUnset: (args: { id: ScalarsEnums["ID"] }) => OrderComment;
  orderConfirm: (args: { id: ScalarsEnums["ID"] }) => ShopOrder;
  orderItemMetadataAdd: (args: {
    id: ScalarsEnums["ID"];
    metadata: Array<MetadataInput>;
  }) => ShopOrder;
  orderItemMetadataRemove: (args: {
    id: ScalarsEnums["ID"];
    keys: Array<ScalarsEnums["String"]>;
  }) => ShopOrder;
  orderItemRemarkUpdate: (args: {
    id: ScalarsEnums["ID"];
    remark: ScalarsEnums["String"];
  }) => ShopOrder;
  orderItemUnitPriceUpdate: (args: {
    id: ScalarsEnums["ID"];
    unitPrice: ScalarsEnums["Float"];
  }) => ShopOrder;
  orderKitchenStatusUpdate: (args: {
    id: ScalarsEnums["ID"];
    status: ShopOrderKitchenStatus;
  }) => ShopOrder;
  /**
   * Deduct customer's rewarded member points
   */
  orderMemberPointsDeduct: (args: {
    id: ScalarsEnums["ID"];
    points?: Maybe<ScalarsEnums["Int"]>;
  }) => ShopOrder;
  orderRefund: (args: {
    amount?: Maybe<ScalarsEnums["Float"]>;
    id: ScalarsEnums["ID"];
  }) => ShopOrder;
  /**
   * Resend order confirmation email
   */
  orderResendConfirmationEmail: (args: { id: ScalarsEnums["ID"] }) => ShopOrder;
  orderUpdate: (args: {
    id: ScalarsEnums["ID"];
    input: OrderUpdateInput;
  }) => ShopOrder;
  ordersActivate: (args: {
    filter?: Maybe<OrderFilterInput>;
    shopId: ScalarsEnums["ID"];
  }) => Process;
  /**
   * Cancel orders in bulk
   */
  ordersCancel: (args: {
    cancelReason?: Maybe<ScalarsEnums["String"]>;
    filter?: Maybe<OrderFilterInput>;
    query?: Maybe<ScalarsEnums["String"]>;
    shopId: ScalarsEnums["ID"];
  }) => Process;
  /**
   * Confirm orders in bulk.
   */
  ordersConfirm: (args: {
    filter?: Maybe<OrderFilterInput>;
    query?: Maybe<ScalarsEnums["String"]>;
    shopId: ScalarsEnums["ID"];
  }) => Process;
  ordersDeactivate: (args: {
    filter?: Maybe<OrderFilterInput>;
    shopId: ScalarsEnums["ID"];
  }) => Process;
  /**
   * Export existing orders in a company into a XLSX file.
   */
  ordersExport: (args: {
    filter?: Maybe<OrderFilterInput>;
    query?: Maybe<ScalarsEnums["String"]>;
    shopId: ScalarsEnums["ID"];
  }) => Process;
  /**
   * @deprecated Use `pagesDelete` instead.
   */
  pageBulkAction: (args: {
    action: PageBulkAction;
    data?: Maybe<ScalarsEnums["String"]>;
    filter: PageFilterInput;
    shopId: ScalarsEnums["ID"];
  }) => Maybe<ScalarsEnums["Boolean"]>;
  pageSet: (args: {
    id?: Maybe<ScalarsEnums["ID"]>;
    input: PageInput;
  }) => ShopPage;
  pageUnset: (args: { id: ScalarsEnums["ID"] }) => ShopPage;
  /**
   * Delete pages in bulk.
   */
  pagesDelete: (args: {
    filter?: Maybe<PageFilterInput>;
    query?: Maybe<ScalarsEnums["String"]>;
    shopId: ScalarsEnums["ID"];
  }) => Maybe<Process>;
  paymentMethodActivate: (args: { id: ScalarsEnums["ID"] }) => PaymentMethod;
  paymentMethodCreate: (args: {
    input: PaymentMethodCreateInput;
  }) => PaymentMethod;
  paymentMethodDeactivate: (args: { id: ScalarsEnums["ID"] }) => PaymentMethod;
  paymentMethodDelete: (args: { id: ScalarsEnums["ID"] }) => PaymentMethod;
  paymentMethodDisable: (args: { id: ScalarsEnums["ID"] }) => PaymentMethod;
  paymentMethodEnable: (args: { id: ScalarsEnums["ID"] }) => PaymentMethod;
  paymentMethodUpdate: (args: {
    id: ScalarsEnums["ID"];
    input: PaymentMethodUpdateInput;
  }) => PaymentMethod;
  productModifierCreate: (args: {
    input: ShopProductModifierCreateInput;
  }) => ShopProductModifier;
  productModifierDelete: (args: {
    id: ScalarsEnums["ID"];
  }) => ShopProductModifier;
  productModifierUpdate: (args: {
    id: ScalarsEnums["ID"];
    input: ShopProductModifierUpdateInput;
  }) => ShopProductModifier;
  productReportExport: (args: {
    exportShopIds?: Maybe<Array<ScalarsEnums["ID"]>>;
    shopId: ScalarsEnums["ID"];
    sku: ScalarsEnums["String"];
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => Process;
  /**
   * Creates a Product when `id` is not specified, otherwise it updates.
   */
  productSet: (args: {
    allShop?: Maybe<ScalarsEnums["Boolean"]>;
    id?: Maybe<ScalarsEnums["ID"]>;
    input: ProductInput;
  }) => ShopProduct;
  /**
   * *Note that products should never be deleted when operations (e.g. stock movements, orders... etc.) exists.*
   */
  productUnset: (args: { id: ScalarsEnums["ID"] }) => ShopProduct;
  productsActivate: (args: {
    filter?: Maybe<ProductFilterInput>;
    query?: Maybe<ScalarsEnums["String"]>;
    shopId: ScalarsEnums["ID"];
  }) => Process;
  productsCollectionSet: (args: {
    collectionCodes: Array<ScalarsEnums["String"]>;
    collectionIds: Array<ScalarsEnums["ID"]>;
    filter?: Maybe<ProductFilterInput>;
    operator: BatchAssignmentOperator;
    query?: Maybe<ScalarsEnums["String"]>;
    shopId: ScalarsEnums["ID"];
  }) => Process;
  productsDeactivate: (args: {
    filter?: Maybe<ProductFilterInput>;
    query?: Maybe<ScalarsEnums["String"]>;
    shopId: ScalarsEnums["ID"];
  }) => Process;
  productsDelete: (args: {
    filter?: Maybe<ProductFilterInput>;
    query?: Maybe<ScalarsEnums["String"]>;
    shopId: ScalarsEnums["ID"];
  }) => Process;
  /**
   * Export products filtered from specified filter into excel format.
   */
  productsExport: (args: {
    filter?: Maybe<ProductFilterInput>;
    shopId: ScalarsEnums["ID"];
  }) => Process;
  productsHashtagsSet: (args: {
    filter?: Maybe<ProductFilterInput>;
    hashtags: Array<ScalarsEnums["String"]>;
    operator: BatchAssignmentOperator;
    query?: Maybe<ScalarsEnums["String"]>;
    shopId: ScalarsEnums["ID"];
  }) => Process;
  /**
   * Import products from a publicly accessible URL, data-uri can be used but is not recommended for large files.
   */
  productsImport: (args: {
    shopId: ScalarsEnums["ID"];
    url: ScalarsEnums["AWSURL"];
  }) => Process;
  productsPriceAdjust: (args: {
    filter?: Maybe<ProductFilterInput>;
    operator: BatchOperator;
    query?: Maybe<ScalarsEnums["String"]>;
    safetyThreshold?: Maybe<ScalarsEnums["Float"]>;
    shopId: ScalarsEnums["ID"];
    value: ScalarsEnums["Float"];
  }) => Process;
  productsQuantitySet: (args: {
    filter?: Maybe<ProductFilterInput>;
    operator: BatchOperator;
    quantity: ScalarsEnums["Int"];
    query?: Maybe<ScalarsEnums["String"]>;
    shopId: ScalarsEnums["ID"];
  }) => Process;
  productsReportExport: (args: {
    exportShopIds?: Maybe<Array<ScalarsEnums["ID"]>>;
    shopId: ScalarsEnums["ID"];
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => Process;
  productsSeoExport: (args: {
    filter?: Maybe<ProductFilterInput>;
    query?: Maybe<ScalarsEnums["String"]>;
    shopId: ScalarsEnums["ID"];
  }) => Process;
  productsSeoImport: (args: {
    shopId: ScalarsEnums["ID"];
    url: ScalarsEnums["AWSURL"];
  }) => Process;
  productsUpdateImport: (args: {
    shopId: ScalarsEnums["ID"];
    url: ScalarsEnums["AWSURL"];
  }) => Process;
  /**
   * Update the current user's profile, can be used by both customers and merchants.
   */
  profileUpdate: (args: {
    credential?: Maybe<UserCredentialUpdateInput>;
    input: ProfileUpdateInput;
  }) => UserOrCustomer;
  promotionCodesReportExport: (args: {
    shopId: ScalarsEnums["ID"];
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => Process;
  receiptTemplateCreate: (args: {
    input: ShopReceiptTemplateCreateInput;
  }) => ShopReceiptTemplate;
  receiptTemplateDelete: (args: {
    id: ScalarsEnums["ID"];
  }) => ShopReceiptTemplate;
  receiptTemplateUpdate: (args: {
    id: ScalarsEnums["ID"];
    input: ShopReceiptTemplateUpdateInput;
  }) => ShopReceiptTemplate;
  receivePurchaseCancel: (args: {
    id: ScalarsEnums["ID"];
  }) => CompanyReceivePurchase;
  receivePurchaseComplete: (args: {
    id: ScalarsEnums["ID"];
  }) => CompanyReceivePurchase;
  receivePurchaseCreate: (args: {
    input: ReceivePurchaseCreateInput;
  }) => CompanyReceivePurchase;
  receivePurchaseExport: (args: {
    filter?: Maybe<ReceivePurchaseFilterInput>;
    shopId: ScalarsEnums["ID"];
  }) => Process;
  receivePurchaseImport: (args: {
    id: ScalarsEnums["ID"];
    shopId: ScalarsEnums["ID"];
    url: ScalarsEnums["AWSURL"];
  }) => Process;
  receivePurchaseUpdate: (args: {
    id: ScalarsEnums["ID"];
    input: ReceivePurchaseUpdateInput;
  }) => CompanyReceivePurchase;
  receivePurchaseVoid: (args: {
    id: ScalarsEnums["ID"];
  }) => CompanyReceivePurchase;
  returnNoteApprove: (args: { id: ScalarsEnums["ID"] }) => ShopReturnNote;
  returnNoteCancel: (args: { id: ScalarsEnums["ID"] }) => ShopReturnNote;
  returnNoteComplete: (args: { id: ScalarsEnums["ID"] }) => ShopReturnNote;
  /**
   * POS will create and complete automatically.
   */
  returnNoteCreate: (args: { input: ReturnNoteCreateInput }) => ShopReturnNote;
  returnNoteReject: (args: { id: ScalarsEnums["ID"] }) => ShopReturnNote;
  returnNoteUpdate: (args: {
    id: ScalarsEnums["ID"];
    input: ReturnNoteUpdateInput;
  }) => ShopReturnNote;
  returnNotesExport: (args: {
    filter?: Maybe<ReturnNoteFilterInput>;
    shopId: ScalarsEnums["ID"];
  }) => Process;
  serviceBundleCreate: (args: {
    input: ServiceBundleCreateInput;
  }) => ShopServiceBundle;
  serviceBundleDelete: (args: { id: ScalarsEnums["ID"] }) => ShopServiceBundle;
  serviceBundleUpdate: (args: {
    id: ScalarsEnums["ID"];
    input: ServiceBundleUpdateInput;
  }) => ShopServiceBundle;
  serviceLocationCreate: (args: {
    input: ServiceLocationCreateInput;
  }) => ShopServiceLocation;
  serviceLocationDelete: (args: {
    id: ScalarsEnums["ID"];
  }) => ShopServiceLocation;
  serviceLocationRuleCreate: (args: {
    input: ServiceLocationRuleCreateInput;
  }) => ServiceLocationRule;
  serviceLocationRuleDelete: (args: {
    id: ScalarsEnums["ID"];
  }) => ServiceLocationRule;
  serviceLocationRuleUpdate: (args: {
    id: ScalarsEnums["ID"];
    input: ServiceLocationRuleUpdateInput;
  }) => ServiceLocationRule;
  serviceLocationUpdate: (args: {
    id: ScalarsEnums["ID"];
    input: ServiceLocationUpdateInput;
  }) => ShopServiceLocation;
  /**
   * @deprecated Use sessionStart for a more detailed response of session tokens.
   */
  sessionCreate: (args: {
    email?: Maybe<ScalarsEnums["AWSEmail"]>;
    password: ScalarsEnums["String"];
    username?: Maybe<ScalarsEnums["String"]>;
  }) => ScalarsEnums["String"];
  sessionRefresh: (args: {
    refreshToken: ScalarsEnums["String"];
    shopId?: Maybe<ScalarsEnums["ID"]>;
  }) => SessionToken;
  sessionStart: (args: {
    email?: Maybe<ScalarsEnums["AWSEmail"]>;
    mobile?: Maybe<ScalarsEnums["AWSPhone"]>;
    mobileV2?: Maybe<ScalarsEnums["String"]>;
    oneSignalPlayerId?: Maybe<ScalarsEnums["ID"]>;
    password: ScalarsEnums["String"];
  }) => SessionToken;
  shippingZonesDelete: (args: {
    filter?: Maybe<ShopShippingZoneFilterInput>;
    query?: Maybe<ScalarsEnums["String"]>;
    shopId: ScalarsEnums["ID"];
  }) => Maybe<Process>;
  /**
   * @deprecated Change to single address
   */
  shopAddressSet: (args: {
    id?: Maybe<ScalarsEnums["ID"]>;
    input: ShopAddressInput;
  }) => ShopAddress;
  /**
   * @deprecated Change to single address
   */
  shopAddressUnset: (args: { id: ScalarsEnums["ID"] }) => ShopAddress;
  shopAnalysisToolSet: (args: {
    id?: Maybe<ScalarsEnums["ID"]>;
    input: AnalysisToolInput;
  }) => ShopAnalysisTool;
  shopAnalysisToolUnset: (args: { id: ScalarsEnums["ID"] }) => ShopAnalysisTool;
  shopAttributeCreate: (args: {
    input: ShopAttributeCreateInput;
  }) => ShopAttribute;
  shopAttributeDelete: (args: { id: ScalarsEnums["ID"] }) => ShopAttribute;
  shopAttributeUpdate: (args: {
    id: ScalarsEnums["ID"];
    input: ShopAttributeUpdateInput;
  }) => ShopAttribute;
  shopContactEmailResendVerify: (args: {
    id: ScalarsEnums["ID"];
  }) => ScalarsEnums["Boolean"];
  shopContactEmailVerify: (args: {
    token: ScalarsEnums["String"];
  }) => CompanyShop;
  /**
   * @deprecated Use `credentialUnset` instead.
   */
  shopCredentialUnset: (args: { id: ScalarsEnums["ID"] }) => ShopCredential;
  shopDeviceCreate: (args: { input: ShopDeviceCreateInput }) => ShopDevice;
  shopDeviceDelete: (args: { id: ScalarsEnums["ID"] }) => ShopDevice;
  shopDeviceMetricsCreate: (args: {
    input: ShopDeviceMetricCreateInput;
    shopId?: Maybe<ScalarsEnums["ID"]>;
  }) => ShopDeviceMetric;
  shopDeviceOneSignalAuth: ScalarsEnums["Boolean"];
  /**
   * Admin update configs to device.
   */
  shopDeviceUpdate: (args: {
    id?: Maybe<ScalarsEnums["ID"]>;
    input: ShopDeviceUpdateInput;
  }) => ShopDevice;
  shopEmailSend: (args: {
    input: ShopEmailSendInput;
  }) => ScalarsEnums["Boolean"];
  shopFormCreate: (args: { input: ShopFormCreateInput }) => ShopForm;
  shopFormDelete: (args: { id: ScalarsEnums["ID"] }) => ShopForm;
  shopFormRecordApprove: (args: { id: ScalarsEnums["ID"] }) => ShopFormRecord;
  shopFormRecordReject: (args: { id: ScalarsEnums["ID"] }) => ShopFormRecord;
  shopFormRecordUpdate: (args: {
    fields: Array<MetadataInput>;
    id: ScalarsEnums["ID"];
  }) => ShopFormRecord;
  shopFormRecordsExport: (args: {
    id: ScalarsEnums["ID"];
    query?: Maybe<ScalarsEnums["String"]>;
    timezone?: Maybe<ScalarsEnums["String"]>;
  }) => Process;
  shopFormSubmit: (args: {
    fields: Array<MetadataInput>;
    id: ScalarsEnums["ID"];
  }) => ShopFormRecord;
  shopFormUpdate: (args: {
    id: ScalarsEnums["ID"];
    input: ShopFormUpdateInput;
  }) => ShopForm;
  shopMarqueeSet: (args: {
    id?: Maybe<ScalarsEnums["ID"]>;
    input: ShopMarqueeInput;
  }) => ShopMarquee;
  shopMarqueeUnset: (args: { id: ScalarsEnums["ID"] }) => ShopMarquee;
  shopPopupCreate: (args: { input: ShopPopupCreateInput }) => ShopPopup;
  shopPopupDelete: (args: { id: ScalarsEnums["ID"] }) => ShopPopup;
  shopPopupUpdate: (args: {
    id: ScalarsEnums["ID"];
    input: ShopPopupUpdateInput;
  }) => ShopPopup;
  shopReferenceNoFormatCreate: (args: {
    input: ShopReferenceNoFormatCreateInput;
  }) => ShopReferenceNoFormat;
  shopReferenceNoFormatDelete: (args: {
    id: ScalarsEnums["ID"];
  }) => ShopReferenceNoFormat;
  shopReferenceNoFormatUpdate: (args: {
    id: ScalarsEnums["ID"];
    input: ShopReferenceNoFormatUpdateInput;
  }) => ShopReferenceNoFormat;
  /**
   * @deprecated Use shippingZonesDelete instead.
   */
  shopShippingZoneBulkAction: (args: {
    action: ShopShippingZoneBulkAction;
    data?: Maybe<ScalarsEnums["String"]>;
    filter: ShopShippingZoneFilterInput;
    shopId: ScalarsEnums["ID"];
  }) => Maybe<ScalarsEnums["Boolean"]>;
  shopShippingZoneSet: (args: {
    id?: Maybe<ScalarsEnums["ID"]>;
    input: ShopShippingZoneInput;
  }) => ShopShippingZone;
  shopShippingZoneUnset: (args: { id: ScalarsEnums["ID"] }) => ShopShippingZone;
  shopTaxZoneSet: (args: {
    id?: Maybe<ScalarsEnums["ID"]>;
    input: ShopTaxZoneInput;
  }) => ShopTaxZone;
  shopTaxZoneUnset: (args: { id: ScalarsEnums["ID"] }) => ShopTaxZone;
  shopWarehousesAdd: (args: {
    shopId: ScalarsEnums["ID"];
    warehouseIds: Array<ScalarsEnums["ID"]>;
  }) => CompanyShop;
  shopWarehousesRemove: (args: {
    shopId: ScalarsEnums["ID"];
    warehouseIds: Array<ScalarsEnums["ID"]>;
  }) => CompanyShop;
  shopsReportExport: (args: {
    shopId: ScalarsEnums["ID"];
    startedAt: ScalarsEnums["AWSDateTime"];
    startedThru: ScalarsEnums["AWSDateTime"];
  }) => Process;
  sitemapActivate: (args: { id: ScalarsEnums["ID"] }) => ShopSitemap;
  sitemapCreate: (args: { input: ShopSitemapInput }) => ShopSitemap;
  sitemapDelete: (args: { id: ScalarsEnums["ID"] }) => ShopSitemap;
  staffActivate: (args: { id: ScalarsEnums["ID"] }) => CompanyStaff;
  staffCreate: (args: { input: CompanyStaffCreateInput }) => CompanyStaff;
  staffDeactivate: (args: { id: ScalarsEnums["ID"] }) => CompanyStaff;
  staffDelete: (args: { id: ScalarsEnums["ID"] }) => CompanyStaff;
  staffUpdate: (args: {
    id: ScalarsEnums["ID"];
    input: CompanyStaffUpdateInput;
  }) => CompanyStaff;
  stockAdjustmentCancel: (args: {
    id: ScalarsEnums["ID"];
  }) => CompanyStockAdjustment;
  stockAdjustmentComplete: (args: {
    id: ScalarsEnums["ID"];
  }) => CompanyStockAdjustment;
  stockAdjustmentCreate: (args: {
    input: StockAdjustmentCreateInput;
  }) => CompanyStockAdjustment;
  stockAdjustmentExport: (args: {
    filter?: Maybe<StockAdjustmentFilterInput>;
    shopId: ScalarsEnums["ID"];
  }) => Process;
  stockAdjustmentImport: (args: {
    id: ScalarsEnums["ID"];
    shopId: ScalarsEnums["ID"];
    url: ScalarsEnums["AWSURL"];
  }) => Process;
  stockAdjustmentUpdate: (args: {
    id: ScalarsEnums["ID"];
    input: StockAdjustmentUpdateInput;
  }) => CompanyStockAdjustment;
  stockAdjustmentVoid: (args: {
    id: ScalarsEnums["ID"];
  }) => CompanyStockAdjustment;
  stockTransferComplete: (args: {
    id: ScalarsEnums["ID"];
    items?: Maybe<Array<TransferItemInput>>;
  }) => CompanyStockTransfer;
  stockTransferCreate: (args: {
    input: StockTransferCreateInput;
    status?: Maybe<CompanyStockTransferStatus>;
  }) => CompanyStockTransfer;
  stockTransferExport: (args: {
    filter?: Maybe<StockTransferFilterInput>;
    shopId: ScalarsEnums["ID"];
  }) => Process;
  stockTransferImport: (args: {
    id: ScalarsEnums["ID"];
    shopId: ScalarsEnums["ID"];
    url: ScalarsEnums["AWSURL"];
  }) => Process;
  stockTransferSend: (args: { id: ScalarsEnums["ID"] }) => CompanyStockTransfer;
  stockTransferUpdate: (args: {
    id: ScalarsEnums["ID"];
    input: StockTransferUpdateInput;
  }) => CompanyStockTransfer;
  stockTransferVoid: (args: { id: ScalarsEnums["ID"] }) => CompanyStockTransfer;
  stocktakeCancel: (args: { id: ScalarsEnums["ID"] }) => CompanyStocktake;
  stocktakeComplete: (args: {
    id: ScalarsEnums["ID"];
    replace?: Maybe<ScalarsEnums["Boolean"]>;
    shopId: ScalarsEnums["ID"];
  }) => Process;
  stocktakeExport: (args: {
    shopId: ScalarsEnums["ID"];
    warehouseId: ScalarsEnums["ID"];
  }) => Process;
  stocktakeExportV2: (args: {
    id: ScalarsEnums["ID"];
    shopId: ScalarsEnums["ID"];
  }) => Process;
  stocktakeImport: (args: {
    id: ScalarsEnums["ID"];
    url: ScalarsEnums["AWSURL"];
  }) => CompanyStocktake;
  stocktakeImportV2: (args: {
    id: ScalarsEnums["ID"];
    shopId: ScalarsEnums["ID"];
    url: ScalarsEnums["AWSURL"];
  }) => Process;
  stocktakeItemsSet: (args: {
    id: ScalarsEnums["ID"];
    input: Array<StocktakeItemInput>;
  }) => CompanyStocktake;
  stocktakeSet: (args: {
    id?: Maybe<ScalarsEnums["ID"]>;
    input: StocktakeInput;
  }) => CompanyStocktake;
  tableCreate: (args: { input: TableCreateInput }) => ShopTable;
  tableDelete: (args: { id: ScalarsEnums["ID"] }) => ShopTable;
  tableUpdate: (args: {
    id: ScalarsEnums["ID"];
    input: TableUpdateInput;
  }) => ShopTable;
  userAddressSet: (args: {
    id?: Maybe<ScalarsEnums["ID"]>;
    input: UserAddressInput;
    userId: ScalarsEnums["ID"];
  }) => UserAddress;
  userAddressUnset: (args: { id: ScalarsEnums["ID"] }) => UserAddress;
  /**
   * Block a secondary user in a company.
   */
  userBlock: (args: {
    companyId: ScalarsEnums["ID"];
    id: ScalarsEnums["ID"];
  }) => User;
  userCouponsExport: (args: {
    filter?: Maybe<UserCouponExportFilterInput>;
    shopId: ScalarsEnums["ID"];
    timezone?: Maybe<ScalarsEnums["String"]>;
  }) => Process;
  userCouponsGenerate: (args: {
    count: ScalarsEnums["Int"];
    id: ScalarsEnums["ID"];
  }) => CompanyCoupon;
  userCouponsImport: (args: {
    id: ScalarsEnums["ID"];
    shopId: ScalarsEnums["ID"];
    url: ScalarsEnums["AWSURL"];
  }) => Process;
  /**
   * Create a new secondary user in the specified company.
   */
  userCreate: (args: {
    companyId: ScalarsEnums["ID"];
    credential: UserCredentialInput;
    input: UserCreateInput;
  }) => User;
  /**
   * Delete a secondary user in a company.
   */
  userDelete: (args: {
    companyId: ScalarsEnums["ID"];
    id: ScalarsEnums["ID"];
  }) => User;
  /**
   * Reqeust a password resetting token to be sent.
   */
  userForgotPassword: (args?: {
    email?: Maybe<ScalarsEnums["AWSEmail"]>;
    mobile?: Maybe<ScalarsEnums["AWSPhone"]>;
    mobileV2?: Maybe<ScalarsEnums["String"]>;
    shopId?: Maybe<ScalarsEnums["ID"]>;
  }) => Maybe<ScalarsEnums["Boolean"]>;
  userMemberTierSet: (args: {
    customerId: ScalarsEnums["ID"];
    input: UserMemberTierSetInput;
  }) => Maybe<CompanyMemberTier>;
  /**
   * Creates a new user with specified credentials. When invoking with an active
   *  session, user can at most assign his own groups; If omitted then the user
   *  created will inherit the default group setting from Shop.
   */
  userRegister: (args: {
    credential: UserCredentialInput;
    fingerPrint?: Maybe<ScalarsEnums["String"]>;
    shop?: Maybe<UserRegisterShopInput>;
    user?: Maybe<UserRegisterUserInput>;
  }) => User;
  /**
   * Request a new OTP code for verification, this invalidates all previous OTP.
   */
  userResendVerification: (args?: {
    email?: Maybe<ScalarsEnums["AWSEmail"]>;
    mobile?: Maybe<ScalarsEnums["AWSPhone"]>;
    mobileV2?: Maybe<ScalarsEnums["String"]>;
  }) => ScalarsEnums["Boolean"];
  /**
   * Resets a password with a reset token sent previously.
   */
  userResetPassword: (args: {
    key: ScalarsEnums["String"];
    password: ScalarsEnums["String"];
  }) => Maybe<ScalarsEnums["Boolean"]>;
  /**
   * Unblock a secondary user in a company.
   */
  userUnblock: (args: {
    companyId: ScalarsEnums["ID"];
    id: ScalarsEnums["ID"];
  }) => User;
  /**
   * Update an existing secondary user in a company.
   */
  userUpdate: (args: {
    companyId: ScalarsEnums["ID"];
    credential?: Maybe<UserCredentialUpdateInput>;
    id: ScalarsEnums["ID"];
    input: UserUpdateInput;
  }) => User;
  /**
   * Verifies a user with an OTP sent previously.
   */
  userVerify: (args: { token: ScalarsEnums["String"] }) => User;
  venueCreate: (args: { input: VenueCreateInput }) => ShopVenue;
  venueDelete: (args: { id: ScalarsEnums["ID"] }) => ShopVenue;
  venueTablesCleanUp: (args: { id: ScalarsEnums["ID"] }) => ShopVenue;
  venueUpdate: (args: {
    id: ScalarsEnums["ID"];
    input: VenueUpdateInput;
  }) => ShopVenue;
  warehouseSet: (args: {
    id?: Maybe<ScalarsEnums["ID"]>;
    input: WarehouseSetInput;
  }) => CompanyWarehouse;
  warehouseUnset: (args: { id: ScalarsEnums["ID"] }) => CompanyWarehouse;
  /**
   * Triggers a ping to the Webhook URI, this webhook is set to active on a
   *  successful ping.
   */
  webhookActivate: (args: { id: ScalarsEnums["ID"] }) => Webhook;
  /**
   * Stop the webhook from sending further events.
   */
  webhookDeactivate: (args: { id: ScalarsEnums["ID"] }) => Webhook;
  wishItemSet: (args: {
    id?: Maybe<ScalarsEnums["ID"]>;
    input: WishItemSetInput;
  }) => WishItem;
  wishItemUnset: (args: { id: ScalarsEnums["ID"] }) => WishItem;
  wishlistSet: (args: {
    id?: Maybe<ScalarsEnums["ID"]>;
    input: WishlistSetInput;
  }) => Wishlist;
  wishlistUnset: (args: { id: ScalarsEnums["ID"] }) => Wishlist;
}

export interface Query {
  __typename?: "Query";
  apiVersion?: Maybe<ScalarsEnums["String"]>;
  /**
   * Query current app version (semver) with specific bundle ID.
   */
  appVersion: (args: {
    bundleId: ScalarsEnums["ID"];
  }) => Maybe<ScalarsEnums["String"]>;
  /**
   * Current authenticated user from the provided JSON Web Token issued by auth0.
   */
  me?: Maybe<Me>;
  node: (args: {
    handle?: Maybe<ScalarsEnums["String"]>;
    id: ScalarsEnums["ID"];
  }) => Maybe<Node>;
  /**
   * Fallback point for process polling, clients should use the subscription
   *  `processUpdate` when possible.
   */
  process: (args: { id: ScalarsEnums["ID"] }) => Maybe<Process>;
  shopByHostname: (args?: {
    acceptLanguage?: Maybe<ScalarsEnums["String"]>;
    hostname?: Maybe<ScalarsEnums["String"]>;
  }) => Maybe<CompanyShop>;
  /**
   * Generate a pre-signed URL for S3 upload.
   */
  uploadUrl: (args: { input: UploadUrlInput }) => ScalarsEnums["AWSURL"];
}

export interface Subscription {
  __typename?: "Subscription";
  channelMessageUpdate: (args?: {
    channelId?: Maybe<ScalarsEnums["ID"]>;
    shopId?: Maybe<ScalarsEnums["ID"]>;
  }) => Maybe<ChannelMessage>;
  channelUpdate: (args?: {
    code?: Maybe<ScalarsEnums["String"]>;
    shopId?: Maybe<ScalarsEnums["ID"]>;
  }) => Maybe<Channel>;
  checkoutUpdate?: Maybe<ShopCheckout>;
  processUpdate: (args: { id: ScalarsEnums["ID"] }) => Process;
}

export interface $Connection {
  AgencyServiceConnection?: AgencyServiceConnection;
  AttendanceConnection?: AttendanceConnection;
  CampaignConnection?: CampaignConnection;
  CampaignRecipientConnection?: CampaignRecipientConnection;
  ChannelConnection?: ChannelConnection;
  ChannelMessageConnection?: ChannelMessageConnection;
  CheckoutCashVoucherConnection?: CheckoutCashVoucherConnection;
  CheckoutItemConnection?: CheckoutItemConnection;
  CollectionConnection?: CollectionConnection;
  CollectionSalesConnection?: CollectionSalesConnection;
  CompanyCashVoucherCodeConnection?: CompanyCashVoucherCodeConnection;
  CompanyCashVoucherConnection?: CompanyCashVoucherConnection;
  CompanyConnection?: CompanyConnection;
  CompanyCouponConnection?: CompanyCouponConnection;
  CompanyDiscountConnection?: CompanyDiscountConnection;
  CompanyMemberTierConnection?: CompanyMemberTierConnection;
  CompanyReceivePurchaseConnection?: CompanyReceivePurchaseConnection;
  CompanyReceivePurchaseItemConnection?: CompanyReceivePurchaseItemConnection;
  CompanyStaffConnection?: CompanyStaffConnection;
  CompanyStockAdjustmentConnection?: CompanyStockAdjustmentConnection;
  CompanyStockTransferConnection?: CompanyStockTransferConnection;
  CompanyStocktakeConnection?: CompanyStocktakeConnection;
  CompanyStocktakeItemConnection?: CompanyStocktakeItemConnection;
  CouponSalesConnection?: CouponSalesConnection;
  CouponSalesRecordConnection?: CouponSalesRecordConnection;
  CreditNoteConnection?: CreditNoteConnection;
  CustomerAddressConnection?: CustomerAddressConnection;
  CustomerConnection?: CustomerConnection;
  DeliveryNoteConnection?: DeliveryNoteConnection;
  DiscountSalesConnection?: DiscountSalesConnection;
  GiftPointAdjustmentConnection?: GiftPointAdjustmentConnection;
  HonorProductSerialConnection?: HonorProductSerialConnection;
  IngredientConnection?: IngredientConnection;
  InventoryReportDataConnection?: InventoryReportDataConnection;
  InvoiceConnection?: InvoiceConnection;
  MemberTierSalesConnection?: MemberTierSalesConnection;
  MemberTierSalesRecordConnection?: MemberTierSalesRecordConnection;
  NewsletterSubscriptionConnection?: NewsletterSubscriptionConnection;
  OrderActivityConnection?: OrderActivityConnection;
  OrderAddOnProductConnection?: OrderAddOnProductConnection;
  OrderConnection?: OrderConnection;
  OrderItemConnection?: OrderItemConnection;
  PageConnection?: PageConnection;
  PaymentMethodConnection?: PaymentMethodConnection;
  PaymentSourceConnection?: PaymentSourceConnection;
  ProductConnection?: ProductConnection;
  ProductSalesConnection?: ProductSalesConnection;
  ProductSalesRecordConnection?: ProductSalesRecordConnection;
  ProductUnionConnection?: ProductUnionConnection;
  ReturnNoteItemConnection?: ReturnNoteItemConnection;
  SalespersonSalesConnection?: SalespersonSalesConnection;
  SalespersonSalesRecordConnection?: SalespersonSalesRecordConnection;
  ServiceApplicationConnection?: ServiceApplicationConnection;
  ServiceLocationRuleConnection?: ServiceLocationRuleConnection;
  ServiceLocationSlotConnection?: ServiceLocationSlotConnection;
  ServiceSlotConnection?: ServiceSlotConnection;
  ShippingZoneAddressConnection?: ShippingZoneAddressConnection;
  ShopAddOnProductConnection?: ShopAddOnProductConnection;
  ShopAnalysisToolConnection?: ShopAnalysisToolConnection;
  ShopAppointmentConnection?: ShopAppointmentConnection;
  ShopAttributeConnection?: ShopAttributeConnection;
  ShopBundleProductConnection?: ShopBundleProductConnection;
  ShopCashFlowConnection?: ShopCashFlowConnection;
  ShopCheckoutConnection?: ShopCheckoutConnection;
  ShopConnection?: ShopConnection;
  ShopContactEmailConnection?: ShopContactEmailConnection;
  ShopDeviceConnection?: ShopDeviceConnection;
  ShopDeviceMetricConnection?: ShopDeviceMetricConnection;
  ShopEmailTemplateConnection?: ShopEmailTemplateConnection;
  ShopFormConnection?: ShopFormConnection;
  ShopFormRecordConnection?: ShopFormRecordConnection;
  ShopMarqueeConnection?: ShopMarqueeConnection;
  ShopNavigationTemplateConnection?: ShopNavigationTemplateConnection;
  ShopPopupConnection?: ShopPopupConnection;
  ShopProductModifierConnection?: ShopProductModifierConnection;
  ShopReceiptTemplateConnection?: ShopReceiptTemplateConnection;
  ShopReferenceNoFormatConnection?: ShopReferenceNoFormatConnection;
  ShopReturnNoteConnection?: ShopReturnNoteConnection;
  ShopSalesConnection?: ShopSalesConnection;
  ShopServiceBundleConnection?: ShopServiceBundleConnection;
  ShopServiceConnection?: ShopServiceConnection;
  ShopServiceLocationConnection?: ShopServiceLocationConnection;
  ShopShippingZoneConnection?: ShopShippingZoneConnection;
  ShopSitemapConnection?: ShopSitemapConnection;
  ShopTableConnection?: ShopTableConnection;
  ShopTaxZoneConnection?: ShopTaxZoneConnection;
  ShopVenueConnection?: ShopVenueConnection;
  StockAdjustmentItemConnection?: StockAdjustmentItemConnection;
  StockMovementConnection?: StockMovementConnection;
  StockTransferItemConnection?: StockTransferItemConnection;
  UserAddressConnection?: UserAddressConnection;
  UserConnection?: UserConnection;
  UserCouponConnection?: UserCouponConnection;
  VariationConnection?: VariationConnection;
  VariationSalesConnection?: VariationSalesConnection;
  VariationStockConnection?: VariationStockConnection;
  WarehouseConnection?: WarehouseConnection;
  WishItemConnection?: WishItemConnection;
  WishlistConnection?: WishlistConnection;
}

export interface $Me {
  Customer?: Customer;
  User?: User;
}

export interface $Node {
  AgencyService?: AgencyService;
  AgencyServiceApplication?: AgencyServiceApplication;
  ApplicationComment?: ApplicationComment;
  CampaignAction?: CampaignAction;
  CampaignRecipient?: CampaignRecipient;
  Channel?: Channel;
  ChannelMessage?: ChannelMessage;
  CheckoutCashVoucher?: CheckoutCashVoucher;
  CheckoutItem?: CheckoutItem;
  Company?: Company;
  CompanyCashVoucher?: CompanyCashVoucher;
  CompanyCoupon?: CompanyCoupon;
  CompanyDiscount?: CompanyDiscount;
  CompanyMemberTier?: CompanyMemberTier;
  CompanyReceivePurchase?: CompanyReceivePurchase;
  CompanyReceivePurchaseItem?: CompanyReceivePurchaseItem;
  CompanyShop?: CompanyShop;
  CompanyStaff?: CompanyStaff;
  CompanyStockAdjustment?: CompanyStockAdjustment;
  CompanyStockTransfer?: CompanyStockTransfer;
  CompanyStocktake?: CompanyStocktake;
  CompanyStocktakeItem?: CompanyStocktakeItem;
  CompanyWarehouse?: CompanyWarehouse;
  Customer?: Customer;
  CustomerAddress?: CustomerAddress;
  DeliveryNoteItem?: DeliveryNoteItem;
  GiftPointAdjustment?: GiftPointAdjustment;
  HonorProductSerial?: HonorProductSerial;
  Ingredient?: Ingredient;
  InvoiceCreditNote?: InvoiceCreditNote;
  NewsletterSubscription?: NewsletterSubscription;
  OrderActivity?: OrderActivity;
  OrderAddOnProduct?: OrderAddOnProduct;
  OrderComment?: OrderComment;
  OrderDeliveryNote?: OrderDeliveryNote;
  OrderInvoice?: OrderInvoice;
  OrderItem?: OrderItem;
  PaymentMethod?: PaymentMethod;
  PaymentSource?: PaymentSource;
  ProductVariation?: ProductVariation;
  ReturnNoteItem?: ReturnNoteItem;
  ServiceLocationRule?: ServiceLocationRule;
  ShippingZoneAddress?: ShippingZoneAddress;
  ShopAddOnProduct?: ShopAddOnProduct;
  ShopAddress?: ShopAddress;
  ShopAnalysisTool?: ShopAnalysisTool;
  ShopAppointment?: ShopAppointment;
  ShopAttendance?: ShopAttendance;
  ShopAttribute?: ShopAttribute;
  ShopBundleProduct?: ShopBundleProduct;
  ShopBundleProductOption?: ShopBundleProductOption;
  ShopCampaign?: ShopCampaign;
  ShopCashFlow?: ShopCashFlow;
  ShopCheckout?: ShopCheckout;
  ShopCollection?: ShopCollection;
  ShopContactEmail?: ShopContactEmail;
  ShopCredential?: ShopCredential;
  ShopDevice?: ShopDevice;
  ShopEmailTemplate?: ShopEmailTemplate;
  ShopForm?: ShopForm;
  ShopFormRecord?: ShopFormRecord;
  ShopMarquee?: ShopMarquee;
  ShopNavigationTemplate?: ShopNavigationTemplate;
  ShopOrder?: ShopOrder;
  ShopPage?: ShopPage;
  ShopPopup?: ShopPopup;
  ShopProduct?: ShopProduct;
  ShopProductModifier?: ShopProductModifier;
  ShopReceiptTemplate?: ShopReceiptTemplate;
  ShopReferenceNoFormat?: ShopReferenceNoFormat;
  ShopReturnNote?: ShopReturnNote;
  ShopService?: ShopService;
  ShopServiceBundle?: ShopServiceBundle;
  ShopServiceLocation?: ShopServiceLocation;
  ShopShippingZone?: ShopShippingZone;
  ShopSitemap?: ShopSitemap;
  ShopTable?: ShopTable;
  ShopTaxZone?: ShopTaxZone;
  ShopVenue?: ShopVenue;
  StockAdjustmentItem?: StockAdjustmentItem;
  StockMovement?: StockMovement;
  StockTransferItem?: StockTransferItem;
  User?: User;
  UserAddress?: UserAddress;
  UserCard?: UserCard;
  UserCoupon?: UserCoupon;
  Webhook?: Webhook;
  WishItem?: WishItem;
  Wishlist?: Wishlist;
}

export interface $ProductUnion {
  ShopBundleProduct?: ShopBundleProduct;
  ShopProduct?: ShopProduct;
  ShopServiceBundle?: ShopServiceBundle;
}

export interface $UserOrCustomer {
  Customer?: Customer;
  User?: User;
}

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type ScalarsEnums = {
  [Key in keyof Scalars]: Scalars[Key] extends { output: unknown }
    ? Scalars[Key]["output"]
    : never;
} & {
  AccountHolderType: AccountHolderType;
  AddOnProductType: AddOnProductType;
  ApplicationStatus: ApplicationStatus;
  AppointmentAttendanceStatus: AppointmentAttendanceStatus;
  AppointmentStatus: AppointmentStatus;
  AttendanceDirection: AttendanceDirection;
  AttributeFilterOperator: AttributeFilterOperator;
  BatchAssignmentOperator: BatchAssignmentOperator;
  BatchOperator: BatchOperator;
  CampaignActionType: CampaignActionType;
  CampaignMatchMode: CampaignMatchMode;
  CampaignRecipientActionStatus: CampaignRecipientActionStatus;
  CampaignRecipientStatus: CampaignRecipientStatus;
  CashVoucherCodeStatus: CashVoucherCodeStatus;
  ChannelMessageType: ChannelMessageType;
  ChannelType: ChannelType;
  CheckoutItemSetOperator: CheckoutItemSetOperator;
  CheckoutRoundingStrategy: CheckoutRoundingStrategy;
  CheckoutStatus: CheckoutStatus;
  CollectionBulkAction: CollectionBulkAction;
  CompanyMemberMetadataFieldType: CompanyMemberMetadataFieldType;
  CompanyReceivePurchaseStatus: CompanyReceivePurchaseStatus;
  CompanyStockTransferStatus: CompanyStockTransferStatus;
  CompanyStocktakeStatus: CompanyStocktakeStatus;
  CompanyWarehouseTypes: CompanyWarehouseTypes;
  Country: Country;
  CouponActionType: CouponActionType;
  CouponActionValueType: CouponActionValueType;
  CouponApplyCode: CouponApplyCode;
  CouponTriggerType: CouponTriggerType;
  CouponTriggerValueType: CouponTriggerValueType;
  Currency: Currency;
  DeliveryNoteStatus: DeliveryNoteStatus;
  DiscountActionType: DiscountActionType;
  DiscountActionValueType: DiscountActionValueType;
  DiscountTriggerType: DiscountTriggerType;
  DiscountTriggerValueType: DiscountTriggerValueType;
  ExpiryDateTypes: ExpiryDateTypes;
  FilterOperator: FilterOperator;
  GiftPointDirection: GiftPointDirection;
  GiftPointStatus: GiftPointStatus;
  InvoiceCreditNoteStatus: InvoiceCreditNoteStatus;
  InvoiceRefundStatus: InvoiceRefundStatus;
  MediaContentType: MediaContentType;
  MediaFitting: MediaFitting;
  MediaGravity: MediaGravity;
  MemberPointReleasePolicy: MemberPointReleasePolicy;
  NavigationTemplateType: NavigationTemplateType;
  OneTimeTokenStatus: OneTimeTokenStatus;
  OneTimeTokenType: OneTimeTokenType;
  OrderAdjustmentTypes: OrderAdjustmentTypes;
  OrderBulkAction: OrderBulkAction;
  OrderInvoiceStatus: OrderInvoiceStatus;
  PageBulkAction: PageBulkAction;
  PaymentProvider: PaymentProvider;
  ProcessStatus: ProcessStatus;
  ReceiptTemplateType: ReceiptTemplateType;
  ReturnNoteStatus: ReturnNoteStatus;
  SalesChannel: SalesChannel;
  ServiceValidationStrategy: ServiceValidationStrategy;
  ShippingZoneAddressType: ShippingZoneAddressType;
  ShippingZoneProvider: ShippingZoneProvider;
  ShopAttributeType: ShopAttributeType;
  ShopAttributeTypename: ShopAttributeTypename;
  ShopAuthenticationCredentialPlatform: ShopAuthenticationCredentialPlatform;
  ShopBranchType: ShopBranchType;
  ShopCashFlowDirection: ShopCashFlowDirection;
  ShopContactEmailType: ShopContactEmailType;
  ShopCredentialPlatform: ShopCredentialPlatform;
  ShopCredentialType: ShopCredentialType;
  ShopDeviceStatus: ShopDeviceStatus;
  ShopEmailTemplateType: ShopEmailTemplateType;
  ShopFormRecordStatus: ShopFormRecordStatus;
  ShopOrderDeliveryNoteStatus: ShopOrderDeliveryNoteStatus;
  ShopOrderInvoiceStatus: ShopOrderInvoiceStatus;
  ShopOrderKitchenStatus: ShopOrderKitchenStatus;
  ShopOrderStatus: ShopOrderStatus;
  ShopPaymentCredentialPlatform: ShopPaymentCredentialPlatform;
  ShopReferenceNoFormatType: ShopReferenceNoFormatType;
  ShopShippingCredentialPlatform: ShopShippingCredentialPlatform;
  ShopShippingZoneBulkAction: ShopShippingZoneBulkAction;
  SortOrder: SortOrder;
  StaffRole: StaffRole;
  StockAdjustmentStatus: StockAdjustmentStatus;
  StockMovementDirection: StockMovementDirection;
  StockMovementStatus: StockMovementStatus;
  SubscriptionType: SubscriptionType;
  TableShape: TableShape;
  TableStatus: TableStatus;
  UpgradeConditionType: UpgradeConditionType;
  UserCouponStatus: UserCouponStatus;
};
