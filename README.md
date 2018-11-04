
模板引入问题: 
刚开始在webpack.config.js中配置了 html-loader相关配置， 结果在使用了webpack-html-plugin后无法正确解析对应的模板。
解决方案删除webpack.config.js关于html-loader， 直接通过requie引入
```
 ${require('html-loader!./templates/test1.html')}
 <%= require('html-loader!./templates/test1.html') %>
```
入口页面热启动问题

webpack调试问题
在vscode中调试配置
```
{
  // 使用 IntelliSense 了解相关属性。 
  // 悬停以查看现有属性的描述。
  // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "启动程序",
      "program": "${workspaceFolder}/webpack.config.js"
    }
  ]
}
```
在浏览器中查看
1.打开地址chrome://inspect/#devices
2.在打开的地址的Target下即可看的需要调试的页面

babel打包问题
1.普通函数被打包成了胖箭头函数
例如data方法打包时被编译成胖箭头函数了，就是变成了 data: ()=>的方式
原因， 引入组件为外层的， .bablerc的配置为内层的。还应在外层配置相应的babelrc文件

2.图片载入问题
配置
```
 test: /\.(gif|png|jpg|woff|svg|ttf|eot)$/, 
            use: [{
              loader:'url-loader',
              options: {
                  limit:500,//当图片小于这个值他会生成一个图片的url 如果是一个大于的他会生成一个base64的图片在js里展示
                  outputPath: 'img/',// 指定打包后的图片位置
                  name:'[name].[ext]?[hash]',//name:'[path][name].[ext]
                  //publicPath:output,
              } 
            }]
          }
```
###3. babel配置问题
当使用@babel/preset-env这个版本是，配置如下， 使用babel-preset-env时， preset中的配置为'env'
```
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "modules": false
      }
    ],
    "react"
  ]
}
```

# webpack academy - Workshop 2018
Learning resources for the webpack academy workshop series for 2018 

## Project Setup

This project assumes you have [NodeJS v8](http://nodejs.org/) or greater installed. You should
also have [npm v5](https://www.npmjs.com/) or greater installed as well (this comes packaged
with Node 8). You'll also need a recent version of [git](https://git-scm.com/) installed
as well.

You may have come to this project from different varying sources. There are a
different series of branches for each workshop/course I've done. To get started with
the project, start with this:

1. [Sign up](https://github.com/join) for a GitHub Account (if you don't already have one)
2. [Fork](https://help.github.com/articles/fork-a-repo/) this repo
3. [Clone](https://help.github.com/articles/cloning-a-repository/) your fork
4. In the directory you cloned the repository, run `git fetch --all`

## Getting Started
These steps will assume that you have `cd`'d in your preferred editor to this repositories cloned location.

1. Install dependencies: `npm install`
2. Enjoy the workshop!

## Contact
* Email: sean.larkin@microsoft.com
* Twitter: [@TheLarkInn](https://twitter.com/thelarkinn)

## Resources
* [Slides](https://docs.google.com/presentation/d/1RuTDSvfaEFBFQ-3OiyxtuPTaGhv-xv7OG4jt5mpIdUw/edit?usp=sharing)
