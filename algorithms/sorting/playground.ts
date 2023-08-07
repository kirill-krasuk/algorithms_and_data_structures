/* eslint-disable no-console */
import generateNumbers from '../../utils/generateNumbers';
import isSorted from '../../utils/isSorted';
import sort from './insertion/insertion';

const arr = generateNumbers(100, 100, 900);

console.log(arr);

const sortedArr = sort(arr);

console.log(sortedArr, arr === sortedArr, isSorted(sortedArr));

// n - 1_000, max 999

// merge sort n * log n
// 1_000 * 3 = 3000

// insertion sort n^2 для 1_000 элементов браться не будет

// counting sort n + k
// 1_000 + 999 = 1_999

// n - 1_000, max 999_999

// merge sort n * log n
// 1_000 * 10 = 10_000

// insertion sort n^2 для 1_000 элементов браться не будет

// counting sort n + k
// 1_000 + 999_999 = 1_000_999

// n - 1_000_000, max 999

// merge sort n * log n
// 1_000_000 * 20 = 20_000_000

// insertion sort n^2 для 1_000_000 элементов браться не будет

// counting sort n + k
// 1_000_000 + 999 = 1_000_999

// n - 10, max 99

// merge sort n * log n - браться не будет для малого кол-ва элементов

// insertion sort n^2
// 10 * 10 = 100 - и это в худшем случае, а в лучшем 10, в среднем вставки очень хорошо работают

// counting sort n + k
// 10 + 99 = 109 - в худшем случае, в лучшем 10, в среднем 10
