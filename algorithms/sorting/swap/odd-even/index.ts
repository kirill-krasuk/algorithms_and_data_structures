import swap from '../../../../utils/swap';

function oddEvenSort<T>(arr: T[]) {
	let sorted = false;

	while (!sorted) {
		sorted = true;

		for (let i = 1; i < arr.length - 1; i += 2) {
			if (arr[i] > arr[i + 1]) {
				swap(arr, i, i + 1);
				sorted = false;
			}
		}

		for (let i = 0; i < arr.length - 1; i += 2) {
			if (arr[i] > arr[i + 1]) {
				swap(arr, i, i + 1);
				sorted = false;
			}
		}
	}

	return arr;
}

export default oddEvenSort;
