function solution(x) {
  // 각 자릿수의 합을 저장 할 sum 변수
  let sum = 0;

  //
  let num = x;
  while (num > 0) {
    sum += num % 10; // 일의 자리
    num = Math.floor(num / 10);
  }
  return x % sum === 0;
}