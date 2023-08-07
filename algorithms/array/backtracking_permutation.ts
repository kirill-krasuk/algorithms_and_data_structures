import swap from '../../utils/swap';

function permute(
	array: number[],
	end = array.length - 1,
	result: number[][] = [],
): number[][] {
	if (end < 1) {
		result.push(array.slice());
	} else {
		for (let i = end; i >= 0; i--) {
			swap(array, end, i);
			permute(array, end - 1, result);
			swap(array, end, i);
		}
	}

	return result;
}

export default permute;
