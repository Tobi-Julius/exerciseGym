import React from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Detail from "../component/Detail";
import ExerciseVideos from "../component/ExerciseVideos";
import SimilarExercises from "../component/SimilarExercises";

const ExerciseDetail = () => {
  const { id } = useParams();
  return (
    <Box>
      <Detail id={id} />
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  );
};

export default ExerciseDetail;
