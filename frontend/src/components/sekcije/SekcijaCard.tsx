import {Box, Stack, Typography} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import {SekcijaEnum} from "@/components/sekcije/SekcijaEnum";


export default function SekcijaCard({sekcija}: { sekcija: SekcijaEnum }) {
  return (
    <Stack direction={"column"}
           justifyContent={"center"}
           alignItems={"center"}
           spacing={2}
           sx={{m: "0.5rem"}}>
      <Box sx={{
        position: "relative",
        height: {xs: "150px", sm: "200px", md: "275px", lg: "350px"},
        width: "100%"
      }}>
        <Link href={"/sekcija/comp"}>
          <Image src={`/sekcije/${sekcija}.svg`}
                 alt={"Comp sekcija"}
                 fill={true}/>
        </Link>
      </Box>
      <Typography variant={"h6"}
                  color={"primary"}
                  textAlign={"center"}
                  sx={{
                    fontWeight: "bold",
                    textDecoration: "underline"
                  }}>
        Comp seksija
      </Typography>
    </Stack>
  )
}