/*
  Warnings:

  - Added the required column `chordsUrl` to the `chords` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "chords" ADD COLUMN     "chordsUrl" TEXT NOT NULL;
