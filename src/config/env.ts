import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  DATABASE_URL: z.url(),
  OPENROUTER_API_KEY: z.string(),
  AI_ARTICLE_MODEL: z.string(),
  API_URL: z.string(),
  GRPC_NEWS_ADDRESS: z.string(),
})

export const envConfig = envSchema.parse(process.env)
