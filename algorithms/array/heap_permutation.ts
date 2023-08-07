import swap from '../../utils/swap';

function heapPermutations(
	arr: number[],
	n: number = arr.length,
	result: number[][] = [],
): number[][] {
	if (n === 1) {
		result.push(arr.slice());
	} else {
		for (let i = 0; i < n; i++) {
			heapPermutations(arr, n - 1, result);

			if (n % 2 === 0) {
				swap(arr, i, n - 1);
			} else {
				swap(arr, 0, n - 1);
			}
		}
	}

	return result;
}

export default heapPermutations;
