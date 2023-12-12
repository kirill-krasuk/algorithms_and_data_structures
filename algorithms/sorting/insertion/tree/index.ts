import defaultComparator from '../../../../utils/comparator';

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

function insert<T>(
	root: TreeNode<T> | null,
	value: T,
	comparator: (a: T, b: T) => number,
) {
	if (root === null) {
		return new TreeNode(value);
	}

	if (comparator(value, root.value) < 0) {
		root.left = insert(root.left, value, comparator);
	} else {
		root.right = insert(root.right, value, comparator);
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

function treeSort<T>(array: T[], comparator: (a: T, b: T) => number = defaultComparator) {
	let root = null;

	for (const value of array) {
		root = insert(root, value, comparator);
	}

	const sortedArray: T[] = [];
	inOrderTraversal(root, sortedArray);

	return sortedArray;
}

export default treeSort;
