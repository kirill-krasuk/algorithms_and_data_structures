import isSorted from '../isSorted';

describe('isSorted', () => {
	it('should return true if the array is sorted in ascending order', () => {
		expect(isSorted([1, 2, 3, 4])).toBe(true);
		expect(isSorted([1, 1, 1, 1])).toBe(true);
		expect(isSorted([1, 2, 2, 3])).toBe(true);
		expect(isSorted([1, 1, 2, 2, 3, 3])).toBe(true);
	});

	it('should return true if the array is sorted in descending order', () => {
		expect(isSorted([4, 3, 2, 1], true)).toBe(true);
		expect(isSorted([3, 2, 1, 1], true)).toBe(true);
		expect(isSorted([3, 2, 2, 1], true)).toBe(true);
		expect(isSorted([3, 3, 2, 2, 1, 1], true)).toBe(true);
	});

	it('should return false if the array is not sorted', () => {
		expect(isSorted([1, 2, 3, 1])).toBe(false);
		expect(isSorted([1, 2, 3, 2])).toBe(false);
		expect(isSorted([1, 2, 3, 4, 2])).toBe(false);
		expect(isSorted([4, 3, 2, 1, 2])).toBe(false);
	});
});
