import type { Game } from "../types/types";

type Props = {
  game: Game;
};

function GameCard({ game }: Props) {
  return (
    <div className="rounded-lg font-mono bg-slate-800 w-fit p-6 shadow-xs/30">
    <a href="#">
      <img
        className="w-full block rounded-base"
        src={game.coverUrl}
        alt={game.name}
      />
    </a>

      <a href="#">
        <h5 className="text-white mt-6 mb-2 font-semibold tracking-tight text-heading whitespace-nowrap overflow-hidden text-ellipsis text-[clamp(0.875rem,1.8vw,1.5rem)]">
          {game.name}
        </h5>
      </a>

      <p className="text-gray-400 mb-6 text-body">
        {game.summary.length > 200
          ? `${game.summary.slice(0, 200)}...`
          : game.summary}
      </p>
    </div>
  );
}

export default GameCard;
