/**
 * recursively calculate fibonacci
 * Big O equal to O(2^n) use memoization to improve performance or
 * use iterative approach dynamic programming to improve performance
 */
function fibonacci(n: number): number {
	if (n < 2) {
		return n;
	}

	return fibonacci(n - 1) + fibonacci(n - 2);
}

export default {
	fibonacci,
};
