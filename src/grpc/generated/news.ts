import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { Article as _news_Article, Article__Output as _news_Article__Output } from './news/Article.js';
import type { ArticleIdsRequest as _news_ArticleIdsRequest, ArticleIdsRequest__Output as _news_ArticleIdsRequest__Output } from './news/ArticleIdsRequest.js';
import type { CursorRequest as _news_CursorRequest, CursorRequest__Output as _news_CursorRequest__Output } from './news/CursorRequest.js';
import type { GetArticlesRequest as _news_GetArticlesRequest, GetArticlesRequest__Output as _news_GetArticlesRequest__Output } from './news/GetArticlesRequest.js';
import type { GetArticlesResponse as _news_GetArticlesResponse, GetArticlesResponse__Output as _news_GetArticlesResponse__Output } from './news/GetArticlesResponse.js';
import type { NewsServiceClient as _news_NewsServiceClient, NewsServiceDefinition as _news_NewsServiceDefinition } from './news/NewsService.js';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  news: {
    Article: MessageTypeDefinition<_news_Article, _news_Article__Output>
    ArticleIdsRequest: MessageTypeDefinition<_news_ArticleIdsRequest, _news_ArticleIdsRequest__Output>
    CursorRequest: MessageTypeDefinition<_news_CursorRequest, _news_CursorRequest__Output>
    GetArticlesRequest: MessageTypeDefinition<_news_GetArticlesRequest, _news_GetArticlesRequest__Output>
    GetArticlesResponse: MessageTypeDefinition<_news_GetArticlesResponse, _news_GetArticlesResponse__Output>
    NewsService: SubtypeConstructor<typeof grpc.Client, _news_NewsServiceClient> & { service: _news_NewsServiceDefinition }
  }
}

