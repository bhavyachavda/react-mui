import { CircularProgress, LinearProgress, Stack } from "@mui/material";
import React from "react";

const MuiProgress = () => {
  return (
    <Stack spacing={2}>
      <CircularProgress />
      <CircularProgress color="success" />
      <CircularProgress color="success" variant="determinate" value={60} />

      <LinearProgress />
      <LinearProgress color="success" />
      <LinearProgress color="success" variant="determinate" value={60} />
    </Stack>
  );
};

export default MuiProgress;
