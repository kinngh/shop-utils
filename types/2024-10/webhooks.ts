// Types for RETURNS_APPROVE
export interface RETURNS_APPROVE {
  id: number;
  admin_graphql_api_id: string;
  status: string;
  order: { id: number; admin_graphql_api_id: string };
  total_return_line_items: number;
  name: null | string;
  return_line_items: {
    id: number;
    admin_graphql_api_id: string;
    fulfillment_line_item: {
      id: number;
      admin_graphql_api_id: string;
      line_item: { id: number; admin_graphql_api_id: string };
    };
    quantity: number;
    return_reason: string;
    return_reason_note: string;
    customer_note: null | string;
    restocking_fee: {
      id: number;
      admin_graphql_api_id: string;
      price: {
        shop_money: { amount: string; currency_code: string };
        presentment_money: { amount: string; currency_code: string };
      };
    };
  }[];
  return_shipping_fees: {
    id: number;
    admin_graphql_api_id: string;
    price: {
      shop_money: { amount: string; currency_code: string };
      presentment_money: { amount: string; currency_code: string };
    };
  }[];
  exchange_line_items: {
    id: number;
    admin_graphql_api_id: string;
    line_item: null | string;
  }[];
  total_exchange_line_items: number;
}

// Types for FULFILLMENT_ORDERS_CANCELLATION_REQUEST_REJECTED
export interface FULFILLMENT_ORDERS_CANCELLATION_REQUEST_REJECTED {
  fulfillment_order: { id: string; status: string; request_status: string };
  message: string;
}

// Types for METAOBJECTS_DELETE
export interface METAOBJECTS_DELETE {
  id: string;
  type: string;
  handle: string;
  created_by_app_id: string;
}

// Types for CUSTOMERS_MERGE
export interface CUSTOMERS_MERGE {
  admin_graphql_api_customer_kept_id: string;
  admin_graphql_api_customer_deleted_id: string;
  admin_graphql_api_job_id: null | string;
  status: string;
  errors: { customer_ids: number[]; field: string; message: string }[];
}

// Types for SUBSCRIPTION_BILLING_ATTEMPTS_CHALLENGED
export interface SUBSCRIPTION_BILLING_ATTEMPTS_CHALLENGED {
  id: null | string;
  admin_graphql_api_id: null | string;
  idempotency_key: string;
  order_id: number;
  admin_graphql_api_order_id: string;
  subscription_contract_id: number;
  admin_graphql_api_subscription_contract_id: string;
  ready: boolean;
  error_message: null | string;
  error_code: null | string;
}

// Types for FULFILLMENT_ORDERS_HOLD_RELEASED
export interface FULFILLMENT_ORDERS_HOLD_RELEASED {
  fulfillment_order: { id: string; status: string };
}

// Types for PAYMENT_TERMS_UPDATE
export interface PAYMENT_TERMS_UPDATE {
  id: number;
  payment_terms_name: string;
  payment_terms_type: string;
  due_in_days: number;
  created_at: string;
  updated_at: string;
  payment_schedules: {
    id: number;
    payment_terms_id: number;
    amount: string;
    currency: string;
    issued_at: string;
    due_at: string;
    completed_at: string;
    created_at: string;
    updated_at: string;
    admin_graphql_api_id: string;
  }[];
  admin_graphql_api_id: string;
}

// Types for FULFILLMENT_ORDERS_FULFILLMENT_SERVICE_FAILED_TO_COMPLETE
export interface FULFILLMENT_ORDERS_FULFILLMENT_SERVICE_FAILED_TO_COMPLETE {
  fulfillment_order: { id: string; status: string };
  message: string;
}

// Types for INVENTORY_LEVELS_DISCONNECT
export interface INVENTORY_LEVELS_DISCONNECT {
  inventory_item_id: number;
  location_id: number;
}

// Types for CHECKOUTS_CREATE
export interface CHECKOUTS_CREATE {
  id: number;
  token: string;
  cart_token: string;
  email: string;
  gateway: null | string;
  buyer_accepts_marketing: boolean;
  created_at: string;
  updated_at: string;
  landing_site: null | string;
  note: null | string;
  note_attributes: any[];
  referring_site: null | string;
  shipping_lines: any[];
  taxes_included: boolean;
  total_weight: number;
  currency: string;
  completed_at: null | string;
  closed_at: null | string;
  user_id: null | string;
  location_id: null | string;
  source_identifier: null | string;
  source_url: null | string;
  device_id: null | string;
  phone: null | string;
  customer_locale: null | string;
  line_items: {
    applied_discounts: any[];
    discount_allocations: any[];
    key: string;
    destination_location_id: number;
    fulfillment_service: string;
    gift_card: boolean;
    grams: number;
    origin_location_id: number;
    presentment_title: string;
    presentment_variant_title: string;
    product_id: number;
    properties: null | string;
    quantity: number;
    requires_shipping: boolean;
    sku: string;
    tax_lines: {
      price: string;
      position: number;
      rate: number;
      title: string;
      source: string;
      zone: string;
      jurisdiction_id: null | string;
      jurisdiction_type: null | string;
      jurisdiction_source: null | string;
      reporting_taxable_amount: null | string;
      reporting_non_taxable_amount: null | string;
      reporting_exempt_amount: null | string;
      reporting_jurisdiction_name: null | string;
      reporting_jurisdiction_type: null | string;
      reporting_jurisdiction_code: null | string;
      tax_api_client_id: null | string;
      tax_calculation_price: string;
      tax_registration_id: null | string;
      compare_at: number;
      channel_liable: boolean;
    }[];
    taxable: boolean;
    title: string;
    variant_id: number;
    variant_title: string;
    variant_price: string;
    vendor: string;
    user_id: null | string;
    unit_price_measurement: {
      measured_type: null | string;
      quantity_value: null | string;
      quantity_unit: null | string;
      reference_value: null | string;
      reference_unit: null | string;
    };
    rank: null | string;
    compare_at_price: null | string;
    line_price: string;
    price: string;
  }[];
  name: string;
  source: null | string;
  abandoned_checkout_url: string;
  discount_codes: any[];
  tax_lines: {
    price: string;
    rate: number;
    title: string;
    channel_liable: boolean;
  }[];
  source_name: string;
  presentment_currency: string;
  buyer_accepts_sms_marketing: boolean;
  sms_marketing_phone: null | string;
  total_discounts: string;
  total_line_items_price: string;
  total_price: string;
  total_tax: string;
  subtotal_price: string;
  total_duties: null | string;
  reservation_token: null | string;
  billing_address: {
    first_name: string;
    address1: string;
    phone: string;
    city: string;
    zip: string;
    province: string;
    country: string;
    last_name: string;
    address2: null | string;
    company: string;
    latitude: null | string;
    longitude: null | string;
    name: string;
    country_code: string;
    province_code: string;
  };
  shipping_address: {
    first_name: string;
    address1: string;
    phone: string;
    city: string;
    zip: string;
    province: string;
    country: string;
    last_name: string;
    address2: null | string;
    company: string;
    latitude: null | string;
    longitude: null | string;
    name: string;
    country_code: string;
    province_code: string;
  };
  customer: {
    id: number;
    email: string;
    created_at: null | string;
    updated_at: null | string;
    first_name: string;
    last_name: string;
    orders_count: number;
    state: string;
    total_spent: string;
    last_order_id: null | string;
    note: null | string;
    verified_email: boolean;
    multipass_identifier: null | string;
    tax_exempt: boolean;
    tags: string;
    last_order_name: null | string;
    currency: string;
    phone: null | string;
    tax_exemptions: any[];
    email_marketing_consent: {
      state: string;
      opt_in_level: null | string;
      consent_updated_at: null | string;
    };
    sms_marketing_consent: null | string;
    admin_graphql_api_id: string;
    default_address: {
      id: null | string;
      customer_id: number;
      first_name: null | string;
      last_name: null | string;
      company: null | string;
      address1: string;
      address2: null | string;
      city: string;
      province: string;
      country: string;
      zip: string;
      phone: string;
      name: string;
      province_code: string;
      country_code: string;
      country_name: string;
      default: boolean;
    };
  };
}

// Types for ORDERS_RISK_ASSESSMENT_CHANGED
export interface ORDERS_RISK_ASSESSMENT_CHANGED {
  provider_id: null | string;
  provider_title: null | string;
  risk_level: string;
  created_at: null | string;
}

// Types for RETURNS_DECLINE
export interface RETURNS_DECLINE {
  id: number;
  admin_graphql_api_id: string;
  status: string;
  decline: { reason: string; note: string };
}

// Types for PRODUCT_FEEDS_FULL_SYNC
export interface PRODUCT_FEEDS_FULL_SYNC {
  metadata: {
    action: string;
    type: string;
    resource: string;
    fullSyncId: string;
    truncatedFields: any[];
    occurred_at: string;
  };
  productFeed: {
    id: string;
    shop_id: string;
    country: string;
    language: string;
  };
  product: {
    id: string;
    title: string;
    description: string;
    onlineStoreUrl: string;
    createdAt: string;
    updatedAt: string;
    isPublished: boolean;
    publishedAt: string;
    productType: string;
    vendor: string;
    handle: string;
    images: {
      edges: {
        node: { id: string; url: string; height: number; width: number };
      }[];
    };
    options: { name: string; values: string[] }[];
    seo: { title: string; description: string };
    tags: string[];
    variants: {
      edges: {
        node: {
          id: string;
          title: string;
          price: { amount: string; currencyCode: string };
          compareAtPrice: null | string;
          sku: string;
          barcode: null | string;
          quantityAvailable: number;
          availableForSale: boolean;
          weight: number;
          weightUnit: string;
          requireShipping: boolean;
          inventoryPolicy: string;
          createdAt: string;
          updatedAt: string;
          image: { id: string; url: string; height: number; width: number };
          selectedOptions: { name: string; value: string }[];
        };
      }[];
    };
  };
  products: null | string;
}

// Types for THEMES_CREATE
export interface THEMES_CREATE {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  role: string;
  theme_store_id: number;
  previewable: boolean;
  processing: boolean;
  admin_graphql_api_id: string;
}

// Types for ORDERS_PAID
export interface ORDERS_PAID {
  id: number;
  admin_graphql_api_id: string;
  app_id: null | string;
  browser_ip: null | string;
  buyer_accepts_marketing: boolean;
  cancel_reason: string;
  cancelled_at: string;
  cart_token: null | string;
  checkout_id: null | string;
  checkout_token: null | string;
  client_details: null | string;
  closed_at: null | string;
  confirmation_number: null | string;
  confirmed: boolean;
  contact_email: string;
  created_at: string;
  currency: string;
  current_shipping_price_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  current_subtotal_price: string;
  current_subtotal_price_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  current_total_additional_fees_set: null | string;
  current_total_discounts: string;
  current_total_discounts_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  current_total_duties_set: null | string;
  current_total_price: string;
  current_total_price_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  current_total_tax: string;
  current_total_tax_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  customer_locale: string;
  device_id: null | string;
  discount_codes: any[];
  email: string;
  estimated_taxes: boolean;
  financial_status: string;
  fulfillment_status: string;
  landing_site: null | string;
  landing_site_ref: null | string;
  location_id: null | string;
  merchant_business_entity_id: string;
  merchant_of_record_app_id: null | string;
  name: string;
  note: null | string;
  note_attributes: any[];
  number: number;
  order_number: number;
  order_status_url: string;
  original_total_additional_fees_set: null | string;
  original_total_duties_set: null | string;
  payment_gateway_names: string[];
  phone: null | string;
  po_number: null | string;
  presentment_currency: string;
  processed_at: string;
  reference: null | string;
  referring_site: null | string;
  source_identifier: null | string;
  source_name: string;
  source_url: null | string;
  subtotal_price: string;
  subtotal_price_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  tags: string;
  tax_exempt: boolean;
  tax_lines: any[];
  taxes_included: boolean;
  test: boolean;
  token: string;
  total_cash_rounding_payment_adjustment_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  total_cash_rounding_refund_adjustment_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  total_discounts: string;
  total_discounts_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  total_line_items_price: string;
  total_line_items_price_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  total_outstanding: string;
  total_price: string;
  total_price_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  total_shipping_price_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  total_tax: string;
  total_tax_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  total_tip_received: string;
  total_weight: number;
  updated_at: string;
  user_id: null | string;
  billing_address: {
    first_name: string;
    address1: string;
    phone: string;
    city: string;
    zip: string;
    province: string;
    country: string;
    last_name: string;
    address2: null | string;
    company: string;
    latitude: null | string;
    longitude: null | string;
    name: string;
    country_code: string;
    province_code: string;
  };
  customer: {
    id: number;
    email: string;
    created_at: null | string;
    updated_at: null | string;
    first_name: string;
    last_name: string;
    state: string;
    note: null | string;
    verified_email: boolean;
    multipass_identifier: null | string;
    tax_exempt: boolean;
    phone: null | string;
    email_marketing_consent: {
      state: string;
      opt_in_level: null | string;
      consent_updated_at: null | string;
    };
    sms_marketing_consent: null | string;
    tags: string;
    currency: string;
    tax_exemptions: any[];
    admin_graphql_api_id: string;
    default_address: {
      id: number;
      customer_id: number;
      first_name: null | string;
      last_name: null | string;
      company: null | string;
      address1: string;
      address2: null | string;
      city: string;
      province: string;
      country: string;
      zip: string;
      phone: string;
      name: string;
      province_code: string;
      country_code: string;
      country_name: string;
      default: boolean;
    };
  };
  discount_applications: any[];
  fulfillments: any[];
  line_items: {
    id: number;
    admin_graphql_api_id: string;
    attributed_staffs: { id: string; quantity: number }[];
    current_quantity: number;
    fulfillable_quantity: number;
    fulfillment_service: string;
    fulfillment_status: null | string;
    gift_card: boolean;
    grams: number;
    name: string;
    price: string;
    price_set: {
      shop_money: { amount: string; currency_code: string };
      presentment_money: { amount: string; currency_code: string };
    };
    product_exists: boolean;
    product_id: number;
    properties: any[];
    quantity: number;
    requires_shipping: boolean;
    sku: string;
    taxable: boolean;
    title: string;
    total_discount: string;
    total_discount_set: {
      shop_money: { amount: string; currency_code: string };
      presentment_money: { amount: string; currency_code: string };
    };
    variant_id: number;
    variant_inventory_management: string;
    variant_title: null | string;
    vendor: null | string;
    tax_lines: any[];
    duties: any[];
    discount_allocations: any[];
  }[];
  payment_terms: null | string;
  refunds: any[];
  shipping_address: {
    first_name: string;
    address1: string;
    phone: string;
    city: string;
    zip: string;
    province: string;
    country: string;
    last_name: string;
    address2: null | string;
    company: string;
    latitude: null | string;
    longitude: null | string;
    name: string;
    country_code: string;
    province_code: string;
  };
  shipping_lines: {
    id: number;
    carrier_identifier: null | string;
    code: null | string;
    current_discounted_price_set: {
      shop_money: { amount: string; currency_code: string };
      presentment_money: { amount: string; currency_code: string };
    };
    discounted_price: string;
    discounted_price_set: {
      shop_money: { amount: string; currency_code: string };
      presentment_money: { amount: string; currency_code: string };
    };
    is_removed: boolean;
    phone: null | string;
    price: string;
    price_set: {
      shop_money: { amount: string; currency_code: string };
      presentment_money: { amount: string; currency_code: string };
    };
    requested_fulfillment_service_id: null | string;
    source: string;
    title: string;
    tax_lines: any[];
    discount_allocations: any[];
  }[];
  returns: any[];
}

// Types for CUSTOMER_PAYMENT_METHODS_CREATE
export interface CUSTOMER_PAYMENT_METHODS_CREATE {}

