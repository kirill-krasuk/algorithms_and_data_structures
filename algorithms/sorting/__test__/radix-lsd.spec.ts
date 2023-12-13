import lsdSort from '../distribution/radix/lsd';

describe('Radix sort (LSD)', () => {
	it('should sort an array of positive integers in ascending order', () => {
		// Arrange
		const arr = [5, 2, 8, 1, 9];
		const expected = [1, 2, 5, 8, 9];

		// Act
		const sortedArr = lsdSort(arr);

		// Assert
		expect(sortedArr).toEqual(expected);
	});
});
