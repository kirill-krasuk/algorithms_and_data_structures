// this function check array on transitive property
function isSorted<T>(arr: T[]) {
	return !arr.some((item, index) => arr[index + 1] < item);
}

export default isSorted;
