"use client";
import { signOut } from "next-auth/react";

interface CardProps {
  userName: string;
}

function Card({ userName }: CardProps) {
  return (
    <div className="bg-white flex flex-col p-8 rounded-lg">
      <h2 className="text-xl text-black">Hello {userName}</h2>
      <button
        className="bg-black my-4 text-white p-3 rounded-lg"
        onClick={() => signOut()}
      >
        Sign Out
      </button>
    </div>
  );
}

export default Card;
