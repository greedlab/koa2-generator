'use strict';

var _bluebird = require('bluebird');

var updateApplication = function () {
    var _ref = (0, _bluebird.coroutine)(regeneratorRuntime.mark(function _callee(directory) {
        var package_file, exists, cwd;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        package_file = path.join(directory, 'package.json');

                        console.log('package: ' + package_file);
                        _context.next = 4;
                        return path_util.existedFile(package_file);

                    case 4:
                        exists = _context.sent;

                        if (!exists) {
                            _context.next = 13;
                            break;
                        }

                        process.chdir(directory);
                        cwd = process.cwd();

                        console.log('cwd: ' + cwd);
                        _context.next = 11;
                        return command.installAllDependencies();

                    case 11:
                        _context.next = 14;
                        break;

                    case 13:
                        console.error('aborting! because ' + package_file + ' is not existed');

                    case 14:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function updateApplication(_x) {
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
                        directory = './';

                        if (program.directory && program.directory.length > 0) {
                            directory = program.directory;
                        }
                        console.log('directory: ' + directory);
                        _context2.next = 5;
                        return updateApplication(directory);

                    case 5:
                        process.exit();

                    case 6:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function main() {
        return _ref2.apply(this, arguments);
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
var pkg = require('../../package.json');

var version = pkg.version;

program.version(version).usage('[options]').option('-d, --directory', 'the target directory (defaults to ./)').parse(process.argv);

main();
//# sourceMappingURL=koa2g-update.js.map
