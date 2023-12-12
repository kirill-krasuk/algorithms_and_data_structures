import TreeNode from './TreeNode';

function baseCompareFunction<T>(a: T, b: T) {
	return a <= b;
}

class BinaryTree<T> {
	root: TreeNode<T> | null;
	compareFunction: typeof baseCompareFunction<T>;

	constructor(compareFunction?: typeof baseCompareFunction<T>) {
		this.root = null;
		this.compareFunction = compareFunction ?? baseCompareFunction;
	}

	insert(value: T) {
		if (this.root === null) {
			this.root = new TreeNode(value);
			return;
		}

		let current = this.root;

		while (current !== null) {
			if (this.compareFunction(value, current.value)) {
				if (current.left === null) {
					current.left = new TreeNode(value);
					return;
				}

				current = current.left;
			} else {
				if (current.right === null) {
					current.right = new TreeNode(value);
					return;
				}

				current = current.right;
			}
		}
	}

	find(value: T) {
		let current = this.root;

		while (current !== null) {
			if (current.value === value) {
				return current;
			}

			if (this.compareFunction(value, current.value)) {
				current = current.left;
			} else {
				current = current.right;
			}
		}

		return null;
	}

	remove(value: T) {
		function findMinNode(root: TreeNode<T>) {
			let current = root;

			while (current.left !== null) {
				current = current.left;
			}

			return current;
		}

		function removeRecursive(root: TreeNode<T> | null, v: T) {
			if (root === null) {
				return null;
			}

			if (v < root.value) {
				root.left = removeRecursive(root.left, v);
			} else if (v > root.value) {
				root.right = removeRecursive(root.right, v);
			} else {
				if (root.left === null) {
					return root.right;
				}

				if (root.right === null) {
					return root.left;
				}

				const minNode = findMinNode(root.right);

				root.value = minNode.value;
				root.right = removeRecursive(root.right, minNode.value);
			}

			return root;
		}

		this.root = removeRecursive(this.root, value);

		return this;
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
