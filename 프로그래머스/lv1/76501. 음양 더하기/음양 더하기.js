function solution(absolutes, signs) {
  // 절댓값 , 정수들의 부호
  // signs[i]가 true 이면, absolutes[i]가 양수
  let ans = 0;
  for (let i = 0; i < absolutes.length; i++) {
    signs[i] === true ? (ans += absolutes[i]) : (ans -= absolutes[i]);
  }
  return ans;
}

console.log(solution([4, 7, 12], [true, false, true]));