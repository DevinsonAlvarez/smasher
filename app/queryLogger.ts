import fs from 'node:fs';
import dayjs from 'dayjs';

if (!fs.existsSync('./storage/logs/queries.log')) {
  fs.mkdirSync('./storage/logs')
}

const logFile = fs.createWriteStream('./storage/logs/queries.log')

function queryLogger(message?: unknown, ...additionalArgs: unknown[]) {
  if (typeof message === 'string') {
    const date = dayjs(Date.now(), { utc: true }).format('YYYY-MM-DD HH:mm:ss')

    logFile.write(`[${date}]: <<<<<<<<<<\n${message}\n>>>>>>>>>>\n`)
  }
}

export default queryLogger