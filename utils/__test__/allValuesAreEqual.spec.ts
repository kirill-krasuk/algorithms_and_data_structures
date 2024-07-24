import allValuesAreEqual from '../allValuesAreEqual';

describe('allValuesAreEqual', () => {
	it('should return true if all values in the array are equal', () => {
		expect(allValuesAreEqual([1, 1, 1, 1])).toBe(true);
		expect(allValuesAreEqual([0, 0, 0, 0])).toBe(true);
		expect(allValuesAreEqual([2, 2, 2, 2])).toBe(true);
		expect(allValuesAreEqual([3, 3, 3, 3])).toBe(true);
	});

	it('should return false if all values in the array are not equal', () => {
		expect(allValuesAreEqual([1, 2, 3, 4])).toBe(false);
		expect(allValuesAreEqual([0, 1, 0, 1])).toBe(false);
		expect(allValuesAreEqual([2, 3, 4, 5])).toBe(false);
		expect(allValuesAreEqual([3, 4, 5, 6])).toBe(false);
	});
});
