export type Vertex = string;
export type Graph = {
	[key: string]: Vertex[];
};

/**
 * Топологическая сортировка с использованием алгоритма обхода в глубину (DFS)
 *
 * Алгоритм работает следующим образом:
 * 1. Создаются две структуры данных: `visited` для отслеживания посещенных вершин и
 *  `result` для хранения отсортированных вершин.
 * 2. Инициализируется `visited` как пустой объект, где ключи - это вершины, а значения -
 *  это булевы значения, указывающие, была ли посещена вершина.
 * 3. Запускается DFS для каждой непосещенной вершины в графе.
 * 4. В процессе DFS, после посещения всех соседей вершины, вершина добавляется в начало `result`.
 * 5. В конце работы алгоритма `result` содержит вершины в топологическом порядке.
 *
 * Важно отметить, что этот алгоритм работает только для DAG (Directed Acyclic Graphs -
 * направленных ациклических графов),
 * и он будет выдавать некорректные результаты для графов с циклами.
 */
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

		// модификация алгоритма DFS для топологической сортировки (4*)
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
