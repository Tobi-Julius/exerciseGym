import { actionTypes } from "../constants/actionTypes";

export const setExercise = (exercises) => {
  return {
    type: actionTypes.SET_EXERCISES,
    payload: exercises,
  };
};

export const selectedBodyPart = (bodyPart) => {
  return {
    type: actionTypes.SELECTED_BODY_PART,
    payload: bodyPart,
  };
};

export const selectedPart = (bodyPartOne) => {
  return {
    type: actionTypes.SELECTED_PART,
    payload: bodyPartOne,
  };
};

export const selectedExercise = (exercise) => {
  return {
    type: actionTypes.SELECTED_EXERCISE,
    payload: exercise,
  };
};

export const youtubeVideos = (vids) => {
  return {
    type: actionTypes.YOUTUBE_VIDEOS,
    payload: vids,
  };
};
