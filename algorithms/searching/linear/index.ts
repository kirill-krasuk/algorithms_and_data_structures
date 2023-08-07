/**
 * simple search algorithm
 *
 * O(n)
 */
function linearSearch<T>(arr: T[], value: T) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === value) {
			return i;
		}
	}

	return -1;
}

export default linearSearch;
