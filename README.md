# eXpert-Hub

## 声明

本项目  脚手架基于[React Starter Kit](https://www.reactstarterkit.com)，提供服务端渲染，Apollo 等最新技术，集成了 Redux、router、lodash、babel 等工具，配置稳定高效，提高开发效率

## 开始

依赖环境

```
node: >= 6.13
npm: >= 3.10
```

将项目克隆至本地后，先切换到项目根目录下，打开一个终端运行下面这个指令(启动 mock 服务器)

```shell
$ npm install yarn -g
$ yarn
$ node apollo-mock.js
```

接下来再打开一个新的终端窗口，运行：

```shell
$ yarn start
```

耐心等待编译过程, 完成后打开浏览器, 输入http://localhost:3000, 就能看到页面了

## 开发规则

### 组件

* 组件名请以大写字母开头，表述组件的作用，如 Header，StyledButton
* 公有组件写在 src/components 文件夹下，如 Search，这是多个页面都要使用的；私有组件写在对应页面的 components 文件夹下(没有的话自己新建一个)，作为一个内部组件使用
* 每一个页面(routes 文件夹下)的导出文件以 index.js 命名，如果想使用别的名字，请在 package.json 中指定 main 字段

### styled-components

* 如果使用 styled-components，可以在常规组件名前加 Styled 前缀，如 StyledLink
* 如果要结合 antd 组件使用，则一定要将 antd 组件用`utils/HOC.js`中的工具函数`InjectClass`包装起来再传入 styled 函数，否则样式不会生效，如

```javascript
import { InjectClass } from 'utils/HOC'
import styled from 'styled-components'
import { Button } from 'antd'

export const StyledButton = styled(InjectClass(Button))`
  width: 100px;
  background-color: green;
`
```

### 添加新页面

* 如果自己的页面是一级页面，则在 routes 下添加页面文件后，需要在 routes/index.js 中注册，注册规则按照已有的路由类比，相信大家的模仿能力，保存后如果出现 module not found 错误，重启项目即可
* 如果页面是二级页面或多级字页面，则请在对应一级页面下的 children 属性中添加自己的页面，如专家详情就是专家列表的子路由

### 提交代码

* 请在自己的分支上书写代码，命名规则为 feature-名字拼音，如 feature-chaiyunfeng，提交代码时提交到自己的分支，需要 merge 时请提 merge request 到 dev 分支
* 本项目代码检查包括 js 和 css 文件，规则十分严格，所以请每次提交之前先运行指令

```shell
$ yarn run lint
```

并检查报错，如果有错则改正之后再提交，否则 commit 会失败，推荐下载 Eslint 插件和 prettier 插件，并将 prettier 的 format 触发条件设置为保存后自动触发，关于如何设置，请参考 prettier 插件的介绍页面
