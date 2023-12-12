export type Vertex = string;
export type Graph = {
	[key: string]: Vertex[];
};

function topologicalSort(graph: Graph): Vertex[] {
	const visited: { [key: string]: boolean } = {};
	const result: Vertex[] = [];

	function dfs(vertex: Vertex) {
		visited[vertex] = true;

		for (const neighbor of graph[vertex]) {
			if (!visited[neighbor]) {
				dfs(neighbor);
			}
		}

		// модификация алгоритма DFS для топологической сортировки
		result.unshift(vertex);
	}

	for (const vertex in graph) {
		if (!visited[vertex]) {
			dfs(vertex);
		}
	}

	return result;
}

export default topologicalSort;
