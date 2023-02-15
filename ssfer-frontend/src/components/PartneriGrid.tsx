import {Box, Grid, SxProps, Theme, useTheme} from "@mui/material";
import Image from "next/image";


export default function PartneriGrid({sx}: {sx?: SxProps<Theme>}) {
    const theme = useTheme();

    return (
        <Box sx={sx}>
            <Grid container spacing={{xs: 3, md: 6}}>
                <Grid item xs={6} md={4} lg={3} sx={{height: {xs: "calc(100vw/2 - 2rem)", md: "calc(100vw/3 - 2rem)", lg: "calc(100vw/4 - 2rem)"}}}>
                    <Box sx={{p: {xs: "1rem", md: "3rem", lg: "4rem", xl: "5rem"}, backgroundColor: theme.palette.secondary.main, height: "100%"}}>
                        <Box sx={{position: "relative", height: "100%"}}>
                            <Image src={"/company-logos/kset-logo-light.svg"} alt={"Kset logo"} fill={true} />
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} md={4} lg={3} sx={{height: {xs: "calc(100vw/2 - 2rem)", md: "calc(100vw/3 - 2rem)", lg: "calc(100vw/4 - 2rem)"}}}>
                    <Box sx={{p: {xs: "1rem", md: "3rem", lg: "4rem", xl: "5rem"}, backgroundColor: theme.palette.secondary.main, height: "100%"}}>
                        <Box sx={{position: "relative", height: "100%"}}>
                            <Image src={"/company-logos/fer-logo-light.svg"} alt={"Kset logo"} fill={true} />
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} md={4} lg={3} sx={{height: {xs: "calc(100vw/2 - 2rem)", md: "calc(100vw/3 - 2rem)", lg: "calc(100vw/4 - 2rem)"}}}>
                    <Box sx={{p: {xs: "1rem", md: "3rem", lg: "4rem", xl: "5rem"}, backgroundColor: theme.palette.secondary.main, height: "100%"}}>
                        <Box sx={{position: "relative", height: "100%"}}>
                            <Image src={"/company-logos/A1-logo-light.svg"} alt={"Kset logo"} fill={true} />
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} md={4} lg={3} sx={{height: {xs: "calc(100vw/2 - 2rem)", md: "calc(100vw/3 - 2rem)", lg: "calc(100vw/4 - 2rem)"}}}>
                    <Box sx={{p: {xs: "1rem", md: "3rem", lg: "4rem", xl: "5rem"}, backgroundColor: theme.palette.secondary.main, height: "100%"}}>
                        <Box sx={{position: "relative", height: "100%"}}>
                            <Image src={"/company-logos/kset-logo-light.svg"} alt={"Kset logo"} fill={true} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}