import LinkedList from '../../list/linked-list/LinkedList';

const DEFAULT_BUFFER_SIZE = 32;

class ArrayStack<T> {
	private array: T[];
	private top = -1;

	constructor(private bufferSize = DEFAULT_BUFFER_SIZE) {
		this.array = new Array(this.bufferSize);
	}

	pop(): T | null {
		if (this.isEmpty()) {
			return null;
		}

		const value = this.array[this.top];
		this.top--;

		return value;
	}

	push(value: T): boolean {
		if (this.top + 1 >= this.bufferSize) {
			return false;
		}

		this.top++;
		this.array[this.top] = value;

		return true;
	}

	isEmpty(): boolean {
		return this.top === -1;
	}

	peek(): T | null {
		if (this.isEmpty()) {
			return null;
		}

		return this.array[this.top];
	}

	toArray(): T[] {
		return this.array.slice(0, this.top + 1);
	}

	toString(): string {
		return this.toArray().toString();
	}

	static from<From>(
		list: From[] | LinkedList<From>,
		bufferSize = DEFAULT_BUFFER_SIZE,
	): ArrayStack<From> {
		const stack = new ArrayStack<From>(bufferSize);

		if (list instanceof LinkedList) {
			if (list.getLength() > bufferSize) {
				throw new Error('Input size exceeds buffer size.');
			}

			for (const value of list.toArray()) {
				stack.push(value);
			}
		}

		if (Array.isArray(list)) {
			if (list.length > bufferSize) {
				throw new Error('Input size exceeds buffer size.');
			}

			for (const value of list) {
				stack.push(value);
			}
		}

		return stack;
	}
}

export default ArrayStack;
