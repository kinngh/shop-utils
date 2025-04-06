# Shop Utils

Generate related types, with some inconsistencies, in JSDocs and TypeScript types. Scripts auto generate so naming conventions could be way off.

## How To Use

1. Create the `.env` file based on `.env.example`
   - `TUNNEL_URL`: The tunnel URL, I prefer Cloudflare Tunnels.
   - `API_VERSION`: The API version. Example: `2025-04`
2. Run `bun run cloudflare` to start the tunnel and then `bun run start` to start the Express server.
   - We're exposing a simple Express server via Cloudflare Tunnels to accept all incoming webhooks. We do not care about verifying it since this is a test app and we're triggering it manually.
3. Run `bun run triggers`
   - This will create a new file called `config/webhook_trigger.md`. Copy just one line from it and pass an incorrect topic. This will force the CLI to give you a list of all current webhook topics. Pass it on to `scripts/webhookTopics.js` as an array.
4. Run `bun run triggers` again
   - This will create an updated `config/webhook_trigger.md` file.
5. Copy the contents of `config/webhook_trigger.md` and paste it in your Terminal.
   - This will take a while to get started. This queues all webhooks that we start recieving from Shopify.
6. Once the CLI is done, run `bun run create` to generate JSDocs and TypeScript types.

## Boilerplates

- [Express.js x MongoDB](https://github.com/kinngh/shopify-node-express-mongodb-app): Starter template built on React.js, Express.js and MongoDB.
- [Next.js x Prisma ORM](https://github.com/kinngh/shopify-nextjs-prisma-app): Starter template built on Next.js and Prisma ORM.
- [Polaris Playground](https://github.com/kinngh/shopify-polaris-playground): A Next.js and Polaris installation that mimics Shopify's Admin UI so you can build your UI offline, and drag it to the Next.js repo in one go.

## Notes

If you want JSDocs/TS types, head over [here](./types/)
