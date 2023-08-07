/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */

import { Graph, GraphList, GraphMatrix } from './types';

/**
 * это уже представление графа в виде списка ребер
 */
const graph: Graph = [
	[0, 1],
	[1, 4],
	[1, 3],
	[2, 3],
	[4, 6],
	[4, 5],
];

/* list of edges */
console.table(graph);

function createAdjacencyMatrix(listOfEdges: Graph, isOriented = false): GraphMatrix {
	const vertexCount = Math.max(...listOfEdges.flat()) + 1;

	const matrix = Array.from({ length: vertexCount }, () => Array(vertexCount).fill(0));

	for (const [from, to] of listOfEdges) {
		matrix[from][to] = 1;

		/**
		 * если граф ориентированный, то нужно добавить еще и обратное ребро
		 */
		if (isOriented) {
			matrix[to][from] = 1;
		}
	}

	return matrix;
}

/* adjacency matrix */
console.table(createAdjacencyMatrix(graph, true));

function createAdjacencyList(listOfEdges: Graph, isOriented = false): GraphList {
	const adjacencyList: GraphList = {};

	function addEdge(from: number, to: number): void {
		if (adjacencyList[from]) {
			adjacencyList[from].push(to);
		} else {
			adjacencyList[from] = [to];
		}
	}

	for (const [from, to] of listOfEdges) {
		addEdge(from, to);

		/**
		 * если граф ориентированный, то нужно добавить еще и обратное ребро
		 */
		if (isOriented) {
			addEdge(to, from);
		}
	}

	return adjacencyList;
}

/* adjacency list */
console.log(createAdjacencyList(graph, true));

export default {
	graph,
	createAdjacencyMatrix,
	createAdjacencyList,
};
