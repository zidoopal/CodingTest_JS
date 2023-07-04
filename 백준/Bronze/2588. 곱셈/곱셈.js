// fs모듈 불러오고
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// 불러온 input.txt input 변수에 넣어준 후 문자열로 변환해주기
let input = fs.readFileSync(filePath).toString().split('\n');

// split을 써서 배열이 된 상태, 배열의 원소를 꺼내서 input 변수에 재할당
// 숫자로 형변환 → map()메서드 +연산자 사용
input = input.map((item) => +item);

solution(input[0], input[1]);

function solution(A, B) {
  //console.log('A: ', A, 'B "', B);  // A:  472  B:  385  (type: number)
  // A에 B를 한 자리씩 곱해줘야 하는데 현재 숫자형이라 한 자리씩 나눌수가 없음
  // B를 문자로 형변환 시켜준 후 한 글자씩 나눠주자
  const stringB = String(B); // '385'
  const one = +stringB[2]; // +연산자 사용하여 숫자로 형변환
  const ten = +stringB[1];
  const hund = +stringB[0];
  // console.log(one, ten, hund); // 5, 8, 3
  // console.log(typeof (one, ten, hund)); // number

  // (3)- 472 * B[2]
  console.log(A * one);
  // (4)- 472 * B[1]
  console.log(A * ten);
  // (5)- 472 * B[0]
  console.log(A * hund);
  // (6) A * B
  console.log(A * B);
}
