"use client";
import { useState } from "react";
import { GameState } from "../interfaces/Game";
import Card from "@/app/components/Card";
import TypewriterText from "./TypewriterText";
import Image from "next/image";

interface GameCardProps {
  states: GameState[];
}

function GameCard({ states }: GameCardProps) {
  const [currentState, setCurrentState] = useState(states[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  function handlePathSelected(nextStateId: string) {
    setIsTransitioning(true);
    const nextGameState = states.find((state) => state.id === nextStateId);
    if (nextGameState) {
      setCurrentState(nextGameState);
    }
    setIsTransitioning(false);
  }
  
  return (
    <Card>
      {currentState.image && (
        <div className="relative w-full aspect-video mb-6 rounded-lg overflow-hidden">
          <Image
            src={`/images/questions/${currentState.image}`}
            alt={`Scene for: ${currentState.text}`}
            fill
            className="object-cover pixel-image"
            style={{ imageRendering: 'pixelated' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
        </div>
      )}
      <h2 className="text-black">
        <TypewriterText 
          key={currentState.id} // Add key to force remount
          text={currentState.text} 
          delay={50}
        />
      </h2>

      <div className="mt-6 space-y-4">
        {currentState.paths.map((path) => (
          <button
            key={path.id}
            onClick={() => handlePathSelected(path.next)}
            type="button"
            className="w-full bg-white text-black p-4 border-black border-2 border-b-8 border-l-8 
                     hover:bg-gray-100 transition-colors duration-200 
                     active:border-b-2 active:border-l-2 active:translate-y-1"
          >
            {path.text}
          </button>
        ))}
      </div>
    </Card>
  );
}

export default GameCard;