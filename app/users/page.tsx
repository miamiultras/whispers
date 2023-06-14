import { UserProps, getAllUsers } from "@/lib/api/user";

async function getUsers() {
  return await getAllUsers();
}

export default async function UsersPage() {
  const users = await getUsers();
  return (
    <div className="flex min-h-screen flex-col p-5">
      <h1 className="text-2xl">Users</h1>
      <ul className="mt-6">
        {users.map((user: UserProps) => (
          <li>{user.username}</li>
        ))}
      </ul>
    </div>
  );
}
