/*
  Warnings:

  - A unique constraint covering the columns `[login_token]` on the table `Pengguna` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Pengguna_login_token_key" ON "Pengguna"("login_token");
