// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *      constructor(val = 0, left = null, right = null){
 *          this.data = val;
 *          this.left = null;
 *          this.right = null;
 *      }
 * }
 **/

class Solution {
    lowestCommonAncestor(root, p, q) {
        if (root == null) {
            return null;
        }

        if (root.data === p.data) {
            return p;
        }

        if (root.data === q.data) {
            return q;
        }

        let leftResult = this.lowestCommonAncestor(root.left, p, q);
        let rightResult = this.lowestCommonAncestor(root.right, p, q);

        if (leftResult === null) {
            return rightResult;
        }

        if (rightResult === null) {
            return leftResult;
        }

        return root;
    }
}
