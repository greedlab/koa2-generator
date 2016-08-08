'use strict';

var program = require('commander');
var pkg = require('../../package.json');

var version = pkg.version;

program.version(version).usage('[cmd] [options]').command('install', 'install template', { isDefault: true }).command('update', 'update template').parse(process.argv);
//# sourceMappingURL=koa2g.js.map
