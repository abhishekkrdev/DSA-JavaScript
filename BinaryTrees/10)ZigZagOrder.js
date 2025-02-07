// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *      constructor(val = 0, left = null, right = null){
 *          this.data = val;
 *          this.left = left;
 *          this.right = right;
 *      }
 * }
 **/

function zigzagLevelOrder(root) {
    // Array to store the result of zigzag traversal
    let result = [];

    // Check if the root is NULL, return an empty result
    if (!root) {
        return result;
    }

    // Queue to perform level order traversal
    let nodesQueue = [];
    nodesQueue.push(root);

    // Flag to determine the direction of traversal (left to right or right to left)
    let leftToRight = true;

    // Continue traversal until the queue is empty
    while (nodesQueue.length) {
        // Get the number of nodes at the current level
        let size = nodesQueue.length;

        // Array to store the values of nodes at the current level
        let row = new Array(size);

        // Traverse nodes at the current level
        for (let i = 0; i < size; i++) {
            // Get the front node from the queue
            let node = nodesQueue.shift();

            // Determine the index to insert the node's value based on the traversal direction
            let index = leftToRight ? i : size - 1 - i;

            // Insert the node's value at the determined index
            row[index] = node.data;

            // Enqueue the left and right children if they exist
            if (node.left) {
                nodesQueue.push(node.left);
            }
            if (node.right) {
                nodesQueue.push(node.right);
            }
        }

        // Switch the traversal direction for the next level
        leftToRight = !leftToRight;

        // Add the current level's values to the result array
        result.push(row);
    }

    // Return the final result of zigzag level order traversal
    return result;
}