// Types for SUBSCRIPTION_CONTRACTS_PAUSE
export interface SUBSCRIPTION_CONTRACTS_PAUSE {
  admin_graphql_api_id: string;
  id: number;
  billing_policy: {
    interval: string;
    interval_count: number;
    min_cycles: number;
    max_cycles: number;
  };
  currency_code: string;
  customer_id: number;
  admin_graphql_api_customer_id: string;
  delivery_policy: { interval: string; interval_count: number };
  status: string;
  admin_graphql_api_origin_order_id: string;
  origin_order_id: number;
  revision_id: string;
}

// Types for COMPANIES_DELETE
export interface COMPANIES_DELETE {
  name: string;
  note: string;
  external_id: string;
  main_contact_admin_graphql_api_id: string;
  created_at: string;
  updated_at: string;
  customer_since: string;
  admin_graphql_api_id: string;
}

// Types for COMPANY_CONTACTS_CREATE
export interface COMPANY_CONTACTS_CREATE {
  customer_admin_graphql_api_id: string;
  title: string;
  locale: string;
  created_at: string;
  updated_at: string;
  admin_graphql_api_id: string;
  company: {
    name: string;
    note: string;
    external_id: string;
    main_contact_admin_graphql_api_id: string;
    created_at: string;
    updated_at: string;
    customer_since: string;
    admin_graphql_api_id: string;
  };
}

// Types for ORDERS_EDITED
export interface ORDERS_EDITED {
  order_edit: {
    id: number;
    app_id: null | string;
    created_at: string;
    committed_at: string;
    notify_customer: boolean;
    order_id: number;
    staff_note: string;
    user_id: null | string;
    line_items: {
      additions: { id: number; delta: number }[];
      removals: { id: number; delta: number }[];
    };
    discounts: { line_item: { additions: any[]; removals: any[] } };
    shipping_lines: { additions: any[]; removals: any[] };
  };
}

// Types for PAYMENT_SCHEDULES_DUE
export interface PAYMENT_SCHEDULES_DUE {
  id: number;
  payment_terms_id: number;
  amount: string;
  currency: string;
  issued_at: string;
  due_at: string;
  completed_at: string;
  created_at: string;
  updated_at: string;
  admin_graphql_api_id: string;
}

// Types for APP_PURCHASES_ONE_TIME_UPDATE
export interface APP_PURCHASES_ONE_TIME_UPDATE {
  app_purchase_one_time: {
    admin_graphql_api_id: string;
    name: string;
    status: string;
    admin_graphql_api_shop_id: string;
    created_at: string;
    updated_at: string;
  };
}

// Types for SELLING_PLAN_GROUPS_CREATE
export interface SELLING_PLAN_GROUPS_CREATE {
  admin_graphql_api_id: string;
  id: number;
  name: string;
  merchant_code: string;
  admin_graphql_api_app: string;
  app_id: null | string;
  description: null | string;
  options: string[];
  position: null | string;
  summary: string;
  selling_plans: {
    name: string;
    options: string[];
    position: null | string;
    description: null | string;
    billing_policy: {
      interval: string;
      interval_count: number;
      min_cycles: null | string;
      max_cycles: null | string;
    };
    delivery_policy: {
      interval: string;
      interval_count: number;
      anchors: any[];
      cutoff: null | string;
      pre_anchor_behavior: string;
    };
    pricing_policies: any[];
  }[];
  product_variants: any[];
  products: any[];
}

// Types for COMPANY_LOCATIONS_DELETE
export interface COMPANY_LOCATIONS_DELETE {
  name: string;
  external_id: string;
  phone: string;
  locale: string;
  created_at: string;
  updated_at: string;
  note: string;
  buyer_experience_configuration: null | string;
  admin_graphql_api_id: string;
  tax_exemptions: string[];
  company: {
    name: string;
    note: string;
    external_id: string;
    main_contact_admin_graphql_api_id: string;
    created_at: string;
    updated_at: string;
    customer_since: string;
    admin_graphql_api_id: string;
  };
  billing_address: {
    address1: string;
    city: string;
    province: string;
    country: string;
    zip: string;
    recipient: string;
    first_name: null | string;
    last_name: null | string;
    address2: null | string;
    phone: string;
    zone_code: string;
    country_code: string;
    created_at: string;
    updated_at: string;
    admin_graphql_api_id: string;
    company_admin_graphql_api_id: string;
  };
  shipping_address: {
    address1: string;
    city: string;
    province: string;
    country: string;
    zip: string;
    recipient: string;
    first_name: null | string;
    last_name: null | string;
    address2: null | string;
    phone: string;
    zone_code: string;
    country_code: string;
    created_at: string;
    updated_at: string;
    admin_graphql_api_id: string;
    company_admin_graphql_api_id: string;
  };
  tax_registration: { tax_id: string };
}

// Types for ORDERS_FULFILLED
export interface ORDERS_FULFILLED {
  id: number;
  admin_graphql_api_id: string;
  app_id: null | string;
  browser_ip: null | string;
  buyer_accepts_marketing: boolean;
  cancel_reason: string;
  cancelled_at: string;
  cart_token: null | string;
  checkout_id: null | string;
  checkout_token: null | string;
  client_details: null | string;
  closed_at: null | string;
  confirmation_number: null | string;
  confirmed: boolean;
  contact_email: string;
  created_at: string;
  currency: string;
  current_shipping_price_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  current_subtotal_price: string;
  current_subtotal_price_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  current_total_additional_fees_set: null | string;
  current_total_discounts: string;
  current_total_discounts_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  current_total_duties_set: null | string;
  current_total_price: string;
  current_total_price_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  current_total_tax: string;
  current_total_tax_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  customer_locale: string;
  device_id: null | string;
  discount_codes: any[];
  email: string;
  estimated_taxes: boolean;
  financial_status: string;
  fulfillment_status: string;
  landing_site: null | string;
  landing_site_ref: null | string;
  location_id: null | string;
  merchant_business_entity_id: string;
  merchant_of_record_app_id: null | string;
  name: string;
  note: null | string;
  note_attributes: any[];
  number: number;
  order_number: number;
  order_status_url: string;
  original_total_additional_fees_set: null | string;
  original_total_duties_set: null | string;
  payment_gateway_names: string[];
  phone: null | string;
  po_number: null | string;
  presentment_currency: string;
  processed_at: string;
  reference: null | string;
  referring_site: null | string;
  source_identifier: null | string;
  source_name: string;
  source_url: null | string;
  subtotal_price: string;
  subtotal_price_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  tags: string;
  tax_exempt: boolean;
  tax_lines: any[];
  taxes_included: boolean;
  test: boolean;
  token: string;
  total_cash_rounding_payment_adjustment_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  total_cash_rounding_refund_adjustment_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  total_discounts: string;
  total_discounts_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  total_line_items_price: string;
  total_line_items_price_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  total_outstanding: string;
  total_price: string;
  total_price_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  total_shipping_price_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  total_tax: string;
  total_tax_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  total_tip_received: string;
  total_weight: number;
  updated_at: string;
  user_id: null | string;
  billing_address: {
    first_name: string;
    address1: string;
    phone: string;
    city: string;
    zip: string;
    province: string;
    country: string;
    last_name: string;
    address2: null | string;
    company: string;
    latitude: null | string;
    longitude: null | string;
    name: string;
    country_code: string;
    province_code: string;
  };
  customer: {
    id: number;
    email: string;
    created_at: null | string;
    updated_at: null | string;
    first_name: string;
    last_name: string;
    state: string;
    note: null | string;
    verified_email: boolean;
    multipass_identifier: null | string;
    tax_exempt: boolean;
    phone: null | string;
    email_marketing_consent: {
      state: string;
      opt_in_level: null | string;
      consent_updated_at: null | string;
    };
    sms_marketing_consent: null | string;
    tags: string;
    currency: string;
    tax_exemptions: any[];
    admin_graphql_api_id: string;
    default_address: {
      id: number;
      customer_id: number;
      first_name: null | string;
      last_name: null | string;
      company: null | string;
      address1: string;
      address2: null | string;
      city: string;
      province: string;
      country: string;
      zip: string;
      phone: string;
      name: string;
      province_code: string;
      country_code: string;
      country_name: string;
      default: boolean;
    };
  };
  discount_applications: any[];
  fulfillments: any[];
  line_items: {
    id: number;
    admin_graphql_api_id: string;
    attributed_staffs: { id: string; quantity: number }[];
    current_quantity: number;
    fulfillable_quantity: number;
    fulfillment_service: string;
    fulfillment_status: null | string;
    gift_card: boolean;
    grams: number;
    name: string;
    price: string;
    price_set: {
      shop_money: { amount: string; currency_code: string };
      presentment_money: { amount: string; currency_code: string };
    };
    product_exists: boolean;
    product_id: number;
    properties: any[];
    quantity: number;
    requires_shipping: boolean;
    sku: string;
    taxable: boolean;
    title: string;
    total_discount: string;
    total_discount_set: {
      shop_money: { amount: string; currency_code: string };
      presentment_money: { amount: string; currency_code: string };
    };
    variant_id: number;
    variant_inventory_management: string;
    variant_title: null | string;
    vendor: null | string;
    tax_lines: any[];
    duties: any[];
    discount_allocations: any[];
  }[];
  payment_terms: null | string;
  refunds: any[];
  shipping_address: {
    first_name: string;
    address1: string;
    phone: string;
    city: string;
    zip: string;
    province: string;
    country: string;
    last_name: string;
    address2: null | string;
    company: string;
    latitude: null | string;
    longitude: null | string;
    name: string;
    country_code: string;
    province_code: string;
  };
  shipping_lines: {
    id: number;
    carrier_identifier: null | string;
    code: null | string;
    current_discounted_price_set: {
      shop_money: { amount: string; currency_code: string };
      presentment_money: { amount: string; currency_code: string };
    };
    discounted_price: string;
    discounted_price_set: {
      shop_money: { amount: string; currency_code: string };
      presentment_money: { amount: string; currency_code: string };
    };
    is_removed: boolean;
    phone: null | string;
    price: string;
    price_set: {
      shop_money: { amount: string; currency_code: string };
      presentment_money: { amount: string; currency_code: string };
    };
    requested_fulfillment_service_id: null | string;
    source: string;
    title: string;
    tax_lines: any[];
    discount_allocations: any[];
  }[];
  returns: any[];
}

// Types for FULFILLMENT_ORDERS_LINE_ITEMS_PREPARED_FOR_PICKUP
export interface FULFILLMENT_ORDERS_LINE_ITEMS_PREPARED_FOR_PICKUP {
  fulfillment_order: {
    id: string;
    status: string;
    preparable: boolean;
    delivery_method: { method_type: string };
  };
}

// Types for FULFILLMENT_ORDERS_SPLIT
export interface FULFILLMENT_ORDERS_SPLIT {
  split_line_items: { id: string; quantity: number }[];
  fulfillment_order: { id: string; status: string };
  remaining_fulfillment_order: { id: string; status: string };
  replacement_fulfillment_order: { id: string; status: string };
}

// Types for ORDERS_PARTIALLY_FULFILLED
export interface ORDERS_PARTIALLY_FULFILLED {
  id: number;
  admin_graphql_api_id: string;
  app_id: null | string;
  browser_ip: null | string;
  buyer_accepts_marketing: boolean;
  cancel_reason: string;
  cancelled_at: string;
  cart_token: null | string;
  checkout_id: null | string;
  checkout_token: null | string;
  client_details: null | string;
  closed_at: null | string;
  confirmation_number: null | string;
  confirmed: boolean;
  contact_email: string;
  created_at: string;
  currency: string;
  current_shipping_price_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  current_subtotal_price: string;
  current_subtotal_price_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  current_total_additional_fees_set: null | string;
  current_total_discounts: string;
  current_total_discounts_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  current_total_duties_set: null | string;
  current_total_price: string;
  current_total_price_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  current_total_tax: string;
  current_total_tax_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  customer_locale: string;
  device_id: null | string;
  discount_codes: any[];
  email: string;
  estimated_taxes: boolean;
  financial_status: string;
  fulfillment_status: string;
  landing_site: null | string;
  landing_site_ref: null | string;
  location_id: null | string;
  merchant_business_entity_id: string;
  merchant_of_record_app_id: null | string;
  name: string;
  note: null | string;
  note_attributes: any[];
  number: number;
  order_number: number;
  order_status_url: string;
  original_total_additional_fees_set: null | string;
  original_total_duties_set: null | string;
  payment_gateway_names: string[];
  phone: null | string;
  po_number: null | string;
  presentment_currency: string;
  processed_at: string;
  reference: null | string;
  referring_site: null | string;
  source_identifier: null | string;
  source_name: string;
  source_url: null | string;
  subtotal_price: string;
  subtotal_price_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  tags: string;
  tax_exempt: boolean;
  tax_lines: any[];
  taxes_included: boolean;
  test: boolean;
  token: string;
  total_cash_rounding_payment_adjustment_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  total_cash_rounding_refund_adjustment_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  total_discounts: string;
  total_discounts_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  total_line_items_price: string;
  total_line_items_price_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  total_outstanding: string;
  total_price: string;
  total_price_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  total_shipping_price_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  total_tax: string;
  total_tax_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  total_tip_received: string;
  total_weight: number;
  updated_at: string;
  user_id: null | string;
  billing_address: {
    first_name: string;
    address1: string;
    phone: string;
    city: string;
    zip: string;
    province: string;
    country: string;
    last_name: string;
    address2: null | string;
    company: string;
    latitude: null | string;
    longitude: null | string;
    name: string;
    country_code: string;
    province_code: string;
  };
  customer: {
    id: number;
    email: string;
    created_at: null | string;
    updated_at: null | string;
    first_name: string;
    last_name: string;
    state: string;
    note: null | string;
    verified_email: boolean;
    multipass_identifier: null | string;
    tax_exempt: boolean;
    phone: null | string;
    email_marketing_consent: {
      state: string;
      opt_in_level: null | string;
      consent_updated_at: null | string;
    };
    sms_marketing_consent: null | string;
    tags: string;
    currency: string;
    tax_exemptions: any[];
    admin_graphql_api_id: string;
    default_address: {
      id: number;
      customer_id: number;
      first_name: null | string;
      last_name: null | string;
      company: null | string;
      address1: string;
      address2: null | string;
      city: string;
      province: string;
      country: string;
      zip: string;
      phone: string;
      name: string;
      province_code: string;
      country_code: string;
      country_name: string;
      default: boolean;
    };
  };
  discount_applications: any[];
  fulfillments: any[];
  line_items: {
    id: number;
    admin_graphql_api_id: string;
    attributed_staffs: { id: string; quantity: number }[];
    current_quantity: number;
    fulfillable_quantity: number;
    fulfillment_service: string;
    fulfillment_status: null | string;
    gift_card: boolean;
    grams: number;
    name: string;
    price: string;
    price_set: {
      shop_money: { amount: string; currency_code: string };
      presentment_money: { amount: string; currency_code: string };
    };
    product_exists: boolean;
    product_id: number;
    properties: any[];
    quantity: number;
    requires_shipping: boolean;
    sku: string;
    taxable: boolean;
    title: string;
    total_discount: string;
    total_discount_set: {
      shop_money: { amount: string; currency_code: string };
      presentment_money: { amount: string; currency_code: string };
    };
    variant_id: number;
    variant_inventory_management: string;
    variant_title: null | string;
    vendor: null | string;
    tax_lines: any[];
    duties: any[];
    discount_allocations: any[];
  }[];
  payment_terms: null | string;
  refunds: any[];
  shipping_address: {
    first_name: string;
    address1: string;
    phone: string;
    city: string;
    zip: string;
    province: string;
    country: string;
    last_name: string;
    address2: null | string;
    company: string;
    latitude: null | string;
    longitude: null | string;
    name: string;
    country_code: string;
    province_code: string;
  };
  shipping_lines: {
    id: number;
    carrier_identifier: null | string;
    code: null | string;
    current_discounted_price_set: {
      shop_money: { amount: string; currency_code: string };
      presentment_money: { amount: string; currency_code: string };
    };
    discounted_price: string;
    discounted_price_set: {
      shop_money: { amount: string; currency_code: string };
      presentment_money: { amount: string; currency_code: string };
    };
    is_removed: boolean;
    phone: null | string;
    price: string;
    price_set: {
      shop_money: { amount: string; currency_code: string };
      presentment_money: { amount: string; currency_code: string };
    };
    requested_fulfillment_service_id: null | string;
    source: string;
    title: string;
    tax_lines: any[];
    discount_allocations: any[];
  }[];
  returns: any[];
}

