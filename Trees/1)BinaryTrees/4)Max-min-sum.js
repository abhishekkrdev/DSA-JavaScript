class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function findMax(root) {
    if (root === null) return -Infinity; // Base case for empty tree

    let leftMax = findMax(root.left);
    let rightMax = findMax(root.right);

    return Math.max(root.value, leftMax, rightMax);
}

function findMin(root) {
    if (root === null) return +Infinity; // Base case for empty tree

    let leftMax = findMin(root.left);
    let rightMax = findMin(root.right);

    return Math.max(root.value, leftMax, rightMax);
}

function findSum(root) {
    if (root === null) return 0; // Base case for empty tree

    let leftSum = findSum(root.left);
    let rightSum = findSum(root.right);

    return root.value + leftSum + rightSum;
}
