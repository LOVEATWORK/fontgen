module.exports = function(grunt) {

    // Include package file to access info
    var appPackage = require('./package.json');

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

    });

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['']);

};