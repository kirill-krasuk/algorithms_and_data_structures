import defaultComparator from '../../../../utils/comparator';
import swap from '../../../../utils/swap';

function oddEvenSort<T>(
	arr: T[],
	comparator: (a: T, b: T) => number = defaultComparator,
) {
	let sorted = false;

	while (!sorted) {
		sorted = true;

		for (let i = 1; i < arr.length - 1; i += 2) {
			if (comparator(arr[i], arr[i + 1]) > 0) {
				swap(arr, i, i + 1);
				sorted = false;
			}
		}

		for (let i = 0; i < arr.length - 1; i += 2) {
			if (comparator(arr[i], arr[i + 1]) > 0) {
				swap(arr, i, i + 1);
				sorted = false;
			}
		}
	}

	return arr;
}

export default oddEvenSort;
