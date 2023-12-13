import msdSort from '../distribution/radix/msd';

describe('Radix sort (MSD)', () => {
	it('should sort an array of positive integers in ascending order', () => {
		// Arrange
		const arr = [5, 2, 8, 1, 9];
		const expected = [1, 2, 5, 8, 9];

		// Act
		const sortedArr = msdSort(arr);

		// Assert
		expect(sortedArr).toEqual(expected);
	});
});
