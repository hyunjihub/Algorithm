function solution(user_id, banned_id) {
    function checkSame(user, ban) {
        if (user.length !== ban.length) return false;
        
        for (let i = 0; i < user.length; i++) {
            if (ban[i] !== '*' && user[i] !== ban[i]) {
                return false;
            }
        }
        
        return true;
    }

    let map = new Map();
    for (let i = 0; i < banned_id.length; i++) {
        map.set(banned_id[i], []);
        for (let j = 0; j < user_id.length; j++) {
            if (checkSame(user_id[j], banned_id[i])) {
                map.get(banned_id[i]).push(j);
            }
        }
    }

    let resultSet = new Set();
    function DFS(bannedIndex, currentCombination, used) {
        if (bannedIndex === banned_id.length) {
            currentCombination.sort();
            resultSet.add(currentCombination.join("-"));
            return;
        }

        let users = map.get(banned_id[bannedIndex]);

        for (let i = 0; i < users.length; i++) {
            let userIndex = users[i];
            if (used[userIndex]) continue;

            used[userIndex] = true;
            DFS(bannedIndex + 1, [...currentCombination, user_id[userIndex]], used);
            used[userIndex] = false;
        }
    }

    let used = Array(user_id.length).fill(false);
    DFS(0, [], used);

    return resultSet.size;
}
