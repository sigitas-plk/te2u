module.exports = function(){
    var rootDir = '../src/';
    return {
        sass: {
            in: rootDir +'sass/*.scss',
            watch: rootDir+'sass/**/*',
            out: rootDir+'css/',
            sassOpts:{
                outputStyle: 'expanded',
                precision: 3,
                errLogToConsole: true
            },
            pleeeaseOpts: {
                autoprefixer: {browsers: ['last 2 version', '>2%']},
                pseudoElements: true,
                mqpacker: true,
                minifier: false
            }
        },
        js: [rootDir+'js/**/*.js',rootDir+'js/*.js'],
        pug: {
            in: rootDir + 'pug/*.pug',
            watch:  [rootDir + 'pug/**/**/*'],
            out: rootDir
        },
        browserSync: {
            /*  proxy: {
                target: 'http://umb3.local',
                ws: false
            },*/
            server: rootDir,
            open: false,
            notify: true,
            port: 3010,
            ui: false
        }
    }
};