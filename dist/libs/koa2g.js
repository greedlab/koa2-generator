'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _package = require('../../package.json');

var _package2 = _interopRequireDefault(_package);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var version = _package2.default.version;

_commander2.default.version(version).usage('[cmd] [options]').command('install', 'generate front or back end template base on koa2', { isDefault: true }).command('update', 'update dependencies for the project').description('generate koa2 template or update dependencies').parse(process.argv);
//# sourceMappingURL=koa2g.js.map
