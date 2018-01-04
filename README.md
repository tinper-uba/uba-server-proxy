# uba-server-proxy

[![npm version](https://img.shields.io/npm/v/uba-server-proxy.svg)](https://www.npmjs.com/package/uba-server-proxy)
[![devDependency Status](https://img.shields.io/david/dev/tinper-uba/uba-server-proxy.svg)](https://david-dm.org/tinper-uba/uba-server-proxy#info=devDependencies)
[![NPM downloads](http://img.shields.io/npm/dm/uba-server-proxy.svg?style=flat)](https://npmjs.org/package/uba-server-proxy)

---
[![NPM](https://nodei.co/npm/uba-server-proxy.png)](https://nodei.co/npm/uba-server-proxy/)
---

# Installation

```bash
$ npm install uba-server uba-server-proxy -D
```

# Usage

open `uba.config.js` file 
```js
plugins: {
    proxy: [{
          router : "/api/*",
          target: "https://cnodejs.org"
        },{
          router : ["/users/*","/orgs/*"],
          target: "https://api.github.com"
        }]
}
```

> Look at more https://www.npmjs.com/package/http-proxy-middleware#options


