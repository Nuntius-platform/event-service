import { analyze } from './analyze.ts'
import { getArticles } from '../../grpc/get-articles.ts'
import { save } from './save.ts'
import { pool } from '#db'

export async function start(): Promise<void> {
  const articles = await getArticles()

  for (const { articleId, articleText } of articles) {
    const existing = await pool.query(
      `SELECT 1 AS exists 
        FROM article_analysis
        WHERE article_id = $1`,
      [articleId],
    )

    if (existing.rows.length) {
      continue
    }

    const articleAnalysis = await analyze(articleId, articleText)
    await save(articleId, articleAnalysis)
  }
}
