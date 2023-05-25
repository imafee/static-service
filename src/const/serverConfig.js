export default {
  port: 8080,
  host: '0.0.0.0',
  root: process.cwd(), // 服务根目录
  compressSupport: /\b(gzip|deflate|brotli)\b/gi, // 传输压缩的类型
  compressType: /\b(html|css|js|md|txt|json)\b/i, // 传输压缩的目标
  // 缓存策略
  cache: {
    maxAge: 24 * 60 * 60,
    expires: true,
    cacheControl: true,
    lastModified: true,
    etag: true,
  },
};
