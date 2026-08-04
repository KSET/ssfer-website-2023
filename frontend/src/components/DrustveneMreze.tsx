import {Box, SxProps, Theme, Typography} from "@mui/material";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';

export type Platform = "facebook" | "instagram" | "other";

export type SocialNetwork = {
    platform: Platform,
    link: string,
    title: string,
}

const socialMediaIcon = (platform: Platform) => {
    switch (platform) {
        case "facebook":
            return <FacebookRoundedIcon />
        case "instagram":
            return <InstagramIcon />
        case "other":
            return <LanguageIcon />
    }
}

export default function DrustveneMreze({networks, sx}: {networks: SocialNetwork[], sx?: SxProps<Theme>}) {

    return (
        <Box sx={sx}>
            <Typography variant={"h5"} sx={{fontWeight: "bold"}}>
                Društvene mreže
            </Typography>

            <Box>
                {networks.map(network => (
                    <Box key={network.title} display={"inline-block"} mr={"2rem"} mt={"1rem"}>
                        <Box display={"flex"} gap={"0.25rem"}>
                            {socialMediaIcon(network.platform)}
                            <Typography variant={"body1"}>
                                {network.title}
                            </Typography>
                        </Box>

                    </Box>
                ))}
            </Box>
        </Box>
    )
}