import type { FC } from 'hono/jsx'

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
      </head>
      <body>{children}</body>
    </html>
  )
}

export default App
