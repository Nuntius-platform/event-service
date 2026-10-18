import { articlePrompt } from './prompt.ts'
import { post } from '../post.ts'
import { parse } from './parse.ts'
import type { Analysis } from './schema.ts'
import { envConfig } from '#config'

const API_URL = 'https://openrouter.ai/api/v1/chat/completions'
const MODEL = envConfig.AI_ARTICLE_MODEL
const MAX_ATTEMPTS = 3

export async function analyze(articleId: string, articleText: string): Promise<Analysis> {
  let lastError: unknown

  for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt++) {
    const response = await post(API_URL, MODEL, articlePrompt, articleText)

    try {
      return parse(response)
    } catch (error: unknown) {
      lastError = error
    }
  }

  throw new Error(`Failed to analyze article ${articleId}`, {
    cause: lastError,
  })
}
