import swap from '../../../../utils/swap';

/**

В течении последующих 50 лет, многие исследователи (среди которых
- легендарный Роберт Седжвик) подбирали различные
зависимости, постепенно улучшая результат. На данный момент
таковым является ряд, предложенный в 2001 году Марсином
Сиурой:701, 301, 132, 57, 23, 10, 4, 1.

function shellSort<T>(arr: T[]) {
	const gaps = [701, 301, 132, 57, 23, 10, 4, 1];

	for (let g = 0; g < gaps.length; g++) {
		const gap = gaps[g];

		for (let i = gap; i < arr.length; i++) {
			const temp = arr[i];
			let j;

			for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
				arr[j] = arr[j - gap];
			}

			arr[j] = temp;
		}
	}

	return arr;
}

 */

function shellSort<T>(arr: T[]) {
	let gap = Math.floor(arr.length / 2);

	while (gap > 0) {
		for (let i = 0; i < arr.length - gap; i++) {
			let currentIndex = i;
			let gapShiftedIndex = gap + i;

			while (currentIndex >= 0) {
				if (arr[currentIndex] > arr[gapShiftedIndex]) {
					swap(arr, currentIndex, gapShiftedIndex);
				}

				gapShiftedIndex = currentIndex;
				currentIndex -= gap;
			}
		}

		gap = Math.floor(gap / 2);
	}

	return arr;
}

export default shellSort;
