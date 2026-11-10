// Original file: proto/news.proto

import type { CursorRequest as _news_CursorRequest, CursorRequest__Output as _news_CursorRequest__Output } from '../news/CursorRequest.js';
import type { ArticleIdsRequest as _news_ArticleIdsRequest, ArticleIdsRequest__Output as _news_ArticleIdsRequest__Output } from '../news/ArticleIdsRequest.js';

export interface GetArticlesRequest {
  'cursorRequest'?: (_news_CursorRequest | null);
  'articleIdsRequest'?: (_news_ArticleIdsRequest | null);
  'params'?: "cursorRequest"|"articleIdsRequest";
}

export interface GetArticlesRequest__Output {
  'cursorRequest'?: (_news_CursorRequest__Output);
  'articleIdsRequest'?: (_news_ArticleIdsRequest__Output);
  'params'?: "cursorRequest"|"articleIdsRequest";
}
