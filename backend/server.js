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
