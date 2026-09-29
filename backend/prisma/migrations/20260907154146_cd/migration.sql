-- CreateTable
CREATE TABLE "basic_info" (
    "name" TEXT NOT NULL,
    "name_short" TEXT,
    "hq" TEXT,
    "oib" TEXT,
    "vat_number" TEXT,
    "iban" TEXT,
    "bank" TEXT,
    "swift" TEXT,

    CONSTRAINT "basic_info_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "contact_addresses" (
    "info" TEXT NOT NULL,
    "program" TEXT,
    "media" TEXT,
    "legal" TEXT,
    "membership" TEXT,

    CONSTRAINT "contact_addresses_pkey" PRIMARY KEY ("info")
);

-- CreateTable
CREATE TABLE "leadership" (
    "role" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,

    CONSTRAINT "leadership_pkey" PRIMARY KEY ("role")
);

-- CreateTable
CREATE TABLE "project" (
    "name" TEXT NOT NULL,
    "photo" TEXT,
    "visible_on_page" BOOLEAN NOT NULL DEFAULT true,
    "main_page_visible" BOOLEAN NOT NULL DEFAULT false,
    "description" TEXT,
    "coorganizers" TEXT,
    "facebook_link" TEXT,
    "instagram_link" TEXT,
    "website_link" TEXT,

    CONSTRAINT "project_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "partner" (
    "name" TEXT NOT NULL,
    "logo" TEXT,
    "visible_on_page" BOOLEAN NOT NULL DEFAULT true,
    "strategic_partner" BOOLEAN NOT NULL DEFAULT false,
    "website_link" TEXT,

    CONSTRAINT "partner_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "document" (
    "name" TEXT NOT NULL,
    "photo" TEXT,
    "visible_on_page" BOOLEAN NOT NULL DEFAULT true,
    "file" TEXT,

    CONSTRAINT "document_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "privacy_policy" (
    "policy" TEXT NOT NULL,

    CONSTRAINT "privacy_policy_pkey" PRIMARY KEY ("policy")
);

-- CreateTable
CREATE TABLE "user" (
    "kset_email" TEXT NOT NULL,
    "name_surname" TEXT,

    CONSTRAINT "user_pkey" PRIMARY KEY ("kset_email")
);