// Types for LOCALES_CREATE
export interface LOCALES_CREATE {
  locale: string;
  published: boolean;
}

// Types for DISPUTES_CREATE
export interface DISPUTES_CREATE {
  id: number;
  order_id: number;
  type: string;
  amount: string;
  currency: string;
  reason: string;
  network_reason_code: string;
  status: string;
  evidence_due_by: string;
  evidence_sent_on: null | string;
  finalized_on: null | string;
  initiated_at: string;
}

// Types for SEGMENTS_UPDATE
export interface SEGMENTS_UPDATE {
  id: number;
  name: string;
  query: string;
  creationDate: string;
  lastEditDate: string;
}

// Types for FULFILLMENT_EVENTS_CREATE
export interface FULFILLMENT_EVENTS_CREATE {
  id: number;
  fulfillment_id: number;
  status: string;
  message: string;
  happened_at: string;
  city: null | string;
  province: null | string;
  country: string;
  zip: null | string;
  address1: null | string;
  latitude: null | string;
  longitude: null | string;
  shop_id: number;
  created_at: string;
  updated_at: string;
  estimated_delivery_at: null | string;
  order_id: number;
  admin_graphql_api_id: string;
}

// Types for COMPANY_CONTACT_ROLES_ASSIGN
export interface COMPANY_CONTACT_ROLES_ASSIGN {
  company_contact: {
    customer_admin_graphql_api_id: string;
    title: string;
    locale: string;
    created_at: string;
    updated_at: string;
    admin_graphql_api_id: string;
    company: {
      name: string;
      note: string;
      external_id: string;
      main_contact_admin_graphql_api_id: string;
      created_at: string;
      updated_at: string;
      customer_since: string;
      admin_graphql_api_id: string;
    };
  };
  company_location: {
    name: string;
    external_id: string;
    phone: string;
    locale: string;
    created_at: string;
    updated_at: string;
    note: string;
    buyer_experience_configuration: null | string;
    admin_graphql_api_id: string;
    tax_exemptions: string[];
    company: {
      name: string;
      note: string;
      external_id: string;
      main_contact_admin_graphql_api_id: string;
      created_at: string;
      updated_at: string;
      customer_since: string;
      admin_graphql_api_id: string;
    };
    billing_address: {
      address1: string;
      city: string;
      province: string;
      country: string;
      zip: string;
      recipient: string;
      first_name: null | string;
      last_name: null | string;
      address2: null | string;
      phone: string;
      zone_code: string;
      country_code: string;
      created_at: string;
      updated_at: string;
      admin_graphql_api_id: string;
      company_admin_graphql_api_id: string;
    };
    shipping_address: {
      address1: string;
      city: string;
      province: string;
      country: string;
      zip: string;
      recipient: string;
      first_name: null | string;
      last_name: null | string;
      address2: null | string;
      phone: string;
      zone_code: string;
      country_code: string;
      created_at: string;
      updated_at: string;
      admin_graphql_api_id: string;
      company_admin_graphql_api_id: string;
    };
    tax_registration: { tax_id: string };
  };
  company_contact_role: { name: string };
}

// Types for CUSTOMER_GROUPS_CREATE
export interface CUSTOMER_GROUPS_CREATE {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  query: string;
}

// Types for MARKETS_UPDATE
export interface MARKETS_UPDATE {
  id: number;
  name: string;
  enabled: boolean;
  regions: { country_code: string }[];
}

// Types for PRODUCT_PUBLICATIONS_DELETE
export interface PRODUCT_PUBLICATIONS_DELETE {
  id: null | string;
}

// Types for RETURNS_REQUEST
export interface RETURNS_REQUEST {
  id: number;
  admin_graphql_api_id: string;
  status: string;
  order: { id: number; admin_graphql_api_id: string };
  total_return_line_items: number;
  name: null | string;
  return_line_items: {
    id: number;
    admin_graphql_api_id: string;
    fulfillment_line_item: {
      id: number;
      admin_graphql_api_id: string;
      line_item: { id: number; admin_graphql_api_id: string };
    };
    quantity: number;
    return_reason: string;
    return_reason_note: string;
    customer_note: null | string;
    restocking_fee: null | string;
  }[];
  return_shipping_fees: any[];
  exchange_line_items: any[];
  total_exchange_line_items: number;
}

// Types for DRAFT_ORDERS_CREATE
export interface DRAFT_ORDERS_CREATE {
  id: number;
  note: null | string;
  email: string;
  taxes_included: boolean;
  currency: string;
  invoice_sent_at: null | string;
  created_at: string;
  updated_at: string;
  tax_exempt: boolean;
  completed_at: null | string;
  name: string;
  status: string;
  line_items: {
    id: number;
    variant_id: number;
    product_id: number;
    title: string;
    variant_title: string;
    sku: string;
    vendor: string;
    quantity: number;
    requires_shipping: boolean;
    taxable: boolean;
    gift_card: boolean;
    fulfillment_service: string;
    grams: number;
    tax_lines: any[];
    applied_discount: null | string;
    name: string;
    properties: any[];
    custom: boolean;
    price: string;
    admin_graphql_api_id: string;
  }[];
  shipping_address: {
    first_name: string;
    address1: string;
    phone: string;
    city: string;
    zip: string;
    province: string;
    country: string;
    last_name: string;
    address2: null | string;
    company: string;
    latitude: null | string;
    longitude: null | string;
    name: string;
    country_code: string;
    province_code: string;
  };
  billing_address: {
    first_name: string;
    address1: string;
    phone: string;
    city: string;
    zip: string;
    province: string;
    country: string;
    last_name: string;
    address2: null | string;
    company: string;
    latitude: null | string;
    longitude: null | string;
    name: string;
    country_code: string;
    province_code: string;
  };
  invoice_url: string;
  applied_discount: {
    description: string;
    value: string;
    title: string;
    amount: string;
    value_type: string;
  };
  order_id: null | string;
  shipping_line: {
    title: string;
    custom: boolean;
    handle: null | string;
    price: string;
  };
  tax_lines: { rate: number; title: string; price: string }[];
  tags: string;
  note_attributes: any[];
  total_price: string;
  subtotal_price: string;
  total_tax: string;
  payment_terms: {
    id: number;
    payment_terms_name: string;
    payment_terms_type: string;
    due_in_days: number;
    created_at: string;
    updated_at: string;
    payment_schedules: {
      id: number;
      created_at: string;
      updated_at: string;
      payment_terms_id: number;
      reference_id: null | string;
      reference_type: null | string;
      issued_at: string;
      due_at: string;
      completed_at: string;
      amount: string;
      currency: string;
    }[];
    can_pay_early: boolean;
  };
  admin_graphql_api_id: string;
  customer: {
    id: number;
    email: string;
    created_at: null | string;
    updated_at: null | string;
    first_name: string;
    last_name: string;
    orders_count: number;
    state: string;
    total_spent: string;
    last_order_id: null | string;
    note: null | string;
    verified_email: boolean;
    multipass_identifier: null | string;
    tax_exempt: boolean;
    tags: string;
    last_order_name: null | string;
    currency: string;
    phone: null | string;
    tax_exemptions: any[];
    email_marketing_consent: {
      state: string;
      opt_in_level: null | string;
      consent_updated_at: null | string;
    };
    sms_marketing_consent: null | string;
    admin_graphql_api_id: string;
    default_address: {
      id: null | string;
      customer_id: number;
      first_name: null | string;
      last_name: null | string;
      company: null | string;
      address1: string;
      address2: null | string;
      city: string;
      province: string;
      country: string;
      zip: string;
      phone: string;
      name: string;
      province_code: string;
      country_code: string;
      country_name: string;
      default: boolean;
    };
  };
}

// Types for VARIANTS_IN_STOCK
export interface VARIANTS_IN_STOCK {
  id: number;
  product_id: number;
  title: string;
  price: string;
  position: number;
  inventory_policy: string;
  compare_at_price: string;
  option1: string;
  option2: null | string;
  option3: null | string;
  created_at: string;
  updated_at: string;
  taxable: boolean;
  barcode: null | string;
  sku: null | string;
  inventory_quantity: number;
  old_inventory_quantity: number;
  admin_graphql_api_id: string;
  image_id: null | string;
}

// Types for ORDERS_CREATE
export interface ORDERS_CREATE {
  id: number;
  admin_graphql_api_id: string;
  app_id: null | string;
  browser_ip: null | string;
  buyer_accepts_marketing: boolean;
  cancel_reason: string;
  cancelled_at: string;
  cart_token: null | string;
  checkout_id: null | string;
  checkout_token: null | string;
  client_details: null | string;
  closed_at: null | string;
  confirmation_number: null | string;
  confirmed: boolean;
  contact_email: string;
  created_at: string;
  currency: string;
  current_shipping_price_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  current_subtotal_price: string;
  current_subtotal_price_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  current_total_additional_fees_set: null | string;
  current_total_discounts: string;
  current_total_discounts_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  current_total_duties_set: null | string;
  current_total_price: string;
  current_total_price_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  current_total_tax: string;
  current_total_tax_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  customer_locale: string;
  device_id: null | string;
  discount_codes: any[];
  email: string;
  estimated_taxes: boolean;
  financial_status: string;
  fulfillment_status: string;
  landing_site: null | string;
  landing_site_ref: null | string;
  location_id: null | string;
  merchant_business_entity_id: string;
  merchant_of_record_app_id: null | string;
  name: string;
  note: null | string;
  note_attributes: any[];
  number: number;
  order_number: number;
  order_status_url: string;
  original_total_additional_fees_set: null | string;
  original_total_duties_set: null | string;
  payment_gateway_names: string[];
  phone: null | string;
  po_number: null | string;
  presentment_currency: string;
  processed_at: string;
  reference: null | string;
  referring_site: null | string;
  source_identifier: null | string;
  source_name: string;
  source_url: null | string;
  subtotal_price: string;
  subtotal_price_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  tags: string;
  tax_exempt: boolean;
  tax_lines: any[];
  taxes_included: boolean;
  test: boolean;
  token: string;
  total_cash_rounding_payment_adjustment_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  total_cash_rounding_refund_adjustment_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  total_discounts: string;
  total_discounts_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  total_line_items_price: string;
  total_line_items_price_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  total_outstanding: string;
  total_price: string;
  total_price_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  total_shipping_price_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  total_tax: string;
  total_tax_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  total_tip_received: string;
  total_weight: number;
  updated_at: string;
  user_id: null | string;
  billing_address: {
    first_name: string;
    address1: string;
    phone: string;
    city: string;
    zip: string;
    province: string;
    country: string;
    last_name: string;
    address2: null | string;
    company: string;
    latitude: null | string;
    longitude: null | string;
    name: string;
    country_code: string;
    province_code: string;
  };
  customer: {
    id: number;
    email: string;
    created_at: null | string;
    updated_at: null | string;
    first_name: string;
    last_name: string;
    state: string;
    note: null | string;
    verified_email: boolean;
    multipass_identifier: null | string;
    tax_exempt: boolean;
    phone: null | string;
    email_marketing_consent: {
      state: string;
      opt_in_level: null | string;
      consent_updated_at: null | string;
    };
    sms_marketing_consent: null | string;
    tags: string;
    currency: string;
    tax_exemptions: any[];
    admin_graphql_api_id: string;
    default_address: {
      id: number;
      customer_id: number;
      first_name: null | string;
      last_name: null | string;
      company: null | string;
      address1: string;
      address2: null | string;
      city: string;
      province: string;
      country: string;
      zip: string;
      phone: string;
      name: string;
      province_code: string;
      country_code: string;
      country_name: string;
      default: boolean;
    };
  };
  discount_applications: any[];
  fulfillments: any[];
  line_items: {
    id: number;
    admin_graphql_api_id: string;
    attributed_staffs: { id: string; quantity: number }[];
    current_quantity: number;
    fulfillable_quantity: number;
    fulfillment_service: string;
    fulfillment_status: null | string;
    gift_card: boolean;
    grams: number;
    name: string;
    price: string;
    price_set: {
      shop_money: { amount: string; currency_code: string };
      presentment_money: { amount: string; currency_code: string };
    };
    product_exists: boolean;
    product_id: number;
    properties: any[];
    quantity: number;
    requires_shipping: boolean;
    sku: string;
    taxable: boolean;
    title: string;
    total_discount: string;
    total_discount_set: {
      shop_money: { amount: string; currency_code: string };
      presentment_money: { amount: string; currency_code: string };
    };
    variant_id: number;
    variant_inventory_management: string;
    variant_title: null | string;
    vendor: null | string;
    tax_lines: any[];
    duties: any[];
    discount_allocations: any[];
  }[];
  payment_terms: null | string;
  refunds: any[];
  shipping_address: {
    first_name: string;
    address1: string;
    phone: string;
    city: string;
    zip: string;
    province: string;
    country: string;
    last_name: string;
    address2: null | string;
    company: string;
    latitude: null | string;
    longitude: null | string;
    name: string;
    country_code: string;
    province_code: string;
  };
  shipping_lines: {
    id: number;
    carrier_identifier: null | string;
    code: null | string;
    current_discounted_price_set: {
      shop_money: { amount: string; currency_code: string };
      presentment_money: { amount: string; currency_code: string };
    };
    discounted_price: string;
    discounted_price_set: {
      shop_money: { amount: string; currency_code: string };
      presentment_money: { amount: string; currency_code: string };
    };
    is_removed: boolean;
    phone: null | string;
    price: string;
    price_set: {
      shop_money: { amount: string; currency_code: string };
      presentment_money: { amount: string; currency_code: string };
    };
    requested_fulfillment_service_id: null | string;
    source: string;
    title: string;
    tax_lines: any[];
    discount_allocations: any[];
  }[];
  returns: any[];
}

// Types for DOMAINS_DESTROY
export interface DOMAINS_DESTROY {
  id: number;
  host: string;
  ssl_enabled: boolean;
  localization: {
    country: null | string;
    default_locale: string;
    alternate_locales: any[];
  };
}

// Types for FULFILLMENT_ORDERS_MOVED
export interface FULFILLMENT_ORDERS_MOVED {
  original_fulfillment_order: {
    id: string;
    status: string;
    assigned_location_id: string;
  };
  moved_fulfillment_order: {
    id: string;
    status: string;
    assigned_location_id: string;
  };
  destination_location_id: string;
  fulfillment_order_line_items_requested: { id: string; quantity: number }[];
  source_location: { id: string };
}

// Types for APP_SUBSCRIPTIONS_APPROACHING_CAPPED_AMOUNT
export interface APP_SUBSCRIPTIONS_APPROACHING_CAPPED_AMOUNT {
  app_subscription: {
    admin_graphql_api_id: string;
    name: string;
    balance_used: number;
    capped_amount: string;
    currency_code: string;
    admin_graphql_api_shop_id: string;
    created_at: string;
    updated_at: string;
  };
}

