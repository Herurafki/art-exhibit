/*
  Warnings:

  - The `peran` column on the `Pengguna` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Peran" AS ENUM ('SENIMAN', 'PELANGGAN', 'ADMIN');

-- AlterTable
ALTER TABLE "Pengguna" DROP COLUMN "peran",
ADD COLUMN     "peran" "Peran" NOT NULL DEFAULT 'PELANGGAN',
ALTER COLUMN "no_telepon" DROP NOT NULL;
