function solution(price, money, count) {
  // 놀이기구 인기 짱 많음 | 이용료 price, 마 머니 money, 이용 횟수 count
  let ans = 0;

  for (let i = 1; i <= count; i++) {
    ans += price * i;
  }
  return money < ans ? ans - money : 0;
}