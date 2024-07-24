import LinkedList from '../../list/linked-list/LinkedList';
import type { SetBase } from '../SetBase';

class Set<T> implements SetBase<T> {
	private list = new LinkedList<T>();

	add(value: T) {
		if (!this.contains(value)) {
			this.list.append(value);
		}

		return this;
	}

	addSubset(values: T[] | SetBase<T>) {
		const addValueToSet = (value: T) => {
			this.add(value);
		};

		if (values instanceof Set) {
			values.toArray().forEach(addValueToSet);
		}

		if (Array.isArray(values)) {
			values.forEach(addValueToSet);
		}
	}

	remove(value: T) {
		const removed = this.list.remove(value);

		return !!removed;
	}

	contains(value: T): boolean {
		return this.list.contains(value);
	}

	isSubset(set: Set<T>) {
		return set.toArray().every((item) => this.contains(item));
	}

	union(set: Set<T>) {
		const result = Set.from(this.list);

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
		const result = Set.from(this.list);

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

	static from<From>(list: From[] | Set<From> | LinkedList<From>) {
		const set = new Set<From>();

		if (list instanceof LinkedList || list instanceof Set) {
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

export default Set;
