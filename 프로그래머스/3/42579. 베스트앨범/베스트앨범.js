function solution(genres, plays) {
    var answer = [];
    let playlist = new Map();
    let count = new Map();
    
    for(let i=0; i<genres.length; i++) {
        if(playlist.has(genres[i])) {
            playlist.set(genres[i], [...playlist.get(genres[i]), [i, plays[i]]]);
            count.set(genres[i], count.get(genres[i])+plays[i]);
        } else {
            playlist.set(genres[i], [[i, plays[i]]]);
            count.set(genres[i], plays[i]);
        }
    }
    
    count = Array.from(count);
    count.sort((a, b)=>b[1]-a[1]);
    
    for(let i=0; i<count.length; i++) {
        let songs = playlist.get(count[i][0]);
        songs.sort((a, b)=>b[1]-a[1]);
        for(let j=0; j<Math.min(2, songs.length); j++) {
            answer.push(songs[j][0]);
        }
    }

    return answer;
}