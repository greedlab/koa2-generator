'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.copyTemplate = exports.copy = undefined;

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var copy = exports.copy = function () {
    var _ref = (0, _bluebird.coroutine)(regeneratorRuntime.mark(function _callee(from, to) {
        var cwd, fromPath, toDirectory;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        if (!(from.length > 0 && to.length > 0)) {
                            _context.next = 7;
                            break;
                        }

                        cwd = process.cwd();
                        fromPath = _path2.default.resolve(cwd, from);
                        toDirectory = _path2.default.resolve(cwd, to);
                        _context.next = 6;
                        return command.run('cp', ['-rf', fromPath, toDirectory]);

                    case 6:
                        return _context.abrupt('return', _context.sent);

                    case 7:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function copy(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var copyTemplate = exports.copyTemplate = function () {
    var _ref2 = (0, _bluebird.coroutine)(regeneratorRuntime.mark(function _callee3(from, to) {
        var files;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        debug('copy ' + from + ' to ' + to);
                        _context3.next = 3;
                        return readdirAsync(from);

                    case 3:
                        files = _context3.sent;

                        files.forEach(function () {
                            var _ref3 = (0, _bluebird.coroutine)(regeneratorRuntime.mark(function _callee2(item) {
                                var fromPath;
                                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                    while (1) {
                                        switch (_context2.prev = _context2.next) {
                                            case 0:
                                                if (!(item === '.git' || item === '.gitignore' || item === 'package.json' || item === 'LICENSE')) {
                                                    _context2.next = 2;
                                                    break;
                                                }

                                                return _context2.abrupt('return');

                                            case 2:
                                                fromPath = _path2.default.join(from, item);
                                                _context2.next = 5;
                                                return copy(fromPath, to);

                                            case 5:
                                            case 'end':
                                                return _context2.stop();
                                        }
                                    }
                                }, _callee2, this);
                            }));

                            return function (_x5) {
                                return _ref3.apply(this, arguments);
                            };
                        }());

                    case 5:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    }));

    return function copyTemplate(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _command = require('./command.js');

var command = _interopRequireWildcard(_command);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = (0, _debug2.default)('koa2-generator:utils-copy'); /**
                                                                * Created by Bell on 16/8/12.
                                                                */

var readdirAsync = _bluebird2.default.promisify(_fs2.default.readdir);
//# sourceMappingURL=copy.js.map
