import insertionSortList from '.';
import LinkedNode from '../../../../data_structures/list/linked-list/Node';

describe('insertionSortList', () => {
	it('should return the same list when the input list is already sorted in ascending order', () => {
		const input = new LinkedNode(1, new LinkedNode(2, new LinkedNode(3)));

		const expected = new LinkedNode(1, new LinkedNode(2, new LinkedNode(3)));

		expect(insertionSortList(input)).toEqual(expected);
	});

	it('should return the sorted list in ascending order when the input list is sorted in descending order', () => {
		const input = new LinkedNode(3, new LinkedNode(2, new LinkedNode(1)));
		const expected = new LinkedNode(1, new LinkedNode(2, new LinkedNode(3)));

		expect(insertionSortList(input)).toEqual(expected);
	});

	it('should return the same list when the input list has only one element', () => {
		const input = new LinkedNode(1);

		const expected = new LinkedNode(1);

		expect(insertionSortList(input)).toEqual(expected);
	});

	it('should return the sorted list in ascending order when the input list has multiple elements in random order', () => {
		const input = new LinkedNode(
			3,
			new LinkedNode(1, new LinkedNode(2, new LinkedNode(5, new LinkedNode(4)))),
		);

		const expected = new LinkedNode(
			1,
			new LinkedNode(2, new LinkedNode(3, new LinkedNode(4, new LinkedNode(5)))),
		);

		expect(insertionSortList(input)).toEqual(expected);
	});
});
