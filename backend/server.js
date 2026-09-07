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
        const sectionCount = await prisma.sections.count();
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
        await prisma.sections.upsert({
            where: { name: "test_section" },
            update: {
                name: "test_section",
                description: "lorem ipsum dolor sit amet",
                logo: "https://example.com/logo.png",
                photo: "https://example.com/photo.png",
                visible_on_page: true,
                leader_name_surname: "John Doe",
                leader_email: "person@example.com",
                leader_description: "lorem ipsum dolor sit amet",
                leader_photo: "https://example.com/leader_photo.png",
                facebook_link: "https://facebook.com/test_section",
                instagram_link: "https://instagram.com/test_section",
                website_link: "https://test_section.com",
            },
            create: {
                name: "test_section",
                description: "lorem ipsum dolor sit amet",
                logo: "https://example.com/logo.png",
                photo: "https://example.com/photo.png",
                visible_on_page: true,
                leader_name_surname: "John Doe",
                leader_email: "person@example.com",
                leader_description: "lorem ipsum dolor sit amet",
                leader_photo: "https://example.com/leader_photo.png",
                facebook_link: "https://facebook.com/test_section",
                instagram_link: "https://instagram.com/test_section",
                website_link: "https://test_section.com",
            },
        });
        await prisma.basic_info.upsert({
            where: { name: "test_basic_info" },
            update: {
                name: "test_basic_info",
                name_short: "test",
                hq: "test_hq",
                oib: "12345678901",
                vat_number: "HR12345678901",
                iban: "HR1234567890123456789",
                swift: "TESTHR12",
            },
            create: {
                name: "test_basic_info",
                name_short: "test",
                hq: "test_hq",
                oib: "12345678901",
                vat_number: "HR12345678901",
                iban: "HR1234567890123456789",
                swift: "TESTHR12",
            },
        });
        await prisma.contact_addresses.upsert({
            where: { info: "info@example.org" },
            update: {
                info: "info@example.org",
                program: "program@example.org",
                media: "media@example.org",
                legal: "legal@example.org",
                membership: "membership@example.org",
            },
            create: {
                info: "info@example.org",
                program: "program@example.org",
                media: "media@example.org",
                legal: "legal@example.org",
                membership: "membership@example.org",
            },
        });
        await prisma.leadership.upsert({
            where: { role: "President" },
            update: {
                role: "President",
                name: "John Doe",
                email: "john.doe@example.org",
            },
            create: {
                role: "President",
                name: "John Doe",
                email: "john.doe@example.org",
            },
        });
        await prisma.project.upsert({
            where: { name: "test_project" },
            update: {
                name: "test_project",
                photo: "https://example.com/project_photo.png",
                visible_on_page: true,
                main_page_visible: true,
                description: "lorem ipsum dolor sit amet",
                coorganizers: "John Doe, Jane Smith",
                facebook_link: "https://facebook.com/test_project",
                instagram_link: "https://instagram.com/test_project",
                website_link: "https://test_project.com",
            },
            create: {
                name: "test_project",
                photo: "https://example.com/project_photo.png",
                visible_on_page: true,
                main_page_visible: true,
                description: "lorem ipsum dolor sit amet",
                coorganizers: "John Doe, Jane Smith",
                facebook_link: "https://facebook.com/test_project",
                instagram_link: "https://instagram.com/test_project",
                website_link: "https://test_project.com",
            },
        });
        await prisma.partner.upsert({
            where: { name: "test_partner" },
            update: {
                name: "test_partner",
                logo: "https://example.com/partner_logo.png",
                visible_on_page: true,
                strategic_partner: false,
                website_link: "https://test_partner.com",
            },
            create: {
                name: "test_partner",
                logo: "https://example.com/partner_logo.png",
                visible_on_page: true,
                strategic_partner: false,
                website_link: "https://test_partner.com",
            },
        });
        await prisma.document.upsert({
            where: { name: "test_document" },
            update: {
                name: "test_document",
                photo: "https://example.com/document_photo.png",
                visible_on_page: true,
                file: "https://example.com/document_file.pdf",
            },
            create: {
                name: "test_document",
                photo: "https://example.com/document_photo.png",
                visible_on_page: true,
                file: "https://example.com/document_file.pdf",
            },
        });
        await prisma.privacy_policy.upsert({
            where: { policy: "This is a test privacy policy." },
            update: {
                policy: "This is a test privacy policy.",
            },
            create: {
                policy: "This is a test privacy policy.",
            },
        });
        await prisma.user.upsert({
            where: { kset_email: "test_user@example.org" },
            update: {
                kset_email: "test_user@example.org",
                name_surname: "Test User",
            },
            create: {
                kset_email: "test_user@example.org",
                name_surname: "Test User",
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
        const sections = await prisma.sections.findMany();
        const basicInfo = await prisma.basic_info.findMany();
        const contactAddresses = await prisma.contact_addresses.findMany();
        const leadership = await prisma.leadership.findMany();
        const projects = await prisma.project.findMany();
        const partners = await prisma.partner.findMany();
        const documents = await prisma.document.findMany();
        const privacyPolicies = await prisma.privacy_policy.findMany();
        const users = await prisma.user.findMany();

        res.status(200).json({
            sections,
            basicInfo,
            contactAddresses,
            leadership,
            projects,
            partners,
            documents,
            privacyPolicies,
            users,
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
        const sections = await prisma.sections.findMany();
        res.status(200).json(sections);
    } catch (error) {
        console.error("Error occurred while fetching sections:", error);
        res.status(500).json({
            status: "Error",
            message: "Failed to fetch sections",
        });
    }
});

app.get("/section/:name", async (req, res) => {
    const { name } = req.params;
    const section = await prisma.sections.findUnique({
        where: { name: name },
    });

    if (!section) {
        return res.status(404).json({
            status: "Error",
            message: `Section with name ${name} not found`,
        });
    }

    res.status(200).json(section);
});

app.post("/section", async (req, res) => {
    try {
        const body = req.body;

        const created = await prisma.sections.create({
            data: {
                name: body.name,
                description: body.description ?? null,
                logo: body.logo ?? null,
                photo: body.photo ?? null,
                visible_on_page: body.visible_on_page ?? true,
                leader_name_surname: body.leader_name_surname ?? null,
                leader_email: body.leader_email ?? null,
                leader_description: body.leader_description ?? null,
                leader_photo: body.leader_photo ?? null,
                facebook_link: body.facebook_link ?? null,
                instagram_link: body.instagram_link ?? null,
                website_link: body.website_link ?? null,
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

        const updated = await prisma.sections.update({
            where: { name: sectionName },
            data: {
                name: body.name,
                description: body.description ?? null,
                logo: body.logo ?? null,
                photo: body.photo ?? null,
                visible_on_page: body.visible_on_page ?? true,
                leader_name_surname: body.leader_name_surname ?? null,
                leader_email: body.leader_email ?? null,
                leader_description: body.leader_description ?? null,
                leader_photo: body.leader_photo ?? null,
                facebook_link: body.facebook_link ?? null,
                instagram_link: body.instagram_link ?? null,
                website_link: body.website_link ?? null,
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
