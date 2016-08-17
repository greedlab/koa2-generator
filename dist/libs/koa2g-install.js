'use strict';

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var installFrontApplication = function () {
    var _ref = (0, _bluebird.coroutine)(regeneratorRuntime.mark(function _callee(directory) {
        var from, result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        from = _path2.default.join(__dirname, '../../node-front-template');
                        _context.next = 3;
                        return copy_util.copyTemplate(from, directory);

                    case 3:
                        process.chdir(directory);
                        _context.next = 6;
                        return command.npmInit();

                    case 6:
                        result = _context.sent;

                        if (!(result == 0)) {
                            _context.next = 10;
                            break;
                        }

                        _context.next = 10;
                        return command.installFrontDependencies();

                    case 10:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function installFrontApplication(_x) {
        return _ref.apply(this, arguments);
    };
}();

var installBackApplication = function () {
    var _ref2 = (0, _bluebird.coroutine)(regeneratorRuntime.mark(function _callee2(directory) {
        var from, result;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        from = _path2.default.join(__dirname, '../../node-back-template');

                        copy_util.copyTemplate(from, directory);
                        process.chdir(directory);
                        _context2.next = 5;
                        return command.npmInit();

                    case 5:
                        result = _context2.sent;

                        if (!(result == 0)) {
                            _context2.next = 9;
                            break;
                        }

                        _context2.next = 9;
                        return command.installBackDependencies();

                    case 9:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function installBackApplication(_x2) {
        return _ref2.apply(this, arguments);
    };
}();

/**
 * install front or back application at the given directory `directory`.
 *
 * @param directory install directory
 * @param end front(default) or back
 */


var installApplication = function () {
    var _ref3 = (0, _bluebird.coroutine)(regeneratorRuntime.mark(function _callee3(directory, end) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        if (!(end === 'back')) {
                            _context3.next = 5;
                            break;
                        }

                        _context3.next = 3;
                        return installBackApplication(directory);

                    case 3:
                        _context3.next = 7;
                        break;

                    case 5:
                        _context3.next = 7;
                        return installFrontApplication(directory);

                    case 7:
                        _context3.next = 9;
                        return updatePackage(directory, _commander2.default.end);

                    case 9:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    }));

    return function installApplication(_x3, _x4) {
        return _ref3.apply(this, arguments);
    };
}();

var updatePackage = function () {
    var _ref4 = (0, _bluebird.coroutine)(regeneratorRuntime.mark(function _callee4(directory, end) {
        var package_file, exists, packageObj;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        package_file = _path2.default.join(directory, 'package.json');

                        debug('target package: ' + package_file);
                        _context4.next = 4;
                        return path_util.existedFile(package_file);

                    case 4:
                        exists = _context4.sent;

                        if (!exists) {
                            _context4.next = 17;
                            break;
                        }

                        _context4.t0 = JSON;
                        _context4.next = 9;
                        return _fs2.default.readFileAsync(package_file);

                    case 9:
                        _context4.t1 = _context4.sent;
                        packageObj = _context4.t0.parse.call(_context4.t0, _context4.t1);

                        packageObj.main = 'dist/app.js';
                        if (end === 'back') {
                            packageObj.scripts.develop = 'PORT=4002 DEBUG=' + packageObj.name + '* nodemon -w dist -e js dist/app.js';
                            packageObj.scripts.release = 'PORT=4002 NODE_ENV=release pm2 start dist/app.js  -i 0 --name ' + packageObj.name + ' --watch';
                        } else {
                            packageObj.scripts.develop = 'PORT=4001 DEBUG=' + packageObj.name + '* nodemon -w dist -e js,html,css,jsx dist/app.js';
                            packageObj.scripts.release = 'PORT=4001 NODE_ENV=release pm2 start dist/app.js  -i 0 --name ' + packageObj.name + ' --watch';
                        }
                        _context4.next = 15;
                        return _fs2.default.writeFileAsync(package_file, JSON.stringify(packageObj, null, 4));

                    case 15:
                        _context4.next = 18;
                        break;

                    case 17:
                        console.error('aborting! because ' + package_file + ' is not existed');

                    case 18:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, this);
    }));

    return function updatePackage(_x5, _x6) {
        return _ref4.apply(this, arguments);
    };
}();

var main = function () {
    var _ref5 = (0, _bluebird.coroutine)(regeneratorRuntime.mark(function _callee5() {
        var directory, existed, package_file, exists;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        _context5.prev = 0;
                        directory = _path2.default.resolve(_commander2.default.args.shift() || '.');

                        debug('target directory: ' + directory);
                        _context5.next = 5;
                        return path_util.existedDirectory(directory);

                    case 5:
                        existed = _context5.sent;

                        if (existed) {
                            _context5.next = 9;
                            break;
                        }

                        _context5.next = 9;
                        return path_util.mkdir(directory);

                    case 9:
                        package_file = _path2.default.join(directory, 'package.json');

                        debug('target package: ' + package_file);

                        _context5.next = 13;
                        return path_util.existedFile(package_file);

                    case 13:
                        exists = _context5.sent;

                        if (!exists) {
                            _context5.next = 23;
                            break;
                        }

                        if (!_commander2.default.force) {
                            _context5.next = 20;
                            break;
                        }

                        _context5.next = 18;
                        return installApplication(directory, _commander2.default.end);

                    case 18:
                        _context5.next = 21;
                        break;

                    case 20:
                        console.error('aborting! because ' + package_file + ' is existed');

                    case 21:
                        _context5.next = 25;
                        break;

                    case 23:
                        _context5.next = 25;
                        return installApplication(directory, _commander2.default.end);

                    case 25:
                        _context5.next = 30;
                        break;

                    case 27:
                        _context5.prev = 27;
                        _context5.t0 = _context5['catch'](0);

                        console.error(_context5.t0);

                    case 30:
                        process.exit();

                    case 31:
                    case 'end':
                        return _context5.stop();
                }
            }
        }, _callee5, this, [[0, 27]]);
    }));

    return function main() {
        return _ref5.apply(this, arguments);
    };
}();

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _path3 = require('../utils/path.js');

var path_util = _interopRequireWildcard(_path3);

var _command = require('../utils/command.js');

var command = _interopRequireWildcard(_command);

var _copy = require('../utils/copy');

var copy_util = _interopRequireWildcard(_copy);

var _package = require('../../package.json');

var _package2 = _interopRequireDefault(_package);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_bluebird2.default.promisifyAll(_fs2.default);

var version = _package2.default.version;
var debug = (0, _debug2.default)('koa2-generator:koa2g-install');

_commander2.default.version(version).usage('[options] [dir](defaults to ./)').option('-e, --end [end]', 'front(front end) or back(back end). (defaults to front)').option('-f, --force', 'force on package.json is existed').description('generate front or back end template base on koa2').parse(process.argv);
main();
//# sourceMappingURL=koa2g-install.js.map
