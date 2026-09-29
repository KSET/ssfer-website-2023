import { Input, Stack } from "@mui/material";
import { FormikValues, useFormikContext } from "formik";

interface Props {
    fieldNames: string[];
    name: string;
    direction?: "row" | "column";
}

const FormikNEditableInputs = ({ fieldNames, name, direction = "row" }: Props) => {
    const { values, setFieldValue } = useFormikContext<FormikValues>();

    return (
        <Stack
            direction={direction}
            spacing={2}
            justifyContent={"flex-start"}
            alignItems={"center"}
            my={"0.5rem"}
            mx={"1rem"}
        >
            {fieldNames.map((fieldName) => (
                <Input
                    key={fieldName}
                    value={values[name][fieldName]}
                    onChange={(e) =>
                        setFieldValue(name, { ...values[name], [fieldName]: e.target.value })
                    }
                />
            ))}
        </Stack>
    );
};

export default FormikNEditableInputs;
