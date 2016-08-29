'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.installBackDependencies = exports.installFrontDependencies = exports.installPm2 = exports.installNodemon = exports.installDebug = exports.npmInit = exports.runNpm = exports.run = undefined;

var _bluebird = require('bluebird');

/**
 * run shell
 *
 * @param command
 * @param options
 * @returns {Promise}
 */
var run = exports.run = function () {
    var _ref = (0, _bluebird.coroutine)(regeneratorRuntime.mark(function _callee(command, options) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        return _context.abrupt('return', new Promise(function (resolve, reject) {
                            var cp = _child_process2.default.spawn(command, options, { 'stdio': 'inherit' });
                            cp.on('close', function (code) {
                                resolve(code);
                            });
                        }));

                    case 1:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function run(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

/**
 * npm install dependence
 *
 * @param command
 * @param options
 * @returns {Promise}
 */
/**
 * Created by Bell on 16/8/8.
 */

var runNpm = exports.runNpm = function () {
    var _ref2 = (0, _bluebird.coroutine)(regeneratorRuntime.mark(function _callee2(options) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        return _context2.abrupt('return', run('npm', options));

                    case 1:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function runNpm(_x3) {
        return _ref2.apply(this, arguments);
    };
}();

/**
 * npm init
 */


var npmInit = exports.npmInit = function () {
    var _ref3 = (0, _bluebird.coroutine)(regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        return _context3.abrupt('return', runNpm(['init']));

                    case 1:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    }));

    return function npmInit() {
        return _ref3.apply(this, arguments);
    };
}();

var installDebug = exports.installDebug = function () {
    var _ref4 = (0, _bluebird.coroutine)(regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        return _context4.abrupt('return', runNpm(['install', '--save', 'debug']));

                    case 1:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, this);
    }));

    return function installDebug() {
        return _ref4.apply(this, arguments);
    };
}();

var installNodemon = exports.installNodemon = function () {
    var _ref5 = (0, _bluebird.coroutine)(regeneratorRuntime.mark(function _callee5() {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        return _context5.abrupt('return', runNpm(['install', '-g', 'nodemon']));

                    case 1:
                    case 'end':
                        return _context5.stop();
                }
            }
        }, _callee5, this);
    }));

    return function installNodemon() {
        return _ref5.apply(this, arguments);
    };
}();

var installPm2 = exports.installPm2 = function () {
    var _ref6 = (0, _bluebird.coroutine)(regeneratorRuntime.mark(function _callee6() {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
                switch (_context6.prev = _context6.next) {
                    case 0:
                        return _context6.abrupt('return', runNpm(['install', '-g', 'pm2']));

                    case 1:
                    case 'end':
                        return _context6.stop();
                }
            }
        }, _callee6, this);
    }));

    return function installPm2() {
        return _ref6.apply(this, arguments);
    };
}();

var installFrontDependencies = exports.installFrontDependencies = function () {
    var _ref7 = (0, _bluebird.coroutine)(regeneratorRuntime.mark(function _callee7() {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
                switch (_context7.prev = _context7.next) {
                    case 0:
                        _context7.next = 2;
                        return runNpm(['install', '-g', 'node-gyp']);

                    case 2:
                        _context7.next = 4;
                        return runNpm(['install', '--save', 'koa@next']);

                    case 4:
                        _context7.next = 6;
                        return runNpm(['install', '--save', 'koa-bodyparser@next']);

                    case 6:
                        _context7.next = 8;
                        return runNpm(['install', '--save', 'koa-favicon@next']);

                    case 8:
                        _context7.next = 10;
                        return runNpm(['install', '--save', 'koa-logger@next']);

                    case 10:
                        _context7.next = 12;
                        return runNpm(['install', '--save', 'koa-static@next']);

                    case 12:
                        _context7.next = 14;
                        return runNpm(['install', '--save', 'babel-polyfill']);

                    case 14:
                        _context7.next = 16;
                        return runNpm(['install', '--save-dev', 'babel-core']);

                    case 16:
                        _context7.next = 18;
                        return runNpm(['install', '--save-dev', 'babel-eslint']);

                    case 18:
                        _context7.next = 20;
                        return runNpm(['install', '--save-dev', 'babel-preset-es2015']);

                    case 20:
                        _context7.next = 22;
                        return runNpm(['install', '--save-dev', 'babel-preset-stage-0']);

                    case 22:
                        _context7.next = 24;
                        return runNpm(['install', '--save-dev', 'babel-plugin-transform-async-to-module-method']);

                    case 24:
                        _context7.next = 26;
                        return runNpm(['install', '--save-dev', 'eslint']);

                    case 26:
                        _context7.next = 28;
                        return runNpm(['install', '--save-dev', 'eslint-plugin-react']);

                    case 28:
                        _context7.next = 30;
                        return runNpm(['install', '--save-dev', 'gulp']);

                    case 30:
                        _context7.next = 32;
                        return runNpm(['install', '--save-dev', 'gulp-babel']);

                    case 32:
                        _context7.next = 34;
                        return runNpm(['install', '--save-dev', 'gulp-changed']);

                    case 34:
                        _context7.next = 36;
                        return runNpm(['install', '--save-dev', 'gulp-sourcemaps']);

                    case 36:
                        _context7.next = 38;
                        return runNpm(['install', '--save-dev', 'gulp-uglify']);

                    case 38:
                        _context7.next = 40;
                        return runNpm(['install', '--save-dev', 'gulp-clean-css']);

                    case 40:
                        _context7.next = 42;
                        return runNpm(['install', '--save-dev', 'gulp-sass']);

                    case 42:
                        _context7.next = 44;
                        return runNpm(['install', '--save-dev', 'gulp-rename']);

                    case 44:
                        _context7.next = 46;
                        return runNpm(['install', '--save-dev', 'gulp-imagemin']);

                    case 46:
                        _context7.next = 48;
                        return runNpm(['install', '--save-dev', 'gulp-plumber']);

                    case 48:
                        _context7.next = 50;
                        return runNpm(['install', '--save-dev', 'gulp-livereload']);

                    case 50:
                        _context7.next = 52;
                        return runNpm(['install', '--save-dev', 'gulp-react']);

                    case 52:
                        _context7.next = 54;
                        return runNpm(['install', '--save-dev', 'imagemin-pngquant']);

                    case 54:
                        _context7.next = 56;
                        return runNpm(['install', '--save-dev', 'imagemin-gifsicle']);

                    case 56:
                        _context7.next = 58;
                        return runNpm(['install', '--save-dev', 'run-sequence']);

                    case 58:
                        _context7.next = 60;
                        return runNpm(['install', '--save', 'art-template']);

                    case 60:
                        _context7.next = 62;
                        return runNpm(['install', '--save', 'request']);

                    case 62:
                        _context7.next = 64;
                        return installDebug();

                    case 64:
                        _context7.next = 66;
                        return installNodemon();

                    case 66:
                        _context7.next = 68;
                        return installPm2();

                    case 68:
                    case 'end':
                        return _context7.stop();
                }
            }
        }, _callee7, this);
    }));

    return function installFrontDependencies() {
        return _ref7.apply(this, arguments);
    };
}();

