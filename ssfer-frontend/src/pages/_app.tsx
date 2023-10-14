import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {ThemeProvider} from "@mui/material/styles";
import {theme, themeDark} from "@/theme/theme";
import {Barlow} from "@next/font/google";
import {CssBaseline} from "@mui/material";
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
    const [colorMode, setColorMode] = useState('light');

    const colorModeFunction = useMemo(() => ({
        toggleColorMode: () => {
            setColorMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            localStorage.setItem('colorMode', colorMode === 'light' ? 'dark' : 'light');
        }
    }), [colorMode])

    useEffect(() => {
        const localColorMode = localStorage.getItem('colorMode');
        if (localColorMode) {
            setColorMode(localColorMode === "dark" ? "dark" : "light");
        } else {
            setColorMode('light');
        }
    }, []);

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
