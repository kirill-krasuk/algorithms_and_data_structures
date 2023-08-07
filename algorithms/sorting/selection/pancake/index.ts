import flip from '../../../../utils/flip';

function pancakeSort(arr: number[]) {
	for (let i = arr.length; i > 1; i--) {
		let max = 0;

		for (let j = 1; j < i; j++) {
			if (arr[j] > arr[max]) {
				max = j;
			}
		}

		if (max !== i - 1) {
			flip(arr, 0, max);
			flip(arr, 0, i - 1);
		}
	}
	return arr;
}

export default pancakeSort;
