/**
 * Created by Bell on 16/8/12.
 */

import path from 'path';
import bluebird from 'bluebird';

import * as command from '../command.js';
bluebird.promisifyAll(path);

export async function copy(from,to) {
    if (from.length > 0 && to.length > 0) {
        let cwd = process.cwd();
        let fromPath = path.resolve(cwd, from);
        let toDirectory = path.resolve(cwd, to);
        console.log('fromPath :' + fromPath);
        console.log('toDirectory :' + toDirectory);
        return await command.run('cp',['-rf',fromPath,toDirectory]);
    }
}

export async function copyAll(from,to) {
    let files = await path.readdirAsync(from);
    files.forEach(async function (item) {
        let fromPath = path.join(from, item);
        await copy(fromPath, to);
    });
}
