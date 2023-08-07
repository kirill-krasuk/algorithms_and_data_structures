import swap from '../../../../utils/swap';

function heapify(arr: number[], from: number, to: number = arr.length) {
	const left = 2 * from + 1;
	const right = 2 * from + 2;
	let max = from;

	if (left < to && arr[left] > arr[max]) {
		max = left;
	}

	if (right < to && arr[right] > arr[max]) {
		max = right;
	}

	if (max !== from) {
		swap(arr, from, max);
		heapify(arr, max, to);
	}
}

function buildHeap(arr: number[]) {
	for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
		heapify(arr, i);
	}
	return arr;
}

function heapSort(arr: number[]) {
	buildHeap(arr);

	for (let i = arr.length - 1; i > 0; i--) {
		swap(arr, 0, i);
		heapify(arr, 0, i);
	}

	return arr;
}

export default heapSort;
