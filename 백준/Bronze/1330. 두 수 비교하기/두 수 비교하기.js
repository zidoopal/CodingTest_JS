// fs모듈 불러오고
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// 불러온 input.txt input 변수에 넣어준 후 문자열로 변환해주기
let input = fs.readFileSync(filePath).toString().split('\n');

// split을 써서 배열이 된 상태, 배열의 원소를 꺼내서 input 변수에 재할당
// 숫자로 형변환 → map()메서드 +연산자 사용
input = input[0];
input = input.split(' ').map((item) => +item);
// console.log(input); // [ 1, 2 ]  type : number

solution(input[0], input[1]);

function solution(A, B) {
  if (A > B) {
    console.log('>');
  }
  if (A < B) {
    console.log('<');
  }
  if (A === B) {
    console.log('==');
  }
}
