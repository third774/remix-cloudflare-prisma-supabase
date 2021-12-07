// from https://github.com/remix-run/remix/issues/667#issuecomment-979773342
const alias = require("esbuild-plugin-alias");

const isProd = process.env.NODE_ENV === "production";

require("esbuild")
  .build({
    entryPoints: ["./worker"],
    bundle: true,
    sourcemap: true,
    minify: isProd,
    outdir: "dist",
    define: {
      "process.env.NODE_ENV": `"${process.env.NODE_ENV ?? "development"}"`,
      // need to stub this out or the runtime will throw an exception
      "process.env.DATABASE_URL": `""`,
    },
    plugins: [
      alias({
        "@prisma/client": require.resolve("@prisma/client"),
      }),
    ],
  })
  .catch(() => process.exit(1));
