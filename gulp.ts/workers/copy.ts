/// <reference path="../../typings/tsd.d.ts"/>

import env from '../env';
(() => {

  const gulp = require('gulp');
  const useref = require('gulp-useref');

  gulp.task('copy:jspm', () =>
    gulp.src(env.src.client.jspm)
      .pipe(useref())
      .pipe(gulp.dest(env.dir.dist_client)));

})();