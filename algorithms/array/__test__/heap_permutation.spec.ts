import heapPermutations from '../heap_permutation';

describe('Heap permutation', () => {
	it('should return all permutations of the input array', () => {
		// Arrange
		const arr = [1, 2, 3];
		const expected = [
			[1, 2, 3],
			[2, 1, 3],
			[3, 1, 2],
			[1, 3, 2],
			[2, 3, 1],
			[3, 2, 1],
		];

		// Act
		const result = heapPermutations(arr);

		// Assert
		expect(result).toEqual(expected);
	});

	it('should return an empty array when the input array is empty', () => {
		// Arrange
		const arr: number[] = [];
		const expected: number[][] = [];

		// Act
		const result = heapPermutations(arr);

		// Assert
		expect(result).toEqual(expected);
	});
});
