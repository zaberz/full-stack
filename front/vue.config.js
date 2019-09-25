let apiUrl = process.env.VUE_APP_API_DOMAIN;
let apiBasePath = process.env.VUE_APP_API_BASE_PATH;

let proxyObj = {};
let proxyPath = apiBasePath;

proxyObj[proxyPath] = {
  target: apiUrl,
  changeOrigin: true,
  ws: true,
  pathRewrite: {
    [`^${proxyPath}`]: "/"
  }
};

console.log(proxyObj);
module.exports = {
  devServer: {
    // port: port,
    open: true,
    disableHostCheck: true,
    proxy: proxyObj,
  },
  configureWebpack: {}
};
