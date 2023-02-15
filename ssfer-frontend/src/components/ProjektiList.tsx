import {Box, Grid, Stack, SxProps, Theme, Typography} from "@mui/material";
import Image from "next/image";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export default function ProjektiList({sx}: {sx?: SxProps<Theme>}) {

    return (
        <Stack direction={"column"}
               justifyContent={"center"}
               alignItems={"center"}
               spacing={12}
               sx={sx}>
            <Grid container
                  justifyContent={"center"}
                  alignItems={"start"}>
                <Grid item xs={12} md={6} lg={5} xl={4}>
                    <Box sx={{position: "relative",
                              height: {xs: "250px", md: "400px"},
                              width: "100%"}}>
                        <Image src={"/projekti/brucosijada.png"}
                               alt={"Brucosijada"}
                               fill={true}
                               style={{objectFit: "cover"}} />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={7} xl={8} height={{sx: "100%", md: "400px"}}>
                    <Stack direction={"column"}
                           height={"100%"}
                           spacing={2}
                           sx={{ml: {xs: "0rem", md: "2rem"},
                                mt: {xs: "1rem", md: "0rem"}}}>
                        <Typography variant={"h4"}
                                    color={"primary"}
                                    sx={{fontWeight: "bold"}}>
                            Brucosijada FER-a
                        </Typography>
                        <Typography variant={"body1"}
                                    color={"primary"}>
                            Jednogodišnji mini studentsko-glazbeni festival najvećih razmjena u Hrvatskoj
                            koji transformira FER iz edukativnog centra u hotspot party.
                        </Typography>
                        <Box display={"flex"}
                             alignItems={"end"}
                             height={{sx: "2rem", md: "100%"}}>
                            <Box display={"flex"}
                                 alignItems={"center"}
                                 gap={"0.5rem"}>
                                <Typography variant={"body1"}
                                            color={"primary"}
                                            sx={{fontWeight: "bold"}}>
                                    Saznaj više
                                </Typography>
                                <ArrowForwardIosIcon fontSize={"small"}
                                                     sx={{color: "primary.main"}} />
                            </Box>

                        </Box>
                    </Stack>
                </Grid>
            </Grid>

            <Grid container
                  justifyContent={"center"}
                  alignItems={"start"}>
                <Grid item xs={12} md={6} lg={5} xl={4}>
                    <Box sx={{position: "relative",
                        height: {xs: "250px", md: "400px"},
                        width: "100%"}}>
                        <Image src={"/projekti/brucosijada.png"}
                               alt={"Brucosijada"}
                               fill={true}
                               style={{objectFit: "cover"}} />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={7} xl={8} height={{sx: "100%", md: "400px"}}>
                    <Stack direction={"column"}
                           height={"100%"}
                           spacing={2}
                           sx={{ml: {xs: "0rem", md: "2rem"},
                               mt: {xs: "1rem", md: "0rem"}}}>
                        <Typography variant={"h4"}
                                    color={"primary"}
                                    sx={{fontWeight: "bold"}}>
                            Brucosijada FER-a
                        </Typography>
                        <Typography variant={"body1"}
                                    color={"primary"}>
                            Jednogodišnji mini studentsko-glazbeni festival najvećih razmjena u Hrvatskoj
                            koji transformira FER iz edukativnog centra u hotspot party.
                        </Typography>
                        <Box display={"flex"}
                             alignItems={"end"}
                             height={{sx: "2rem", md: "100%"}}>
                            <Box display={"flex"}
                                 alignItems={"center"}
                                 gap={"0.5rem"}>
                                <Typography variant={"body1"}
                                            color={"primary"}
                                            sx={{fontWeight: "bold"}}>
                                    Saznaj više
                                </Typography>
                                <ArrowForwardIosIcon fontSize={"small"}
                                                     sx={{color: "primary.main"}} />
                            </Box>

                        </Box>
                    </Stack>
                </Grid>
            </Grid>
        </Stack>

    )
}