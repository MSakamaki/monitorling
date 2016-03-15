/// <reference path="../../typings/tsd.d.ts"/>

(() => {
  const gulp = require('gulp');
  const gulpDep = require('gulp-description');
  const description = {
    main: [
      'serve',
      'build',
      'help',
      'hls',
      'test',
      'e2e',
    ],
    description: {
    },
  };

  gulp.task('help', () => gulpDep.help(description));
  gulp.task('h', () => gulpDep.help(description));
  gulp.task('hls', () => gulpDep.all(description));
  gulp.task('hdep', () => gulpDep.dependency(description));

})();
