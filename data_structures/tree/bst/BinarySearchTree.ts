import TreeNode from './TreeNode';

function baseCompareFunction<T>(a: T, b: T) {
	if (typeof a === 'string' && typeof b === 'string') {
		return a.localeCompare(b);
	}

	return (a as number) - (b as number);
}

class BinaryTree<T> {
	protected root: TreeNode<T> | null;
	compareFunction: typeof baseCompareFunction<T>;

	constructor(compareFunction?: typeof baseCompareFunction<T>) {
		this.root = null;
		this.compareFunction = compareFunction ?? baseCompareFunction;
	}

	getRoot() {
		return this.root;
	}

	insert(value: T) {
		this.root = this.insertRecursive(this.root, value);

		return this;
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
		this.root = this.removeRecursive(this.root, value);

		return this;
	}

	getMaxNode(node: TreeNode<T> | null = this.root): TreeNode<T> | null {
		if (node === null) {
			return null;
		}

		return node.right ? this.getMaxNode(node.right) : node;
	}

	getMinNode(node: TreeNode<T> | null = this.root): TreeNode<T> | null {
		if (node === null) {
			return null;
		}

		return node.left ? this.getMinNode(node.left) : node;
	}

	getHeight(node: TreeNode<T> | null): number {
		if (node === null) {
			return 0;
		}

		const leftHeight = this.getHeight(node.left);
		const rightHeight = this.getHeight(node.right);

		return Math.max(leftHeight, rightHeight) + 1;
	}

	contains(value: T) {
		return this.find(value) !== null;
	}

	// Best for print tree
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

	// best for copying tree
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

	// best for deleting tree
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

	private insertRecursive(node: TreeNode<T> | null, v: T): TreeNode<T> {
		if (node === null) {
			return this.createNode(v);
		}

		if (this.compareFunction(v, node.value) <= 0) {
			node.left = this.insertRecursive(node.left, v);
		} else {
			node.right = this.insertRecursive(node.right, v);
		}

		return this.insertCallback(node)!;
	}

	private removeRecursive(root: TreeNode<T> | null, v: T) {
		if (root === null) {
			return null;
		}

		if (this.compareFunction(v, root.value) < 0) {
			root.left = this.removeRecursive(root.left, v);
		} else if (this.compareFunction(v, root.value) > 0) {
			root.right = this.removeRecursive(root.right, v);
		} else {
			if (root.left === null) {
				return root.right;
			}

			if (root.right === null) {
				return root.left;
			}

			const minNode = this.getMinNode(root.right);

			if (minNode !== null) {
				root.value = minNode.value;
				root.right = this.removeRecursive(root.right, minNode.value);
			}
		}

		if (root) {
			this.removeCallback(root);
		}

		return root;
	}

	protected removeCallback(node: TreeNode<T> | null): TreeNode<T> | null {
		return node;
	}

	protected insertCallback(node: TreeNode<T> | null): TreeNode<T> | null {
		return node;
	}

	protected createNode(value: T): TreeNode<T> {
		return new TreeNode(value);
	}
}

export default BinaryTree;
