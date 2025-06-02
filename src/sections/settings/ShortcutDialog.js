import React from "react";
import {
  Dialog,
  Slide,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
  Grid,
} from "@mui/material";
import { Keyboard_Shortcuts } from "../../data";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ShortcutDialog = ({ open, handleClose }) => {
  return (
    <>
      <Dialog
        fullWidth
        maxWidth="md"
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{ p: 4 }}
      >
        <DialogTitle>{"Keyboard Shortcuts"}</DialogTitle>
        <DialogContent sx={{ mt: 4 }}>
          {/*  */}
          <Grid container spacing={3}>
            {Keyboard_Shortcuts.map(({ key, title, combination }) => {
              return (
                <Grid item xs={6}>
                  <Stack
                    sx={{ width: "100%" }}
                    justifyContent="space-between"
                    key={key}
                    spacing={3}
                    direction={"row"}
                    alignItems="center"
                  >
                    <Typography variant="caption" sx={{ fontSize: 14 }}>
                      {title}
                    </Typography>
                    <Stack spacing={2} direction="row">
                      {combination.map((el) => {
                        return (
                          <Button
                            sx={{ color: "#212121" }}
                            disabled
                            variant="contained"
                          >
                            {el}
                          </Button>
                        );
                      })}
                    </Stack>
                  </Stack>
                </Grid>
              );
            })}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant={"contained"} onClick={handleClose}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ShortcutDialog;
