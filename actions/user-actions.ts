"use server"

import prisma from "@/lib/prisma"
import { signIn } from "next-auth/react"

export const getUserByUsername = async (username: any, password: any) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        username,
        password
      }
    })

    return user
  } catch (error) {
    throw new Error("Cannot find the specific user")    
  }
}

export const getUserRole = async (username: any) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        username
      }
    })

    return user?.role
  } catch (error) {
    throw new Error("Cannot find the specific user")    
  }
}

export const signInHandler = async (username: string, password: string) => {
  try {
    const result = await signIn('credentials', {
      redirect: false,
      username: username,
      password: password,
    }) 

    if (result?.error) {
      console.log(result?.error)
    } else {
      console.log("SignIn Successfully")
    }
  } catch (error) {
    console.log(error);
  }
}

export const getUserById = async (id: string) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        id
      }
    })

    return user;
  } catch (error) {
    throw new Error("Cannot find the specific user")    
  }
}