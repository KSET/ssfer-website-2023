import React from "react";
import {Box, Button, Stack, Typography} from "@mui/material";
import Image from "next/image";


interface Props {
  label: string;
  name: string;
  accept?: string;
  type?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const fileInputStyle = {
  display: "none"
}
export default function FormikImageUpload({label, name, accept, type, onChange}: Props) {
  const [file, setFile] = React.useState<File | undefined>(undefined);

  return (
    <Stack direction={{xs: "column", md: "row"}} mt={"2rem"} gap={"1rem"}>
      <Typography variant={"subtitle1"} color={"primary"} width={"200px"}>{label}</Typography>
      <input id={name} type={type ?? "file"} accept={accept ?? "images/*"} style={fileInputStyle}
             onChange={(event) => {
               if (!event.currentTarget.files || !onChange) return;
               setFile(event.currentTarget.files[0]);
               onChange(event);
             }}/>
      <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} gap={"1rem"}>
        {file && (
          <Box width={"200px"} height={"200px"} position={"relative"}>
            <Image src={URL.createObjectURL(file)} alt={file.name} fill={true} style={{objectFit: "contain"}}/>
          </Box>
        )}
        <Box>
          <Button variant={"contained"} size={"large"} component={"label"} htmlFor={name}
                  sx={{textTransform: "none", borderRadius: "9999px"}}>
            Prenesi
          </Button>
        </Box>
      </Stack>
    </Stack>

  )
}