# DEVELOP

## init

```
$ npm init
```

## tools

```
npm install --save commander
npm install --save mkdirp
npm install --save sorted-object
```

## koa2

```
npm install --save koa@next
```

## babel

```
npm install --save-dev babel-core
npm install --save-dev babel-register
npm install --save-dev babel-preset-es2015
npm install --save-dev babel-preset-stage-0
npm install --save-dev babel-polyfill
```

## eslint

```
npm install --save-dev eslint
npm install --save-dev babel-eslint
```

## node.js 支持 async

```
npm install --save-dev babel-plugin-transform-async-to-module-method
```

.babelrc

```
{
"plugins": [
        ["transform-async-to-module-method", {
            "module": "bluebird",
            "method": "coroutine"
        }]
    ]
}    
```

## gulp

```
npm install --save-dev gulp gulp-babel gulp-changed gulp-sourcemaps gulp-rename gulp-plumber run-sequence
```

## other

```
npm install --save bluebird
```

## WebStorm

* `Preferences > Languages & Frameworks > Node.js and NPm > enable v5.11.1`
* `Preferences > Languages & Frameworks > JavaScript > JavaScript language version > ECMAScript 6`
* `Preferences > Languages & Frameworks > JavaScript > Code Quality Tools > ESLint > Enable`

