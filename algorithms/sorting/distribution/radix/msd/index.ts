function sort(arr: number[], power: number, radix = 10) {
	if (power === 0) {
		return arr;
	}

	const buckets = new Array(radix).fill(0).map<number[]>(() => []);

	for (let i = 0; i < arr.length; i++) {
		const bucketIndex = Math.floor((arr[i] / radix ** (power - 1)) % radix);
		buckets[bucketIndex].push(arr[i]);
	}

	let sortedIndex = 0;
	for (let i = 0; i < buckets.length; i++) {
		const bucket = buckets[i];

		if (power === 1) {
			for (let j = 0; j < bucket.length; j++) {
				arr[sortedIndex++] = bucket[j];
			}
		} else {
			if (bucket.length > 1) {
				sort(bucket, power - 1);
			}

			for (let j = 0; j < bucket.length; j++) {
				arr[sortedIndex++] = bucket[j];
			}
		}

		bucket.length = 0;
	}

	return arr;
}

function msdSort(array: number[], radix = 10) {
	const max = Math.max(...array);
	const maxDigits = max.toString(radix).length;

	return sort(array, maxDigits, radix);
}

export default msdSort;
