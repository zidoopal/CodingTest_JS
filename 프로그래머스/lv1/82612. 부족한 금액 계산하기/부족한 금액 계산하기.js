function solution(price, money, count) {
  let charge = 0;
  // 1번 째 놀이기구 이용 시, money - price
  // n번 째 놀이기구 이용 시, money - count * price
    
  // for문 사용, count 증가
  // charge 에 price * i(count) 더해주기
  for (let i = 1; i <= count; i++) {
    charge += price * i;
  }

  // return은 charge > money ? charge - money : 0
  return charge > money ? charge - money : 0;
}
