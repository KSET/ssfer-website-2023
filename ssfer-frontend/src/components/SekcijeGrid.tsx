import {Box, Grid, Stack, SxProps, Theme, Typography} from "@mui/material";
import Image from "next/image";
import Link from "next/link";


export default function SekcijeGrid({sx}: {sx?: SxProps<Theme>}) {

    return (
        <Box sx={sx}>
            <Grid container
                  justifyContent={"start"}
                  alignItems={"center"}
                  rowGap={"3rem"}>
                <Grid item xs={6} md={4}>
                    <Stack direction={"column"}
                           justifyContent={"center"}
                           alignItems={"center"}
                           spacing={2}
                           sx={{m: "0.5rem"}}>
                        <Box sx={{position: "relative",
                                  height: {xs: "calc(100vw/2 - 2rem)", sm: "calc(100vw/3 - 2rem)", md: "calc(100vw/5 - 2rem)"},
                                  width: "100%"}}>
                            <Link href={"/sekcije/comp"}>
                                <Image src={"/sekcije/Comp.svg"} alt={"Comp sekcija"} fill={true} />
                            </Link>
                        </Box>
                        <Typography variant={"h6"}
                                    color={"primary"}
                                    textAlign={"center"}
                                    sx={{fontWeight: "bold",
                                        textDecoration: "underline"}}>
                            Comp seksija
                        </Typography>
                    </Stack>
                </Grid>

                <Grid item xs={6} md={4}>
                    <Stack direction={"column"}
                           justifyContent={"center"}
                           alignItems={"center"}
                           spacing={2}
                           sx={{m: "0.5rem"}}>
                        <Box sx={{position: "relative",
                            height: {xs: "calc(100vw/2 - 2rem)", sm: "calc(100vw/3 - 2rem)", md: "calc(100vw/5 - 2rem)"},
                            width: "100%"}}>
                            <Link href={"/sekcije/comp"}>
                                <Image src={"/sekcije/Comp.svg"} alt={"Comp sekcija"} fill={true} />
                            </Link>
                        </Box>
                        <Typography variant={"h6"}
                                    color={"primary"}
                                    textAlign={"center"}
                                    sx={{fontWeight: "bold",
                                        textDecoration: "underline"}}>
                            Comp seksija
                        </Typography>
                    </Stack>
                </Grid>

                <Grid item xs={6} md={4}>
                    <Stack direction={"column"}
                           justifyContent={"center"}
                           alignItems={"center"}
                           spacing={2}
                           sx={{m: "0.5rem"}}>
                        <Box sx={{position: "relative",
                            height: {xs: "calc(100vw/2 - 2rem)", sm: "calc(100vw/3 - 2rem)", md: "calc(100vw/5 - 2rem)"},
                            width: "100%"}}>
                            <Link href={"/sekcije/comp"}>
                                <Image src={"/sekcije/Comp.svg"} alt={"Comp sekcija"} fill={true} />
                            </Link>
                        </Box>
                        <Typography variant={"h6"}
                                    color={"primary"}
                                    textAlign={"center"}
                                    sx={{fontWeight: "bold",
                                        textDecoration: "underline"}}>
                            Comp seksija
                        </Typography>
                    </Stack>
                </Grid>

            </Grid>
        </Box>
    )
}