function solution(n, numlist) {
  let ans = [];
  // numlist에서 n의 배수 아닌 애들 제거하기
  numlist.map((i) => {
    if (i % n === 0) ans.push(i);
  });
  return ans;
}