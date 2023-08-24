function solution(s) {
  let str = '';
  let arr = s.split(' ');

  for (let i in arr) {
    for (let j = 0; j < arr[i].length; j++) {
      let t = arr[i][j];
      str += j % 2 === 0 ? t.toUpperCase() : t.toLowerCase();
    }
    str += ' ';
  }
  return str.slice(0, str.length - 1);
}