import swap from '../swap';

describe('swap', () => {
	it('should swap the elements at the given indices', () => {
		const arr = [1, 2, 3, 4, 5];

		swap(arr, 0, 4);

		expect(arr).toEqual([5, 2, 3, 4, 1]);
	});
});
