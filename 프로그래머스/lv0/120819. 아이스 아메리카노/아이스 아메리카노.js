// 아메리카노 한 잔 5,500원 , 가진 돈 ==money 일 때, 최대로 마실 수 있는 아메리카노 잔 수와 남는 돈?

function solution(money) {
  // money / 5500 의 몫 == 아메리카노 잔 수, 나머지 == money-(몫[아메리카노 잔 수]*5500)
  let ans = [];
  const coffee = Math.floor(money / 5500);
  const change = money - coffee * 5500;
  ans.push(coffee, change)
  return ans;
}
