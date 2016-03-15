/// <reference path="../../typings/tsd.d.ts"/>

import env from '../env';

(()=>{

  const gulp = require('gulp');

  // // https://github.com/Microsoft/TypeScript/wiki/tsconfig.json
  const ts = require('gulp-typescript');

  const platConfig = require('../../tsconfig.json');

  gulp.task('ts:server', ()=> {
    return gulp.src(env.src.server.src)
    .pipe(ts(platConfig.compilerOptions))
    .pipe(gulp.dest(env.dir.dist_server));
  });

})();