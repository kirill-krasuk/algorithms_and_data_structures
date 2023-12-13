import { GraphMatrix } from '../../../data_structures/graphs/types';
import Queue from '../../../data_structures/queue/queue/Queue';

const EDGE_EXISTS = 1;

/**
 * O(n^2)
 */
function BFSMatrix(g: GraphMatrix, start: number) {
	if (!g[start] || g.length === 0) {
		return new Set();
	}

	const visited = new Set();
	const queue = new Queue<number>();

	queue.enqueue(start);

	while (!queue.isEmpty()) {
		const currentVertex = queue.dequeue()!;
		visited.add(currentVertex);

		g[currentVertex].forEach((value, i) => {
			if (value === EDGE_EXISTS && !visited.has(i)) {
				queue.enqueue(i);
			}
		});
	}

	return visited;
}

export default BFSMatrix;
