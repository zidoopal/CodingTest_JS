
function solution(my_string) {
  let ans = '';
  let vowel = ['a', 'e', 'i', 'o', 'u'];
  let str = [...my_string];

  return str.filter((item) => !vowel.includes(item)).join('');
}