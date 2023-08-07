import swap from '../../../../utils/swap';

/**
 * space complexity: O(n)
 */
function quickSortWithoutSwap<T>(arr: T[]): T[] {
	if (arr.length <= 1) {
		return arr;
	}

	const pivotElement = arr[Math.floor(arr.length / 2)];
	const leftArr = [];
	const rightArr = [];

	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] < pivotElement) {
			leftArr.push(arr[i]);
		} else {
			rightArr.push(arr[i]);
		}
	}

	return [
		...quickSortWithoutSwap(leftArr),
		pivotElement,
		...quickSortWithoutSwap(rightArr),
	];
}

function partition<T>(arr: T[], left: number, right: number) {
	const pivot = arr[Math.floor((left + right) / 2)];

	while (left <= right) {
		while (arr[left] < pivot) {
			left++;
		}

		while (arr[right] > pivot) {
			right--;
		}

		if (left <= right) {
			swap(arr, left, right);
			left++;
			right--;
		}
	}

	return left - 1;
}

/**
 * space complexity: O(1)
 */
function quickSortHoara<T>(arr: T[], left = 0, right = arr.length - 1) {
	if (left === right) {
		return arr;
	}

	const pivot = partition(arr, left, right);
	quickSortHoara(arr, left, pivot);
	quickSortHoara(arr, pivot + 1, right);

	return arr;
}

export default {
	quickSortWithoutSwap,
	quickSortHoara,
};
