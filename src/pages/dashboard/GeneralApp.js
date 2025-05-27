import React from "react";
import { Box, Stack } from "@mui/material";
import Chats from "./Chats";

const GeneralApp = () => {
  return (
    <>
      <Stack direction={"row"} sx={{ width: "100%" }}>
        <Chats />
      </Stack>
    </>
  );
};

export default GeneralApp;
