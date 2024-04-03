import { Hono } from 'hono'
import { validator } from 'hono/validator'
import randomString from '../utils/randomString'
import db from '../database'

const api = new Hono()

api
  .get('/', (c) => {
    return c.json({ message: 'Hello SMASHER 💥' })
  })
  .get('/:key', (c) => {
    const stmt = db.prepare('SELECT * FROM links WHERE key = ?')
    const link = stmt.get(c.req.param('key')) as QueryResult<Link>

    if (!link) {
      return c.json({ message: 'Url not found' }, 404)
    }

    return c.json(link)
  })
  .post(
    '/smash',
    validator('json', (data: { url: string }, c) => {
      if (!data.url) {
        return c.json({ message: 'You must provide an url' }, 422)
      }

      if (typeof data.url !== 'string') {
        return c.json({ message: 'The url must be a valid url' }, 422)
      }

      return data
    }),
    async (c) => {
      const data = await c.req.json<{ url: string }>()

      const key = randomString()
      const appUrl = c.req.url.replace(c.req.path, '')
      const smashed_url = `${appUrl}/${key}`

      const stmt = db.prepare(
        'INSERT INTO links (key, url, shorter_url) VALUES (?, ?, ?)'
      )
      stmt.run(key, data.url, smashed_url)

      return c.json({
        message: 'Url smashed',
        smashed_url,
        key,
        original: data.url
      })
    }
  )

export default api
