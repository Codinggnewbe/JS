// 그래프 탐색 문제를 해결하는 함수
function countReachableNodes(N, M, edges) {
    // 인접 리스트로 그래프 초기화
    const graph = Array.from({ length: N + 1 }, () => []);
    edges.forEach(([x, y]) => {
        graph[x].push(y);
        graph[y].push(x);
    });

    // 방문 배열 초기화
    const visited = Array(N + 1).fill(false);
    let reachableCount = 0;

    // BFS 초기 설정
    const queue = [1];
    visited[1] = true;

    // BFS 실행
    while (queue.length > 0) {
        const node = queue.shift();
        for (const neighbor of graph[node]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.push(neighbor);
                reachableCount++;
            }
        }
    }

    return reachableCount;
}

// 예제 입력
const N = 5;
const M = 4;
const edges = [
    [1, 2],
    [1, 3],
    [2, 3],
    [4, 5]
];

// 함수 호출 및 결과 출력
console.log(countReachableNodes(N, M, edges)); // 출력: 2