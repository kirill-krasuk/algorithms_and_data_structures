import euclid from '../euclidian';

function euler(n: number) {
	let count = 0;

	for (let i = 1; i <= n; i++) {
		if (euclid.gcd(i, n) === 1) {
			count++;
		}
	}

	return count;
}

function eulerFast(n: number) {
	let result = n;
	let prime = 2;

	while (prime * prime <= n) {
		if (n % prime === 0) {
			while (n % prime === 0) {
				n /= prime;
			}
			result -= result / prime;
		}
		prime++;
	}

	if (n > 1) {
		result -= result / n;
	}

	return result;
}

export default {
	euler,
	eulerFast,
};
