import djb2 from '../../../algorithms/hash/djb2';

type KeyType = number | string;
type Bucket<K extends KeyType, V> = { key: K; value: V } | null;
type CollisionResolution = 'linear' | 'quadratic' | 'double hashing';
export type HashTableOptions = {
	capacity?: number;
	threshold?: number;
	collisionResolution?: CollisionResolution;
};

class HashTable<Key extends KeyType, Value> {
	private buckets: Bucket<Key, Value>[];
	private threshold: number;
	private collisionResolution: CollisionResolution;
	private capacity: number;
	size = 0;

	constructor({ capacity, threshold, collisionResolution }: HashTableOptions = {}) {
		this.collisionResolution = collisionResolution ?? 'linear';
		this.threshold = threshold ?? 0.75;
		this.capacity = capacity ?? 10;

		this.buckets = new Array(this.capacity).fill(null);
	}

	put(key: Key, value: Value) {
		if (this.isNeedRehash()) {
			this.rehash();
		}

		this.addValue(key, value);
	}

	get(key: Key) {
		const bucket = this.findBucket(key);
		return bucket ? bucket.value : -1;
	}

	has(key: Key) {
		return this.findBucket(key) !== null;
	}

	remove(key: Key) {
		const hashIndex = this.hash(key);
		let i = hashIndex;

		// uses for double hashing and quadratic probing
		let step = 1;

		do {
			if (this.buckets[i]?.key === key) {
				this.buckets[i] = null;
				this.size--;

				return true;
			}

			i = this.next(i, key, step);
			step++;
		} while (i !== hashIndex);

		return false;
	}

	private addValue(key: Key, value: Value) {
		const hashIndex = this.hash(key);
		let i = hashIndex;

		// uses for double hashing and quadratic probing
		let step = 1;

		while (this.buckets[i] !== null && this.buckets[i]?.key !== key) {
			i = this.next(i, key, step);
			step++;

			if (i === hashIndex) break;
		}

		const isNewKey = this.buckets[i] === null;
		this.buckets[i] = { key, value };

		if (isNewKey) {
			this.size++;
		}
	}

	// double hashing
	private next2Hash(i: number, key: Key, stepSize: number) {
		return (i + stepSize * this.hash2(key)) % this.capacity;
	}

	// quadratic probing
	private nextQuadratic(i: number, stepSize: number) {
		return (i + stepSize ** 2) % this.capacity;
	}

	// line probing
	private nextLinear(i: number) {
		return (i + 1) % this.capacity;
	}

	private next(i: number, key: Key, stepSize: number) {
		switch (this.collisionResolution) {
		case 'double hashing':
			return this.next2Hash(i, key, stepSize);
		case 'quadratic':
			return this.nextQuadratic(i, stepSize);
		case 'linear':
		default:
			return this.nextLinear(i);
		}
	}

	private findBucket(key: Key): Bucket<Key, Value> {
		const hashIndex = this.hash(key);
		let i = hashIndex;

		// uses for double hashing and quadratic probing
		let step = 1;

		do {
			if (this.buckets[i]?.key === key) {
				return this.buckets[i];
			}

			i = this.next(i, key, step);
			step++;
		} while (hashIndex !== i);

		return null;
	}

	private hash2(key: Key) {
		return djb2(key, this.capacity);
	}

	private hash(key: Key | string, capacity = this.capacity) {
		const strKey = key.toString();
		let hash = 0;

		for (let i = 0; i < strKey.length; i++) {
			const char = strKey.charCodeAt(i);
			hash = (hash << 5) - hash + char;
			hash |= 0; // Convert to 32bit integer
		}

		return Math.abs(hash) % capacity;
	}

	private isNeedRehash(): boolean {
		if (this.threshold > 1 && this.size >= this.capacity) {
			throw new Error('Hash table is full');
		}

		return this.size >= this.capacity * this.threshold;
	}

	private rehash() {
		const oldBuckets = this.buckets;
		this.capacity *= 2;
		this.buckets = new Array(this.capacity).fill(null);

		oldBuckets.forEach((bucket) => {
			if (bucket) {
				const { key, value } = bucket;
				this.addValue(key, value);
			}
		});
	}
}

export default HashTable;
