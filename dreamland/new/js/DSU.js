class DSU {
    constructor(n) {
        this.father = new Array(n);
        for (var i = 0; i < n; i++) {
            this.father[i] = i;
        }
    }
    find(x) {
        return this.father[x] == x ? x : this.father[x] = this.find(this.father[x]);
    }
    Union(x, y) {
        if (this.find(x) == this.find(y)) return false;
        this.father[this.find(x)] = this.find(y);
        return true;
    }
}