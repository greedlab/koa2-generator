/**
 * Created by Bell on 16/8/5.
 */

const mkdirp = require('mkdirp');
const fs = require('fs');
const path = require('path');
const _0777 = parseInt('0755', 8);

/**
 * check whether thd directory 'path' is empty
 *
 * @param path
 * @returns {Promise}
 */
export async function emptyDirectory(path) {
    return new Promise(function (resolve, reject) {
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
    });
}

/**
 * check whether thd directory 'path' is existed
 *
 * @param path
 * @returns {Promise}
 */
export async function existedDirectory(path) {
    return new Promise(function (resolve, reject) {
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
    });
}

/**
 * check whether thd file 'path' is existed
 *
 * @param path
 * @returns {Promise}
 */
export async function existedFile(path) {
    return new Promise(function (resolve, reject) {
        fs.exists(path, function (exists) {
            resolve(exists);
        });
    });
}

/**
 * mkdir -p
 *
 * @param path
 * @returns {Promise}
 */
export async function mkdir(path) {
    return new Promise(function (resolve, reject) {
        mkdirp(path, _0777, function (err) {
            if (err) {
                reject(err);
            } else {
                resolve(true);
            }
        });
    });
}

/**
 * read all files in directory 'path'
 *
 * @param path
 * @returns {Promise}
 */
export async function readdir(path) {
    return new Promise(function (resolve, reject) {
        fs.readdir(path, function (err, files) {
            if (err) {
                reject(err);
            } else {
                resolve(files);
            }
        });
    });
}
