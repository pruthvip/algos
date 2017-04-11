/**
 *
 * @param n defines the size of the stack
 * @constructor
 */
function Stack(n = 10) {
  this._maxSize = n;
  this._storage = [];
}

/**
 * Pushes the value to the top of the stack
 * @param value
 */
Stack.prototype.push = function (value) {
  if (this._maxSize < this._storage.length + 1) {
    return 'overflow';
  }

  this._storage.push(value);
};


/**
 * Returns the topmost element and removes it from the stack
 * @returns popped element
 */
Stack.prototype.pop = function () {
  if (this.isStackEmpty()) {
    return 'underflow';
  }

  return (this._storage.splice(-1, 1));
};


/**
 * Checks if the stack is empty or not
 * @returns {boolean} true is stack is empty
 */
Stack.prototype.isStackEmpty = function () {
  return this._storage.length <= 0
};

export default Stack;