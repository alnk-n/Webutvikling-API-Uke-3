import { useEffect, useState } from "react";
import type { Game } from "../types/types";
import GameCard from "./GameCard";

function GameGrid() {
  const [games, setGames] = useState<Game[] | null>([]);

  useEffect(() => {
    fetch("https://tillerapi.tiller.blog/api/v2/games?offset=0&limit=50", {
      headers: {
        "x-api-key": "elev253013",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setGames(data.data);
      });
  }, []);

  if (!games) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="w-fit mx-auto grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 justify-items-center justify-center gap-y-10 gap-x-10 mb-5 p-5">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </section>
    </>
  );
}

export default GameGrid;
