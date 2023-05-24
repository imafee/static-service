import http from 'node:http';
import serverConfig from './const/serverConfig.js';
import autoOpen from './helper/openUrl.js';
import route from './helper/route.js';

export class Server {
  constructor(env) {
    this.config = Object.assign({}, serverConfig, env);
  }
  start() {
    const { host, port } = this.config;
    const server = http.createServer((req, res) => {
      route(req, res, this.config);
    });
    server.listen(port, host, () => {
      const { programName, arg } = this.config.env;
      const { log, dir } = console;
      const addr = `http://${host}:${port}/${arg}`;
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
