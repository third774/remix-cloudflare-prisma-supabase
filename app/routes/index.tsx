import { Message } from "@prisma/client";
import type { MetaFunction, LoaderFunction } from "remix";
import { useLoaderData } from "remix";

import { db } from "~/utils/db.server";

// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
// https://remix.run/api/conventions#loader
export let loader: LoaderFunction = async () => {
  const messages = await db.message.findMany();
  return messages;
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
  let data = useLoaderData<Message[]>();

  return (
    <main>
      {data.map(({ message, id }) => (
        <p key={id}>{message}</p>
      ))}
    </main>
  );
}
