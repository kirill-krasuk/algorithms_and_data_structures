import oddEvenSort from '../swap/odd-even';

describe('Odd-even sort', () => {
	it('should correctly sort an array of numbers in ascending order', () => {
		const arr = [5, 3, 1, 4, 2];

		const sortedArr = oddEvenSort(arr);

		expect(sortedArr).toEqual([1, 2, 3, 4, 5]);
	});

	it('should correctly sort an array of numbers in descending order', () => {
		const arr = [5, 3, 1, 4, 2];

		const sortedArr = oddEvenSort(arr, (a, b) => b - a);

		expect(sortedArr).toEqual([5, 4, 3, 2, 1]);
	});
});
