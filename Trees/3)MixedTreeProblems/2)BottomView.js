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
    bottomView(root) {
        const ans = [];

        // Check if the tree is empty
        if (root === null) {
            return ans;
        }

        // Map to store the top view nodes based on their vertical positions
        const mpp = new Map();

        // Queue for BFS traversal, each element is a pair containing node and its vertical position
        const q = [{ node: root, line: 0 }];

        // BFS traversal
        while (q.length > 0) {
            // Retrieve the node and its vertical position from the front of the queue
            const { node, line } = q.shift();

            mpp.set(line, node.data);

            // Process left child
            if (node.left !== null) {
                // Push the left child with a decreased vertical position into the queue
                q.push({ node: node.left, line: line - 1 });
            }

            // Process right child
            if (node.right !== null) {
                // Push the right child with an increased vertical position into the queue
                q.push({ node: node.right, line: line + 1 });
            }
        }

        let sortedKeys = [...mpp.keys()].sort((a, b) => a - b);

        let min = sortedKeys[0];
        let max = sortedKeys[sortedKeys.length - 1];

        for (let i = min; i <= max; i++) {
            ans.push(mpp.get(i));
        }

        return ans;
    }
}
