import { useState } from "react";
import GameCard from "./GameCard";
import { useGames } from "../hooks/useGames";

function GameGrid() {
  const limit = 50;
  const [page, setPage] = useState(0); // page 0 = first page

  const offset = page * limit;

  const { data, isLoading, isError, error } = useGames(offset, limit);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  const games = data?.data ?? [];

  const canGoBack = page > 0;
  const canGoNext = games.length === limit; 

  return (
    <>
      <section className="w-fit mx-auto grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 justify-items-center justify-center gap-y-10 gap-x-10 mb-5 p-5">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}

        <div className="flex gap-4 items-center justify-center mb-4 col-span-full">
          <button
            onClick={() => setPage((p) => p - 1)}
            disabled={!canGoBack}
            className="px-3 py-2 rounded bg-slate-500 text-gray-100 hover:bg-slate-400 hover:text-white hover:cursor-pointer disabled:opacity-50 disabled:hover:bg-slate-500 disabled:hover:text-gray-100 disabled:hover:cursor-default"
          >Previous Page
          </button>
          
          <button
            onClick={() => setPage((p) => p + 1)}
            disabled={!canGoNext}
            className="px-3 py-2 rounded bg-slate-500 text-gray-100 hover:bg-slate-400 hover:text-white hover:cursor-pointer disabled:opacity-50 disabled:hover:bg-slate-500 disabled:hover:text-gray-100 disabled:hover:cursor-default"
          >Next Page
          </button>
        </div>
      </section>
    </>
  );
}

export default GameGrid;
