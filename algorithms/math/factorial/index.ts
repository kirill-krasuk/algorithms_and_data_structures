/**
 * Big O equal to O(n)
 */
function factorialRecursive(n: number): number {
	if (n === 0) {
		return 1;
	}

	return n * factorialRecursive(n - 1);
}

/**
 * Big O equal to O(n)
 */
function factorial(n: number): number {
	let result = 1;

	for (let i = 1; i <= n; i++) {
		result *= i;
	}

	return result;
}

export default {
	factorialRecursive,
	factorial,
};
