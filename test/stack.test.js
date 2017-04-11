import assert from 'assert';
import Stack from '../implementations/stack';

describe('Stack', function() {
    it('Should create a stack of size 0', function() {
        const S1 = new Stack(0);

        assert.equal(true, S1.isStackEmpty());
    });

    const S1 = new Stack(2);
    S1.push(31);
    S1.push(41);
    console.log('s1',S1._storage);

    describe('Push Operations after pushing (31, 41) on a stack of length 2', function() {
      it('Should throw an error, as the size has reached', function() {
        assert.equal('overflow', S1.push(51));
        console.log('s1',S1._storage);

      });

    });

    describe('Pop Operations for the push operations(31, 41)', function() {
        it('Should pop the topmost element i.e 41', function() {
            assert.equal(41, S1.pop());
        });

        it('Should pop the topmost element i.e 31', function() {
            assert.equal(31, S1.pop());
        });

        it ('Stack should be empty', function () {
          assert.equal(true, S1.isStackEmpty());
        });

      it ('Should throw an error, if stack is empty', function () {
        assert.equal('underflow', S1.pop());
      });
    });
});