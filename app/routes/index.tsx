import type { MetaFunction, LoaderFunction } from "remix";
import { useLoaderData } from "remix";

import type { User } from ".prisma/client";
import { db } from "~/utils/db.server";

// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
// https://remix.run/api/conventions#loader
export let loader: LoaderFunction = async () => {
  const user = await db.user.findUnique({
    where: { email: "admin@invalid_domain" },
  });

  return user;
};

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!",
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  let data = useLoaderData<User>();

  return (
    <main>
      <h1>Hello, {data.name}</h1>
    </main>
  );
}
