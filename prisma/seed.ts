import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  await db.message.create({ data: { message: "Hello, World!" } });
}

seed();
