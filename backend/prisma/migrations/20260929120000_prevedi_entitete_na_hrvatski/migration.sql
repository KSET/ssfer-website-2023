ALTER TABLE "sections" RENAME TO "Sekcija";
ALTER TABLE "Sekcija" RENAME CONSTRAINT "sections_pkey" TO "Sekcija_pkey";
ALTER TABLE "Sekcija" RENAME COLUMN "name" TO "naziv";
ALTER TABLE "Sekcija" RENAME COLUMN "description" TO "opis";
ALTER TABLE "Sekcija" RENAME COLUMN "logo" TO "logotip";
ALTER TABLE "Sekcija" RENAME COLUMN "photo" TO "fotografija";
ALTER TABLE "Sekcija" RENAME COLUMN "visible_on_page" TO "vidljivo_na_stranici";
ALTER TABLE "Sekcija" RENAME COLUMN "leader_name_surname" TO "ime_prezime_voditelja";
ALTER TABLE "Sekcija" RENAME COLUMN "leader_email" TO "email_voditelja";
ALTER TABLE "Sekcija" RENAME COLUMN "leader_description" TO "opis_voditelja";
ALTER TABLE "Sekcija" RENAME COLUMN "leader_photo" TO "fotografija_voditelja";
ALTER TABLE "Sekcija" RENAME COLUMN "facebook_link" TO "facebook_poveznica";
ALTER TABLE "Sekcija" RENAME COLUMN "instagram_link" TO "instagram_poveznica";
ALTER TABLE "Sekcija" RENAME COLUMN "website_link" TO "web_poveznica";

ALTER TABLE "basic_info" RENAME TO "OsnovneInformacije";
ALTER TABLE "OsnovneInformacije" RENAME CONSTRAINT "basic_info_pkey" TO "OsnovneInformacije_pkey";
ALTER TABLE "OsnovneInformacije" RENAME COLUMN "name" TO "naziv";
ALTER TABLE "OsnovneInformacije" RENAME COLUMN "name_short" TO "skraceni_naziv";
ALTER TABLE "OsnovneInformacije" RENAME COLUMN "hq" TO "sjediste";
ALTER TABLE "OsnovneInformacije" RENAME COLUMN "vat_number" TO "pdv_broj";
ALTER TABLE "OsnovneInformacije" RENAME COLUMN "bank" TO "banka";

ALTER TABLE "contact_addresses" RENAME TO "KontaktAdrese";
ALTER TABLE "KontaktAdrese" RENAME CONSTRAINT "contact_addresses_pkey" TO "KontaktAdrese_pkey";
ALTER TABLE "KontaktAdrese" RENAME COLUMN "info" TO "informacije";
ALTER TABLE "KontaktAdrese" RENAME COLUMN "media" TO "mediji";
ALTER TABLE "KontaktAdrese" RENAME COLUMN "legal" TO "pravno";
ALTER TABLE "KontaktAdrese" RENAME COLUMN "membership" TO "clanstvo";

ALTER TABLE "leadership" RENAME TO "Vodstvo";
ALTER TABLE "Vodstvo" RENAME CONSTRAINT "leadership_pkey" TO "Vodstvo_pkey";
ALTER TABLE "Vodstvo" RENAME COLUMN "role" TO "uloga";
ALTER TABLE "Vodstvo" RENAME COLUMN "name" TO "ime";

ALTER TABLE "project" RENAME TO "Projekt";
ALTER TABLE "Projekt" RENAME CONSTRAINT "project_pkey" TO "Projekt_pkey";
ALTER TABLE "Projekt" RENAME COLUMN "name" TO "naziv";
ALTER TABLE "Projekt" RENAME COLUMN "photo" TO "fotografija";
ALTER TABLE "Projekt" RENAME COLUMN "visible_on_page" TO "vidljivo_na_stranici";
ALTER TABLE "Projekt" RENAME COLUMN "main_page_visible" TO "vidljivo_na_naslovnici";
ALTER TABLE "Projekt" RENAME COLUMN "description" TO "opis";
ALTER TABLE "Projekt" RENAME COLUMN "coorganizers" TO "suorganizatori";
ALTER TABLE "Projekt" RENAME COLUMN "facebook_link" TO "facebook_poveznica";
ALTER TABLE "Projekt" RENAME COLUMN "instagram_link" TO "instagram_poveznica";
ALTER TABLE "Projekt" RENAME COLUMN "website_link" TO "web_poveznica";

ALTER TABLE "partner" RENAME TO "Partner";
ALTER TABLE "Partner" RENAME CONSTRAINT "partner_pkey" TO "Partner_pkey";
ALTER TABLE "Partner" RENAME COLUMN "name" TO "naziv";
ALTER TABLE "Partner" RENAME COLUMN "logo" TO "logotip";
ALTER TABLE "Partner" RENAME COLUMN "visible_on_page" TO "vidljivo_na_stranici";
ALTER TABLE "Partner" RENAME COLUMN "strategic_partner" TO "strateski_partner";
ALTER TABLE "Partner" RENAME COLUMN "website_link" TO "web_poveznica";

ALTER TABLE "document" RENAME TO "Dokument";
ALTER TABLE "Dokument" RENAME CONSTRAINT "document_pkey" TO "Dokument_pkey";
ALTER TABLE "Dokument" RENAME COLUMN "name" TO "naziv";
ALTER TABLE "Dokument" RENAME COLUMN "photo" TO "fotografija";
ALTER TABLE "Dokument" RENAME COLUMN "visible_on_page" TO "vidljivo_na_stranici";
ALTER TABLE "Dokument" RENAME COLUMN "file" TO "datoteka";

ALTER TABLE "privacy_policy" RENAME TO "PolitikaPrivatnosti";
ALTER TABLE "PolitikaPrivatnosti" RENAME CONSTRAINT "privacy_policy_pkey" TO "PolitikaPrivatnosti_pkey";
ALTER TABLE "PolitikaPrivatnosti" RENAME COLUMN "policy" TO "tekst";

ALTER TABLE "user" RENAME TO "Korisnik";
ALTER TABLE "Korisnik" RENAME CONSTRAINT "user_pkey" TO "Korisnik_pkey";
ALTER TABLE "Korisnik" RENAME COLUMN "name_surname" TO "ime_prezime";
