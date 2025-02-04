import React, { useState } from "react";
import { Stack, TextField } from "@mui/material";
import { DatePicker } from "@mui/lab";

const MuiPicker = () => {
  const [selectedDate, setSelectedData] = useState<Date | null>(null);

  return (
    <Stack spacing={4} sx={{ width: "250px" }}>
      {/* <DatePicker label="Date Picker" renderInput={}/> */}
    </Stack>
  );
};

export default MuiPicker;
