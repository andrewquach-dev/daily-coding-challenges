//https://leetcode.com/problems/min-stack/submissions/

class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val, { minStack } = this) {
        this.stack.push(val);

        const isMinEmpty = !minStack.length;
        const hasNewMin = val <= this.top(minStack);
        const canAddMin = isMinEmpty || hasNewMin;
        if (canAddMin) minStack.push(val);
    }

    pop({ stack, minStack } = this) {
        const top = stack.pop();

        const canPopMin = top === this.getMin();
        if (canPopMin) minStack.pop();
    }

    top(stack = this.stack) {
        return stack.length ? stack[stack.length - 1] : null;
    }

    getMin(minStack = this.minStack) {
        return this.top(minStack);
    }
}