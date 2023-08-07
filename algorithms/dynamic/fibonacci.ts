/**
 * linearly calculate fibonacci
 * Big O equal to O(n)
 *
 * it is Bottom-up approach
 */
function fibonacci(n: number): number {
	const memo = [0, 1];

	for (let i = 2; i <= n; i++) {
		memo[i] = memo[i - 1] + memo[i - 2];
	}

	return memo[n];
}

/**
 * recursively calculate fibonacci
 * Big O equal to O(2^n) use memoization to improve performance or
 *
 * it is Top-down approach
 */

function fibonacciRecursive(n: number, memo: number[] = []): number {
	if (n < 2) {
		return n;
	}

	if (memo[n]) {
		return memo[n];
	}

	memo[n] = fibonacciRecursive(n - 1, memo) + fibonacciRecursive(n - 2, memo);

	return memo[n];
}

export default {
	fibonacci,
	fibonacciRecursive,
};
