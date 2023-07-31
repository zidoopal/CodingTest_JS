function solution(price) {
  // 50만원 >= 20% discount
  // 30만원 >= 10% discount
  // 10만원 >= 5% discount  그 이하 X

  // eturn  price >= 500000 ? price**0.8
  return price >= 500000
    ? Math.floor(price * 0.8)
    : price >= 300000
    ? Math.floor(price * 0.9)
    : price >= 100000
    ? Math.floor(price * 0.95)
    : price;
}

console.log(solution(90000));
