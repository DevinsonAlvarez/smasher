interface Link {
  key: string
  url: string
  shortener_url: string
}

type QueryResult<T extends {}> = T & {
  id: number,
  created_at: string,
  updated_at: string,
} | undefined
