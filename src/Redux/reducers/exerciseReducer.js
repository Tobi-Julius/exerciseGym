import { actionTypes } from "../constants/actionTypes";

const initialState = {
  exercises: [],
  bodyPart: [],
  bodyText: "all",
  videos: []
};

export const exerciseReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_EXERCISES:
      return { ...state, exercises: payload };

    case actionTypes.SELECTED_BODY_PART:
      return { ...state, bodyPart: payload };

    case actionTypes.SELECTED_PART:
      return { ...state, bodyText: payload };

    case actionTypes.YOUTUBE_VIDEOS:
      return { ...state, videos: payload };

    default:
      return state;
  }
};
