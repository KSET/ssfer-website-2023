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

app.get("/sections/:name", async (req, res) => {
    const { name } = req.params;
    const section = await prisma.sections.findUnique({
        where: { name },
    });

    if (!section) {
        return res.status(404).json({
            status: "Error",
            message: `Section with name ${name} not found`,
        });
    }

    res.status(200).json(section);
});

app.post("/sections", async (req, res) => {
    // if (req.user.role !== "admin") {
    //     return res.status(403).json({
    //         status: "Error",
    //         message:
    //             "Forbidden: You do not have permission to create a section",
    //     });
    // }

    try {
        const newSection = await prisma.sections.create({
            data: req.body,
        });
        res.status(201).json(newSection);
    } catch (error) {
        console.error("Error occurred while creating section:", error);
        res.status(500).json({
            status: "Error",
            message: "Failed to create section",
        });
    }
});
