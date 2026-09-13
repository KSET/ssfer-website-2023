import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Box, Grid, Typography } from "@mui/material";
import { GetServerSideProps } from "next";
import React from "react";

type BasicInfo = {
    name: string;
    name_short: string | null;
    hq: string | null;
    oib: string | null;
    vat_number: string | null;
    iban: string | null;
    bank: string | null;
    swift: string | null;
};

type ContactAddresses = {
    info: string;
    program: string | null;
    media: string | null;
    legal: string | null;
    membership: string | null;
};

type Leadership = {
    role: string;
    name: string | null;
    email: string | null;
};

type KontaktProps = {
    basic_info: BasicInfo | null;
    contact_addresses: ContactAddresses | null;
    leadership: Leadership[];
};

export const getServerSideProps: GetServerSideProps<KontaktProps> = async () => {
    const response = await fetch("http://localhost:4000/contacts");
    const data = await response.json();

    return {
        props: {
            basic_info: data.contactPages ?? null,
            contact_addresses: data.contactAddresses ?? null,
            leadership: data.leadership,
        },
    };
};

export default function Kontakt({ basic_info, contact_addresses, leadership }: KontaktProps) {
    const osnovneInformacije = basic_info
        ? [
              { key: "Ime udruge", value: basic_info.name },
              { key: "Skraćeni naziv udruge", value: basic_info.name_short },
              { key: "Sjedište udruge", value: basic_info.hq },
              { key: "OIB", value: basic_info.oib },
              { key: "VAT", value: basic_info.vat_number },
              { key: "IBAN", value: basic_info.iban },
              { key: "Banka", value: basic_info.bank },
              { key: "SWIFT", value: basic_info.swift },
          ]
        : [];

    const kontaktAdresa = contact_addresses
        ? [
              { key: "Info", value: contact_addresses.info },
              { key: "Program", value: contact_addresses.program },
              { key: "Mediji", value: contact_addresses.media },
              { key: "Pravno", value: contact_addresses.legal },
              { key: "Članstvo", value: contact_addresses.membership },
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
                    {osnovneInformacije.map((info) => (
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
                    {kontaktAdresa.map((info) => (
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
                    {leadership.map((info) => (
                        <React.Fragment key={info.role}>
                            <Grid item xs={12} md={3} lg={2}>
                                <Typography
                                    variant={"body1"}
                                    sx={{ fontWeight: { xs: "bold", md: "normal" } }}
                                >
                                    {info.role}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={3} lg={2}>
                                <Typography variant={"body2"}>{info.name}</Typography>
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
