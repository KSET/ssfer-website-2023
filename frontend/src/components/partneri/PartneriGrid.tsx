import {Box, Grid, SxProps, Theme, useTheme} from "@mui/material";
import PartnerItem from "@/components/partneri/PartneriItem";

const repeat = (n: number, f: (i: number) => any) => Array.from({length: n}, (_, i) => f(i));

export default function PartneriGrid({roundedFields, sx}: { roundedFields: boolean, sx?: SxProps<Theme> }) {
  const theme = useTheme();

  return (
    <Box sx={sx}>
      <Grid container
            justifyContent={"start"}
            alignItems={"center"}
            rowSpacing={"2rem"}
            columnSpacing={"1rem"}>
        {repeat(6, (i) => (
          <PartnerItem roundedFields={roundedFields} key={i}/>
        ))}

      </Grid>
    </Box>
  )
}