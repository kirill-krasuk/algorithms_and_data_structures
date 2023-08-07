function flip(arr: number[], start = 0, end = arr.length - 1) {
	while (start < end) {
		[arr[end], arr[start]] = [arr[start], arr[end]];

		end--;
		start++;
	}
}

export default flip;
