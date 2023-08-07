function lsdSort(arr: number[], radix = 10) {
	/**
	 * max - нужен для границы цикла разрядов
	 */
	const max = Math.max(...arr);
	const maxDigits = max.toString(radix).length;

	const buckets = new Array(radix).fill(0).map<number[]>(() => []);
	let power = 1;

	for (let pow = 0; pow < maxDigits; pow++) {
		for (let i = 0; i < arr.length; i++) {
			const bucketIndex = Math.floor((arr[i] / power) % radix);
			buckets[bucketIndex].push(arr[i]);
		}

		let sortedIndex = 0;
		for (let i = 0; i < buckets.length; i++) {
			const bucket = buckets[i];

			for (let j = 0; j < bucket.length; j++) {
				arr[sortedIndex++] = bucket[j];
			}

			/**
			 * очищаем ведра для последующих заполнений
			 */
			bucket.length = 0;
		}

		power *= radix;
	}

	return arr;
}

export default lsdSort;
