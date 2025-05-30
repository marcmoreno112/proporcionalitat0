import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProporStateStructure } from "./types";
import { FilmData } from "../../types";
import questions from "./questions";

export const initialFilmsState: ProporStateStructure = {
  titleText: "",
  filmsRated: questions,
  detailFilm: {} as FilmData,
};

const proporSlice = createSlice({
  name: "films",
  initialState: initialFilmsState,
  reducers: {
    changeTitleText: (currentFilmsState, action: PayloadAction<string>) => {
      return {
        ...currentFilmsState,
        titleText: action.payload,
      };
    },

    selectDetailFilm: (currentFilmsState, action: PayloadAction<FilmData>) => {
      return {
        ...currentFilmsState,
        detailFilm: action.payload,
      };
    },

    // addRatedFilm: (currentFilmsState, action: PayloadAction<RatedFilmData>) => {
    //   const existingRatedFilmIndex = currentFilmsState.filmsRated.findIndex(
    //     (film) => film.id === action.payload.id
    //   );

    //   if (existingRatedFilmIndex !== -1) {
    //     return {
    //       ...currentFilmsState,
    //       filmsRated: currentFilmsState.filmsRated.map((film, index) =>
    //         index === existingRatedFilmIndex ? action.payload : film
    //       ),
    //     };
    //   } else {
    //     return {
    //       ...currentFilmsState,
    //       filmsRated: [...currentFilmsState.filmsRated, action.payload],
    //     };
    //   }
    // },
  },
});

export const {
  changeTitleText: changeTitleTextActionCreator,
  // addRatedFilm: addRatedFilmActionCreator,
  selectDetailFilm: selectDetailFilmActionCreator,
} = proporSlice.actions;

export const proporReducer = proporSlice.reducer;
