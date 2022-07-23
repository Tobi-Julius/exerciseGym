import React, { useState } from "react";
import Box from "@mui/material/Box";
import HeroBanner from "../component/HeroBanner";
import SearchExercises from "../component/SearchExercises";
import Exercises from "../component/Exercises";

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercises />
      <Exercises />
    </Box>
  );
};

export default Home;
