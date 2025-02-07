var leftSideView = function (root) {
    if (!root) return [];

    let result = [];
    let queue = [root];

    while (queue.length > 0) {
        let levelSize = queue.length;
        let firstNode = null;

        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift(); // Dequeue
            if (firstNode === null) firstNode = node.val; // Store first node of this level

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(firstNode); // Add first node of the level
    }

    return result;
};

var leftSideViewDFS = function (root) {
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
        helper(root.left, level + 1, result);
        helper(root.right, level + 1, result);
    }

    helper(root, 0, result);
    return result;
};
