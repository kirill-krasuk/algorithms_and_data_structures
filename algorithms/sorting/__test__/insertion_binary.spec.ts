import insertionBinarySort from '../insertion/insertion_binary';

// Отдельный тест, так как функция не имеет компоратора
describe('Insertion sort with binary search', () => {
	it('should correctly sort an array of numbers in ascending order', () => {
		// Arrange
		const arr = [5, 3, 1, 4, 2];
		const expected = [1, 2, 3, 4, 5];

		// Act
		const sortedArr = insertionBinarySort(arr);

		// Assert
		expect(sortedArr).toEqual(expected);
	});
});
