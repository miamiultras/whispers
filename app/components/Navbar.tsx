import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Image from "next/image";
import SignOutButton from "./SignOutButton";

async function Navbar() {
  const session = await getServerSession(authOptions);
  return (
    <nav className="z-10 w-full p-4 px-8 flex items-center justify-between text-black bg-white border-b-4 border-black">
      <Link
        href="/"
        className="font-extrabold uppercase shadow-inner skew-y-3 shadow-black py-2 px-4"
      >
        whispers
      </Link>
      {session?.user && (
        <ul className="flex items-center">
          <li>
            <Link href="/profile">
              <Image
                src={session.user.image!}
                alt="User image"
                width={38}
                height={38}
                className="border-black border-2 border-b-4 border-r-4"
              />
            </Link>
          </li>
          <li className="ml-6">
            <SignOutButton />
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
