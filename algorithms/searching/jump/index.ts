/**
 * O (sqrt n)
 */
function jumpSearch<T>(arr: T[], value: T) {
	const step = Math.floor(Math.sqrt(arr.length));

	for (let i = 0; i < arr.length; i += step) {
		if (arr[i] === value) {
			return i;
		}

		/**
		 * если значение меньше текущего элемента
		 * то в предыдущем блоке запускаем линейный поиск
		 */
		if (arr[i] > value) {
			for (let j = i - step; j < i; j++) {
				if (arr[j] === value) {
					return j;
				}
			}
		}
	}

	return -1;
}

export default jumpSearch;
