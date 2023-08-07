function merge<T>(left: T[], right: T[]) {
	const result = [];

	while (left.length && right.length) {
		if (left[0] < right[0]) {
			result.push(left.shift());
		} else {
			result.push(right.shift());
		}
	}

	return [...result, ...left, ...right];
}

function mergeSort<T>(arr: T[]): (T | undefined)[] {
	if (arr.length <= 1) {
		return arr;
	}

	const middle = Math.floor(arr.length / 2);
	const left = arr.slice(0, middle);
	const right = arr.slice(middle);

	return merge(mergeSort(left), mergeSort(right));
}

export default mergeSort;
