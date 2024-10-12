"use server"

import prisma from "@/lib/prisma"

export const createAnnouncement = async (title: string, content: string) => {
  try {
    await prisma.announcement.create({
      data: {
        title,
        content,
      }
    })
  } catch (error) {
    throw new Error("Cannot create announcement")
  }
}

export const getAllAnnouncement = async () => {
  try {
    return await prisma.announcement.findMany()
  } catch (error) {
    throw new Error("Cannot get announcement")
  }
}