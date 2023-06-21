"use client";
import { signIn } from "next-auth/react";
import TypewriterText from "./TypewriterText";

function SignIn() {
  return (
    <div className="bg-white p-8 border-2 border-black rounded-lg flex flex-col justify-between gap-6">
      <h2 className="text-black">
        <TypewriterText text="Hello Stranger, are you ready to join text-based adventure?" />
      </h2>
      <button
        onClick={() => signIn("google")}
        type="button"
        className="bg-white text-black p-4 border-black border-2 border-b-8 border-l-8"
      >
        Sign in with Google
      </button>
      <button
        onClick={() => {}}
        type="button"
        className="bg-white text-black p-4 border-black border-2 border-b-8 border-l-8"
      >
        Continue without signing in
      </button>
    </div>
  );
}

export default SignIn;
