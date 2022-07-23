import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedExercise } from "../Redux/action/exerciseAction";
import { fetchData, exerciseOptions } from "../utils/fetchData";
import bodyPartImage from "../assets/icons/body-part.png";
import targetImage from "../assets/icons/target.png";
import equipmentImage from "../assets/icons/equipment.png";
import { Button, Stack, Typography } from "@mui/material";

const Detail = ({ id }) => {
  const dispatch = useDispatch();
  const [dataDetail, setdataDetail] = useState("");

  useEffect(() => {
    const fetchingData = async () => {
      const exerciseUrl = "https://exercisedb.p.rapidapi.com";

      const data = await fetchData(
        `${exerciseUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      dispatch(selectedExercise(data));
      setdataDetail(data);
    };
    fetchingData();
  }, [id]);

  const extraDetail = [
    {
      icon: bodyPartImage,
      name: dataDetail.bodyPart,
    },
    {
      icon: targetImage,
      name: dataDetail.target,
    },
    {
      icon: equipmentImage,
      name: dataDetail.equipment,
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img
        src={dataDetail.gifUrl}
        alt={dataDetail.name}
        loading="lazy"
        className="detail-image"
      />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography textTransform="capitalize" variant="h3">
          {dataDetail.name}
        </Typography>
        <Typography variant="h6" textTransform="capitalize">
          Exercise keep you strong, {dataDetail.name} is one of the best
          exercises to target your{dataDetail.target}. it will help you improve
          your mood and gain energy
        </Typography>
        {extraDetail.map((item) => (
          <Stack
            key={item.name}
            direction="row"
            gap="24px"
            mt="20px"
            alignItems="center"
          >
            <Button
              sx={{
                background: "#fff2db",
                borderRadius: "30px",
                height: "100px",
                width: "100px",
              }}
            >
              <img
                src={item.icon}
                alt={dataDetail.name}
                style={{ width: "50px", height: "50px" }}
              />
            </Button>
            <Typography textTransform="capitalize" variant="h5">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
