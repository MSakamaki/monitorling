const gulp = require('gulp');
const nodemon = require('gulp-nodemon');

gulp.task( 'serve', () => nodemon({
  script: 'src/server/app.es6',
  exec: 'babel-node',
}));
