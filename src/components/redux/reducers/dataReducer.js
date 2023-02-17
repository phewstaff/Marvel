import { ActionTypes } from "../constants/action-types";

const initialState = {};

const DataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_CHARACTERS:
      return { ...state, characters: payload };
    case ActionTypes.SELECTED_CHARACTER:
      return { selectedCharacter: payload };
    case ActionTypes.SET_COMICS:
      return { ...state, comics: payload };
    case ActionTypes.SELECTED_COMIC:
      return { selectedComic: payload };

    default:
      return state;
  }
};

export default DataReducer;
