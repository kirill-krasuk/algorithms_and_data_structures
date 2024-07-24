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

/**
 * dynamically calculate fibonacci
 */
function fibonacciMemoization(n: number): number {
	const memo = [0, 1];

	for (let i = 2; i <= n; i++) {
		memo[i] = memo[i - 1] + memo[i - 2];
	}

	return memo[n];
}

export default {
	fibonacci,
	fibonacciMemoization,
};
