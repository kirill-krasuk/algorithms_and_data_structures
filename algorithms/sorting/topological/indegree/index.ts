import Queue from '../../../../data_structures/queue/queue/Queue';

/* eslint-disable guard-for-in */
export type Vertex = string;
export type Graph = {
	[key: string]: Vertex[];
};

/**
 * Топологическая сортировка с помощью индегри (количество входящих ребер)
 *
 * Алгоритм работает следующим образом:
 * 1. Создаются две структуры данных: `indegree` для хранения количества входящих ребер
 *  для каждой вершины и `result` для хранения отсортированных вершин.
 * 2. Инициализируется `indegree` нулями для всех вершин.
 * 3. Для каждой вершины в графе увеличивается значение `indegree` для каждого соседа этой вершины.
 * 4. Создается очередь `queue` и в нее добавляются все вершины, у которых `indegree` равен нулю.
 * 5. Пока очередь не пуста, из нее извлекается вершина, добавляется в `result` и для
 *  каждого соседа этой вершины уменьшается `indegree`.
 * 6. Если для какого-то соседа `indegree` становится равным нулю, то этот сосед
 * добавляется в очередь.
 * 7. В конце работы алгоритма `result` содержит вершины в топологическом порядке.
 */
function topologicalSortIndegree(graph: Graph): Vertex[] {
	const indegree: { [key: string]: number } = {};
	const result: Vertex[] = [];

	for (const vertex in graph) {
		indegree[vertex] = 0;
	}

	for (const vertex in graph) {
		for (const neighbor of graph[vertex]) {
			indegree[neighbor]++;
		}
	}

	const queue = new Queue<Vertex>();

	for (const vertex in indegree) {
		if (indegree[vertex] === 0) {
			queue.enqueue(vertex);
		}
	}

	while (!queue.isEmpty()) {
		const vertex = queue.dequeue()!;
		result.push(vertex);

		for (const neighbor of graph[vertex]) {
			indegree[neighbor]--;

			if (indegree[neighbor] === 0) {
				queue.enqueue(neighbor);
			}
		}
	}

	return result;
}

export default topologicalSortIndegree;
