// 아메리카노 한 잔 5,500원 , 가진 돈 ==money 일 때, 최대로 마실 수 있는 아메리카노 잔 수와 남는 돈?

function solution(money) {
  const coffee = Math.floor(money / 5500);
  const change = money % 5500
  return [coffee, change]
}
