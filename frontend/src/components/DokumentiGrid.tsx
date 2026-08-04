import {Box, Grid, Stack, SxProps, Theme, Typography} from "@mui/material";
import Image from "next/image";
const repeat = (n: number) => Array.from({length: n}, (_, i) => i);

export default function DokumentiGrid({sx}: {sx?: SxProps<Theme>}) {

    return (
        <Box sx={sx}>
            <Grid container spacing={{xs: 3, md: 6, lg: 6}}>
                {repeat(6).map((i) => (
                    <Grid item key={i} xs={6} md={4} lg={3}>
                        <Stack spacing={2}
                               justifyContent={"center"}
                               alignItems={"center"}>
                            <Box sx={{position: "relative",
                                width: "100%",
                                height: {xs: "200px", sm: "350px", lg: "400px", xl: "450px"}}}>
                                <Image src={"/portfolio.png"}
                                       alt={"Portfolio"}
                                       fill={true}
                                       style={{objectFit: "contain"}} />
                            </Box>
                            <Typography variant={"h6"}
                                        color={"primary"}
                                        textAlign={"center"}
                                        sx={{fontWeight: "bold",
                                            textDecoration: "underline"}}>
                                Portfolio
                            </Typography>
                        </Stack>
                    </Grid>
                ))}



            </Grid>
        </Box>
    )
}