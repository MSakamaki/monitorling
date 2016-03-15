/// <reference path="../../typings/tsd.d.ts"/>

export interface RootPathInf {
  /** project root path */
  root: string,
  client: string,
  server: string,
  gulp: string,
  dest: string,
  dist: string,
  dist_server: string,
  dist_client: string,
};

export interface SourcePathsInf {
  client: {
    src: Array<string>,
    jspm: Array<string>
  },
  server: {
    src: Array<string>
  },
};
