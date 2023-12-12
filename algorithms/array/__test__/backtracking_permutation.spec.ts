import permute from '../backtracking_permutation';

describe('Backtracking permutation', () => {
	it('should return an array of arrays containing all permutations of the input array', () => {
		const input = [1, 2, 3];

		const expected = [
			[1, 2, 3],
			[2, 1, 3],
			[1, 3, 2],
			[3, 1, 2],
			[3, 2, 1],
			[2, 3, 1],
		];

		const result = permute(input);

		expect(result).toEqual(expected);
	});

	it('should return an empty array when given an empty array as input', () => {
		const input: number[] = [];
		const expected: number[][] = [[]];

		const result = permute(input);

		expect(result).toEqual(expected);
	});

	it('should return an array with all permutations of the input array when given an array of length 2 as input', () => {
		const input = [1, 2];
		const expected = [
			[1, 2],
			[2, 1],
		];

		const result = permute(input);

		expect(result).toEqual(expected);
	});
});
