import { binarySearchSuitablePlace } from '../../../searching/binary';

function insertionBinarySort<T>(arr: T[]) {
	for (let i = 1; i < arr.length; i++) {
		const currentElement = arr[i];
		const index = binarySearchSuitablePlace(arr, currentElement, i);

		// arr.splice(index + 1, 0, currentElement); - заменит все ниже
		for (let j = i; j > index + 1; j--) {
			arr[j] = arr[j - 1];
		}

		arr[index + 1] = currentElement;
	}

	return arr;
}

export default insertionBinarySort;