// Types for ORDERS_UPDATED
export interface ORDERS_UPDATED {
  id: number;
  admin_graphql_api_id: string;
  app_id: null | string;
  browser_ip: null | string;
  buyer_accepts_marketing: boolean;
  cancel_reason: string;
  cancelled_at: string;
  cart_token: null | string;
  checkout_id: null | string;
  checkout_token: null | string;
  client_details: null | string;
  closed_at: null | string;
  confirmation_number: null | string;
  confirmed: boolean;
  contact_email: string;
  created_at: string;
  currency: string;
  current_shipping_price_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  current_subtotal_price: string;
  current_subtotal_price_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  current_total_additional_fees_set: null | string;
  current_total_discounts: string;
  current_total_discounts_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  current_total_duties_set: null | string;
  current_total_price: string;
  current_total_price_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  current_total_tax: string;
  current_total_tax_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  customer_locale: string;
  device_id: null | string;
  discount_codes: any[];
  email: string;
  estimated_taxes: boolean;
  financial_status: string;
  fulfillment_status: string;
  landing_site: null | string;
  landing_site_ref: null | string;
  location_id: null | string;
  merchant_business_entity_id: string;
  merchant_of_record_app_id: null | string;
  name: string;
  note: null | string;
  note_attributes: any[];
  number: number;
  order_number: number;
  order_status_url: string;
  original_total_additional_fees_set: null | string;
  original_total_duties_set: null | string;
  payment_gateway_names: string[];
  phone: null | string;
  po_number: null | string;
  presentment_currency: string;
  processed_at: string;
  reference: null | string;
  referring_site: null | string;
  source_identifier: null | string;
  source_name: string;
  source_url: null | string;
  subtotal_price: string;
  subtotal_price_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  tags: string;
  tax_exempt: boolean;
  tax_lines: any[];
  taxes_included: boolean;
  test: boolean;
  token: string;
  total_cash_rounding_payment_adjustment_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  total_cash_rounding_refund_adjustment_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  total_discounts: string;
  total_discounts_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  total_line_items_price: string;
  total_line_items_price_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  total_outstanding: string;
  total_price: string;
  total_price_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  total_shipping_price_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  total_tax: string;
  total_tax_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  total_tip_received: string;
  total_weight: number;
  updated_at: string;
  user_id: null | string;
  billing_address: {
    first_name: string;
    address1: string;
    phone: string;
    city: string;
    zip: string;
    province: string;
    country: string;
    last_name: string;
    address2: null | string;
    company: string;
    latitude: null | string;
    longitude: null | string;
    name: string;
    country_code: string;
    province_code: string;
  };
  customer: {
    id: number;
    email: string;
    created_at: null | string;
    updated_at: null | string;
    first_name: string;
    last_name: string;
    state: string;
    note: null | string;
    verified_email: boolean;
    multipass_identifier: null | string;
    tax_exempt: boolean;
    phone: null | string;
    email_marketing_consent: {
      state: string;
      opt_in_level: null | string;
      consent_updated_at: null | string;
    };
    sms_marketing_consent: null | string;
    tags: string;
    currency: string;
    tax_exemptions: any[];
    admin_graphql_api_id: string;
    default_address: {
      id: number;
      customer_id: number;
      first_name: null | string;
      last_name: null | string;
      company: null | string;
      address1: string;
      address2: null | string;
      city: string;
      province: string;
      country: string;
      zip: string;
      phone: string;
      name: string;
      province_code: string;
      country_code: string;
      country_name: string;
      default: boolean;
    };
  };
  discount_applications: any[];
  fulfillments: any[];
  line_items: {
    id: number;
    admin_graphql_api_id: string;
    attributed_staffs: { id: string; quantity: number }[];
    current_quantity: number;
    fulfillable_quantity: number;
    fulfillment_service: string;
    fulfillment_status: null | string;
    gift_card: boolean;
    grams: number;
    name: string;
    price: string;
    price_set: {
      shop_money: { amount: string; currency_code: string };
      presentment_money: { amount: string; currency_code: string };
    };
    product_exists: boolean;
    product_id: number;
    properties: any[];
    quantity: number;
    requires_shipping: boolean;
    sku: string;
    taxable: boolean;
    title: string;
    total_discount: string;
    total_discount_set: {
      shop_money: { amount: string; currency_code: string };
      presentment_money: { amount: string; currency_code: string };
    };
    variant_id: number;
    variant_inventory_management: string;
    variant_title: null | string;
    vendor: null | string;
    tax_lines: any[];
    duties: any[];
    discount_allocations: any[];
  }[];
  payment_terms: null | string;
  refunds: any[];
  shipping_address: {
    first_name: string;
    address1: string;
    phone: string;
    city: string;
    zip: string;
    province: string;
    country: string;
    last_name: string;
    address2: null | string;
    company: string;
    latitude: null | string;
    longitude: null | string;
    name: string;
    country_code: string;
    province_code: string;
  };
  shipping_lines: {
    id: number;
    carrier_identifier: null | string;
    code: null | string;
    current_discounted_price_set: {
      shop_money: { amount: string; currency_code: string };
      presentment_money: { amount: string; currency_code: string };
    };
    discounted_price: string;
    discounted_price_set: {
      shop_money: { amount: string; currency_code: string };
      presentment_money: { amount: string; currency_code: string };
    };
    is_removed: boolean;
    phone: null | string;
    price: string;
    price_set: {
      shop_money: { amount: string; currency_code: string };
      presentment_money: { amount: string; currency_code: string };
    };
    requested_fulfillment_service_id: null | string;
    source: string;
    title: string;
    tax_lines: any[];
    discount_allocations: any[];
  }[];
  returns: any[];
}

// Types for DISCOUNTS_CREATE
export interface DISCOUNTS_CREATE {
  admin_graphql_api_id: string;
  title: string;
  status: string;
  created_at: string;
  updated_at: string;
}

// Types for ORDER_TRANSACTIONS_CREATE
export interface ORDER_TRANSACTIONS_CREATE {
  id: number;
  order_id: number;
  kind: string;
  gateway: string;
  status: string;
  message: null | string;
  created_at: string;
  test: boolean;
  authorization: string;
  location_id: null | string;
  user_id: null | string;
  parent_id: null | string;
  processed_at: null | string;
  device_id: null | string;
  error_code: null | string;
  source_name: string;
  payment_details: {
    credit_card_bin: null | string;
    avs_result_code: null | string;
    cvv_result_code: null | string;
    credit_card_number: string;
    credit_card_company: string;
    buyer_action_info: null | string;
    credit_card_name: null | string;
    credit_card_wallet: null | string;
    credit_card_expiration_month: null | string;
    credit_card_expiration_year: null | string;
    payment_method_name: string;
  };
  receipt: {};
  amount: string;
  currency: string;
  payment_id: string;
  total_unsettled_set: {
    presentment_money: { amount: string; currency: string };
    shop_money: { amount: string; currency: string };
  };
  manual_payment_gateway: boolean;
  amount_rounding: null | string;
  admin_graphql_api_id: string;
}

// Types for DOMAINS_CREATE
export interface DOMAINS_CREATE {
  id: number;
  host: string;
  ssl_enabled: boolean;
  localization: {
    country: null | string;
    default_locale: string;
    alternate_locales: any[];
  };
}

// Types for PRODUCT_FEEDS_FULL_SYNC_FINISH
export interface PRODUCT_FEEDS_FULL_SYNC_FINISH {
  metadata: {
    action: string;
    type: string;
    resource: string;
    fullSyncId: string;
    truncatedFields: any[];
    occurred_at: string;
  };
  productFeed: {
    id: string;
    shop_id: string;
    country: string;
    language: string;
  };
  fullSync: {
    createdAt: string;
    errorCode: null | string;
    status: string;
    count: number;
    url: null | string;
  };
}

// Types for COLLECTION_PUBLICATIONS_UPDATE
export interface COLLECTION_PUBLICATIONS_UPDATE {
  id: null | string;
  publication_id: null | string;
  published_at: string;
  published: boolean;
  created_at: null | string;
  updated_at: null | string;
  collection_id: number;
}

// Types for LOCATIONS_DELETE
export interface LOCATIONS_DELETE {
  id: number;
}

// Types for FULFILLMENTS_CREATE
export interface FULFILLMENTS_CREATE {
  id: number;
  order_id: number;
  status: string;
  created_at: string;
  service: null | string;
  updated_at: string;
  tracking_company: string;
  shipment_status: null | string;
  location_id: null | string;
  origin_address: null | string;
  email: string;
  destination: {
    first_name: string;
    address1: string;
    phone: string;
    city: string;
    zip: string;
    province: string;
    country: string;
    last_name: string;
    address2: null | string;
    company: string;
    latitude: null | string;
    longitude: null | string;
    name: string;
    country_code: string;
    province_code: string;
  };
  line_items: {
    id: number;
    variant_id: number;
    title: string;
    quantity: number;
    sku: string;
    variant_title: null | string;
    vendor: null | string;
    fulfillment_service: string;
    product_id: number;
    requires_shipping: boolean;
    taxable: boolean;
    gift_card: boolean;
    name: string;
    variant_inventory_management: string;
    properties: any[];
    product_exists: boolean;
    fulfillable_quantity: number;
    grams: number;
    price: string;
    total_discount: string;
    fulfillment_status: null | string;
    price_set: {
      shop_money: { amount: string; currency_code: string };
      presentment_money: { amount: string; currency_code: string };
    };
    total_discount_set: {
      shop_money: { amount: string; currency_code: string };
      presentment_money: { amount: string; currency_code: string };
    };
    discount_allocations: any[];
    duties: any[];
    admin_graphql_api_id: string;
    tax_lines: any[];
  }[];
  tracking_number: string;
  tracking_numbers: string[];
  tracking_url: string;
  tracking_urls: string[];
  receipt: {};
  name: string;
  admin_graphql_api_id: string;
}

// Types for CUSTOMERS_DELETE
export interface CUSTOMERS_DELETE {
  id: number;
  phone: null | string;
  addresses: any[];
  tax_exemptions: any[];
  email_marketing_consent: null | string;
  sms_marketing_consent: null | string;
  admin_graphql_api_id: string;
}

// Types for FULFILLMENT_ORDERS_FULFILLMENT_REQUEST_SUBMITTED
export interface FULFILLMENT_ORDERS_FULFILLMENT_REQUEST_SUBMITTED {
  original_fulfillment_order: {
    id: string;
    status: string;
    request_status: string;
  };
  submitted_fulfillment_order: {
    id: string;
    status: string;
    request_status: string;
  };
  fulfillment_order_merchant_request: { id: string; message: string };
}

// Types for CUSTOMERS_ENABLE
export interface CUSTOMERS_ENABLE {
  id: number;
  email: string;
  created_at: string;
  updated_at: string;
  first_name: string;
  last_name: string;
  orders_count: number;
  state: string;
  total_spent: string;
  last_order_id: null | string;
  note: string;
  verified_email: boolean;
  multipass_identifier: null | string;
  tax_exempt: boolean;
  tags: string;
  last_order_name: null | string;
  currency: string;
  phone: null | string;
  addresses: any[];
  tax_exemptions: any[];
  email_marketing_consent: null | string;
  sms_marketing_consent: null | string;
  admin_graphql_api_id: string;
}

// Types for SUBSCRIPTION_BILLING_CYCLES_SKIP
export interface SUBSCRIPTION_BILLING_CYCLES_SKIP {
  subscription_contract_id: number;
  cycle_start_at: string;
  cycle_end_at: string;
  cycle_index: number;
  contract_edit: null | string;
  billing_attempt_expected_date: string;
  skipped: boolean;
  edited: boolean;
}

// Types for SCHEDULED_PRODUCT_LISTINGS_ADD
export interface SCHEDULED_PRODUCT_LISTINGS_ADD {
  scheduled_product_listing: {
    product_id: number;
    created_at: null | string;
    updated_at: string;
    body_html: string;
    handle: string;
    product_type: string;
    title: string;
    vendor: string;
    available: boolean;
    tags: string;
    variants: {
      id: number;
      title: string;
      option_values: { option_id: number; name: string; value: string }[];
      price: string;
      formatted_price: string;
      compare_at_price: string;
      grams: number;
      requires_shipping: boolean;
      sku: null | string;
      barcode: null | string;
      taxable: boolean;
      position: number;
      available: boolean;
      inventory_policy: string;
      inventory_quantity: number;
      inventory_management: null | string;
      fulfillment_service: string;
      weight: null | string;
      weight_unit: string;
      image_id: null | string;
      created_at: string;
      updated_at: string;
    }[];
    publish_at: null | string;
    images: any[];
    options: {
      id: number;
      name: string;
      product_id: number;
      position: number;
      values: string[];
    }[];
  };
}

// Types for PROFILES_DELETE
export interface PROFILES_DELETE {
  id: number;
}

// Types for REVERSE_FULFILLMENT_ORDERS_DISPOSE
export interface REVERSE_FULFILLMENT_ORDERS_DISPOSE {
  id: number;
  admin_graphql_api_id: string;
  dispositions: {
    reverse_fulfillment_order_line_item: {
      id: number;
      admin_graphql_api_id: string;
    };
    reverse_delivery_line_item: null | string;
    type: string;
    location: { id: number; admin_graphql_api_id: string };
    quantity: number;
  }[];
  total_dispositions: number;
}

// Types for PAYMENT_TERMS_CREATE
export interface PAYMENT_TERMS_CREATE {
  id: number;
  payment_terms_name: string;
  payment_terms_type: string;
  due_in_days: number;
  created_at: string;
  updated_at: string;
  payment_schedules: {
    id: number;
    payment_terms_id: number;
    amount: string;
    currency: string;
    issued_at: string;
    due_at: string;
    completed_at: string;
    created_at: string;
    updated_at: string;
    admin_graphql_api_id: string;
  }[];
  admin_graphql_api_id: string;
}

// Types for PRODUCTS_DELETE
export interface PRODUCTS_DELETE {
  id: number;
}

