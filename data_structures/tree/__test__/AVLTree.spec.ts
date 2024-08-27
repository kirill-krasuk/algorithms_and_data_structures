import AVLTree from '../avl/AVLTree';

describe('AVLTree', () => {
	let tree = new AVLTree<number>();

	beforeEach(() => {
		tree = new AVLTree<number>();
	});

	it('should maintain balance after inserting elements', () => {
		tree.insert(10);
		tree.insert(20);
		tree.insert(30);

		const root = tree.getRoot()!;

		expect(root.value).toBe(20);
		expect(root.height).toBe(1);
		expect(root.left?.value).toBe(10);
		expect(root.right?.value).toBe(30);
	});

	it('should insert a node into an empty tree', () => {
		tree.insert(10);

		const root = tree.getRoot()!;

		expect(root.value).toBe(10);
		expect(root.height).toBe(0);
		expect(root.left).toBeNull();
		expect(root.right).toBeNull();
	});

	it('should balance the tree when nodes are inserted', () => {
		tree.insert(30);
		tree.insert(20);
		tree.insert(40);
		tree.insert(10);
		tree.insert(25);
		tree.insert(35);
		tree.insert(50);

		const root = tree.getRoot()!;

		expect(root.value).toBe(30);
		expect(root.left?.value).toBe(20);
		expect(root.right?.value).toBe(40);
		expect(root.left?.left?.value).toBe(10);
		expect(root.left?.right?.value).toBe(25);
		expect(root.right?.left?.value).toBe(35);
		expect(root.right?.right?.value).toBe(50);
	});

	it('should verify tree remains balanced after removing nodes', () => {
		tree.insert(20);
		tree.insert(10);
		tree.insert(30);
		tree.insert(5);
		tree.insert(15);
		tree.insert(25);
		tree.insert(35);
		tree.insert(3);
		tree.insert(7);
		tree.insert(13);
		tree.insert(17);

		const root = tree.getRoot()!;

		tree.remove(5);
		expect(root.value).toBe(20);
		expect(root.left?.value).toBe(10);
		expect(root.left?.left?.value).toBe(7);
		expect(root.left?.right?.value).toBe(15);

		tree.remove(30);
		expect(root.value).toBe(20);
		expect(root.right?.value).toBe(35);
		expect(root.right?.left?.value).toBe(25);

		tree.remove(10);
		expect(root.value).toBe(20);
		expect(root.left?.value).toBe(13);
		expect(root.left?.left?.value).toBe(7);
		expect(root.left?.right?.value).toBe(15);

		tree.remove(20);
		expect(root.value).toBe(25);
		expect(root.left?.value).toBe(15);
		expect(root.right?.value).toBe(35);
	});
});
