import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { SekcijaEnum } from "@/components/sekcije/SekcijaEnum";
import { useState } from "react";

type Section = {
    naziv: string;
    fotografija?: string | null;
    logotip?: string | null;
};

export default function SekcijaCard({
    sekcija,
    section,
}: {
    sekcija?: SekcijaEnum;
    section?: Section;
}) {
    const naziv = section?.naziv ?? "Comp";
    const image =
        section?.fotografija || section?.logotip || (sekcija ? `/sekcije/${sekcija}.svg` : null);
    const [imageError, setImageError] = useState(false);

    return (
        <Stack
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            spacing={2}
            sx={{ m: "0.5rem" }}
        >
            <Box
                sx={{
                    position: "relative",
                    height: { xs: "150px", sm: "200px", md: "275px", lg: "350px" },
                    width: "100%",
                }}
            >
                <Link href={`/sekcija/${encodeURIComponent(naziv)}`}>
                    {image && !imageError ? (
                        section?.fotografija || section?.logotip ? (
                            <Box
                                component="img"
                                src={image}
                                alt={naziv}
                                onError={() => setImageError(true)}
                                sx={{ width: "100%", height: "100%", objectFit: "contain" }}
                            />
                        ) : (
                            <Image
                                src={image}
                                alt={naziv}
                                fill={true}
                                onError={() => setImageError(true)}
                            />
                        )
                    ) : (
                        <Stack height="100%" alignItems="center" justifyContent="center">
                            <Typography variant="h5" textAlign="center">
                                {naziv}
                            </Typography>
                        </Stack>
                    )}
                </Link>
            </Box>
            <Typography
                variant={"h6"}
                color={"primary"}
                textAlign={"center"}
                sx={{
                    fontWeight: "bold",
                    textDecoration: "underline",
                }}
            >
                {naziv}
            </Typography>
        </Stack>
    );
}
