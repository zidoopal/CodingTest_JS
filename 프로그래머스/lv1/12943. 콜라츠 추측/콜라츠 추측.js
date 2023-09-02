function solution(num) {
  // 500번 반복할때까지 1이 되지 않는다면 -1 반환
  // 몇 번 반복 할지 모르니까 while문을 써야할 것 같다능

  let sum = 0;

  while (num !== 1 && sum !== 500) {
    num % 2 === 0 ? (num = num / 2) : (num = num * 3 + 1);
    sum++;
  }
  return num == 1 ? sum : -1;
}