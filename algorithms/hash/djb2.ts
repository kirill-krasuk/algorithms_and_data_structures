function djb2(key: number | string, shift: number) {
	const strKey = key.toString();
	let hash = 5381;

	for (let i = 0; i < strKey.length; i++) {
		const char = strKey.charCodeAt(i);
		hash = (hash << 5) + hash + char;
	}

	return (Math.abs(hash) % (shift - 1)) + 1;
}

export default djb2;
