import LinkedList from '../../list/linked-list/LinkedList';

type KeyType = string | number;
// Hash Table with Chain Method implementation
// hasn't big problems with collisions, but it's slower than Open Addressing
// because of the need to iterate over the linked list, and sometimes it's
// necessary to rebuild the hash table to avoid performance issues.
// but we don't need to worry about rebuilding often
const CAPACITY_THRESHOLD = 5;

class HashTable<Key extends KeyType, Value> {
	private length = 0;
	private buckets!: Array<LinkedList<{ value: Value; key: Key }>>;

	constructor(private size = 32) {
		this.buckets = Array.from({ length: this.size }, () => new LinkedList());
	}

	put(key: Key, value: Value) {
		if (this.length / this.size >= CAPACITY_THRESHOLD) {
			this.rebuild();
		}

		if (this.has(key)) {
			this.overrideValue(key, value);
			return;
		}

		this.addValue(key, value);
	}

	get(key: Key) {
		const hashIndex = this.hash(key);
		const bucket = this.buckets[hashIndex];

		for (const node of bucket.toArray()) {
			if (node.key === key) {
				return node.value;
			}
		}

		return -1;
	}

	remove(key: Key) {
		const hashIndex = this.hash(key);
		const bucket = this.buckets[hashIndex];

		for (const node of bucket.toArray()) {
			if (node.key === key) {
				bucket.remove(node);
				this.length--;
				return true;
			}
		}

		return false;
	}

	has(key: Key) {
		const hashIndex = this.hash(key);
		const bucket = this.buckets[hashIndex];

		for (const node of bucket.toArray()) {
			if (node.key === key) {
				return true;
			}
		}

		return false;
	}

	isEmpty() {
		return this.length === 0;
	}

	keys() {
		const keys: Key[] = [];

		for (const bucket of this.buckets) {
			for (const node of bucket.toArray()) {
				keys.push(node.key);
			}
		}

		return keys;
	}

	values() {
		const vs: Value[] = [];

		for (const bucket of this.buckets) {
			for (const node of bucket.toArray()) {
				vs.push(node.value);
			}
		}

		return vs;
	}

	private overrideValue(key: Key, value: Value) {
		const hashIndex = this.hash(key);
		const bucket = this.buckets[hashIndex];

		for (const node of bucket.toArray()) {
			if (node.key === key) {
				node.value = value;
			}
		}
	}

	private hash(key: Key) {
		const hash = Array.from(key.toString()).reduce(
			(acc, char) => acc + char.charCodeAt(0),
			0,
		);

		return hash % this.size;
	}

	private addValue(key: Key, value: Value) {
		const hashIndex = this.hash(key);
		const bucket = this.buckets[hashIndex];

		bucket.append({ key, value });
		this.length++;
	}

	private rebuild() {
		const oldBuckets = this.buckets;
		this.size *= 2;
		this.length = 0;
		this.buckets = Array.from({ length: this.size }, () => new LinkedList());

		for (const bucket of oldBuckets) {
			for (const node of bucket.toArray()) {
				this.addValue(node.key, node.value);
			}
		}
	}
}

export default HashTable;
