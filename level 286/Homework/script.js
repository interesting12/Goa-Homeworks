// class BinarySearchTree {
//     //inorder
//     inOrder(node = this.root, result = []) {
//         if (!node) return result;
//         this.inOrder(node.left, result);
//         result.push(node.value);
//         this.inOrder(node.right, result);
//         return result;
//     }
//     // pre order
//     preOrder(node = this.root, result = []) {
//         if (!node) return result;
//         result.push(node.value);
//         this.preOrder(node.left, result);
//         this.preOrder(node.right, result);
//         return result;
//     }
//     // post order
//     postOrder(node = this.root, result = []) {
//         if (!node) return result;
//         this.postOrder(node.left, result);
//         this.postOrder(node.right, result);
//         result.push(node.value);
//         return result;
//     }
//     // level order
//     levelOrder() {
//         const result = [];
//         const queue = [];
//         if (this.root) queue.push(this.root);
//         while (queue.length > 0) {
//             const node = queue.shift();
//             result.push(node.value);
//             if (node.left) queue.push(node.left);
//             if (node.right) queue.push(node.right);
//         }
//         return result;
//     }
// }







class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor(value = null) {
    this.root = value === null ? null : new Node(value);
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    this._insertNode(this.root, newNode);
    return this;
  }

  _insertNode(currentNode, newNode) {
    if (newNode.value < currentNode.value) {
      if (!currentNode.left) return (currentNode.left = newNode);
      this._insertNode(currentNode.left, newNode);
    } else {
      if (!currentNode.right) return (currentNode.right = newNode);
      this._insertNode(currentNode.right, newNode);
    }
  }

  depth(value) {
    if (!this.root) return -1;
    return this._depthValue(this.root, value, 0);
  }

  _depthValue(node, value, depth) {
    if (!node) return -1;

    if (value < node.value) {
      return this._depthValue(node.left, value, depth + 1);
    } else if (value > node.value) {
      return this._depthValue(node.right, value, depth + 1);
    } else {
      return depth;
    }
  }

  delete(value) {
    this.root = this._deleteNode(this.root, value);
    return this;
  }

  _deleteNode(currentNode, value) {
    if (!currentNode) return null;

    if (value < currentNode.value) {
      currentNode.left = this._deleteNode(currentNode.left, value);
      return currentNode;
    } else if (value > currentNode.value) {
      currentNode.right = this._deleteNode(currentNode.right, value);
      return currentNode;
    } else {

      if (!currentNode.left && !currentNode.right) return null;

      if (!currentNode.left) return currentNode.right;
      if (!currentNode.right) return currentNode.left;

      const minValue = this.min(currentNode.right);
      currentNode.value = minValue;
      currentNode.right = this._deleteNode(currentNode.right, minValue);
      return currentNode;
    }
  }

  contains(value) {
    if (!this.root) return false;
    return this._containsValue(this.root, value);
  }

  _containsValue(node, value) {
    if (!node) return false;

    if (value < node.value) {
      return this._containsValue(node.left, value);
    } else if (value > node.value) {
      return this._containsValue(node.right, value);
    } else {
      return true;
    }
  }

  search(value) {
    return this._search(this.root, value);
  }

  _search(node, value) {
    if (!node) return false;
    if (node.value === value) return true;

    if (value < node.value) {
      return this._search(node.left, value);
    } else {
      return this._search(node.right, value);
    }
  }

  min(node = this.root) {
    while (node.left) node = node.left;
    return node.value;
  }

  max(node = this.root) {
    if (!node.right) return node.value;
    return this.max(node.right);
  }


  // in order
  inOrder() {
    const result = [];
    this._inOrder(this.root, result);
    return result;
  }

  _inOrder(node, result) {
    if (!node) return;

    this._inOrder(node.left, result);
    result.push(node.value);
    this._inOrder(node.right, result);
  }

  // pre order
  preOrder() {
    const result = [];
    this._preOrder(this.root, result);
    return result;
  }

  _preOrder(node, result) {
    if (!node) return;

    result.push(node.value);
    this._preOrder(node.left, result);
    this._preOrder(node.right, result);
  }

    // post order 
  postOrder() {
    const result = [];
    this._postOrder(this.root, result);
    return result;
  }

  _postOrder(node, result) {
    if (!node) return;

    this._postOrder(node.left, result);
    this._postOrder(node.right, result);
    result.push(node.value);
  }

  // level order
  levelOrder() {
    const result = [];
    const queue = [];

    if (this.root) queue.push(this.root);

    while (queue.length) {
      const current = queue.shift();
      result.push(current.value);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    return result;
  }
}