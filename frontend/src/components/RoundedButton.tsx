import {Button, styled} from "@mui/material";


export const RoundedButton = styled(Button)(() => ({
    borderRadius: "9999px",
    textTransform: "none",
    paddingLeft: "1.25rem",
    paddingRight: "1.25rem",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    fontWeight: "700",
}));