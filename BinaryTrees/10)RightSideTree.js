var rightSideView = function (root) {
    if (!root) return [];

    let result = [];
    let queue = [root];

    while (queue.length > 0) {
        let levelSize = queue.length;
        let rightmostNode = null;

        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift(); // Dequeue
            rightmostNode = node.val; // Update the last seen node in this level

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(rightmostNode); // Add last node of this level
    }

    return result;
};

var rightSideViewDFS = function (root) {
    let maxLevel = -1;
    let result = [];

    function helper(root, level, result) {
        if (root === null) {
            return;
        }

        if (level > maxLevel) {
            maxLevel = level;
            result.push(root.val);
        }
        helper(root.right, level + 1, result);
        helper(root.left, level + 1, result);
    }

    helper(root, 0, result);
    return result;
};
