import React, { useState } from "react";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  useTheme,
} from "@mui/material";
import logo from "../../assets/Images/logo.ico";
import { Nav_Buttons } from "../../data";
import { Gear } from "phosphor-react";
import { faker } from "@faker-js/faker";
import useSettings from "../../hooks/useSettings";
import AntSwitch from "../../components/AntSwitch";

function SideNav() {
  const theme = useTheme();
  const { onToggleMode } = useSettings();
  const [selected, setSelected] = useState(0);
  return (
    <Box
      p={2}
      sx={{
        backgroundColor: theme.palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
        height: "100vh",
        width: 100,
      }}
    >
      <Stack
        direction={"column"}
        alignItems={"center"}
        justifyContent={"space-between"}
        sx={{ height: "100%" }}
        spacing={3}
      >
        <Stack spacing={4} alignItems={"center"}>
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              height: 64,
              width: 64,
              borderRadius: 2.5,
            }}
          >
            <img src={logo} alt="log" />
          </Box>
          <Stack
            sx={{ width: "max-content" }}
            spacing={3}
            direction={"column"}
            alignItems={"center"}
          >
            {Nav_Buttons.map((ele) =>
              selected === ele.index ? (
                <Box
                  p={1}
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                  }}
                >
                  <IconButton
                    key={ele.index}
                    sx={{ width: "max-content", color: "#fff" }}
                  >
                    {ele.icon}
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  onClick={() => setSelected(ele.index)}
                  key={ele.index}
                  sx={{
                    width: "max-content",
                    color:
                      theme.palette.main === "light"
                        ? "#000"
                        : theme.palette.text.primary,
                  }}
                >
                  {ele.icon}
                </IconButton>
              )
            )}
            <Divider sx={{ width: 48 }} />
            {selected === 3 ? (
              <Box
                p={1}
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: 1.5,
                }}
              >
                <IconButton sx={{ width: "max-content", color: "#fff" }}>
                  <Gear />
                </IconButton>
              </Box>
            ) : (
              <IconButton
                onClick={() => setSelected(3)}
                sx={{
                  width: "max-content",
                  color:
                    theme.palette.main === "light"
                      ? "#000"
                      : theme.palette.text.primary,
                }}
              >
                <Gear />
              </IconButton>
            )}
          </Stack>
        </Stack>
        <Stack spacing={3}>
          <AntSwitch onChange={() => onToggleMode()} defaultChecked />
          <Avatar src={faker.image.avatar()} />
        </Stack>
      </Stack>
    </Box>
  );
}

export default SideNav;
