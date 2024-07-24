import generateNumbers from '../generateNumbers';

describe('generateNumbers', () => {
	const originalMathRandom = Math.random;

	beforeEach(() => {
		Math.random = jest.fn();
	});

	afterEach(() => {
		Math.random = originalMathRandom;
	});

	it('should return expected number based on mocked Math.random', () => {
		(Math.random as jest.Mock).mockReturnValue(0.5);
		const result = generateNumbers(1, 50, 50);

		expect(result).toEqual([50]);
	});

	it('should return expected number based on mocked Math.random', () => {
		(Math.random as jest.Mock)
			.mockReturnValueOnce(0.1)
			.mockReturnValueOnce(0.2)
			.mockReturnValueOnce(0.3);
		const result = generateNumbers(3, 10, 30);

		expect(result).toEqual([12, 14, 16]);
	});
});
