import minMax from '../minMax';

describe('minMax', () => {
	it('should return [1, 5] for [1, 2, 3, 4, 5]', () => {
		expect(minMax([1, 2, 3, 4, 5])).toEqual([1, 5]);
	});
});
