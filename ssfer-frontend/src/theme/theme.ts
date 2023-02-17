
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

export const themeDark: Theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#fff",
            light: "#858585",
            contrastText: "#000",
        },
        secondary: {
            main: "#C9C9C9",
            dark: "#757575",
            contrastText: "#000",
        },
        background: {
            default: "#000",
            paper: "#000",
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