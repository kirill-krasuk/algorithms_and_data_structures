import defaultComparator from '../../../../utils/comparator';
import swap from '../../../../utils/swap';

function insertionSort<T>(
	arr: T[],
	comparator: (a: T, b: T) => number = defaultComparator,
) {
	let isSorted = true;
	for (let i = 0; i < arr.length; i++) {
		let lastSortedIndex = i - 1;

		while (
			lastSortedIndex > -1
			&& comparator(arr[lastSortedIndex], arr[lastSortedIndex + 1]) > 0
		) {
			swap(arr, lastSortedIndex, lastSortedIndex + 1);
			lastSortedIndex--;
			isSorted = false;
		}

		if (isSorted) {
			continue;
		}
	}

	return arr;
}

export default insertionSort;
