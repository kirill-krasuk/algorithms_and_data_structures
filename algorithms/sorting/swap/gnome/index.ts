import defaultComparator from '../../../../utils/comparator';
import swap from '../../../../utils/swap';

function gnomeSort<T>(arr: T[], comparator: (a: T, b: T) => number = defaultComparator) {
	let i = 1;
	let j = 2;

	while (i < arr.length) {
		if (comparator(arr[i - 1], arr[i]) < 0) {
			i = j;
			j++;
		} else {
			swap(arr, i - 1, i);

			i--;

			if (i === 0) {
				i = j;
				j++;
			}
		}
	}

	return arr;
}

export default gnomeSort;
