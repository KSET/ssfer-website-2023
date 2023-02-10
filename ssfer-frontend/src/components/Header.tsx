import {Box, Divider, Grid, Stack, Typography, useTheme} from "@mui/material";
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Image from "next/image";
import Link from "next/link";


const HeaderLinks = [
    {
        name: "Sekcije",
        href: "/sekcije"
    },
    {
        name: "Projekti",
        href: "/projekti"
    },
    {
        name: "Partneri",
        href: "/partneri"
    },
    {
        name: "Dokumenti",
        href: "/dokumenti"
    },
    {
        name: "Kontakt",
        href: "/kontakt"
    }
]


export default function Header() {
    const theme = useTheme();

    return (
        <>
            <Stack direction={"row"}
                   spacing={2}
                   alignItems={"center"}
                   justifyContent={"space-between"}
                   marginLeft={"1rem"}
                   marginRight={"1rem"}
                   paddingTop={"1rem"}
                   paddingBottom={"1rem"}>
                <CircleOutlinedIcon/>
                <Image src={"/ssfer-logo-light.png"} alt={"SSFER logo"} width={100} height={100} />
                <SearchOutlinedIcon/>
            </Stack>

            <Divider />

            <Grid container justifyContent={"center"} alignItems={"center"}>
                <Grid item xs={12} sm={10} md={8} lg={6} xl={4}>
                    <Box display={"flex"}
                         alignItems={"center"}
                         justifyContent={"space-between"}
                         paddingTop={"1rem"}
                         paddingBottom={"1rem"}>
                        {HeaderLinks.map((link) => (
                            <Link href={link.href}
                                  key={link.name}
                                  style={{textDecoration: "none"}}>
                                <Typography variant={"h6"}
                                            color={theme.palette.primary.main}
                                            sx={{cursor: "pointer"}}>
                                    {link.name}
                                </Typography>
                            </Link>
                        ))}
                    </Box>
                </Grid>
            </Grid>

            <Divider />
        </>


    )
}