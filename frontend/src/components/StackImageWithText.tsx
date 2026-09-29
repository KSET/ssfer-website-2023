import {Box, Stack, SxProps, Theme, Typography} from "@mui/material";
import Image from "next/image";


export default function StackImageWithText({imageUrl, imageAlt, text, sx}: {
  imageUrl: string,
  imageAlt: string,
  text: string,
  sx?: SxProps<Theme>
}) {

  return (
    <Stack direction={"column"} spacing={2} sx={sx}>
      <Box sx={{
        position: "relative",
        height: "250px",
        m: "1rem !important"
      }}>
        <Image src={imageUrl}
               alt={imageAlt}
               style={{objectFit: "contain"}}
               fill={true}/>
      </Box>
      <Typography variant={"h5"} color={"primary"} align={"center"}>
        {text}
      </Typography>
    </Stack>
  )
}