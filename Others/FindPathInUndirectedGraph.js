const graph = require("./_graph");

function hasPathRecursive(graph, source, dest, visited) {
  if (source === dest) {
    return true;
  }
  visited[source] = true;
  for (let i of graph.adjList.get(source)) {
    if (!visited[i]) {
      let hasNbrPath = hasPathRecursive(graph, i, dest, visited);
      if (hasNbrPath === true) {
        return true;
      }
    }
  }
  return false;
}

visited = [];

console.log(hasPathRecursive(graph, 0, 6, visited));
