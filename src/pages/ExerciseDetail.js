import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { fetchData, exerciseOptions, youtubeOptions } from "../utils/fetchData";
import Detail from "../component/Detail";
import ExerciseVideos from "../component/ExerciseVideos";
import SimilarExercises from "../component/SimilarExercises";

const ExerciseDetail = () => {
  const { id } = useParams();

  const [dataDetail, setdataDetail] = useState("");
  const [dataVideosResult, setDataVideosResult] = useState([]);
  const [targetMuscle, setTargetMuscle] = useState([]);
  const [similarExercises, setSimilarExercises] = useState([]);

  useEffect(() => {
    const fetchingData = async () => {
      const exerciseUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeUrl = "https://youtube-search-and-download.p.rapidapi.com";

      const data = await fetchData(
        `${exerciseUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setdataDetail(data);

      const dataTarget = await fetchData(
        `${exerciseUrl}/exercises/target/${data.target}`,
        exerciseOptions
      );
      setTargetMuscle(dataTarget);

      const dataSimilarExercise = await fetchData(
        `${exerciseUrl}/exercises/equipment/${data.equipment}`,
        exerciseOptions
      );
      setSimilarExercises(dataSimilarExercise);

      const dataVideos = await fetchData(
        `${youtubeUrl}/search?query=${dataDetail.name}`,
        youtubeOptions
      );
      setDataVideosResult(dataVideos.contents);
    };
    fetchingData();
  }, [id]);

  return (
    <Box>
      <Detail data={dataDetail} />
      <ExerciseVideos name={dataDetail.name} data={dataVideosResult} />
      <SimilarExercises
        targetMuscle={targetMuscle}
        similarExercises={similarExercises}
      />
    </Box>
  );
};

export default ExerciseDetail;
