function solution(n) {
  let sub = [];
  // 1부터 n까지 나눴을 때 나머지가 0이 되는 수가 == 약수
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      sub.push(i);
    }
  }
  return sub.length;
}