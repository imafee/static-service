import path from 'node:path';
import { readFileSync } from 'node:fs';
import { program, Command } from 'commander';
const importmeta = import.meta.url.match(/file:\/\/(.+)\/(.+)/);
const [, __dirname, __filename] = importmeta;
const { Server } = await import(
  process.env.from === 'cli' ? '../dist/bundle.min.mjs' : '../src/api.js'
);

const pkg = readFileSync(path.resolve(__dirname, '../package.json'));
const { bin, main, name } = JSON.parse(pkg);
process.ENV = {
  npmName: name,
  programName: Object.keys(bin)[0],
  binPath: Object.values(bin)[0],
  mainPath: main,
};

// 定义commands
program
  .version('0.0.0')
  .description('A simple zero-configuration command-line http static server.')
  .argument('[servePath]', 'Serve path', '.')
  .option(
    '-c,--config <configPath...>',
    'Specify a config file to generate the service process'
  )
  .option('--ip <address>', 'Specify a address to use')
  .option('--port <port>', 'Port to use. If 0, look for open port')
  .option('--ext <ext>', 'Default file extension if none supplied')
  .option(
    '--open [url]',
    'Open browser window after starting the server.Optionally provide a URL path to open the browser window to.'
  )
  .option(
    '--mimetypes [string]',
    'Path to a .types file for custom mimetype definition(overwrite buildin config)'
  )
  .action((arg, opts) => {
    const { npmName, programName, binPath, mainPath } = process.ENV;
    const server = new Server({
      env: { npmName, programName, binPath, mainPath, opts, arg },
    });
    server.start();
  });

const proxy = new Command('proxy');
proxy
  .description('http proxy')
  .option(
    '--proxy [string]',
    'Fallback proxy if the request cannot be resolved. e.g.: http://someurl.com'
  )
  .action((args, options) => {
    // TODO
  });

program.addCommand(proxy);

program.parse();
