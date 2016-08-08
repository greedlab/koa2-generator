'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.installDependence = exports.runShell = undefined;

var _bluebird = require('bluebird');

/**
 * run shell
 *
 * @param command
 * @param options
 * @returns {Promise}
 */
var runShell = exports.runShell = function () {
    var _ref = (0, _bluebird.coroutine)(regeneratorRuntime.mark(function _callee(command, options) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        return _context.abrupt('return', new Promise(function (resolve, reject) {
                            var init = child_process.spawn(command, options, { 'stdio': 'inherit' });
                            init.on('exit', function (code) {
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

    return function runShell(_x, _x2) {
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


var installDependence = exports.installDependence = function () {
    var _ref2 = (0, _bluebird.coroutine)(regeneratorRuntime.mark(function _callee2(options) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return runShell('npm', options);

                    case 2:
                        return _context2.abrupt('return', _context2.sent);

                    case 3:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function installDependence(_x3) {
        return _ref2.apply(this, arguments);
    };
}();

/**
 * Created by Bell on 16/8/8.
 */

var child_process = require('child_process');
//# sourceMappingURL=dependence.js.map
