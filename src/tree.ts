interface Node{
  value: number | null;
  left: Node | null;
  right: Node | null;
}

function NodeBuilder(value: number, left: Node | null, right: Node | null) {
  if (!value) {
    throw "value not initialized";
  }

  this.value = value === undefined ? null : value;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