// Types for CHECKOUTS_UPDATE
export interface CHECKOUTS_UPDATE {
  id: number;
  token: string;
  cart_token: string;
  email: string;
  gateway: null | string;
  buyer_accepts_marketing: boolean;
  created_at: string;
  updated_at: string;
  landing_site: null | string;
  note: null | string;
  note_attributes: any[];
  referring_site: null | string;
  shipping_lines: any[];
  taxes_included: boolean;
  total_weight: number;
  currency: string;
  completed_at: null | string;
  closed_at: null | string;
  user_id: null | string;
  location_id: null | string;
  source_identifier: null | string;
  source_url: null | string;
  device_id: null | string;
  phone: null | string;
  customer_locale: null | string;
  line_items: {
    applied_discounts: any[];
    discount_allocations: any[];
    key: string;
    destination_location_id: number;
    fulfillment_service: string;
    gift_card: boolean;
    grams: number;
    origin_location_id: number;
    presentment_title: string;
    presentment_variant_title: string;
    product_id: number;
    properties: null | string;
    quantity: number;
    requires_shipping: boolean;
    sku: string;
    tax_lines: {
      price: string;
      position: number;
      rate: number;
      title: string;
      source: string;
      zone: string;
      jurisdiction_id: null | string;
      jurisdiction_type: null | string;
      jurisdiction_source: null | string;
      reporting_taxable_amount: null | string;
      reporting_non_taxable_amount: null | string;
      reporting_exempt_amount: null | string;
      reporting_jurisdiction_name: null | string;
      reporting_jurisdiction_type: null | string;
      reporting_jurisdiction_code: null | string;
      tax_api_client_id: null | string;
      tax_calculation_price: string;
      tax_registration_id: null | string;
      compare_at: number;
      channel_liable: boolean;
    }[];
    taxable: boolean;
    title: string;
    variant_id: number;
    variant_title: string;
    variant_price: string;
    vendor: string;
    user_id: null | string;
    unit_price_measurement: {
      measured_type: null | string;
      quantity_value: null | string;
      quantity_unit: null | string;
      reference_value: null | string;
      reference_unit: null | string;
    };
    rank: null | string;
    compare_at_price: null | string;
    line_price: string;
    price: string;
  }[];
  name: string;
  source: null | string;
  abandoned_checkout_url: string;
  discount_codes: any[];
  tax_lines: {
    price: string;
    rate: number;
    title: string;
    channel_liable: boolean;
  }[];
  source_name: string;
  presentment_currency: string;
  buyer_accepts_sms_marketing: boolean;
  sms_marketing_phone: null | string;
  total_discounts: string;
  total_line_items_price: string;
  total_price: string;
  total_tax: string;
  subtotal_price: string;
  total_duties: null | string;
  reservation_token: null | string;
  billing_address: {
    first_name: string;
    address1: string;
    phone: string;
    city: string;
    zip: string;
    province: string;
    country: string;
    last_name: string;
    address2: null | string;
    company: string;
    latitude: null | string;
    longitude: null | string;
    name: string;
    country_code: string;
    province_code: string;
  };
  shipping_address: {
    first_name: string;
    address1: string;
    phone: string;
    city: string;
    zip: string;
    province: string;
    country: string;
    last_name: string;
    address2: null | string;
    company: string;
    latitude: null | string;
    longitude: null | string;
    name: string;
    country_code: string;
    province_code: string;
  };
  customer: {
    id: number;
    email: string;
    created_at: null | string;
    updated_at: null | string;
    first_name: string;
    last_name: string;
    orders_count: number;
    state: string;
    total_spent: string;
    last_order_id: null | string;
    note: null | string;
    verified_email: boolean;
    multipass_identifier: null | string;
    tax_exempt: boolean;
    tags: string;
    last_order_name: null | string;
    currency: string;
    phone: null | string;
    tax_exemptions: any[];
    email_marketing_consent: {
      state: string;
      opt_in_level: null | string;
      consent_updated_at: null | string;
    };
    sms_marketing_consent: null | string;
    admin_graphql_api_id: string;
    default_address: {
      id: null | string;
      customer_id: number;
      first_name: null | string;
      last_name: null | string;
      company: null | string;
      address1: string;
      address2: null | string;
      city: string;
      province: string;
      country: string;
      zip: string;
      phone: string;
      name: string;
      province_code: string;
      country_code: string;
      country_name: string;
      default: boolean;
    };
  };
}

// Types for APP_SUBSCRIPTIONS_UPDATE
export interface APP_SUBSCRIPTIONS_UPDATE {
  app_subscription: {
    admin_graphql_api_id: string;
    name: string;
    status: string;
    admin_graphql_api_shop_id: string;
    created_at: string;
    updated_at: string;
    currency: string;
    capped_amount: string;
  };
}

// Types for SUBSCRIPTION_BILLING_CYCLE_EDITS_DELETE
export interface SUBSCRIPTION_BILLING_CYCLE_EDITS_DELETE {
  subscription_contract_id: number;
  cycle_start_at: string;
  cycle_end_at: string;
  cycle_index: number;
  contract_edit: null | string;
  billing_attempt_expected_date: string;
  skipped: boolean;
  edited: boolean;
}

// Types for FULFILLMENT_ORDERS_FULFILLMENT_REQUEST_REJECTED
export interface FULFILLMENT_ORDERS_FULFILLMENT_REQUEST_REJECTED {
  fulfillment_order: { id: string; status: string; request_status: string };
  message: string;
}

// Types for CUSTOMER_PAYMENT_METHODS_UPDATE
export interface CUSTOMER_PAYMENT_METHODS_UPDATE {}

// Types for COLLECTION_LISTINGS_ADD
export interface COLLECTION_LISTINGS_ADD {
  collection_listing: {
    collection_id: number;
    updated_at: null | string;
    body_html: string;
    default_product_image: null | string;
    handle: string;
    image: null | string;
    title: string;
    sort_order: null | string;
    published_at: string;
  };
}

// Types for FULFILLMENT_ORDERS_CANCELLATION_REQUEST_SUBMITTED
export interface FULFILLMENT_ORDERS_CANCELLATION_REQUEST_SUBMITTED {
  fulfillment_order: { id: string; status: string; request_status: string };
  fulfillment_order_merchant_request: { id: string; message: string };
}

// Types for COMPANY_CONTACTS_UPDATE
export interface COMPANY_CONTACTS_UPDATE {
  customer_admin_graphql_api_id: string;
  title: string;
  locale: string;
  created_at: string;
  updated_at: string;
  admin_graphql_api_id: string;
  company: {
    name: string;
    note: string;
    external_id: string;
    main_contact_admin_graphql_api_id: string;
    created_at: string;
    updated_at: string;
    customer_since: string;
    admin_graphql_api_id: string;
  };
}

// Types for THEMES_UPDATE
export interface THEMES_UPDATE {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  role: string;
  theme_store_id: number;
  previewable: boolean;
  processing: boolean;
  admin_graphql_api_id: string;
}

// Types for SUBSCRIPTION_BILLING_ATTEMPTS_SUCCESS
export interface SUBSCRIPTION_BILLING_ATTEMPTS_SUCCESS {
  id: null | string;
  admin_graphql_api_id: null | string;
  idempotency_key: string;
  order_id: number;
  admin_graphql_api_order_id: string;
  subscription_contract_id: number;
  admin_graphql_api_subscription_contract_id: string;
  ready: boolean;
  error_message: null | string;
  error_code: null | string;
}

// Types for DISCOUNTS_REDEEMCODE_REMOVED
export interface DISCOUNTS_REDEEMCODE_REMOVED {
  admin_graphql_api_id: string;
  redeem_code: { id: string; code: string };
  updated_at: string;
}

// Types for LOCALES_UPDATE
export interface LOCALES_UPDATE {
  locale: string;
  published: boolean;
}

// Types for FULFILLMENT_ORDERS_RESCHEDULED
export interface FULFILLMENT_ORDERS_RESCHEDULED {
  fulfillment_order: { id: string; status: string; fulfill_at: string };
}

// Types for SELLING_PLAN_GROUPS_UPDATE
export interface SELLING_PLAN_GROUPS_UPDATE {
  admin_graphql_api_id: string;
  id: number;
  name: string;
  merchant_code: string;
  admin_graphql_api_app: string;
  app_id: null | string;
  description: null | string;
  options: string[];
  position: null | string;
  summary: string;
  selling_plans: {
    name: string;
    options: string[];
    position: null | string;
    description: null | string;
    billing_policy: {
      interval: string;
      interval_count: number;
      min_cycles: null | string;
      max_cycles: null | string;
    };
    delivery_policy: {
      interval: string;
      interval_count: number;
      anchors: any[];
      cutoff: null | string;
      pre_anchor_behavior: string;
    };
    pricing_policies: any[];
  }[];
  product_variants: any[];
  products: any[];
}

// Types for MARKETS_CREATE
export interface MARKETS_CREATE {
  id: number;
  name: string;
  enabled: boolean;
  regions: { country_code: string }[];
}

// Types for DRAFT_ORDERS_UPDATE
export interface DRAFT_ORDERS_UPDATE {
  id: number;
  note: null | string;
  email: string;
  taxes_included: boolean;
  currency: string;
  invoice_sent_at: null | string;
  created_at: string;
  updated_at: string;
  tax_exempt: boolean;
  completed_at: null | string;
  name: string;
  status: string;
  line_items: {
    id: number;
    variant_id: number;
    product_id: number;
    title: string;
    variant_title: string;
    sku: string;
    vendor: string;
    quantity: number;
    requires_shipping: boolean;
    taxable: boolean;
    gift_card: boolean;
    fulfillment_service: string;
    grams: number;
    tax_lines: any[];
    applied_discount: null | string;
    name: string;
    properties: any[];
    custom: boolean;
    price: string;
    admin_graphql_api_id: string;
  }[];
  shipping_address: {
    first_name: string;
    address1: string;
    phone: string;
    city: string;
    zip: string;
    province: string;
    country: string;
    last_name: string;
    address2: null | string;
    company: string;
    latitude: null | string;
    longitude: null | string;
    name: string;
    country_code: string;
    province_code: string;
  };
  billing_address: {
    first_name: string;
    address1: string;
    phone: string;
    city: string;
    zip: string;
    province: string;
    country: string;
    last_name: string;
    address2: null | string;
    company: string;
    latitude: null | string;
    longitude: null | string;
    name: string;
    country_code: string;
    province_code: string;
  };
  invoice_url: string;
  applied_discount: {
    description: string;
    value: string;
    title: string;
    amount: string;
    value_type: string;
  };
  order_id: null | string;
  shipping_line: {
    title: string;
    custom: boolean;
    handle: null | string;
    price: string;
  };
  tax_lines: { rate: number; title: string; price: string }[];
  tags: string;
  note_attributes: any[];
  total_price: string;
  subtotal_price: string;
  total_tax: string;
  payment_terms: {
    id: number;
    payment_terms_name: string;
    payment_terms_type: string;
    due_in_days: number;
    created_at: string;
    updated_at: string;
    payment_schedules: {
      id: number;
      created_at: string;
      updated_at: string;
      payment_terms_id: number;
      reference_id: null | string;
      reference_type: null | string;
      issued_at: string;
      due_at: string;
      completed_at: string;
      amount: string;
      currency: string;
    }[];
    can_pay_early: boolean;
  };
  admin_graphql_api_id: string;
  customer: {
    id: number;
    email: string;
    created_at: null | string;
    updated_at: null | string;
    first_name: string;
    last_name: string;
    orders_count: number;
    state: string;
    total_spent: string;
    last_order_id: null | string;
    note: null | string;
    verified_email: boolean;
    multipass_identifier: null | string;
    tax_exempt: boolean;
    tags: string;
    last_order_name: null | string;
    currency: string;
    phone: null | string;
    tax_exemptions: any[];
    email_marketing_consent: {
      state: string;
      opt_in_level: null | string;
      consent_updated_at: null | string;
    };
    sms_marketing_consent: null | string;
    admin_graphql_api_id: string;
    default_address: {
      id: null | string;
      customer_id: number;
      first_name: null | string;
      last_name: null | string;
      company: null | string;
      address1: string;
      address2: null | string;
      city: string;
      province: string;
      country: string;
      zip: string;
      phone: string;
      name: string;
      province_code: string;
      country_code: string;
      country_name: string;
      default: boolean;
    };
  };
}

// Types for INVENTORY_ITEMS_DELETE
export interface INVENTORY_ITEMS_DELETE {
  id: number;
  country_code_of_origin: null | string;
  province_code_of_origin: null | string;
  harmonized_system_code: null | string;
  country_harmonized_system_codes: any[];
  admin_graphql_api_id: string;
}

// Types for DISPUTES_UPDATE
export interface DISPUTES_UPDATE {
  id: number;
  order_id: number;
  type: string;
  amount: string;
  currency: string;
  reason: string;
  network_reason_code: string;
  status: string;
  evidence_due_by: string;
  evidence_sent_on: null | string;
  finalized_on: null | string;
  initiated_at: string;
}

// Types for SEGMENTS_CREATE
export interface SEGMENTS_CREATE {
  id: number;
  name: string;
  query: string;
  creationDate: string;
  lastEditDate: string;
}

// Types for CUSTOMER_GROUPS_UPDATE
export interface CUSTOMER_GROUPS_UPDATE {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  query: string;
}

// Types for CHANNELS_DELETE
export interface CHANNELS_DELETE {
  id: string;
}

// Types for CUSTOMER_ACCOUNT_SETTINGS_UPDATE
export interface CUSTOMER_ACCOUNT_SETTINGS_UPDATE {
  url: null | string;
  customer_accounts_version: string;
  login_required_at_checkout: boolean;
  login_links_visible_on_storefront_and_checkout: boolean;
}

// Types for SUBSCRIPTION_CONTRACTS_ACTIVATE
export interface SUBSCRIPTION_CONTRACTS_ACTIVATE {
  admin_graphql_api_id: string;
  id: number;
  billing_policy: {
    interval: string;
    interval_count: number;
    min_cycles: number;
    max_cycles: number;
  };
  currency_code: string;
  customer_id: number;
  admin_graphql_api_customer_id: string;
  delivery_policy: { interval: string; interval_count: number };
  status: string;
  admin_graphql_api_origin_order_id: string;
  origin_order_id: number;
  revision_id: string;
}

// Types for COLLECTIONS_DELETE
export interface COLLECTIONS_DELETE {
  id: number;
  published_scope: string;
  admin_graphql_api_id: string;
}

// Types for CUSTOMERS_EMAIL_MARKETING_CONSENT_UPDATE
export interface CUSTOMERS_EMAIL_MARKETING_CONSENT_UPDATE {
  customer_id: number;
  email_address: null | string;
  email_marketing_consent: {
    state: null | string;
    opt_in_level: null | string;
    consent_updated_at: null | string;
  };
}

// Types for DISCOUNTS_UPDATE
export interface DISCOUNTS_UPDATE {
  admin_graphql_api_id: string;
  title: string;
  status: string;
  created_at: string;
  updated_at: string;
}

// Types for COLLECTION_PUBLICATIONS_CREATE
export interface COLLECTION_PUBLICATIONS_CREATE {
  id: null | string;
  publication_id: null | string;
  published_at: string;
  published: boolean;
  created_at: null | string;
  updated_at: null | string;
  collection_id: number;
}

// Types for DOMAINS_UPDATE
export interface DOMAINS_UPDATE {
  id: number;
  host: string;
  ssl_enabled: boolean;
  localization: {
    country: null | string;
    default_locale: string;
    alternate_locales: any[];
  };
}

// Types for INVENTORY_LEVELS_CONNECT
export interface INVENTORY_LEVELS_CONNECT {
  inventory_item_id: number;
  location_id: number;
  available: null | string;
  updated_at: string;
  admin_graphql_api_id: string;
}

// Types for CUSTOMER_TAGS_ADDED
export interface CUSTOMER_TAGS_ADDED {
  customerId: string;
  tags: string[];
  occurredAt: string;
}

// Types for FULFILLMENTS_UPDATE
export interface FULFILLMENTS_UPDATE {
  id: number;
  order_id: number;
  status: string;
  created_at: string;
  service: null | string;
  updated_at: string;
  tracking_company: string;
  shipment_status: null | string;
  location_id: null | string;
  origin_address: null | string;
  email: string;
  destination: {
    first_name: string;
    address1: string;
    phone: string;
    city: string;
    zip: string;
    province: string;
    country: string;
    last_name: string;
    address2: null | string;
    company: string;
    latitude: null | string;
    longitude: null | string;
    name: string;
    country_code: string;
    province_code: string;
  };
  line_items: {
    id: number;
    variant_id: number;
    title: string;
    quantity: number;
    sku: string;
    variant_title: null | string;
    vendor: null | string;
    fulfillment_service: string;
    product_id: number;
    requires_shipping: boolean;
    taxable: boolean;
    gift_card: boolean;
    name: string;
    variant_inventory_management: string;
    properties: any[];
    product_exists: boolean;
    fulfillable_quantity: number;
    grams: number;
    price: string;
    total_discount: string;
    fulfillment_status: null | string;
    price_set: {
      shop_money: { amount: string; currency_code: string };
      presentment_money: { amount: string; currency_code: string };
    };
    total_discount_set: {
      shop_money: { amount: string; currency_code: string };
      presentment_money: { amount: string; currency_code: string };
    };
    discount_allocations: any[];
    duties: any[];
    admin_graphql_api_id: string;
    tax_lines: any[];
  }[];
  tracking_number: string;
  tracking_numbers: string[];
  tracking_url: string;
  tracking_urls: string[];
  receipt: {};
  name: string;
  admin_graphql_api_id: string;
}

