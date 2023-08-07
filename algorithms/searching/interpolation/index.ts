/**
 * работает с числовыми значениями
 *
 * O(log(log n))
 */
function interpolationSearch(arr: number[], value: number) {
	let left = 0;
	let right = arr.length - 1;

	while (left <= right) {
		const middle = Math.floor(
			// just formula
			left + ((right - left) * (value - arr[left])) / (arr[right] - arr[left]),
		);

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

export default interpolationSearch;
