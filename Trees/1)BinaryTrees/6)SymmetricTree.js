// https://leetcode.com/problems/symmetric-tree/submissions/1408682108/

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
 * @return {boolean}
 */
var isSymmetric = function (root) {
    return helper(root, root);
};

function helper(r1, r2) {
    if (r1 === null && r2 === null) {
        return true;
    }

    if ((r1 === null && r2 !== null) || (r2 === null && r1 !== null)) {
        return false;
    }

    return (
        r1.val === r2.val &&
        helper(r1.left, r2.right) &&
        helper(r1.right, r2.left)
    );
}
