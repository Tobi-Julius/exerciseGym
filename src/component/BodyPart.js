import React, { useEffect } from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";
import { selectedPart } from "../Redux/action/exerciseAction";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, exerciseOptions } from "../utils/fetchData";
import { setExercise } from "../Redux/action/exerciseAction";

const BodyPart = ({ item }) => {
  const dispatch = useDispatch();

  const itemSelected = useSelector((state) => state.allExercise.bodyText);

  useEffect(() => {
    const fetchingData = async () => {
      let exercisesList = [];

      if (itemSelected === "all") {
        exercisesList = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exercisesList = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${itemSelected}`,
          exerciseOptions
        );
      }
      dispatch(setExercise(exercisesList));
    };
    fetchingData();
  }, [itemSelected]);

  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: itemSelected === item ? "4px solid #ff2526" : "",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        gap: "35px",
        width: "110px",
        height: "120px",
        cursor: "pointer",
      }}
      onClick={() => {
        dispatch(selectedPart(item));
        window.scrollTo({ top: 1000, left: 100, behavior: "smooth" });
      }}
    >
      <img
        src={Icon}
        alt="gym_icon"
        style={{ width: "40px", height: "40px" }}
      />
      <Typography
        sx={{
          fontWeight: "300",
          fontSize: "20px",
          textTransform: "capitalize",
        }}
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
