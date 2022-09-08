import { createTheme } from "@mui/material"
import { red, blue } from "@mui/material/colors"

export const blueTheme = createTheme({
  palette: {
    primary: {
      main: blue.A100,
    },
    secondary: {
      main: "#2E2424",
    },
    error: {
      main: red.A400,
    },
  },
})
