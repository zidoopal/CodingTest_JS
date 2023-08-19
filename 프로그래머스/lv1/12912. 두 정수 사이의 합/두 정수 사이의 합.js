function solution(a, b) {
  // a와 b사이에 속한 모든 정수의 합 return
  // a === b 일경우 둘 중 하나 return
  // 절댓값!!!!

  return ((a + b) * (Math.abs(a - b) + 1)) / 2;
}

