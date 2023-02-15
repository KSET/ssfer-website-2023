import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {Box, Typography} from "@mui/material";
import DokumentiGrid from "@/components/DokumentiGrid";


export default function Dokumenti() {

    return (
        <>
            <Header selectedLink={"Dokumenti"} />

            <Box sx={{mx: "2rem", mt: "2rem", mb: "8rem"}}>

                <Typography variant={"h4"} sx={{fontWeight: "bold", mt: "2rem"}}>
                    Dokumenti
                </Typography>

                <Typography variant={"body1"} sx={{mt: "1rem"}}>
                    Odgovornost prema zadacima shvaćamo ozbiljno. Važno nam je redovno i potpuno izvještavanje naših
                    donatora i partnera. Osim toga, želimo i nasljednicima osigurati kontinuitet informacija koje će im
                    sigurno biti od važnosti prilikom idućih planiranja. Svi dokumenti koji nisu prisutni na ovoj
                    stranici, moguće je da su dostupni na upit.
                </Typography>

                <DokumentiGrid sx={{mt: "2rem"}} />
            </Box>

            <Footer />
        </>
    )
}