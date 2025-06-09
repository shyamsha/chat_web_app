import PropTypes from "prop-types";

import { useFormContext, Controller } from "react-hook-form";
// useFormContext allows us to access the form context, which is necessary for the controller to work
// Controller is a component that allows us to control the form field, it takes care of the value and onChange props for us

import { TextField } from "@mui/material";

RHFTextField.propTypes = {
  name: PropTypes.string,
  helperText: PropTypes.node,
};
export default function RHFTextField({ name, helperText, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          value={
            typeof field.value === "number" && field.value === 0
              ? ""
              : field.value
          }
          error={!!error}
          helperText={error ? error?.message : helperText}
          {...other}
        />
      )}
    />
  );
}
