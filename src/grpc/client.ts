import { loadSync } from '@grpc/proto-loader'
import { credentials, loadPackageDefinition } from '@grpc/grpc-js'
import type { ProtoGrpcType } from './generated/news.js'
import { envConfig } from '#config'

const packageDefinition = loadSync('proto/news.proto', {
  oneofs: true,
})

const proto = loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType

export const newsClient = new proto.news.NewsService(
  envConfig.GRPC_NEWS_ADDRESS,
  credentials.createInsecure(),
)
