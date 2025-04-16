import winston from 'winston';

import { LOG_LEVEL_T } from '~/common/types/logging.types';
import { ILogger } from '~/server/logger/ILogger';

class WinstonLogger implements ILogger {
  private logger;
  constructor() {
    this.logger = winston.createLogger({
      level: 'info',
      format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
      defaultMeta: { service: 'preland-app' },
      // new winston.transports.File({ filename: 'log/error.log', level: 'error' }),
      //
      // new winston.transports.File({ filename: 'log/combined.log' }),
      transports: [new winston.transports.Console()],
    });
  }
  log(level: LOG_LEVEL_T, message: string, meta?: Record<string, any>) {
    this.logger.log(level, message, meta);
  }
  debug(message: string, meta?: Record<string, any>) {
    this.logger.debug(message, meta);
  }
  info(message: string, meta?: Record<string, any>) {
    this.logger.info(message, meta);
  }
  warn(message: string, meta?: Record<string, any>) {
    this.logger.warn(message, meta);
  }
  error(message: string, meta?: Record<string, any>) {
    this.logger.error(message, meta);
  }
}

class DefaultLogger implements ILogger {
  constructor(private readonly logger: ILogger) {}

  log(level: LOG_LEVEL_T, message: string, meta?: Record<string, any>) {
    this.logger.log(level, message, meta);
  }
  debug(message: string, meta?: Record<string, any>) {
    this.logger.debug(message, meta);
  }
  info(message: string, meta?: Record<string, any>) {
    this.logger.info(message, meta);
  }
  warn(message: string, meta?: Record<string, any>) {
    this.logger.warn(message, meta);
  }
  error(message: string, meta?: Record<string, any>) {
    this.logger.error(message, meta);
  }
}

const logger = new DefaultLogger(new WinstonLogger());

export default logger;
