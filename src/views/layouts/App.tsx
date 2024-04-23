import type { FC } from 'hono/jsx'
import LinkList from '../components/LinkList'

interface Props {
  title?: string
  children?: any
}

const App: FC<Props> = ({ title, children }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title ?? 'SMASHER'}</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"
        />
      </head>
      <body>
        <header>
          <div className="container">
            <nav>
              <h3>SMASHER 💥</h3>
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="container">
          <div style={{ width: '100%' }}>{children}</div>
          {process.env?.NODE_ENV !== 'production' && (
            <div style={{ height: 400, overflow: 'auto' }}>
              <LinkList />
            </div>
          )}
        </main>
      </body>
    </html>
  )
}

export default App
