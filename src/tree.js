function Node(value, left, right) {
  if (!value) {
    throw "value not initialized";
  }
  this.value = value === undefined ? null : value;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

class Tree {
  constructor() {
    this.root = null;
  }

  add(value) {
    let node = this.root;
    if (!node) {
      this.root = new Node(value);
      return;
    }

    return search(node);

    function search(node) {
      if (value < node.value) {
        if (!node.left) {
          node.left = new Node(value);
          return;
        } else {
          return search(node.left);
        }
      } else if (value > node.value) {
        if (!node.right) {
          node.right = new Node(value);
          return;
        } else {
          return search(node.right);
        }
      } else {
        return;
      }
    }
  }

  findMix() {
    let current = this.root;
    while (current.left) {
      current = current.left;
    }
    return current.value;
  }
  findMax() {
    let current = this.root;
    while (current.right) {
      current = current.right;
    }
    return current.right;
  }

  find(value) {
    let current = this.root;
    while (current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  remove(value) {
    let current = this.root;
    if (!current) {
      throw "The tree is empty";
    }

    function deleteNode(node, value) {
      if (node.value === value) {
        if (!node.right && !node.left) {
          return null;
        }
        if (!node.right) {
          return node.left;
        }
        if (!node.left) {
          return node.right;
        } else {
          let tempNode = node.right;
          while (tempNode.left) {
            tempNode = tempNode.left;
          }
          node.value = tempNode.value;
          node.right = deleteNode(node.right, tempNode.value);
          return node;
        }
      } else if (value < node.value) {
        node.left = deleteNode(node.left, value);
        return node;
      } else if (value > node.value) {
        node.right = deleteNode(node.right, value);
        return node;
      }
    }
  }

  print() {
    let current = this.root;
    const values = [];

    traverse(current);
    console.log(values.join(", "));

    function traverse(node) {
      if (!node) {
        return;
      }
      traverse(node.left);
      values.push(node.value);
      traverse(node.right);
    }
  }
}

main();

function main() {
  const tree = new Tree();
  tree.add(10);
  tree.add(5);
  tree.add(9);
  tree.add(12);
  tree.add(27);
  tree.add(2);
  tree.add(7);
  tree.add(28);
  tree.add(18);
  tree.add(8);
  tree.add(4);
  tree.add(13);
  tree.print();
  //   console.log(tree);
}
