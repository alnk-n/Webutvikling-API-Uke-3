import { useQuery } from "@tanstack/react-query";
import type { ApiResponse } from "../types/types";

const API_BASE = "https://tillerapi.tiller.blog/api/v2";
const API_KEY = "elev253013";

export const useGames = (offset = 0, limit = 50) => {
  return useQuery<ApiResponse, Error>({
    queryKey: ["games", offset, limit],
    queryFn: async () => {
      const url = new URL(`${API_BASE}/games`);
      url.searchParams.set("offset", String(offset));
      url.searchParams.set("limit", String(limit));

      const res = await fetch(url.toString(), {
        headers: { "x-api-key": API_KEY },
      });

      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      return res.json();
    },
  });
};


export const useGameSearch = (offset = 0, limit = 50, search: string) => {
  const q = search.trim();

  return useQuery<ApiResponse, Error>({
    queryKey: ["gameSearch", q, offset, limit],
    enabled: q.length > 0,
    queryFn: async () => {
      const url = new URL(`${API_BASE}/searchGame`);
      url.searchParams.set("offset", String(offset));
      url.searchParams.set("limit", String(limit));
      url.searchParams.set("name", q);

      const res = await fetch(url.toString(), {
        headers: { "x-api-key": API_KEY },
      });

      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      return res.json();
    },
  });
};

export default useGames;
