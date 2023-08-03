import {Box, Grid, useTheme} from "@mui/material";
import Image from "next/image";


export default function PartnerItem({roundedFields}: { roundedFields: boolean }) {
  const theme = useTheme();

  return (
    <Grid item xs={6} sm={4} md={4} xl={3}
          display={"flex"}
          justifyContent={"center"}>
      <Box sx={{
        p: {xs: "0.5rem", sm: "1rem", md: "3rem", lg: "4rem"},
        backgroundColor: theme.palette.secondary.main,
        width: {xs: "150px", sm: "200px", md: "250px", lg: "300px"},
        height: {xs: "150px", sm: "200px", md: "250px", lg: "300px"},
        borderRadius: roundedFields ? "9999px" : "0px"
      }}>
        <Box sx={{
          position: "relative",
          height: "100%"
        }}>
          <Image src={"/company-logos/kset-logo-light.svg"}
                 alt={"Kset logo"}
                 fill={true}/>
        </Box>
      </Box>
    </Grid>
  )
}