function generateNumbers(count = 100, min = 0, max = 100) {
	const numbers = [];

	for (let i = 0; i < count; i++) {
		numbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
	}

	return numbers;
}

export default generateNumbers;
