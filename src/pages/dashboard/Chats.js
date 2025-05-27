import React from "react";
import {
  Box,
  IconButton,
  Typography,
  Stack,
  Button,
  Divider,
  useTheme,
} from "@mui/material";
import { Archive, CircleDashed, MagnifyingGlass } from "phosphor-react";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/Search/index";
import ChatElement from "../../components/ChatElement";
import { ChatList } from "../../data";
import { SimpleBarStyle } from "../../components/Scrollbar";

function Chats() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "relative",
        width: 320,
        backgroundColor:
          theme.palette.mode === "light"
            ? "#F8FAFF"
            : theme.palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Stack p={3} spacing={2} sx={{ height: "100vh" }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography variant="h5">Chats</Typography>
          <IconButton>
            <CircleDashed />
          </IconButton>
        </Stack>
        <Stack sx={{ width: "100%" }}>
          <Search>
            <SearchIconWrapper>
              <MagnifyingGlass color="#709CE6" />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search..."
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Stack>
        <Stack spacing={1}>
          <Stack direction={"row"} alignItems={"center"} spacing={1.5}>
            <Archive size={24} />
            <Button>Archive</Button>
          </Stack>
          <Divider />
        </Stack>
        <Stack
          // spacing={2}
          direction={"column"}
          sx={{
            flexGrow: 1,
            height: "100%",
            overflow: "scroll",
          }}
        >
          <SimpleBarStyle timeout={500} clickOnTrack={false}>
            <Stack spacing={2.4}>
              <Typography variant="subtitle2" sx={{ color: "#676767" }}>
                Pinned
              </Typography>
              {ChatList.filter((ele) => ele.pinned).map((ele) => (
                <ChatElement {...ele} />
              ))}
            </Stack>
            <Stack spacing={2.4}>
              <Typography
                variant="subtitle2"
                sx={{ color: "#676767", paddingTop: "16px" }}
              >
                All Chats
              </Typography>
              {ChatList.filter((ele) => !ele.pinned).map((ele) => (
                <ChatElement {...ele} />
              ))}
            </Stack>
          </SimpleBarStyle>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Chats;
