
import program from 'commander';
import pkg from '../../package.json';

const version = pkg.version;

program
    .version(version)
    .usage('[cmd] [options]')
    .command('install', 'generate front or back end template base on koa2', {isDefault: true})
    .command('update', 'update dependencies for the project')
    .description('generate koa2 template or update dependencies')
    .parse(process.argv);
