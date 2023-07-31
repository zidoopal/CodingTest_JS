const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();

// 받아온 인풋 문자열인 상태 숫자로 바꿔바꿔
let N = +input;
let ans = 0; // 설탕봉지봉지

// while 무한루프
while (true) {
  // 설탕이 5로 딱 나눠떨어지면 N으로 나눈 몫 == 5kg 봉지 갯수 끗
  if (N % 5 === 0) {
    ans += N / 5;
    break;
  }
  // 5kg로 바로 안 나눠 떨어지면 나눠떨어질때까지 3kg씩 쏨쏨따리 빼면서 1++씩 더해주기
  N -= 3;
  ans++;

  // N이 0보다 작은 수거나,
  // 3, 5로 안 나눠 떨어져서 위 과정 거치면서 0보다 작아지면(ex. 4, 7..등등)
  // -1 반환 빠빠
  if (N < 0) {
    ans = -1;
    break;
  }
}

console.log(ans);