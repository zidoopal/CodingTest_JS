function solution(numbers) {
  let ans = 0;
  // numbers 0~9까지 없어? 글ㄹ엄 찾아! 없는 거 더해! 릿헌 해!
  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) ans += i;
  }

  return ans;
}