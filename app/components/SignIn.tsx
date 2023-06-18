"use client";
import { signIn } from "next-auth/react";

function SignIn() {
  return (
    <button
      onClick={() => signIn("google")}
      type="button"
      className="bg-white my-4 text-black p-4 rounded-lg"
    >
      Sign in with Google
    </button>
  );
}

export default SignIn;
