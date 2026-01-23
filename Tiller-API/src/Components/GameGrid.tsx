import { useSearchParams } from "react-router-dom";
import GameCard from "./GameCard";
import useGames, { useGameSearch } from "../hooks/useGames";

function GameGrid() {
  const limit = 50;

  const [params, setParams] = useSearchParams();

  const q = (params.get("q") ?? "").trim();
  const page = Number(params.get("page") ?? "0") || 0;

  const offset = page * limit;
  const isSearching = q.length > 0;

  const listQuery = useGames(offset, limit);
  const searchQuery = useGameSearch(offset, limit, q);

  const active = isSearching ? searchQuery : listQuery;
  const { data, isLoading, isError, error } = active;

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  const games = data?.data ?? [];

  const canGoBack = page > 0;
  const canGoNext = games.length === limit;

  const setPage = (nextPage: number) => {
    const p = new URLSearchParams(params);
    p.set("page", String(nextPage));
    setParams(p);
  };

  return (
    <section className="w-fit mx-auto grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 justify-items-center justify-center gap-y-10 gap-x-10 mb-5 p-5">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}

      <div className="flex gap-4 items-center justify-center mb-4 col-span-full">
        <button
          onClick={() => setPage(page - 1)}
          disabled={!canGoBack}
          className="px-3 py-2 rounded bg-slate-500 text-gray-100 hover:bg-slate-400 hover:text-white hover:cursor-pointer disabled:opacity-50 disabled:hover:bg-slate-500 disabled:hover:text-gray-100 disabled:hover:cursor-default"
        >
          Previous Page
        </button>

        <button
          onClick={() => setPage(page + 1)}
          disabled={!canGoNext}
          className="px-3 py-2 rounded bg-slate-500 text-gray-100 hover:bg-slate-400 hover:text-white hover:cursor-pointer disabled:opacity-50 disabled:hover:bg-slate-500 disabled:hover:text-gray-100 disabled:hover:cursor-default"
        >
          Next Page
        </button>
      </div>
    </section>
  );
}

export default GameGrid;
