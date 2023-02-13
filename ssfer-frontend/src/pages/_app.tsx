import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {ThemeProvider} from "@mui/material/styles";
import {theme} from "@/theme/theme";
import {Barlow} from "@next/font/google";

const barlow = Barlow({
    weight: ["400", "500", "600", "700"],
    style: ["normal"],
    subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={barlow.className}>
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </main>

    )
}
