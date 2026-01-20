import type { Game } from "../types/types";
import GenrePill from "./GenrePill";

type Props = {
  game: Game;
};

function GameCard({ game }: Props) {
  return (
    <body className="bg-zinc-200">
      <div className="w-80 bg-slate-800 shadow-md rounded-xl duration-100 hover:scale-105 hover:shadow-xl">
        <a href="#">
          <img
            className="h-100 w-100 object-cover rounded-t-xl"
            src={game.coverUrl}
            alt={game.name}
          />
          <div className="px-4 py-3 w-80">
            <div className="flex gap-0 overflow-x-auto whitespace-nowrap no-scrollbar mb-2">
            {game.genres.map((genre) => (
              <GenrePill key={genre.id} name={genre.name} />
            ))}
            </div>
            <h5 className="text-xl font-bold mb-1 text-white truncate block capitalize">
              {game.name}
            </h5>
            <p className="text-gray-400 mb-6 text-body line-clamp-3">
              {game.summary}
          </p>
          </div>
        </a>
        </div>
    </body>
  );
}

export default GameCard;
