import Node from './Node';

class DoublyLinkedList<T> {
	public head: Node<T> | null = null;
	public tail: Node<T> | null = null;
	private _count = 0;

	constructor(array?: T[]) {
		if (array) {
			this.fromArray(array);
		}
	}

	count() {
		return this._count;
	}

	append(value: T) {
		const newNode = new Node(value);
		this._count++;

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;

			return this;
		}

		newNode.prev = this.tail;
		this.tail!.next = newNode;
		this.tail = newNode;

		return this;
	}

	prepend(value: T) {
		const newNode = new Node(value, null, this.head);
		this._count++;

		if (this.head) {
			this.head.prev = newNode;
		}

		this.head = newNode;

		if (!this.tail) {
			this.tail = newNode;
		}

		return this;
	}

	insertAt(value: T, toPosition = 0) {
		let previousNode: Node<T> | null = null;
		let currentNode = this.head;
		let currentPosition = 0;

		while (currentNode) {
			if (currentPosition === toPosition) {
				const newNode = new Node(value, previousNode, currentNode);

				this._count++;

				if (previousNode) {
					previousNode.next = newNode;
					currentNode.prev = newNode;
				} else {
					if (this.head) {
						this.head.prev = newNode;
					}

					this.head = newNode;
				}

				return this;
			}

			previousNode = currentNode;
			currentNode = currentNode.next;
			currentPosition++;
		}

		if (!currentNode) {
			const newNode = new Node(value, previousNode, null);
			this._count++;

			if (!this.head) {
				this.head = newNode;
				this.tail = newNode;

				return this;
			}

			if (this.tail) {
				this.tail.next = newNode;
				this.tail = newNode;

				return this;
			}

			return this;
		}

		return this;
	}

	remove(value: T) {
		let previousNode = null;
		let currentNode = this.head;

		while (currentNode) {
			if (currentNode.value === value) {
				const removedNode = currentNode;

				if (previousNode) {
					previousNode.next = currentNode.next;
				} else {
					this.head = currentNode.next;
				}

				if (currentNode.next) {
					currentNode.next.prev = previousNode;
				} else {
					this.tail = previousNode;
				}

				this._count--;
				return removedNode;
			}

			previousNode = currentNode;
			currentNode = currentNode.next;
		}

		return false;
	}

	removeHead() {
		if (!this.head) {
			return null;
		}

		const removedNode = this.head;
		this._count--;

		if (this.head && !this.head.next) {
			this.head = null;
			this.tail = null;

			return removedNode;
		}

		this.head = this.head.next;
		this.head!.prev = null;

		return removedNode;
	}

	removeTail() {
		if (!this.head) {
			return null;
		}

		const removedNode = this.tail;
		this._count--;

		if (this.tail && !this.tail.prev) {
			this.tail = null;
			this.head = null;

			return removedNode;
		}

		this.tail = this.tail!.prev;
		this.tail!.next = null;

		return removedNode;
	}

	find(value: (v: T) => boolean): Node<T> | null;
	find(value: T): Node<T> | null;
	find(value: any): Node<T> | null {
		let currentNode = this.head;

		while (currentNode) {
			if (typeof value === 'function') {
				if (value(currentNode.value)) {
					return currentNode;
				}
			}

			if (value === currentNode.value) {
				return currentNode;
			}

			currentNode = currentNode.next;
		}

		return null;
	}

	contains(value: T) {
		let currentNode = this.head;

		while (currentNode) {
			if (value === currentNode.value) {
				return true;
			}

			currentNode = currentNode.next;
		}

		return false;
	}

	reverse() {
		let previousNode = null;
		let nextNode = null;
		let currentNode = this.head;

		while (currentNode) {
			nextNode = currentNode.next;
			previousNode = currentNode.prev;

			currentNode.next = previousNode;
			currentNode.prev = nextNode;

			currentNode = nextNode;
		}

		const tempLink = this.head;
		this.head = this.tail;
		this.tail = tempLink;

		return this;
	}

	fromArray(array: T[]) {
		array.forEach((item) => {
			this.append(item);
		});
	}

	clear() {
		this.head = null;
		this.tail = null;
		this._count = 0;
	}

	toArray() {
		const arr = [];

		let currentNode = this.head;

		while (currentNode) {
			arr.push(currentNode.value);

			currentNode = currentNode.next;
		}

		return arr;
	}

	toString() {
		return this.toArray().toString();
	}

	* [Symbol.iterator]() {
		let currentNode = this.head;

		while (currentNode) {
			yield currentNode.value;
			currentNode = currentNode.next;
		}
	}
}

export default DoublyLinkedList;
