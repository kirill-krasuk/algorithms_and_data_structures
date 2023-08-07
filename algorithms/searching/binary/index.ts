/**
 * O (log n)
 * Возвращает -1 если элемент не найден
 */
function binarySearch<T>(arr: T[], value: T, searchSize = arr.length - 1) {
	let left = 0;
	let right = searchSize;

	while (left <= right) {
		const middle = Math.floor((left + right) / 2);

		if (arr[middle] === value) {
			return middle;
		}

		if (arr[middle] < value) {
			left = middle + 1;
		} else {
			right = middle - 1;
		}
	}

	return -1;
}

/**
 * Возвращает последний right если элемент не найден, это означает, что элемент мог быть там
 */
export function binarySearchSuitablePlace<T>(
	arr: T[],
	value: T,
	searchSize = arr.length - 1,
) {
	let left = 0;
	let right = searchSize;

	while (left <= right) {
		const middle = Math.floor((left + right) / 2);

		if (arr[middle] === value) {
			return middle;
		}

		if (arr[middle] < value) {
			left = middle + 1;
		} else {
			right = middle - 1;
		}
	}

	return right;
}

export default binarySearch;
