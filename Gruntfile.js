module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    appName = 'Sorry-Vita';

    grunt.loadNpmTasks('grunt-electron-windows-installer');
    
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
                    arch: 'all'
                }
            }
        },
        'electron-windows-installer': {
            options: {
                productName: appName,
                productDescription: 'Ari\' `I am Sorry` Gift! ',
                rename: function (dest, src) {
                    if (/\.exe$/.test(src)) {
                        src = '<%= name %>-<%= version %>-setup.exe';
                    }
                    return dest + src;
                }
            },

            win32: {
                src: 'dist/' + appName + '-win32-ia32/',
                dest: 'dist/installers/win32/'
            },

            win64: {
                src: 'dist/' + appName + '-win32-x64/',
                dest: 'dist/installers/win64/'
            }
        }
    });
    grunt.registerTask('build-linux', ['electron:linux']);
    grunt.registerTask('build-all', ['electron:all']);
    grunt.registerTask('build-installer', ['electron-windows-installer']);
}
