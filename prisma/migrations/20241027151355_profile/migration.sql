/*
  Warnings:

  - You are about to drop the `ayam` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "TypePengguna" AS ENUM ('NORMAL', 'ARTIST', 'ADMIN');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('TERSEDIA', 'TERJUAL', 'LELANG', 'KOSONG');

-- DropTable
DROP TABLE "ayam";

-- CreateTable
CREATE TABLE "Pengguna" (
    "id" TEXT NOT NULL,
    "peran" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "kata_sandi" TEXT NOT NULL,
    "no_telepon" BIGINT NOT NULL,
    "dibuat_pada" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "diperbarui_pada" TIMESTAMP(3) NOT NULL,
    "type" "TypePengguna" NOT NULL DEFAULT 'NORMAL',
    "profil_SenimanId" TEXT,

    CONSTRAINT "Pengguna_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProfilSeniman" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "biografi" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "dibuat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "diperbarui" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProfilSeniman_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KaryaSeni" (
    "id" TEXT NOT NULL,
    "judul" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "harga" DECIMAL(65,30) NOT NULL,
    "gambar_url" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'KOSONG',
    "profil_SenimanId" TEXT,

    CONSTRAINT "KaryaSeni_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_collab_artist" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_collab_artist_AB_unique" ON "_collab_artist"("A", "B");

-- CreateIndex
CREATE INDEX "_collab_artist_B_index" ON "_collab_artist"("B");

-- AddForeignKey
ALTER TABLE "Pengguna" ADD CONSTRAINT "Pengguna_profil_SenimanId_fkey" FOREIGN KEY ("profil_SenimanId") REFERENCES "ProfilSeniman"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KaryaSeni" ADD CONSTRAINT "KaryaSeni_profil_SenimanId_fkey" FOREIGN KEY ("profil_SenimanId") REFERENCES "ProfilSeniman"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_collab_artist" ADD CONSTRAINT "_collab_artist_A_fkey" FOREIGN KEY ("A") REFERENCES "KaryaSeni"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_collab_artist" ADD CONSTRAINT "_collab_artist_B_fkey" FOREIGN KEY ("B") REFERENCES "ProfilSeniman"("id") ON DELETE CASCADE ON UPDATE CASCADE;
