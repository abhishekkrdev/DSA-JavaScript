// https://leetcode.com/problems/binary-tree-level-order-traversal-ii/description/
var levelOrderBottom = function (root) {
    if (!root) return [];

    let result = [];
    let queue = [root];

    while (queue.length > 0) {
        let levelSize = queue.length;
        let currentLevel = [];

        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift(); // Dequeue
            currentLevel.push(node.val);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.unshift(currentLevel); // Add the level at the beginning
    }

    return result;
};
