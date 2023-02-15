import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {Box, Grid, Typography} from "@mui/material";
import React from "react";


const OSNOVNE_INFORMACIJE = [
    {
        key: "Ime udruge",
        value: "Savez studenata elektrotehnike i računarstva"
    },
    {
        key: "Skraćeni naziv udruge",
        value: "SS FER"
    },
    {
        key: "Sjedište udruge",
        value: "Unska ulica 3, 10000 Zagreb, Hrvatska"
    },
    {
        key: "OIB",
        value: "14504100762"
    },
    {
        key: "VAT",
        value: "HR14504100762"
    },
    {
        key: "IBAN",
        value: "HR2324020061100582760"
    },
    {
        key: "Banka",
        value: "Erste&Steiermärkische Bank d.d."
    },
    {
        key: "SWIFT",
        value: "ESBCHR22"
    }
]

const KONTAKT_ADRESA = [
    {
        key: "Info",
        value: "info@kset.org"
    },
    {
        key: "Program",
        value: "booking@kset.org"
    },
    {
        key: "Mediji",
        value: "press@kset.org"
    },
    {
        key: "Pravno",
        value: "tajnik@kset.org"
    },
    {
        key: "Članstvo",
        value: "uclani.se@kset.org"
    }
]

const VODITELJI = [
    {
        key: "Predsjednik",
        name: "Marin Capan",
        email: "marin.capan@kset.org"
    },
    {
        key: "Tajnik",
        name: "Darija Filipović",
        email: "darija.filipovic@kset.org"
    },
    {
        key: "Blagajnik",
        name: "Drago Anić-Ivičić",
        email: "drago.anic-ivcic@kset.org"
    },
]

export default function Kontakt() {

    return (
        <>
            <Header selectedLink={"Kontakt"} />

            <Box sx={{mx: "2rem", mt: "2rem", mb: "8rem"}}>
                <Typography variant={"h4"} sx={{fontWeight: "bold", mt: "2rem"}}>
                    Kontakt
                </Typography>

                <Typography variant={"h5"} sx={{fontWeight: "bold", mt: "2rem"}}>
                    Osnovne informacije
                </Typography>

                <Grid container rowSpacing={"0.5rem"} sx={{mt: "1rem"}} alignItems={"center"}>
                    {OSNOVNE_INFORMACIJE.map((info) => (
                        <React.Fragment key={info.key}>
                            <Grid item xs={12} md={3} lg={2}>
                                <Typography variant={"body1"} sx={{fontWeight: {xs: "bold", md: "normal"}}}>
                                    {info.key}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={9} lg={10}>
                                <Typography variant={"body2"}>
                                    {info.value}
                                </Typography>
                            </Grid>
                        </React.Fragment>
                    ))}
                </Grid>

                <Typography variant={"h5"} sx={{fontWeight: "bold", mt: "2rem"}}>
                    Kontakt adresa
                </Typography>

                <Grid container rowSpacing={"0.5rem"} sx={{mt: "1rem"}} alignItems={"center"}>
                    {KONTAKT_ADRESA.map((info) => (
                        <React.Fragment key={info.key}>
                            <Grid item xs={12} md={3} lg={2}>
                                <Typography variant={"body1"} sx={{fontWeight: {xs: "bold", md: "normal"}}}>
                                    {info.key}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={9} lg={10}>
                                <Typography variant={"body2"}>
                                    {info.value}
                                </Typography>
                            </Grid>
                        </React.Fragment>
                    ))}
                </Grid>

                <Typography variant={"h5"} sx={{fontWeight: "bold", mt: "2rem"}}>
                    Voditelji
                </Typography>

                <Grid container rowSpacing={"0.5rem"} sx={{mt: "1rem"}} alignItems={"center"}>
                    {VODITELJI.map((info) => (
                        <React.Fragment key={info.key}>
                            <Grid item xs={12} md={3} lg={2}>
                                <Typography variant={"body1"} sx={{fontWeight: {xs: "bold", md: "normal"}}}>
                                    {info.key}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={3} lg={2}>
                                <Typography variant={"body2"}>
                                    {info.name}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={6} lg={8}>
                                <Typography variant={"body2"}>
                                    {info.email}
                                </Typography>
                            </Grid>
                        </React.Fragment>
                    ))}
                </Grid>

            </Box>

            <Footer />
        </>
    )
}