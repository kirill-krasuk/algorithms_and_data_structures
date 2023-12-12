import binarySearch, { binarySearchSuitablePlace } from '.';

describe('Binary search', () => {
	it('should return the index of the searched element when it is present in the array', () => {
		const arr = [1, 2, 3, 4, 5];
		const value = 3;
		const expected = 2;

		const result = binarySearch(arr, value);

		expect(result).toBe(expected);
	});

	it('should return -1 when the searched element is not present in the array', () => {
		const arr = [1, 2, 3, 4, 5];
		const value = 6;
		const expected = -1;

		const result = binarySearch(arr, value);

		expect(result).toBe(expected);
	});

	it('should return the index of the searched element when it is present in an array of even length', () => {
		const arr = [1, 2, 3, 4, 5, 6];
		const value = 4;
		const expected = 3;

		const result = binarySearch(arr, value);

		expect(result).toBe(expected);
	});

	it('should return -1 when the array is empty', () => {
		const arr: number[] = [];
		const value = 1;
		const expected = -1;

		const result = binarySearch(arr, value);

		expect(result).toBe(expected);
	});

	it('should return the index of the value if it exists in the array', () => {
		const arr = [1, 2, 3, 4, 5];
		const value = 3;
		const expected = 2;

		const result = binarySearchSuitablePlace(arr, value);

		expect(result).toBe(expected);
	});

	it('should return the index of the last element if the value is larger than all elements in the array', () => {
		const arr = [1, 2, 3, 4, 5];
		const value = 6;
		const expected = 4;

		const result = binarySearchSuitablePlace(arr, value);

		expect(result).toBe(expected);
	});

	it('should return -1 if the array is empty', () => {
		const arr: number[] = [];
		const value = 5;
		const expected = -1;

		const result = binarySearchSuitablePlace(arr, value);

		expect(result).toBe(expected);
	});
});
