
class TreeNode {
    constructor(value) {
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    getRoot = function() {
        return this.root;
    }

    insertNode = function (root, node) {
        // console.log('rootdata\n', root, this.root);

        let nodeObject = new TreeNode(node);

        if(!root) {
            if(!this.root) {
                return this.root = nodeObject}
            else {
                return root = nodeObject;
            };
        }
        if(node < root.value) {
            if(!root.left) (root.left = nodeObject);
            return this.insertNode(root.left, node);
        }
        if(node>root.value) {
            if(!root.right) (root.right=nodeObject);
            return this.insertNode(root.right,node);
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

    printNode = function (node, container) {
        console.log('adding value', node.value, 'to container')
        let newContainer = [...container];
        newContainer.push(node.value);
        return newContainer;
    }

    printTree = function (root, treeData = []) {

        console.log('printing bst', root)

        let container = treeData;

        if(!root) return container;

        if(root) {
            container = this.printNode(root, container);
        }

        if(root.left) {
            container=this.printNode(root.left,container);
        } 
        if(root.right) {
            container=this.printNode(root.right,container);
        }
        // container = this.printNode(root.right,container);

        if(root.right) {
            console.log('root right');
            return this.printTree(root.right,container);
        }

        if(root.left) {
            console.log('root left');
            return  this.printTree(root.left,container);
        }


        return container
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


let BST = new BinarySearchTree();
let values=[1,1,4,2,5,1,4,3,6,7,2,3,4,1,6,3,6,4,2,4,76,1,23,53,1,3,57,86,10,43,2,1,0,10,2,4,3,693,68,285,82,56,1,6,3,78,15,26,5,15,57,02,17,46,27,26,46,26,14,19,92,38,117,31,12];
// let values = [1,2,3,2]
values.forEach(value => {
    BST.insertNode(BST.getRoot(), value);
});

// BST.insertNode(BST.getRoot(), 1);
// BST.insertNode(BST.getRoot(), 2);
// BST.insertNode(BST.getRoot(), 3);
console.log('BST ROOT',BST.getRoot());
console.log('BST TREE',BST.printTree(BST.getRoot(), []));
// console.log('BST ROOT',BST.printTree(BST.getRoot(), []));
// console.log(BST.printTree(BST.getRoot(),[]))
// console.log(BST.printTree(BST.getRoot(), []));