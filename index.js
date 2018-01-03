/**
 * proxy server for uba-server
 * Date : 2018-01-03 10:18:32
 */

const Proxy = require("http-proxy-middleware");
const c2k = require("koa2-connect");
const Router = require("koa-router");
// const bodyParser = require("koa-bodyparser");


module.exports = (app, opt) => {
  let router = new Router();
  router.all("*", c2k(Proxy({
    target: "https://cnodejs.org",
    changeOrigin: true,
    onProxyRes: (proxyRes) => {
      proxyRes.headers["Uba-Server-Proxy"] = require("./package.json").version;
    },
    onProxyReq: (proxyReq, req, res) => {
      console.log(`${proxyReq.method} - ${proxyReq.path}`);
    }
  })));
  app.use(router.routes());
  // app.use(bodyParser());
}
