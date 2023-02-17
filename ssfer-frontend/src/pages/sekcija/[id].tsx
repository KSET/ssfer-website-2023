import {useRouter} from "next/router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {Box, Typography} from "@mui/material";
import Image from "next/image";
import {Stack} from "@mui/system";
import DrustveneMreze, {SocialNetwork} from "@/components/DrustveneMreze";
import {DEFAULT_ASPECT_RATIO, DEFAULT_IMAGE_HEIGHT_RATIO} from "@/constants/ImageConstants";


const DEFAULT_SOCIALS: SocialNetwork[] = [
    {
        platform: "facebook",
        link: "",
        title: "bike.kset"
    },
    {
        platform: "instagram",
        link: "",
        title: "bicikl.kset"
    },
    {
        platform: "facebook",
        link: "",
        title: "bicikl.kset"
    },
    {
        platform: "instagram",
        link: "",
        title: "bicikl.kset"
    }
]

const IMAGE_HEIGHT_MD = 45 * DEFAULT_IMAGE_HEIGHT_RATIO;
const IMAGE_HEIGHT_LG = 60 * DEFAULT_IMAGE_HEIGHT_RATIO;

export default function Sekcija() {
    const router = useRouter();
    const {id} = router.query;

    return (
        <Box minHeight={"100vh"}>
            <Header selectedLink={"Sekcije"} />

            <Box sx={{mx: {xs: "1rem", md: "8rem"}, mt: "2rem", mb: "8rem"}}>
                <Typography variant={"h4"} sx={{fontWeight: "bold", mt: "2rem"}}>
                    Biciklistička sekcija
                </Typography>

                <Box position={"relative"} sx={{width: "100%", height: {xs: "calc((100vw - 2rem) / (" + DEFAULT_ASPECT_RATIO + "))",  md: IMAGE_HEIGHT_MD, lg: IMAGE_HEIGHT_LG}, mt: "2rem"}}>
                    <Image src={"/sekcije/bike/bike-index.png"} alt={"Bike"} fill={true} style={{objectFit: "contain"}} />
                </Box>

                <Typography variant={"body1"} sx={{mt: "2rem"}}>
                    Biciklističku sekciju, nekoć poznatu i pod imenom bike@KSET, čine članovi koji uživaju u vožnjama
                    planinama, vrhovima šuma, prijevojima, velikoj dozi adrenalina, kao i u odličnom baratanju alatom
                    kojim popravljaju svoje limene ljubimce.
                    <br/>
                    <br/>
                    Organiziraju popravljaonice bicikala ispred KSET-a, natjecanja na trenažerima, edukacije i
                    putovanja biciklima diljem zemlje.
                </Typography>

                <Typography variant={"h5"} sx={{mt: "2rem", fontWeight: "bold"}}>
                    Voditelj sekcije
                </Typography>

                <Box display={"flex"} gap={"2rem"} alignItems={"center"} sx={{mt: "2rem"}} height={{xs: "100px", md: "300px"}}>
                    <Box position={"relative"} height={{xs: "100px", md: "300px"}} flexGrow={"0"} flexShrink={"0"} flexBasis={{xs: "100px", md: "300px"}}>
                        <Image src={"/sekcije/bike/voditelj.png"} alt={"Ivan"} fill={true} style={{borderRadius: "9999px"}} />
                    </Box>

                    <Stack direction={"column"} justifyContent={"space-evenly"} height={"100%"} width={"100%"}>
                        <Typography variant={"h5"} sx={{fontWeight: "bold"}}>
                            Ivan Ljubičić
                        </Typography>
                        <Typography variant={"body1"} sx={{display: {xs: "none", md: "block"}}}>
                            Ivan je trenutni voditelj sekcija i najpoznatiji je po svojim slanim šalama i iznimno
                            nespretnim vožnjama u kojoj svaka ima svoju anegdotu!
                        </Typography>
                        <Typography variant={"body2"}>
                            ivan.ljubicic@kset.org
                        </Typography>
                    </Stack>
                </Box>
                <Typography variant={"body1"} sx={{mt: "1rem", display: {xs: "block", md: "none"}}}>
                    Ivan je trenutni voditelj sekcija i najpoznatiji je po svojim slanim šalama i iznimno
                    nespretnim vožnjama u kojoj svaka ima svoju anegdotu!
                </Typography>

                <DrustveneMreze networks={DEFAULT_SOCIALS} sx={{mt: "2rem"}}/>
            </Box>

            <Footer />
        </Box>

    )
}