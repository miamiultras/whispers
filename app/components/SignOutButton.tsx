"use client";
import { signOut } from "next-auth/react";

interface SignOutButtonProps {
  className?: string;
}

function SignOutButton({
  className = "bg-white text-black px-2 py-1 border-black border-2 border-b-4 border-r-4",
}: SignOutButtonProps) {
  return (
    <button onClick={() => signOut()} type="button" className={className}>
      SignOut
    </button>
  );
}

export default SignOutButton;
