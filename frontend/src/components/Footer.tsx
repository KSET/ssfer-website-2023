import {Box, Divider, Grid, Stack, Typography, useTheme} from "@mui/material";
import {RoundedButton} from "@/components/RoundedButton";
import SingleInputWithRoundButton from "@/components/SingleInputWithRoundButton";
import Image from "next/image";
import Link from "next/link";


export default function Footer() {
    const theme = useTheme();

    return (
        <Stack direction={"column"}
               width={"100%"}>
            <Divider />
            <Grid container
                  justifyContent={"center"}
                  alignItems={"center"}>
                <Grid item xs={12} sm={12} md={4}>
                    <Stack direction={"column"}
                           alignItems={"center"}
                           justifyContent={"center"}
                           width={"100%"}
                           spacing={2}
                           paddingY={"1.5rem"}>
                        <Typography variant={"h5"}
                                    color={"primary"}
                                    sx={{fontWeight: "600"}}>
                            Upoznaj KSET
                        </Typography>
                        <RoundedButton variant={"contained"}
                                       color={"primary"}
                                       size={"medium"}>
                            Pridruži nam se
                        </RoundedButton>
                    </Stack>
                    <Divider sx={{display: {sx: "block", md: "none"}}} />
                </Grid>

                <Grid item xs={12} sm={12} md={4}>
                    <Stack direction={"column"}
                           alignItems={"center"}
                           justifyContent={"center"}
                           width={"100%"}
                           spacing={2}
                           paddingY={"1.5rem"}
                           paddingX={"1.5rem"}>
                        <Typography variant={"h5"}
                                    color={"primary"}
                                    sx={{fontWeight: "600"}}>
                            Što ima novo?
                        </Typography>
                        <SingleInputWithRoundButton />
                    </Stack>
                    <Divider sx={{display: {sx: "block", md: "none"}}} />
                </Grid>

                <Grid item xs={12} sm={12} md={4}>
                    <Stack direction={"column"}
                           alignItems={"center"}
                           justifyContent={"center"}
                           width={"100%"}
                           spacing={2}
                           paddingY={"1.5rem"}>
                        <Typography variant={"h5"}
                                    color={"primary"}
                                    sx={{fontWeight: "bold"}}>
                            Podržite naš rad
                        </Typography>
                        <RoundedButton variant={"contained"}
                                       color={"primary"}
                                       size={"medium"}>
                            Kontaktirajte nas
                        </RoundedButton>
                    </Stack>
                </Grid>
            </Grid>
            <Divider />
            <Grid container
                  justifyContent={"center"}
                  alignItems={"center"}>
                <Grid item xs={11} md={11} lg={9} xl={8}>
                    <Grid container
                          justifyContent={"center"}
                          alignItems={"center"}>
                        <Grid item xs={11} md={4} paddingX={"1rem"}>
                            <Stack direction={"column"}
                                   alignItems={"center"}
                                   justifyContent={"center"}
                                   paddingY={"1.5rem"}
                                   spacing={2}>
                                <Box position={"relative"} height={"80px"} width={"100%"}>
                                    <Image src={"/company-logos/kset-logo-light.svg"} alt={"KSET Logo"} fill={true}/>
                                </Box>
                                <Typography variant={"body1"}
                                            color={theme.palette.primary.light}
                                            textAlign={"center"}
                                            fontWeight={300}>
                                    Klub studenata elektrotehnike
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={11} md={4} paddingX={"1rem"}>
                            <Stack direction={"column"}
                                   alignItems={"center"}
                                   justifyContent={"center"}
                                   paddingY={"1.5rem"}
                                   position={"relative"}
                                   spacing={2}>
                                <Box position={"relative"} height={"75px"} width={"100%"}>
                                    <Image src={"/company-logos/fer-logo-light.svg"} alt={"FER Logo"} fill={true}/>
                                </Box>
                                <Typography variant={"body1"}
                                            color={theme.palette.primary.light}
                                            textAlign={"center"}
                                            fontWeight={300}>
                                    Fakultet elektrotehnike i računarstva
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={11} md={4} paddingX={"1rem"}>
                            <Stack direction={"column"}
                                   alignItems={"center"}
                                   justifyContent={"center"}
                                   paddingY={"1.5rem"}
                                   spacing={2}>
                                <Box position={"relative"} height={"91px"} width={"100%"}>
                                    <Image src={"/company-logos/A1-logo-light.svg"} alt={"A1 Logo"} fill={true}/>
                                </Box>
                                <Typography variant={"body1"}
                                            color={theme.palette.primary.light}
                                            textAlign={"center"}
                                            fontWeight={300}>
                                    A1 Hrvatska
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Divider />

            <Box display={"flex"} flexDirection={{xs: "column", md: "row"}} justifyContent={"space-between"} alignItems={"center"} paddingX={"1rem"}>
                <Typography variant={"body2"}
                            color={theme.palette.primary.light}
                            textAlign={"center"}
                            paddingY={"0.5rem"}
                            display={{xs: "none", md: "block"}}
                            fontWeight={300}>
                    SS FER 2023. | © Sva prava pridržana.
                </Typography>

                <Typography variant={"body2"}
                            color={theme.palette.primary.light}
                            textAlign={"center"}
                            paddingY={"0.5rem"}
                            display={{xs: "block", md: "none"}}
                            fontWeight={300}>
                    SS FER 2023
                </Typography>
                <Typography variant={"body2"}
                            color={theme.palette.primary.light}
                            textAlign={"center"}
                            paddingY={"0.5rem"}
                            display={{xs: "block", md: "none"}}
                            fontWeight={300}>
                    © Sva prava pridržana.
                </Typography>
                <Link href={"/politika-privatnosti"}>
                    <Typography variant={"body2"}
                                color={theme.palette.primary.light}
                                textAlign={"center"}
                                paddingY={"0.5rem"}
                                fontWeight={300}>
                        Politika privatnosti
                    </Typography>
                </Link>
            </Box>
        </Stack>
    )
}