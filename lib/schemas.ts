import z, { string } from 'zod'

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

export const handbookSchema = z.object({
  day: z.string().min(1),
  title: z.string().min(4),
  link: z.string().min(5)
})

export type handbookSchemaType = z.infer<typeof handbookSchema>

export type handbookSchemaTypeWithId = {
  id: string
  day: string
  title: string
  link: string
}