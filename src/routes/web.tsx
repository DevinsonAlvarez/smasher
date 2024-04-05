import { Hono } from 'hono'
import Home from '../views/pages/Home'
import { validator } from 'hono/validator'
import { error } from 'console'
import smasher from '@/app/smasher'

const web = new Hono()

web.get('/', (c) => {
  const query: { error?: string; url?: string } = c.req.query()

  if (query.error) {
    return c.html(<Home error={query.error?.replaceAll('_', ' ')} />)
  }

  if (query.url) {
    return c.html(<Home url={query.url} />)
  }

  return c.html(<Home />)
})

web.post(
  '/smash',
  validator('form', (data: { url: string }, c) => {
    if (!data.url || data.url.length === 0) {
      return c.redirect('/web?error=The_url_is_required')
    }

    return data
  }),
  async (c) => {
    const data: { url: string } = await c.req.parseBody()

    const { smashed_url } = smasher.smash(data.url)

    return c.redirect(`/web?url=${smashed_url}`)
  }
)

export default web
