function isAnagram(str1, str2) {
  str1 = sortString(str1.toLowerCase());
  str2 = sortString(str2.toLowerCase());
  if (str1 === str2) {
    return true;
  }
  return false;
}

function sortString(str) {
  let charArray = str.split('')
  charArray.sort();
  let ans = charArray.join('')
  return ans;
}

console.log(isAnagram("Mansi","isnam"))