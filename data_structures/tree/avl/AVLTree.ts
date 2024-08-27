import TreeRotations from '../../../utils/TreeRotations';
import BinarySearchTree from '../bst/BinarySearchTree';
import AVLTreeNode from './AVLTreeNode';

const LEFT_HEAVY = 1;
const RIGHT_HEAVY = -1;

class AVLTree<T> extends BinarySearchTree<T> {
	protected override root: AVLTreeNode<T> | null = null;
	private rotations = new TreeRotations<T, AVLTreeNode<T>>();

	override getRoot(): AVLTreeNode<T> | null {
		return this.root;
	}

	override getHeight(node: AVLTreeNode<T> | null): number {
		return node?.height ?? -1;
	}

	private updateHeight(node: AVLTreeNode<T>) {
		const leftTreeHeight = this.getHeight(node.left);
		const rightTreeHeight = this.getHeight(node.right);

		node.height = Math.max(leftTreeHeight, rightTreeHeight) + 1;
	}

	private getBalanceFactor(node: AVLTreeNode<T> | null): number {
		if (!node) {
			return 0;
		}

		const leftTreeHeight = this.getHeight(node.left);
		const rightTreeHeight = this.getHeight(node.right);

		return leftTreeHeight - rightTreeHeight;
	}

	private rotateLeft(node: AVLTreeNode<T>): AVLTreeNode<T> {
		const newParent = this.rotations.zag(node);
		this.updateHeight(node);
		this.updateHeight(newParent);

		return newParent;
	}

	private rotateRight(node: AVLTreeNode<T>): AVLTreeNode<T> {
		const newParent = this.rotations.zig(node);
		this.updateHeight(node);
		this.updateHeight(newParent);

		return newParent;
	}

	private rotateLeftRight(node: AVLTreeNode<T>): AVLTreeNode<T> {
		node.left = this.rotateLeft(node.left!);
		return this.rotateRight(node);
	}

	private rotateRightLeft(node: AVLTreeNode<T>): AVLTreeNode<T> {
		node.right = this.rotateRight(node.right!);
		return this.rotateLeft(node);
	}

	private balance(node: AVLTreeNode<T>): AVLTreeNode<T> {
		const balanceFactor = this.getBalanceFactor(node);

		if (balanceFactor > LEFT_HEAVY) {
			if (this.getBalanceFactor(node.left) < 0) {
				return this.rotateLeftRight(node);
			}

			return this.rotateRight(node);
		}

		if (balanceFactor < RIGHT_HEAVY) {
			if (this.getBalanceFactor(node.right) > 0) {
				return this.rotateRightLeft(node);
			}

			return this.rotateLeft(node);
		}

		return node;
	}

	protected override insertCallback(
		node: AVLTreeNode<T> | null,
	): AVLTreeNode<T> | null {
		if (!node) {
			return null;
		}

		this.updateHeight(node);
		return this.balance(node);
	}

	protected override removeCallback(
		node: AVLTreeNode<T> | null,
	): AVLTreeNode<T> | null {
		if (!node) {
			return null;
		}

		this.updateHeight(node);
		return this.balance(node);
	}

	protected override createNode(value: T): AVLTreeNode<T> {
		return new AVLTreeNode(value);
	}
}

export default AVLTree;
