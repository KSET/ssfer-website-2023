import {useRouter} from "next/router";
import {Box, Typography} from "@mui/material";
import Header from "@/components/Header";
import Image from "next/image";
import DrustveneMreze, {SocialNetwork} from "@/components/DrustveneMreze";
import Footer from "@/components/Footer";
import PartneriGrid from "@/components/partneri/PartneriGrid";
import {DEFAULT_ASPECT_RATIO, DEFAULT_IMAGE_HEIGHT_RATIO} from "@/constants/ImageConstants";


const DEFAULT_SOCIALS: SocialNetwork[] = [
  {
    platform: "instagram",
    link: "",
    title: "brucifer_fer"
  },
  {
    platform: "facebook",
    link: "",
    title: "BrucosijadaFER"
  },
  {
    platform: "other",
    link: "",
    title: "brucosijada.kset.org"
  }
]

const IMAGE_HEIGHT_MD = 45 * DEFAULT_IMAGE_HEIGHT_RATIO;
const IMAGE_HEIGHT_LG = 80 * DEFAULT_IMAGE_HEIGHT_RATIO;

// TODO: Staviti veliku sliku kao cover image (prati figmu)

export default function ProjectDetails() {
  const router = useRouter();
  const {id} = router.query;

  return (
    <Box minHeight={"100vh"}>
      <Header selectedLink={"Projekti"}/>

      <Box sx={{mx: {xs: "1rem", md: "8rem"}, mt: "2rem", mb: "8rem"}}>
        <Typography variant={"h4"} sx={{fontWeight: "bold", mt: "2rem"}}>
          Brucošijada FER-a
        </Typography>

        <Box position={"relative"} sx={{
          width: "100%",
          height: {
            xs: "calc((100vw - 2rem) / (" + DEFAULT_ASPECT_RATIO + "))",
            md: IMAGE_HEIGHT_MD,
            lg: IMAGE_HEIGHT_LG
          },
          mt: "2rem"
        }}>
          <Image src={"/projekti/brucosijada.png"} alt={"Brucosijada"} fill={true} style={{objectFit: "contain"}}/>
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

        <Typography variant={"h5"} sx={{mt: "3rem", fontWeight: "bold"}}>
          Suorganizatori
        </Typography>

        <PartneriGrid roundedFields={true} sx={{mt: "1rem"}}/>

        <DrustveneMreze networks={DEFAULT_SOCIALS} sx={{mt: "2rem"}}/>
      </Box>

      <Footer/>
    </Box>

  )
}