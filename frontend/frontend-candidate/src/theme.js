import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#61dafb",
    },
    secondary: {
      main: "#282c34",
    },
    background: {
      default: "#f4f4f4",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
  },
});

export default theme;
