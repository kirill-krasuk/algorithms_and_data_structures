import countingSort from '../distribution/counting';

describe('Counting sort', () => {
	it('should sort an array of positive integers in ascending order', () => {
		// Arrange
		const arr = [4, 2, 7, 1, 5];
		const expected = [1, 2, 4, 5, 7];

		// Act
		const sortedArr = countingSort(arr);

		// Assert
		expect(sortedArr).toEqual(expected);
	});

	it('should sort an array of negative integers in ascending order', () => {
		// Arrange
		const arr = [-4, -2, -7, -1, -5];
		const expected = [-7, -5, -4, -2, -1];

		// Act
		const sortedArr = countingSort(arr);

		// Assert
		expect(sortedArr).toEqual(expected);
	});

	it('should sort an array of mixed positive and negative integers in ascending order', () => {
		// Arrange
		const arr = [-4, 2, -7, 1, -5];
		const expected = [-7, -5, -4, 1, 2];

		// Act
		const sortedArr = countingSort(arr);

		// Assert
		expect(sortedArr).toEqual(expected);
	});

	it('should sort an array of length 1000000 in ascending order', () => {
		// Arrange
		const arr = Array.from({ length: 1000000 }, (_, i) => i + 1);
		const expected = Array.from({ length: 1000000 }, (_, i) => i + 1);

		// Act
		const sortedArr = countingSort(arr);

		// Assert
		expect(sortedArr).toEqual(expected);
	});
});
