import React from "react";
import { Typography, Stack, Box } from "@mui/material";
import Loader from "./Loader";

const ExerciseVideos = ({ data, name }) => {
  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography variant="h5" mb="33px">
        Youtube Videos Results
      </Typography>
      <Typography variant="h5" mb="33px">
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "uppercase" }}>
          {" "}
          {name}
        </span>
        Exercise Videos
      </Typography>
      {data ? (
        <Stack
          justifyContent="flex-start"
          flexWrap="wrap"
          alignItems="center"
          sx={{ flexDirection: { lg: "row" }, gap: { lg: "110px", xs: "0" } }}
        >
          {data.slice(0, 3).map(
            (item, index) =>
              item.video && (
                <a
                  key={index}
                  className="exercise-video"
                  href={`https://www.youtube.com/watch?v=${item.video?.videoId}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={item.video?.thumbnails[0].url}
                    alt={item.video?.title}
                  />
                  <Box>
                    <Typography
                      variant="h5"
                      textTransform="uppercase"
                      color="#000"
                    >
                      {item.video?.title}
                    </Typography>
                    <Typography
                      variant="h6"
                      textTransform="uppercase"
                      color="#000"
                    >
                      {item.video?.channelName}
                    </Typography>
                  </Box>
                </a>
              )
          )}
        </Stack>
      ) : (
        <Loader />
      )}
    </Box>
  );
};

export default ExerciseVideos;
