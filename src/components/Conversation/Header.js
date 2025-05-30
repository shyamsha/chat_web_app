import { faker } from "@faker-js/faker";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { CaretDown, MagnifyingGlass, Phone, VideoCamera } from "phosphor-react";
import React from "react";
import StyledBadge from "../StyleBadge";
import { ToggleSidebar } from "../../redux/slices/app";
import { useDispatch } from "react-redux";

function Header() {
  const theme = useTheme();
  const dispatch = useDispatch();
  return (
    <Box
      p={2}
      sx={{
        height: 73,
        width: "100%",
        backgroundColor:
          theme.palette.mode === "light"
            ? "#F8FAFF"
            : theme.palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Stack
        alignItems={"center"}
        justifyContent={"space-between"}
        direction={"row"}
        sx={{ height: "100%", width: "100%" }}
      >
        <Stack
          onClick={() => dispatch(ToggleSidebar())}
          direction={"row"}
          spacing={2}
        >
          <Box>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar alt={faker.name.firstName()} src={faker.image.avatar()} />
            </StyledBadge>
            <Box>
              <Stack spacing={0.2}>
                <Typography variant="subtitle2">
                  {faker.name.firstName()}
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Stack>
        <Stack direction={"row"} alignItems={"center"} spacing={3}>
          <IconButton>
            <VideoCamera />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
          <IconButton>
            <MagnifyingGlass />
          </IconButton>
          <Divider orientation="vertical" flexItem />
          <IconButton>
            <CaretDown />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Header;
