/**
 * Created by Bell on 16/8/12.
 */

import path from 'path';
import fs from 'fs';
import Promise from 'bluebird';
import Debug from 'debug';

import * as command from './command.js';

const debug = Debug('koa2-generator:utils-copy');
const readdirAsync = Promise.promisify(fs.readdir);

export async function copy(from,to) {
    if (from.length > 0 && to.length > 0) {
        let cwd = process.cwd();
        let fromPath = path.resolve(cwd, from);
        let toDirectory = path.resolve(cwd, to);
        return await command.run('cp',['-rf',fromPath,toDirectory]);
    }
}

export async function copyTemplate(from,to) {
    debug('copy ' + from + ' to ' + to);
    let files = await readdirAsync(from);
    files.forEach(async function (item) {
        if (item === '.git'
            || item === '.gitignore'
            || item === 'package.json'
            || item === 'LICENSE') {
            return;
        }
        let fromPath = path.join(from, item);
        await copy(fromPath, to);
    });
}
