import swap from '../../../../utils/swap';

function insertionSort<T>(arr: T[]) {
	for (let i = 0; i < arr.length; i++) {
		let sorted = i - 1;

		while (sorted > -1 && arr[sorted] > arr[sorted + 1]) {
			swap(arr, sorted, sorted + 1);
			sorted--;
		}
	}

	return arr;
}

export default insertionSort;
