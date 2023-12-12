import defaultComparator from '../../../../utils/comparator';
import swap from '../../../../utils/swap';

function bubbleSort<T>(arr: T[], comparator: (a: T, b: T) => number = defaultComparator) {
	const len = arr.length;

	for (let i = len - 1; i >= 0; i--) {
		for (let j = 1; j <= i; j++) {
			if (comparator(arr[j - 1], arr[j]) > 0) {
				swap(arr, j - 1, j);
			}
		}
	}

	return arr;
}

export default bubbleSort;
