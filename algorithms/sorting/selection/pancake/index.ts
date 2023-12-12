import defaultComparator from '../../../../utils/comparator';
import flip from '../../../../utils/flip';

function pancakeSort<T>(
	arr: T[],
	comparator: (a: T, b: T) => number = defaultComparator,
) {
	for (let i = arr.length; i > 1; i--) {
		let max = 0;

		for (let j = 1; j < i; j++) {
			if (comparator(arr[j], arr[max]) > 0) {
				max = j;
			}
		}

		if (max !== i - 1) {
			flip(arr, 0, max);
			flip(arr, 0, i - 1);
		}
	}
	return arr;
}

export default pancakeSort;