// Types for LOCATIONS_DEACTIVATE
export interface LOCATIONS_DEACTIVATE {
  id: number;
  name: string;
  address1: string;
  address2: string;
  city: string;
  zip: string;
  province: string;
  country: string;
  phone: string;
  created_at: string;
  updated_at: string;
  country_code: string;
  country_name: string;
  province_code: string;
  legacy: boolean;
  active: boolean;
  admin_graphql_api_id: string;
}

// Types for REFUNDS_CREATE
export interface REFUNDS_CREATE {}

// Types for PRODUCTS_UPDATE
export interface PRODUCTS_UPDATE {
  admin_graphql_api_id: string;
  body_html: string;
  created_at: null | string;
  handle: string;
  id: number;
  product_type: string;
  published_at: string;
  template_suffix: null | string;
  title: string;
  updated_at: string;
  vendor: string;
  status: string;
  published_scope: string;
  tags: string;
  variants: {
    admin_graphql_api_id: string;
    barcode: null | string;
    compare_at_price: string;
    created_at: string;
    id: number;
    inventory_policy: string;
    position: number;
    price: string;
    product_id: number;
    sku: null | string;
    taxable: boolean;
    title: string;
    updated_at: string;
    option1: string;
    option2: null | string;
    option3: null | string;
    image_id: null | string;
    inventory_item_id: null | string;
    inventory_quantity: number;
    old_inventory_quantity: number;
  }[];
  options: any[];
  images: any[];
  image: null | string;
  media: any[];
  variant_gids: { admin_graphql_api_id: string; updated_at: string }[];
  has_variants_that_requires_components: boolean;
  category: null | string;
}

// Types for CUSTOMERS_DISABLE
export interface CUSTOMERS_DISABLE {
  id: number;
  email: string;
  created_at: string;
  updated_at: string;
  first_name: string;
  last_name: string;
  orders_count: number;
  state: string;
  total_spent: string;
  last_order_id: null | string;
  note: string;
  verified_email: boolean;
  multipass_identifier: null | string;
  tax_exempt: boolean;
  tags: string;
  last_order_name: null | string;
  currency: string;
  phone: null | string;
  addresses: any[];
  tax_exemptions: any[];
  email_marketing_consent: null | string;
  sms_marketing_consent: null | string;
  admin_graphql_api_id: string;
}

// Types for CUSTOMER_PAYMENT_METHODS_REVOKE
export interface CUSTOMER_PAYMENT_METHODS_REVOKE {}

// Types for PROFILES_UPDATE
export interface PROFILES_UPDATE {
  id: number;
}

// Types for METAOBJECTS_CREATE
export interface METAOBJECTS_CREATE {
  type: string;
  handle: string;
  created_at: string;
  updated_at: string;
  display_name: string;
  id: string;
  definition_id: string;
  fields: {};
  created_by_staff_id: string;
  created_by_app_id: string;
  capabilities: { publishable: { status: string } };
}

// Types for COLLECTION_LISTINGS_UPDATE
export interface COLLECTION_LISTINGS_UPDATE {
  collection_listing: {
    collection_id: number;
    updated_at: null | string;
    body_html: string;
    default_product_image: null | string;
    handle: string;
    image: null | string;
    title: string;
    sort_order: null | string;
    published_at: string;
  };
}

// Types for THEMES_DELETE
export interface THEMES_DELETE {
  id: number;
}

// Types for SUBSCRIPTION_CONTRACTS_FAIL
export interface SUBSCRIPTION_CONTRACTS_FAIL {
  admin_graphql_api_id: string;
  id: number;
  billing_policy: {
    interval: string;
    interval_count: number;
    min_cycles: number;
    max_cycles: number;
  };
  currency_code: string;
  customer_id: number;
  admin_graphql_api_customer_id: string;
  delivery_policy: { interval: string; interval_count: number };
  status: string;
  admin_graphql_api_origin_order_id: string;
  origin_order_id: number;
  revision_id: string;
}

// Types for SUBSCRIPTION_CONTRACTS_UPDATE
export interface SUBSCRIPTION_CONTRACTS_UPDATE {
  admin_graphql_api_id: string;
  id: number;
  billing_policy: {
    interval: string;
    interval_count: number;
    min_cycles: number;
    max_cycles: number;
  };
  currency_code: string;
  customer_id: number;
  admin_graphql_api_customer_id: string;
  delivery_policy: { interval: string; interval_count: number };
  status: string;
  admin_graphql_api_origin_order_id: string;
  origin_order_id: number;
  revision_id: string;
}

// Types for COMPANIES_CREATE
export interface COMPANIES_CREATE {
  name: string;
  note: string;
  external_id: string;
  main_contact_admin_graphql_api_id: string;
  created_at: string;
  updated_at: string;
  customer_since: string;
  admin_graphql_api_id: string;
}

// Types for COMPANY_CONTACTS_DELETE
export interface COMPANY_CONTACTS_DELETE {
  customer_admin_graphql_api_id: string;
  title: string;
  locale: string;
  created_at: string;
  updated_at: string;
  admin_graphql_api_id: string;
  company: {
    name: string;
    note: string;
    external_id: string;
    main_contact_admin_graphql_api_id: string;
    created_at: string;
    updated_at: string;
    customer_since: string;
    admin_graphql_api_id: string;
  };
}

// Types for SHOP_UPDATE
export interface SHOP_UPDATE {
  id: number;
  name: string;
  email: string;
  domain: null | string;
  province: string;
  country: string;
  address1: string;
  zip: string;
  city: string;
  source: null | string;
  phone: string;
  latitude: null | string;
  longitude: null | string;
  primary_locale: string;
  address2: null | string;
  created_at: null | string;
  updated_at: null | string;
  country_code: string;
  country_name: string;
  currency: string;
  customer_email: string;
  timezone: string;
  iana_timezone: null | string;
  shop_owner: string;
  money_format: string;
  money_with_currency_format: string;
  weight_unit: string;
  province_code: string;
  taxes_included: null | string;
  auto_configure_tax_inclusivity: null | string;
  tax_shipping: null | string;
  county_taxes: null | string;
  plan_display_name: string;
  plan_name: string;
  has_discounts: boolean;
  has_gift_cards: boolean;
  myshopify_domain: null | string;
  google_apps_domain: null | string;
  google_apps_login_enabled: null | string;
  money_in_emails_format: string;
  money_with_currency_in_emails_format: string;
  eligible_for_payments: boolean;
  requires_extra_payments_agreement: boolean;
  password_enabled: null | string;
  has_storefront: boolean;
  finances: boolean;
  primary_location_id: number;
  checkout_api_supported: boolean;
  multi_location_enabled: boolean;
  setup_required: boolean;
  pre_launch_enabled: boolean;
  enabled_presentment_currencies: string[];
  marketing_sms_consent_enabled_at_checkout: boolean;
  transactional_sms_disabled: boolean;
}

// Types for BULK_OPERATIONS_FINISH
export interface BULK_OPERATIONS_FINISH {
  admin_graphql_api_id: string;
  completed_at: string;
  created_at: string;
  error_code: null | string;
  status: string;
  type: string;
}

// Types for CHECKOUTS_DELETE
export interface CHECKOUTS_DELETE {
  id: number;
  presentment_currency: string;
  buyer_accepts_sms_marketing: boolean;
  sms_marketing_phone: null | string;
  total_discounts: string;
  total_line_items_price: string;
  total_price: string;
  total_tax: string;
  subtotal_price: string;
  cart_token: string;
  total_duties: null | string;
  reservation_token: null | string;
}

// Types for SUBSCRIPTION_BILLING_CYCLE_EDITS_UPDATE
export interface SUBSCRIPTION_BILLING_CYCLE_EDITS_UPDATE {
  subscription_contract_id: number;
  cycle_start_at: string;
  cycle_end_at: string;
  cycle_index: number;
  contract_edit: null | string;
  billing_attempt_expected_date: string;
  skipped: boolean;
  edited: boolean;
}

// Types for FULFILLMENT_EVENTS_DELETE
export interface FULFILLMENT_EVENTS_DELETE {
  id: number;
  fulfillment_id: number;
  status: string;
  message: string;
  happened_at: string;
  city: null | string;
  province: null | string;
  country: string;
  zip: null | string;
  address1: null | string;
  latitude: null | string;
  longitude: null | string;
  shop_id: number;
  created_at: string;
  updated_at: string;
  estimated_delivery_at: null | string;
  order_id: number;
  admin_graphql_api_id: string;
}

// Types for PRODUCT_LISTINGS_UPDATE
export interface PRODUCT_LISTINGS_UPDATE {
  product_listing: {
    product_id: number;
    created_at: null | string;
    updated_at: string;
    body_html: string;
    handle: string;
    product_type: string;
    title: string;
    vendor: string;
    available: boolean;
    tags: string;
    published_at: string;
    variants: {
      id: number;
      title: string;
      option_values: { option_id: number; name: string; value: string }[];
      price: string;
      formatted_price: string;
      compare_at_price: string;
      grams: number;
      requires_shipping: boolean;
      sku: null | string;
      barcode: null | string;
      taxable: boolean;
      position: number;
      available: boolean;
      inventory_policy: string;
      inventory_quantity: number;
      inventory_management: null | string;
      fulfillment_service: string;
      weight: null | string;
      weight_unit: string;
      image_id: null | string;
      created_at: string;
      updated_at: string;
    }[];
    images: any[];
    options: {
      id: number;
      name: string;
      product_id: number;
      position: number;
      values: string[];
    }[];
  };
}

// Types for SUBSCRIPTION_CONTRACTS_EXPIRE
export interface SUBSCRIPTION_CONTRACTS_EXPIRE {
  admin_graphql_api_id: string;
  id: number;
  billing_policy: {
    interval: string;
    interval_count: number;
    min_cycles: number;
    max_cycles: number;
  };
  currency_code: string;
  customer_id: number;
  admin_graphql_api_customer_id: string;
  delivery_policy: { interval: string; interval_count: number };
  status: string;
  admin_graphql_api_origin_order_id: string;
  origin_order_id: number;
  revision_id: string;
}

// Types for ORDERS_SHOPIFY_PROTECT_ELIGIBILITY_CHANGED
export interface ORDERS_SHOPIFY_PROTECT_ELIGIBILITY_CHANGED {
  order_id: number;
  status: string;
  eligibility: { status: string };
}

// Types for CUSTOMER_GROUPS_DELETE
export interface CUSTOMER_GROUPS_DELETE {
  id: number;
}

// Types for PRODUCT_PUBLICATIONS_CREATE
export interface PRODUCT_PUBLICATIONS_CREATE {
  id: null | string;
  publication_id: null | string;
  published_at: string;
  published: boolean;
  created_at: null | string;
  updated_at: null | string;
  product_id: number;
}

// Types for INVENTORY_ITEMS_UPDATE
export interface INVENTORY_ITEMS_UPDATE {
  id: number;
  sku: string;
  created_at: string;
  updated_at: string;
  requires_shipping: boolean;
  cost: null | string;
  country_code_of_origin: null | string;
  province_code_of_origin: null | string;
  harmonized_system_code: null | string;
  tracked: boolean;
  country_harmonized_system_codes: any[];
  admin_graphql_api_id: string;
}

// Types for CARTS_UPDATE
export interface CARTS_UPDATE {
  id: string;
  token: string;
  line_items: {
    id: number;
    properties: {};
    quantity: number;
    variant_id: number;
    key: string;
    discounted_price: string;
    discounts: any[];
    gift_card: boolean;
    grams: number;
    line_price: string;
    original_line_price: string;
    original_price: string;
    price: string;
    product_id: number;
    sku: string;
    taxable: boolean;
    title: string;
    total_discount: string;
    vendor: string;
    discounted_price_set: {
      shop_money: { amount: string; currency_code: string };
      presentment_money: { amount: string; currency_code: string };
    };
    line_price_set: {
      shop_money: { amount: string; currency_code: string };
      presentment_money: { amount: string; currency_code: string };
    };
    original_line_price_set: {
      shop_money: { amount: string; currency_code: string };
      presentment_money: { amount: string; currency_code: string };
    };
    price_set: {
      shop_money: { amount: string; currency_code: string };
      presentment_money: { amount: string; currency_code: string };
    };
    total_discount_set: {
      shop_money: { amount: string; currency_code: string };
      presentment_money: { amount: string; currency_code: string };
    };
  }[];
  note: null | string;
  updated_at: string;
  created_at: string;
}

// Types for DRAFT_ORDERS_DELETE
export interface DRAFT_ORDERS_DELETE {
  id: number;
}

// Types for SELLING_PLAN_GROUPS_DELETE
export interface SELLING_PLAN_GROUPS_DELETE {
  admin_graphql_api_id: string;
  id: number;
}

// Types for COMPANY_LOCATIONS_CREATE
export interface COMPANY_LOCATIONS_CREATE {
  name: string;
  external_id: string;
  phone: string;
  locale: string;
  created_at: string;
  updated_at: string;
  note: string;
  buyer_experience_configuration: null | string;
  admin_graphql_api_id: string;
  tax_exemptions: string[];
  company: {
    name: string;
    note: string;
    external_id: string;
    main_contact_admin_graphql_api_id: string;
    created_at: string;
    updated_at: string;
    customer_since: string;
    admin_graphql_api_id: string;
  };
  billing_address: {
    address1: string;
    city: string;
    province: string;
    country: string;
    zip: string;
    recipient: string;
    first_name: null | string;
    last_name: null | string;
    address2: null | string;
    phone: string;
    zone_code: string;
    country_code: string;
    created_at: string;
    updated_at: string;
    admin_graphql_api_id: string;
    company_admin_graphql_api_id: string;
  };
  shipping_address: {
    address1: string;
    city: string;
    province: string;
    country: string;
    zip: string;
    recipient: string;
    first_name: null | string;
    last_name: null | string;
    address2: null | string;
    phone: string;
    zone_code: string;
    country_code: string;
    created_at: string;
    updated_at: string;
    admin_graphql_api_id: string;
    company_admin_graphql_api_id: string;
  };
  tax_registration: { tax_id: string };
}

// Types for FULFILLMENT_ORDERS_PLACED_ON_HOLD
export interface FULFILLMENT_ORDERS_PLACED_ON_HOLD {
  fulfillment_order: {
    id: string;
    status: string;
    fulfillment_holds: {
      id: string;
      reason: string;
      reason_notes: string;
      held_by_requesting_app: boolean;
    }[];
  };
  remaining_fulfillment_order: { id: string; status: string };
  held_fulfillment_order_line_items: { id: string; quantity: number }[];
  created_fulfillment_hold: {
    id: string;
    reason: string;
    reason_notes: string;
    held_by_requesting_app: boolean;
  };
}

// Types for PRODUCT_FEEDS_CREATE
export interface PRODUCT_FEEDS_CREATE {
  id: string;
  country: string;
  language: string;
  status: string;
}

// Types for TENDER_TRANSACTIONS_CREATE
export interface TENDER_TRANSACTIONS_CREATE {
  id: number;
  order_id: number;
  amount: string;
  currency: string;
  user_id: null | string;
  test: boolean;
  processed_at: null | string;
  remote_reference: string;
  payment_details: null | string;
  payment_method: string;
}

