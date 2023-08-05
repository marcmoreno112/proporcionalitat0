import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FilmsStateStructure } from "./types";

export const initialFilmsState: FilmsStateStructure = {
  titleText: "",
};

const filmsSlice = createSlice({
  name: "films",
  initialState: initialFilmsState,
  reducers: {
    changeTitleText: (currentFilmsState, action: PayloadAction<string>) => {
      currentFilmsState.titleText = action.payload;
    },
  },
});

export const { changeTitleText: changeTitleTextActionCreator } =
  filmsSlice.actions;

export const filmsReducer = filmsSlice.reducer;
