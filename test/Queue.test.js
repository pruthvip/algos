import assert from 'assert';
import Queue from '../implementations/Queue';

describe('Queue', function() {
  const Q1 = new Queue();
  Q1.enqueue(31);
  Q1.enqueue(41);
  Q1.enqueue(51);
  Q1.enqueue(61);
  Q1.enqueue(71);

  describe('FIFO Operations', function() {
    it('first in first out property should be followed', function() {
      assert.equal(71, Q1.dequeue());
      assert.equal(61, Q1.dequeue());
      assert.equal(51, Q1.dequeue());
      assert.equal(41, Q1.dequeue());
      assert.equal(31, Q1.dequeue());
    });
  });
});