// Types for PRODUCT_FEEDS_INCREMENTAL_SYNC
export interface PRODUCT_FEEDS_INCREMENTAL_SYNC {
  metadata: {
    action: string;
    type: string;
    resource: string;
    truncatedFields: any[];
    occured_at: string;
  };
  productFeed: {
    id: string;
    shop_id: string;
    country: string;
    language: string;
  };
  product: {
    id: string;
    title: string;
    description: string;
    onlineStoreUrl: string;
    createdAt: string;
    updatedAt: string;
    isPublished: boolean;
    publishedAt: string;
    productType: string;
    vendor: string;
    handle: string;
    images: {
      edges: {
        node: { id: string; url: string; height: number; width: number };
      }[];
    };
    options: { name: string; values: string[] }[];
    seo: { title: string; description: string };
    tags: string[];
    variants: {
      edges: {
        node: {
          id: string;
          title: string;
          price: { amount: string; currencyCode: string };
          compareAtPrice: null | string;
          sku: string;
          barcode: null | string;
          quantityAvailable: number;
          availableForSale: boolean;
          weight: number;
          weightUnit: string;
          requireShipping: boolean;
          inventoryPolicy: string;
          createdAt: string;
          updatedAt: string;
          image: { id: string; url: string; height: number; width: number };
          selectedOptions: { name: string; value: string }[];
        };
      }[];
    };
  };
  products: null | string;
}

// Types for DISCOUNTS_DELETE
export interface DISCOUNTS_DELETE {
  admin_graphql_api_id: string;
  deleted_at: string;
}

// Types for SUBSCRIPTION_BILLING_ATTEMPTS_FAILURE
export interface SUBSCRIPTION_BILLING_ATTEMPTS_FAILURE {
  id: null | string;
  admin_graphql_api_id: null | string;
  idempotency_key: string;
  order_id: number;
  admin_graphql_api_order_id: string;
  subscription_contract_id: number;
  admin_graphql_api_subscription_contract_id: string;
  ready: boolean;
  error_message: null | string;
  error_code: null | string;
}

// Types for LOCATIONS_CREATE
export interface LOCATIONS_CREATE {
  id: number;
  name: string;
  address1: string;
  address2: string;
  city: string;
  zip: string;
  province: string;
  country: string;
  phone: string;
  created_at: string;
  updated_at: string;
  country_code: string;
  country_name: string;
  province_code: string;
  legacy: boolean;
  active: boolean;
  admin_graphql_api_id: string;
}

// Types for VARIANTS_OUT_OF_STOCK
export interface VARIANTS_OUT_OF_STOCK {
  id: number;
  product_id: number;
  title: string;
  price: string;
  position: number;
  inventory_policy: string;
  compare_at_price: string;
  option1: string;
  option2: null | string;
  option3: null | string;
  created_at: string;
  updated_at: string;
  taxable: boolean;
  barcode: null | string;
  sku: null | string;
  inventory_quantity: number;
  old_inventory_quantity: number;
  admin_graphql_api_id: string;
  image_id: null | string;
}

// Types for CUSTOMERS_CREATE
export interface CUSTOMERS_CREATE {
  id: number;
  email: string;
  created_at: string;
  updated_at: string;
  first_name: string;
  last_name: string;
  orders_count: number;
  state: string;
  total_spent: string;
  last_order_id: null | string;
  note: string;
  verified_email: boolean;
  multipass_identifier: null | string;
  tax_exempt: boolean;
  tags: string;
  last_order_name: null | string;
  currency: string;
  phone: null | string;
  addresses: any[];
  tax_exemptions: any[];
  email_marketing_consent: null | string;
  sms_marketing_consent: null | string;
  admin_graphql_api_id: string;
}

// Types for RETURNS_REOPEN
export interface RETURNS_REOPEN {
  id: number;
  admin_graphql_api_id: string;
  order_id: number;
  status: string;
}

// Types for SUBSCRIPTION_CONTRACTS_CANCEL
export interface SUBSCRIPTION_CONTRACTS_CANCEL {
  admin_graphql_api_id: string;
  id: number;
  billing_policy: {
    interval: string;
    interval_count: number;
    min_cycles: number;
    max_cycles: number;
  };
  currency_code: string;
  customer_id: number;
  admin_graphql_api_customer_id: string;
  delivery_policy: { interval: string; interval_count: number };
  status: string;
  admin_graphql_api_origin_order_id: string;
  origin_order_id: number;
  revision_id: string;
}

// Types for COMPANY_CONTACT_ROLES_REVOKE
export interface COMPANY_CONTACT_ROLES_REVOKE {
  company_contact: {
    customer_admin_graphql_api_id: string;
    title: string;
    locale: string;
    created_at: string;
    updated_at: string;
    admin_graphql_api_id: string;
    company: {
      name: string;
      note: string;
      external_id: string;
      main_contact_admin_graphql_api_id: string;
      created_at: string;
      updated_at: string;
      customer_since: string;
      admin_graphql_api_id: string;
    };
  };
  company_location: {
    name: string;
    external_id: string;
    phone: string;
    locale: string;
    created_at: string;
    updated_at: string;
    note: string;
    buyer_experience_configuration: null | string;
    admin_graphql_api_id: string;
    tax_exemptions: string[];
    company: {
      name: string;
      note: string;
      external_id: string;
      main_contact_admin_graphql_api_id: string;
      created_at: string;
      updated_at: string;
      customer_since: string;
      admin_graphql_api_id: string;
    };
    billing_address: {
      address1: string;
      city: string;
      province: string;
      country: string;
      zip: string;
      recipient: string;
      first_name: null | string;
      last_name: null | string;
      address2: null | string;
      phone: string;
      zone_code: string;
      country_code: string;
      created_at: string;
      updated_at: string;
      admin_graphql_api_id: string;
      company_admin_graphql_api_id: string;
    };
    shipping_address: {
      address1: string;
      city: string;
      province: string;
      country: string;
      zip: string;
      recipient: string;
      first_name: null | string;
      last_name: null | string;
      address2: null | string;
      phone: string;
      zone_code: string;
      country_code: string;
      created_at: string;
      updated_at: string;
      admin_graphql_api_id: string;
      company_admin_graphql_api_id: string;
    };
    tax_registration: { tax_id: string };
  };
  company_contact_role: { name: string };
}

// Types for COLLECTIONS_UPDATE
export interface COLLECTIONS_UPDATE {
  id: number;
  handle: string;
  title: string;
  updated_at: string;
  body_html: string;
  published_at: string;
  sort_order: null | string;
  template_suffix: null | string;
  published_scope: string;
  admin_graphql_api_id: string;
}

// Types for ORDERS_DELETE
export interface ORDERS_DELETE {
  id: number;
}

// Types for FULFILLMENT_ORDERS_FULFILLMENT_REQUEST_ACCEPTED
export interface FULFILLMENT_ORDERS_FULFILLMENT_REQUEST_ACCEPTED {
  fulfillment_order: { id: string; status: string; request_status: string };
  message: string;
}

// Types for SHOP_REDACT
export interface SHOP_REDACT {
  shop_id: number;
  shop_domain: string;
}

// Types for FULFILLMENT_ORDERS_LINE_ITEMS_PREPARED_FOR_LOCAL_DELIVERY
export interface FULFILLMENT_ORDERS_LINE_ITEMS_PREPARED_FOR_LOCAL_DELIVERY {
  fulfillment_order: {
    id: string;
    status: string;
    preparable: boolean;
    delivery_method: { method_type: string };
  };
}

// Types for SCHEDULED_PRODUCT_LISTINGS_REMOVE
export interface SCHEDULED_PRODUCT_LISTINGS_REMOVE {
  scheduled_product_listing: { product_id: number };
}

// Types for LOCATIONS_ACTIVATE
export interface LOCATIONS_ACTIVATE {
  id: number;
  name: string;
  address1: string;
  address2: string;
  city: string;
  zip: string;
  province: string;
  country: string;
  phone: string;
  created_at: string;
  updated_at: string;
  country_code: string;
  country_name: string;
  province_code: string;
  legacy: boolean;
  active: boolean;
  admin_graphql_api_id: string;
}

// Types for PAYMENT_TERMS_DELETE
export interface PAYMENT_TERMS_DELETE {
  id: number;
}

// Types for RETURNS_CLOSE
export interface RETURNS_CLOSE {
  id: number;
  admin_graphql_api_id: string;
  order_id: number;
  status: string;
}

// Types for REVERSE_DELIVERIES_ATTACH_DELIVERABLE
export interface REVERSE_DELIVERIES_ATTACH_DELIVERABLE {
  id: number;
  admin_graphql_api_id: string;
  return: { id: number; admin_graphql_api_id: string };
  shipping_deliverable: {
    tracking: {
      carrier_name: string;
      tracking_number: string;
      tracking_url: null | string;
    };
    label: { public_file_url: null | string; created_at: null | string };
  };
}

// Types for SCHEDULED_PRODUCT_LISTINGS_UPDATE
export interface SCHEDULED_PRODUCT_LISTINGS_UPDATE {
  scheduled_product_listing: {
    product_id: number;
    created_at: null | string;
    updated_at: string;
    body_html: string;
    handle: string;
    product_type: string;
    title: string;
    vendor: string;
    available: boolean;
    tags: string;
    variants: {
      id: number;
      title: string;
      option_values: { option_id: number; name: string; value: string }[];
      price: string;
      formatted_price: string;
      compare_at_price: string;
      grams: number;
      requires_shipping: boolean;
      sku: null | string;
      barcode: null | string;
      taxable: boolean;
      position: number;
      available: boolean;
      inventory_policy: string;
      inventory_quantity: number;
      inventory_management: null | string;
      fulfillment_service: string;
      weight: null | string;
      weight_unit: string;
      image_id: null | string;
      created_at: string;
      updated_at: string;
    }[];
    publish_at: null | string;
    images: any[];
    options: {
      id: number;
      name: string;
      product_id: number;
      position: number;
      values: string[];
    }[];
  };
}

// Types for PRODUCTS_CREATE
export interface PRODUCTS_CREATE {
  admin_graphql_api_id: string;
  body_html: string;
  created_at: null | string;
  handle: string;
  id: number;
  product_type: string;
  published_at: string;
  template_suffix: null | string;
  title: string;
  updated_at: string;
  vendor: string;
  status: string;
  published_scope: string;
  tags: string;
  variants: {
    admin_graphql_api_id: string;
    barcode: null | string;
    compare_at_price: string;
    created_at: string;
    id: number;
    inventory_policy: string;
    position: number;
    price: string;
    product_id: number;
    sku: null | string;
    taxable: boolean;
    title: string;
    updated_at: string;
    option1: string;
    option2: null | string;
    option3: null | string;
    image_id: null | string;
    inventory_item_id: null | string;
    inventory_quantity: number;
    old_inventory_quantity: number;
  }[];
  options: any[];
  images: any[];
  image: null | string;
  media: any[];
  variant_gids: { admin_graphql_api_id: string; updated_at: string }[];
  has_variants_that_requires_components: boolean;
  category: null | string;
}

// Types for ORDERS_CANCELLED
export interface ORDERS_CANCELLED {
  id: number;
  admin_graphql_api_id: string;
  app_id: null | string;
  browser_ip: null | string;
  buyer_accepts_marketing: boolean;
  cancel_reason: string;
  cancelled_at: string;
  cart_token: null | string;
  checkout_id: null | string;
  checkout_token: null | string;
  client_details: null | string;
  closed_at: null | string;
  confirmation_number: null | string;
  confirmed: boolean;
  contact_email: string;
  created_at: string;
  currency: string;
  current_shipping_price_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  current_subtotal_price: string;
  current_subtotal_price_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  current_total_additional_fees_set: null | string;
  current_total_discounts: string;
  current_total_discounts_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  current_total_duties_set: null | string;
  current_total_price: string;
  current_total_price_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  current_total_tax: string;
  current_total_tax_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  customer_locale: string;
  device_id: null | string;
  discount_codes: any[];
  email: string;
  estimated_taxes: boolean;
  financial_status: string;
  fulfillment_status: string;
  landing_site: null | string;
  landing_site_ref: null | string;
  location_id: null | string;
  merchant_business_entity_id: string;
  merchant_of_record_app_id: null | string;
  name: string;
  note: null | string;
  note_attributes: any[];
  number: number;
  order_number: number;
  order_status_url: string;
  original_total_additional_fees_set: null | string;
  original_total_duties_set: null | string;
  payment_gateway_names: string[];
  phone: null | string;
  po_number: null | string;
  presentment_currency: string;
  processed_at: string;
  reference: null | string;
  referring_site: null | string;
  source_identifier: null | string;
  source_name: string;
  source_url: null | string;
  subtotal_price: string;
  subtotal_price_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  tags: string;
  tax_exempt: boolean;
  tax_lines: any[];
  taxes_included: boolean;
  test: boolean;
  token: string;
  total_cash_rounding_payment_adjustment_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  total_cash_rounding_refund_adjustment_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  total_discounts: string;
  total_discounts_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  total_line_items_price: string;
  total_line_items_price_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  total_outstanding: string;
  total_price: string;
  total_price_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  total_shipping_price_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  total_tax: string;
  total_tax_set: {
    shop_money: { amount: string; currency_code: string };
    presentment_money: { amount: string; currency_code: string };
  };
  total_tip_received: string;
  total_weight: number;
  updated_at: string;
  user_id: null | string;
  billing_address: {
    first_name: string;
    address1: string;
    phone: string;
    city: string;
    zip: string;
    province: string;
    country: string;
    last_name: string;
    address2: null | string;
    company: string;
    latitude: null | string;
    longitude: null | string;
    name: string;
    country_code: string;
    province_code: string;
  };
  customer: {
    id: number;
    email: string;
    created_at: null | string;
    updated_at: null | string;
    first_name: string;
    last_name: string;
    state: string;
    note: null | string;
    verified_email: boolean;
    multipass_identifier: null | string;
    tax_exempt: boolean;
    phone: null | string;
    email_marketing_consent: {
      state: string;
      opt_in_level: null | string;
      consent_updated_at: null | string;
    };
    sms_marketing_consent: null | string;
    tags: string;
    currency: string;
    tax_exemptions: any[];
    admin_graphql_api_id: string;
    default_address: {
      id: number;
      customer_id: number;
      first_name: null | string;
      last_name: null | string;
      company: null | string;
      address1: string;
      address2: null | string;
      city: string;
      province: string;
      country: string;
      zip: string;
      phone: string;
      name: string;
      province_code: string;
      country_code: string;
      country_name: string;
      default: boolean;
    };
  };
  discount_applications: any[];
  fulfillments: any[];
  line_items: {
    id: number;
    admin_graphql_api_id: string;
    attributed_staffs: { id: string; quantity: number }[];
    current_quantity: number;
    fulfillable_quantity: number;
    fulfillment_service: string;
    fulfillment_status: null | string;
    gift_card: boolean;
    grams: number;
    name: string;
    price: string;
    price_set: {
      shop_money: { amount: string; currency_code: string };
      presentment_money: { amount: string; currency_code: string };
    };
    product_exists: boolean;
    product_id: number;
    properties: any[];
    quantity: number;
    requires_shipping: boolean;
    sku: string;
    taxable: boolean;
    title: string;
    total_discount: string;
    total_discount_set: {
      shop_money: { amount: string; currency_code: string };
      presentment_money: { amount: string; currency_code: string };
    };
    variant_id: number;
    variant_inventory_management: string;
    variant_title: null | string;
    vendor: null | string;
    tax_lines: any[];
    duties: any[];
    discount_allocations: any[];
  }[];
  payment_terms: null | string;
  refunds: any[];
  shipping_address: {
    first_name: string;
    address1: string;
    phone: string;
    city: string;
    zip: string;
    province: string;
    country: string;
    last_name: string;
    address2: null | string;
    company: string;
    latitude: null | string;
    longitude: null | string;
    name: string;
    country_code: string;
    province_code: string;
  };
  shipping_lines: {
    id: number;
    carrier_identifier: null | string;
    code: null | string;
    current_discounted_price_set: {
      shop_money: { amount: string; currency_code: string };
      presentment_money: { amount: string; currency_code: string };
    };
    discounted_price: string;
    discounted_price_set: {
      shop_money: { amount: string; currency_code: string };
      presentment_money: { amount: string; currency_code: string };
    };
    is_removed: boolean;
    phone: null | string;
    price: string;
    price_set: {
      shop_money: { amount: string; currency_code: string };
      presentment_money: { amount: string; currency_code: string };
    };
    requested_fulfillment_service_id: null | string;
    source: string;
    title: string;
    tax_lines: any[];
    discount_allocations: any[];
  }[];
  returns: any[];
}

