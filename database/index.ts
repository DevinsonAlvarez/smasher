import fs from 'node:fs'
import Database from 'better-sqlite3'
import queryLogger from '../app/queryLogger'

const db = new Database('./storage/database.db', { verbose: queryLogger })

const migration = fs.readFileSync('./database/migrations/create_database.sql', {
  encoding: 'utf8'
})

db.exec(migration)

export default db
