/* eslint-disable no-use-before-define */
class Node<T> {
	constructor(public value: T, public next: Node<T> | null = null) {}
}

export default Node;
