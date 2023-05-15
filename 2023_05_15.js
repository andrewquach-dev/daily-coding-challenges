//https://www.lintcode.com/problem/591/

var countComponents = function (n, edges, count = 0) {
    const { graph, visited } = buildGraph(n, edges);

    for (const node in graph) {
        if (hasPath(graph, node, visited)) count++;
    }

    return count;
};

const initGraph = (n) => ({
    graph: new Array(n).fill().map(() => []),
    visited: new Array(n).fill(false),
});

const buildGraph = (n, edges) => {
    const { graph, visited } = initGraph(n)

    for (const [src, dst] of edges) {
        graph[src].push(dst);
        graph[dst].push(src);
    }

    return { graph, visited };
}

const hasPath = (graph, current, visited) => {
    if (visited[current]) return false;
    visited[current] = current;

    for (const neighbor of graph[current]) {
        hasPath(graph, neighbor, visited);
    }

    return true;
}