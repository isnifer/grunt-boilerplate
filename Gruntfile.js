module.exports = function (grunt) {

    // Config
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            livereload: {
                options: {
                    livereload: true,
                    tasks: ['stylus:compile']
                },
                files: ['*.html', 'css/style.css', 'src/js/*.js']
            },

            css: {
                files: ['src/stylus/*.styl'],
                tasks: ['stylus:compile']
            }

        },

        stylus: {

            compile: {
                options: {
                    compress: false,
                    paths: ['stylus']
                },
                files: {
                    'css/style.css': 'src/stylus/style.styl',
                    'css/fonts.css': 'src/stylus/fonts.styl'
                }
            }

        },

        uglify: {
            options: {
                mangle: true
            },
            target: {
                files: {
                    'js/common.min.js': 'src/js/common.js'
                }
            }
        },

        csscomb: {
            options: {
                config: 'src/csscomb.json'
            },
            foo: {
                files: {
                    'css/style.sorted.css': ['css/style.css']
                }
            }
        },

        cssmin: {
            options: {
                keepSpecialComments: 0,
                report: 'min'
            },
            minify: {
                files: {
                    'css/style.min.css': ['css/fonts.css', 'css/normalize.css', 'css/style.sorted.css']
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-csscomb');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Our tasks
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('comb', ['csscomb:foo', 'cssmin', 'uglify']);

};