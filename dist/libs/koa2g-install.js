'use strict';

var _bluebird = require('bluebird');

/**
 * install application at the given directory `directory`.
 *
 * @param directory
 */
var installApplication = function () {
    var _ref = (0, _bluebird.coroutine)(regeneratorRuntime.mark(function _callee3(directory) {
        var _this = this;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.prev = 0;
                        return _context3.delegateYield(regeneratorRuntime.mark(function _callee2() {
                            var from, to, files;
                            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                while (1) {
                                    switch (_context2.prev = _context2.next) {
                                        case 0:
                                            from = path.join(__dirname, '../template');
                                            // let to = path.join(directory,'src');

                                            to = directory;

                                            console.log('from: ' + from);
                                            console.log('to: ' + to);

                                            _context2.next = 6;
                                            return path_util.readdir(from);

                                        case 6:
                                            files = _context2.sent;

                                            files.forEach(function () {
                                                var _ref2 = (0, _bluebird.coroutine)(regeneratorRuntime.mark(function _callee(item) {
                                                    var fromPath;
                                                    return regeneratorRuntime.wrap(function _callee$(_context) {
                                                        while (1) {
                                                            switch (_context.prev = _context.next) {
                                                                case 0:
                                                                    fromPath = path.join(from, item);

                                                                    command.copy(fromPath, to);

                                                                case 2:
                                                                case 'end':
                                                                    return _context.stop();
                                                            }
                                                        }
                                                    }, _callee, this);
                                                }));

                                                return function (_x2) {
                                                    return _ref2.apply(this, arguments);
                                                };
                                            }());

                                            // process.chdir(directory);
                                            // let cwd = process.cwd();
                                            // console.log('cwd: ' + cwd);
                                            // let result = await command.runNpm(['init']);
                                            // if (result == 0) {
                                            //     await command.installAllDependencies();
                                            // }

                                        case 8:
                                        case 'end':
                                            return _context2.stop();
                                    }
                                }
                            }, _callee2, _this);
                        })(), 't0', 2);

                    case 2:
                        _context3.next = 7;
                        break;

                    case 4:
                        _context3.prev = 4;
                        _context3.t1 = _context3['catch'](0);

                        console.error(_context3.t1);

                    case 7:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this, [[0, 4]]);
    }));

    return function installApplication(_x) {
        return _ref.apply(this, arguments);
    };
}();

var main = function () {
    var _ref3 = (0, _bluebird.coroutine)(regeneratorRuntime.mark(function _callee4() {
        var directory, existed, package_file, exists;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        directory = process.cwd();

                        if (program.directory && program.directory.length > 0) {
                            directory = path.resolve(directory, program.directory);
                        }
                        console.log('directory: ' + directory);
                        _context4.prev = 3;
                        _context4.next = 6;
                        return path_util.existedDirectory(directory);

                    case 6:
                        existed = _context4.sent;

                        if (existed) {
                            _context4.next = 10;
                            break;
                        }

                        _context4.next = 10;
                        return path_util.mkdir(directory);

                    case 10:
                        package_file = path.join(directory, 'package.json');

                        console.log('package: ' + package_file);
                        _context4.prev = 12;
                        _context4.next = 15;
                        return path_util.existedFile(package_file);

                    case 15:
                        exists = _context4.sent;

                        if (!(exists && !program.force)) {
                            _context4.next = 25;
                            break;
                        }

                        if (!program.force) {
                            _context4.next = 22;
                            break;
                        }

                        _context4.next = 20;
                        return installApplication(directory);

                    case 20:
                        _context4.next = 23;
                        break;

                    case 22:
                        console.error('aborting! because ' + package_file + ' is existed');

                    case 23:
                        _context4.next = 27;
                        break;

                    case 25:
                        _context4.next = 27;
                        return installApplication(directory);

                    case 27:
                        _context4.next = 32;
                        break;

                    case 29:
                        _context4.prev = 29;
                        _context4.t0 = _context4['catch'](12);

                        console.error(_context4.t0);

                    case 32:
                        _context4.next = 37;
                        break;

                    case 34:
                        _context4.prev = 34;
                        _context4.t1 = _context4['catch'](3);

                        console.error(_context4.t1);

                    case 37:
                        process.exit();

                    case 38:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, this, [[3, 34], [12, 29]]);
    }));

    return function main() {
        return _ref3.apply(this, arguments);
    };
}();

var _path = require('../utils/path.js');

var path_util = _interopRequireWildcard(_path);

var _command = require('../utils/command.js');

var command = _interopRequireWildcard(_command);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var program = require('commander');
var path = require('path');
var fs = require('fs');
var child_process = require('child_process');

var pkg = require('../../package.json');
var version = pkg.version;

program.version(version).usage('[options]').option('-d, --directory [directory]', 'the target directory (defaults to ./)').option('-f, --force', 'force on package.json is existed').parse(process.argv);

main();
//# sourceMappingURL=koa2g-install.js.map
