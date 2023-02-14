import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {Box, Typography} from "@mui/material";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import SekcijeGrid from "@/components/SekcijeGrid";
import ProjektiList from "@/components/ProjektiList";


export default function Home() {
    return (
        <>
            <Header/>

            <SectionHeader title={"O nama"} sx={{mt: "3rem"}}/>
            <Typography variant={"body1"} sx={{mx: "2rem", mt: "2rem"}}>
                Svoje slobodno vrijeme provodimo družeći se s vršnjacima, međusobno učeći i zabavljajući se na raznim
                projektima po kojima smo poznati. Više o njima možeš vidjeti ispod klikom na fotografiju projekta ili
                njegovo ime.
            </Typography>
            <Box sx={{mx: {xs: "2rem", md: "6rem", lg: "12rem"},
                      position: "relative",
                      height: {xs: "300px", md: "620px"},
                      mt: "2rem"}}>
                <Image src={"/index-cover-image.png"}
                       alt={"Cover image"}
                       fill={true}
                       style={{objectFit: "cover"}} />
            </Box>

            <SectionHeader title={"Sekcije"} sx={{mt: "3rem"}}/>
            <Typography variant={"body1"} sx={{mx: "2rem", mt: "2rem"}}>
                Zajedničkim interesima okupili smo se u devet sekcija. Svaka sekcija je razvila svoje
                tradicije, projekte i kulturu. Otkrij njihove priče klikom na ilustraciju sekcije ili njezino ime.
            </Typography>
            <SekcijeGrid sx={{mt: "2rem", mx: "2rem"}} />

            <SectionHeader title={"Projekti"} sx={{mt: "3rem"}}/>
            <Typography variant={"body1"} sx={{mx: "2rem", mt: "2rem"}}>
                Svoje slobodno vrijeme provodimo družeći se s vršnjacima, međusobno učeći i zabavljajući se na
                raznim projektima po kojima smo poznati. Više o njima možeš vidjeti ispod klikom na fotografiju
                projekta ili njegovo ime.
            </Typography>
            <ProjektiList sx={{mt: "2rem", mx: "2rem", mb: "6rem"}} />

            <Footer />
        </>
    )
}
