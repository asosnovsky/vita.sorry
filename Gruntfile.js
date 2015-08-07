module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    appName = 'Sorry-Vita';

    grunt.loadNpmTasks('grunt-electron-windows-installer');
    grunt.loadNpmTasks('grunt-electron-installer');

    grunt.initConfig({
        electron: {
            linux: {
                options: {
                    name: appName,
                    dir: 'src',
                    out: 'dist',
                    version: '0.30.2',
                    platform: 'linux',
                    arch: 'x64',
        		    overwrite: true
                }
            },
            all: {
                options: {
                    name: appName,
                    dir: 'src',
                    out: 'dist',
                    version: '0.30.2',
                    platform: 'all',
                    arch: 'all',
                    overwrite: true 
                }
            },
            win: {
                options: {
                    name: appName,
                    dir: 'src',
                    out: 'dist',
                    version: '0.30.2',
                    platform: 'win32',
                    arch: 'all',
                    overwrite: true 
                }
            }
        },
        'electron-windows-installer': {
            options: {
                description: 'Vita Sorry',
                author: 'Ari Sosnovsky'
            },
            win64: {
                src: 'dist/' + appName + '-win32-x64/',
                dest: 'dist/inst/'
            }
        }
    });
    grunt.registerTask('build-linux', ['electron:linux']);
    grunt.registerTask('build-all', ['electron:all']);
    grunt.registerTask('build-win', ['electron:win']);
    grunt.registerTask('build-installer', ['electron-windows-installer']);
    // grunt.registerTask('build-installer', ['electron:win','electron-windows-installer']);
}
