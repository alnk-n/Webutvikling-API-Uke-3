import { useEffect, useState } from "react";

function GameGrid() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("https://tillerapi.tiller.blog/api/v2/games?offset=0&limit=50", {
      headers: {
        "x-api-key": "elev253013",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data.data));
  }, []);

  return <div className="bg-red-500 grid grid-cols-3 gap-4">GameGrid</div>;
}

export default GameGrid;
