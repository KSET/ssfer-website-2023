import { prisma } from "./prismaClient.js";
import cors from "cors";
import express from "express";
import morgan from "morgan";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(morgan("dev"));
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get("/health", async (req, res) => {
    console.log("Health status:");

    try {
        const sectionCount = await prisma.sekcija.count();
        res.status(200).json({ status: "OK", sectionsCount: sectionCount });
    } catch (error) {
        console.error("Error occurred while checking health:", error);
        res.status(500).json({
            status: "Error",
            message: "Failed to check health",
        });
    }
});

app.get("/populate", async (req, res) => {
    try {
        await prisma.sekcija.upsert({
            where: { naziv: "test_section" },
            update: {
                naziv: "test_section",
                opis: "lorem ipsum dolor sit amet",
                logotip: "https://example.com/logo.png",
                fotografija: "https://example.com/photo.png",
                vidljivo_na_stranici: true,
                ime_prezime_voditelja: "John Doe",
                email_voditelja: "person@example.com",
                opis_voditelja: "lorem ipsum dolor sit amet",
                fotografija_voditelja: "https://example.com/leader_photo.png",
                facebook_poveznica: "https://facebook.com/test_section",
                instagram_poveznica: "https://instagram.com/test_section",
                web_poveznica: "https://test_section.com",
            },
            create: {
                naziv: "test_section",
                opis: "lorem ipsum dolor sit amet",
                logotip: "https://example.com/logo.png",
                fotografija: "https://example.com/photo.png",
                vidljivo_na_stranici: true,
                ime_prezime_voditelja: "John Doe",
                email_voditelja: "person@example.com",
                opis_voditelja: "lorem ipsum dolor sit amet",
                fotografija_voditelja: "https://example.com/leader_photo.png",
                facebook_poveznica: "https://facebook.com/test_section",
                instagram_poveznica: "https://instagram.com/test_section",
                web_poveznica: "https://test_section.com",
            },
        });
        await prisma.osnovneInformacije.upsert({
            where: { naziv: "test_basic_info" },
            update: {
                naziv: "test_basic_info",
                skraceni_naziv: "test",
                sjediste: "test_hq",
                oib: "12345678901",
                pdv_broj: "HR12345678901",
                iban: "HR1234567890123456789",
                banka: "Testna banka",
                swift: "TESTHR12",
            },
            create: {
                naziv: "test_basic_info",
                skraceni_naziv: "test",
                sjediste: "test_hq",
                oib: "12345678901",
                pdv_broj: "HR12345678901",
                iban: "HR1234567890123456789",
                banka: "Testna banka",
                swift: "TESTHR12",
            },
        });
        await prisma.kontaktAdrese.upsert({
            where: { informacije: "info@example.org" },
            update: {
                informacije: "info@example.org",
                program: "program@example.org",
                mediji: "media@example.org",
                pravno: "legal@example.org",
                clanstvo: "membership@example.org",
            },
            create: {
                informacije: "info@example.org",
                program: "program@example.org",
                mediji: "media@example.org",
                pravno: "legal@example.org",
                clanstvo: "membership@example.org",
            },
        });
        await prisma.vodstvo.upsert({
            where: { uloga: "President" },
            update: {
                uloga: "President",
                ime: "John Doe",
                email: "john.doe@example.org",
            },
            create: {
                uloga: "President",
                ime: "John Doe",
                email: "john.doe@example.org",
            },
        });
        await prisma.projekt.upsert({
            where: { naziv: "test_project" },
            update: {
                naziv: "test_project",
                fotografija: "https://example.com/project_photo.png",
                vidljivo_na_stranici: true,
                vidljivo_na_naslovnici: true,
                opis: "lorem ipsum dolor sit amet",
                suorganizatori: "John Doe, Jane Smith",
                facebook_poveznica: "https://facebook.com/test_project",
                instagram_poveznica: "https://instagram.com/test_project",
                web_poveznica: "https://test_project.com",
            },
            create: {
                naziv: "test_project",
                fotografija: "https://example.com/project_photo.png",
                vidljivo_na_stranici: true,
                vidljivo_na_naslovnici: true,
                opis: "lorem ipsum dolor sit amet",
                suorganizatori: "John Doe, Jane Smith",
                facebook_poveznica: "https://facebook.com/test_project",
                instagram_poveznica: "https://instagram.com/test_project",
                web_poveznica: "https://test_project.com",
            },
        });
        await prisma.partner.upsert({
            where: { naziv: "test_partner" },
            update: {
                naziv: "test_partner",
                logotip: "https://example.com/partner_logo.png",
                vidljivo_na_stranici: true,
                strateski_partner: false,
                web_poveznica: "https://test_partner.com",
            },
            create: {
                naziv: "test_partner",
                logotip: "https://example.com/partner_logo.png",
                vidljivo_na_stranici: true,
                strateski_partner: false,
                web_poveznica: "https://test_partner.com",
            },
        });
        await prisma.dokument.upsert({
            where: { naziv: "test_document" },
            update: {
                naziv: "test_document",
                fotografija: "https://example.com/document_photo.png",
                vidljivo_na_stranici: true,
                datoteka: "https://example.com/document_file.pdf",
            },
            create: {
                naziv: "test_document",
                fotografija: "https://example.com/document_photo.png",
                vidljivo_na_stranici: true,
                datoteka: "https://example.com/document_file.pdf",
            },
        });
        await prisma.politikaPrivatnosti.upsert({
            where: { tekst: "This is a test privacy policy." },
            update: {
                tekst: "This is a test privacy policy.",
            },
            create: {
                tekst: "This is a test privacy policy.",
            },
        });
        await prisma.korisnik.upsert({
            where: { kset_email: "test_user@example.org" },
            update: {
                kset_email: "test_user@example.org",
                ime_prezime: "Test User",
            },
            create: {
                kset_email: "test_user@example.org",
                ime_prezime: "Test User",
            },
        });
        res.status(200).json({ status: "OK", message: "Database populated" });
    } catch (error) {
        console.error("Error occurred while populating test data:", error);
        res.status(500).json({
            status: "Error",
            message: "Failed to populate database",
        });
    }
});

