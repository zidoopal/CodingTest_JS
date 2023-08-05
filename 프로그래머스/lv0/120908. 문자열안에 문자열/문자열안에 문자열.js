function solution(str1, str2) {
const len1 = str1.length;
const len2 = str2.length;

for (let i = 0; i <= len1 - len2; i++) {
let found = true;

for (let j = 0; j < len2; j++) {
if (str1[i + j] !== str2[j]) {
found = false;
break;
}
}

if (found) {
return 1;
}
}
return 2;
}