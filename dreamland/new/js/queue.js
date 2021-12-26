class Queue {
    constructor(num) {
        this.dataArr = new Array(num);
        this._front = 0;
        this._tail = 0;
    }
    empty() {
        return this._front == this._tail;
    }
    pop() {
        this._front++;
    }
    front() {
        return this.dataArr[this._front];
    }
    push(t) {
        this.dataArr[this._tail++] = t;
    }
}