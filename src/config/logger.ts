import pino from 'pino'

const LOG_FILE_PATH = `/var/log/nodejs/nuntius-event-service.log`

const transport = pino.transport({
  targets: [
    {
      level: 'info',
      target: 'pino/file',
      options: { destination: 1 },
    },
    {
      level: 'info',
      target: 'pino-roll',
      options: {
        file: LOG_FILE_PATH,
        frequency: 'daily',
        dateFormat: 'yyyy-MM-dd',
        mkdir: true,
        limit: { count: 7 },
      },
    },
  ],
})

export const logger = pino({ level: 'info', timestamp: pino.stdTimeFunctions.isoTime }, transport)
