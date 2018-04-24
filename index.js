/**
 * proxy server for uba-server
 * Date : 2018-04-24 15:31:03
 */

const proxy = require('http-proxy-middleware');

module.exports = (app, opts) => {
  for (let i = 0; i < opts.length; i++) {
    let proxyOpt = opts[i];
    let options = Object.assign({
      "changeOrigin": true,
      "logLevel": "debug",
      onProxyRes: (proxyRes) => {
        proxyRes.headers["Uba-Server-Proxy"] = require("./package.json").version;
      }
    }, proxyOpt.options);
    app.use(proxy(proxyOpt.url, options));
  }
}
