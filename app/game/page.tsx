import GameCard from "./components/GameCard";
import { gameStatesMock } from "./mocks/GameStates";

function StoryPage() {
  return (
    <section>
      <GameCard states={gameStatesMock} />
    </section>
  );
}

export default StoryPage;
