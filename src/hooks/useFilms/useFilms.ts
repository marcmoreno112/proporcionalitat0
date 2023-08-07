import { useCallback } from "react";
import axios from "axios";
import { FilmData } from "../../types";

export const searchFilmsApiUrl = "https://api.themoviedb.org/3/search/movie";

const apiKey = import.meta.env.VITE_API_KEY;

const useFilms = () => {
  interface ApiResponse {
    results: FilmData[];
  }

  const getFilteredFilms = useCallback(
    async (titleText: string): Promise<ApiResponse | undefined> => {
      const {
        data: { results },
      } = await axios.get<ApiResponse>(
        `${searchFilmsApiUrl}?api_key=${apiKey}&query=${titleText}`
      );

      return { results };
    },
    []
  );

  const nowPlayingApiUrl = "https://api.themoviedb.org/3/movie/now_playing";

  const getNowPlayingFilms = useCallback(async (): Promise<
    ApiResponse | undefined
  > => {
    const {
      data: { results },
    } = await axios.get<ApiResponse>(`${nowPlayingApiUrl}?api_key=${apiKey}`);

    return { results };
  }, []);

  return { getFilteredFilms, getNowPlayingFilms };
};

export default useFilms;
