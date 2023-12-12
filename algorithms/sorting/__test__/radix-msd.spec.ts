import msdSort from '../distribution/radix/msd';

describe('Radix sort (MSD)', () => {
	it('should sort an array of positive integers in ascending order', () => {
		const arr = [5, 2, 8, 1, 9];
		const sortedArr = msdSort(arr);
		expect(sortedArr).toEqual([1, 2, 5, 8, 9]);
	});
});
