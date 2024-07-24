import flip from '../flip';

describe('flip', () => {
	it('should flip the arguments of a function', () => {
		const arr = [1, 2, 3, 4, 5];

		flip(arr);

		expect(arr).toEqual([5, 4, 3, 2, 1]);
	});
});
