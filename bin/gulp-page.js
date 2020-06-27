#!/usr/bin/env node

/*
 * @Author: your name
 * @Date: 2020-06-28 01:08:08
 * @LastEditTime: 2020-06-28 01:17:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \fed-e-task-02-01\test\gulp-page\bin\gulp-page.js
 */ 
process.argv.push('--cwd');
process.argv.push(process.cwd());
process.argv.push('--gulpfile');
process.argv.push(require.resolve('..'))
require('gulp/bin/gulp');