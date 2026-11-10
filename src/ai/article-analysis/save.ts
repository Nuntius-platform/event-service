import type { Analysis } from './schema.ts'
import { pool } from '#db'

export async function save(articleId: string, analysis: Analysis): Promise<void> {
  const { keywords, facts, topics } = analysis

  await pool.query(
    `INSERT INTO article_analysis (article_id, keywords, facts, topics)
    VALUES ($1, $2, $3, $4)
    ON CONFLICT (article_id) DO NOTHING`,
    [articleId, keywords, facts, topics],
  )
}
