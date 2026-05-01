class MinStack {
    #mins;
    #stack;
    constructor() {
        this.#stack = [];
        this.#mins = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        
        if(this.#mins[this.#mins.length - 1] === undefined || this.#mins[this.#mins.length - 1] >= val) {
            this.#mins.push(val);
        } 
        this.#stack.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        const popped = this.#stack.pop();
        if(this.#mins[this.#mins.length - 1] === popped) {
            this.#mins.pop();
        }
        return popped;
    }

    /**
     * @return {number}
     */
    top() {
        return this.#stack[this.#stack.length - 1];
        
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.#mins[this.#mins.length - 1];
    }
}
