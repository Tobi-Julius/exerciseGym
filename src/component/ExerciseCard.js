import React from "react";
import { Link } from "react-router-dom";
import { Stack, Button, Typography } from "@mui/material";

const ExerciseCard = ({ item }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${item.id}`}>
      <img src={item.gifUrl} alt={item.name} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            backgroundColor: "#ffa9a9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {item.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            backgroundColor: "#fcc757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {item.target}
        </Button>
      </Stack>
      <Typography
        ml="21px"
        color="#000"
        fontWeight="600"
        textTransform="capitalize"
        mt="11px"
        pb="10px"
      >
        {item.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
