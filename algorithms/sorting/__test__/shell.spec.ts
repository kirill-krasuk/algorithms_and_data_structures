import shellSort from '../insertion/shell';

describe('Shell sort', () => {
	it('should sort an array of numbers in ascending order', () => {
		const arr = [5, 3, 8, 2, 1];

		const sortedArr = shellSort(arr);

		expect(sortedArr).toEqual([1, 2, 3, 5, 8]);
	});

	it('should sort an array of strings in lexicographical order', () => {
		const arr = ['banana', 'apple', 'cherry', 'date'];

		const sortedArr = shellSort(arr, (a, b) => a.localeCompare(b));

		expect(sortedArr).toEqual(['apple', 'banana', 'cherry', 'date']);
	});

	it('should sort an array of objects based on a specified property', () => {
		const arr = [
			{ name: 'John', age: 25 },
			{ name: 'Alice', age: 30 },
			{ name: 'Bob', age: 20 },
		];

		const sortedArr = shellSort(arr, (a, b) => a.age - b.age);

		expect(sortedArr).toEqual([
			{ name: 'Bob', age: 20 },
			{ name: 'John', age: 25 },
			{ name: 'Alice', age: 30 },
		]);
	});

	it('should correctly sort an array with negative numbers', () => {
		const arr = [-5, -3, -8, -2, -1];
		const sortedArr = shellSort(arr);
		expect(sortedArr).toEqual([-8, -5, -3, -2, -1]);
	});
});
