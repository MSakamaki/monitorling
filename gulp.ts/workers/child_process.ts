/// <reference path="../../typings/tsd.d.ts"/>

import env from '../env';

(() => {

  const gulp = require('gulp');
  const proc = require('child_process');

  gulp.task('run_server', ()=>{
    //   
    var child = proc.spawn('node_modules/.bin/ts-node', ['src/server/app.ts'],{
      cwd: process.cwd()
    })
    child.stdout.on('data', data => process.stdout.write(`${data}`));
    child.stdout.on('error', data => process.stdout.write(`${data}`));
    child.on('close', code=> console.log('child process exited with code ' + code));
  });

})();