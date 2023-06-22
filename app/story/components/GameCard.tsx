"use client";
import { useState } from "react";
import { GameState } from "../interfaces/Game";
import Card from "@/app/components/Card";

interface GameCardProps {
  states: GameState[];
}

function GameCard({ states }: GameCardProps) {
  const [currentState, setCurrentState] = useState(states[0]);

  function handlePathSelected(nextStateId: string) {
    const nextGameState = states.find((state) => state.id === nextStateId);
    if (nextGameState) {
      setCurrentState(nextGameState);
    }
  }
  
  return (
    <Card>
      <h2 className="text-black">{currentState.text}</h2>
      {currentState.paths.map((path) => (
        <button
          key={path.id}
          onClick={() => handlePathSelected(path.next)}
          type="button"
          className="bg-white text-black p-4 border-black border-2 border-b-8 border-l-8"
        >
          {path.text}
        </button>
      ))}
    </Card>
  );
}

export default GameCard;
