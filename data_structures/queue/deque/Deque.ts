import LinkedList from '../../list/linked-list/LinkedList';

class Deque<T> {
	private list = new LinkedList<T>();

	size() {
		return this.list.getLength();
	}

	isEmpty() {
		return !this.list.getLength();
	}

	peekFront() {
		if (this.isEmpty()) {
			return null;
		}

		return this.list.getHead()?.value;
	}

	peekBack() {
		if (this.isEmpty()) {
			return null;
		}

		return this.list.getTail()?.value;
	}

	enqueueFront(value: T) {
		this.list.prepend(value);
	}

	enqueueBack(value: T) {
		this.list.append(value);
	}

	dequeueFront() {
		const removedValue = this.list.removeHead();

		return removedValue ? removedValue.value : null;
	}

	dequeueBack() {
		const removedValue = this.list.removeTail();

		return removedValue ? removedValue.value : null;
	}

	toArray() {
		return this.list.toArray();
	}

	toString() {
		return this.toArray().toString();
	}

	static from<From>(list?: From[] | LinkedList<From>): Deque<From> {
		const deque = new Deque<From>();

		if (list instanceof LinkedList) {
			for (const value of list.toArray()) {
				deque.enqueueBack(value);
			}
		}

		if (Array.isArray(list)) {
			for (const value of list) {
				deque.enqueueBack(value);
			}
		}

		return deque;
	}
}

export default Deque;
