/*
  Warnings:

  - You are about to drop the `People` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "People";

-- CreateTable
CREATE TABLE "Person" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);
