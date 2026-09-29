import { Box } from "@mui/material";
import { GetServerSideProps } from "next";
import { useState } from "react";
import SekcijaCard from "@/components/sekcije/SekcijaCard";
import EditableGrid from "@/components/EditableGrid/EditableGrid";
import TitleWithPlus from "@/components/admin/TitleWithPlus";
import AdminLayout from "@/components/admin/AdminLayout";

type Section = {
    naziv: string;
    fotografija: string | null;
    logotip: string | null;
};

export const getServerSideProps: GetServerSideProps<{ sekcije: Section[] }> = async () => {
    const response = await fetch("http://localhost:4000/sections");
    const sekcije = await response.json();
    return { props: { sekcije } };
};

export default function Sekcije({ sekcije: pocetneSekcije }: { sekcije: Section[] }) {
    const [sekcije, setSekcije] = useState(pocetneSekcije);

    const moveComponent = (from: number, to: number) => {
        const noveSekcije = [...sekcije];
        noveSekcije.splice(to, 0, noveSekcije.splice(from, 1)[0]);
        setSekcije(noveSekcije);
    };

    const onEdit = (index: number) => {
        location.href = "uredivanje-sekcije/" + encodeURIComponent(sekcije[index].naziv);
    };

    return (
        <>
            <AdminLayout>
                <Box m={"2rem"}>
                    <TitleWithPlus title={"Sekcije"} onAdd={() => {}} />

                    <EditableGrid
                        components={sekcije.map((sekcija) => (
                            <SekcijaCard key={sekcija.naziv} section={sekcija} />
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
