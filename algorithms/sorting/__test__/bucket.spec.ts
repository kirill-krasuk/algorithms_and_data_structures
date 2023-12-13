import { bucketSort, bucketSortRecursive } from '../distribution/bucket';

// Сигнатура функции и работа отличается от других, по этому тесты используются здесь
// инлайн, а не в отдельном файле
describe('Bucket sort', () => {
	it('should sort an array of positive integers in ascending order', () => {
		// Arrange
		const arr = [5, 2, 8, 1, 9];
		const expected = [1, 2, 5, 8, 9];

		// Act
		const result = bucketSort(arr);

		// Assert
		expect(result).toEqual(expected);
	});

	it('should sort an array of positive and negative integers in ascending order', () => {
		// Arrange
		const arr = [-5, -2, 8, -1, 9];
		const expected = [-5, -2, -1, 8, 9];

		// Act
		const result = bucketSort(arr);

		// Assert
		expect(result).toEqual(expected);
	});

	it('should sort an array of positive floats in ascending order', () => {
		// Arrange
		const arr = [5.5, 2.2, 8.8, 1.1, 9.9];
		const expected = [1.1, 2.2, 5.5, 8.8, 9.9];

		// Act
		const result = bucketSort(arr);

		// Assert
		expect(result).toEqual(expected);
	});

	it('should sort an array of integers with duplicates in ascending order', () => {
		// Arrange
		const arr = [5, 2, 8, 1, 9, 2, 5];
		const expected = [1, 2, 2, 5, 5, 8, 9];

		// Act
		const result = bucketSort(arr);

		// Assert
		expect(result).toEqual(expected);
	});

	it('should sort an array of positive integers in ascending order', () => {
		// Arrange
		const arr = [5, 2, 8, 1, 9];
		const expected = [1, 2, 5, 8, 9];

		// Act
		const result = bucketSortRecursive(arr);

		// Assert
		expect(result).toEqual(expected);
	});

	it('should sort an array of positive integers in ascending order', () => {
		// Arrange
		const arr = [-5, -2, 8, -1, 9];
		const expected = [-5, -2, -1, 8, 9];

		// Act
		const result = bucketSortRecursive(arr);

		// Assert
		expect(result).toEqual(expected);
	});
});
