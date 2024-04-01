import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import web from './routes/web'
import api from './routes/api'

const app = new Hono()

app.get('/', (c) => {
  return c.redirect('/web')
})

app.route('/web', web)
app.route('/api', api)

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
