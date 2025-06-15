import React, { useState } from "react";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  useTheme,
} from "@mui/material";
import logo from "../../assets/Images/logo.ico";
import { Nav_Buttons, Profile_Menu } from "../../data";
import { Gear } from "phosphor-react";
import { faker } from "@faker-js/faker";
import useSettings from "../../hooks/useSettings";
import AntSwitch from "../../components/AntSwitch";
import { useNavigate } from "react-router-dom";

function getPathname(index) {
  switch (index) {
    case 0:
      return "/app";
    case 1:
      return "/group";
    case 2:
      return "/call";
    case 3:
      return "/settings";
    default:
      return "/app";
  }
}
function handleNavigation(index, navigate) {
  const path = getPathname(index);
  if (path) {
    navigate(path);
  }
}

function handleMenuNavigation(index, navigate) {
  switch (index) {
    case 0:
      return navigate("/profile");
    case 1:
      return navigate("/settings");
    case 2:
      // TODO: Handle logout logic here
      console.log("Logout clicked");
      return navigate("/auth/login");
    default:
      return navigate("/auth/login");
  }
}

function SideNav() {
  const theme = useTheme();
  const { onToggleMode } = useSettings();
  const [selected, setSelected] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
                  onClick={() => {
                    setSelected(ele.index);
                    handleNavigation(ele.index, navigate);
                  }}
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
                onClick={() => {
                  setSelected(3);
                  handleNavigation(3, navigate);
                }}
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
          <Avatar
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            src={faker.image.avatar()}
          />
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Stack spacing={1} px={1}>
              {Profile_Menu.map((el) => (
                <MenuItem onClick={handleClose} key={el.title}>
                  <Stack
                    sx={{ width: 100, cursor: "pointer" }}
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    onClick={() => {
                      handleMenuNavigation(el.id, navigate);
                    }}
                  >
                    <span>{el.title}</span>
                    {el.icon}
                  </Stack>
                </MenuItem>
              ))}
            </Stack>
          </Menu>
        </Stack>
      </Stack>
    </Box>
  );
}

export default SideNav;
