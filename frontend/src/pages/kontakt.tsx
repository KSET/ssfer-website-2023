import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Box, Grid, Typography } from "@mui/material";
import { GetServerSideProps } from "next";
import React from "react";

type BasicInfo = {
    naziv: string;
    skraceni_naziv: string | null;
    sjediste: string | null;
    oib: string | null;
    pdv_broj: string | null;
    iban: string | null;
    banka: string | null;
    swift: string | null;
};

type ContactAddresses = {
    informacije: string;
    program: string | null;
    mediji: string | null;
    pravno: string | null;
    clanstvo: string | null;
};

type Leadership = {
    uloga: string;
    ime: string | null;
    email: string | null;
};

type KontaktProps = {
    osnovneInformacije: BasicInfo | null;
    kontaktAdrese: ContactAddresses | null;
    vodstvo: Leadership[];
};

export const getServerSideProps: GetServerSideProps<KontaktProps> = async () => {
    const response = await fetch("http://localhost:4000/contacts");
    const data = await response.json();

    return {
        props: {
            osnovneInformacije: data.osnovneInformacije ?? null,
            kontaktAdrese: data.kontaktAdrese ?? null,
            vodstvo: data.vodstvo,
        },
    };
};

export default function Kontakt({ osnovneInformacije, kontaktAdrese, vodstvo }: KontaktProps) {
    const prikazOsnovnihInformacija = osnovneInformacije
        ? [
              { key: "Ime udruge", value: osnovneInformacije.naziv },
              { key: "Skraćeni naziv udruge", value: osnovneInformacije.skraceni_naziv },
              { key: "Sjedište udruge", value: osnovneInformacije.sjediste },
              { key: "OIB", value: osnovneInformacije.oib },
              { key: "PDV", value: osnovneInformacije.pdv_broj },
              { key: "IBAN", value: osnovneInformacije.iban },
              { key: "Banka", value: osnovneInformacije.banka },
              { key: "SWIFT", value: osnovneInformacije.swift },
          ]
        : [];

    const prikazKontaktAdrese = kontaktAdrese
        ? [
              { key: "Informacije", value: kontaktAdrese.informacije },
              { key: "Program", value: kontaktAdrese.program },
              { key: "Mediji", value: kontaktAdrese.mediji },
              { key: "Pravno", value: kontaktAdrese.pravno },
              { key: "Članstvo", value: kontaktAdrese.clanstvo },
          ]
        : [];

    return (
        <Box minHeight={"100vh"}>
            <Header selectedLink={"Kontakt"} />

            <Box sx={{ mx: "2rem", mt: "2rem", mb: "8rem" }}>
                <Typography variant={"h4"} sx={{ fontWeight: "bold", mt: "2rem" }}>
                    Kontakt
                </Typography>

                <Typography variant={"h5"} sx={{ fontWeight: "bold", mt: "2rem" }}>
                    Osnovne informacije
                </Typography>

                <Grid container rowSpacing={"0.5rem"} sx={{ mt: "1rem" }} alignItems={"center"}>
                    {prikazOsnovnihInformacija.map((info) => (
                        <React.Fragment key={info.key}>
                            <Grid item xs={12} md={3} lg={2}>
                                <Typography
                                    variant={"body1"}
                                    sx={{ fontWeight: { xs: "bold", md: "normal" } }}
                                >
                                    {info.key}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={9} lg={10}>
                                <Typography variant={"body2"}>{info.value}</Typography>
                            </Grid>
                        </React.Fragment>
                    ))}
                </Grid>

                <Typography variant={"h5"} sx={{ fontWeight: "bold", mt: "2rem" }}>
                    Kontakt adresa
                </Typography>

                <Grid container rowSpacing={"0.5rem"} sx={{ mt: "1rem" }} alignItems={"center"}>
                    {prikazKontaktAdrese.map((info) => (
                        <React.Fragment key={info.key}>
                            <Grid item xs={12} md={3} lg={2}>
                                <Typography
                                    variant={"body1"}
                                    sx={{ fontWeight: { xs: "bold", md: "normal" } }}
                                >
                                    {info.key}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={9} lg={10}>
                                <Typography variant={"body2"}>{info.value}</Typography>
                            </Grid>
                        </React.Fragment>
                    ))}
                </Grid>

                <Typography variant={"h5"} sx={{ fontWeight: "bold", mt: "2rem" }}>
                    Voditelji
                </Typography>

                <Grid container rowSpacing={"0.5rem"} sx={{ mt: "1rem" }} alignItems={"center"}>
                    {vodstvo.map((info) => (
                        <React.Fragment key={info.uloga}>
                            <Grid item xs={12} md={3} lg={2}>
                                <Typography
                                    variant={"body1"}
                                    sx={{ fontWeight: { xs: "bold", md: "normal" } }}
                                >
                                    {info.uloga}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={3} lg={2}>
                                <Typography variant={"body2"}>{info.ime}</Typography>
                            </Grid>
                            <Grid item xs={12} md={6} lg={8}>
                                <Typography variant={"body2"}>{info.email}</Typography>
                            </Grid>
                        </React.Fragment>
                    ))}
                </Grid>
            </Box>

            <Footer />
        </Box>
    );
}
