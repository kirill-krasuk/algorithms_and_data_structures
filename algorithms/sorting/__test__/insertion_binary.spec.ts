import insertionBinarySort from '../insertion/insertion_binary';

describe('Insertion sort with binary search', () => {
	it('should correctly sort an array of numbers in ascending order', () => {
		const arr = [5, 3, 1, 4, 2];
		const sortedArr = insertionBinarySort(arr);
		expect(sortedArr).toEqual([1, 2, 3, 4, 5]);
	});
});
