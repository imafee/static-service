export function getGlobal(meta) {
  const data = meta.url.match(/file:\/\/(.+)\/(.+)/);
  const [, __dirname, __filename] = data;
  return {
    __dirname,
    __filename,
  };
}
