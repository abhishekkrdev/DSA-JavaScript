// https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/
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
 * @return {number[][]}
 */

var verticalTraversal = function (root) {
    let columnMap = new Map(); // { col: [[row, value]] }

    // DFS function
    function dfs(node, row, col) {
        if (!node) return;

        // Store node value in map
        if (!columnMap.has(col)) columnMap.set(col, []);
        columnMap.get(col).push([row, node.val]);

        // Recur for left and right children
        dfs(node.left, row + 1, col - 1);
        dfs(node.right, row + 1, col + 1);
    }

    // Start DFS from root at (row=0, col=0)
    dfs(root, 0, 0);

    // Sort columns by key (left to right)
    let sortedColumns = [...columnMap.keys()].sort((a, b) => a - b);
    let result = [];

    for (let col of sortedColumns) {
        // Sort nodes in each column by (row, value)
        columnMap.get(col).sort((a, b) => a[0] - b[0] || a[1] - b[1]);
        result.push(columnMap.get(col).map((pair) => pair[1]));
    }

    return result;
};