var installBackDependencies = exports.installBackDependencies = function () {
    var _ref8 = (0, _bluebird.coroutine)(regeneratorRuntime.mark(function _callee8() {
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
                switch (_context8.prev = _context8.next) {
                    case 0:
                        _context8.next = 2;
                        return runNpm(['install', '-g', 'node-gyp']);

                    case 2:
                        _context8.next = 4;
                        return runNpm(['install', '--save', 'koa@next']);

                    case 4:
                        _context8.next = 6;
                        return runNpm(['install', '--save', 'koa-bodyparser@next']);

                    case 6:
                        _context8.next = 8;
                        return runNpm(['install', '--save', 'koa-logger@next']);

                    case 8:
                        _context8.next = 10;
                        return runNpm(['install', '--save', 'koa-router@next']);

                    case 10:
                        _context8.next = 12;
                        return runNpm(['install', '--save', 'koa-convert']);

                    case 12:
                        _context8.next = 14;
                        return runNpm(['install', '--save', 'babel-polyfill']);

                    case 14:
                        _context8.next = 16;
                        return runNpm(['install', '--save-dev', 'babel-core']);

                    case 16:
                        _context8.next = 18;
                        return runNpm(['install', '--save-dev', 'babel-eslint']);

                    case 18:
                        _context8.next = 20;
                        return runNpm(['install', '--save-dev', 'babel-preset-es2015']);

                    case 20:
                        _context8.next = 22;
                        return runNpm(['install', '--save-dev', 'babel-preset-stage-0']);

                    case 22:
                        _context8.next = 24;
                        return runNpm(['install', '--save-dev', 'babel-plugin-transform-async-to-module-method']);

                    case 24:
                        _context8.next = 26;
                        return runNpm(['install', '--save-dev', 'eslint']);

                    case 26:
                        _context8.next = 28;
                        return runNpm(['install', '--save-dev', 'eslint-plugin-react']);

                    case 28:
                        _context8.next = 30;
                        return runNpm(['install', '--save-dev', 'gulp']);

                    case 30:
                        _context8.next = 32;
                        return runNpm(['install', '--save-dev', 'gulp-babel']);

                    case 32:
                        _context8.next = 34;
                        return runNpm(['install', '--save-dev', 'gulp-changed']);

                    case 34:
                        _context8.next = 36;
                        return runNpm(['install', '--save-dev', 'gulp-sourcemaps']);

                    case 36:
                        _context8.next = 38;
                        return runNpm(['install', '--save-dev', 'gulp-watch']);

                    case 38:
                        _context8.next = 40;
                        return runNpm(['install', '--save-dev', 'gulp-rename']);

                    case 40:
                        _context8.next = 42;
                        return runNpm(['install', '--save-dev', 'gulp-plumber']);

                    case 42:
                        _context8.next = 44;
                        return runNpm(['install', '--save-dev', 'run-sequence']);

                    case 44:
                        _context8.next = 46;
                        return runNpm(['install', '--save', 'mongoose']);

                    case 46:
                        _context8.next = 48;
                        return runNpm(['install', '--save', 'redis']);

                    case 48:
                        _context8.next = 50;
                        return runNpm(['install', '--save', 'koa-passport@next']);

                    case 50:
                        _context8.next = 52;
                        return runNpm(['install', '--save', 'passport-local']);

                    case 52:
                        _context8.next = 54;
                        return runNpm(['install', '--save', 'jsonwebtoken']);

                    case 54:
                        _context8.next = 56;
                        return runNpm(['install', '--save', 'bcrypt']);

                    case 56:
                        _context8.next = 58;
                        return runNpm(['install', '--save', 'bluebird']);

                    case 58:
                        _context8.next = 60;
                        return installDebug();

                    case 60:
                        _context8.next = 62;
                        return installNodemon();

                    case 62:
                        _context8.next = 64;
                        return installPm2();

                    case 64:
                    case 'end':
                        return _context8.stop();
                }
            }
        }, _callee8, this);
    }));

    return function installBackDependencies() {
        return _ref8.apply(this, arguments);
    };
}();

var _child_process = require('child_process');

var _child_process2 = _interopRequireDefault(_child_process);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=command.js.map
