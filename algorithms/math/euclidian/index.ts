/**
 * Greatest Common Divisor
 */
function gcd(a: number, b: number): number {
	return b ? gcd(b, a % b) : a;
}

/**
 * Least Common Multiple
 */
function lcm(a: number, b: number): number {
	return (a * b) / gcd(a, b);
}

export default {
	gcd,
	lcm,
};
