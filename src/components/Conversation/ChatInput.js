import React from "react";
import StyledInput from "../StyledInput";
import { Fab, IconButton, InputAdornment, Stack, Tooltip } from "@mui/material";
import {
  Camera,
  File,
  Image,
  LinkSimple,
  Smiley,
  Sticker,
  User,
} from "phosphor-react";

const Actions = [
  {
    color: "#4da5fe",
    icon: <Image size={24} />,
    y: 102,
    title: "Photo/Video",
  },
  {
    color: "#1b8cfe",
    icon: <Sticker size={24} />,
    y: 172,
    title: "Stickers",
  },
  {
    color: "#0172e4",
    icon: <Camera size={24} />,
    y: 242,
    title: "Image",
  },
  {
    color: "#0159b2",
    icon: <File size={24} />,
    y: 312,
    title: "Document",
  },
  {
    color: "#013f7f",
    icon: <User size={24} />,
    y: 382,
    title: "Contact",
  },
];
function ChatInput({ openPicker, setOpenPicker, setValue, value, inputRef }) {
  const [openActions, setOpenActions] = React.useState(false);
  return (
    <StyledInput
      inputRef={inputRef}
      value={value}
      onChange={(event) => {
        setValue(event.target.value);
      }}
      fullWidth
      placeholder="Message..."
      variant="filled"
      InputProps={{
        startAdornment: (
          <Stack sx={{ width: "max-content" }}>
            <Stack
              sx={{
                position: "relative",
                display: openActions ? "inline-block" : "none",
              }}
            >
              {Actions.map((el) => (
                <Tooltip placement="right" title={el.title}>
                  <Fab
                    onClick={() => {
                      setOpenActions(!openActions);
                    }}
                    sx={{
                      position: "absolute",
                      top: -el.y,
                      backgroundColor: el.color,
                    }}
                    aria-label="add"
                  >
                    {el.icon}
                  </Fab>
                </Tooltip>
              ))}
            </Stack>
            <InputAdornment position="start" sx={{ margin: "8px" }}>
              <IconButton>
                <LinkSimple
                  onClick={() => {
                    setOpenActions(!openActions);
                  }}
                />
              </IconButton>
            </InputAdornment>
          </Stack>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={() => setOpenPicker(!openPicker)}>
              <Smiley />
            </IconButton>
          </InputAdornment>
        ),
        disableUnderline: true,
      }}
    />
  );
}

export default ChatInput;
