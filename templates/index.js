
function Implementation(name) {
    return (
`/**
 *
 * @constructor
 */
function ${name}() {
   
}

/**
 * Methods
 * @param value
 */
${name}.prototype.method = function (value) {
    
};


export default ${name};`
    );
}


function TestCase(name) {
    return (
`import assert from 'assert';
import ${name} from '../implementations/${name}';

describe('${name}', function() {
    it('Asserts', function() {
       
    });
});`
    );
}


module.exports = {
    Implementation: Implementation,
    TestCase: TestCase
};



