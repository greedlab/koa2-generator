'use strict';

var _bluebird = require('bluebird');

var updateApplication = function () {
    var _ref = (0, _bluebird.coroutine)(regeneratorRuntime.mark(function _callee(directory, end) {
        var package_file, exists, cwd;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        package_file = _path2.default.join(directory, 'package.json');

                        debug('target package: ' + package_file);
                        _context.next = 4;
                        return path_util.existedFile(package_file);

                    case 4:
                        exists = _context.sent;

                        if (!exists) {
                            _context.next = 18;
                            break;
                        }

                        process.chdir(directory);
                        cwd = process.cwd();

                        debug('cwd: ' + cwd);

                        if (!(end === 'back')) {
                            _context.next = 14;
                            break;
                        }

                        _context.next = 12;
                        return command.installBackDependencies();

                    case 12:
                        _context.next = 16;
                        break;

                    case 14:
                        _context.next = 16;
                        return command.installFrontDependencies();

                    case 16:
                        _context.next = 19;
                        break;

                    case 18:
                        console.error('aborting! because ' + package_file + ' is not existed');

                    case 19:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function updateApplication(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var main = function () {
    var _ref2 = (0, _bluebird.coroutine)(regeneratorRuntime.mark(function _callee2() {
        var directory;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.prev = 0;
                        directory = _path2.default.resolve(_commander2.default.args.shift() || '.');

                        debug('target directory: ' + directory);
                        _context2.next = 5;
                        return updateApplication(directory);

                    case 5:
                        _context2.next = 10;
                        break;

                    case 7:
                        _context2.prev = 7;
                        _context2.t0 = _context2['catch'](0);

                        console.error(_context2.t0);

                    case 10:
                        process.exit();

                    case 11:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this, [[0, 7]]);
    }));

    return function main() {
        return _ref2.apply(this, arguments);
    };
}();

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _package = require('../../package.json');

var _package2 = _interopRequireDefault(_package);

var _path3 = require('../utils/path.js');

var path_util = _interopRequireWildcard(_path3);

var _command = require('../utils/command.js');

var command = _interopRequireWildcard(_command);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = (0, _debug2.default)('koa2-generator:koa2g-update');
var version = _package2.default.version;

_commander2.default.version(version).usage('[options] [dir](defaults to ./)').option('-e, --end [end]', 'front(front end) or back(back end). (defaults to front)').description('update dependencies for the project').parse(process.argv);

main();
//# sourceMappingURL=koa2g-update.js.map
