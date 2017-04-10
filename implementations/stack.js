/**
 *
 * @constructor
 */
function Stack() {
    this._storage = [];
    this._size = 0;
}

/**
 * Pushes the value to the top of the stack
 * @param value
 */
Stack.prototype.push = function (value) {
    this._storage[this._size] = value;
    this._size++;
};


/**
 * Returns the topmost element and removes it from the stack
 * @returns popped element
 */
Stack.prototype.pop = function () {
    const poppedElement = this._storage[this._size - 1];

    delete this._storage[this._size - 1];

    this._size--;

    return poppedElement;
};

/**
 * Returns the size of the stack
 * @returns {number}
 */
Stack.prototype.size = function () {
    return this._size;
};


export default Stack;