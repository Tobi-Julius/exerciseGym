import React, { useContext } from "react";
import Box from "@mui/material/Box";
import BodyPart from "./BodyPart";
// import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
// import LeftArrowIcon from "../assets/icons/left-arrow.png";
// import RightArrowIcon from "../assets/icons/right-arrow.png";

const HorizontalScrollBar = () => {
  const items = useSelector((state) => state);

  // const LeftArrow = () => {
  //   const { scrollPrev } = useContext(VisibilityContext);

  //   return (
  //     <Typography onClick={() => scrollPrev()} className="right-arrow">
  //       <img src={LeftArrowIcon} alt="right-arrow" />
  //     </Typography>
  //   );
  // };

  // const RightArrow = () => {
  //   const { scrollNext } = useContext(VisibilityContext);

  //   return (
  //     <Typography onClick={() => scrollNext()} className="left-arrow">
  //       <img src={RightArrowIcon} alt="right-arrow" />
  //     </Typography>
  //   );
  // };
  // LeftArrow={LeftArrow} RightArrow={RightArrow}

  return (
    <ScrollMenu>
      {items.allExercise.bodyPart.map((item, index) => (
        <Box key={item.id} m="0 40px">
          <BodyPart key={item.id} item={item} />
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollBar;
