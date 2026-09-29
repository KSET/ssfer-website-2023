import {SxProps, Theme, Typography, useTheme} from "@mui/material";


export default function SectionHeader({title, sx}: {title: string, sx?: SxProps<Theme>}) {
    const theme = useTheme();

    return (
        <Typography variant={"h4"}
                    color={theme.palette.primary.contrastText}
                    sx={{fontWeight: "900",
                         pl: {xs: "0", md: "1rem"},
                         pr: {xs: "0", md: "6rem"},
                         display: {xs: "block", md: "inline-block"},
                         textAlign: "center",
                         backgroundColor: theme.palette.primary.main, ...sx}}>
            {title}
        </Typography>
    )
}