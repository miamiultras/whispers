import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start p-5">
      <h1>whispers</h1>
      <Link
        className="bg-white text-black py-2 px-4 mt-2 rounded-sm"
        href="/users"
      >
        Users
      </Link>
    </main>
  );
}
