import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setExercise, selectedBodyPart } from "../Redux/action/exerciseAction";
import { fetchData, exerciseOptions } from "../utils/fetchData";
import HorizontalScrollBar from "../component/HorizontalScrollBar";
import { Typography, Stack, Box, TextField, Button } from "@mui/material";

const SearchExercises = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchExercises = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      dispatch(selectedBodyPart(["all", ...bodyPartsData]));
    };
    fetchExercises();
  }, []);

  // const items = useSelector((state) => state); //IMPORTANT

  const handleClick = () => {
    if (text) {
      fetchData("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions)
        .then((response) => {
          const searchResult = response.filter(
            (res) =>
              res.name.toLowerCase().includes(text) ||
              res.target.toLowerCase().includes(text) ||
              res.equipment.toLowerCase().includes(text) ||
              res.bodyPart.toLowerCase().includes(text)
          );
          setText("");
          dispatch(setExercise(searchResult));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight="700"
        mb="50px"
        mt="55px"
        sx={{
          fontSize: { lg: "38px", xs: "30px", textAlign: "center" },
        }}
      >
        Awesome Exercises <br /> You Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="72px"
          value={text}
          onChange={(e) => {
            e.preventDefault();
            setText(e.target.value.toLowerCase());
          }}
          placeholder="Search Exercises"
          type="text"
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "5px",
            },
            width: { lg: "800px", xs: "350px" },
            background: "#fff",
            borderRadius: "40px",
            mr: "20px",
          }}
        />
        <Button
          onClick={handleClick}
          className="search-btn"
          sx={{
            backgroundColor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
          }}
        >
          {" "}
          Search
        </Button>
      </Box>
      <Box
        sx={{
          alignSelf: "flex-start",
          width: "100vw",
          p: "20px",
          pr: "5px",
          overflow: "scroll",
        }}
      >
        <HorizontalScrollBar isBodyPart />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
