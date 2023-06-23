import Link from "next/link";
import Card from "./Card";
import SignOutButton from "./SignOutButton";

interface GreetingsProps {
  userName: string;
}

function Greetings({ userName }: GreetingsProps) {
  return (
    <Card>
      <h2 className="text-black">
        Hello {userName}, this game, just like life, will present you with 2
        choices:
      </h2>
      <Link
        href="/game"
        className="bg-white text-black p-4 border-black border-2 border-b-8 border-l-8 text-center"
      >
        Enter the void
      </Link>
      <SignOutButton className="bg-white text-black p-4 border-black border-2 border-b-8 border-l-8" />
    </Card>
  );
}

export default Greetings;
