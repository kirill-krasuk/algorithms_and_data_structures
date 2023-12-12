import heapSort from '../selection/heap';

describe('Heap sort', () => {
	it('should sort an array of numbers in ascending order', () => {
		const arr = [4, 2, 7, 1, 5];

		const result = heapSort(arr);

		expect(result).toEqual([1, 2, 4, 5, 7]);
	});

	it('should sort an empty array', () => {
		const arr: number[] = [];

		const result = heapSort(arr);

		expect(result).toEqual([]);
	});

	it('should sort an array with non-numeric values when calling heapSort', () => {
		const arr = ['b', 'a', 'c'];

		const result = heapSort(arr, (a, b) => a.localeCompare(b));

		expect(result).toEqual(['a', 'b', 'c']);
	});

	it('should sort an array with Infinity values when calling heapSort', () => {
		const arr = [Infinity, 2, -Infinity, 1];

		const result = heapSort(arr);

		expect(result).toEqual([-Infinity, 1, 2, Infinity]);
	});
});
