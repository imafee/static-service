import http from 'node:http';
import autoOpen from './helper/openUrl.js';
import serverConfig from './const/serverConfig.js';

export class Server {
  constructor(env) {
    this.config = Object.assign({}, serverConfig, env);
  }
  start() {
    const { host, port } = this.config;
    const server = http.createServer((req, res) => {
      // TODO
      res.statusCode = 404;
      res.end('hello world!');
    });
    server.listen(port, host, () => {
      const { programName, arg } = this.config.env;
      const { log, dir } = console;
      const addr = `http://${host}:${port}`;
      autoOpen(addr);
      log(`Starting up ${programName}, serving ${arg}`);
      log(`Available on:
      ${addr}
      Hit CTRL-C to stop the server`);
      dir(this.config);
      // TODO
    });
  }
}
