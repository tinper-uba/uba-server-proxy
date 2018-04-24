/**
 * proxy server for uba-server
 * Date : 2018-04-24 14:09:43
 */

const proxy = require("http-proxy-middleware");

module.exports = (app, opts) => {
  for (let i = 0; i < opts.length; i++) {
    let proxyOpt = opts[i];
    app.use(proxy(proxyOpt.url, proxyOpt.options));
  }
}
