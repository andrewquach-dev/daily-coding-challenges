//https://leetcode.com/problems/implement-queue-using-stacks/


var MyQueue = function () {
    this.sIn = [], this.sOut = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    if (this.sOut.length > 0)
        this.sIn = reverse(this.sOut);

    this.sIn.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    if (this.sIn.length > 0)
        this.sOut = reverse(this.sIn);
    return this.sOut.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    if (this.sIn.length > 0)
        this.sOut = reverse(this.sIn);

    return this.sOut[this.sOut.length - 1];
};


/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.sIn.length === 0 && this.sOut.length === 0;

};

function reverse(stk) {
    if (!stk)
        return null;

    const reversed = [];
    while (stk.length > 0) {
        reversed.push(stk.pop());
    }

    return reversed;
}

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */