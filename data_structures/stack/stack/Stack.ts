import LinkedList from '../../list/linked-list/LinkedList';

class Stack<T> {
	private list = new LinkedList<T>();

	pop() {
		const removedValue = this.list.removeTail();

		return removedValue ? removedValue.value : null;
	}

	push(value: T) {
		this.list.append(value);
	}

	isEmpty() {
		return !this.list.getLength();
	}

	peek() {
		if (this.isEmpty()) {
			return null;
		}

		return this.list.getTail()?.value;
	}

	toArray() {
		return this.list.toArray();
	}

	toString() {
		return this.toArray().toString();
	}

	static from<From>(list: From[] | LinkedList<From>): Stack<From> {
		const stack = new Stack<From>();

		if (list instanceof LinkedList) {
			for (const value of list.toArray()) {
				stack.push(value);
			}
		}

		if (Array.isArray(list)) {
			for (const value of list) {
				stack.push(value);
			}
		}

		return stack;
	}
}

export default Stack;
