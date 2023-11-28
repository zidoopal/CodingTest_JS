function solution(d, budget) {
  let ans = 0;
  let sum = 0;

  d.sort((a, b) => a - b);
    
  for (let i = 0; i < d.length; i++) {
    ans++;
    sum += d[i];

    if (sum > budget) {
      ans--;
      break;
    }
  }

  return ans;
}