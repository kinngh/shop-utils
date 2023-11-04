import fs from "fs";
import webhookTopics from "./webhookTopics.js";

const commandLines = webhookTopics
  .map((topic) => {
    return `${topic.toUpperCase()} :{
        deliveryMethod: DeliveryMethod.Http,
        callbackUrl:\"/api/webhooks/${topic.toLowerCase()}\",
        callback: functionCommonCallback,
    },`;
  })
  .join("\n");

fs.writeFile(
  "config/shopify.js",
  `
import { DeliveryMethod, shopifyApi } from "@shopify/shopify-api";
import "@shopify/shopify-api/adapters/node";
import fs from "fs";

const isDev = process.env.NODE_ENV === "development";

// Setup Shopify configuration
const shopify = shopifyApi({
  apiKey: process.env.SHOPIFY_API_KEY,
  apiSecretKey: process.env.SHOPIFY_API_SECRET,
  scopes: process.env.SHOPIFY_API_SCOPES,
  hostName: process.env.SHOPIFY_APP_URL.replace(/https:\\\/\\\/\/, ""),
  hostScheme: "https",
  apiVersion: process.env.SHOPIFY_API_VERSION,
  isEmbeddedApp: true,
  logger: { level: isDev ? 0 : 0 }, //Error = 0,Warning = 1,Info = 2,Debug = 3
});

const functionCommonCallback = (topic, shop, webhookRequestBody) => {
  console.log("Processing webhook", topic);
  fs.writeFile(
    \`\$\{process.cwd()\}/_developer/\$\{topic\}.json\`,
    \`\$\{topic\}\$\{webhookRequestBody\}\`,
    (err) => {
      if (err) {
        console.log("Error happened writing to file", topic);
        return;
      }
    }
  );
};

shopify.webhooks.addHandlers({
${commandLines}
});
  
export default shopify;
  `,
  (err) => {
    if (err) {
      console.error("Error writing to file", err);
    } else {
      console.log("Commands written to config/shopify.js");
    }
  }
);
