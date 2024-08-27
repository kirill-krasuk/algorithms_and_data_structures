import prefixArray from '../prefix_array';

describe('prefix array', () => {
	let array: number[];

	beforeEach(() => {
		array = prefixArray.build([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	});

	it('should prefix the array into chunks of the specified size', () => {
		expect(array).toEqual([1, 3, 6, 10, 15, 21, 28, 36, 45]);
	});

	it('should correctly calculate the sum of elements between two indices when given a valid prefix array', () => {
		const left = 2;
		const right = 5;
		const result = prefixArray.getFrom(array, left, right);
		expect(result).toBe(18);
	});
});
