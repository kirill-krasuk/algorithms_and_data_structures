class MFUCache<K, V> {
	private capacity: number;
	private cache: Map<K, V>;
	private frequencies: Map<K, number>;

	constructor(capacity: number) {
		this.capacity = capacity;
		this.cache = new Map<K, V>();
		this.frequencies = new Map<K, number>();
	}

	get(key: K): V | undefined {
		if (!this.cache.has(key)) {
			return undefined;
		}

		// Увеличиваем счетчик частоты
		this.frequencies.set(key, (this.frequencies.get(key) ?? 0) + 1);
		return this.cache.get(key);
	}

	put(key: K, value: V): void {
		if (this.cache.has(key)) {
			this.cache.set(key, value);
			this.frequencies.set(key, (this.frequencies.get(key) ?? 0) + 1);
			return;
		}

		if (this.cache.size === this.capacity) {
			let mostFrequentKey;
			let maxFrequency = -Infinity;

			for (const [k, freq] of this.frequencies) {
				if (freq > maxFrequency) {
					maxFrequency = freq;
					mostFrequentKey = k;
				}
			}

			if (mostFrequentKey !== undefined) {
				this.cache.delete(mostFrequentKey);
				this.frequencies.delete(mostFrequentKey);
			}
		}

		this.cache.set(key, value);
		this.frequencies.set(key, 1);
	}
}

export default MFUCache;
