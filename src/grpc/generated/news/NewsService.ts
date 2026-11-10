// Original file: proto/news.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { GetArticlesRequest as _news_GetArticlesRequest, GetArticlesRequest__Output as _news_GetArticlesRequest__Output } from '../news/GetArticlesRequest.js';
import type { GetArticlesResponse as _news_GetArticlesResponse, GetArticlesResponse__Output as _news_GetArticlesResponse__Output } from '../news/GetArticlesResponse.js';

export interface NewsServiceClient extends grpc.Client {
  GetArticles(argument: _news_GetArticlesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_news_GetArticlesResponse__Output>): grpc.ClientUnaryCall;
  GetArticles(argument: _news_GetArticlesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_news_GetArticlesResponse__Output>): grpc.ClientUnaryCall;
  GetArticles(argument: _news_GetArticlesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_news_GetArticlesResponse__Output>): grpc.ClientUnaryCall;
  GetArticles(argument: _news_GetArticlesRequest, callback: grpc.requestCallback<_news_GetArticlesResponse__Output>): grpc.ClientUnaryCall;
  getArticles(argument: _news_GetArticlesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_news_GetArticlesResponse__Output>): grpc.ClientUnaryCall;
  getArticles(argument: _news_GetArticlesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_news_GetArticlesResponse__Output>): grpc.ClientUnaryCall;
  getArticles(argument: _news_GetArticlesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_news_GetArticlesResponse__Output>): grpc.ClientUnaryCall;
  getArticles(argument: _news_GetArticlesRequest, callback: grpc.requestCallback<_news_GetArticlesResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface NewsServiceHandlers extends grpc.UntypedServiceImplementation {
  GetArticles: grpc.handleUnaryCall<_news_GetArticlesRequest__Output, _news_GetArticlesResponse>;
  
}

export interface NewsServiceDefinition extends grpc.ServiceDefinition {
  GetArticles: MethodDefinition<_news_GetArticlesRequest, _news_GetArticlesResponse, _news_GetArticlesRequest__Output, _news_GetArticlesResponse__Output>
}
