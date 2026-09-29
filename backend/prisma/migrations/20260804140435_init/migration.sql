-- CreateTable
CREATE TABLE "sections" (
    "name" TEXT NOT NULL,
    "description" TEXT,
    "logo" TEXT,
    "photo" TEXT,
    "visible_on_page" BOOLEAN NOT NULL DEFAULT true,
    "leader_name_surname" TEXT,
    "leader_email" TEXT,
    "leader_description" TEXT,
    "leader_photo" TEXT,
    "facebook_link" TEXT,
    "instagram_link" TEXT,
    "website_link" TEXT,

    CONSTRAINT "sections_pkey" PRIMARY KEY ("name")
);
