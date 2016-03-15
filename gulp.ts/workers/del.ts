/// <reference path="../../typings/tsd.d.ts"/>

import env from '../env';

const gulp = require('gulp');
const del = require('del');

gulp.task('clean:dist', done=> del([
    env.dir.dist,
  ], done));
