# node-front-template

generate koa2 front or back end template

English | [中文](README-CN.md)

## install

### install from npm

```
$ npm install -g koa2-generator
$ koa2g --help
```

### install from source code

```
$ git clone --recursive https://github.com/greedlab/koa2-generator.git
$ cd koa2-generator
$ npm install
$ gulp build
$ ./dist/bin/koa2g --help
```

## usage

### install front end template

```
koa2g install ~/test/front/
```

### install back end template

```
koa2g install -e back ~/test/back/
```

### update dependencies of front end

```
koa2g update ~/test/front/
```

### update dependencies of back end

```
koa2g update -e front ~/test/back/
```