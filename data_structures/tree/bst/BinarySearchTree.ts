import TreeNode from './TreeNode';

function baseCompareFunction<T>(a: T, b: T) {
	if (typeof a === 'string' && typeof b === 'string') {
		return a.localeCompare(b);
	}

	return (a as number) - (b as number);
}

class BinaryTree<T> {
	root: TreeNode<T> | null;
	compareFunction: typeof baseCompareFunction<T>;

	constructor(compareFunction?: typeof baseCompareFunction<T>) {
		this.root = null;
		this.compareFunction = compareFunction ?? baseCompareFunction;
	}

	insert(value: T) {
		const insertInto = (node: TreeNode<T> | null, v: T): TreeNode<T> => {
			if (node === null) {
				return new TreeNode(v);
			}

			if (this.compareFunction(v, node.value) <= 0) {
				node.left = insertInto(node.left, v);
			} else {
				node.right = insertInto(node.right, v);
			}

			return node;
		};

		this.root = insertInto(this.root, value);
	}

	find(value: T, node: TreeNode<T> | null = this.root): TreeNode<T> | null {
		if (node === null) {
			return null;
		}

		if (node.value === value) {
			return node;
		}

		return this.compareFunction(value, node.value) <= 0
			? this.find(value, node.left)
			: this.find(value, node.right);
	}

	remove(value: T) {
		function findMinNode(root: TreeNode<T> | null): TreeNode<T> | null {
			if (root === null || root.left === null) {
				return root;
			}

			return findMinNode(root.left);
		}

		const removeRecursive = (root: TreeNode<T> | null, v: T) => {
			if (root === null) {
				return null;
			}

			if (this.compareFunction(v, root.value) < 0) {
				root.left = removeRecursive(root.left, v);
			} else if (this.compareFunction(v, root.value) > 0) {
				root.right = removeRecursive(root.right, v);
			} else {
				if (root.left === null) {
					return root.right;
				}

				if (root.right === null) {
					return root.left;
				}

				const minNode = findMinNode(root.right);

				if (minNode !== null) {
					root.value = minNode.value;
					root.right = removeRecursive(root.right, minNode.value);
				}
			}

			return root;
		};

		this.root = removeRecursive(this.root, value);

		return this;
	}

	contains(value: T) {
		return this.find(value) !== null;
	}

	inOrderTraversal(callback: (value: T) => void) {
		function inOrderTraversalRecursive(root: TreeNode<T> | null) {
			if (root === null) {
				return;
			}

			inOrderTraversalRecursive(root.left);
			callback(root.value);
			inOrderTraversalRecursive(root.right);
		}

		inOrderTraversalRecursive(this.root);
	}

	preOrderTraversal(callback: (value: T) => void) {
		function preOrderTraversalRecursive(root: TreeNode<T> | null) {
			if (root === null) {
				return;
			}

			callback(root.value);
			preOrderTraversalRecursive(root.left);
			preOrderTraversalRecursive(root.right);
		}

		preOrderTraversalRecursive(this.root);
	}

	postOrderTraversal(callback: (value: T) => void) {
		function postOrderTraversalRecursive(root: TreeNode<T> | null) {
			if (root === null) {
				return;
			}

			postOrderTraversalRecursive(root.left);
			postOrderTraversalRecursive(root.right);
			callback(root.value);
		}

		postOrderTraversalRecursive(this.root);
	}
}

export default BinaryTree;
