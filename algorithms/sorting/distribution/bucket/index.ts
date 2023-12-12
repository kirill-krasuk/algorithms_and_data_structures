import allValuesAreEqual from '../../../../utils/allValuesAreEqual';
import minMax from '../../../../utils/minMax';
import insertionSort from '../../insertion/insertion';

/**
 * Определение индекса ведра = определение процента от максимального значения
 * и подгон под размерность ведра:
 * Math.floor((arr[i] - min / (max - min + 1)) * bucketSize)
 *
 * вычитание min нужно для того, чтобы сдвинуть значения ведра влево, то есть для индекса
 * иметь только положительные значения
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

/**
 * Сортировка ведрами:
 *
 * разбивает массив на "ведра", сортирует их сортировкой вставками и
 * сливает в один массив.
 */
function bucketSort(arr: number[], bucketSize = 10) {
	const buckets = [...new Array(bucketSize)].map<number[]>(() => []);

	const [min, max] = minMax(arr);

	for (const value of arr) {
		const bucketIndex = Math.floor(((value - min) / (max - min + 1)) * bucketSize);
		buckets[bucketIndex].push(value);
	}

	for (const bucket of buckets) {
		insertionSort(bucket);
	}

	let sortedIndex = 0;
	for (const bucket of buckets) {
		for (const value of bucket) {
			arr[sortedIndex++] = value;
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

	const [min, max] = minMax(arr);

	for (const value of arr) {
		const bucketIndex = Math.floor(((value - min) / (max - min + 1)) * bucketSize);
		buckets[bucketIndex].push(value);
	}

	for (const bucket of buckets) {
		if (bucket.length > 1 && !allValuesAreEqual(bucket)) {
			bucketSortRecursive(bucket, bucketSize);
		}
	}

	let sortedIndex = 0;
	for (const bucket of buckets) {
		for (const value of bucket) {
			arr[sortedIndex++] = value;
		}
	}

	return arr;
}

export { bucketSort, bucketSortRecursive };
