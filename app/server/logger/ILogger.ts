import { LOG_LEVEL_T } from '~/common/types/logging.types';

export interface ILogger {
  log: (level: LOG_LEVEL_T, message: string, meta?: Record<string, any>) => void;
  debug: (message: string, meta?: Record<string, any>) => void;
  info: (message: string, meta?: Record<string, any>) => void;
  warn: (message: string, meta?: Record<string, any>) => void;
  error: (message: string, meta?: Record<string, any>) => void;
}
