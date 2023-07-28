// 문제
// M이상 N이하의 소수를 모두 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 자연수 M과 N이 빈 칸을 사이에 두고 주어진다.
// (1 ≤ M ≤ N ≤ 1,000,000) M이상 N이하의 소수가 하나 이상 있는 입력만 주어진다.

// 출력
// 한 줄에 하나씩, 증가하는 순서대로 소수를 출력한다.

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

const M = parseInt(input.split(' ')[0]);
const N = parseInt(input.split(' ')[1]);

//0~N의 인덱스를 모두 가지는 배열을 만들기위해 크기는 N+1로 설정
const isPrime = Array(N + 1).fill(true);
isPrime[0] = isPrime[1] = false; //0, 1은 소수가 아니므로 false

/* 에라토스테네스의 체 */
// 2부터 N까지의 수 중에서 (1은 이미 소수가 아님) 루트N 이하의 수들에 대해
for (let i = 2; i * i <= N; i++) {
  //각 i에 대한 배수들을 판단해 해당 수는 소수가 아니므로 false로 만들기
  for (let j = i * i; j <= N; j += i) isPrime[j] = false;
}

// isPrime 배열에서 M~N의 범위의 수들 중에서 소수가 아닌 수(true)만 출력
for (let i = M; i <= N; i++) {
  if (isPrime[i] === true) console.log(i);
}