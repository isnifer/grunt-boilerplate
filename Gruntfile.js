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
                files: ['*.html', 'css/style.css', 'js/*.js']
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
                    'css/style.css': 'src/stylus/style.styl'
                }
            }

        },

        uglify: {
            options: {
                mangle: false
            },
            target: {
                files: {
                    'js/common.min.js': 'js/common.js'
                }
            }
        },

        csscomb: {
            options: {
                config: 'csscomb.json'
            },
            foo: {
                files: {
                    'css/style.sorted.css': ['css/style.css']
                }
            }
        },

        cssmin: {
            options: {
                keepSpecialComments: 0
            },
            minify: {
                files: {
                    'css/style.min.css': ['css/normalize.css', 'css/style.sorted.css']
                }
            }
        },

        'ftp-deploy': {
            build: {
                auth: {
                    host: '91.106.201.84',
                    port: 21,
                    authKey: 'projects'
                },
                //src: 'D:/Webservers/domains/grunt.dev/',
                src: 'D:/Webservers/domains/grunt.dev/',
                dest: '/kuznetsovanton.ru/public_html/projects/boilerplate/',
                exclusions: ['node_modules', '**/Thumbs.db', '.git', '.idea', '.gitignore', '.ftppass']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-csscomb');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-ftp-deploy');

    // Our tasks
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('comb', ['csscomb:foo', 'cssmin']);
    grunt.registerTask('deploy', ['ftp-deploy:build']);

};