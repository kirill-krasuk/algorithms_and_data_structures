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

function insert<T>(root: TreeNode<T> | null, value: T) {
	if (root === null) {
		return new TreeNode(value);
	}

	if (value <= root.value) {
		root.left = insert(root.left, value);
	} else {
		root.right = insert(root.right, value);
	}

	return root;
}

function inOrderTraversal<T>(root: TreeNode<T> | null, array: T[]) {
	if (root === null) {
		return;
	}

	inOrderTraversal(root.left, array);
	array.push(root.value);
	inOrderTraversal(root.right, array);
}

function treeSort<T>(array: T[]) {
	let root = null;

	for (let i = 0; i < array.length; i++) {
		root = insert(root, array[i]);
	}

	const sortedArray: T[] = [];
	inOrderTraversal(root, sortedArray);

	return sortedArray;
}

export default treeSort;
