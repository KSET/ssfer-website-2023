import { useRouter } from "next/router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { Stack } from "@mui/system";
import DrustveneMreze, { SocialNetwork } from "@/components/DrustveneMreze";
import { DEFAULT_ASPECT_RATIO, DEFAULT_IMAGE_HEIGHT_RATIO } from "@/constants/ImageConstants";
import { useEffect, useState } from "react";

const DEFAULT_SOCIALS: SocialNetwork[] = [
    {
        platform: "facebook",
        link: "",
        title: "bike.kset",
    },
    {
        platform: "instagram",
        link: "",
        title: "bicikl.kset",
    },
    {
        platform: "facebook",
        link: "",
        title: "bicikl.kset",
    },
    {
        platform: "instagram",
        link: "",
        title: "bicikl.kset",
    },
];

const IMAGE_HEIGHT_MD = 45 * DEFAULT_IMAGE_HEIGHT_RATIO;
const IMAGE_HEIGHT_LG = 80 * DEFAULT_IMAGE_HEIGHT_RATIO;

type Section = {
    naziv: string;
    opis?: string;
    logotip?: string;
    fotografija?: string;
    vidljivo_na_stranici?: boolean;
    ime_prezime_voditelja?: string;
    email_voditelja?: string;
    opis_voditelja?: string;
    fotografija_voditelja?: string;
    facebook_poveznica?: string;
    instagram_poveznica?: string;
    web_poveznica?: string;
};

export default function Sekcija() {
    const router = useRouter();
    const { id } = router.query;
    const [section, setSection] = useState<Section | null>(null);

    useEffect(() => {
        if (typeof id !== "string") return;

        const load = async () => {
            const res = await fetch(`http://localhost:4000/sections/${id}`);
            if (!res.ok) throw new Error(`Request failed: ${res.status}`);
            const data = await res.json();
            setSection(data as Section);
        };

        load().catch(console.error);
    }, [id]);

    return (
        <Box minHeight={"100vh"}>
            <Header selectedLink={"Sekcije"} />

            <Box sx={{ mx: { xs: "1rem", md: "8rem" }, mt: "2rem", mb: "8rem" }}>
                <Typography variant={"h4"} sx={{ fontWeight: "bold", mt: "2rem" }}>
                    {section?.naziv}
                </Typography>

                <Box
                    position={"relative"}
                    sx={{
                        width: "100%",
                        height: {
                            xs: "calc((100vw - 2rem) / (" + DEFAULT_ASPECT_RATIO + "))",
                            md: IMAGE_HEIGHT_MD,
                            lg: IMAGE_HEIGHT_LG,
                        },
                        mt: "2rem",
                    }}
                >
                    <Image
                        src={"/sekcije/bike/bike-index.png"}
                        alt={"Bike"}
                        fill={true}
                        style={{ objectFit: "contain" }}
                    />
                </Box>

                <Typography variant={"body1"} sx={{ mt: "2rem" }}>
                    {section?.opis}
                </Typography>

                <Typography variant={"h5"} sx={{ mt: "2rem", fontWeight: "bold" }}>
                    {section?.ime_prezime_voditelja}
                </Typography>

                <Box
                    display={"flex"}
                    gap={"2rem"}
                    alignItems={"center"}
                    sx={{ mt: "2rem" }}
                    height={{ xs: "100px", md: "300px" }}
                >
                    <Box
                        position={"relative"}
                        height={{ xs: "100px", md: "300px" }}
                        flexGrow={"0"}
                        flexShrink={"0"}
                        flexBasis={{ xs: "100px", md: "300px" }}
                    >
                        <Image
                            src={"/sekcije/bike/voditelj.png"}
                            alt={"Ivan"}
                            fill={true}
                            style={{ borderRadius: "9999px" }}
                        />
                    </Box>

                    <Stack
                        direction={"column"}
                        justifyContent={"space-evenly"}
                        height={"100%"}
                        width={"100%"}
                    >
                        <Typography variant={"h5"} sx={{ fontWeight: "bold" }}>
                            {section?.ime_prezime_voditelja}
                        </Typography>
                        <Typography variant={"body1"} sx={{ display: { xs: "none", md: "block" } }}>
                            {section?.opis_voditelja}
                        </Typography>
                        <Typography variant={"body2"}>{section?.email_voditelja}</Typography>
                    </Stack>
                </Box>
                <Typography
                    variant={"body1"}
                    sx={{ mt: "1rem", display: { xs: "block", md: "none" } }}
                >
                    {section?.opis_voditelja}
                </Typography>

                <DrustveneMreze networks={DEFAULT_SOCIALS} sx={{ mt: "2rem" }} />
            </Box>

            <Footer />
        </Box>
    );
}
