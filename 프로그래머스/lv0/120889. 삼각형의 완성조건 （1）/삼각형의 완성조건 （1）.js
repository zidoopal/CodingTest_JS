function solution(sides) {
  let ans = sides.sort((a, b) => a - b);
  return ans[0] + ans[1] > ans[2] ? 1 : 2;
}