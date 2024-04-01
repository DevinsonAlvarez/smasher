import type { FC } from 'hono/jsx'
import App from '../layouts/App'

interface Props {
  title?: string
  children?: any
}

const Welcome: FC<Props> = ({ title, children }) => {
  return (
    <App>
      <h1>Hello SMASHER 💥</h1>
    </App>
  )
}

export default Welcome
