import { Theme } from "@mui/material/styles";
import { ComponentsPropsList } from "@mui/material";
import MuiTypography from "./typography";
import MuiCheckbox from "./checkBox";
import MuiButtonGroup from "./button-group";
import MuiButton from "./button";

export type OwnerStateThemeType = {
  theme: Theme;
  ownerState: ComponentsPropsList[keyof ComponentsPropsList] &
    Record<string, unknown>;
};

const Overrides = () => {
  const button = MuiButton();
  const checkbox = MuiCheckbox();
  const buttonGroup = MuiButtonGroup();

  const buttonGroupObject = Object.assign(buttonGroup);
  const checkBoxObject = Object.assign(checkbox);
  const typographyObject = Object.assign(MuiTypography);

  return Object.assign(
    button,
    buttonGroupObject,
    checkBoxObject,
    typographyObject
  );
};

export default Overrides;
