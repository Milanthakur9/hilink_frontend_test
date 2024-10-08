// import { TextField } from "@mui/material";
import React, { ReactNode } from "react";
import {
  Controller,
  Control,
  FieldValues,
  Path,
  FieldErrors,
} from "react-hook-form";
import { styled } from "@mui/material/styles";
import TextField, { TextFieldProps } from "@mui/material/TextField";

const TextFieldStyled = styled(TextField)<TextFieldProps>(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    color: "#000",
    // Class for the border around the input field
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.primary.main,
      borderWidth: "2px",
    },
    // Class for the label of the input field
    "& .MuiInputLabel-outlined": {
      color: "#fff ",
    },
  },
}));

interface CustomTextFieldForRhfFieldProps<TField extends FieldValues> {
  control: Control<TField>;
  errors?: FieldErrors<TField>;
  name: Path<TField>;
  placeHolder: string;
  label: string;
  helperText?: string;
  multiLine?: boolean;
  rows?: number;
}

const CustomTextFieldForRhf = <TField extends FieldValues>(
  props: CustomTextFieldForRhfFieldProps<TField>
) => {
  const {
    control,
    errors,
    name,
    placeHolder,
    label,
    helperText,
    multiLine = false,
    rows,
  } = props;

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: errors ? true : false }}
      render={({ field: { value, onChange } }) => (
        <TextFieldStyled
          autoComplete={name}
          fullWidth
          value={value}
          label={label}
          onChange={onChange}
          placeholder={placeHolder}
          error={Boolean(errors?.[name])}
          helperText={
            (errors?.[name] ? errors?.[name]?.message : helperText) as ReactNode
          }
          aria-describedby="validation-name"
          multiline={multiLine}
          rows={rows}
        />
      )}
    />
  );
};

export default CustomTextFieldForRhf;
