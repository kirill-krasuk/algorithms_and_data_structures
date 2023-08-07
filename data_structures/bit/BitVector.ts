const INT_SIZE = 32;

class BitVector {
	private bits: number[];

	constructor(size: number) {
		this.bits = new Array(Math.ceil(size / INT_SIZE)).fill(0);
	}

	private outOfRangeAssertion(bit: number) {
		if (bit >= this.bits.length * INT_SIZE) {
			throw new Error('Bit value is out of range');
		}
	}

	private getBitRow(bit: number) {
		// is equal to Math.floor(bit / 32)
		return bit >> 5;
	}

	private getBitCol(bit: number) {
		// is equal to bit % 32
		return bit & (INT_SIZE - 1);
	}

	set(index: number) {
		this.outOfRangeAssertion(index);

		const row = this.getBitRow(index);
		const col = this.getBitCol(index);

		this.bits[row] |= 1 << col;
	}

	unset(index: number) {
		this.outOfRangeAssertion(index);

		const row = this.getBitRow(index);
		const col = this.getBitCol(index);

		this.bits[row] &= ~(1 << col);
	}

	isSet(index: number): boolean {
		this.outOfRangeAssertion(index);

		const row = this.getBitRow(index);
		const col = this.getBitCol(index);

		return (this.bits[row] & (1 << col)) !== 0;
	}

	inverse(index: number) {
		this.outOfRangeAssertion(index);

		const row = this.getBitRow(index);
		const col = this.getBitCol(index);

		this.bits[row] ^= 1 << col;
	}
}

export default BitVector;
