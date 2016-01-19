
// @todo injector js task
// see: http://definitelytyped.org/
// using:: <reference path="component.d.ts"/>
/// <reference path="../../../typings/es6-promise/es6-promise.d.ts"/>

/** declaration:start */
declare module 'ItemComponent' { export class ItemComponent {} }
declare module 'DetailComponent' { export class DetailComponent {} }
declare module 'HeroInterface' { interface Hero {} }
declare module 'HeroService.mock' { var HEROES: any }
declare module 'HeroService' { export class HeroService {
    getHeroes(): Promise<any>;
    getHeroesSlowly(): Promise<any>;
} }
/** declaration:end */
/*

    getHeroes: Promise<any>;
    getHeroesSlowly: Promise<any>;

 */