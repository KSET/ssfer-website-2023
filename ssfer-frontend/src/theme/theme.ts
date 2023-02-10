
import {createTheme, Theme} from "@mui/material";

export const theme: Theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#000",
            contrastText: "#fff",
        },
        secondary: {
            main: "#C9C9C9",
            contrastText: "#fff",
        },
        divider: "#C9C9C9",
    },
    typography: {
        fontFamily: "Barlow, sans-serif",
    }
})