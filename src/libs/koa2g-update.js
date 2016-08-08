
const program = require('commander');
const path = require('path');
const fs = require('fs');
const pkg = require('../../package.json');

var version = pkg.version;

import * as path_util from '../utils/path.js';
import * as command from '../utils/command.js';

program
    .version(version)
    .usage('[options]')
    .option('-d, --directory', 'the target directory (defaults to ./)')
    .parse(process.argv);

main();

async function updateApplication(directory) {
    let package_file = path.join(directory, 'package.json');
    console.log('package: ' + package_file);
    let exists = await path_util.existedFile(package_file);
    if (exists) {
        process.chdir(directory);
        var cwd = process.cwd();
        console.log('cwd: ' + cwd);
        await command.installAllDependencies();
    } else {
        console.error('aborting! because ' + package_file + ' is not existed');
    }
}

async function main() {
    let directory = './';
    if (program.directory && program.directory.length > 0) {
        directory = program.directory;
    }
    console.log('directory: ' + directory);
    await updateApplication(directory);
    process.exit();
}
