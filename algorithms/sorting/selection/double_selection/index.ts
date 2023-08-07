import swap from '../../../../utils/swap';

function doubleSelectionSort(arr: number[]) {
	let left = 0;
	let right = arr.length - 1;

	while (left < right) {
		let min = left;
		let max = right;

		for (let i = left; i <= right; i++) {
			if (arr[i] < arr[min]) {
				min = i;
			}

			if (arr[i] > arr[max]) {
				max = i;
			}
		}

		swap(arr, left, min);
		swap(arr, right, max);

		left++;
		right--;
	}

	return arr;
}

export default doubleSelectionSort;
