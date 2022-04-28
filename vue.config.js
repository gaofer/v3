const { defineConfig } = require('@vue/cli-service')
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = defineConfig({
  transpileDependencies: true
});

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // eslint-disable-next-line no-undef
        "@": resolve("src"),
      },
    },
  },
};

module.exports = {
  devServer: {
    proxy: {
      //开发环境代理配置  解决跨域问题  即不满足同源策略：协议，域名，端口号有一个不一致
      "/aDao": {
        //用中括号括起来
        //目标服务器地址，代理访问"http://bog.ac"
        target: "http://bog.ac", //从配置文件中获取目标服务器地址
        changeOrigin: true, //开启代理服务器
        pathRewrite: {
          "^/aDao": "",
        },
        timeout: 360000,
      },
    },
  },
};