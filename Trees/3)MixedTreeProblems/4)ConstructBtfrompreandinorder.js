/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preOrder, inOrder) {
    return constructTree(
        preOrder,
        0,
        preOrder.length - 1,
        inOrder,
        0,
        preOrder.length - 1
    );
};

function constructTree(preOrder, pS, pE, inOrder, iS, iE) {
    if (pS > pE) {
        return null;
    }

    let root = new TreeNode(preOrder[pS]);

    let idx = -1;

    // Better use a hashmap
    for (let i = iS; i <= iE; i++) {
        if (inOrder[i] === preOrder[pS]) {
            idx = i;
            break;
        }
    }

    let count = idx - iS;

    root.left = constructTree(
        preOrder,
        pS + 1,
        pS + count,
        inOrder,
        iS,
        idx - 1
    );
    root.right = constructTree(
        preOrder,
        pS + count + 1,
        pE,
        inOrder,
        idx + 1,
        iE
    );

    return root;
}
