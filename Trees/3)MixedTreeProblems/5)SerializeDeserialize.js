/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    let sb = "";
    serializeData(root, sb);

    function serializeData(root) {
        if (root == null) {
            sb = sb + "# ";
            return;
        }

        sb = sb + root.val + " ";
        serializeData(root.left);
        serializeData(root.right);
    }
    return sb.trim();
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    let arr = data.split(" ");

    let i = 0;

    let root = helper(arr);

    function helper(arr) {
        if (arr[i] === "#") {
            i++;
            return null;
        }

        let newRoot = new TreeNode(parseInt(arr[i]));
        i++;

        newRoot.left = helper(arr);
        newRoot.right = helper(arr);

        return newRoot;
    }
    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
