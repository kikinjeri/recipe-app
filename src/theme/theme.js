// src/theme/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#f7f5f2", // soft warm background
      paper: "#ffffff",
    },
    primary: {
      main: "#8b5e34", // warm brown
    },
    secondary: {
      main: "#d4a373", // caramel accent
    },
    text: {
      primary: "#2f2f2f",
      secondary: "#6b6b6b",
    },
  },

  typography: {
    fontFamily: `"Inter", "Roboto", sans-serif`,
    h1: {
      fontSize: "2rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
  },

  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 600,
        },
      },
    },
  },
});

export default theme;
