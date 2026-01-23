import { useQuery } from "@tanstack/react-query";
import type { ApiResponse } from "../types/types";

export const useGames = (offset = 0, limit = 50) => {
  return useQuery<ApiResponse, Error>({
    queryKey: ["gameList", offset, limit],
    queryFn: async () => {
      const res = await fetch(
        `https://tillerapi.tiller.blog/api/v2/games?offset=${offset}&limit=${limit}`,
        { headers: { "x-api-key": "elev253013" } }
      );

      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      return res.json();
    },
  });
};
