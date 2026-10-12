import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  DATABASE_URL: z.url(),
})

export const envConfig = envSchema.parse(process.env)
