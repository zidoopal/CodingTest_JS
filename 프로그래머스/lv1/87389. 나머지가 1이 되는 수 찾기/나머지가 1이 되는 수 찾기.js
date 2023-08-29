function solution(n) {
  let ans = [];
  // 나머지가 1 되는 수 찾기
  // n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 리턴
  for (let i = 1; i < n; i++) {
    if (n % i === 1) {
      return i;
    }
  }
}



