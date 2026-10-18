interface Article {
  articleId: string
  articleText: string
}

export async function get(): Promise<Article> {
  return {
    articleId: '507f1f77bcf86cd799439011',
    articleText: 'Bitcoin вырос на 5% за последние сутки.',
  }
}
