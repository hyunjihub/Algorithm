const fs = require('fs');
let [N, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
let problems = input.slice(0, N).map((i) => i.trim().split(' ').map(Number));
let M = Number(input[N]);
let commands = input.slice(N + 1).map((i) => i.trim().split(' '));

class SortedMap {
  constructor() {
    this.problemToLevel = new Map();
    this.levelToProblems = new Map();
    this.levels = [];
  }

  insertSorted(arr, val) {
    const idx = arr.findIndex((x) => x > val);
    if (idx === -1) arr.push(val);
    else arr.splice(idx, 0, val);
  }

  removeSorted(arr, val) {
    const idx = arr.indexOf(val);
    if (idx !== -1) arr.splice(idx, 1);
  }

  add(p, l) {
    this.problemToLevel.set(p, l);
    if (!this.levelToProblems.has(l)) {
      this.levelToProblems.set(l, []);
      this.insertSorted(this.levels, l);
    }

    this.insertSorted(this.levelToProblems.get(l), p);
  }

  solved(p) {
    const l = this.problemToLevel.get(p);
    if (l === undefined) return;

    this.problemToLevel.delete(p);
    const arr = this.levelToProblems.get(l);
    this.removeSorted(arr, p);

    if (arr.length === 0) {
      this.levelToProblems.delete(l);
      this.removeSorted(this.levels, l);
    }
  }

  recommend(x) {
    if (x === 1) {
      const maxLevel = this.levels[this.levels.length - 1];
      const problems = this.levelToProblems.get(maxLevel);
      return problems[problems.length - 1];
    } else {
      const minLevel = this.levels[0];
      const problems = this.levelToProblems.get(minLevel);
      return problems[0];
    }
  }
}

const sm = new SortedMap();
for (const [p, l] of problems) {
  sm.add(p, l);
}

const result = [];

for (const [cmd, ...args] of commands) {
  if (cmd === 'add') {
    const [p, l] = args.map(Number);
    sm.add(p, l);
  } else if (cmd === 'recommend') {
    const x = Number(args[0]);
    result.push(sm.recommend(x));
  } else if (cmd === 'solved') {
    const p = Number(args[0]);
    sm.solved(p);
  }
}

console.log(result.join('\n'));
