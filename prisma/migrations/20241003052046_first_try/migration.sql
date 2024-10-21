-- CreateTable
CREATE TABLE "ayam" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" VARCHAR(255),

    CONSTRAINT "ayam_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ayam_email_key" ON "ayam"("email");
