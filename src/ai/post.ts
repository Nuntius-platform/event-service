import 'dotenv/config'
import { envConfig } from '#config'

export async function post(
  url: string,
  model: string,
  prompt: string,
  data: string,
): Promise<string> {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${envConfig.OPENROUTER_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: model,
      messages: [
        { content: prompt, role: 'system' },
        { content: data, role: 'user' },
      ],
    }),
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: HTTP ${response.status}`)
  }

  return response.text()
}
