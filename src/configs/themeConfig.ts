type ThemeConfig = {
  templateName: string;
  mode: "dark" | "light";
  toastPosition:
    | "top-left"
    | "top-center"
    | "top-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right";
  routingLoader: boolean;
  disableRipple: boolean;
  responsiveFontSizes: boolean;
};

const themeConfig: ThemeConfig = {
  // ** Layout Configs
  templateName: "Hi link" /* App Name */,
  mode: "dark",
  routingLoader: false,
  responsiveFontSizes: false /* true | false */,
  disableRipple: false /* true | false */,
  toastPosition:
    "top-right" /* top-left | top-center | top-right | bottom-left | bottom-center | bottom-right */,
};

export default themeConfig;
