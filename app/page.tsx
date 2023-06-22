import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

import SignIn from "./components/SignIn";
import Greetings from "./components/Greetings";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <section className="mt-10">
      {session && session.user?.name ? (
        <Greetings userName={session.user.name} />
      ) : (
        <SignIn />
      )}
    </section>
  );
}
