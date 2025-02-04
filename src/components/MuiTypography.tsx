import React from "react";
import { Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">H1 Heading</Typography>
      <Typography variant="h2">H2 Heading</Typography>
      <Typography variant="h3">H3 Heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>H4 Heading</Typography>
      <Typography variant="h5">H5 Heading</Typography>
      <Typography variant="h6">H6 Heading</Typography>

      <Typography variant="subtitle1">Sub title 1</Typography>
      <Typography variant="subtitle2">Sub title 2</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil id
        veritatis eius quibusdam, quisquam vero debitis accusantium quaerat
        excepturi itaque sequi iusto, voluptate dolor ea numquam? Libero atque
        eaque reiciendis.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat quia,
        dignissimos facilis libero itaque aliquam cupiditate accusamus saepe
        laudantium, sint et dolorem expedita porro dolor maxime soluta
        blanditiis, esse quasi?
      </Typography>
    </div>
  );
};

export default MuiTypography;
