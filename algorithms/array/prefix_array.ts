function build(arr: number[]): number[] {
	const n = arr.length;
	const segments = new Array(n);

	for (let i = 0; i < n; i++) {
		segments[i] = (segments[i - 1] ?? 0) + arr[i];
	}

	return segments;
}

function getFrom(prefixArray: number[], left: number, right: number): number {
	return prefixArray[right] - (prefixArray[left - 1] ?? 0);
}

export default { build, getFrom };
