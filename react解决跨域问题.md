react跨域

​	当前版本3.4.1 版本很重要，如何不符，请查看最新版本api

​	首先create-react-app 名字

​	创建一个项目 然后 在package.json配置

​	1. 第一种解决方式 设置统一的代理域名 缺点，只能请求这个单一 的域名数据

```json
"proxy":"http://xxx.xx.com"
```

 2. 第二种 （推荐）

     1. [官方文档说明中有的方式](https://github.com/facebook/create-react-app/blob/master/docusaurus/docs/proxying-api-requests-in-development.md)

     2. `npm install http-proxy-middleware -D`

     3. 在src 文件夹中创建一个setupProxy.js文件

     4. ```react
        const { createProxyMiddleware } = require('http-proxy-middleware');
        
        module.exports = function(app) {
          app.use(
            '/api',
            // 此处使用该中间件，是一个工厂函数
            createProxyMiddleware({
              // 目标域名端口
              target: 'http://localhost:5000',
              // 是否开启跨域
              changeOrigin: true,
              // 更多api 请查看上文github官网
            })
          );
        };
        ```

        

    其实还有一种就是需要使用  **`npm run eject`**

    先将项目的webpack文件显示出来或者自己在node_model中寻找

    react-script 这个包中修改，不过我目前版本16.13.1中已经修改了，俺也不知道咋弄的了