app.get("/getPopulated", async (req, res) => {
    try {
        const sekcije = await prisma.sekcija.findMany();
        const osnovneInformacije = await prisma.osnovneInformacije.findMany();
        const kontaktAdrese = await prisma.kontaktAdrese.findMany();
        const vodstvo = await prisma.vodstvo.findMany();
        const projekti = await prisma.projekt.findMany();
        const partneri = await prisma.partner.findMany();
        const dokumenti = await prisma.dokument.findMany();
        const politikePrivatnosti = await prisma.politikaPrivatnosti.findMany();
        const korisnici = await prisma.korisnik.findMany();

        res.status(200).json({
            sekcije,
            osnovneInformacije,
            kontaktAdrese,
            vodstvo,
            projekti,
            partneri,
            dokumenti,
            politikePrivatnosti,
            korisnici,
        });
    } catch (error) {
        console.error("Error occurred while fetching populated data:", error);
        res.status(500).json({
            status: "Error",
            message: "Failed to fetch populated data",
        });
    }
});

// Section endpoints

app.get("/sections", async (req, res) => {
    try {
        const sekcije = await prisma.Sekcija.findMany();
        res.status(200).json(sekcije);
    } catch (error) {
        console.error("Error occurred while fetching sections:", error);
        res.status(500).json({
            status: "Error",
            message: "Failed to fetch sections",
        });
    }
});

app.get("/section/:name", async (req, res) => {
    const naziv = req.params.name;
    const section = await prisma.sekcija.findUnique({
        where: { naziv },
    });

    if (!section) {
        return res.status(404).json({
            status: "Error",
            message: `Sekcija s nazivom ${naziv} nije pronađena`,
        });
    }

    res.status(200).json(section);
});

app.post("/section", async (req, res) => {
    try {
        const body = req.body;

        const created = await prisma.sekcija.create({
            data: {
                naziv: body.naziv,
                opis: body.opis ?? null,
                logotip: body.logotip ?? null,
                fotografija: body.fotografija ?? null,
                vidljivo_na_stranici: body.vidljivo_na_stranici ?? true,
                ime_prezime_voditelja: body.ime_prezime_voditelja ?? null,
                email_voditelja: body.email_voditelja ?? null,
                opis_voditelja: body.opis_voditelja ?? null,
                fotografija_voditelja: body.fotografija_voditelja ?? null,
                facebook_poveznica: body.facebook_poveznica ?? null,
                instagram_poveznica: body.instagram_poveznica ?? null,
                web_poveznica: body.web_poveznica ?? null,
            },
        });

        res.status(201).json(created);
    } catch (error) {
        res.status(500).json({
            status: "Error",
            message: "Failed to create section",
        });
    }
});

app.post("/section/:name", async (req, res) => {
    try {
        const sectionName = req.params.name;
        const body = req.body;

        const updated = await prisma.sekcija.update({
            where: { naziv: sectionName },
            data: {
                naziv: body.naziv,
                opis: body.opis ?? null,
                logotip: body.logotip ?? null,
                fotografija: body.fotografija ?? null,
                vidljivo_na_stranici: body.vidljivo_na_stranici ?? true,
                ime_prezime_voditelja: body.ime_prezime_voditelja ?? null,
                email_voditelja: body.email_voditelja ?? null,
                opis_voditelja: body.opis_voditelja ?? null,
                fotografija_voditelja: body.fotografija_voditelja ?? null,
                facebook_poveznica: body.facebook_poveznica ?? null,
                instagram_poveznica: body.instagram_poveznica ?? null,
                web_poveznica: body.web_poveznica ?? null,
            },
        });

        res.json(updated);
    } catch (error) {
        res.status(500).json({
            status: "Error",
            message: "Failed to update section",
        });
    }
});

app.get("/contacts", async (req, res) => {
    try {
        const osnovneInformacije = await prisma.osnovneInformacije.findFirst();
        const kontaktAdrese = await prisma.kontaktAdrese.findFirst();
        const vodstvo = await prisma.vodstvo.findMany();

        res.status(200).json({
            osnovneInformacije,
            kontaktAdrese,
            vodstvo,
        });
    } catch (error) {
        console.error("Error occurred while fetching contact pages:", error);
        res.status(500).json({
            status: "Error",
            message: "Failed to fetch contact pages",
        });
    }
});

app.delete("/section/:name", async (req, res) => {
    const naziv = req.params.name;
    try {
        const deletedSection = await prisma.sekcija.delete({
            where: { naziv },
        });
        res.status(200).json({
            status: "OK",
            message: `Sekcija s nazivom ${naziv} uspješno je obrisana`,
            deletedSection,
        });
    } catch (error) {
        console.error(`Error occurred while deleting section with name ${naziv}:`, error);
        res.status(500).json({
            status: "Error",
            message: `Brisanje sekcije s nazivom ${naziv} nije uspjelo`,
        });
    }
});
