/* eslint-disable no-bitwise */

function binaryExponentiation(value: number, power: number) {
	let result = 1;

	while (power !== 0) {
		if (power & 1) {
			result *= value;
		}

		power >>= 1;
		value *= value;
	}

	return result;
}

export function binaryExponentiationRecursive(value: number, power: number): number {
	if (power === 0) {
		return 1;
	}

	if (power & 1) {
		return binaryExponentiationRecursive(value, power - 1) * value;
	}

	const result = binaryExponentiationRecursive(value, power / 2);

	return result * result;
}

export function pow(value: number, power: number): number {
	if (power === 0) {
		return 1;
	}

	if (power < 0) {
		return 1 / pow(value, -1 * power);
	}

	if (power % 2 === 1) {
		return value * pow(value * value, (power - 1) / 2);
	}

	return pow(value * value, power / 2);
}

export default binaryExponentiation;
