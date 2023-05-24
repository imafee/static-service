import fs, { promises as fspromise } from 'node:fs';
import path from 'node:path';

export default async function (req, res, config) {
  try {
    // route to favicon resource
    if (req.url.toLowerCase() === '/favicon.ico') {
      const buffer = await fspromise.readFile(
        path.resolve('src/assets/favicon.ico')
      );
      res.statusCode = 200;
      res.end(buffer);
      return;
    }

    // route to various resources
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    const nodePath = path.join(config.root, req.url);
    if (!fs.existsSync(nodePath))
      throw `"${nodePath}"\n\n The resource does not exist.`;
    const nodeStat = await fspromise.stat(nodePath);

    if (nodeStat.isDirectory()) {
      res.statusCode = 200;
      res.end('Directory,' + req.url);
      return;
    }
    if (nodeStat.isFile()) {
      res.statusCode = 200;
      res.end('File,' + req.url);
      return;
    }
    if (nodeStat.isSymbolicLink()) {
      res.statusCode = 200;
      res.end('SymbolicLink,' + req.url);
      return;
    }
    res.statusCode = 200;
    res.end('Unsupported resource format,' + req.url);
  } catch (err) {
    // Resource not exist
    res.statusCode = 404;
    res.end(`${err.toString()}`);
  }
}
