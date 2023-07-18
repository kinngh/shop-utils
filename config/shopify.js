/**
 *
 * Subscribe to all possible webhook topics
 * and in the function, write them in `_developer/` as a JSON
 * The first line is the name of the topic
 * Followed by the JSON payload
 * All the JSON files are invalid, just because.
 * 
 */

import { DeliveryMethod, LogSeverity, shopifyApi } from "@shopify/shopify-api";
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
  // logger: { level: LogSeverity.Debug, httpRequests: true }, //For insane levels of debugging
});

shopify.webhooks.addHandlers({
  APP_PURCHASES_ONE_TIME_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/app_purchases_one_time_update",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  APP_SUBSCRIPTIONS_APPROACHING_CAPPED_AMOUNT: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/app_subscriptions_approaching_capped_amount",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  APP_SUBSCRIPTIONS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/app_subscriptions_update",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  APP_UNINSTALLED: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/app_uninstalled",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  ATTRIBUTED_SESSIONS_FIRST: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/attributed_sessions_first",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  ATTRIBUTED_SESSIONS_LAST: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/attributed_sessions_last",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  AUDIT_EVENTS_ADMIN_API_ACTIVITY: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/audit_events_admin_api_activity",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  BULK_OPERATIONS_FINISH: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/bulk_operations_finish",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  CARTS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/carts_create",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  CARTS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/carts_update",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  CHANNELS_DELETE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/channels_delete",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  CHECKOUTS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/checkouts_create",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  CHECKOUTS_DELETE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/checkouts_delete",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  CHECKOUTS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/checkouts_update",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  COLLECTIONS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/collections_create",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  COLLECTIONS_DELETE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/collections_delete",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  COLLECTIONS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/collections_update",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  COLLECTION_LISTINGS_ADD: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/collection_listings_add",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  COLLECTION_LISTINGS_REMOVE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/collection_listings_remove",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  COLLECTION_LISTINGS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/collection_listings_update",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  COLLECTION_PUBLICATIONS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/collection_publications_create",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  COLLECTION_PUBLICATIONS_DELETE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/collection_publications_delete",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  COLLECTION_PUBLICATIONS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/collection_publications_update",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  COMPANIES_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/companies_create",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  COMPANIES_DELETE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/companies_delete",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  COMPANIES_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/companies_update",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  COMPANY_CONTACTS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/company_contacts_create",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  COMPANY_CONTACTS_DELETE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/company_contacts_delete",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  COMPANY_CONTACTS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/company_contacts_update",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  COMPANY_CONTACT_ROLES_ASSIGN: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/company_contact_roles_assign",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  COMPANY_CONTACT_ROLES_REVOKE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/company_contact_roles_revoke",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  COMPANY_LOCATIONS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/company_locations_create",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  COMPANY_LOCATIONS_DELETE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/company_locations_delete",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  COMPANY_LOCATIONS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/company_locations_update",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  CUSTOMERS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/customers_create",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  CUSTOMERS_DELETE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/customers_delete",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  CUSTOMERS_DISABLE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/customers_disable",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  CUSTOMERS_EMAIL_MARKETING_CONSENT_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/customers_email_marketing_consent_update",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  CUSTOMERS_ENABLE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/customers_enable",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  CUSTOMERS_MARKETING_CONSENT_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/customers_marketing_consent_update",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  CUSTOMERS_MERGE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/customers_merge",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  CUSTOMERS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/customers_update",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  CUSTOMER_GROUPS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/customer_groups_create",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  CUSTOMER_GROUPS_DELETE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/customer_groups_delete",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  CUSTOMER_GROUPS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/customer_groups_update",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  CUSTOMER_PAYMENT_METHODS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/customer_payment_methods_create",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  CUSTOMER_PAYMENT_METHODS_REVOKE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/customer_payment_methods_revoke",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  CUSTOMER_PAYMENT_METHODS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/customer_payment_methods_update",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  CUSTOMER_TAGS_ADDED: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/customer_tags_added",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  CUSTOMER_TAGS_REMOVED: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/customer_tags_removed",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  DISPUTES_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/disputes_create",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  DISPUTES_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/disputes_update",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  DOMAINS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/domains_create",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  DOMAINS_DESTROY: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/domains_destroy",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  DOMAINS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/domains_update",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  DRAFT_ORDERS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/draft_orders_create",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  DRAFT_ORDERS_DELETE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/draft_orders_delete",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  DRAFT_ORDERS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/draft_orders_update",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  FULFILLMENTS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/fulfillments_create",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  FULFILLMENTS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/fulfillments_update",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  FULFILLMENT_EVENTS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/fulfillment_events_create",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  FULFILLMENT_EVENTS_DELETE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/fulfillment_events_delete",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  FULFILLMENT_ORDERS_CANCELLATION_REQUEST_ACCEPTED: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/{",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  FULFILLMENT_ORDERS_CANCELLATION_REQUEST_REJECTED: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/{",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  FULFILLMENT_ORDERS_CANCELLATION_REQUEST_SUBMITTED: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/{",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  FULFILLMENT_ORDERS_CANCELLED: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/fulfillment_orders_cancelled",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  FULFILLMENT_ORDERS_FULFILLMENT_REQUEST_ACCEPTED: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/{",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  FULFILLMENT_ORDERS_FULFILLMENT_REQUEST_REJECTED: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/{",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  FULFILLMENT_ORDERS_FULFILLMENT_REQUEST_SUBMITTED: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/{",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  FULFILLMENT_ORDERS_FULFILLMENT_SERVICE_FAILED_TO_COMPLETE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/{",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  FULFILLMENT_ORDERS_HOLD_RELEASED: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/fulfillment_orders_hold_released",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  FULFILLMENT_ORDERS_LINE_ITEMS_PREPARED_FOR_LOCAL_DELIVERY: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/{",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  FULFILLMENT_ORDERS_LINE_ITEMS_PREPARED_FOR_PICKUP: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/{",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  FULFILLMENT_ORDERS_MOVED: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/fulfillment_orders_moved",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  FULFILLMENT_ORDERS_ORDER_ROUTING_COMPLETE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/fulfillment_orders_order_routing_complete",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  FULFILLMENT_ORDERS_PLACED_ON_HOLD: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/fulfillment_orders_placed_on_hold",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  FULFILLMENT_ORDERS_RESCHEDULED: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/fulfillment_orders_rescheduled",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  FULFILLMENT_ORDERS_SCHEDULED_FULFILLMENT_ORDER_READY: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/{",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  INVENTORY_ITEMS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/inventory_items_create",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  INVENTORY_ITEMS_DELETE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/inventory_items_delete",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  INVENTORY_ITEMS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/inventory_items_update",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  INVENTORY_LEVELS_CONNECT: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/inventory_levels_connect",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  INVENTORY_LEVELS_DISCONNECT: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/inventory_levels_disconnect",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  INVENTORY_LEVELS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/inventory_levels_update",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  LOCALES_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/locales_create",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  LOCALES_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/locales_update",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  LOCATIONS_ACTIVATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/locations_activate",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  LOCATIONS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/locations_create",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  LOCATIONS_DEACTIVATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/locations_deactivate",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  LOCATIONS_DELETE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/locations_delete",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  LOCATIONS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/locations_update",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  MARKETS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/markets_create",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  MARKETS_DELETE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/markets_delete",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  MARKETS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/markets_update",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  ORDERS_CANCELLED: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/orders_cancelled",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  ORDERS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/orders_create",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  ORDERS_DELETE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/orders_delete",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  ORDERS_EDITED: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/orders_edited",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  ORDERS_FULFILLED: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/orders_fulfilled",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  ORDERS_PAID: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/orders_paid",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  ORDERS_PARTIALLY_FULFILLED: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/orders_partially_fulfilled",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  ORDERS_UPDATED: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/orders_updated",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  ORDER_TRANSACTIONS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/order_transactions_create",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  PAYMENT_SCHEDULES_DUE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/payment_schedules_due",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  PAYMENT_TERMS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/payment_terms_create",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  PAYMENT_TERMS_DELETE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/payment_terms_delete",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  PAYMENT_TERMS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/payment_terms_update",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  PRODUCTS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/products_create",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  PRODUCTS_DELETE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/products_delete",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  PRODUCTS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/products_update",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  PRODUCT_FEEDS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/product_feeds_create",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  PRODUCT_FEEDS_FULL_SYNC: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/product_feeds_full_sync",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  PRODUCT_FEEDS_INCREMENTAL_SYNC: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/product_feeds_incremental_sync",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  PRODUCT_FEEDS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/product_feeds_update",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  PRODUCT_LISTINGS_ADD: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/product_listings_add",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  PRODUCT_LISTINGS_REMOVE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/product_listings_remove",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  PRODUCT_LISTINGS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/product_listings_update",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  PRODUCT_PUBLICATIONS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/product_publications_create",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  PRODUCT_PUBLICATIONS_DELETE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/product_publications_delete",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  PRODUCT_PUBLICATIONS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/product_publications_update",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  PROFILES_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/profiles_create",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  PROFILES_DELETE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/profiles_delete",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  PROFILES_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/profiles_update",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  REFUNDS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/refunds_create",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  RETURNS_APPROVE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/returns_approve",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  RETURNS_CANCEL: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/returns_cancel",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  RETURNS_CLOSE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/returns_close",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  RETURNS_DECLINE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/returns_decline",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  RETURNS_REOPEN: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/returns_reopen",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  RETURNS_REQUEST: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/returns_request",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  REVERSE_DELIVERIES_ATTACH_DELIVERABLE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/reverse_deliveries_attach_deliverable",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  REVERSE_FULFILLMENT_ORDERS_DISPOSE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/reverse_fulfillment_orders_dispose",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  SCHEDULED_PRODUCT_LISTINGS_ADD: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/scheduled_product_listings_add",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  SCHEDULED_PRODUCT_LISTINGS_REMOVE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/scheduled_product_listings_remove",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  SCHEDULED_PRODUCT_LISTINGS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/scheduled_product_listings_update",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  SEGMENTS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/segments_create",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  SEGMENTS_DELETE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/segments_delete",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  SEGMENTS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/segments_update",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  SELLING_PLAN_GROUPS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/selling_plan_groups_create",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  SELLING_PLAN_GROUPS_DELETE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/selling_plan_groups_delete",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  SELLING_PLAN_GROUPS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/selling_plan_groups_update",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  SHIPPING_ADDRESSES_CREATE: {
    //MARK
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/shipping_addresses_create",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  SHIPPING_ADDRESSES_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/shipping_addresses_update",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  SHOP_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/shop_update",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  SUBSCRIPTION_BILLING_ATTEMPTS_CHALLENGED: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/subscription_billing_attempts_challenged",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  SUBSCRIPTION_BILLING_ATTEMPTS_FAILURE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/subscription_billing_attempts_failure",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  SUBSCRIPTION_BILLING_ATTEMPTS_SUCCESS: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/subscription_billing_attempts_success",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  SUBSCRIPTION_BILLING_CYCLE_EDITS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/subscription_billing_cycle_edits_create",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  SUBSCRIPTION_BILLING_CYCLE_EDITS_DELETE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/subscription_billing_cycle_edits_delete",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  SUBSCRIPTION_BILLING_CYCLE_EDITS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/subscription_billing_cycle_edits_update",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  SUBSCRIPTION_CONTRACTS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/subscription_contracts_create",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  SUBSCRIPTION_CONTRACTS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/subscription_contracts_update",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  TAX_PARTNERS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/tax_partners_update",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  TAX_SERVICES_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/tax_services_create",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  TAX_SERVICES_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/tax_services_update",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  TENDER_TRANSACTIONS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/tender_transactions_create",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  THEMES_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/themes_create",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  THEMES_DELETE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/themes_delete",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  THEMES_PUBLISH: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/themes_publish",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  THEMES_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/themes_update",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  VARIANTS_IN_STOCK: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/variants_in_stock",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
  VARIANTS_OUT_OF_STOCK: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/variants_out_of_stock",
    callback: (topic, shop, webhookRequestBody) => {
      const webhookBody = JSON.parse(webhookRequestBody);
      console.log("Processing webhook", topic);
      fs.writeFile(
        `${process.cwd()}/_developer/${topic}.json`,
        `${topic}\n\n${webhookRequestBody}`,
        (err) => {
          if (err) {
            console.log("Error happened writing to file", topic);
            return;
          }
        }
      );
    },
  },
});

export default shopify;
