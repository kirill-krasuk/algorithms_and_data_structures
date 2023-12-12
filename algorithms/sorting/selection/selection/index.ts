import defaultComparator from '../../../../utils/comparator';
import swap from '../../../../utils/swap';

function selectionSort<T>(
	arr: T[],
	comparator: (a: T, b: T) => number = defaultComparator,
) {
	for (let i = 0; i < arr.length; i++) {
		let minIndex = i;

		for (let j = i + 1; j < arr.length; j++) {
			if (comparator(arr[j], arr[minIndex]) < 0) {
				minIndex = j;
			}
		}

		if (minIndex !== i) {
			swap(arr, i, minIndex);
		}
	}

	return arr;
}

export default selectionSort;
