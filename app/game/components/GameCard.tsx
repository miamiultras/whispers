'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Card from '@/app/components/Card';
import ImagePreloader from '@/app/components/ImagePreloader';
import { GameState } from '../interfaces/Game';

interface GameCardProps {
  states: GameState[];
}

function GameCard({ states }: GameCardProps) {
  const [currentState, setCurrentState] = useState(states[0]);
  const [nextStateId, setNextStateId] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (nextStateId) {
      setIsTransitioning(true);
      const nextGameState = states.find((state) => state.id === nextStateId);

      const transitionTimeout = setTimeout(() => {
        if (nextGameState) {
          setCurrentState(nextGameState);
        }
        setNextStateId(null);
        setIsTransitioning(false);
      }, 300);

      return () => clearTimeout(transitionTimeout);
    }
  }, [nextStateId, states]);

  function handlePathSelected(stateId: string) {
    if (!isTransitioning) {
      setNextStateId(stateId);
    }
  }

  return (
    <Card>
      <ImagePreloader paths={currentState.paths} states={states} />

      {currentState.image && (
        <div className="relative w-full aspect-video mb-6 rounded-lg overflow-hidden">
          <Image
            src={`/images/questions/${currentState.image}`}
            alt={`Scene for: ${currentState.text}`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 800px"
            className={`
        w-full h-full
        object-cover
        [image-rendering:pixelated]
        transition-opacity duration-300
        ${isTransitioning ? 'opacity-50' : 'opacity-100'}
      `}
          />
        </div>
      )}

      <div className={`text-black text-sm md:text-base lg:text-base transition-all duration-300 min-h-[80px] ${isTransitioning ? 'opacity-50' : 'opacity-100'
        }`}>
        {currentState.text}
      </div>

      <div className="mt-6 space-y-4">
        {currentState.paths.map((path) => (
          <button
            key={path.id}
            onClick={() => handlePathSelected(path.next)}
            disabled={isTransitioning}
            type="button"
            className={`w-full bg-white text-black p-3 md:p-4 text-sm md:text-base 
              border border-black border-[4px] tracking-widest 
              shadow-[4px_4px_0px_0px_black] 
              transition-all duration-200 
              ${isTransitioning
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:bg-gray-200 active:shadow-[2px_2px_0px_0px_black]'
              }`}
          >
            {path.text}
          </button>
        ))}
      </div>
    </Card>
  );
}

export default GameCard;