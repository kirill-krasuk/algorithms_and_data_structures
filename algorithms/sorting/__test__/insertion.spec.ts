import insertionSort from '../insertion/insertion';

describe('Insertion sort', () => {
	it('should correctly sort an array of numbers in ascending order', () => {
		const arr = [5, 3, 1, 4, 2];
		const sortedArr = insertionSort(arr);
		expect(sortedArr).toEqual([1, 2, 3, 4, 5]);
	});

	it('should correctly sort an array with negative numbers', () => {
		const arr = [-5, -3, -1, -4, -2];
		const sortedArr = insertionSort(arr);
		expect(sortedArr).toEqual([-5, -4, -3, -2, -1]);
	});

	it('should correctly sort a large array', () => {
		const arr = [];
		for (let i = 1000; i >= 1; i--) {
			arr.push(i);
		}
		const sortedArr = insertionSort(arr);
		expect(sortedArr).toEqual([...Array(1000)].map((_, i) => i + 1));
	});

	it('should work with arrays containing objects with a numeric property', () => {
		const arr = [{ num: 5 }, { num: 3 }, { num: 1 }, { num: 4 }, { num: 2 }];
		const sortedArr = insertionSort(arr, (a, b) => a.num - b.num);
		expect(sortedArr).toEqual([
			{ num: 1 },
			{ num: 2 },
			{ num: 3 },
			{ num: 4 },
			{ num: 5 },
		]);
	});

	it('should work with arrays containing objects with a numeric property in descending order', () => {
		const arr = [{ num: 5 }, { num: 3 }, { num: 1 }, { num: 4 }, { num: 2 }];
		const sortedArr = insertionSort(arr, (a, b) => b.num - a.num);
		expect(sortedArr).toEqual([
			{ num: 5 },
			{ num: 4 },
			{ num: 3 },
			{ num: 2 },
			{ num: 1 },
		]);
	});
});
