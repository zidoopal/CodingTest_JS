function solution(my_string, letter) {
  let ans = '';
  let arr = [...my_string];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== letter) ans += arr[i];
  }
  return ans;
}