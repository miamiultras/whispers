"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import Card from "./Card";

function SignIn() {
  return (
    <Card>
      <h2 className="text-black">
        Hello Stranger, are you ready to join text-based adventure?
      </h2>
      <button
        onClick={() => signIn("google")}
        type="button"
        className="bg-white text-black p-4 border-black border-2 border-b-8 border-l-8"
      >
        Sign in with Google
      </button>
      <Link
        href="/game"
        className="bg-white text-black p-4 border-black border-2 border-b-8 border-l-8 text-center"
      >
        Continue without signing in
      </Link>
    </Card>
  );
}

export default SignIn;
