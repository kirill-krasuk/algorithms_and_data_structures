import countingSort from '../distribution/counting';

describe('Counting sort', () => {
	it('should sort an array of positive integers in ascending order', () => {
		const arr = [4, 2, 7, 1, 5];
		const sortedArr = countingSort(arr);
		expect(sortedArr).toEqual([1, 2, 4, 5, 7]);
	});

	it('should sort an array of negative integers in ascending order', () => {
		const arr = [-4, -2, -7, -1, -5];
		const sortedArr = countingSort(arr);
		expect(sortedArr).toEqual([-7, -5, -4, -2, -1]);
	});

	it('should sort an array of mixed positive and negative integers in ascending order', () => {
		const arr = [-4, 2, -7, 1, -5];
		const sortedArr = countingSort(arr);
		expect(sortedArr).toEqual([-7, -5, -4, 1, 2]);
	});

	it('should sort an array of length 1000000 in ascending order', () => {
		const arr = Array.from({ length: 1000000 }, (_, i) => i + 1);
		const sortedArr = countingSort(arr);
		expect(sortedArr).toEqual(Array.from({ length: 1000000 }, (_, i) => i + 1));
	});
});
