import TreeNode from '../bst/TreeNode';

class AVLTreeNode<T> extends TreeNode<T> {
	height: number;
	override left: AVLTreeNode<T> | null = null;
	override right: AVLTreeNode<T> | null = null;

	constructor(data: T) {
		super(data);
		this.height = 0;
	}
}

export default AVLTreeNode;
