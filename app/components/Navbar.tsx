import Link from "next/link";

function Navbar() {
  return (
    <nav className="z-10 w-full p-4 px-8 flex items-center justify-between text-black bg-white border-b-4 border-black">
      <Link
        href="/"
        className="font-extrabold uppercase shadow-inner skew-y-3 shadow-black p-2"
      >
        whispers
      </Link>
      <ul className="flex items-center">
        <li>
          <Link href="/settings" className="font-semibold hover:underline">
            Settings
          </Link>
        </li>
        <li className="ml-6">
          <Link href="/about" className="font-semibold hover:underline">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
