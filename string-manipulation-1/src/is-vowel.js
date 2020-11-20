/* exported isVowel */
function isVowel(char) {
  if ((char === "a") || (char==="A")) {
    return true
  } else if ((char==="e")||(char==="E")) {
    return true
  } else if ((char==="i")||(char==="I")) {
    return true
  } else if ((char==="o")||(char==="O")) {
    return true
  } else if ((char==="u")||(char==="U")) {
    return true
  } else {
    return false
  }
}
