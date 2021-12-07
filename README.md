# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Setup

Head over to [Supabase](https://supabase.com/) and set up a Postgras DB for your application. Provisioning the database may take a few minutes. You will need to get the DB connection string. This will be your `MIGRATION_DATABASE_URL` in the `.env` file. Be sure to put your password in the URL.

Then head over to [Prisma](https://www.prisma.io/dataplatform) and sign up for their data proxy. The URL they provide will be your `DATABASE_URL` in the `.env` file.

## Development

```sh
$ npm start
```

Open up [http://127.0.0.1:8787](http://127.0.0.1:8787) and you should be ready to go!

If you'd rather run everything in a single tab, you can look at [concurrently](https://npm.im/concurrently) or similar tools to run both processes in one tab.

## Deployment

Use [wrangler](https://developers.cloudflare.com/workers/cli-wrangler) to build and deploy your application to Cloudflare Workers. If you don't have it yet, follow [the installation guide](https://developers.cloudflare.com/workers/cli-wrangler/install-update) to get it setup. Be sure to [authenticate the CLI](https://developers.cloudflare.com/workers/cli-wrangler/authentication) as well.

Once that's done, you should be able to deploy your app:

```sh
npm run deploy
```
