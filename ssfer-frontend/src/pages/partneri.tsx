import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {Box, Typography} from "@mui/material";
import PartneriGrid from "@/components/PartneriGrid";


export default function Partneri() {

    return (
        <>
            <Header selectedLink={"Partneri"} />

            <Box sx={{mx: "2rem", mt: "2rem", mb: "8rem"}}>
                <Typography variant={"h4"} sx={{fontWeight: "bold", mt: "2rem"}}>
                    Partneri
                </Typography>

                <Typography variant={"body1"} sx={{mt: "1rem"}}>
                    Iza svih projekata stoje i uspješne suradnje s drugim fakultetima, udrugama, institucijama,
                    poduzećima i organizacijama. Svaki su posebni na svoj način i vrijedni istraživanja.
                    Čime se oni bave saznaj klikom na njihov logotip.
                </Typography>

                <PartneriGrid sx={{mt: "2rem"}} />
            </Box>

            <Footer />
        </>
    )
}