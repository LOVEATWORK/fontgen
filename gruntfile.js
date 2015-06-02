module.exports = function(grunt) {

    // Get dependencies
    require('load-grunt-tasks')(grunt);

    // Include package file to access info
    var appPackage = require('./package.json');

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        webfont: {
            icons: {
                src: 'icons/*.svg',
                dest: 'build/fonts',
                destCss: 'build/',
                options: {
                    engine: 'node',
                    htmlDemo: true,
                    font: "swedishlapland-icons",
                    types: 'eot,woff,ttf,svg',
                    templateOptions: {
                        baseClass: 'swl-icon',
                        classPrefix: 'icon-'
                    }
                }
            }
        },

        push: {
            dist: {
                options: {
                files: ['package.json'],
                addFiles: ['.'],
                commit: true,
                commitMessage: 'Release v%VERSION% deployed via Grunt push',
                commitFiles: ['-a'], // '-a' for all files
                createTag: false,
                push: true,
                pushTo: 'origin',
                npm: false,
                npmTag: 'Release v%VERSION% deployed via Grunt push',
             }
            }
        }

    });

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['webfont']);
    grunt.registerTask('deploy', ['webfont', 'push:major']);

};