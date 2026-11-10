import { promisify } from 'node:util'
import { newsClient } from './client.ts'

interface Article {
  articleId: string
  articleText: string
}

const getArticlesRpc = promisify(newsClient.GetArticles.bind(newsClient))

export async function getArticles(): Promise<Article[]> {
  const response = await getArticlesRpc({
    cursorRequest: {
      limit: 5,
    },
  })

  if (!response?.articles) {
    throw new Error('News Service returned an invalid response')
  }

  return response.articles.map((article) => {
    if (article.id === undefined || article.content === undefined) {
      throw new Error('Invalid article received from News Service')
    }

    return {
      articleId: article.id,
      articleText: article.content,
    }
  })
}
