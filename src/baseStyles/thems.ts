import { extendTheme } from "native-base";
export const THEM = extendTheme({
  colors: {
    gray: {
      300: "#8D8D99",
    },
    blue: {
      300:"#93C5FD",
      500: "#339CFF",
      800: "#0B3B60",
      900: "#1E3A8A",
    },
    white: "#FFF",
    black: "#000",
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
  },
});
