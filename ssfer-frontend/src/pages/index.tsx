import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {Box, Typography} from "@mui/material";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import SekcijeGrid from "@/components/sekcije/SekcijeGrid";
import ProjektiList from "@/components/ProjektiList";
import {RoundedButton} from "@/components/RoundedButton";
import {DEFAULT_ASPECT_RATIO, DEFAULT_IMAGE_HEIGHT_RATIO} from "@/constants/ImageConstants";


const DEFAULT_IMAGE_HEIGHT_LG = 60 * DEFAULT_IMAGE_HEIGHT_RATIO;
const DEFAULT_IMAGE_HEIGHT_MD = 45 * DEFAULT_IMAGE_HEIGHT_RATIO;

export default function Home() {
    return (
        <Box minHeight={"100vh"}>
            <Header/>

            <SectionHeader title={"O nama"}
                           sx={{mt: "3rem"}}/>
            <Typography variant={"body1"}
                        sx={{mx: "2rem", mt: "2rem"}}>
                Svoje slobodno vrijeme provodimo družeći se s vršnjacima, međusobno učeći i zabavljajući se na raznim
                projektima po kojima smo poznati. Više o njima možeš vidjeti ispod klikom na fotografiju projekta ili
                njegovo ime.
            </Typography>
            <Box sx={{position: "relative",
                height: {xs: "calc((100vw - 2rem) / ("+ DEFAULT_ASPECT_RATIO + "))",  md: DEFAULT_IMAGE_HEIGHT_MD + "px", lg: DEFAULT_IMAGE_HEIGHT_LG + "px"},
                      mt: "2rem"}}>
                <Image src={"/index-cover-image.png"}
                       alt={"Cover image"}
                       fill={true}
                       style={{objectFit: "contain"}} />
            </Box>

            <SectionHeader title={"Sekcije"}
                           sx={{mt: "3rem"}}/>
            <Typography variant={"body1"}
                        sx={{mx: "2rem", mt: "2rem"}}>
                Zajedničkim interesima okupili smo se u devet sekcija. Svaka sekcija je razvila svoje
                tradicije, projekte i kulturu. Otkrij njihove priče klikom na ilustraciju sekcije ili njezino ime.
            </Typography>
            <SekcijeGrid sx={{mt: "2rem", mx: "2rem"}} />

            <SectionHeader title={"Projekti"}
                           sx={{mt: "3rem"}}/>
            <Typography variant={"body1"}
                        sx={{mx: "2rem",
                             mt: "2rem"}}>
                Svoje slobodno vrijeme provodimo družeći se s vršnjacima, međusobno učeći i zabavljajući se na
                raznim projektima po kojima smo poznati. Više o njima možeš vidjeti ispod klikom na fotografiju
                projekta ili njegovo ime.
            </Typography>
            <ProjektiList sx={{mt: "2rem",
                               mx: "2rem",
                               mb: "6rem"}} />
            <Box display={"flex"}
                 justifyContent={"center"}
                 my={"10rem"}>
                <RoundedButton size={"large"}
                               variant={"contained"}
                               color={"primary"}
                               sx={{px: "6rem",
                                    fontSize: "1.25rem"}}>
                    Otkrij sve projekte
                </RoundedButton>
            </Box>

            <Footer />
        </Box>
    )
}
