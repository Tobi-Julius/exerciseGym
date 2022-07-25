import React from "react";
import bodyPartImage from "../assets/icons/body-part.png";
import targetImage from "../assets/icons/target.png";
import equipmentImage from "../assets/icons/equipment.png";
import { Button, Stack, Typography } from "@mui/material";

const Detail = ({ data }) => {
  const extraDetail = [
    {
      icon: bodyPartImage,
      name: data.bodyPart,
    },
    {
      icon: targetImage,
      name: data.target,
    },
    {
      icon: equipmentImage,
      name: data.equipment,
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img
        src={data.gifUrl}
        alt={data.name}
        loading="lazy"
        className="detail-image"
      />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography textTransform="capitalize" variant="h3">
          {data.name}
        </Typography>
        <Typography variant="h6" textTransform="capitalize">
          Exercise keep you strong, {data.name} is one of the best exercises to
          target your{data.target}. it will help you improve your mood and gain
          energy
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
                alt={data.name}
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
