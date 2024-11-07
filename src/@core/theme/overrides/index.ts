import { Theme } from "@mui/material/styles";
import { ComponentsPropsList } from "@mui/material";

export type OwnerStateThemeType = {
  theme: Theme;
  ownerState: ComponentsPropsList[keyof ComponentsPropsList] &
    Record<string, unknown>;
};

import MuiButton from "./button";

const Overrides = () => {
  const button = MuiButton();

  return Object.assign(button);
};

export default Overrides;
