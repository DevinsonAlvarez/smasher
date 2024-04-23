import db from '../../database'

const LinkList = () => {
  const stmt = db.prepare('SELECT * FROM links')
  const links = stmt.all() as Link[]

  return (
    <ul>
      {links.map((link) => (
        <li>
          <a href={link.shorter_url}>{link.shorter_url}</a>
        </li>
      ))}
    </ul>
  )
}

export default LinkList
