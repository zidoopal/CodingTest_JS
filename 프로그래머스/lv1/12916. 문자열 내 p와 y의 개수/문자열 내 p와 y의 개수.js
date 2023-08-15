function solution(s) {
  // p의 갯수와 y의 갯수 같으면 true, 다르면 false return 하나도 없는경우는 항상 true 리턴

  // 아니면 false 둘다 0이면 true?
  // 일단 다 소문자나 대문자로 바꿔야하나?

  // 그럼 일단 소문자로 다 바꿔
  let str = s.toLowerCase();
  let check_p = str.split('p').length;
  let check_y = str.split('y').length;

  return check_p == check_y ? true : false;
}
