//https://www.codewars.com/kata/55f10facf351f5e236000014

function topoSort(nodes) {
    const result = []
    const seen = new Set()
    const processed = new Set()
    const dfs = v => {
        if (seen.has(v)) return
        seen.add(v)
        processed.add(v)
        for (const n of v.out) {
            if (processed.has(n)) throw new Error('Graph has a cycle')
            dfs(n)
        }
        processed.delete(v)
        result.splice(0, 0, v)
    }
    for (const n of nodes) dfs(n)
    return result
}