import swap from '../../../../utils/swap';

function bubbleSort<T>(arr: T[]) {
	const len = arr.length;

	for (let i = len - 1; i >= 0; i--) {
		for (let j = 1; j <= i; j++) {
			if (arr[j - 1] > arr[j]) {
				swap(arr, j - 1, j);
			}
		}
	}

	return arr;
}

export default bubbleSort;
