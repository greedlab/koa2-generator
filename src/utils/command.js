/**
 * Created by Bell on 16/8/8.
 */

import child_process from 'child_process';

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
    return run('npm',options);
}

/**
 * npm init
 */
export async function npmInit() {
    return runNpm(['init']);
}

export async function installDebug() {
    return runNpm(['install', '--save', 'debug']);
}

export async function installNodemon() {
    return runNpm(['install', '-g', 'nodemon']);
}

export async function installPm2() {
    return runNpm(['install', '-g', 'pm2']);
}

export async function installFrontDependencies() {
    // node-gyp
    await runNpm(['install', '-g', 'node-gyp']);

    // koa2
    await runNpm(['install', '--save', 'koa@next']);
    await runNpm(['install', '--save', 'koa-bodyparser@next']);
    await runNpm(['install', '--save', 'koa-favicon@next']);
    await runNpm(['install', '--save', 'koa-logger@next']);
    await runNpm(['install', '--save', 'koa-static@next']);

    // babel
    await runNpm(['install', '--save', 'babel-polyfill']);
    await runNpm(['install', '--save-dev', 'babel-core']);
    await runNpm(['install', '--save-dev', 'babel-eslint']);
    await runNpm(['install', '--save-dev', 'babel-preset-es2015']);
    await runNpm(['install', '--save-dev', 'babel-preset-stage-0']);
    await runNpm(['install', '--save-dev', 'babel-plugin-transform-async-to-module-method']);

    // eslint
    await runNpm(['install', '--save-dev', 'eslint']);
    await runNpm(['install', '--save-dev', 'eslint-plugin-react']);

    // gulp
    await runNpm(['install', '--save-dev', 'gulp']);
    await runNpm(['install', '--save-dev', 'gulp-rev']);
    await runNpm(['install', '--save-dev', 'gulp-rev-collector']);
    await runNpm(['install', '--save-dev', 'gulp-htmlmin']);
    await runNpm(['install', '--save-dev', 'gulp-babel']);
    await runNpm(['install', '--save-dev', 'gulp-changed']);
    await runNpm(['install', '--save-dev', 'gulp-sourcemaps']);
    await runNpm(['install', '--save-dev', 'gulp-uglify']);
    await runNpm(['install', '--save-dev', 'gulp-clean-css']);
    await runNpm(['install', '--save-dev', 'gulp-sass']);
    await runNpm(['install', '--save-dev', 'gulp-rename']);
    await runNpm(['install', '--save-dev', 'gulp-imagemin']);
    await runNpm(['install', '--save-dev', 'gulp-plumber']);
    await runNpm(['install', '--save-dev', 'gulp-livereload']);
    await runNpm(['install', '--save-dev', 'gulp-react']);
    await runNpm(['install', '--save-dev', 'imagemin-pngquant']);
    await runNpm(['install', '--save-dev', 'imagemin-gifsicle']);
    await runNpm(['install', '--save-dev', 'run-sequence']);

    // other
    await runNpm(['install', '--save', 'art-template']);
    await runNpm(['install', '--save', 'request']);

    await installDebug();
    await installNodemon();
    await installPm2();
}

export async function installBackDependencies() {
    // node-gyp
    await runNpm(['install', '-g', 'node-gyp']);

    // koa2
    await runNpm(['install', '--save', 'koa@next']);
    await runNpm(['install', '--save', 'koa-bodyparser@next']);
    await runNpm(['install', '--save', 'koa-logger@next']);
    await runNpm(['install', '--save', 'koa-router@next']);
    await runNpm(['install', '--save', 'koa-convert']);

    // babel
    await runNpm(['install', '--save', 'babel-polyfill']);
    await runNpm(['install', '--save-dev', 'babel-core']);
    await runNpm(['install', '--save-dev', 'babel-eslint']);
    await runNpm(['install', '--save-dev', 'babel-preset-es2015']);
    await runNpm(['install', '--save-dev', 'babel-preset-stage-0']);
    await runNpm(['install', '--save-dev', 'babel-plugin-transform-async-to-module-method']);

    // eslint
    await runNpm(['install', '--save-dev', 'eslint']);
    await runNpm(['install', '--save-dev', 'eslint-plugin-react']);

    // gulp
    await runNpm(['install', '--save-dev', 'gulp']);
    await runNpm(['install', '--save-dev', 'gulp-babel']);
    await runNpm(['install', '--save-dev', 'gulp-changed']);
    await runNpm(['install', '--save-dev', 'gulp-sourcemaps']);
    await runNpm(['install', '--save-dev', 'gulp-watch']);
    await runNpm(['install', '--save-dev', 'gulp-rename']);
    await runNpm(['install', '--save-dev', 'gulp-plumber']);
    await runNpm(['install', '--save-dev', 'run-sequence']);

    // mongodb
    await runNpm(['install', '--save', 'mongoose']);

    // redis
    await runNpm(['install', '--save', 'redis']);
    
    // auth
    await runNpm(['install', '--save', 'koa-passport@next']);
    await runNpm(['install', '--save', 'passport-local']);
    await runNpm(['install', '--save', 'jsonwebtoken']);

    // other
    await runNpm(['install', '--save', 'bcrypt']);
    await runNpm(['install', '--save', 'bluebird']);

    await installDebug();
    await installNodemon();
    await installPm2();
}
