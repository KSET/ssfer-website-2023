import {Box, Grid, Stack, SxProps, Theme, Typography} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const repeat = (n: number, f: (i: number) => any) => Array.from({length: n}, (_, i) => f(i));

export default function SekcijeGrid({sx}: {sx?: SxProps<Theme>}) {

    return (
        <Box sx={sx}>
            <Grid container
                  justifyContent={"start"}
                  alignItems={"center"}
                  columnSpacing={"1rem"}
                  rowGap={"2rem"}>
                {repeat(6, (i) => (
                    <Grid item xs={6} md={4} key={i}>
                        <Stack direction={"column"}
                               justifyContent={"center"}
                               alignItems={"center"}
                               spacing={2}
                               sx={{m: "0.5rem"}}>
                            <Box sx={{position: "relative",
                                      height: {xs: "150px", sm: "200px", md: "275px", lg: "350px"},
                                      width: {xs: "150px", sm: "200px", md: "275px", lg: "350px"}}}>
                                <Link href={"/sekcija/comp"}>
                                    <Image src={"/sekcije/Comp.svg"}
                                           alt={"Comp sekcija"}
                                           fill={true} />
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
                ))}

            </Grid>
        </Box>
    )
}