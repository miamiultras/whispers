import clientPromise from "@/lib/mongodb";

export interface UserProps {
  _id: string;
  name: string;
  username: string;
  email: string;
  image: string;
  followers: number;
  emailVerified: boolean
}

export async function getUser(username: string): Promise<UserProps | null> {
  const client = await clientPromise;
  const collection = client.db("test").collection("users");
  const results = await collection.findOne<UserProps>(
    { username },
    { projection: { _id: 0, emailVerified: 0 } }
  );
  if (results) {
    return {
      ...results,
    };
  } else {
    return null;
  }
}

export async function getFirstUser(): Promise<UserProps | null> {
  const client = await clientPromise;
  const collection = client.db("test").collection("users");
  const results = await collection.findOne<UserProps>(
    {},
    {
      projection: { _id: 0, emailVerified: 0 },
    }
  );
  if (results) {
    return {
      ...results,
    };
  } else {
    return null;
  }
}

export async function getAllUsers(): Promise<UserProps[]> {
  const client = await clientPromise;
  const collection = client.db("test").collection("users");
  return await collection
    .aggregate<UserProps>([
      {
        $limit: 100,
      },
      {
        //sort alphabetically
        $sort: {
          _id: 1,
        },
      },
    ])
    .toArray();
}

export async function getUserCount(): Promise<number> {
  const client = await clientPromise;
  const collection = client.db("test").collection("users");
  return await collection.countDocuments();
}
