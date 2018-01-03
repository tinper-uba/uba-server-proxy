/**
 * proxy server for uba-server
 * Date : 2018-01-03 13:27:59
 */

const Proxy = require("http-proxy-middleware");
const c2k = require("koa2-connect");
const Router = require("koa-router");
const chalk = require("chalk");
const utils = require("./utils");


module.exports = (app, opt) => {
  let router = new Router();
  router.all("*", c2k(Proxy(
    Object.assign({
      target: "https://api.github.com/",
      changeOrigin: true,
      onProxyRes: (proxyRes) => {
        proxyRes.headers["Uba-Server-Proxy"] = require("./package.json").version;
      },
      onProxyReq: (proxyReq, req, res) => {
        console.log(chalk.green(`[${utils.getTime()}] [ProxyServer] : Method : ${proxyReq.method} -> Proxy : ${proxyReq.path}`));
      }
    }, opt)
  )));
  app.use(router.routes());
}
