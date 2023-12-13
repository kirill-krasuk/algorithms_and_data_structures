import defaultComparator from '../../../../utils/comparator';
import swap from '../../../../utils/swap';

function doubleSelectionSort<T>(
	arr: T[],
	comparator: (a: T, b: T) => number = defaultComparator,
) {
	let left = 0;
	let right = arr.length - 1;

	while (left < right) {
		let min = left;
		let max = right;

		for (let i = left; i <= right; i++) {
			if (comparator(arr[i], arr[min]) < 0) {
				min = i;
			}

			if (comparator(arr[i], arr[max]) > 0) {
				max = i;
			}
		}

		if (max === left) {
			// Скорректируйте максимум, если он указывает на левый элемент, который должен быть заменён
			max = min;
		}

		swap(arr, left, min);
		swap(arr, right, max);

		left++;
		right--;
	}

	return arr;
}

export default doubleSelectionSort;
