import type TreeNode from '../../data_structures/tree/bst/TreeNode';
import TreeRotations from '../TreeRotations';

describe('TreeRotations', () => {
	const treeRotations = new TreeRotations();
	let rootLeft: TreeNode<number>;
	let rootRight: TreeNode<number>;

	/**
	 * Tree structure:		5
	 * 					3		6
	 * 				2	  4
	 */

	beforeEach(() => {
		rootLeft = {
			value: 5,
			left: {
				value: 3,
				left: { value: 2, left: null, right: null },
				right: { value: 4, left: null, right: null },
			},
			right: { value: 6, left: null, right: null },
		};

		rootRight = {
			value: 3,
			left: { value: 2, left: null, right: null },
			right: {
				value: 5,
				left: { value: 4, left: null, right: null },
				right: { value: 6, left: null, right: null },
			},
		};
	});

	it('should perform a right rotation on the given node', () => {
		/**
		 * after right rotation:
		 * Tree structure:		3
		 * 					2		5
		 * 						4		6
		 */
		const newRoot = treeRotations.zig(rootLeft);

		expect(newRoot).toEqual(rootRight);
	});

	it('should perform a left rotation on the given node', () => {
		const newRoot = treeRotations.zag(rootRight);

		/**
		 * after left rotation:
		 * Tree structure:		6
		 * 					5
		 * 				3
		 * 			2		4
		 */
		expect(newRoot).toEqual(rootLeft);
	});

	it('should perform a left-right rotation on the given node', () => {
		const newRoot = treeRotations.zigZag(rootRight);

		/**
		 * after left-right rotation:
		 * Tree structure:		4
		 * 					3		5
		 * 				2              6
		 */
		expect(newRoot).toEqual({
			value: 4,
			left: {
				value: 3,
				left: { value: 2, left: null, right: null },
				right: null,
			},
			right: {
				value: 5,
				left: null,
				right: { value: 6, left: null, right: null },
			},
		});
	});

	it('should perform a right-left rotation on the given node', () => {
		const newRoot = treeRotations.zagZig(rootLeft);

		/**
		 * after right-left rotation:
		 * Tree structure:		4
		 * 					3		5
		 * 				2              6
		 */
		expect(newRoot).toEqual({
			value: 4,
			left: {
				value: 3,
				left: { value: 2, left: null, right: null },
				right: null,
			},
			right: {
				value: 5,
				left: null,
				right: { value: 6, left: null, right: null },
			},
		});
	});

	it('should perform a right-right rotation on the given node', () => {
		const newRoot = treeRotations.zigZig(rootLeft);

		/**
		 * after right-right rotation:
		 * Tree structure:		2
		 * 							3
		 * 								5
		 * 							4		6
		 */
		expect(newRoot).toEqual({
			value: 2,
			left: null,
			right: {
				value: 3,
				left: null,
				right: {
					value: 5,
					left: {
						value: 4,
						left: null,
						right: null,
					},
					right: {
						value: 6,
						left: null,
						right: null,
					},
				},
			},
		});
	});

	it('should perform a left-left rotation on the given node', () => {
		const newRoot = treeRotations.zagZag(rootRight);

		/**
		 * after left-left rotation:
		 * Tree structure:		6
		 * 					5
		 * 				3
		 * 			2	   4
		 */
		expect(newRoot).toEqual({
			value: 6,
			left: {
				value: 5,
				left: {
					value: 3,
					left: {
						value: 2,
						left: null,
						right: null,
					},
					right: {
						value: 4,
						left: null,
						right: null,
					},
				},
				right: null,
			},
			right: null,
		});
	});
});
