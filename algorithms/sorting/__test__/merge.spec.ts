import mergeSort from '../merge/merge';

describe('Merge sort', () => {
	it('should return the sorted array when given an unsorted array of numbers', () => {
		const unsortedArray = [4, 2, 1, 3];

		const sortedArray = mergeSort(unsortedArray);

		expect(sortedArray).toEqual([1, 2, 3, 4]);
	});

	it('should return an empty array when given an empty array', () => {
		const emptyArray: number[] = [];

		const result = mergeSort(emptyArray);

		expect(result).toEqual([]);
	});

	it('should return the sorted array when given an array with decimal numbers', () => {
		const unsortedArray = [4.5, 2.3, 1.1, 3.7];
		const sortedArray = mergeSort(unsortedArray);
		expect(sortedArray).toEqual([1.1, 2.3, 3.7, 4.5]);
	});

	it('should return the sorted array when given an array with objects with a numeric property', () => {
		const unsortedArray = [
			{ value: 4 },
			{ value: 2 },
			{ value: 1 },
			{ value: 3 },
			{ value: 5 },
		];

		const sortedArray = mergeSort(unsortedArray, (a, b) => a.value - b.value);

		expect(sortedArray).toEqual([
			{ value: 1 },
			{ value: 2 },
			{ value: 3 },
			{ value: 4 },
			{ value: 5 },
		]);
	});

	it('should return the sorted array when given an array with objects with a string property', () => {
		const unsortedArray = [{ name: 'c' }, { name: 'a' }, { name: 'b' }];

		const sortedArray = mergeSort(unsortedArray, (a, b) =>
			a.name.localeCompare(b.name),
		);

		expect(sortedArray).toEqual([{ name: 'a' }, { name: 'b' }, { name: 'c' }]);
	});
});
