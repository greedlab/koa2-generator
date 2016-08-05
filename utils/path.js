/**
 * Created by Bell on 16/8/5.
 */

var mkdirp = require('mkdirp');
var fs = require('fs');
var path = require('path');

var path_util = {

    /**
     * Check if the given directory `path` is empty.
     *
     * @param {String} path
     * @param {Function} fn
     */

    emptyDirectory: function (path, fn) {
        fs.readdir(path, function (err, files) {
            if (err && 'ENOENT' != err.code) throw err;
            fn(!files || !files.length);
        });
    },

    /**
     * Check if the given directory `path` is existed.
     *
     * @param {String} path
     * @param {Function} fn
     */

    existedDirectory: function (path, fn) {
        fs.readdir(path, function (err, files) {
            if (err && 'ENOENT' != err.code) throw err;
            fn(files);
        });
    },

    /**
     * Mkdir -p.
     *
     * @param {String} path
     * @param {Function} fn
     */

    mkdir: function (path, fn) {
        mkdirp(path, 0755, function (err) {
            if (err) throw err;
            console.log('   \033[36mcreate\033[0m : ' + path);
            fn && fn();
        });
    }
};

module.exports = path_util;