/*
  Warnings:

  - Added the required column `dueDate` to the `AssignmentForStudent` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AssignmentForStudent" ADD COLUMN     "dueDate" TEXT NOT NULL;
