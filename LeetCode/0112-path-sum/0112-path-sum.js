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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    function DFS(p, current) {
        if(p===null) return false;
        if(!p.left && !p.right && current+p.val===targetSum) return true;

        if(DFS(p.left, current+p.val)) return true;
        if(DFS(p.right, current+p.val)) return true;

        return false;
    }

    return DFS(root, 0);
};