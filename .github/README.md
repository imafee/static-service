# static-service

![badge-release](https://img.shields.io/static/v1?label=&labelColor=gray&message=semantic-release&color=gray&style=flat-square&logo=semantic-release&logoColor=white&link=https://github.com&link=https://npmjs.org) ![badge-commit](https://img.shields.io/static/v1?label=&labelColor=gray&message=conventional-commits&color=gray&style=flat-square&logo=conventionalcommits&logoColor=white&link=https://github.com&link=https://npmjs.org) ![badge-nodejs](https://img.shields.io/static/v1?label=nodejs&labelColor=gray&message=14&color=gray&style=flat-square&logo=node.js&logoColor=white&link=https://github.com&link=https://npmjs.org) ![badge-github-latest](https://img.shields.io/static/v1?logo=github&logoColor=white&label=github@latest&labelColor=gray&message=1.0.0&color=green&style=flat-square&link=https://)
![poster](../doc/img/poster.png)

`static-service` is a zero-configuration command-line static HTTP server, and also a high-performance middleware.
It is powerful enough for production,local development,testing and easy to learn usage.

## Running program in CLI

```shell
# as binary
npm install --global static-service # Global installing to use
static-service [path] [options] # By default，visit http://localhost:8080 to view your server
```

[path] defaults to ./public if the folder exists, and ./ otherwise.

see [options](../doc/option.md)

## Running middleware in Nodejs

```shell
npm install --save static-service # add to npm package.dependency
```

see [interfaces](../doc/interface.md)

## Contributor's Guide

Clone repository,checkout,install,developing...

```
npm i
npm start
```

welcome to commit your PRs.

<!-- ## Troubleshooting

For common issues and help troubleshooting your configuration, see [Troubleshooting](http://). -->

## License

see [MIT License]("./LICENSE")
