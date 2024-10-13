"use server"

import prisma from "@/lib/prisma";

export const createStudentAssigment = async (userId: string, assignmentId: string, link: string) => {  
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId
      }
    })
  
    if (!user || user.role !== 'USER') {
      throw new Error('Hanya pengguna dengan peran USER yang dapat mengumpulkan tugas.');
    }

    const newStudentAssigment = await prisma.studentAssignment.create({
      data: {
        link,
        userId,
        assignmentId,
      }
    })

    return newStudentAssigment
  } catch (error) {
    throw new Error('Cant create student assigment');
  }
}

export const getAllStudentAssigmentByAssigmentId = async (id: string) => {
  return await prisma.assignmentForStudent.findMany({
    where: {
      id,
    }
  })
}

export const createAssigmentForStudent = async(adminId: string, day: string, title: string, description: string) => {
  try {
    const admin = await prisma.user.findUnique({
      where: { id: adminId },
    });
  
    if (!admin || admin.role !== 'ADMIN') {
      throw new Error('Hanya pengguna dengan peran ADMIN yang dapat membuat tugas untuk siswa.');
    }

    const newAssignmentForStudent = await prisma.assignmentForStudent.create({
      data: {
        day,
        title,
        description,
      },
    });

    return newAssignmentForStudent
  } catch (error) {
    throw new Error('Cant create assigment for student');
  }
}