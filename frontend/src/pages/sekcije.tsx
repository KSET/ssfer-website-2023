import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {Box, Typography, useTheme} from "@mui/material";
import SekcijeGrid from "@/components/sekcije/SekcijeGrid";


export default function Sekcije() {
    const theme = useTheme();

    return (
        <Box minHeight={"100vh"}>
            <Header selectedLink={"Sekcije"} />

            <Box sx={{mx: "2rem",
                      mt: "2rem",
                      mb: "8rem"}}>

                <Typography variant={"h4"}
                            color={theme.palette.primary.main}
                            sx={{fontWeight: "bold"}}>
                    Sekcije
                </Typography>

                <Box sx={{width: {xs: "100%", md: "50%"},
                          my: "1rem"}} >
                    <Typography variant={"body1"}
                                color={theme.palette.primary.main}>
                        Zajedničkim interesima okupili smo se u devet sekcija.
                        Svaka sekcija je razvila svoje tradicije, projekte i kulturu.
                        Otkrij njihove priče klikom na ilustraciju sekcije ili njeno ime.
                    </Typography>
                </Box>

                <SekcijeGrid sx={{mt: "2rem"}} />
            </Box>

            <Footer />
        </Box>
    )
}