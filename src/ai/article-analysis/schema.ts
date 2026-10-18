import { z } from 'zod'

export const analysisSchema = z.object({
  keywords: z.array(z.string()),
  facts: z.array(z.string()),
  topics: z.array(z.string()),
})

export type Analysis = z.infer<typeof analysisSchema>
