import lsdSort from '../distribution/radix/lsd';

describe('Radix sort (LSD)', () => {
	it('should sort an array of positive integers in ascending order', () => {
		const arr = [5, 2, 8, 1, 9];
		const sortedArr = lsdSort(arr);
		expect(sortedArr).toEqual([1, 2, 5, 8, 9]);
	});
});
