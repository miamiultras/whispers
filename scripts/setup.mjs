import { MongoClient } from "mongodb";
import { faker } from "@faker-js/faker";
import dotenv from "dotenv";

dotenv.config();

const setup = async () => {
  let client;

  try {
    client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    const hasData = await client
      .db("test")
      .collection("users")
      .countDocuments();
    if (hasData) {
      console.log("Database already exists with data");
      client.close();
      return;
    }

    const records = [...Array(10)].map(() => {
      const firstName = faker.person.firstName();
      const lastName = faker.person.lastName();
      const username = faker.internet.userName();
      const email = faker.internet.email();
      const image = faker.image.avatar();

      return {
        name: `${firstName} ${lastName}`,
        username,
        email,
        image,
        followers: 0,
        emailVerified: null,
      };
    });

    const insert = await client
      .db("test")
      .collection("users")
      .insertMany(records);

    if (insert.acknowledged) {
      console.log("Successfully inserted records");
    }
  } catch (error) {
    return "Database is not ready yet";
  } finally {
    if (client) {
      await client.close();
    }
  }
};

try {
  setup();
} catch {
  console.warn("Database is not ready yet. Skipping seeding...");
}

export { setup };