// Types for CUSTOMER_TAGS_REMOVED
export interface CUSTOMER_TAGS_REMOVED {
  customerId: string;
  tags: string[];
  occurredAt: string;
}

// Types for INVENTORY_LEVELS_UPDATE
export interface INVENTORY_LEVELS_UPDATE {
  inventory_item_id: number;
  location_id: number;
  available: null | string;
  updated_at: string;
  admin_graphql_api_id: string;
}

// Types for METAOBJECTS_UPDATE
export interface METAOBJECTS_UPDATE {
  type: string;
  handle: string;
  created_at: string;
  updated_at: string;
  display_name: string;
  id: string;
  definition_id: string;
  fields: {};
  created_by_staff_id: string;
  created_by_app_id: string;
  capabilities: { publishable: { status: string } };
}

// Types for PROFILES_CREATE
export interface PROFILES_CREATE {
  id: number;
}

// Types for THEMES_PUBLISH
export interface THEMES_PUBLISH {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  role: string;
  theme_store_id: number;
  previewable: boolean;
  processing: boolean;
  admin_graphql_api_id: string;
}

// Types for COMPANIES_UPDATE
export interface COMPANIES_UPDATE {
  name: string;
  note: string;
  external_id: string;
  main_contact_admin_graphql_api_id: string;
  created_at: string;
  updated_at: string;
  customer_since: string;
  admin_graphql_api_id: string;
}

// Types for PRODUCT_LISTINGS_ADD
export interface PRODUCT_LISTINGS_ADD {
  product_listing: {
    product_id: number;
    created_at: null | string;
    updated_at: string;
    body_html: string;
    handle: string;
    product_type: string;
    title: string;
    vendor: string;
    available: boolean;
    tags: string;
    published_at: string;
    variants: {
      id: number;
      title: string;
      option_values: { option_id: number; name: string; value: string }[];
      price: string;
      formatted_price: string;
      compare_at_price: string;
      grams: number;
      requires_shipping: boolean;
      sku: null | string;
      barcode: null | string;
      taxable: boolean;
      position: number;
      available: boolean;
      inventory_policy: string;
      inventory_quantity: number;
      inventory_management: null | string;
      fulfillment_service: string;
      weight: null | string;
      weight_unit: string;
      image_id: null | string;
      created_at: string;
      updated_at: string;
    }[];
    images: any[];
    options: {
      id: number;
      name: string;
      product_id: number;
      position: number;
      values: string[];
    }[];
  };
}

// Types for SUBSCRIPTION_BILLING_CYCLES_UNSKIP
export interface SUBSCRIPTION_BILLING_CYCLES_UNSKIP {
  subscription_contract_id: number;
  cycle_start_at: string;
  cycle_end_at: string;
  cycle_index: number;
  contract_edit: null | string;
  billing_attempt_expected_date: string;
  skipped: boolean;
  edited: boolean;
}

// Types for SUBSCRIPTION_CONTRACTS_CREATE
export interface SUBSCRIPTION_CONTRACTS_CREATE {
  admin_graphql_api_id: string;
  id: number;
  billing_policy: {
    interval: string;
    interval_count: number;
    min_cycles: number;
    max_cycles: number;
  };
  currency_code: string;
  customer_id: number;
  admin_graphql_api_customer_id: string;
  delivery_policy: { interval: string; interval_count: number };
  status: string;
  admin_graphql_api_origin_order_id: string;
  origin_order_id: number;
  revision_id: string;
}

// Types for AUDIT_EVENTS_ADMIN_API_ACTIVITY
export interface AUDIT_EVENTS_ADMIN_API_ACTIVITY {
  events: {
    time: number;
    event: {
      context: {
        context_type: string;
        context_identifier: string;
        context_metadata: {
          client_ip: string;
          content_type: string;
          response_time_ms: number;
          user_agent: string;
          api_request_failed: boolean;
          response_code: number;
        };
      };
      action: string;
      actor: {
        actor_type: string;
        actor_identifier: number;
        actor_metadata: {
          app_name: string;
          api_version_requested: string;
          api_version_served: string;
          ecosystem_category: string;
        };
        on_behalf_of: { user_email: string };
      };
      subject: {
        subject_type: string;
        subject_identifier: string;
        subject_metadata: {};
      };
      timestamp: string;
      additional_metadata: {
        request_type: string;
        mutation_names: any[];
        query: string;
        variables: { first: number };
        error_codes: any[];
      };
    };
  }[];
}

// Types for CUSTOMERS_REDACT
export interface CUSTOMERS_REDACT {
  shop_id: number;
  shop_domain: string;
  customer: { id: number; email: string; phone: string };
  orders_to_redact: number[];
}

// Types for SUBSCRIPTION_BILLING_CYCLE_EDITS_CREATE
export interface SUBSCRIPTION_BILLING_CYCLE_EDITS_CREATE {
  subscription_contract_id: number;
  cycle_start_at: string;
  cycle_end_at: string;
  cycle_index: number;
  contract_edit: null | string;
  billing_attempt_expected_date: string;
  skipped: boolean;
  edited: boolean;
}

// Types for PRODUCT_LISTINGS_REMOVE
export interface PRODUCT_LISTINGS_REMOVE {
  product_listing: { product_id: number };
}

// Types for RETURNS_UPDATE
export interface RETURNS_UPDATE {
  admin_graphql_api_id: string;
  return_line_items: {
    removals: { admin_graphql_api_id: string; delta: number }[];
  };
  restocking_fees: { updates: any[]; removals: any[] };
  return_shipping_fees: { updates: any[]; removals: any[] };
}

// Types for MARKETS_DELETE
export interface MARKETS_DELETE {
  id: number;
}

// Types for PRODUCT_PUBLICATIONS_UPDATE
export interface PRODUCT_PUBLICATIONS_UPDATE {
  id: null | string;
  publication_id: null | string;
  published_at: string;
  published: boolean;
  created_at: null | string;
  updated_at: null | string;
  product_id: number;
}

// Types for CARTS_CREATE
export interface CARTS_CREATE {
  id: string;
  token: string;
  line_items: {
    id: number;
    properties: {};
    quantity: number;
    variant_id: number;
    key: string;
    discounted_price: string;
    discounts: any[];
    gift_card: boolean;
    grams: number;
    line_price: string;
    original_line_price: string;
    original_price: string;
    price: string;
    product_id: number;
    sku: string;
    taxable: boolean;
    title: string;
    total_discount: string;
    vendor: string;
    discounted_price_set: {
      shop_money: { amount: string; currency_code: string };
      presentment_money: { amount: string; currency_code: string };
    };
    line_price_set: {
      shop_money: { amount: string; currency_code: string };
      presentment_money: { amount: string; currency_code: string };
    };
    original_line_price_set: {
      shop_money: { amount: string; currency_code: string };
      presentment_money: { amount: string; currency_code: string };
    };
    price_set: {
      shop_money: { amount: string; currency_code: string };
      presentment_money: { amount: string; currency_code: string };
    };
    total_discount_set: {
      shop_money: { amount: string; currency_code: string };
      presentment_money: { amount: string; currency_code: string };
    };
  }[];
  note: null | string;
  updated_at: string;
  created_at: string;
}

// Types for INVENTORY_ITEMS_CREATE
export interface INVENTORY_ITEMS_CREATE {
  id: number;
  sku: string;
  created_at: string;
  updated_at: string;
  requires_shipping: boolean;
  cost: null | string;
  country_code_of_origin: null | string;
  province_code_of_origin: null | string;
  harmonized_system_code: null | string;
  tracked: boolean;
  country_harmonized_system_codes: any[];
  admin_graphql_api_id: string;
}

// Types for FULFILLMENT_ORDERS_ORDER_ROUTING_COMPLETE
export interface FULFILLMENT_ORDERS_ORDER_ROUTING_COMPLETE {
  fulfillment_order: { id: string; status: string };
}

// Types for SEGMENTS_DELETE
export interface SEGMENTS_DELETE {
  id: number;
}

// Types for APP_UNINSTALLED
export interface APP_UNINSTALLED {
  id: number;
  name: string;
  email: string;
  domain: null | string;
  province: string;
  country: string;
  address1: string;
  zip: string;
  city: string;
  source: null | string;
  phone: string;
  latitude: null | string;
  longitude: null | string;
  primary_locale: string;
  address2: null | string;
  created_at: null | string;
  updated_at: null | string;
  country_code: string;
  country_name: string;
  currency: string;
  customer_email: string;
  timezone: string;
  iana_timezone: null | string;
  shop_owner: string;
  money_format: string;
  money_with_currency_format: string;
  weight_unit: string;
  province_code: string;
  taxes_included: null | string;
  auto_configure_tax_inclusivity: null | string;
  tax_shipping: null | string;
  county_taxes: null | string;
  plan_display_name: string;
  plan_name: string;
  has_discounts: boolean;
  has_gift_cards: boolean;
  myshopify_domain: null | string;
  google_apps_domain: null | string;
  google_apps_login_enabled: null | string;
  money_in_emails_format: string;
  money_with_currency_in_emails_format: string;
  eligible_for_payments: boolean;
  requires_extra_payments_agreement: boolean;
  password_enabled: null | string;
  has_storefront: boolean;
  finances: boolean;
  primary_location_id: number;
  checkout_api_supported: boolean;
  multi_location_enabled: boolean;
  setup_required: boolean;
  pre_launch_enabled: boolean;
  enabled_presentment_currencies: string[];
  marketing_sms_consent_enabled_at_checkout: boolean;
  transactional_sms_disabled: boolean;
}

// Types for FULFILLMENT_ORDERS_SCHEDULED_FULFILLMENT_ORDER_READY
export interface FULFILLMENT_ORDERS_SCHEDULED_FULFILLMENT_ORDER_READY {
  fulfillment_order: { id: string; status: string };
}

// Types for DISCOUNTS_REDEEMCODE_ADDED
export interface DISCOUNTS_REDEEMCODE_ADDED {
  admin_graphql_api_id: string;
  redeem_code: { id: string; code: string };
  updated_at: string;
}

// Types for COMPANY_LOCATIONS_UPDATE
export interface COMPANY_LOCATIONS_UPDATE {
  name: string;
  external_id: string;
  phone: string;
  locale: string;
  created_at: string;
  updated_at: string;
  note: string;
  buyer_experience_configuration: null | string;
  admin_graphql_api_id: string;
  tax_exemptions: string[];
  company: {
    name: string;
    note: string;
    external_id: string;
    main_contact_admin_graphql_api_id: string;
    created_at: string;
    updated_at: string;
    customer_since: string;
    admin_graphql_api_id: string;
  };
  billing_address: {
    address1: string;
    city: string;
    province: string;
    country: string;
    zip: string;
    recipient: string;
    first_name: null | string;
    last_name: null | string;
    address2: null | string;
    phone: string;
    zone_code: string;
    country_code: string;
    created_at: string;
    updated_at: string;
    admin_graphql_api_id: string;
    company_admin_graphql_api_id: string;
  };
  shipping_address: {
    address1: string;
    city: string;
    province: string;
    country: string;
    zip: string;
    recipient: string;
    first_name: null | string;
    last_name: null | string;
    address2: null | string;
    phone: string;
    zone_code: string;
    country_code: string;
    created_at: string;
    updated_at: string;
    admin_graphql_api_id: string;
    company_admin_graphql_api_id: string;
  };
  tax_registration: { tax_id: string };
}

// Types for FULFILLMENT_ORDERS_CANCELLATION_REQUEST_ACCEPTED
export interface FULFILLMENT_ORDERS_CANCELLATION_REQUEST_ACCEPTED {
  fulfillment_order: { id: string; status: string };
  message: string;
}

// Types for PRODUCT_FEEDS_UPDATE
export interface PRODUCT_FEEDS_UPDATE {
  id: string;
  country: string;
  language: string;
  status: string;
}

// Types for CUSTOMERS_DATA_REQUEST
export interface CUSTOMERS_DATA_REQUEST {
  shop_id: number;
  shop_domain: string;
  orders_requested: number[];
  customer: { id: number; email: string; phone: string };
  data_request: { id: number };
}

// Types for CUSTOMERS_MARKETING_CONSENT_UPDATE
export interface CUSTOMERS_MARKETING_CONSENT_UPDATE {
  id: number;
  phone: null | string;
  sms_marketing_consent: {
    state: null | string;
    opt_in_level: null | string;
    consent_updated_at: null | string;
    consent_collected_from: string;
  };
}

// Types for COLLECTION_PUBLICATIONS_DELETE
export interface COLLECTION_PUBLICATIONS_DELETE {
  id: null | string;
}

// Types for LOCATIONS_UPDATE
export interface LOCATIONS_UPDATE {
  id: number;
  name: string;
  address1: string;
  address2: string;
  city: string;
  zip: string;
  province: string;
  country: string;
  phone: string;
  created_at: string;
  updated_at: string;
  country_code: string;
  country_name: string;
  province_code: string;
  legacy: boolean;
  active: boolean;
  admin_graphql_api_id: string;
}

// Types for COLLECTION_LISTINGS_REMOVE
export interface COLLECTION_LISTINGS_REMOVE {
  collection_listing: { collection_id: number };
}

// Types for CUSTOMERS_UPDATE
export interface CUSTOMERS_UPDATE {
  id: number;
  email: string;
  created_at: string;
  updated_at: string;
  first_name: string;
  last_name: string;
  orders_count: number;
  state: string;
  total_spent: string;
  last_order_id: null | string;
  note: string;
  verified_email: boolean;
  multipass_identifier: null | string;
  tax_exempt: boolean;
  tags: string;
  last_order_name: null | string;
  currency: string;
  phone: null | string;
  addresses: any[];
  tax_exemptions: any[];
  email_marketing_consent: null | string;
  sms_marketing_consent: null | string;
  admin_graphql_api_id: string;
}

// Types for FULFILLMENT_ORDERS_MERGED
export interface FULFILLMENT_ORDERS_MERGED {
  merge_intents: {
    fulfillment_order_id: number;
    fulfillment_order_line_items: { id: number; quantity: number }[];
  }[];
  fulfillment_order_merges: {
    fulfillment_order: { id: string; status: string };
  };
}

// Types for RETURNS_CANCEL
export interface RETURNS_CANCEL {
  id: number;
  admin_graphql_api_id: string;
  order_id: number;
  status: string;
}

// Types for FULFILLMENT_ORDERS_CANCELLED
export interface FULFILLMENT_ORDERS_CANCELLED {
  fulfillment_order: { id: string; status: string };
  replacement_fulfillment_order: { id: string; status: string };
}

// Types for COLLECTIONS_CREATE
export interface COLLECTIONS_CREATE {
  id: number;
  handle: string;
  title: string;
  updated_at: string;
  body_html: string;
  published_at: string;
  sort_order: null | string;
  template_suffix: null | string;
  published_scope: string;
  admin_graphql_api_id: string;
}
