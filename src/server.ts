import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { logger, errorLogger } from './shared/logger'
import { Server } from 'http'

let server: Server

process.on('uncaughtException', error => {
  errorLogger.error(error)
  process.exit(1)
})

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info(`🛢  Database is connected successfullly!`)

    server = app.listen(config.port, () => {
      logger.info(`App listening on port ${config.port}`)
    })
  } catch (err) {
    errorLogger.error('Failed to connect database', err)
  }
  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        errorLogger.error(error)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}

bootstrap()

process.on('SIGTERM', () => {
  logger.info('SIGRERM is Received!')
  if (server) {
    server.close()
  }
})
