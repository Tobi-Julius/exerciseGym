import React from "react";
import Box from "@mui/material/Box";
import { Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "150px", xs: "80px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography sx={{ color: "#ff2625", fontWeight: "600" }}>
        Fitness Club
      </Typography>
      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: "40px", xs: "36px" } }}
        lineHeight="40px"
        mt="30px"
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontWeight="600" mt="15px" lineHeight="35px" mb="24px">
        Check out the most effective exercises
      </Typography>
      <Button
        href="#Exercises"
        variant="contained"
        sx={{ backgroundColor: "#ff2625", padding: "10px" }}
        color="error"
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight="600"
        color="ff3635"
        sx={{
          opacity: 0.1,
          display: { xs: "none", lg: "block" },
          color: "red",
        }}
        fontSize="180px"
      >
        EXERCISE
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
