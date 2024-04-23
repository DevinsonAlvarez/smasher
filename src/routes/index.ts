import { type Hono } from 'hono'
import web from './web'
import api from './api'
import db from '@/database'

function registerRoutes(app: Hono) {
  app.route('/web', web)
  app.route('/api', api)

  app.get('/:key', (c) => {
    const stmt = db.prepare('SELECT * FROM links WHERE key = ?')
    const link = stmt.get(c.req.param('key')) as QueryResult<Link>

    if (!link) {
      return c.text('Not found', 404)
    }

    return c.redirect(link.url)
  })
}

export { registerRoutes }
