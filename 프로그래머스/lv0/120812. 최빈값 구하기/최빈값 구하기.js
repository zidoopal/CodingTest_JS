function solution(arr) {
  var ans = 0;
  let a = [];
  let temp = 0;

  for (let i = 0; i < arr.length; i++) {
    if (a.includes(arr[i]) == false) {
      a.push(arr[i]);
    }
  }
  for (let i = 0; i < a.length; i++) {
    const count = arr.filter((item) => a[i] == item).length;
    if (count > temp) {
      temp = count;
      ans = a[i];
    } else if (count == temp) {
      ans = -1;
    }
  }
  return ans;
}


