import assert from 'assert';
import Stack from '../implementations/stack';

describe('Stack', function() {
    it('Should create a stack of size 0', function() {
        const S1 = new Stack();

        assert.equal(0, S1.size());
    });

    const S1 = new Stack();

    describe('Push Operations', function() {
        it('Should push an item to the stack to make the size 1', function() {
            S1.push(31);

            assert.equal(1, S1.size());
        });

        it('Should push the second element to make size 1', function() {
            S1.push(41);

            assert.equal(2, S1.size());
        });
    });

    describe('Pop Operations', function() {
        it('Should pop the topmost element', function() {
            assert.equal(41, S1.pop());
            assert.equal(1, S1.size());
        });

        it('Should pop the topmost element', function() {
            assert.equal(31, S1.pop());
        });

        it ('Stack should be empty', function () {
            assert.equal(0, S1.size());
        });
    });
});