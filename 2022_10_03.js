//https://www.codewars.com/kata/55a9c0994cb7e284d500005e/train/javascript

var Queue = function () {
  this.head = 0;
  this.tail = 0;
  this.memory = [];
};

Queue.prototype.enqueue = function (item) {
  this.memory[this.tail++] = item;
};

Queue.prototype.dequeue = function () {
  if (this.size()) {
    var toReturn = this.memory[this.head];
    this.head++;
    return toReturn;
  }
};

Queue.prototype.size = function () {
  return this.tail - this.head;
};
