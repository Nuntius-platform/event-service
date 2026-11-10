import { start } from './ai/article-analysis/start.ts'
import { getArticles } from './grpc/get-articles.ts'
import { logger } from '#config'
import { pool } from '#db'

try {
  await start()
  await getArticles()
} catch (error: unknown) {
  logger.error({ err: error })
} finally {
  await pool.end()
}
