/* eslint-disable no-use-before-define */
class TreeNode<T> {
	value: T;
	left: TreeNode<T> | null;
	right: TreeNode<T> | null;

	constructor(value: T) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

export default TreeNode;
