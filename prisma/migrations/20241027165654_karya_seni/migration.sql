-- CreateEnum
CREATE TYPE "StatusTransaksi" AS ENUM ('TERDUNDA', 'SELESAI', 'GAGAL');

-- CreateEnum
CREATE TYPE "StatusLelang" AS ENUM ('BERLANGSUNG', 'SELESAI', 'DIBATALKAN');

-- CreateTable
CREATE TABLE "Transaksi" (
    "id" TEXT NOT NULL,
    "penggunaId" TEXT NOT NULL,
    "karyaSeniId" TEXT NOT NULL,
    "tanggal_transaksi" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "total" DECIMAL(65,30) NOT NULL,
    "status" "StatusTransaksi" NOT NULL,

    CONSTRAINT "Transaksi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tawaran" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Tawaran_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lelang" (
    "id" TEXT NOT NULL,
    "waktu_mulai" TIMESTAMP(3) NOT NULL,
    "waktu_akhir" TIMESTAMP(3),
    "harga_awal" DECIMAL(65,30) NOT NULL,
    "status" "StatusLelang" NOT NULL,

    CONSTRAINT "Lelang_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ulasan" (
    "id" TEXT NOT NULL,
    "karyaSeniId" TEXT NOT NULL,
    "penggunaId" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "Komentar" TEXT NOT NULL,
    "dibuat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Ulasan_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Transaksi" ADD CONSTRAINT "Transaksi_penggunaId_fkey" FOREIGN KEY ("penggunaId") REFERENCES "Pengguna"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaksi" ADD CONSTRAINT "Transaksi_karyaSeniId_fkey" FOREIGN KEY ("karyaSeniId") REFERENCES "KaryaSeni"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ulasan" ADD CONSTRAINT "Ulasan_karyaSeniId_fkey" FOREIGN KEY ("karyaSeniId") REFERENCES "KaryaSeni"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ulasan" ADD CONSTRAINT "Ulasan_penggunaId_fkey" FOREIGN KEY ("penggunaId") REFERENCES "Pengguna"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
