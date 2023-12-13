import djb2 from './djb2';

describe('djb2', () => {
	it('should return a positive integer when valid input values are provided', () => {
		// Arrange
		const key = 'test';
		const shift = 10;

		// Act
		const result = djb2(key, shift);

		// Assert
		expect(result).toBeGreaterThan(0);
	});

	it('should return the same output for the same input values', () => {
		// Arrange
		const key = 'test';
		const shift = 10;

		// Act
		const result1 = djb2(key, shift);
		const result2 = djb2(key, shift);

		// Assert
		expect(result1).toEqual(result2);
	});

	it('should return 1 when 0 is provided as shift value', () => {
		// Arrange
		const key = 'test';
		const shift = 0;

		// Act
		const result = djb2(key, shift);

		// Assert
		expect(result).toBe(1);
	});
});
