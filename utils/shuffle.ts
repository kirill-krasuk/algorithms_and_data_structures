import swap from './swap';

function shuffle<T>(arr: T[]) {
	const len = arr.length;

	for (let i = 0; i < len; i++) {
		const j = Math.floor(Math.random() * len);

		swap(arr, i, j);
	}
}

export default shuffle;
