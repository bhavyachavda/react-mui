import { Skeleton, Stack, Box, Avatar, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const MuiSkeleton = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <Stack spacing={1} width="250px">
        <Skeleton variant="text" animation={false} />
        <Skeleton variant="circular" width={40} height={40} animation="wave" />
        <Skeleton
          variant="rectangular"
          width={250}
          height={125}
          animation="wave"
        />
        <Box sx={{ width: "250px" }}>
          {loading ? (
            <Skeleton
              variant="rectangular"
              width={256}
              height={144}
              animation="wave"
            />
          ) : (
            <img
              src="https://images.unsplash.com/photo-1731432245362-26f9c0f1ba2f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="skeleton"
              width={256}
              height={144}
            />
          )}
        </Box>
        <Stack
          direction={"row"}
          spacing={1}
          sx={{ width: "100%", marginTop: "12px" }}
        >
          {loading ? (
            <Skeleton
              variant="circular"
              width={40}
              height={40}
              animation="wave"
            />
          ) : (
            <Avatar src="https://picsum.photos/200/300" />
          )}
          <Stack sx={{ width: "80%" }}>
            {loading ? (
              <>
                <Typography variant="body1">
                  <Skeleton variant="text" width="100%" animation="wave" />
                </Typography>
                <Typography variant="body2">
                  <Skeleton variant="text" width="100%" animation="wave" />
                </Typography>
              </>
            ) : (
              <>
                <Typography variant="body1">REACT MUI TUTORIAL</Typography>
              </>
            )}
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default MuiSkeleton;
