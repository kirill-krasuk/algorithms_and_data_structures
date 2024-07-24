function directCompare<T>(value1: T, value2: T): boolean {
	return value1 < value2;
}

function reverseCompare<T>(value1: T, value2: T): boolean {
	return value1 > value2;
}

function isSorted<T>(arr: T[], isReversed = false): boolean {
	const comparator = isReversed ? reverseCompare : directCompare;

	return !arr.some((item, index) => comparator(arr[index + 1], item));
}

export default isSorted;
