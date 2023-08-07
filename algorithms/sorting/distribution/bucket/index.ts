import allValuesAreEqual from '../../../../utils/allValuesAreEqual';
import insertionSort from '../../insertion/insertion';

/**
 * Определение индекса ведра = определение процента от максимального значения
 * и подгон под размерность ведра:
 * Math.floor((arr[i] / (max + 1)) * bucketSize)
 *
 * работает как для интов так и для флоатов
 *
 * 597 / (1250 + 1) * 10 = ~~4.7721822542 = 4
 * 0.524 / (0.999 + 1) * 10 = ~~2.6213106553 = 2
 *
 * без формулы с макс значением сложно было подогнать индекс
 * для дробей нужно было умножать на какой-то коэффициент, а для интов
 * делить на коэффициент
 * Math.floor(arr[i] / bucketSize) - int
 * Math.floor(arr[i] * bucketSize) - float
 */

// FIXME: сортировка ведрами не работает с отрицательными числами

/**
 * Сортировка ведрами:
 *
 * разбивает массив на "ведра", сортирует их сортировкой вставками и
 * сливает в один массив.
 */
function bucketSort(arr: number[], bucketSize = 10) {
	const buckets = [...new Array(bucketSize)].map<number[]>(() => []);

	const max = Math.max(...arr);

	for (let i = 0; i < arr.length; i++) {
		const bucketIndex = Math.floor((arr[i] / (max + 1)) * bucketSize);
		buckets[bucketIndex].push(arr[i]);
	}

	for (let i = 0; i < buckets.length; i++) {
		insertionSort(buckets[i]);
	}

	let sortedIndex = 0;
	for (let i = 0; i < buckets.length; i++) {
		const bucket = buckets[i];

		for (let j = 0; j < bucket.length; j++) {
			arr[sortedIndex++] = bucket[j];
		}
	}

	return arr;
}

/**
 * Рекурсивная сортировка ведрами:
 *
 * разбивает массив на "ведра", по критерию максимального значения ведра,
 * после разбивает ведра на более мелкие ведра, в которых значения раскидываются по
 * критерию нового максимального. Рекурсия заканчивается, когда все ведра
 * содержат по одному или повторному элементу, тогда значения из ведер сливаются
 * в один массив.
 */
function bucketSortRecursive(arr: number[], bucketSize = 10) {
	const buckets = [...new Array(bucketSize)].map<number[]>(() => []);

	const max = Math.max(...arr);

	for (let i = 0; i < arr.length; i++) {
		const bucketIndex = Math.floor((arr[i] / (max + 1)) * bucketSize);
		buckets[bucketIndex].push(arr[i]);
	}

	for (let i = 0; i < buckets.length; i++) {
		if (buckets[i].length > 1 && !allValuesAreEqual(buckets[i])) {
			bucketSortRecursive(buckets[i], bucketSize);
		}
	}

	let sortedIndex = 0;
	for (let i = 0; i < buckets.length; i++) {
		const bucket = buckets[i];

		for (let j = 0; j < bucket.length; j++) {
			arr[sortedIndex++] = bucket[j];
		}
	}

	return arr;
}

export default {
	bucketSort,
	bucketSortRecursive,
};
