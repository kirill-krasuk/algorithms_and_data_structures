function testSort(
	sortFunction: <T>(array: T[], compareFunction?: (a: T, b: T) => number) => T[],
) {
	describe(`Testing ${sortFunction.name}`, () => {
		it('should sort an empty array', () => {
			// Arrange
			const arr: number[] = [];
			const expected: number[] = [];

			// Act
			const result = sortFunction(arr);

			// Assert
			expect(result).toEqual(expected);
		});

		it('should correctly sort an array of numbers in ascending order', () => {
			// Arrange
			const arr = [5, 3, 1, 4, 2];
			const expected = [1, 2, 3, 4, 5];

			// Act
			const sortedArr = sortFunction(arr);

			// Assert
			expect(sortedArr).toEqual(expected);
		});

		it('should correctly sort an array of numbers in descending order', () => {
			// Arrange
			const arr = [5, 3, 1, 4, 2];
			const expected = [5, 4, 3, 2, 1];

			// Act
			const sortedArr = sortFunction(arr, (a, b) => b - a);

			// Assert
			expect(sortedArr).toEqual(expected);
		});

		it('should sort an array of positive and negative integers in ascending order', () => {
			// Arrange
			const arr = [-5, -2, 8, -1, 9];
			const expected = [-5, -2, -1, 8, 9];

			// Act
			const result = sortFunction(arr);

			// Assert
			expect(result).toEqual(expected);
		});

		it('should sort an array of positive floats in ascending order', () => {
			// Arrange
			const arr = [5.5, 2.2, 8.8, 1.1, 9.9];
			const expected = [1.1, 2.2, 5.5, 8.8, 9.9];

			// Act
			const result = sortFunction(arr);

			// Assert
			expect(result).toEqual(expected);
		});

		it('should sort an array of integers with duplicates in ascending order', () => {
			// Arrange
			const arr = [5, 2, 8, 1, 9, 2, 5];
			const expected = [1, 2, 2, 5, 5, 8, 9];

			// Act
			const result = sortFunction(arr);

			// Assert
			expect(result).toEqual(expected);
		});

		it('should sort an array with non-numeric values when calling heapSort', () => {
			// Arrange
			const arr = ['b', 'a', 'c'];
			const expected = ['a', 'b', 'c'];

			// Act
			const result = sortFunction(arr, (a, b) => a.localeCompare(b));

			// Assert
			expect(result).toEqual(expected);
		});

		it('should sort an array of objects based on a specific property', () => {
			// Arrange
			const arr = [
				{ name: 'John', age: 25 },
				{ name: 'Alice', age: 30 },
				{ name: 'Bob', age: 20 },
			];
			const expected = [
				{ name: 'Bob', age: 20 },
				{ name: 'John', age: 25 },
				{ name: 'Alice', age: 30 },
			];

			// Act
			const sortedArr = sortFunction(arr, (a, b) => a.age - b.age);

			// Assert
			expect(sortedArr).toEqual(expected);
		});

		it('should sort an array with Infinity values when calling heapSort', () => {
			// Arrange
			const arr = [Infinity, 2, -Infinity, 1];
			const expected = [-Infinity, 1, 2, Infinity];

			// Act
			const result = sortFunction(arr);

			// Assert
			expect(result).toEqual(expected);
		});

		it('should correctly sort a large array', () => {
			// Arrange
			const arr = [];
			const expected = [...Array(1000)].map((_, i) => i + 1);
			for (let i = 1000; i >= 1; i--) {
				arr.push(i);
			}

			// Act
			const sortedArr = sortFunction(arr);

			// Assert
			expect(sortedArr).toEqual(expected);
		});

		it('should work with arrays containing objects with a numeric property in descending order', () => {
			// Arrange
			const arr = [{ num: 5 }, { num: 3 }, { num: 1 }, { num: 4 }, { num: 2 }];
			const expected = [{ num: 5 }, { num: 4 }, { num: 3 }, { num: 2 }, { num: 1 }];

			// Act
			const sortedArr = sortFunction(arr, (a, b) => b.num - a.num);

			// Assert
			expect(sortedArr).toEqual(expected);
		});

		it('should return the sorted array when given an array with objects with a string property', () => {
			// Arrange
			const arr = [{ name: 'c' }, { name: 'a' }, { name: 'b' }];
			const expected = [{ name: 'a' }, { name: 'b' }, { name: 'c' }];

			// Act
			const sortedArray = sortFunction(arr, (a, b) => a.name.localeCompare(b.name));

			// Assert
			expect(sortedArray).toEqual(expected);
		});
	});
}

export default testSort;
