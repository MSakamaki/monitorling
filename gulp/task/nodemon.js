const gulp = require('gulp');
const nodemon = require('gulp-nodemon');

gulp.task( 'serve', () => nodemon({
  script: 'src/server/app.js',
  exec: 'babel-node',
}));
