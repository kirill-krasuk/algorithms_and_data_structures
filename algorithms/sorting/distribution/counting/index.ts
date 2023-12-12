import minMax from '../../../../utils/minMax';

function countingSort(arr: number[]) {
	const [min, max] = minMax(arr);
	const buckets = new Array(max - min + 1).fill(0);

	for (const value of arr) {
		buckets[value - min]++;
	}

	let sortedIndex = 0;
	for (let i = 0; i < buckets.length; i++) {
		const count = buckets[i];

		for (let j = 0; j < count; j++) {
			arr[sortedIndex++] = i + min;
		}
	}

	return arr;
}

export default countingSort;
