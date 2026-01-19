import type { Game } from "../types/types";

type Props = {
  game: Game;
};

function GameCard({ game }: Props) {
  return (
    <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs">
      <a href="#">
        <img className="rounded-base" src={game.coverUrl} alt={game.name} />
      </a>

      <a href="#">
        <h5 className="mt-6 mb-2 font-semibold tracking-tight text-heading whitespace-nowrap overflow-hidden text-ellipsis text-[clamp(0.875rem,1.8vw,1.5rem)]">
          {game.name}
        </h5>
      </a>

      <p className="mb-6 text-body">
        {game.summary.length > 200
          ? `${game.summary.slice(0, 200)}...`
          : game.summary}
      </p>
    </div>
  );
}

export default GameCard;
