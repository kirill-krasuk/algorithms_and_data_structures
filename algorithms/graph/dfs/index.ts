// TODO: tests move to separate file

import { GraphList, GraphMatrix } from '../../../data_structures/graphs/types';
import G from '../../../data_structures/graphs/representation';

const { graph, createAdjacencyList, createAdjacencyMatrix } = G;

/**
 * O(n + m)
 */
function DFSList(g: GraphList, start: number) {
	const visited = new Set();

	// TODO: взять свою реализацию стэка, как будет готова
	const stack = [start];

	while (stack.length) {
		const currentVertex = stack.pop()!;
		visited.add(currentVertex);

		const neighborVertices = g[currentVertex];

		if (neighborVertices) {
			for (let i = 0; i < neighborVertices.length; i++) {
				if (!visited.has(neighborVertices[i])) {
					stack.push(neighborVertices[i]);
				}
			}
		}
	}

	return visited;
}

console.log('DFS list', DFSList(createAdjacencyList(graph, true), 0));

function DFSListRecursive(g: GraphList, start: number, visited = new Set()) {
	visited.add(start);

	const neighborVertices = g[start];

	if (neighborVertices) {
		for (let i = 0; i < neighborVertices.length; i++) {
			if (!visited.has(neighborVertices[i])) {
				DFSListRecursive(g, neighborVertices[i], visited);
			}
		}
	}

	return visited;
}

console.log('DFSListRecursive', DFSListRecursive(createAdjacencyList(graph, true), 0));

/**
 * O(n^2)
 */
function DFSMatrix(g: GraphMatrix, start: number) {
	const visited = new Set();
	const stack = [start];

	while (stack.length) {
		const currentVertex = stack.pop()!;
		visited.add(currentVertex);

		for (let i = 0; i < g[currentVertex].length; i++) {
			if (g[currentVertex][i] === 1 && !visited.has(i)) {
				stack.push(i);
			}
		}
	}

	return visited;
}

console.log('DFSMatrix', DFSMatrix(createAdjacencyMatrix(graph, true), 0));

function DFSMatrixRecursive(g: GraphMatrix, start: number, visited = new Set()) {
	visited.add(start);

	for (let i = 0; i < g[start].length; i++) {
		if (g[start][i] === 1 && !visited.has(i)) {
			DFSMatrixRecursive(g, i, visited);
		}
	}

	return visited;
}

console.log(
	'DFSMatrixRecursive',
	DFSMatrixRecursive(createAdjacencyMatrix(graph, true), 0),
);

export default {
	DFSList,
	DFSListRecursive,
	DFSMatrix,
	DFSMatrixRecursive,
};
