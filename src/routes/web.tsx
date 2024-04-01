import { Hono } from 'hono'
import Welcome from '../views/pages/Welcome'

const web = new Hono()

web.get('/', (c) => {
  return c.html(<Welcome />)
})

export default web
