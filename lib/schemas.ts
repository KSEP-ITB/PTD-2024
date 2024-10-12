import z from 'zod'

export const signInSchema = z.object({
  username: z.string().min(8),
  password: z.string().min(8)
})

export type signInSchemaType = z.infer<typeof signInSchema>