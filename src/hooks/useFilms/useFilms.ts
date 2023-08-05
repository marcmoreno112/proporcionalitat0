import axios from "axios";
import { useAppSelector } from "../../store";
import { FilmData } from "../../types";
import { useCallback } from "react";

const apiUrl = "https://api.themoviedb.org/3/search/movie";

const apiKey = import.meta.env.VITE_API_KEY;

const useFilms = () => {
  const { titleText } = useAppSelector((state) => state.filmsState);

  interface ApiResponse {
    results: FilmData[];
  }

  const getFilms = useCallback(async (): Promise<ApiResponse | undefined> => {
    const {
      data: { results },
    } = await axios.get<ApiResponse>(
      `${apiUrl}?api_key=${apiKey}&query=${titleText}`
    );

    return { results };
  }, [titleText]);

  return { getFilms };
};

export default useFilms;
