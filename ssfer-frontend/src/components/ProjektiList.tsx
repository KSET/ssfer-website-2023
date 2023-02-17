import {Box, Stack, SxProps, Theme, Typography} from "@mui/material";
import Image from "next/image";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {DEFAULT_ASPECT_RATIO, DEFAULT_ASPECT_RATIO_NUMBER, DEFAULT_IMAGE_WIDTH_RATIO} from "@/constants/ImageConstants";

const repeat = (n: number, f: (i: number) => any) => Array.from({length: n}, (_, i) => f(i));
const IMAGE_WIDTH_MD = 30 * DEFAULT_IMAGE_WIDTH_RATIO;
const IMAGE_WIDTH_LG = 40 * DEFAULT_IMAGE_WIDTH_RATIO;
const IMAGE_HEIGHT_MD = IMAGE_WIDTH_MD / DEFAULT_ASPECT_RATIO_NUMBER;
const IMAGE_HEIGHT_LG = IMAGE_WIDTH_LG / DEFAULT_ASPECT_RATIO_NUMBER;

export default function ProjektiList({sx}: {sx?: SxProps<Theme>}) {

    return (
        <Stack direction={"column"}
               justifyContent={"center"}
               alignItems={"center"}
               spacing={12}
               sx={sx}>
            {repeat(6, (i) => (
                <Box key={i}
                     display={"flex"}
                     flexDirection={{xs: "column", md: "row"}}
                     justifyContent={"start"} width={"100%"}
                     height={{md: IMAGE_HEIGHT_MD, lg: IMAGE_HEIGHT_LG}}>
                    <Box flexGrow={"0"}
                         flexShrink={"0"}
                         flexBasis={{md: IMAGE_WIDTH_MD , lg: IMAGE_WIDTH_LG}}>
                        <Box sx={{position: "relative",
                                  height: {xs: "calc(100vw / (" + DEFAULT_ASPECT_RATIO + "))", md: "100%"},
                                  width: "100%"}}>
                            <Image src={"/projekti/brucosijada.png"}
                                   alt={"Brucosijada"}
                                   fill={true}
                                   style={{objectFit: "contain"}} />
                        </Box>
                    </Box>
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
                </Box>
            ))}

        </Stack>

    )
}