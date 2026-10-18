import { analyze } from './analyze.ts'
import { save } from './save.ts'
import { logger } from '#config'
import { pool } from '#db'

export async function start(articleId: string, articleText: string): Promise<void> {
  try {
    const existing = await pool.query<{ article_id: string }>(
      `SELECT article_id
        FROM article_analysis
        WHERE article_id = $1`,
      [articleId],
    )

    if (existing.rows.length) {
      return
    }

    const articleAnalysis = await analyze(articleId, articleText)

    await save(articleId, articleAnalysis)
  } catch (error: unknown) {
    logger.error({ err: error })
    throw error
  }
}
