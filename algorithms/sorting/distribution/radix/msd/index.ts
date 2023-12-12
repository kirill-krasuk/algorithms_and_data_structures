function sort(arr: number[], power: number, radix = 10) {
	if (power === 0) {
		return arr;
	}

	const buckets = new Array(radix).fill(0).map<number[]>(() => []);

	for (const num of arr) {
		const bucketIndex = Math.floor((num / radix ** (power - 1)) % radix);
		buckets[bucketIndex].push(num);
	}

	let sortedIndex = 0;
	for (const bucket of buckets) {
		if (power === 1) {
			for (const num of bucket) {
				arr[sortedIndex++] = num;
			}
		} else {
			if (bucket.length > 1) {
				sort(bucket, power - 1);
			}

			for (const num of bucket) {
				arr[sortedIndex++] = num;
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
