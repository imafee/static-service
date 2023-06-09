import fs, { promises as fspromise } from 'node:fs';
import path from 'node:path';
import mime from 'mime-types';
import handlebars from 'handlebars';
import { getGlobal } from './util.js';
import dirTpl from '../tpl/directory.js';
import cssreset from '../assets/modern-normalize.css';

const { __dirname, __filename } = getGlobal(import.meta);

export default async function (req, res, config) {
  const nodePath = path.join(config.root, req.url);
  try {
    // route to various resources
    if (!fs.existsSync(nodePath))
      throw `"${nodePath}"\n\n The resource does not exist.`;

    const nodeStat = await fspromise.stat(nodePath);
    res.statusCode = 200;

    if (nodeStat.isDirectory()) {
      const files = fs.readdirSync(nodePath);
      const template = handlebars.compile(dirTpl);
      const dir = path.relative(config.root, nodePath);
      const html = template({
        title: path.basename(nodePath),
        root: config.root,
        files,
        dir: dir ? `/${dir}` : '',
        cssreset,
      });
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(html);
    } else if (nodeStat.isFile()) {
      const contentType = mime.lookup(nodePath);
      if (contentType === false) {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('The mime type does not support,' + req.url);
      } else {
        res.setHeader('Content-Type', contentType);
        fs.createReadStream(nodePath).pipe(res);
      }
    } else if (nodeStat.isSymbolicLink()) {
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.end('this is SymbolicLink,' + req.url);
    } else {
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.end('Unsupported resource format,' + req.url);
    }
  } catch (err) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end(`${err.toString()}\n"${nodePath}"`);
  }
}
