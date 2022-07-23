import { Pagination, Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setExercise } from "../Redux/action/exerciseAction.js";
import ExerciseCard from "../component/ExerciseCard.js";
import { fetchData, exerciseOptions } from "../utils/fetchData.js";

const Exercises = () => {
  const dispatch = useDispatch();

  const exerciseList = useSelector((state) => state.allExercise.exercises);

  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 12;

  const indexOfLastExercise = currentPage * exercisesPerPage;

  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;

  const currentExercise =
    exerciseList &&
    exerciseList.slice(indexOfFirstExercise, indexOfLastExercise);
  console.log(exerciseList);
  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1000, behavior: "smooth" });
  };

  return (
    <div id="exercises" sx={{ mt: { lg: "110px" }, mt: "50px", p: "20px" }}>
      <Typography variant="h3" mt="46px" mb="30px">
        Showing Result
      </Typography>
      <Stack
        sx={{
          display: "flex",
          width: "100vw",
          maxWidth: "100vw",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: { lg: "110px", xs: "50px" },
        }}
      >
        {currentExercise.map((item, index) => (
          <ExerciseCard key={index} item={item} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exerciseList.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exerciseList.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </div>
  );
};

export default Exercises;
