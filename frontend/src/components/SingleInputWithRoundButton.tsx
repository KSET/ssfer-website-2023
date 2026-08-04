import {Box, Button, InputBase, Typography, useTheme} from "@mui/material";
import * as yup from "yup";
import {useForm, Controller, SubmitHandler} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {useCallback} from "react";

const scheme = yup.object({
    email: yup.string().email().required()
}).required();

interface IFormInputs {
    email: string;
}

export default function SingleInputWithRoundButton() {
    const theme = useTheme();

    const {control, handleSubmit, formState: {errors}} = useForm<IFormInputs>({
        resolver: yupResolver(scheme),
        defaultValues: {
            email: ""
        }
    });

    const onSubmit: SubmitHandler<IFormInputs> = useCallback((data) => {
        console.log(data);
    }, [])

    return (
        <>
            <Box border={"1px solid " + theme.palette.secondary.main}
                 component={"form"}
                 onSubmit={handleSubmit(onSubmit)}
                 borderRadius={"9999px"}
                 width={"100%"}
                 display={"flex"}>
                <Controller render={
                    ({field}) => <InputBase {...field}
                                            placeholder={"Unesi svoju e-adresu i saznaj među prvima!"}
                                            color={"secondary"}
                                            error={!!errors.email}
                                            fullWidth={true}
                                            sx={{paddingY: "0.75rem", pl: "0.75rem"}}/>
                }
                            control={control}
                            name={"email"} />

                <Button
                    variant={"contained"}
                    type={"submit"}
                    color={"primary"}
                    sx={{
                        my: "0.5rem",
                        mr: "0.5rem",
                        ml: "0.25rem",
                        px: "9px",
                        borderRadius: "9999px",
                        minWidth: "0"}}>
                    <ArrowForwardIcon />
                </Button>
            </Box>
            <Typography variant={"body2"}
                        color={"error"}>
                {errors.email?.message}
            </Typography>
        </>

    )
}