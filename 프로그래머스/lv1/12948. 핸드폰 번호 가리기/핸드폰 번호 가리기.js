function solution(phone_number) {
  //phone_number 뒷 자리 4 제외하고 다 *로 바꿔바꿔 // 정규 표현식 사용
  return phone_number.replace(/\d(?=\d{4})/g, '*');
}

console.log(solution('01033334444'));