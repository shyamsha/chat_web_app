import React from "react";
import { Box, Stack, useTheme } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import Message from "./Message";

function Conversation() {
  const theme = useTheme();
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      {/* chat header */}
      <Header />
      {/* chat msg */}
      <Box width={"100%"} sx={{ flexGrow: 1 }}>
        <Message />
      </Box>

      {/* chat footer */}
      <Footer />
    </Stack>
  );
}

export default Conversation;
