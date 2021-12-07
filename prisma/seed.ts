import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  await db.user.create({ data: {email: "admin@invalid_domain", name: "Admin"} });
}

seed();
