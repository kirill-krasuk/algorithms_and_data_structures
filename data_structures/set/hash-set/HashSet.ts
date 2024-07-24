import HashTable, { type KeyType } from '../../hash-table/open-addressed/HashTable';
import LinkedList from '../../list/linked-list/LinkedList';
import type { SetBase } from '../SetBase';

class HashSet<T extends KeyType> implements SetBase<T> {
	private hashTable = new HashTable<T, boolean>();
	private order: T[] = [];

	add(value: T) {
		if (!this.hashTable.has(value)) {
			this.order.push(value);
		}

		this.hashTable.put(value, true);
		return this;
	}

	addSubset(values: T[] | HashSet<T>) {
		const addValueToSet = (value: T) => {
			this.add(value);
		};

		if (values instanceof HashSet) {
			values.toArray().forEach(addValueToSet);
		}

		if (Array.isArray(values)) {
			values.forEach(addValueToSet);
		}
	}

	remove(value: T) {
		const index = this.order.indexOf(value);

		if (index > -1) {
			this.order.splice(index, 1);
		}

		return this.hashTable.remove(value);
	}

	contains(value: T) {
		return this.hashTable.has(value);
	}

	union(set: HashSet<T>) {
		const result = new HashSet<T>();

		for (const value of this.order) {
			result.add(value);
		}

		for (const value of set.toArray()) {
			result.add(value);
		}

		return result;
	}

	intersection(set: HashSet<T>) {
		const result = new HashSet<T>();

		for (const value of this.hashTable.keys()) {
			if (set.contains(value)) {
				result.add(value);
			}
		}

		return result;
	}

	difference(set: HashSet<T>) {
		const result = new HashSet<T>();

		for (const value of this.order) {
			if (!set.contains(value)) {
				result.add(value);
			}
		}

		return result;
	}

	symmetricDifference(set: HashSet<T>) {
		const result = this.union(set);

		for (const value of this.intersection(set).hashTable.keys()) {
			result.remove(value);
		}

		return result;
	}

	isSubset(set: SetBase<T>) {
		return set.toArray().every((item) => this.contains(item));
	}

	toArray() {
		return this.order;
	}

	toString() {
		return this.toArray().toString();
	}

	static from<From extends KeyType>(
		list: From[] | HashSet<From> | LinkedList<From>,
	): HashSet<From> {
		const set = new HashSet<From>();

		if (list instanceof HashSet || list instanceof LinkedList) {
			for (const value of list.toArray()) {
				set.add(value);
			}
		}

		if (Array.isArray(list)) {
			for (const value of list) {
				set.add(value);
			}
		}

		return set;
	}
}

export default HashSet;
