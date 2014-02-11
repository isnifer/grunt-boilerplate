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
                files: ['*.html', 'css/style.min.css']
            },

            css: {
                files: ['src/stylus/*.styl'],
                tasks: ['stylus:compile']
            },
            

            js: {
                files: ['src/js/*.js'],
                tasks: ['uglify']
            }

        },

        stylus: {

            compile: {
                options: {
                    compress: true,
                    paths: ['stylus']
                },
                files: {
                    'css/style.min.css': 'src/stylus/style.styl'
                }
            },

            normal: {
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
                    'js/common.min.js': 'src/js/common.js'
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
                //src: 'E:/Webservers/domains/grunt.dev/',
                src: 'D:/Webservers/domains/grunt.dev/',
                dest: '/kuznetsovanton.ru/public_html/projects/boilerplate/',
                exclusions: ['node_modules', '**/Thumbs.db', '.git', '.idea', '.gitignore', '.ftppass']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-ftp-deploy');

    // Our tasks
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('min', ['watch']);
    grunt.registerTask('deploy', ['ftp-deploy:build']);

};