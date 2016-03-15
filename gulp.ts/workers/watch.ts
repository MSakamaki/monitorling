/// <reference path="../../typings/tsd.d.ts"/>

import env from '../env';

(()=>{

const gulp = require('gulp');
let livereload = require('gulp-livereload');

  gulp.task('watch', () => {
    livereload.listen();

    gulp.watch(env.src.client.src,
      () => gulp.src(env.src.client.src).pipe(livereload()));

    gulp.watch(env.src.client.jspm,
      () => gulp.src(env.src.client.jspm).pipe(livereload()));
  });
})();