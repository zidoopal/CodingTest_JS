
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let N = parseInt(input);
let answer = 0;

while (true) {
  if (N % 5 === 0) {
    answer += N / 5;
    break;
  }

  N -= 3;
  answer++;

  if (N < 0) {
    answer = -1;
    break;
  }
}

console.log(answer);