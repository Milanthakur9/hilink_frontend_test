// import { TextField } from "@mui/material";
import React, { ReactNode } from "react";
import {
  Controller,
  Control,
  FieldValues,
  Path,
  FieldErrors,
} from "react-hook-form";
import CustomTextField from "@/@core/components/mui/text-field";
import { IconButton, InputAdornment, useTheme } from "@mui/material";
import Icon from "@/@core/components/icon";

interface CustomTextFieldWithIconFieldProps<TField extends FieldValues> {
  control: Control<TField>;
  errors?: FieldErrors<TField>;
  name: Path<TField>;
  placeHolder: string;
  label: string;
  helperText?: string;
  multiLine?: boolean;
  rows?: number;
  iconName: string;
}

const CustomTextFieldWithIcon = <TField extends FieldValues>(
  props: CustomTextFieldWithIconFieldProps<TField>
) => {
  const theme = useTheme();

  const {
    control,
    errors,
    name,
    placeHolder,
    label,
    helperText,
    multiLine = false,
    rows,
    iconName,
  } = props;

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: errors ? true : false }}
      render={({ field: { value, onChange } }) => (
        <CustomTextField
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
          InputLabelProps={{ shrink: true }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="end">
                <IconButton
                  edge="start"
                  onMouseDown={(e) => e.preventDefault()}
                  aria-label="toggle password visibility"
                  sx={{
                    color: theme.palette.customColors?.primaryWhite,
                    marginRight: 1,
                  }}
                >
                  <Icon fontSize="1.25rem" icon={iconName} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
};

export default CustomTextFieldWithIcon;
