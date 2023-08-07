import swap from '../../../../utils/swap';

function combSort<T>(arr: T[]) {
	const len = arr.length;
	const shrinkFactor = 1.25;
	let gap = len;

	do {
		for (let i = 0; i < len - gap; i++) {
			/**
			 * если расстояние 1 - используется сортировка пузырька
			 */
			if (arr[i] > arr[i + gap]) {
				swap(arr, i, i + gap);
			}
		}

		gap = Math.floor(gap / shrinkFactor);
	} while (gap >= 1);

	return arr;
}

export default combSort;
