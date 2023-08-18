function solution(n) {
  // ans 변수 선언 및 초기화
  let ans = 0;

  for (let i = 0; i < n; i++) {
    if (ans > 0) break;

    if (n % i === 1) ans = i;
  }
  return ans;
}

