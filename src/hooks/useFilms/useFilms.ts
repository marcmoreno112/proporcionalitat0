import { useCallback } from "react";
import axios from "axios";
import { FilmData } from "../../types";

export const apiUrl = "https://api.themoviedb.org/3/search/movie";

const apiKey = import.meta.env.VITE_API_KEY;

const useFilms = () => {
  interface ApiResponse {
    results: FilmData[];
  }

  const getFilms = useCallback(
    async (titleText: string): Promise<ApiResponse | undefined> => {
      const {
        data: { results },
      } = await axios.get<ApiResponse>(
        `${apiUrl}?api_key=${apiKey}&query=${titleText}`
      );

      return { results };
    },
    []
  );

  return { getFilms };
};

export default useFilms;
