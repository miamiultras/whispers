import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

import SignIn from "./components/SignIn";
import Card from "./components/Card";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main className="flex min-h-screen flex-col items-center p-5">
      <h1 className="text-5xl uppercase font-extrabold skew-y-3 mt-10">whispers</h1>
      <section className="mt-10">
        {session && session.user?.name ? (
          <Card userName={session.user?.name} />
        ) : (
          <SignIn />
        )}
      </section>
    </main>
  );
}
