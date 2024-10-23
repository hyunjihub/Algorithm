const fs = require('fs');
let [n, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [N, M] = n.trim().split(' ').map(Number);
let index = 0;

let pokemonIndex = new Map();
let pokemonName = new Map();
for (let i = 0; i < N; i++) {
  let pokemon = input[index++].trim();
  pokemonIndex.set(i + 1, pokemon);
  pokemonName.set(pokemon, i + 1);
}

let answer = '';
for (let i = 0; i < M; i++) {
  let question = input[index++].trim();
  if (isNaN(Number(question))) {
    answer += pokemonName.get(question) + '\n';
  } else {
    answer += pokemonIndex.get(Number(question)) + '\n';
  }
}

console.log(answer.trim());
