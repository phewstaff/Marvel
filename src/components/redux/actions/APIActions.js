import { ActionTypes } from "../constants/action-types";

export const setCharacters = (characters) => {
  return {
    type: ActionTypes.SET_CHARACTERS,
    payload: characters,
  };
};

export const selectedCharacter = (selectedCharacter) => {
  return {
    type: ActionTypes.SELECTED_CHARACTER,
    payload: selectedCharacter,
  };
};

export const setComics = (comics) => {
  return {
    type: ActionTypes.SET_COMICS,
    payload: comics,
  };
};

export const selectedComic = (selectedComic) => {
  return {
    type: ActionTypes.SELECTED_COMIC,
    payload: selectedComic,
  };
};
