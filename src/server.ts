import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import logger from './shared/logger'
async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info(`🛢  Database is connected successfullly!`)

    app.listen(config.port, () => {
      logger.info(`App listening on port ${config.port}`)
    })
  } catch (err) {
    logger.error('Failed to connect database', err)
  }
}

bootstrap()
