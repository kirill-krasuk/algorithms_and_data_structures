/* eslint-disable no-use-before-define */
class Node<T> {
	constructor(
		public value: T,
		public prev: Node<T> | null = null,
		public next: Node<T> | null = null,
	) {}
}

export default Node;
