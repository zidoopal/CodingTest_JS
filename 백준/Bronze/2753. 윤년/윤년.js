// fs모듈 불러오고
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// 불러온 input.txt input 변수에 넣어준 후 문자열로 변환해주기
let input = fs.readFileSync(filePath).toString().split('\n');

// split을 써서 배열이 된 상태, +연산자로 숫자로 형변환, input 변수에 할당
solution(+input[0]);

// 윤년 == 연도가 4의 배수 && 100의 배수가 아닐 때 || 400의 배수일 때

function solution(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(1);
  } else {
    console.log(0);
  }
}
