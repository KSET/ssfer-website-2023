import { Box } from "@mui/material";
import { GetServerSideProps } from "next";
import { useState } from "react";
import SekcijaCard from "@/components/sekcije/SekcijaCard";
import EditableGrid from "@/components/EditableGrid/EditableGrid";
import TitleWithPlus from "@/components/admin/TitleWithPlus";
import AdminLayout from "@/components/admin/AdminLayout";

type Section = {
    name: string;
    photo: string | null;
    logo: string | null;
};

export const getServerSideProps: GetServerSideProps<{ sections: Section[] }> = async () => {
    const response = await fetch("http://localhost:4000/sections");
    const sections = await response.json();
    return { props: { sections } };
};

export default function Sekcije({ sections: initialSections }: { sections: Section[] }) {
    const [sections, setSections] = useState(initialSections);

    const moveComponent = (from: number, to: number) => {
        const newSections = [...sections];
        newSections.splice(to, 0, newSections.splice(from, 1)[0]);
        setSections(newSections);
    };

    const onEdit = (index: number) => {
        location.href = "uredivanje-sekcije/" + encodeURIComponent(sections[index].name);
    };

    return (
        <>
            <AdminLayout>
                <Box m={"2rem"}>
                    <TitleWithPlus title={"Sekcije"} onAdd={() => {}} />

                    <EditableGrid
                        components={sections.map((section) => (
                            <SekcijaCard key={section.name} section={section} />
                        ))}
                        onEdit={onEdit}
                        onMove={moveComponent}
                        gridBreakpoints={{ xl: 3, lg: 4, md: 6, xs: 11 }}
                    />
                </Box>
            </AdminLayout>
        </>
    );
}
