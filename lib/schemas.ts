import z from 'zod'

export const signInSchema = z.object({
  username: z.string().min(8),
  password: z.string().min(8)
})

export type signInSchemaType = z.infer<typeof signInSchema>

export const announcementSchema = z.object({
  title: z.string().min(8),
  content: z.string().min(8).max(500)
})

export type announcementSchemaType = z.infer<typeof announcementSchema>

export type announcementSchemaTypeWithId = {
  id: string
  title: string
  content: string
}