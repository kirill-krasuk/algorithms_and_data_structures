import { bucketSort, bucketSortRecursive } from '../distribution/bucket';

describe('Bucket sort', () => {
	it('should sort an array of positive integers in ascending order', () => {
		const arr = [5, 2, 8, 1, 9];
		const sortedArr = bucketSort(arr);
		expect(sortedArr).toEqual([1, 2, 5, 8, 9]);
	});

	it('should sort an array of positive floats in ascending order', () => {
		const arr = [5.5, 2.2, 8.8, 1.1, 9.9];
		const sortedArr = bucketSort(arr);
		expect(sortedArr).toEqual([1.1, 2.2, 5.5, 8.8, 9.9]);
	});

	it('should sort an array of integers with duplicates in ascending order', () => {
		const arr = [5, 2, 8, 1, 9, 2, 5];
		const sortedArr = bucketSort(arr);
		expect(sortedArr).toEqual([1, 2, 2, 5, 5, 8, 9]);
	});

	it('should sort an array of positive integers in ascending order', () => {
		const arr = [5, 2, 8, 1, 9];
		const expected = [1, 2, 5, 8, 9];
		const result = bucketSortRecursive(arr);
		expect(result).toEqual(expected);
	});
});
