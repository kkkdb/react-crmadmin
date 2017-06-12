# React 后台管理系统
## 概述

利用react+react-router-dom+react-redux完成了后台管理系统的框架搭建，利用redux实现了topBar一级菜单和sideBar二级菜单的交互。

## 遇到问题

写到后来发现SideBar导航栏不在Route下 没法实现history.push 路由的跳转。

有两种解决方案：
  1.把菜单放到每个route页面里面，相当于作为一个组件引入，有点麻烦
  2.把Router置为最顶层，引入antd的Layout，可以参考我的另一个react工程

## 项目运行

```
git clone https://github.com/kkkdb/react-crmadmin.git

cd react-crmadmin

npm install

```

### 编译环境
```
npm start

```


### 线上版本
```
npm run build

```
