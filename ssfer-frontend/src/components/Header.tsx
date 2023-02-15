import {Box, Collapse, Divider, Grid, Stack, Typography, useTheme} from "@mui/material";
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";


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


export default function Header({selectedLink}: {selectedLink?: string}) {
    const theme = useTheme();

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <Box>
            <Stack direction={"row"}
                   spacing={2}
                   alignItems={"center"}
                   justifyContent={"space-between"}
                   marginLeft={"1rem"}
                   marginRight={"1rem"}
                   paddingTop={"1rem"}
                   paddingBottom={"1rem"}>
                <CircleOutlinedIcon/>
                <Link href={"/"}>
                    <Image src={"/company-logos/ssfer-logo-light.png"} alt={"SSFER logo"} width={100} height={100} />
                </Link>
                <SearchOutlinedIcon/>
            </Stack>

            <Divider />

            <Grid container justifyContent={"center"} alignItems={"center"}>
                <Grid item xs={12} sm={10} md={8} lg={6} xl={4}>
                    <Box display={{xs: "none", sm: "flex"}}
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
                                            sx={{cursor: "pointer",
                                                 fontWeight: selectedLink === link.name ? "bold" : "normal"}}>
                                    {link.name}
                                </Typography>
                            </Link>
                        ))}
                    </Box>

                    <Box display={{xs: "block", sm: "none"}}>
                        <Typography variant={"h6"}
                                    color={theme.palette.primary.main}
                                    sx={{cursor: "pointer"}}
                                    textAlign={"center"}
                                    paddingTop={"1rem"}
                                    paddingBottom={"1rem"}
                                    width={"100%"}
                                    onClick={() => setOpenMenu(!openMenu)}>
                            Izbornik
                        </Typography>
                    </Box>
                    <Collapse in={openMenu}>
                        <Divider />
                        <Box display={{xs: "flex", sm: "none"}}
                             alignItems={"center"}
                             flexDirection={"column"}
                             justifyContent={"space-between"}
                             paddingTop={"1rem"}
                             paddingBottom={"1rem"}>
                            {HeaderLinks.map((link) => (
                                <Link href={link.href}
                                      key={link.name}
                                      style={{textDecoration: "none"}}>
                                    <Typography variant={"h6"}
                                                color={theme.palette.primary.main}
                                                sx={{cursor: "pointer",
                                                    fontWeight: selectedLink === link.name ? "bold" : "normal"}}
                                                paddingY={"0.5rem"}>
                                        {link.name}
                                    </Typography>
                                </Link>
                            ))}
                        </Box>
                    </Collapse>

                </Grid>
            </Grid>
            <Divider />
        </Box>


    )
}