/*
  Warnings:

  - You are about to drop the `AssigmentForStudent` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `assignmentId` to the `StudentAssignment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "StudentAssignment" ADD COLUMN     "assignmentId" TEXT NOT NULL;

-- DropTable
DROP TABLE "AssigmentForStudent";

-- CreateTable
CREATE TABLE "AssignmentForStudent" (
    "id" TEXT NOT NULL,
    "day" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "AssignmentForStudent_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "StudentAssignment" ADD CONSTRAINT "StudentAssignment_assignmentId_fkey" FOREIGN KEY ("assignmentId") REFERENCES "AssignmentForStudent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
