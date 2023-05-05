class SortedList {
  constructor() {
  this.items= [];
  this.length = this.items.length;
  }

//iteration 2
  add(item) {
this.items.push(item);
this.items.sort ((a, b) => a-b);
this.length = this.items.length;
  }

  get(pos) {
    if((pos) > this.items.length) {
      throw new Error("outOfBounds")
    } else {
      return this.items.indexOf(pos)
    }
  }

  max() {
    if(this.items.length ===0){
      throw new Error("EmptySortedList")
    } else {
      return Math.max(...this.items)
    }
  }

  min() {
    if(this.items.length === 0){
      throw new Error("EmptySortedList")
  } else {
    return Math.min(...this.items)
  }
}

  sum() {}

  avg() {}
}

module.exports = SortedList;
