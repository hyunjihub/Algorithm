const fs = require('fs');
let [n, ...info] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [N, M] = n.trim().split(' ').map(Number);
info = info.map((i) => i.trim().split(' ')[1].split(''));

let minGuitar = Infinity;
let maxSong = 0;

function DFS(guitar, song, current) {
  let songCount = song.size;

  if (songCount > maxSong) {
    maxSong = songCount;
    minGuitar = guitar.size;
  } else if (songCount === maxSong) {
    minGuitar = Math.min(minGuitar, guitar.size);
  }

  if (current === N) return;

  DFS(guitar, song, current + 1);

  let newGuitar = new Set(guitar);
  let newSong = new Set(song);
  newGuitar.add(current);

  for (let j = 0; j < M; j++) {
    if (info[current][j] === 'Y') {
      newSong.add(j);
    }
  }

  DFS(newGuitar, newSong, current + 1);
}

DFS(new Set(), new Set(), 0);

console.log(maxSong === 0 ? -1 : minGuitar);
