# node-front-template

生成前后端的 koa2 模板

[English](README.md) | 中文

## 安装

### 通过 npm 安装

```
$ npm install -g koa2-generator
$ koa2g --help
```

### 通过源码安装

```
$ git clone --recursive https://github.com/greedlab/koa2-generator.git
$ npm install
$ gulp build
$ ./dist/bin/koa2g --help
```

## 使用

### 安装前端模板

```
koa2g install ~/test/front/
```

### 安装后端模板

```
koa2g install -e back ~/test/back/
```

### 更新前端依赖

```
koa2g update ~/test/front/
```

### 更新后端依赖

```
koa2g update -e front ~/test/back/
```