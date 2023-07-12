interface MoviesResponse<T> {
  page?: number;
  id?: number;
  results: T[];
}

interface CreditsResponse<T> {
  id: number;
  cast: T[];
}

export interface Movies {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title?: string;
  name?: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  release_date?: string;
  first_air_date?: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface Details {
  adult: boolean;
  backdrop_path: string | null;
  budget: number;
  genres: { id: number; name: string }[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  revenue: number;
  runtime: number;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface Credits {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

interface Reviews {
  author: string | null;
  author_details: {
    name: string | null;
    username: string | null;
    avatar_path: null | string;
    rating: null | string;
  };
  content: string | null;
  created_at: string | null;
  id: string | null;
  updated_at: string | null;
  url: string | null;
}

export type DailyTrendsResponse = MoviesResponse<Movies>;
export type MoviesDetailsResponse = MoviesResponse<Details>;
export type MovieCreditsResponse = CreditsResponse<Credits>;
export type MovieReviewsResponse = MoviesResponse<Reviews>;
