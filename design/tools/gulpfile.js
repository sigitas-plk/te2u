(function (){
    'use strict';

    var gulp = require('gulp');
    var browserSync = require('browser-sync');

//lazy load gulp plugins
    var $ = require('gulp-load-plugins')({lazy:true});

//configuration files
    var config = require('./gulp.config.js')();

/////////////////////////////////////////////
//              FILE WATCH                  //
/////////////////////////////////////////////
    gulp.task('default', ['compile-sass','compile-pug', 'start-browserSync'], function(){
        gulp.watch([config.sass.watch],['compile-sass']);
        gulp.watch([config.js], browserSync.reload);
        gulp.watch([config.pug.watch], ['compile-pug',browserSync.reload]);
    });

/////////////////////////////////////////////
//           BROWSER SYNC                  //
/////////////////////////////////////////////
    gulp.task('start-browserSync', function(){
        browserSync(config.browserSync);
    });

/////////////////////////////////////////////
//                SASS                     //
/////////////////////////////////////////////
    gulp.task('compile-sass', function(){
        gulp.src(config.sass.in)
            .pipe($.sass(config.sass.sassOpts))
            .pipe($.pleeease(config.sass.pleeeaseOpts))
            .pipe(gulp.dest(config.sass.out))
            .pipe(browserSync.reload({stream: true}));
    });

/////////////////////////////////////////////
//                  PUG                    //
/////////////////////////////////////////////
    gulp.task('compile-pug', function(){
        gulp.src(config.pug.in)
            .pipe($.pug( {
                    pretty: true
            }))
            .pipe(gulp.dest(config.pug.out));
    });

/////////////////////////////////////////////
//          ERROR HANDLING                 //
/////////////////////////////////////////////
    var gulp_src = gulp.src;
    gulp.src = function(){
        return gulp_src.apply(gulp, arguments)
            .pipe($.plumber(function(error){
                $.util.log($.util.colors.red('Error( '+error.plugin+ ' ):'+error.message));
                this.emit('end');
            }));
    };
}());