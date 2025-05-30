import React from "react";
import { Box, Stack, useTheme } from "@mui/material";
import Chats from "./Chats";
import Conversation from "../../components/Conversation";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";

const GeneralApp = () => {
  const theme = useTheme();
  const { sideBar } = useSelector((store) => store.app);
  return (
    <>
      <Stack direction={"row"} sx={{ width: "100%" }}>
        {/* chats */}
        <Chats />
        <Box
          sx={{
            height: "100%",
            width: sideBar.open ? "calc(100vw - 740px)" : "calc(100vw - 420px)",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F0F4FA"
                : theme.palette.background.default,
          }}
        >
          {/* conversations */}
          <Conversation />
        </Box>
        {/* contact */}
        {sideBar.open && <Contact />}
      </Stack>
    </>
  );
};

export default GeneralApp;
