import React, { useState } from "react";
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
import { CaretLeft } from "phosphor-react";
import { Settings_List } from "../../data";
import ShortcutDialog from "../../sections/settings/ShortcutDialog";
import ThemeDialog from "../../sections/settings/ThemeDialog";

const Settings = () => {
  const theme = useTheme();
  const [openTheme, setOpenTheme] = useState(false);
  const [openShortcuts, setOpenShortcuts] = useState(false);

  const handleOpenTheme = () => {
    setOpenTheme(true);
  };

  const handleCloseTheme = () => {
    setOpenTheme(false);
  };

  const handleOpenShortcuts = () => {
    setOpenShortcuts(true);
  };

  const handleCloseShortcuts = () => {
    setOpenShortcuts(false);
  };

  const handleSettingsClick = (key) => {
    switch (key) {
      case 3:
        handleOpenTheme();
        break;
      case 6:
        handleOpenShortcuts();
        break;
      // Add more cases for other settings if needed
      default:
        break;
    }
  };
  return (
    <>
      <Stack direction="row" sx={{ width: "100%" }}>
        {/* LeftPane */}
        <Box
          sx={{
            overflowY: "scroll",
            height: "100vh",
            width: 320,
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background,

            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Stack p={3} spacing={5}>
            {/* Header */}
            <Stack direction="row" alignItems={"center"} spacing={3}>
              <IconButton>
                <CaretLeft size={24} color={"#4B4B4B"} />
              </IconButton>

              <Typography variant="h5">Settings</Typography>
            </Stack>
            {/* Profile */}
            <Stack direction="row" spacing={3}>
              <Avatar
                src={faker.image.avatar()}
                sx={{ height: 56, width: 56 }}
              />
              <Stack spacing={0.5}>
                <Typography variant="article">{`${faker.name.firstName()} ${faker.name.lastName()}`}</Typography>
                <Typography variant="body2">{faker.random.words()}</Typography>
              </Stack>
            </Stack>
            {/* Settings Options */}
            <Stack spacing={4}>
              {Settings_List.map(({ key, icon, title }) => {
                return (
                  <>
                    <Stack
                      key={key}
                      onClick={() => handleSettingsClick(key)}
                      sx={{ cursor: "pointer" }}
                      spacing={2}
                    >
                      <Stack alignItems={"center"} direction="row" spacing={2}>
                        {icon}
                        <Typography variant="body2">{title}</Typography>
                      </Stack>
                      {key !== 7 && <Divider />}
                    </Stack>
                  </>
                );
              })}
            </Stack>
          </Stack>
        </Box>
        {/* Right Pane */}
        <Box
          sx={{
            height: "100%",
            width: "calc(100vw - 420px )",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#FFF"
                : theme.palette.background.paper,
            borderBottom: "6px solid #0162C4",
          }}
        ></Box>
      </Stack>
      {openTheme && (
        <ThemeDialog open={openTheme} handleClose={handleCloseTheme} />
      )}
      {openShortcuts && (
        <ShortcutDialog
          open={openShortcuts}
          handleClose={handleCloseShortcuts}
        />
      )}
    </>
  );
};

export default Settings;
