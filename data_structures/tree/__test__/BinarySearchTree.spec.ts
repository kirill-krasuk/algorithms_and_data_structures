/* eslint-disable no-shadow */
import BinarySearchTree from '../bst/BinarySearchTree';

describe('BinarySearchTree', () => {
	let bst: BinarySearchTree<number>;

	beforeEach(() => {
		bst = new BinarySearchTree();
	});

	it('should insert elements into the BST correctly', () => {
		bst.insert(5);
		bst.insert(2);
		bst.insert(8);

		expect(bst.contains(5)).toBeTruthy();
		expect(bst.contains(2)).toBeTruthy();
		expect(bst.contains(8)).toBeTruthy();
	});

	it('should return true if the element is in the BST', () => {
		bst.insert(3);
		bst.insert(7);
		bst.insert(9);

		expect(bst.contains(7)).toBeTruthy();
	});

	it('should return false if the element is not in the BST', () => {
		bst.insert(1);
		bst.insert(4);

		expect(bst.contains(6)).toBeFalsy();
	});

	it('should remove the specified element from the BST', () => {
		bst.insert(10);
		bst.insert(5);
		bst.insert(15);
		bst.insert(3);

		bst.remove(5);
		expect(bst.contains(5)).toBeFalsy();
	});

	it('should handle removal of the root node correctly', () => {
		bst.insert(20);
		bst.insert(10);
		bst.insert(30);

		bst.remove(20);

		expect(bst.contains(20)).toBeFalsy();
	});

	it('should maintain correct structure after insertions', () => {
		bst.insert(10);
		bst.insert(5);
		bst.insert(15);
		bst.insert(3);
		bst.insert(7);

		const { root } = bst;
		expect(root!.value).toBe(10);
		expect(root!.left!.value).toBe(5);
		expect(root!.right!.value).toBe(15);
		expect(root!.left!.left!.value).toBe(3);
		expect(root!.left!.right!.value).toBe(7);
	});

	it('should maintain correct structure after removals', () => {
		bst.insert(10);
		bst.insert(5);
		bst.insert(15);
		bst.insert(3);
		bst.insert(7);

		bst.remove(5);

		const { root } = bst;
		expect(root!.value).toBe(10);
		expect(root!.left!.value).toBe(7);
		expect(root!.left!.left!.value).toBe(3);
	});

	it('should correctly update the root after root removal', () => {
		bst.insert(20);
		bst.insert(10);
		bst.insert(30);

		bst.remove(20);

		const { root } = bst;
		expect(root!.value).toBe(30);
	});

	it('should handle deep tree insertion and removal correctly', () => {
		const bst = new BinarySearchTree<{ key: number }>((a, b) => a.key - b.key);

		const nodes = [
			{ key: 20 },
			{ key: 10 },
			{ key: 30 },
			{ key: 5 },
			{ key: 15 },
			{ key: 25 },
			{ key: 35 },
			{ key: 3 },
			{ key: 7 },
			{ key: 13 },
			{ key: 17 },
			{ key: 23 },
			{ key: 27 },
			{ key: 33 },
			{ key: 37 },
		];

		nodes.forEach((node) => bst.insert(node));

		/**
		 * remove 10
		 *
		 *        before delete           -->          after delete
		 *            20                                      20
		 *        /         \                             /         \
		 *      10          30                          13          30
		 *     /   \       /   \                       /   \       /   \
		 *    5     15    25    35                    5     15    25    35
		 *   /\    /\     /\    /\                   /\      \    /\    /\
		 * 3  7  13 17  23 27  33 37                3  7    17  23 27  33 37
		 *
		 */

		bst.remove(nodes[1]);

		const { root } = bst;

		expect(root!.value).toEqual(nodes[0]);
		// node 13 was moved to the root
		expect(root!.left!.value).toEqual(nodes[9]);
		expect(root!.right!.value).toEqual(nodes[2]);
		expect(root!.left!.left!.value).toEqual(nodes[3]);
		expect(root!.left!.right!.value).toEqual(nodes[4]);
		expect(root!.left!.left!.left!.value).toEqual(nodes[7]);
		expect(root!.left!.left!.right!.value).toEqual(nodes[8]);
		expect(root!.left!.right!.right!.value).toEqual(nodes[10]);
		expect(root!.right!.left!.value).toEqual(nodes[5]);
		expect(root!.right!.right!.value).toEqual(nodes[6]);
		expect(root!.right!.left!.left!.value).toEqual(nodes[11]);
		expect(root!.right!.left!.right!.value).toEqual(nodes[12]);
		expect(root!.right!.right!.left!.value).toEqual(nodes[13]);
		expect(root!.right!.right!.right!.value).toEqual(nodes[14]);
	});

	it('should correctly perform in-order traversal', () => {
		bst.insert(10);
		bst.insert(5);
		bst.insert(15);
		bst.insert(3);
		bst.insert(7);
		bst.insert(12);
		bst.insert(18);

		const result: number[] = [];
		bst.inOrderTraversal((value) => result.push(value));

		expect(result).toEqual([3, 5, 7, 10, 12, 15, 18]);
	});

	it('should correctly perform pre-order traversal', () => {
		bst.insert(10);
		bst.insert(5);
		bst.insert(15);
		bst.insert(3);
		bst.insert(7);
		bst.insert(12);
		bst.insert(18);

		const result: number[] = [];
		bst.preOrderTraversal((value) => result.push(value));

		expect(result).toEqual([10, 5, 3, 7, 15, 12, 18]);
	});

	it('should correctly perform post-order traversal', () => {
		bst.insert(10);
		bst.insert(5);
		bst.insert(15);
		bst.insert(3);
		bst.insert(7);
		bst.insert(12);
		bst.insert(18);

		const result: number[] = [];
		bst.postOrderTraversal((value) => result.push(value));

		expect(result).toEqual([3, 7, 5, 12, 18, 15, 10]);
	});
});
