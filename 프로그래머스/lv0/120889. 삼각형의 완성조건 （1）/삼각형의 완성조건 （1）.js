function solution(sides) {
  let ans = 0;
  let max = Math.max(...sides); // 얘가 나머지 두개 합보다 작아야함

  // 테스트 케이스 실패 - 이등변 삼각형의 경우? (max가 꼭 하나라는 법 없음)
  // for (let x of sides) {
  //   if (x !== max) ans += x;
  // }
  // return max < ans ? 1 : 2;

  // 수정
  for (let x of sides) {
    ans += x;
  }
  return ans - max > max ? 1 : 2;
}