const gulp = require( 'gulp' );
 
gulp.task( 'copy', () => gulp.src([
        'src/client/*.html',
        'src/c;oemt/**/*.css',
        'src/**/*.js'
    ],
    { base: 'src' }
    ).pipe( gulp.dest( 'dest' ) ));