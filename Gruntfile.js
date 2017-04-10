var grunt = require('grunt');
const Implementation = require('./templates').Implementation;
const TestCase = require('./templates').TestCase;


/**
 * Creates an implemention file with boiler plate and test file with boiler plate
 */
grunt.registerTask('create', 'creates the respective files (test and implementation)', function (name){
    /**
     * Name of the file/algo is compulsory
     */
    if (!name) {
        console.log('Error, Specify the file/algo name');
        return
    }

    // cerating the implementation file
    grunt.file.write(`./implementations/${name}.js`,Implementation(name));

    // creating the testing file
    grunt.file.write(`./test/${name}.test.js`, TestCase(name));

});