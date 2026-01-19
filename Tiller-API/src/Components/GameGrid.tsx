import { useEffect, useState } from "react";
import type { Game } from "../types/types";
import GameCard from "./GameCard";
import DropdownMenu from "./DropdownMenu";

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
      <DropdownMenu />
      <div className="bg-zinc-900 grid grid-cols-5 gap-4 p-4">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </>
  );
}

export default GameGrid;
