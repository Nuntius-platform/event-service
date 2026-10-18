import { z } from 'zod'
import { analysisSchema } from './schema.ts'
import type { Analysis } from './schema.ts'

export const responseSchema = z.object({
  choices: z
    .array(
      z.object({
        message: z.object({
          content: z.string(),
        }),
      }),
    )
    .nonempty(),
})

export function parse(data: string): Analysis {
  const response = responseSchema.parse(JSON.parse(data))

  const [choice] = response.choices

  if (!choice) {
    throw new Error('LLM response contains no choices')
  }

  const content = choice.message.content

  const cleanContent = content
    .trim()
    .replace(/^```(?:json)?[ \t]*\r?\n/i, '')
    .replace(/\r?\n```$/, '')
    .trim()

  return analysisSchema.parse(JSON.parse(cleanContent))
}
