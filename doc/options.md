# program, command and options

## program options

- [-h,--help] Print this list and exit.
- [-v,--version] Print the version and exit.
- [-c,--config] Specify a config file to generate the service process
- [-a,--ip][0.0.0.0] Address to use
- [-p,--port][8080] Port to use. If 0, look for open port.
- [-e,--ext][none] Default file extension if none supplied
- [-o [path]] Open browser window after starting the server.Optionally provide a URL path to open the browser window to.

## `service` command options

- [--tls,--ssl] Enable secure request serving with TLS/SSL (HTTPS)
- [--cert] Path to TLS cert file (default: cert.pem)
- [--key] Path to TLS key file (default: key.pem)
- [--mimetypes] Path to a .types file for custom mimetype definition(overwrite buildin config)
  // request-part
- [--cors[=headers] Enable CORS via the "Access-Control-Allow-Origin" header.Optionally provide CORS headers list separated by commas
- [--gzip][false] Serve gzip files when possible
- [--brotli][false] Serve brotli files when possible.If both brotli and gzip are enabled, brotli takes precedence
- [--username][none] Username for basic authentication.Can also be specified with the env variable NODE_HTTP_SERVER_USERNAME
- [--password][none] Password for basic authentication.Can also be specified with the env variable NODE_HTTP_SERVER_PASSWORD
  // response-part
- [--cache-time][3600] Cache time (max-age) in seconds.To disable caching, use --maxage 0
- [--timeout][120] Connections timeout in seconds.To disable timeout, use --timeout 0
- [--no-dotfiles] Do not show dotfiles
- [--directory] [true] Show directory listings
  // terminal-print-part
- [--silent] Suppress log messages from output.(后续考虑增加打印级别-L 0-3,--verbose)

## `proxy` command options

- [-P,--proxy] Fallback proxy if the request cannot be resolved. e.g.: http://someurl.com
- [--proxy-options] Pass options to proxy using nested dotted objects. e.g.: --proxy-options.secure false
