import "dotenv/config";
import fs from "fs";
import path from "path";
import webhookTopics from "./webhookTopics.js";

const tunnelUrl = process.env.TUNNEL_URL;
const apiVersion = process.env.API_VERSION;
const clientSecret = process.env.CLIENT_SECRET;

const commandLines = webhookTopics
  .map((topic) => {
    return `shopify app webhook trigger --topic=${topic} --api-version=${apiVersion} --client-secret=${clientSecret} --delivery-method=http --address=${tunnelUrl}/webhooks/${topic.toUpperCase().replaceAll("/", "_").replaceAll(".", "_")}`;
  })
  .join("\n");

const dirPath = path.dirname("config/webhook_trigger.md");

fs.mkdir(dirPath, { recursive: true }, (err) => {
  if (err) {
    console.error("Error creating directory", err);
    return;
  }

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
});
