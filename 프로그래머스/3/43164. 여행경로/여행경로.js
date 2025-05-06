function solution(tickets) {
    const answer = [];
    
    tickets.sort((a, b) => {
        if (a[0] === b[0]) return a[1].localeCompare(b[1]);
        return a[0].localeCompare(b[0]);
    });

    const visited = new Array(tickets.length).fill(false);

    function DFS(path, count) {
        if (count === tickets.length) {
            answer.push([...path]);
            return true;
        }

        for (let i = 0; i < tickets.length; i++) {
            const [from, to] = tickets[i];
            if (!visited[i] && from === path[path.length - 1]) {
                visited[i] = true;
                path.push(to);

                if (DFS(path, count + 1)) return true;

                path.pop();
                visited[i] = false;
            }
        }
        return false;
    }

    DFS(["ICN"], 0);
    return answer[0];
}
