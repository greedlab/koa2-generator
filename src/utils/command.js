/**
 * Created by Bell on 16/8/8.
 */

const path = require('path');
const child_process = require('child_process');

/**
 * run shell
 *
 * @param command
 * @param options
 * @returns {Promise}
 */
export async function run(command, options) {
    return new Promise(function (resolve, reject) {
        let cp = child_process.spawn(command, options, {'stdio': 'inherit'});
        cp.on('close', function (code) {
            resolve(code);
        });
    });
}

/**
 * npm install dependence
 *
 * @param command
 * @param options
 * @returns {Promise}
 */
export async function runNpm(options) {
    return await run('npm',options);
}

export async function installKoa2() {
    await runNpm(['install', '--save', 'koa@next']);
    await runNpm(['install', '--save', 'koa-bodyparser@next']);
    await runNpm(['install', '--save', 'koa-favicon@next']);
    await runNpm(['install', '--save', 'koa-logger@next']);
    await runNpm(['install', '--save', 'koa-static@next']);
}

export async function installBabel() {
    await runNpm(['install', '--save-dev', 'babel-core']);
    await runNpm(['install', '--save-dev', 'babel-register']);
    await runNpm(['install', '--save-dev', 'babel-preset-es2015']);
    await runNpm(['install', '--save-dev', 'babel-preset-stage-0']);
    await runNpm(['install', '--save-dev', 'babel-polyfill']);
}


export async function installEslint() {
    await runNpm(['install', '--save-dev', 'eslint']);
    await runNpm(['install', '--save-dev', 'babel-eslint']);
    await runNpm(['install', '--save-dev', 'eslint-plugin-react']);
    await runNpm(['install', '--save-dev', 'babel-preset-stage-0']);
    await runNpm(['install', '--save-dev', 'babel-polyfill']);
}

export async function supportAsync() {
    await runNpm(['install', '--save-dev', 'babel-plugin-transform-async-to-module-method']);
}

export async function installGulp() {
    await runNpm(['install', '--save-dev', 'gulp']);
    await runNpm(['install', '--save-dev', 'gulp-babel']);
    await runNpm(['install', '--save-dev', 'gulp-changed']);
    await runNpm(['install', '--save-dev', 'gulp-sourcemaps']);
    await runNpm(['install', '--save-dev', 'gulp-uglify']);
    await runNpm(['install', '--save-dev', 'gulp-clean-css']);
    await runNpm(['install', '--save-dev', 'gulp-sass']);
    await runNpm(['install', '--save-dev', 'gulp-rename']);
    await runNpm(['install', '--save-dev', 'gulp-imagemin']);
    await runNpm(['install', '--save-dev', 'imagemin-pngquant']);
    await runNpm(['install', '--save-dev', 'gulp-livereload']);
    await runNpm(['install', '--save-dev', 'run-sequence']);
    await runNpm(['install', '--save-dev', 'gulp-uglify']);
    await runNpm(['install', '--save-dev', 'gulp-uglify']);
}

export async function installNodemon() {
    await runNpm(['install', '-g', 'nodemon']);
}

export async function installPm2() {
    await runNpm(['install', '-g', 'pm2']);
}


export async function installArtTemplate() {
    await runNpm(['install', '--save', 'art-template']);
}

export async function installMongoDB() {
    await runNpm(['install', '--save', 'mongoose']);
}

export async function installFrontDependencies() {
    await installKoa2();
    await installBabel();
    await supportAsync();
    await installEslint();
    await installGulp();
    await installPm2();
    await installNodemon();
    await installArtTemplate();
    await installMongoDB();
}

export async function installBackDependencies() {
    await installKoa2();
    await installBabel();
    await supportAsync();
    await installEslint();
    await installGulp();
    await installPm2();
    await installNodemon();
    await installArtTemplate();
    await installMongoDB();
}

export async function copy(from,to) {
    if (from.length > 0 && to.length > 0) {
        let cwd = process.cwd();
        let fromPath = path.resolve(cwd, from);
        let toDirectory = path.resolve(cwd, to);
        console.log('fromPath :' + fromPath);
        console.log('toDirectory :' + toDirectory);
        return await run('cp',['-rf',fromPath,toDirectory]);
    }
}
