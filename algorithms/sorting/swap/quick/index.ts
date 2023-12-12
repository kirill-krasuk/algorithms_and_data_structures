/* eslint-disable no-continue */
import defaultComparator from '../../../../utils/comparator';
import swap from '../../../../utils/swap';

/**
 * space complexity: O(n)
 */
function quickSortWithoutSwap<T>(
	arr: T[],
	comparator: (a: T, b: T) => number = defaultComparator,
): T[] {
	if (arr.length <= 1) {
		return arr;
	}

	const pivotIndex = Math.floor(arr.length / 2);
	const pivotElement = arr[pivotIndex];
	const leftArr = [];
	const rightArr = [];

	for (let i = 0; i < arr.length; i++) {
		if (i === pivotIndex) continue;

		if (comparator(arr[i], pivotElement) < 0) {
			leftArr.push(arr[i]);
		} else {
			rightArr.push(arr[i]);
		}
	}

	return [
		...quickSortWithoutSwap(leftArr, comparator),
		pivotElement,
		...quickSortWithoutSwap(rightArr, comparator),
	];
}

function partition<T>(
	arr: T[],
	left: number,
	right: number,
	comparator: (a: T, b: T) => number,
) {
	const pivot = arr[Math.floor((left + right) / 2)];

	while (left <= right) {
		while (comparator(arr[left], pivot) < 0) {
			left++;
		}

		while (comparator(arr[right], pivot) > 0) {
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
function quickSortHoara<T>(
	arr: T[],
	comparator: (a: T, b: T) => number = defaultComparator,
	left = 0,
	right = arr.length - 1,
) {
	if (left === right) {
		return arr;
	}

	const pivot = partition(arr, left, right, comparator);
	quickSortHoara(arr, comparator, left, pivot);
	quickSortHoara(arr, comparator, pivot + 1, right);

	return arr;
}

export { quickSortWithoutSwap, quickSortHoara };
