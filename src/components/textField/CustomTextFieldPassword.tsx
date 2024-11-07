import React, { ReactNode, useState } from "react";
import {
  Controller,
  Control,
  FieldValues,
  Path,
  FieldErrors,
} from "react-hook-form";
import Icon from "@/@core/components/icon";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import CustomTextField from "@/@core/components/mui/text-field";
import { useTheme } from "@mui/material";

interface State {
  password: string;
  showPassword: boolean;
}

interface CustomTextFieldPasswordFieldProps<TField extends FieldValues> {
  control: Control<TField>;
  errors: FieldErrors<TField>;
  name: Path<TField>;
  label?: string;
  placeHolder?: string;
}

const CustomTextFieldPassword = <TField extends FieldValues>(
  props: CustomTextFieldPasswordFieldProps<TField>
) => {
  const { control, errors, name, label, placeHolder } = props;

  const [state, setState] = useState<State>({
    password: "",
    showPassword: false,
  });
  const theme = useTheme();

  const handleClickShowPassword = () => {
    setState({ ...state, showPassword: !state.showPassword });
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: true }}
      render={({ field: { value, onChange } }) => (
        <CustomTextField
          autoComplete="new-password"
          fullWidth
          value={value}
          label={label ? label : "Password"}
          onChange={onChange}
          placeholder={placeHolder ? placeHolder : "Password"}
          id={`validation-${name}`}
          error={Boolean(errors?.[name])}
          helperText={errors?.[name]?.message as ReactNode}
          type={state.showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  onClick={handleClickShowPassword}
                  onMouseDown={(e) => e.preventDefault()}
                  aria-label="toggle password visibility"
                  sx={{
                    color: theme.palette.customColors?.primaryWhite,
                    marginRight: 1,
                  }}
                >
                  <Icon
                    fontSize="1.25rem"
                    icon={state.showPassword ? "tabler:eye" : "tabler:eye-off"}
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
};

export default CustomTextFieldPassword;
