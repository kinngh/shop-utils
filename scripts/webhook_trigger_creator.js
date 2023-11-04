import fs from "fs";
import "dotenv/config";
import webhookTopics from "./webhookTopics.js";

const ngrokUrl = process.env.NGROK_URL;
const apiVersion = process.env.API_VERSION;
const clientSecret = process.env.CLIENT_SECRET;

const commandLines = webhookTopics
  .map((topic) => {
    return `shopify webhook trigger --topic=${topic.toUpperCase()} --api-version=${apiVersion} --client-secret=${clientSecret} --delivery-method=http --address=${ngrokUrl}/api/webhooks/${topic.toLowerCase()};`;
  })
  .join("\n");

// Write command lines to file
fs.writeFile(
  "config/webhook_trigger.md",
  `\`\`\`bash\n${commandLines}\n\`\`\``,
  (err) => {
    if (err) {
      console.error("Error writing to file", err);
    } else {
      console.log("Commands written to config/webhook_trigger.md");
    }
  }
);
