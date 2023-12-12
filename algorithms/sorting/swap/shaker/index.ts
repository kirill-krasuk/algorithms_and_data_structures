import defaultComparator from '../../../../utils/comparator';
import swap from '../../../../utils/swap';

function shakerSort<T>(arr: T[], comparator: (a: T, b: T) => number = defaultComparator) {
	let left = 0;
	let right = arr.length - 1;

	while (left < right) {
		for (let i = left; i < right; i++) {
			if (comparator(arr[i], arr[i + 1]) > 0) {
				swap(arr, i, i + 1);
			}
		}

		right--;

		for (let i = right; i > left; i--) {
			if (comparator(arr[i], arr[i - 1]) < 0) {
				swap(arr, i, i - 1);
			}
		}

		left++;
	}

	return arr;
}

export default shakerSort;
