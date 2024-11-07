// ** React Import
import { forwardRef } from "react";

// ** MUI Imports
import { styled } from "@mui/material/styles";
import TextField, { TextFieldProps } from "@mui/material/TextField";

const TextFieldStyled = styled(TextField)<TextFieldProps>(({ theme }) => ({
  alignItems: "flex-start",
  "& .MuiInputLabel-root": {
    transform: "none",
    position: "relative",
    display: "none",
  },
  "& .MuiInputBase-root": {
    borderRadius: "0px !important",
    backgroundColor: `${theme.palette.customColors?.primaryDark1}`,
    border: `2px solid ${theme.palette.primary.main}`,
    padding: 4,
    transition: theme.transitions.create(["border-color", "box-shadow"], {
      duration: 200,
    }),
    "&:not(.Mui-focused):not(.Mui-disabled):not(.Mui-error):hover": {
      borderColor: `rgba(${theme.palette.primary.main}, 0.28)`,
    },
    "&:before, &:after": {
      display: "none",
    },
    "&.MuiInputBase-sizeSmall": {
      borderRadius: 0,
    },
    "&.Mui-error": {
      borderColor: theme.palette.error.main,
    },
    "&.Mui-focused": {
      boxShadow: theme.shadows[2],
      "& .MuiInputBase-input:not(.MuiInputBase-readOnly):not([readonly])::placeholder":
        {
          transform: "translateX(4px)",
        },
      "&.MuiInputBase-colorPrimary": {
        borderColor: theme.palette.primary.main,
      },
      "&.MuiInputBase-colorSecondary": {
        borderColor: theme.palette.secondary.main,
      },
      "&.MuiInputBase-colorInfo": {
        borderColor: theme.palette.info.main,
      },
      "&.MuiInputBase-colorSuccess": {
        borderColor: theme.palette.success.main,
      },
      "&.MuiInputBase-colorWarning": {
        borderColor: theme.palette.warning.main,
      },
      "&.MuiInputBase-colorError": {
        borderColor: theme.palette.error.main,
      },
      "&.Mui-error": {
        borderColor: theme.palette.error.main,
      },
    },
    "&.Mui-disabled": {
      backgroundColor: `${theme.palette.action.selected} !important`,
    },
    "& .MuiInputAdornment-root": {
      marginTop: "0 !important",
    },
  },
  "& .MuiInputBase-input": {
    color: theme.palette.customColors?.primaryWhite,
    opacity: 1,
    "&:not(textarea)": {
      padding: "15.5px 13px",
    },
    "&:not(textarea).MuiInputBase-inputSizeSmall": {
      padding: "7.5px 13px",
    },
    "&:not(.MuiInputBase-readOnly):not([readonly])::placeholder": {
      transition: theme.transitions.create(["opacity", "transform"], {
        duration: 200,
      }),
      fontSize: 14,
      opacity: 0.8,
    },
  },
}));

const CustomTextField = forwardRef((props: TextFieldProps, ref) => {
  // ** Props
  const { size = "small", InputLabelProps, sx, ...rest } = props;

  return (
    <TextFieldStyled
      size={size}
      inputRef={ref}
      {...rest}
      variant="filled"
      sx={sx}
      InputLabelProps={{ ...InputLabelProps, shrink: true }}
    />
  );
});

CustomTextField.displayName = "CustomTextField";

export default CustomTextField;
