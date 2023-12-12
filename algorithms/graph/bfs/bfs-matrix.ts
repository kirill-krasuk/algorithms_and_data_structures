import { GraphMatrix } from '../../../data_structures/graphs/types';
import Queue from '../../../data_structures/queue/queue/Queue';

/**
 * O(n^2)
 */
function BFSMatrix(g: GraphMatrix, start: number) {
	if (!g[start]) {
		return new Set();
	}

	const visited = new Set();
	const queue = new Queue<number>();

	queue.enqueue(start);

	while (!queue.isEmpty()) {
		const currentVertex = queue.dequeue()!;
		visited.add(currentVertex);

		for (let i = 0; i < g[currentVertex].length; i++) {
			if (g[currentVertex][i] === 1 && !visited.has(i)) {
				queue.enqueue(i);
			}
		}
	}

	return visited;
}

export default BFSMatrix;
