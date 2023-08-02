import {Box, Grid, SxProps, Theme} from "@mui/material";
import SekcijaCard from "@/components/sekcije/SekcijaCard";
import {SekcijaEnum} from "@/components/sekcije/SekcijaEnum";

const repeat = (n: number, f: (i: number) => any) => Array.from({length: n}, (_, i) => f(i));


export default function SekcijeGrid({sx}: { sx?: SxProps<Theme> }) {

  return (
    <Box sx={sx}>
      <Grid container
            justifyContent={"start"}
            alignItems={"center"}
            columnSpacing={"1rem"}
            rowGap={"2rem"}>
        {repeat(6, (i) => (
          <Grid item xs={6} md={4} key={i}>
            <SekcijaCard sekcija={SekcijaEnum.COMP}/>
          </Grid>
        ))}

      </Grid>
    </Box>
  )
}