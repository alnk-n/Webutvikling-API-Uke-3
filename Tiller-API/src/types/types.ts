export interface ApiResponse {
  data: Game[];
  offset: number;
  limit: number;
}

export interface Game {
  id: number;
  name: string;
  slug: string;
  storyLine: string;
  summary: string;
  gameType: number;
  coverUrl: string;
  releaseDate: string; // ISO 8601 date string
  totalRating: number;
  ratingCount: number;
  genres: Genre[];
  platforms: Platform[];
  themes: Theme[];
}

export interface Genre {
  id: number;
  name: string;
}

export interface Platform {
  id: number;
  name: string;
}

export interface Theme {
  id: number;
  name: string;
}
