/// <reference path="../../typings/tsd.d.ts"/>

import path from './rootPaths';
import {SourcePathsInf} from './_interfacees';

const SOURCE: SourcePathsInf = {
  client: {
    src: [
      `${path.client}/**/*.ts`,
    ],
    jspm: [
      `${path.client}/index.html`,
    ],
  },
  server: {
    src: [
      `${path.server}/**/*.ts`
    ]
  },
};

export default SOURCE;
