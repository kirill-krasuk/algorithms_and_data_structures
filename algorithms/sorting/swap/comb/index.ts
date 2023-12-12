import defaultComparator from '../../../../utils/comparator';
import swap from '../../../../utils/swap';

function combSort<T>(arr: T[], comparator: (a: T, b: T) => number = defaultComparator) {
	const len = arr.length;
	const shrinkFactor = 1.25;
	let gap = len;

	do {
		for (let i = 0; i < len - gap; i++) {
			/**
			 * если расстояние 1 - используется сортировка пузырька
			 */
			if (comparator(arr[i], arr[i + gap]) > 0) {
				swap(arr, i, i + gap);
			}
		}

		gap = Math.floor(gap / shrinkFactor);
	} while (gap >= 1);

	return arr;
}

export default combSort;
