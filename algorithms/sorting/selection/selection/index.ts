import swap from '../../../../utils/swap';

function selectionSort<T>(arr: T[]) {
	for (let i = 0; i < arr.length; i++) {
		let minIndex = i;

		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[minIndex]) {
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
