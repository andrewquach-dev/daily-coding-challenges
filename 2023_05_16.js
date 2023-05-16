//https://www.lintcode.com/problem/178/

/**
 * Check if a graph is a valid tree.
 * @param {number} n - Number of nodes in the graph.
 * @param {number[][]} edges - Array of edges representing the graph.
 * @return {boolean} - True if the graph is a valid tree, false otherwise.
 */
function isValidTree(n, edges) {
    // Create an adjacency list to represent the graph
    const graph = new Array(n).fill().map(() => []);

    // Build the adjacency list
    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    // Create a visited array to track visited nodes
    const visited = new Array(n).fill(false);

    // Perform DFS to check if the graph is acyclic and fully connected
    if (!dfs(0, -1)) {
        return false; // Graph contains a cycle
    }

    // Check if all nodes were visited (fully connected graph)
    for (const nodeVisited of visited) {
        if (!nodeVisited) {
            return false; // Graph is not fully connected
        }
    }

    return true; // Graph is a valid tree

    /**
     * Depth-First Search (DFS) helper function.
     * @param {number} node - Current node being visited.
     * @param {number} parent - Parent of the current node.
     * @return {boolean} - True if the graph is acyclic, false if a cycle is found.
     */
    function dfs(node, parent) {
        visited[node] = true;

        for (const neighbor of graph[node]) {
            if (neighbor === parent) {
                continue; // Skip the edge to the parent
            }

            if (visited[neighbor] || !dfs(neighbor, node)) {
                return false; // Cycle found
            }
        }

        return true; // Graph is acyclic
    }
}
