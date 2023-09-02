function solution(arr, divisor) {
  let ans = [];

  // for문을 사용해야겠심더
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) ans.push(arr[i]);
    // arr[i] 중에서 divisor로 나눴을때 0 되는 애가 하나도업따?
  }
  if (ans.length === 0) ans.push(-1);

  return ans.sort((a, b) => a - b);
}