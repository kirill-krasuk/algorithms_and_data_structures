function sieve(n: number): number[] {
	const primes = [];
	const isPrime = new Array(n + 1).fill(true);

	isPrime[0] = false;
	isPrime[1] = false;

	for (let i = 2; i <= n; i++) {
		if (isPrime[i]) {
			primes.push(i);

			for (let j = i * i; j <= n; j += i) {
				isPrime[j] = false;
			}
		}
	}

	return primes;
}

export default sieve;
