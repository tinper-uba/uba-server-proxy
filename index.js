/**
 * proxy server for uba-server
 * Date : 2018-01-04 15:10:52
 */

const Proxy = require("http-proxy-middleware");
const c2k = require("koa2-connect");
const Router = require("koa-router");
const chalk = require("chalk");
const utils = require("./utils");


module.exports = (app, opt) => {
  let proxyOpt = opt;
  let router = new Router();
  for (let i = 0; i < proxyOpt.length; i++) {
    let key = proxyOpt[i];
    router.all(key.router, c2k(Proxy(
      Object.assign({
        logLevel : "debug",
        target: "https://api.github.com/",
        changeOrigin: true,
        onProxyRes: (proxyRes) => {
          proxyRes.headers["Uba-Server-Proxy"] = require("./package.json").version;
        }
        // onProxyReq: (proxyReq, req, res) => {
        //   console.log(chalk.green(`[${utils.getTime()}] [proxy] : Method : ${proxyReq.method} -> Proxy : ${proxyReq.path}`));
        // }
      }, key)
    )));
  }
  app.use(router.routes());
}
