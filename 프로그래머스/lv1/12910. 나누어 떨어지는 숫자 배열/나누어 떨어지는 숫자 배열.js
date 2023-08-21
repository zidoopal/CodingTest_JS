function solution(arr, divisor) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      ans.push(arr[i]);
    }
  }
  if (ans.length === 0) {
    ans.push(-1);
  }
  return ans.sort((a, b) => a - b);
}