import type { FC } from 'hono/jsx'
import App from '../layouts/App'

interface Props {
  error?: string
  url?: string
}

const Home: FC<Props> = ({ error, url }) => {
  return (
    <App>
      <>
        <section>
          <h1>Smash Url</h1>
          <form action="/web/smash" method="post">
            <input
              type="url"
              name="url"
              placeholder="https://some-site.com/very/long/path?with=some-data"
              aria-invalid={error ? 'true' : ''}
              aria-describedby="invalid-helper"
            />
            <small id="invalid-helper">
              {error ?? 'Insert a url to smash it'}
            </small>
            <button type="submit">SMASH!</button>
          </form>
        </section>
        {url && (
          <section>
            <h4>
              New URL: <a href={url}>{url}</a>
            </h4>
          </section>
        )}
      </>
    </App>
  )
}

export default Home
