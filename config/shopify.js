import { DeliveryMethod, shopifyApi } from "@shopify/shopify-api";
import "@shopify/shopify-api/adapters/node";
import fs from "fs";

const isDev = process.env.NODE_ENV === "development";

// Setup Shopify configuration
const shopify = shopifyApi({
  apiKey: process.env.SHOPIFY_API_KEY,
  apiSecretKey: process.env.SHOPIFY_API_SECRET,
  scopes: process.env.SHOPIFY_API_SCOPES,
  hostName: process.env.SHOPIFY_APP_URL.replace(/https:\/\//, ""),
  hostScheme: "https",
  apiVersion: process.env.SHOPIFY_API_VERSION,
  isEmbeddedApp: true,
  logger: { level: isDev ? 0 : 0 }, //Error = 0,Warning = 1,Info = 2,Debug = 3
});

const functionCommonCallback = (topic, shop, webhookRequestBody) => {
  console.log("Processing webhook", topic);
  fs.writeFile(
    `${process.cwd()}/_developer/${topic}.json`,
    `${topic}${webhookRequestBody}`,
    (err) => {
      if (err) {
        console.log("Error happened writing to file", topic);
        return;
      }
    }
  );
};

shopify.webhooks.addHandlers({
  APP_PURCHASES_ONE_TIME_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/app_purchases_one_time_update",
    callback: functionCommonCallback,
  },
  APP_SUBSCRIPTIONS_APPROACHING_CAPPED_AMOUNT: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/app_subscriptions_approaching_capped_amount",
    callback: functionCommonCallback,
  },
  APP_SUBSCRIPTIONS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/app_subscriptions_update",
    callback: functionCommonCallback,
  },
  APP_UNINSTALLED: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/app_uninstalled",
    callback: functionCommonCallback,
  },
  ATTRIBUTED_SESSIONS_FIRST: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/attributed_sessions_first",
    callback: functionCommonCallback,
  },
  ATTRIBUTED_SESSIONS_LAST: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/attributed_sessions_last",
    callback: functionCommonCallback,
  },
  AUDIT_EVENTS_ADMIN_API_ACTIVITY: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/audit_events_admin_api_activity",
    callback: functionCommonCallback,
  },
  BULK_OPERATIONS_FINISH: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/bulk_operations_finish",
    callback: functionCommonCallback,
  },
  CARTS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/carts_create",
    callback: functionCommonCallback,
  },
  CARTS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/carts_update",
    callback: functionCommonCallback,
  },
  CHANNELS_DELETE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/channels_delete",
    callback: functionCommonCallback,
  },
  CHECKOUTS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/checkouts_create",
    callback: functionCommonCallback,
  },
  CHECKOUTS_DELETE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/checkouts_delete",
    callback: functionCommonCallback,
  },
  CHECKOUTS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/checkouts_update",
    callback: functionCommonCallback,
  },
  COLLECTIONS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/collections_create",
    callback: functionCommonCallback,
  },
  COLLECTIONS_DELETE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/collections_delete",
    callback: functionCommonCallback,
  },
  COLLECTIONS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/collections_update",
    callback: functionCommonCallback,
  },
  COLLECTION_LISTINGS_ADD: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/collection_listings_add",
    callback: functionCommonCallback,
  },
  COLLECTION_LISTINGS_REMOVE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/collection_listings_remove",
    callback: functionCommonCallback,
  },
  COLLECTION_LISTINGS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/collection_listings_update",
    callback: functionCommonCallback,
  },
  COLLECTION_PUBLICATIONS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/collection_publications_create",
    callback: functionCommonCallback,
  },
  COLLECTION_PUBLICATIONS_DELETE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/collection_publications_delete",
    callback: functionCommonCallback,
  },
  COLLECTION_PUBLICATIONS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/collection_publications_update",
    callback: functionCommonCallback,
  },
  COMPANIES_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/companies_create",
    callback: functionCommonCallback,
  },
  COMPANIES_DELETE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/companies_delete",
    callback: functionCommonCallback,
  },
  COMPANIES_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/companies_update",
    callback: functionCommonCallback,
  },
  COMPANY_CONTACTS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/company_contacts_create",
    callback: functionCommonCallback,
  },
  COMPANY_CONTACTS_DELETE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/company_contacts_delete",
    callback: functionCommonCallback,
  },
  COMPANY_CONTACTS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/company_contacts_update",
    callback: functionCommonCallback,
  },
  COMPANY_CONTACT_ROLES_ASSIGN: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/company_contact_roles_assign",
    callback: functionCommonCallback,
  },
  COMPANY_CONTACT_ROLES_REVOKE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/company_contact_roles_revoke",
    callback: functionCommonCallback,
  },
  COMPANY_LOCATIONS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/company_locations_create",
    callback: functionCommonCallback,
  },
  COMPANY_LOCATIONS_DELETE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/company_locations_delete",
    callback: functionCommonCallback,
  },
  COMPANY_LOCATIONS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/company_locations_update",
    callback: functionCommonCallback,
  },
  CUSTOMERS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/customers_create",
    callback: functionCommonCallback,
  },
  CUSTOMERS_DELETE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/customers_delete",
    callback: functionCommonCallback,
  },
  CUSTOMERS_DISABLE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/customers_disable",
    callback: functionCommonCallback,
  },
  CUSTOMERS_EMAIL_MARKETING_CONSENT_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/customers_email_marketing_consent_update",
    callback: functionCommonCallback,
  },
  CUSTOMERS_ENABLE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/customers_enable",
    callback: functionCommonCallback,
  },
  CUSTOMERS_MARKETING_CONSENT_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/customers_marketing_consent_update",
    callback: functionCommonCallback,
  },
  CUSTOMERS_MERGE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/customers_merge",
    callback: functionCommonCallback,
  },
  CUSTOMERS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/customers_update",
    callback: functionCommonCallback,
  },
  CUSTOMER_GROUPS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/customer_groups_create",
    callback: functionCommonCallback,
  },
  CUSTOMER_GROUPS_DELETE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/customer_groups_delete",
    callback: functionCommonCallback,
  },
  CUSTOMER_GROUPS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/customer_groups_update",
    callback: functionCommonCallback,
  },
  CUSTOMER_PAYMENT_METHODS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/customer_payment_methods_create",
    callback: functionCommonCallback,
  },
  CUSTOMER_PAYMENT_METHODS_REVOKE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/customer_payment_methods_revoke",
    callback: functionCommonCallback,
  },
  CUSTOMER_PAYMENT_METHODS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/customer_payment_methods_update",
    callback: functionCommonCallback,
  },
  CUSTOMER_TAGS_ADDED: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/customer_tags_added",
    callback: functionCommonCallback,
  },
  CUSTOMER_TAGS_REMOVED: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/customer_tags_removed",
    callback: functionCommonCallback,
  },
  DISPUTES_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/disputes_create",
    callback: functionCommonCallback,
  },
  DISPUTES_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/disputes_update",
    callback: functionCommonCallback,
  },
  DOMAINS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/domains_create",
    callback: functionCommonCallback,
  },
  DOMAINS_DESTROY: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/domains_destroy",
    callback: functionCommonCallback,
  },
  DOMAINS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/domains_update",
    callback: functionCommonCallback,
  },
  DRAFT_ORDERS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/draft_orders_create",
    callback: functionCommonCallback,
  },
  DRAFT_ORDERS_DELETE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/draft_orders_delete",
    callback: functionCommonCallback,
  },
  DRAFT_ORDERS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/draft_orders_update",
    callback: functionCommonCallback,
  },
  FULFILLMENTS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/fulfillments_create",
    callback: functionCommonCallback,
  },
  FULFILLMENTS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/fulfillments_update",
    callback: functionCommonCallback,
  },
  FULFILLMENT_EVENTS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/fulfillment_events_create",
    callback: functionCommonCallback,
  },
  FULFILLMENT_EVENTS_DELETE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/fulfillment_events_delete",
    callback: functionCommonCallback,
  },
  FULFILLMENT_ORDERS_CANCELLATION_REQUEST_ACCEPTED: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl:
      "/api/webhooks/fulfillment_orders_cancellation_request_accepted",
    callback: functionCommonCallback,
  },
  FULFILLMENT_ORDERS_CANCELLATION_REQUEST_REJECTED: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl:
      "/api/webhooks/fulfillment_orders_cancellation_request_rejected",
    callback: functionCommonCallback,
  },
  FULFILLMENT_ORDERS_CANCELLATION_REQUEST_SUBMITTED: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl:
      "/api/webhooks/fulfillment_orders_cancellation_request_submitted",
    callback: functionCommonCallback,
  },
  FULFILLMENT_ORDERS_CANCELLED: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/fulfillment_orders_cancelled",
    callback: functionCommonCallback,
  },
  FULFILLMENT_ORDERS_FULFILLMENT_REQUEST_ACCEPTED: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl:
      "/api/webhooks/fulfillment_orders_fulfillment_request_accepted",
    callback: functionCommonCallback,
  },
  FULFILLMENT_ORDERS_FULFILLMENT_REQUEST_REJECTED: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl:
      "/api/webhooks/fulfillment_orders_fulfillment_request_rejected",
    callback: functionCommonCallback,
  },
  FULFILLMENT_ORDERS_FULFILLMENT_REQUEST_SUBMITTED: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl:
      "/api/webhooks/fulfillment_orders_fulfillment_request_submitted",
    callback: functionCommonCallback,
  },
  FULFILLMENT_ORDERS_FULFILLMENT_SERVICE_FAILED_TO_COMPLETE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl:
      "/api/webhooks/fulfillment_orders_fulfillment_service_failed_to_complete",
    callback: functionCommonCallback,
  },
  FULFILLMENT_ORDERS_HOLD_RELEASED: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/fulfillment_orders_hold_released",
    callback: functionCommonCallback,
  },
  FULFILLMENT_ORDERS_LINE_ITEMS_PREPARED_FOR_LOCAL_DELIVERY: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl:
      "/api/webhooks/fulfillment_orders_line_items_prepared_for_local_delivery",
    callback: functionCommonCallback,
  },
  FULFILLMENT_ORDERS_LINE_ITEMS_PREPARED_FOR_PICKUP: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl:
      "/api/webhooks/fulfillment_orders_line_items_prepared_for_pickup",
    callback: functionCommonCallback,
  },
  FULFILLMENT_ORDERS_MOVED: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/fulfillment_orders_moved",
    callback: functionCommonCallback,
  },
  FULFILLMENT_ORDERS_ORDER_ROUTING_COMPLETE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/fulfillment_orders_order_routing_complete",
    callback: functionCommonCallback,
  },
  FULFILLMENT_ORDERS_PLACED_ON_HOLD: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/fulfillment_orders_placed_on_hold",
    callback: functionCommonCallback,
  },
  FULFILLMENT_ORDERS_RESCHEDULED: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/fulfillment_orders_rescheduled",
    callback: functionCommonCallback,
  },
  FULFILLMENT_ORDERS_SCHEDULED_FULFILLMENT_ORDER_READY: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl:
      "/api/webhooks/fulfillment_orders_scheduled_fulfillment_order_ready",
    callback: functionCommonCallback,
  },
  INVENTORY_ITEMS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/inventory_items_create",
    callback: functionCommonCallback,
  },
  INVENTORY_ITEMS_DELETE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/inventory_items_delete",
    callback: functionCommonCallback,
  },
  INVENTORY_ITEMS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/inventory_items_update",
    callback: functionCommonCallback,
  },
  INVENTORY_LEVELS_CONNECT: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/inventory_levels_connect",
    callback: functionCommonCallback,
  },
  INVENTORY_LEVELS_DISCONNECT: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/inventory_levels_disconnect",
    callback: functionCommonCallback,
  },
  INVENTORY_LEVELS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/inventory_levels_update",
    callback: functionCommonCallback,
  },
  LOCALES_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/locales_create",
    callback: functionCommonCallback,
  },
  LOCALES_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/locales_update",
    callback: functionCommonCallback,
  },
  LOCATIONS_ACTIVATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/locations_activate",
    callback: functionCommonCallback,
  },
  LOCATIONS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/locations_create",
    callback: functionCommonCallback,
  },
  LOCATIONS_DEACTIVATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/locations_deactivate",
    callback: functionCommonCallback,
  },
  LOCATIONS_DELETE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/locations_delete",
    callback: functionCommonCallback,
  },
  LOCATIONS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/locations_update",
    callback: functionCommonCallback,
  },
  MARKETS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/markets_create",
    callback: functionCommonCallback,
  },
  MARKETS_DELETE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/markets_delete",
    callback: functionCommonCallback,
  },
  MARKETS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/markets_update",
    callback: functionCommonCallback,
  },
  ORDERS_CANCELLED: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/orders_cancelled",
    callback: functionCommonCallback,
  },
  ORDERS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/orders_create",
    callback: functionCommonCallback,
  },
  ORDERS_DELETE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/orders_delete",
    callback: functionCommonCallback,
  },
  ORDERS_EDITED: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/orders_edited",
    callback: functionCommonCallback,
  },
  ORDERS_FULFILLED: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/orders_fulfilled",
    callback: functionCommonCallback,
  },
  ORDERS_PAID: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/orders_paid",
    callback: functionCommonCallback,
  },
  ORDERS_PARTIALLY_FULFILLED: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/orders_partially_fulfilled",
    callback: functionCommonCallback,
  },
  ORDERS_SHOPIFY_PROTECT_ELIGIBILITY_CHANGED: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/orders_shopify_protect_eligibility_changed",
    callback: functionCommonCallback,
  },
  ORDERS_UPDATED: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/orders_updated",
    callback: functionCommonCallback,
  },
  ORDER_TRANSACTIONS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/order_transactions_create",
    callback: functionCommonCallback,
  },
  PAYMENT_SCHEDULES_DUE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/payment_schedules_due",
    callback: functionCommonCallback,
  },
  PAYMENT_TERMS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/payment_terms_create",
    callback: functionCommonCallback,
  },
  PAYMENT_TERMS_DELETE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/payment_terms_delete",
    callback: functionCommonCallback,
  },
  PAYMENT_TERMS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/payment_terms_update",
    callback: functionCommonCallback,
  },
  PRODUCTS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/products_create",
    callback: functionCommonCallback,
  },
  PRODUCTS_DELETE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/products_delete",
    callback: functionCommonCallback,
  },
  PRODUCTS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/products_update",
    callback: functionCommonCallback,
  },
  PRODUCT_FEEDS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/product_feeds_create",
    callback: functionCommonCallback,
  },
  PRODUCT_FEEDS_FULL_SYNC: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/product_feeds_full_sync",
    callback: functionCommonCallback,
  },
  PRODUCT_FEEDS_INCREMENTAL_SYNC: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/product_feeds_incremental_sync",
    callback: functionCommonCallback,
  },
  PRODUCT_FEEDS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/product_feeds_update",
    callback: functionCommonCallback,
  },
  PRODUCT_LISTINGS_ADD: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/product_listings_add",
    callback: functionCommonCallback,
  },
  PRODUCT_LISTINGS_REMOVE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/product_listings_remove",
    callback: functionCommonCallback,
  },
  PRODUCT_LISTINGS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/product_listings_update",
    callback: functionCommonCallback,
  },
  PRODUCT_PUBLICATIONS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/product_publications_create",
    callback: functionCommonCallback,
  },
  PRODUCT_PUBLICATIONS_DELETE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/product_publications_delete",
    callback: functionCommonCallback,
  },
  PRODUCT_PUBLICATIONS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/product_publications_update",
    callback: functionCommonCallback,
  },
  PROFILES_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/profiles_create",
    callback: functionCommonCallback,
  },
  PROFILES_DELETE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/profiles_delete",
    callback: functionCommonCallback,
  },
  PROFILES_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/profiles_update",
    callback: functionCommonCallback,
  },
  PUBLICATIONS_DELETE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/publications_delete",
    callback: functionCommonCallback,
  },
  REFUNDS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/refunds_create",
    callback: functionCommonCallback,
  },
  RETURNS_APPROVE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/returns_approve",
    callback: functionCommonCallback,
  },
  RETURNS_CANCEL: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/returns_cancel",
    callback: functionCommonCallback,
  },
  RETURNS_CLOSE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/returns_close",
    callback: functionCommonCallback,
  },
  RETURNS_DECLINE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/returns_decline",
    callback: functionCommonCallback,
  },
  RETURNS_REOPEN: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/returns_reopen",
    callback: functionCommonCallback,
  },
  RETURNS_REQUEST: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/returns_request",
    callback: functionCommonCallback,
  },
  REVERSE_DELIVERIES_ATTACH_DELIVERABLE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/reverse_deliveries_attach_deliverable",
    callback: functionCommonCallback,
  },
  REVERSE_FULFILLMENT_ORDERS_DISPOSE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/reverse_fulfillment_orders_dispose",
    callback: functionCommonCallback,
  },
  SCHEDULED_PRODUCT_LISTINGS_ADD: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/scheduled_product_listings_add",
    callback: functionCommonCallback,
  },
  SCHEDULED_PRODUCT_LISTINGS_REMOVE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/scheduled_product_listings_remove",
    callback: functionCommonCallback,
  },
  SCHEDULED_PRODUCT_LISTINGS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/scheduled_product_listings_update",
    callback: functionCommonCallback,
  },
  SEGMENTS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/segments_create",
    callback: functionCommonCallback,
  },
  SEGMENTS_DELETE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/segments_delete",
    callback: functionCommonCallback,
  },
  SEGMENTS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/segments_update",
    callback: functionCommonCallback,
  },
  SELLING_PLAN_GROUPS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/selling_plan_groups_create",
    callback: functionCommonCallback,
  },
  SELLING_PLAN_GROUPS_DELETE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/selling_plan_groups_delete",
    callback: functionCommonCallback,
  },
  SELLING_PLAN_GROUPS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/selling_plan_groups_update",
    callback: functionCommonCallback,
  },
  SHIPPING_ADDRESSES_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/shipping_addresses_create",
    callback: functionCommonCallback,
  },
  SHIPPING_ADDRESSES_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/shipping_addresses_update",
    callback: functionCommonCallback,
  },
  SHOP_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/shop_update",
    callback: functionCommonCallback,
  },
  SUBSCRIPTION_BILLING_ATTEMPTS_CHALLENGED: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/subscription_billing_attempts_challenged",
    callback: functionCommonCallback,
  },
  SUBSCRIPTION_BILLING_ATTEMPTS_FAILURE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/subscription_billing_attempts_failure",
    callback: functionCommonCallback,
  },
  SUBSCRIPTION_BILLING_ATTEMPTS_SUCCESS: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/subscription_billing_attempts_success",
    callback: functionCommonCallback,
  },
  SUBSCRIPTION_BILLING_CYCLE_EDITS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/subscription_billing_cycle_edits_create",
    callback: functionCommonCallback,
  },
  SUBSCRIPTION_BILLING_CYCLE_EDITS_DELETE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/subscription_billing_cycle_edits_delete",
    callback: functionCommonCallback,
  },
  SUBSCRIPTION_BILLING_CYCLE_EDITS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/subscription_billing_cycle_edits_update",
    callback: functionCommonCallback,
  },
  SUBSCRIPTION_CONTRACTS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/subscription_contracts_create",
    callback: functionCommonCallback,
  },
  SUBSCRIPTION_CONTRACTS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/subscription_contracts_update",
    callback: functionCommonCallback,
  },
  TAX_PARTNERS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/tax_partners_update",
    callback: functionCommonCallback,
  },
  TAX_SERVICES_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/tax_services_create",
    callback: functionCommonCallback,
  },
  TAX_SERVICES_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/tax_services_update",
    callback: functionCommonCallback,
  },
  TENDER_TRANSACTIONS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/tender_transactions_create",
    callback: functionCommonCallback,
  },
  THEMES_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/themes_create",
    callback: functionCommonCallback,
  },
  THEMES_DELETE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/themes_delete",
    callback: functionCommonCallback,
  },
  THEMES_PUBLISH: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/themes_publish",
    callback: functionCommonCallback,
  },
  THEMES_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/themes_update",
    callback: functionCommonCallback,
  },
  VARIANTS_IN_STOCK: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/variants_in_stock",
    callback: functionCommonCallback,
  },
  VARIANTS_OUT_OF_STOCK: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/variants_out_of_stock",
    callback: functionCommonCallback,
  },
});

export default shopify;
