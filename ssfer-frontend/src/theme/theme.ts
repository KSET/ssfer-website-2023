
import {createTheme, Theme} from "@mui/material";

export const theme: Theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#000",
            light: "#858585",
            contrastText: "#fff",
        },
        secondary: {
            main: "#C9C9C9",
            dark: "#757575",
            contrastText: "#fff",
        },
        divider: "#C9C9C9",
    },
    typography: {
        fontFamily: "Barlow, sans-serif",
        fontWeightLight: 200,
        fontWeightMedium: 400,
        fontWeightRegular: 300,
        fontWeightBold: 600,
    }
})