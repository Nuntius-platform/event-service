// Original file: proto/news.proto


export interface CursorRequest {
  'cursor'?: (string);
  'limit'?: (number);
  '_cursor'?: "cursor";
}

export interface CursorRequest__Output {
  'cursor'?: (string);
  'limit'?: (number);
  '_cursor'?: "cursor";
}
