import doubleSelectionSort from '../selection/double_selection';

describe('Double selection sort', () => {
	it('should sort an array of numbers in ascending order', () => {
		const arr = [5, 2, 8, 1, 9];

		const sortedArr = doubleSelectionSort(arr);

		expect(sortedArr).toEqual([1, 2, 5, 8, 9]);
	});

	it('should sort an array of objects based on a specific property', () => {
		const arr = [
			{ name: 'John', age: 25 },
			{ name: 'Alice', age: 30 },
			{ name: 'Bob', age: 20 },
		];

		const sortedArr = doubleSelectionSort(arr, (a, b) => a.age - b.age);

		expect(sortedArr).toEqual([
			{ name: 'Bob', age: 20 },
			{ name: 'John', age: 25 },
			{ name: 'Alice', age: 30 },
		]);
	});
});
