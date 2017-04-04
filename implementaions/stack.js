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
 * @param value
 * @returns popped element
 */
Stack.prototype.pop = function (value) {
    const poppedElement = this._storage[this._size];

    delete this._storage[this._size];

    this._size--;

    return poppedElement;
};