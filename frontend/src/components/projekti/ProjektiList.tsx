import {Stack, SxProps, Theme} from "@mui/material";
import ProjektItem from "@/components/projekti/ProjekItem";

const repeat = (n: number, f: (i: number) => any) => Array.from({length: n}, (_, i) => f(i));


export default function ProjektiList({sx}: { sx?: SxProps<Theme> }) {

  return (
    <Stack direction={"column"}
           justifyContent={"center"}
           alignItems={"center"}
           spacing={12}
           sx={sx}>
      {repeat(6, (i) => (
        <ProjektItem key={i}/>
      ))}

    </Stack>

  )
}