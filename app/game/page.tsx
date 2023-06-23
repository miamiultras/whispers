import GameCard from "./components/GameCard";
import { gameStatesMock } from "./mocks/GameStates";

function StoryPage() {
  return (
    <section className="mt-10">
      <GameCard states={gameStatesMock} />
    </section>
  );
}

export default StoryPage;
