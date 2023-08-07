// TODO: tests move to separate file

import { GraphList, GraphMatrix } from '../../../data_structures/graphs/types';
import G from '../../../data_structures/graphs/representation';
import Queue from '../../../data_structures/queue/queue/Queue';

const { graph, createAdjacencyList, createAdjacencyMatrix } = G;

/**
 * O(n + m)
 */
function BFSList(g: GraphList, start: number) {
	const visited = new Set();
	const queue = new Queue<number>();

	queue.enqueue(start);

	while (!queue.isEmpty()) {
		const currentVertex = queue.dequeue()!;
		visited.add(currentVertex);

		const neighborVertices = g[currentVertex];

		if (neighborVertices) {
			for (let i = 0; i < neighborVertices.length; i++) {
				if (!visited.has(neighborVertices[i])) {
					queue.enqueue(neighborVertices[i]);
				}
			}
		}
	}

	return visited;
}

console.log('BFS list', BFSList(createAdjacencyList(graph, true), 0));

/**
 * O(n^2)
 */
function BFSMatrix(g: GraphMatrix, start: number) {
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

console.log('BFSMatrix', BFSMatrix(createAdjacencyMatrix(graph, true), 0));

export default {
	BFSList,
	BFSMatrix,
};
