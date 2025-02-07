// https://leetcode.com/problems/binary-tree-postorder-traversal/description/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    let arr = [];
    postOrder(root, arr);
    return arr;
};

function postOrder(root, arr) {
    if (root === null) {
        return;
    }
    postOrder(root.left, arr);
    postOrder(root.right, arr);
    arr.push(root.val);
}
