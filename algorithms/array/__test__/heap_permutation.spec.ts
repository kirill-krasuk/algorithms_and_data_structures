import heapPermutations from '../heap_permutation';

describe('Heap permutation', () => {
	it('should return all permutations of the input array', () => {
		const arr = [1, 2, 3];

		const expected = [
			[1, 2, 3],
			[2, 1, 3],
			[3, 1, 2],
			[1, 3, 2],
			[2, 3, 1],
			[3, 2, 1],
		];

		const result = heapPermutations(arr);

		expect(result).toEqual(expected);
	});

	it('should return an empty array when the input array is empty', () => {
		const arr: number[] = [];
		const expected: number[][] = [];

		const result = heapPermutations(arr);

		expect(result).toEqual(expected);
	});
});
