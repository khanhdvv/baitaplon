function runDijkstra() {
    const startNode = document.getElementById("startNode").value.trim();
    const graph = {
        A: { B: 5, D: 9, E: 2 },
        B: { A: 5, C: 2 },
        C: { B: 2, D: 3 },
        D: { A: 9, C: 3, E: 2 },
        E: { A: 2, D: 2 }
    };

    const distances = dijkstra(graph, startNode);

    let output = "<h3>Đường đi ngắn nhất từ đỉnh " + startNode + ":</h3>";
    for (const node in distances) {
        output += "<p>" + node + ": " + distances[node] + "</p>";
    }

    document.getElementById("output").innerHTML = output;
}

function dijkstra(graph, startNode) {
    const visited = {};
    const distances = {};
    const queue = [];

    distances[startNode] = 0;
    queue.push(startNode);

    while (queue.length > 0) {
        const currentNode = queue.shift();
        if (!visited[currentNode]) {
            visited[currentNode] = true;

            for (const neighbor in graph[currentNode]) {
                const distance = distances[currentNode] + graph[currentNode][neighbor];
                if (!distances[neighbor] || distance < distances[neighbor]) {
                    distances[neighbor] = distance;
                }
                if (!visited[neighbor]) {
                    queue.push(neighbor);
                }
            }
        }
    }

    return distances;
}
