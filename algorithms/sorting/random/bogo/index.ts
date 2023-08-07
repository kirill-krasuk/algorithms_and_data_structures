import isSorted from '../../../../utils/isSorted';
import shuffle from '../../../../utils/shuffle';

/**
 * this algorithm is joke
 *
 * https://en.wikipedia.org/wiki/Bogosort
 *
 * Average Complexity	O(n × n!)
 * Best Case			O(n)
 * Worst Case			∞
 * Space Complexity		O(1)
 */
function bogoSort<T>(arr: T[]) {
	while (!isSorted(arr)) {
		shuffle(arr);
	}

	return arr;
}

export default bogoSort;
