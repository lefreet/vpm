/**
 * 配置处理
 */

var fs = require('fs')
var log = require('./log')
var axios = require('axios')

var options = {
  stop: function () {
    return Object.keys(this).some(key => {
        if(!this[key]) {
          console.log('\n请在命令中附加或者在packjson.vpm中配置参数' + key + '\n')
          return true
        }
      })

  },
  get: function (commander) {

    return new Promise((resolve, reject) => {

      fs.readFile('package.json', 'utf8', (err, data) => {
        if(err) {

          log('当前目录下不存在package.json文件')

        } else {
          // 不能重写对象方法
          let json = JSON.parse(data)
          let options = json.vpm || {}
          this.package = json
          this.menus = commander.menus || options.menus
          this.router = commander.router || options.router

          if(this.stop()) {
            return
          }

          if(typeof this.menus === 'string') {
            log('开始请求菜单数据')
            axios
              .get(this.menus)
              .then(res => {
                this.menus = res.data.data || []
                log('从接口获取到菜单数据' + this.menus.length + '条')
                resolve(this)
              })
          } else {
            log('从package.json获取到菜单数据' + this.menus.length + '条')
            resolve(this)
          }

        }
      })

    })

  }
}

module.exports = options

// var fs = require('fs');

// try {
//   var json = JSON.parse(fs.readFileSync('package.json'));
// } catch (e) {
//   throw '当前目录下未找到package.json文件'
// }

// var options = json.vrm;

// var stop = function (name) {
//   console.log('\n请在命令中附加或者在packjson.vrm中配置参数' + name);
// }

// module.exports = function (commander) {

//   this.menus = commander.menus || options.menus || stop('menus');

//   this.router = commander.router || options.router || stop('router');

// }