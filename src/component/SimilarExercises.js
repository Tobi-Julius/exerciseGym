import React from "react";
import { Typography,  Stack, Box } from "@mui/material";
import HorizontalScrollBar from "./HorizontalScrollBar";
import Loader from "./Loader";


const SimilarExercises = ({ similarExercises, targetMuscle }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0 " }, mb: "6" }}>
      <Typography variant="h6" textTransform="uppercase">
        Exercise that target the same muscle group
      </Typography>
      <Stack direction="row" sx={{ p: "2px", position: "relative" }}>
        {similarExercises.length ? 
          <HorizontalScrollBar data={similarExercises} /> : <Loader />
        }
      </Stack>
      <Typography variant="h6" textTransform="uppercase">
        Exercise that target the same equipment
      </Typography>
      <Stack direction="row" sx={{ p: "2px", position: "relative" }}>
        {targetMuscle.length ? <HorizontalScrollBar data={targetMuscle} /> : <Loader />}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
