const program = require('commander');
const path = require('path');
const fs = require('fs');
const child_process = require('child_process');

import * as path_util from '../utils/path.js';
import * as command from '../utils/command.js';
import * as copy_util from '../utils/copy';

const pkg = require('../../package.json');
let version = pkg.version;

program
    .version(version)
    .usage('[options]')
    .option('-d, --directory [directory]', 'the target directory. (defaults to ./)')
    .option('-e, --end [end]', 'front(front end) or back(back end). (defaults to front)')
    .option('-f, --force', 'force on package.json is existed')
    .description('generate front or back end template base on koa2')
    .parse(process.argv);
main();

/**
 * install application at the given directory `directory`.
 *
 * @param directory
 */
async function installFrontApplication(directory) {
    try {
        let from = path.join(__dirname, '../template-front');
        copy_util.copyAll(from,directory);
        process.chdir(directory);
        let cwd = process.cwd();
        console.log('cwd: ' + cwd);
        let result = await command.runNpm(['init']);
        if (result == 0) {
            await command.installFrontDependencies();
        }
    } catch (err) {
        console.error(err);
    }
}

async function installBackApplication(directory) {
    try {
        let from = path.join(__dirname, '../template-back');
        copy_util.copyAll(from,directory);
        process.chdir(directory);
        let cwd = process.cwd();
        console.log('cwd: ' + cwd);
        let result = await command.runNpm(['init']);
        if (result == 0) {
            await command.installBackDependencies();
        }
    } catch (err) {
        console.error(err);
    }
}

async function installApplication(directory, end) {
    if (end === 'back') {
        installBackApplication(directory);
    } else {
        installFrontApplication(directory);
    }
}

async function main() {
    let directory = process.cwd();
    if (program.directory && program.directory.length > 0) {
        directory = path.resolve(directory, program.directory);
    }
    console.log('directory: ' + directory);
    try {
        let existed = await path_util.existedDirectory(directory);
        if (!existed) {
            await path_util.mkdir(directory);
        }
        let package_file = path.join(directory, 'package.json');
        console.log('package: ' + package_file);
        try {
            let exists = await path_util.existedFile(package_file);
            if (exists && !program.force) {
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

    } catch (err) {
        console.error(err);
    }
    process.exit();
}
