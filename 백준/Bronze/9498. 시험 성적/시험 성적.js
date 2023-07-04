// fs모듈 불러오고
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// 불러온 input.txt input 변수에 넣어준 후 문자열로 변환해주기
let input = fs.readFileSync(filePath).toString().split('\n');

// split을 써서 배열이 된 상태, +연산자로 숫자로 형변환, input 변수에 할당
solution(+input[0]);

function solution(num) {
  if (num >= 90 && num <= 100) {
    console.log('A');
  } else if (num >= 80 && num <= 89) {
    console.log('B');
  } else if (num >= 70 && num <= 79) {
    console.log('C');
  } else if (num >= 60 && num <= 69) {
    console.log('D');
  } else {
    console.log('F');
  }
}
