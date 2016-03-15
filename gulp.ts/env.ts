/// <reference path="../typings/tsd.d.ts"/>

import PATH from './config/rootPaths';
import SOURCE from './config/srouces';
const packageJson = require('../package.json');

const env = {
  app:{
      version: packageJson.version,
      name: packageJson.name,
  },
  dir: PATH,
  src: SOURCE,
};

export default env;