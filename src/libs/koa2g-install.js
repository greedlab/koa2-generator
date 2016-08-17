import program from 'commander';
import path from 'path';
import fs from 'fs';
import Debug from 'debug';
import bluebird from 'bluebird';

import * as path_util from '../utils/path.js';
import * as command from '../utils/command.js';
import * as copy_util from '../utils/copy';
import pkg from '../../package.json';

bluebird.promisifyAll(fs);

const version = pkg.version;
const debug = Debug('koa2-generator:koa2g-install');

program
    .version(version)
    .usage('[options] [dir](defaults to ./)')
    .option('-e, --end [end]', 'front(front end) or back(back end). (defaults to front)')
    .option('-f, --force', 'force on package.json is existed')
    .description('generate front or back end template base on koa2')
    .parse(process.argv);
main();

async function installFrontApplication(directory) {
    let from = path.join(__dirname, '../../node-front-template');
    await copy_util.copyTemplate(from,directory);
    process.chdir(directory);
    let result = await command.npmInit();
    if (result == 0) {
        await command.installFrontDependencies();
    }
}

async function installBackApplication(directory) {
    let from = path.join(__dirname, '../../node-back-template');
    copy_util.copyTemplate(from,directory);
    process.chdir(directory);
    let result = await command.npmInit();
    if (result == 0) {
        await command.installBackDependencies();
    }
}

/**
 * install front or back application at the given directory `directory`.
 *
 * @param directory install directory
 * @param end front(default) or back
 */
async function installApplication(directory, end) {
    if (end === 'back') {
        await installBackApplication(directory);
    } else {
        await installFrontApplication(directory);
    }
    await updatePackage(directory, program.end);
}

async function updatePackage(directory, end) {
    const package_file = path.join(directory, 'package.json');
    debug('target package: ' + package_file);
    const exists = await path_util.existedFile(package_file);
    if (exists) {
        let packageObj = JSON.parse(await fs.readFileAsync(package_file));
        packageObj.main = 'dist/app.js';
        if (end === 'back') {
            packageObj.scripts.develop = 'PORT=4002 DEBUG=' + packageObj.name + '* nodemon -w dist -e js dist/app.js';
            packageObj.scripts.release = 'PORT=4002 NODE_ENV=release pm2 start dist/app.js  -i 0 --name ' + packageObj.name + ' --watch';
        } else {
            packageObj.scripts.develop = 'PORT=4001 DEBUG=' + packageObj.name + '* nodemon -w dist -e js,html,css,jsx dist/app.js';
            packageObj.scripts.release = 'PORT=4001 NODE_ENV=release pm2 start dist/app.js  -i 0 --name ' + packageObj.name + ' --watch';
        }
        await fs.writeFileAsync(package_file,JSON.stringify(packageObj,null,4));
    } else {
        console.error('aborting! because ' + package_file + ' is not existed');
    }
}

async function main() {
    try {
        const directory = path.resolve(program.args.shift() || '.');
        debug('target directory: ' + directory);
        const existed = await path_util.existedDirectory(directory);
        if (!existed) {
            await path_util.mkdir(directory);
        }
        const package_file = path.join(directory, 'package.json');
        debug('target package: ' + package_file);

        const exists = await path_util.existedFile(package_file);
        if (exists) {
            if (program.force) {
                await installApplication(directory, program.end);
            } else {
                console.error('aborting! because ' + package_file + ' is existed');
            }
        } else {
            await installApplication(directory, program.end);
        }
    } catch (err) {
        console.error(err);
    }
    process.exit();
}
