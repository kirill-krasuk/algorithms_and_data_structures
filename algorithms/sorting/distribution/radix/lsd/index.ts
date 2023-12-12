function lsdSort(arr: number[], radix = 10) {
	/**
	 * max - нужен для границы цикла разрядов
	 */
	const max = Math.max(...arr);
	const maxDigits = max.toString(radix).length;

	const buckets = new Array(radix).fill(0).map<number[]>(() => []);
	let power = 1;

	for (let pow = 0; pow < maxDigits; pow++) {
		for (const num of arr) {
			const bucketIndex = Math.floor((num / power) % radix);
			buckets[bucketIndex].push(num);
		}

		let sortedIndex = 0;
		for (const bucket of buckets) {
			for (const num of bucket) {
				arr[sortedIndex++] = num;
			}

			bucket.length = 0;
		}

		power *= radix;
	}

	return arr;
}

export default lsdSort;
