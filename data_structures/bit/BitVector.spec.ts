import BitVector from './BitVector';

describe('BitVector', () => {
	it('should set a bit in the middle of a row', () => {
		const bitVector = new BitVector(64);
		bitVector.set(35);
		expect(bitVector.isSet(35)).toBe(true);
	});

	it('should unset a bit in the middle of a row', () => {
		const bitVector = new BitVector(64);
		bitVector.set(35);
		bitVector.unset(35);
		expect(bitVector.isSet(35)).toBe(false);
	});

	it('should check if a bit is set in the middle of a row', () => {
		const bitVector = new BitVector(64);
		bitVector.set(35);
		expect(bitVector.isSet(35)).toBe(true);
		expect(bitVector.isSet(36)).toBe(false);
	});

	it('should invert a bit in the middle of a row', () => {
		const bitVector = new BitVector(64);
		bitVector.set(35);
		bitVector.inverse(35);
		expect(bitVector.isSet(35)).toBe(false);
	});

	it('should set a bit at the beginning of the bit vector', () => {
		const bitVector = new BitVector(64);
		bitVector.set(0);
		expect(bitVector.isSet(0)).toBe(true);
	});

	it('should unset a bit at the end of the bit vector', () => {
		const bitVector = new BitVector(64);
		bitVector.set(63);
		bitVector.unset(63);
		expect(bitVector.isSet(63)).toBe(false);
	});

	it('should throw an error when setting a bit out of range', () => {
		const bitVector = new BitVector(64);
		expect(() => bitVector.set(64)).toThrow('Bit value is out of range');
	});
});
