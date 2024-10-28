-- CreateTable
CREATE TABLE "Pesan" (
    "id" TEXT NOT NULL,
    "pengirimId" TEXT NOT NULL,
    "penerimaId" TEXT NOT NULL,
    "isi_pesan" TEXT NOT NULL,
    "dikirim_pada" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Pesan_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Pesan" ADD CONSTRAINT "Pesan_pengirimId_fkey" FOREIGN KEY ("pengirimId") REFERENCES "Pengguna"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pesan" ADD CONSTRAINT "Pesan_penerimaId_fkey" FOREIGN KEY ("penerimaId") REFERENCES "Pengguna"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
