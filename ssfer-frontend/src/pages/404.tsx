import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {Box, Typography} from "@mui/material";
import {Stack} from "@mui/system";


export default function Error404Page() {
    return (
        <Box display={"flex"}
             justifyContent={"space-between"}
             flexDirection={"column"}>
            <Header />
            <Stack
                 justifyContent={"center"}
                 alignItems={"center"}
                 alignContent={"center"}
                 direction={"column"}
                 my={"10rem"}>
                <Typography variant={"h1"}
                            color={"primary"}
                            sx={{fontWeight: "700", fontSize: {xs: "96px",  lg: "296px"}}}>
                    ...OPA
                </Typography>
                <Typography variant={"h2"}
                            color={"primary"}
                            textAlign={"center"}
                            sx={{fontWeight: "400", fontSize: {xs: "16px",  lg: "24px"}}}>
                    Izgleda da tražena stranica ne postoji!
                </Typography>
            </Stack>
            <Footer />
        </Box>
    )
}