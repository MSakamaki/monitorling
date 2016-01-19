
System.config({
  transpiler: 'typescript',
  typescriptOptions: {
    emitDecoratorMetadata: true
  }, 
  packages: {
    'app': {defaultExtension: 'ts'},
  } ,
  map: {
    /** components:start */
    ItemComponent: 'app/components/item.component.ts',
    DetailComponent: 'app/components/detail.component.ts',
    HeroInterface: 'app/interface/hero.ts',
    HeroService: 'app/service/hero.service.ts',
    'HeroService.mock': 'app/service/hero.service.mock.ts',
    /** components:end */
  },
});

System.import('./app/boot.ts')
  .then(null, console.error.bind(console));
