/// <reference path="../../typings/tsd.d.ts"/>

// ENVIRONMENT=dist electron dest/platform/index.js
// script src <script src="./app.js"></script> only
import env from '../env';

const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('build', cb=>
  runSequence(
    'clean:dist',
    'ts:server',
    'copy:jspm',
    'jspm:build',
    cb));
