import treeSort from '../insertion/tree';

describe('Tree sort', () => {
	it('should return a sorted array in ascending order when given an array of numbers', () => {
		const array = [4, 2, 6, 1, 3, 5];
		const expected = [1, 2, 3, 4, 5, 6];

		const result = treeSort(array);

		expect(result).toEqual(expected);
	});

	it('should return a sorted array in alphabetical order when given an array of strings', () => {
		const array = ['banana', 'apple', 'cherry', 'date'];
		const expected = ['apple', 'banana', 'cherry', 'date'];

		const result = treeSort(array, (a, b) => a.localeCompare(b));

		expect(result).toEqual(expected);
	});

	it('should return a sorted array in ascending order when given an array of floating point numbers', () => {
		const array = [4.5, 2.3, 6.7, 1.2, 3.9, 5.1];
		const expected = [1.2, 2.3, 3.9, 4.5, 5.1, 6.7];

		const result = treeSort(array);

		expect(result).toEqual(expected);
	});

	it('should handle arrays with complex objects by age', () => {
		const array = [
			{ name: 'John', age: 25 },
			{ name: 'Alice', age: 30 },
			{ name: 'Bob', age: 20 },
		];
		const expected = [
			{ name: 'Bob', age: 20 },
			{ name: 'John', age: 25 },
			{ name: 'Alice', age: 30 },
		];

		const result = treeSort(array, (a, b) => a.age - b.age);

		expect(result).toEqual(expected);
	});

	it('should handle arrays with complex objects by name', () => {
		const array = [
			{ name: 'John', age: 25 },
			{ name: 'Alice', age: 30 },
			{ name: 'Bob', age: 20 },
		];
		const expected = [
			{ name: 'Alice', age: 30 },
			{ name: 'Bob', age: 20 },
			{ name: 'John', age: 25 },
		];

		const result = treeSort(array, (a, b) => a.name.localeCompare(b.name));

		expect(result).toEqual(expected);
	});
});
