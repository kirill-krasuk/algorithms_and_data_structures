import permute from '../backtracking_permutation';

describe('Backtracking permutation', () => {
	it('should return an array of arrays containing all permutations of the input array', () => {
		// Arrange
		const input = [1, 2, 3];
		const expected = [
			[1, 2, 3],
			[2, 1, 3],
			[1, 3, 2],
			[3, 1, 2],
			[3, 2, 1],
			[2, 3, 1],
		];

		// Act
		const result = permute(input);

		// Assert
		expect(result).toEqual(expected);
	});

	it('should return an empty array when given an empty array as input', () => {
		// Arrange
		const input: number[] = [];
		const expected: number[][] = [[]];

		// Act
		const result = permute(input);

		// Assert
		expect(result).toEqual(expected);
	});

	it('should return an array with all permutations of the input array when given an array of length 2 as input', () => {
		// Arrange
		const input = [1, 2];
		const expected = [
			[1, 2],
			[2, 1],
		];

		// Act
		const result = permute(input);

		// Assert
		expect(result).toEqual(expected);
	});
});
