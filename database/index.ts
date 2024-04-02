import fs from 'node:fs'
import Database from 'better-sqlite3'

const db = new Database('./store/database.db', { verbose: console.log })

const migration = fs.readFileSync('./database/migrations/create_database.sql', {
  encoding: 'utf8'
})

db.exec(migration)

export default db
