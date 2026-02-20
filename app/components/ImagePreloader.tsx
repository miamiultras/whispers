import Image from 'next/image';
import { GameState } from '../game/interfaces/Game';

interface ImagePreloaderProps {
  paths: {
    id: string;
    next: string;
  }[];
  states: GameState[];
}

export default function ImagePreloader({ paths, states }: ImagePreloaderProps) {
  return (
    <div className="hidden">
      {paths.map(path => {
        const nextState = states.find(state => state.id === path.next);
        if (nextState?.image) {
          return (
            <Image
              key={path.next}
              src={`/images/questions/${nextState.image}`}
              alt="Preload image"
              width={640}
              height={360}
              priority
            />
          );
        }
        return null;
      })}
    </div>
  );
}