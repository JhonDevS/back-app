import winston from 'winston';
import morgan from 'morgan';
import { config } from './config';

class Logger {
  private static instance: Logger;
  public logger: winston.Logger;
  public morganMiddleware: any;

  private constructor() {
    this.logger = winston.createLogger({
      level: config.env === 'development' ? 'debug' : 'info',
      format: winston.format.combine(
        winston.format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.colorize(),
        winston.format.printf(({ timestamp, level, message, ...metadata }) => {
          const meta = Object.keys(metadata).length
            ? JSON.stringify(metadata, null, 2)
            : '';
          return `${timestamp} [${level}]: ${message} ${meta}`;
        })
      ),
      transports: [
        // Consola
        new winston.transports.Console(),
        // Archivo de errores
        new winston.transports.File({
          filename: 'logs/error.log',
          level: 'error'
        }),
        // Archivo con todos los logs
        new winston.transports.File({ filename: 'logs/combined.log' })
      ]
    });

    this.morganMiddleware = morgan(
      ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"',
      {
        stream: {
          write: (message: string) => {
            this.logger.http(message.trim());
          }
        }
      }
    );
  }

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  public info(message: string, meta = {}): void {
    this.logger.info(message, meta);
  }

  public error(message: string, meta = {}): void {
    this.logger.error(message, meta);
  }

  public warn(message: string, meta = {}): void {
    this.logger.warn(message, meta);
  }

  public debug(message: string, meta = {}): void {
    this.logger.debug(message, meta);
  }

  public http(message: string): void {
    this.logger.http(message);
  }
}

export const LoggerInstance = Logger.getInstance();
