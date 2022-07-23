import React from "react";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

const Nav = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { xs: "32px", sm: "20px" },
        justifyContent: "none",
        px: "20px",
      }}
    >
      <Link to="/">
        <img
          src={Logo}
          style={{ width: "48px", height: "48px", marginLeft: "20px" }}
        />
      </Link>
      <Stack direction="row" gap="20px" fontSize="24px" alignItems="Flex-end">
        <Link
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #ff2625",
          }}
          to="/"
        >
          Home
        </Link>
        <a
          style={{ textDecoration: "none", color: "#3A1212" }}
          href="#exercises"
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Nav;
