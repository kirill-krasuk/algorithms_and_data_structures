import defaultComparator from '../../../../utils/comparator';

function merge<T>(left: T[], right: T[], comparator: (a: T, b: T) => number) {
	const result = [];

	while (left.length && right.length) {
		if (comparator(left[0], right[0]) < 0) {
			result.push(left.shift());
		} else {
			result.push(right.shift());
		}
	}

	return [...result, ...left, ...right];
}

function mergeSort<T>(
	arr: T[],
	comparator: (a: T, b: T) => number = defaultComparator,
): T[] {
	if (arr.length <= 1) {
		return arr;
	}

	const middle = Math.floor(arr.length / 2);
	const left = arr.slice(0, middle);
	const right = arr.slice(middle);

	return merge(
		mergeSort(left, comparator),
		mergeSort(right, comparator),
		comparator,
	) as T[];
}

export default mergeSort;
