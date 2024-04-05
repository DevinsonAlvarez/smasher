import { APP_URL } from '../config/app'
import db from '../database'
import randomString from '../utils/randomString'

function smash(url: string, options: { baseUrl?: string } = {}) {
  const key = randomString()
  let appUrl = APP_URL
  if (options.baseUrl) {
    appUrl =
      options.baseUrl[options.baseUrl.length - 1] === '/'
        ? options.baseUrl.slice(0, -1)
        : options.baseUrl
  }
  const smashed_url = `${appUrl}/${key}`

  const stmt = db.prepare(
    'INSERT INTO links (key, url, shorter_url) VALUES (?, ?, ?)'
  )
  stmt.run(key, url.trim(), smashed_url)

  return {
    key,
    smashed_url,
    original: url.trim()
  }
}

export default { smash }
