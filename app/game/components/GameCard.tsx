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
            priority
            className={`object-cover pixel-image transition-opacity duration-300 ${
              isTransitioning ? 'opacity-0' : 'opacity-100'
            }`}
            style={{ imageRendering: 'pixelated' }}
          />
        </div>
      )}
      <div className="text-black text-sm md:text-base lg:text-base transition-all duration-300 min-h-[80px]">
        {currentState.text}
      </div>

      <div className="mt-6 space-y-4">
        {currentState.paths.map((path) => (
          <button
            key={path.id}
            onClick={() => handlePathSelected(path.next)}
            type="button"
            className="w-full bg-white text-black p-3 md:p-4 text-sm md:text-base border border-black border-[4px] tracking-widest shadow-[4px_4px_0px_0px_black] hover:bg-gray-200 transition-all duration-200 active:shadow-[2px_2px_0px_0px_black]"
          >
            {path.text}
          </button>
        ))}
      </div>
    </Card>
  );
}

export default GameCard;