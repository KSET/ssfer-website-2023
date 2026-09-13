import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import FormikLabelAndInput from "@/components/admin/FormikLabelAndInput";
import FormikImageUpload from "@/components/admin/FormikImageUpload";
import FormikLabelAndCheckbox from "@/components/admin/DodavanjeKorisnika/FormikLabelAndCheckbox";
import FormikEditorContainer from "@/components/admin/FormikEditorContainer";
import FormikTextInput from "@/components/admin/FormikTextInput";
import DeleteIcon from "@mui/icons-material/Delete";

const UredivanjeSekcije = () => {
    const router = useRouter();
    const { id } = router.query;
    const [currentSection, setCurrentSection] = useState<any>(null);

    const onSubmitOsnovne = async (values: any) => {
        const payload = {
            name: values.imeSekcije,
            photo: values.fotografija ?? null,
            logo: values.logotip ?? null,
            visible_on_page: values.vidljivo,
            description: values.opisSekcije ?? null,
            leader_photo: values.voditeljSekcijeFoto ?? null,
            leader_name_surname:
                (values.voditeljSekcijeIme + " " + values.voditeljSekcijePrezime).trim() || null,
            leader_email: values.voditeljSekcijeEmail ?? null,
            leader_description: values.voditeljSekcijeOpis ?? null,
            facebook_link: values.facebook ?? null,
            instagram_link: values.instagram ?? null,
            website_link: values.web ?? null,
        };

        const sectionId = String(id);
        const res = await fetch(`http://localhost:4000/section/${sectionId}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });
    };

    useEffect(() => {
        if (!id) return;

        fetch(`http://localhost:4000/section/${id}`)
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch section");
                return res.json();
            })
            .then(setCurrentSection)
            .catch(console.error);
    }, [id]);

    const onDelete = async () => {
        const sectionId = String(id);
        const res = await fetch(`http://localhost:4000/section/${sectionId}`, {
            method: "DELETE",
        });
        if (res.ok) {
            router.push("/admin/sekcije");
        }
    };

    if (!currentSection) return null;

    const leaderName = currentSection.leader_name_surname ?? "";

    return (
        <AdminLayout>
            <Typography m={"2rem"} variant={"h4"}>
                Uređivanje sekcije
            </Typography>
            <Formik
                initialValues={{
                    imeSekcije: currentSection.name || "",
                    fotografija: currentSection.photo || undefined,
                    logotip: currentSection.logo || undefined,
                    vidljivo: currentSection.visible_on_page || false,
                    opisSekcije: currentSection.description || "",
                    voditeljSekcijeFoto: currentSection.leader_photo || undefined,
                    voditeljSekcijeIme: leaderName.split(" ")[0] || "",
                    voditeljSekcijePrezime: leaderName.split(" ")[1] || "",
                    voditeljSekcijeOpis: currentSection.leader_description || "",
                    facebook: currentSection.facebook_link || "",
                    instagram: currentSection.instagram_link || "",
                    web: currentSection.website_link || "",
                }}
                onSubmit={onSubmitOsnovne}
            >
                {({ submitForm }) => (
                    <Form>
                        <Stack
                            direction={"column"}
                            justifyContent={"space-between"}
                            alignItems={"start"}
                        >
                            <Box m={"2rem"}>
                                <FormikLabelAndInput
                                    label={"Ime sekcije"}
                                    name={"imeSekcije"}
                                    type={"text"}
                                />
                                <FormikImageUpload label={"Fotografija"} name={"fotografija"} />
                                <FormikImageUpload label={"Logotip"} name={"logotip"} />
                                <FormikLabelAndCheckbox label={"Vidljivo"} name={"vidljivo"} />
                                <Typography variant={"subtitle1"} color={"primary"} mt={"1rem"}>
                                    Opis sekcije
                                </Typography>
                            </Box>
                            <FormikEditorContainer name={"opisSekcije"} />
                            <Divider sx={{ width: "100%", mt: "1rem" }} />
                            <Box p={"2rem"} width={"100%"}>
                                <Typography
                                    variant={"subtitle1"}
                                    color={"primary"}
                                    mt={"1rem"}
                                    fontWeight={"bold"}
                                >
                                    Voditelj sekcije
                                </Typography>
                                <FormikImageUpload
                                    label={"Fotografija"}
                                    name={"voditeljSekcijeFoto"}
                                />
                                <Grid container gap={"1rem"} width={"100%"}>
                                    <Grid item xs={12} md={2}>
                                        <Typography
                                            variant={"subtitle1"}
                                            color={"primary"}
                                            mt={"1rem"}
                                        >
                                            Ime
                                        </Typography>
                                        <Field
                                            component={FormikTextInput}
                                            id={"voditeljSekcijeIme"}
                                            name={"voditeljSekcijeIme"}
                                            type={"text"}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={2}>
                                        <Typography
                                            variant={"subtitle1"}
                                            color={"primary"}
                                            mt={"1rem"}
                                        >
                                            Prezime
                                        </Typography>
                                        <Field
                                            component={FormikTextInput}
                                            id={"voditeljSekcijePrezime"}
                                            name={"voditeljSekcijePrezime"}
                                            type={"text"}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={5}>
                                        <Typography
                                            variant={"subtitle1"}
                                            color={"primary"}
                                            mt={"1rem"}
                                        >
                                            Opis
                                        </Typography>
                                        <Field
                                            component={FormikTextInput}
                                            id={"voditeljSekcijeOpis"}
                                            name={"voditeljSekcijeOpis"}
                                            type={"text"}
                                        />
                                    </Grid>
                                </Grid>

                                <Typography
                                    variant={"subtitle1"}
                                    color={"primary"}
                                    mt={"1rem"}
                                    fontWeight={"bold"}
                                >
                                    Društvene mreže
                                </Typography>
                                <Stack direction={"column"}>
                                    <FormikLabelAndInput
                                        label={"Facebook"}
                                        name={"facebook"}
                                        type={"text"}
                                    />
                                    <FormikLabelAndInput
                                        label={"Instagram"}
                                        name={"instagram"}
                                        type={"text"}
                                    />
                                    <FormikLabelAndInput label={"Web"} name={"web"} type={"text"} />
                                </Stack>
                            </Box>
                            <Divider sx={{ width: "100%", mt: "1rem", mb: "2rem" }} />
                            <Stack
                                direction={{ xs: "column", md: "row" }}
                                justifyContent={"flex-start"}
                                alignItems={"center"}
                                ml={"2rem"}
                                mb={"2rem"}
                                gap={{ xs: "1rem", md: "10rem" }}
                            >
                                <Button
                                    variant={"contained"}
                                    color={"primary"}
                                    onClick={submitForm}
                                >
                                    Spremi
                                </Button>
                                <Button
                                    type="button"
                                    variant={"outlined"}
                                    color={"primary"}
                                    onClick={onDelete}
                                >
                                    <DeleteIcon />
                                </Button>
                            </Stack>
                        </Stack>
                    </Form>
                )}
            </Formik>
        </AdminLayout>
    );
};

export default UredivanjeSekcije;
