'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.readdir = exports.mkdir = exports.existedFile = exports.existedDirectory = exports.emptyDirectory = undefined;

var _bluebird = require('bluebird');

/**
 * check whether thd directory 'path' is empty
 *
 * @param path
 * @returns {Promise}
 */
var emptyDirectory = exports.emptyDirectory = function () {
    var _ref = (0, _bluebird.coroutine)(regeneratorRuntime.mark(function _callee(path) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        return _context.abrupt('return', new Promise(function (resolve, reject) {
                            fs.readdir(path, function (err, files) {
                                if (err) {
                                    reject(err);
                                } else {
                                    if (!files || !files.length) {
                                        resolve(true);
                                    } else {
                                        resolve(false);
                                    }
                                }
                            });
                        }));

                    case 1:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function emptyDirectory(_x) {
        return _ref.apply(this, arguments);
    };
}();

/**
 * check whether thd directory 'path' is existed
 *
 * @param path
 * @returns {Promise}
 */


var existedDirectory = exports.existedDirectory = function () {
    var _ref2 = (0, _bluebird.coroutine)(regeneratorRuntime.mark(function _callee2(path) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        return _context2.abrupt('return', new Promise(function (resolve, reject) {
                            fs.readdir(path, function (err, files) {
                                if (err) {
                                    // reject(err);
                                    resolve(false);
                                } else {
                                    if (!files) {
                                        resolve(false);
                                    } else {
                                        resolve(true);
                                    }
                                }
                            });
                        }));

                    case 1:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function existedDirectory(_x2) {
        return _ref2.apply(this, arguments);
    };
}();

/**
 * check whether thd file 'path' is existed
 *
 * @param path
 * @returns {Promise}
 */


var existedFile = exports.existedFile = function () {
    var _ref3 = (0, _bluebird.coroutine)(regeneratorRuntime.mark(function _callee3(path) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        return _context3.abrupt('return', new Promise(function (resolve, reject) {
                            fs.exists(path, function (exists) {
                                resolve(exists);
                            });
                        }));

                    case 1:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    }));

    return function existedFile(_x3) {
        return _ref3.apply(this, arguments);
    };
}();

/**
 * mkdir -p
 *
 * @param path
 * @returns {Promise}
 */


var mkdir = exports.mkdir = function () {
    var _ref4 = (0, _bluebird.coroutine)(regeneratorRuntime.mark(function _callee4(path) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        return _context4.abrupt('return', new Promise(function (resolve, reject) {
                            mkdirp(path, _0777, function (err) {
                                if (err) {
                                    reject(err);
                                } else {
                                    resolve(true);
                                }
                            });
                        }));

                    case 1:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, this);
    }));

    return function mkdir(_x4) {
        return _ref4.apply(this, arguments);
    };
}();

/**
 * read all files in directory 'path'
 *
 * @param path
 * @returns {Promise}
 */


var readdir = exports.readdir = function () {
    var _ref5 = (0, _bluebird.coroutine)(regeneratorRuntime.mark(function _callee5(path) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        return _context5.abrupt('return', new Promise(function (resolve, reject) {
                            fs.readdir(path, function (err, files) {
                                if (err) {
                                    reject(err);
                                } else {
                                    resolve(files);
                                }
                            });
                        }));

                    case 1:
                    case 'end':
                        return _context5.stop();
                }
            }
        }, _callee5, this);
    }));

    return function readdir(_x5) {
        return _ref5.apply(this, arguments);
    };
}();

/**
 * Created by Bell on 16/8/5.
 */

var mkdirp = require('mkdirp');
var fs = require('fs');
var path = require('path');
var _0777 = parseInt('0755', 8);
//# sourceMappingURL=path.js.map
