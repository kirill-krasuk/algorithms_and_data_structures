/* eslint-disable no-restricted-syntax */
import LinkedList from '../list/linked-list/LinkedList';

class Set<T> {
	private list!: LinkedList<T>;

	constructor(list?: T[] | Set<T> | LinkedList<T>) {
		if (list instanceof Set || list instanceof LinkedList) {
			this.list = new LinkedList([...list.toArray()]);
		}

		if (Array.isArray(list)) {
			this.list = new LinkedList(
				list.filter((item, index) => list.indexOf(item) === index),
			);
		}

		if (!list) {
			this.list = new LinkedList();
		}
	}

	add(value: T) {
		if (!this.contains(value)) {
			this.list.append(value);
		}

		return this;
	}

	addSubset(value: T[] | Set<T>) {
		if (value instanceof Set) {
			value.toArray().forEach((item) => this.add(item));
		}

		if (Array.isArray(value)) {
			value.forEach((item) => this.add(item));
		}
	}

	remove(value: T) {
		return this.list.remove(value);
	}

	contains(value: T): boolean {
		return this.list.contains(value);
	}

	isSubset(set: Set<T>) {
		return set.toArray().every((item) => this.contains(item));
	}

	union(set: Set<T>) {
		const result = new Set(this.list);

		set.toArray().forEach((value) => {
			if (!result.contains(value)) {
				result.add(value);
			}
		});

		return result;
	}

	intersection(set: Set<T>) {
		const result = new Set<T>();

		for (const value of this.list) {
			if (set.contains(value)) {
				result.add(value);
			}
		}

		return result;
	}

	difference(set: Set<T>) {
		const result = new Set(this.list);

		set.toArray().forEach((value) => {
			result.remove(value);
		});

		return result;
	}

	symmetricDifference(set: Set<T>) {
		const union = this.union(set);
		const intersection = this.intersection(set);

		return union.difference(intersection);
	}

	toArray() {
		return this.list.toArray();
	}

	toString() {
		return this.toArray().toString();
	}
}

export default Set;
