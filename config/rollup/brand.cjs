const fs = require('node:fs');
const pkg = require('../../package.json');
const licenseContent = fs.readFileSync('LICENSE', 'utf8');

const { name, version, description, author, bugs, homepage, license } = pkg;

const banner = `/*!
 * ${name} v${version}
 * ${description}
 * ${licenseContent}
 */
`;

const footer = `/*!
 * Author: ${author}
 * Issue: ${bugs.url}
 * Homepage: ${homepage}
 */
`;

module.exports = { banner, footer };
