
import program from 'commander';
import path from 'path';
import Debug from 'debug';

import pkg from '../../package.json';
import * as path_util from '../utils/path.js';
import * as command from '../utils/command.js';

const debug = Debug('koa2-generator:koa2g-update');
const version = pkg.version;

program
    .version(version)
    .usage('[options] [dir](defaults to ./)')
    .option('-e, --end [end]', 'front(front end) or back(back end). (defaults to front)')
    .description('update dependencies for the project')
    .parse(process.argv);

main();

async function updateApplication(directory,end) {
    let package_file = path.join(directory, 'package.json');
    debug('target package: ' + package_file);
    let exists = await path_util.existedFile(package_file);
    if (exists) {
        process.chdir(directory);
        var cwd = process.cwd();
        debug('cwd: ' + cwd);
        if (end === 'back') {
            await command.installBackDependencies();
        } else {
            await command.installFrontDependencies();
        }
    } else {
        console.error('aborting! because ' + package_file + ' is not existed');
    }
}

async function main() {
    try {
        const directory = path.resolve(program.args.shift() || '.');
        debug('target directory: ' + directory);
        await updateApplication(directory);
    } catch (err) {
        console.error(err);
    }
    process.exit();
}
