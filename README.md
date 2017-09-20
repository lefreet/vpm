# vpm(vue-project-manager)

用于vue项目集成时，做些辅助的预处理操作。目前只实现根据静态菜单数据生成路由文件，可实现懒加载。

# 安装

```bash
$ npm config set registry http://115.29.205.204:10000/npm/npm_strong
$ npm install vpm -g
```

# 使用

### 根据菜单配置，安装，生成路由

基本命令：

```bash
$ vpm install
```

参数说明：

```bash
$ vpm install --help
```

数据格式如下

```js
{
  "data": [{
    "name": "menu1",
    "path": "/menu1",
    "component": "../components/menu1.vue"
  }, {
    "name": "menu2",
    "path": "/menu2",
    "component": "../components/menu2.vue"
  }]
}
```

#### 1. 从接口请求 

```bash
$ npm install -m http://127.0.0.1:8080/static/menus -r src/router/index.js
```

### 2. 配置参数可以写在package.json的`vpm`节点上

```js
{
    "vpm": {
        "menus": "http://127.0.0.1:8080/static/menus",
        "router": "src/router/index.js"
    }
}
```
```bash
$ npm install
```

### 3. 具体示例
下载源码中的demo目录，在该目录下执行

```bash
$ vpm install
$ npm run dev
```

查看`src/router/index.js` 与 原始路由配置`src/router/index-bak.js`可见路由变化。
打开控制台Network面板，访问`http://localhost:8080/#/menu1`，可观察到一个js依赖被加载，点击页面链接跳转到`menu2`，可观察到第二个js依赖被加载。

# 建议

目前只实现了一辅助功能，后面根据具体项目需求可提出
