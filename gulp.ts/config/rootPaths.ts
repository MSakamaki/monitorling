/// <reference path="../../typings/tsd.d.ts"/>

import {RootPathInf} from './_interfacees';

const ROOT_PATH: RootPathInf = {
  root: process.cwd(),
  client: 'src/client',
  server: 'src/server',
  gulp: 'gulp',
  dest: 'dest',
  dist: 'dist',
  dist_server: 'dist/server',
  dist_client: 'dist/client',
};

export default ROOT_PATH;
