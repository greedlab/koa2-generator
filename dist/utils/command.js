'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.copy = exports.installAllDependencies = exports.installMongoDB = exports.installArtTemplate = exports.installPm2 = exports.installNodemon = exports.installGulp = exports.supportAsync = exports.installEslint = exports.installBabel = exports.installKoa2 = exports.runNpm = exports.run = undefined;

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
                            var cp = child_process.spawn(command, options, { 'stdio': 'inherit' });
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


var runNpm = exports.runNpm = function () {
    var _ref2 = (0, _bluebird.coroutine)(regeneratorRuntime.mark(function _callee2(options) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return run('npm', options);

                    case 2:
                        return _context2.abrupt('return', _context2.sent);

                    case 3:
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

var installKoa2 = exports.installKoa2 = function () {
    var _ref3 = (0, _bluebird.coroutine)(regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.next = 2;
                        return runNpm(['install', '--save', 'koa@next']);

                    case 2:
                        _context3.next = 4;
                        return runNpm(['install', '--save', 'koa-bodyparser@next']);

                    case 4:
                        _context3.next = 6;
                        return runNpm(['install', '--save', 'koa-favicon@next']);

                    case 6:
                        _context3.next = 8;
                        return runNpm(['install', '--save', 'koa-logger@next']);

                    case 8:
                        _context3.next = 10;
                        return runNpm(['install', '--save', 'koa-static@next']);

                    case 10:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    }));

    return function installKoa2() {
        return _ref3.apply(this, arguments);
    };
}();

var installBabel = exports.installBabel = function () {
    var _ref4 = (0, _bluebird.coroutine)(regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _context4.next = 2;
                        return runNpm(['install', '--save-dev', 'babel-core']);

                    case 2:
                        _context4.next = 4;
                        return runNpm(['install', '--save-dev', 'babel-register']);

                    case 4:
                        _context4.next = 6;
                        return runNpm(['install', '--save-dev', 'babel-preset-es2015']);

                    case 6:
                        _context4.next = 8;
                        return runNpm(['install', '--save-dev', 'babel-preset-stage-0']);

                    case 8:
                        _context4.next = 10;
                        return runNpm(['install', '--save-dev', 'babel-polyfill']);

                    case 10:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, this);
    }));

    return function installBabel() {
        return _ref4.apply(this, arguments);
    };
}();

var installEslint = exports.installEslint = function () {
    var _ref5 = (0, _bluebird.coroutine)(regeneratorRuntime.mark(function _callee5() {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        _context5.next = 2;
                        return runNpm(['install', '--save-dev', 'eslint']);

                    case 2:
                        _context5.next = 4;
                        return runNpm(['install', '--save-dev', 'babel-eslint']);

                    case 4:
                        _context5.next = 6;
                        return runNpm(['install', '--save-dev', 'eslint-plugin-react']);

                    case 6:
                        _context5.next = 8;
                        return runNpm(['install', '--save-dev', 'babel-preset-stage-0']);

                    case 8:
                        _context5.next = 10;
                        return runNpm(['install', '--save-dev', 'babel-polyfill']);

                    case 10:
                    case 'end':
                        return _context5.stop();
                }
            }
        }, _callee5, this);
    }));

    return function installEslint() {
        return _ref5.apply(this, arguments);
    };
}();

var supportAsync = exports.supportAsync = function () {
    var _ref6 = (0, _bluebird.coroutine)(regeneratorRuntime.mark(function _callee6() {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
                switch (_context6.prev = _context6.next) {
                    case 0:
                        _context6.next = 2;
                        return runNpm(['install', '--save-dev', 'babel-plugin-transform-async-to-module-method']);

                    case 2:
                    case 'end':
                        return _context6.stop();
                }
            }
        }, _callee6, this);
    }));

    return function supportAsync() {
        return _ref6.apply(this, arguments);
    };
}();

var installGulp = exports.installGulp = function () {
    var _ref7 = (0, _bluebird.coroutine)(regeneratorRuntime.mark(function _callee7() {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
                switch (_context7.prev = _context7.next) {
                    case 0:
                        _context7.next = 2;
                        return runNpm(['install', '--save-dev', 'gulp']);

                    case 2:
                        _context7.next = 4;
                        return runNpm(['install', '--save-dev', 'gulp-babel']);

                    case 4:
                        _context7.next = 6;
                        return runNpm(['install', '--save-dev', 'gulp-changed']);

                    case 6:
                        _context7.next = 8;
                        return runNpm(['install', '--save-dev', 'gulp-sourcemaps']);

                    case 8:
                        _context7.next = 10;
                        return runNpm(['install', '--save-dev', 'gulp-uglify']);

                    case 10:
                        _context7.next = 12;
                        return runNpm(['install', '--save-dev', 'gulp-clean-css']);

                    case 12:
                        _context7.next = 14;
                        return runNpm(['install', '--save-dev', 'gulp-sass']);

                    case 14:
                        _context7.next = 16;
                        return runNpm(['install', '--save-dev', 'gulp-rename']);

                    case 16:
                        _context7.next = 18;
                        return runNpm(['install', '--save-dev', 'gulp-imagemin']);

                    case 18:
                        _context7.next = 20;
                        return runNpm(['install', '--save-dev', 'imagemin-pngquant']);

                    case 20:
                        _context7.next = 22;
                        return runNpm(['install', '--save-dev', 'gulp-livereload']);

                    case 22:
                        _context7.next = 24;
                        return runNpm(['install', '--save-dev', 'run-sequence']);

                    case 24:
                        _context7.next = 26;
                        return runNpm(['install', '--save-dev', 'gulp-uglify']);

                    case 26:
                        _context7.next = 28;
                        return runNpm(['install', '--save-dev', 'gulp-uglify']);

                    case 28:
                    case 'end':
                        return _context7.stop();
                }
            }
        }, _callee7, this);
    }));

    return function installGulp() {
        return _ref7.apply(this, arguments);
    };
}();

