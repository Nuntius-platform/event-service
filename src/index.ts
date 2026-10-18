import { start } from './ai/article-analysis/start.ts'
import { logger } from '#config'
import { pool } from '#db'

try {
  await start('507f1f77bcf86cd799439011', 'Bitcoin вырос на 5% за последние сутки.')
} catch (error: unknown) {
  logger.error({ err: error })
} finally {
  await pool.end()
}
