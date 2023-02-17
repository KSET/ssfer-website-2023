import Header from "@/components/Header";
import {Box, Typography} from "@mui/material";
import ProjektiList from "@/components/ProjektiList";
import Footer from "@/components/Footer";


export default function Projekti() {

    return (
        <>
            <Header selectedLink={"Projekti"} />

            <Box sx={{mx: "2rem", mt: "2rem", mb: "8rem"}}>

                <Typography variant={"h4"} sx={{fontWeight: "bold", mt: "2rem"}}>
                    Projekti
                </Typography>

                <Typography variant={"body1"} sx={{mt: "1rem"}}>
                    Svoje slobodno vrijeme provodimo družeći se s vršnjacima, međusobno učeći i zabavljajući se na
                    raznim projektima po kojima smo poznati. Više o njima možeš vidjeti ispod klikom na fotografiju
                    projekta ili njegovo ime.
                </Typography>

                <ProjektiList sx={{mt: "3rem"}} />
            </Box>

            <Footer />
        </>
    )
}