var installNodemon = exports.installNodemon = function () {
    var _ref8 = (0, _bluebird.coroutine)(regeneratorRuntime.mark(function _callee8() {
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
                switch (_context8.prev = _context8.next) {
                    case 0:
                        _context8.next = 2;
                        return runNpm(['install', '-g', 'nodemon']);

                    case 2:
                    case 'end':
                        return _context8.stop();
                }
            }
        }, _callee8, this);
    }));

    return function installNodemon() {
        return _ref8.apply(this, arguments);
    };
}();

var installPm2 = exports.installPm2 = function () {
    var _ref9 = (0, _bluebird.coroutine)(regeneratorRuntime.mark(function _callee9() {
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
                switch (_context9.prev = _context9.next) {
                    case 0:
                        _context9.next = 2;
                        return runNpm(['install', '-g', 'pm2']);

                    case 2:
                    case 'end':
                        return _context9.stop();
                }
            }
        }, _callee9, this);
    }));

    return function installPm2() {
        return _ref9.apply(this, arguments);
    };
}();

var installArtTemplate = exports.installArtTemplate = function () {
    var _ref10 = (0, _bluebird.coroutine)(regeneratorRuntime.mark(function _callee10() {
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
                switch (_context10.prev = _context10.next) {
                    case 0:
                        _context10.next = 2;
                        return runNpm(['install', '--save', 'art-template']);

                    case 2:
                    case 'end':
                        return _context10.stop();
                }
            }
        }, _callee10, this);
    }));

    return function installArtTemplate() {
        return _ref10.apply(this, arguments);
    };
}();

var installMongoDB = exports.installMongoDB = function () {
    var _ref11 = (0, _bluebird.coroutine)(regeneratorRuntime.mark(function _callee11() {
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) {
                switch (_context11.prev = _context11.next) {
                    case 0:
                        _context11.next = 2;
                        return runNpm(['install', '--save', 'mongoose']);

                    case 2:
                    case 'end':
                        return _context11.stop();
                }
            }
        }, _callee11, this);
    }));

    return function installMongoDB() {
        return _ref11.apply(this, arguments);
    };
}();

var installAllDependencies = exports.installAllDependencies = function () {
    var _ref12 = (0, _bluebird.coroutine)(regeneratorRuntime.mark(function _callee12() {
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) {
                switch (_context12.prev = _context12.next) {
                    case 0:
                        _context12.next = 2;
                        return installKoa2();

                    case 2:
                        _context12.next = 4;
                        return installBabel();

                    case 4:
                        _context12.next = 6;
                        return supportAsync();

                    case 6:
                        _context12.next = 8;
                        return installEslint();

                    case 8:
                        _context12.next = 10;
                        return installGulp();

                    case 10:
                        _context12.next = 12;
                        return installPm2();

                    case 12:
                        _context12.next = 14;
                        return installNodemon();

                    case 14:
                        _context12.next = 16;
                        return installArtTemplate();

                    case 16:
                        _context12.next = 18;
                        return installMongoDB();

                    case 18:
                    case 'end':
                        return _context12.stop();
                }
            }
        }, _callee12, this);
    }));

    return function installAllDependencies() {
        return _ref12.apply(this, arguments);
    };
}();

var copy = exports.copy = function () {
    var _ref13 = (0, _bluebird.coroutine)(regeneratorRuntime.mark(function _callee13(from, to) {
        var cwd, fromPath, toDirectory;
        return regeneratorRuntime.wrap(function _callee13$(_context13) {
            while (1) {
                switch (_context13.prev = _context13.next) {
                    case 0:
                        if (!(from.length > 0 && to.length > 0)) {
                            _context13.next = 9;
                            break;
                        }

                        cwd = process.cwd();
                        fromPath = path.resolve(cwd, from);
                        toDirectory = path.resolve(cwd, to);

                        console.log('fromPath :' + fromPath);
                        console.log('toDirectory :' + toDirectory);
                        _context13.next = 8;
                        return run('cp', ['-rf', fromPath, toDirectory]);

                    case 8:
                        return _context13.abrupt('return', _context13.sent);

                    case 9:
                    case 'end':
                        return _context13.stop();
                }
            }
        }, _callee13, this);
    }));

    return function copy(_x4, _x5) {
        return _ref13.apply(this, arguments);
    };
}();

/**
 * Created by Bell on 16/8/8.
 */

var path = require('path');
var child_process = require('child_process');
//# sourceMappingURL=command.js.map
