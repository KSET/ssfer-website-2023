import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {ThemeProvider} from "@mui/material/styles";
import {theme, themeDark} from "@/theme/theme";
import {Barlow} from "@next/font/google";
import {CssBaseline, useMediaQuery} from "@mui/material";
import {useEffect, useMemo, useState} from "react";
import {ColorModeContext} from "@/contexts/ColorModeContext";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

const barlow = Barlow({
    weight: ["400", "500", "600", "700"],
    style: ["normal"],
    subsets: ["latin"],
});


export default function App({ Component, pageProps }: AppProps) {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [colorMode, setColorMode] = useState('light'); // prefersDarkMode ? 'dark' : 'light'

    const colorModeFunction = useMemo(() => ({
        toggleColorMode: () => {
            setColorMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        }
    }), [])

    useEffect(() => {
        setColorMode('light'); // prefersDarkMode ? 'dark' : 'light'
    }, [prefersDarkMode])

    return (
      <DndProvider backend={HTML5Backend}>
        <ColorModeContext.Provider value={colorModeFunction}>
            <main className={barlow.className}>
                <ThemeProvider theme={colorMode === "light" ? theme : themeDark}>
                    <CssBaseline />
                    <Component {...pageProps} />
                </ThemeProvider>
            </main>
        </ColorModeContext.Provider>
      </DndProvider>
    )
}
