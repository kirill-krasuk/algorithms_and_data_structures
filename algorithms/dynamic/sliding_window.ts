function slidingWindow<T>(array: T[], windowSize: number): T[][] {
	const result: T[][] = [];

	for (let i = 0; i < array.length - windowSize + 1; i++) {
		result.push(array.slice(i, i + windowSize));
	}

	return result;
}

export default slidingWindow;
