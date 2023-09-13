import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class LoggingService {
  private readonly levels: Record<string, number> = {
    trace: 1,
    debug: 2,
    info: 3,
    warn: 4,
    error: 5,
  };

  constructor(private http: HttpClient) {}

  trace(message: string, data?: any) {
    this.log('trace', message, data);
  }

  debug(message: string, data?: any) {
    this.log('debug', message, data);
  }

  info(message: string, data?: any) {
    this.log('info', message, data);
  }

  warn(message: string, data?: any) {
    this.log('warn', message, data);
  }

  error(message: string, data?: any) {
    this.log('error', message, data);
  }

  private log(level: keyof typeof this.levels, message: string, data?: any) {
    if (this.levels[level] < this.levels[environment.logLevel]) {
      return;
    }

    let style = {
      color: '',
      background: '',
    };

    switch (level) {
      case 'error':
        style.color = 'white';
        style.background = 'red';
        break;
      case 'warn':
        style.color = 'black';
        style.background = 'yellow';
        break;
      case 'debug':
        style.color = 'white';
        style.background = 'blue';
        break;
      case 'info':
        style.color = 'white';
        style.background = 'green';
        break;

      default:
        style.color = 'white';
        style.background = 'gray';
    }

    const timestamp = this.getTimeStamp();
    const content = this.buildMessage(level, timestamp, message, data);
    const fontSize = 1.2;
    console.log(
      content,
      `background: #8080806f; font-weight: 900; font-size:${fontSize}em`,

      `background: ${style.background} ;color: ${style.color};
      margin:.3em; padding: .5em; font-weight: 900; font-size:${fontSize}em`,

      `font-weight:600; font-size:${fontSize - 0.05}em`,

      `font-weight:600; font-size:${fontSize - 0.05}em`,
    );

    // Log to server
    // this.sendToServer(level, content);

    if (level === 'error') {
      console.error(data);
    }
  }

  private getTimeStamp() {
    const date = new Date();
    const month = `0${date.getMonth() + 1}`.slice(-2);
    const day = `0${date.getDate()}`.slice(-2);
    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);

    return `${date.getFullYear()}-${month}-${day}T${hours}:${minutes}:${seconds}`;
  }

  private buildMessage(
    level: string,
    timestamp: string,
    message: string,
    data: any
  ) {
    return `%c${timestamp} %c${level
      .toLocaleUpperCase()
      .trimEnd()}%c${message} %c${JSON.stringify(data)}`;
  }

  // private sendToServer(level: string, content: string) {
  //   return this.http
  //     .post('/logs', {
  //       level,
  //       content,
  //     })
  //     .subscribe();
  // }
}
