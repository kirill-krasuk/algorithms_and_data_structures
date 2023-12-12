import { Graph, GraphList } from './types';

/**
 * создаст список смежности для графа
 *
 * const graph: Graph = [[0, 1], [1, 2], [2, 0]];
 *
 * createAdjacencyList(graph, true);
 * вернет { 0: [1, 2], 1: [0, 2], 2: [0, 1] }
 */
function createAdjacencyList(listOfEdges: Graph, isOriented = true): GraphList {
	const adjacencyList: GraphList = {};

	function addEdge(from: number, to: number): void {
		adjacencyList[from] = adjacencyList[from] || [];
		adjacencyList[from].push(to);
	}

	for (const [from, to] of listOfEdges) {
		addEdge(from, to);

		/**
		 * если граф ориентированный, то нужно добавить еще и обратное ребро
		 */
		if (!isOriented) {
			addEdge(to, from);
		}
	}

	return adjacencyList;
}

export default createAdjacencyList;
