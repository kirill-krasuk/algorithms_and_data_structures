import shuffle from '../shuffle';

describe('shuffle', () => {
	const originalMathRandom = Math.random;

	beforeEach(() => {
		Math.random = jest.fn();
	});

	afterEach(() => {
		Math.random = originalMathRandom;
	});

	it('should shuffle the array based on mocked Math.random', () => {
		const arr = [1, 2, 3, 4, 5];

		(Math.random as jest.Mock)
			.mockReturnValueOnce(0.1)
			.mockReturnValueOnce(0.2)
			.mockReturnValueOnce(0.3)
			.mockReturnValueOnce(0.4)
			.mockReturnValueOnce(0.5);

		shuffle(arr);

		expect(arr).toEqual([1, 3, 5, 2, 4]);
	});
});
