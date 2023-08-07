import flip from '../../utils/flip';
import swap from '../../utils/swap';

function nextPermutation(array: number[]): void {
	// Find the largest index i such that array[i - 1] < array[i]
	let i = array.length - 1;
	while (i > 0 && array[i] <= array[i - 1]) i--;

	// If no such index exists, the permutation is the last permutation
	if (i <= 0) {
		flip(array, 0, array.length - 1);
		return;
	}

	// Find the largest index j such that j >= i and array[j] > array[i - 1]
	let j = array.length - 1;
	while (array[j] <= array[i - 1]) j--;

	swap(array, i - 1, j);
	flip(array, i, array.length - 1);
}

export default nextPermutation;
