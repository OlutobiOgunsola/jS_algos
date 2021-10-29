class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insertNode = function (root, node) {
        if(!root) {
            this.root = node;
            return;
        }

        if(this.root < node.value) {
            return insertNode(this.root.right, node)
        } else {
            return insertNode(this.root.left, node)
        }
    }

    getDepth = function(root) {
        return null;
    }

    findNode = function (root, value) {
        if(root.value > value) {
            // recur with left child
            return this.findNode(root.left, value)
        } else if(root.value < value) {
            return this.findNode(root.right, value)
        } else {
            return node;
        }
    }

    removeNode = function(root, value) {
        if(root === null) {
            return root;
        }
        if(root.value && root.value < value) {
            return removeNode(root.right, value);
        } else if(root.value && root.value > value) {
            return removeNode(root.left, value)
        } else {
            root = null;
        }
        return root;
    }

    findNode = function (root, value) {
        if(root === null){
            return root;
        }
        if(root.value && root.value > value) {
            return findNode(root.left, value);
        } else if(root.value && root.value < value) {
            return findNode(root.right, value);
        } 

        return node;
    }

    findMinNode = function(root) {
        if(root === null) {
            return null;
        }
        if(root.left) {
            return findMinNode(root.left);
        }
        return node;
    }

    findLowestCommonAncestor = function(nodeA, nodeB){
        return null // to be implemented
    }
    /**
     *  findNode
     *  remove node
     *  findMinNode
     *  getRootNode
     *  inOrder
     *  preOrder
     *  postOrder
     */
}

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null
    }
}