function Node(value, left, right) {
  if (!value) {
    throw "value not initialized";
  }

  this.value = value === undefined ? null : value;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
