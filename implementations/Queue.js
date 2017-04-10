/**
 *
 * @constructor
 */
function Queue() {
   this._storage = [];
}

/**
 * Methods
 * @param value
 */
Queue.prototype.enqueue = function (value) {
  this._storage.push(value);
};

/**
 * Methods
 * @param value
 */
Queue.prototype.dequeue = function () {
  const dequeuedElement = this._storage.splice(this._storage.length - 1, 1);

  return dequeuedElement;
};


export default Queue;