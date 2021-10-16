function homeArr(arrLength) {
  let someArr = [];
  for (let i = 0; i < arrLength; i++) {
    someArr[i] = +prompt(`Type your elements`, "");
    while (isNaN(someArr[i])) {
      someArr[i] = +prompt(`Invalid value, re-enter the number`);
    }
  }
  return someArr;
}
//////////////////////////////////////////////////////
function sortArr(someArr) {
  someArr.sort((a, b) => a - b);
  return someArr;
}

////////////////////////////////////////////////////
function showConsole(someArr) {
  console.log(someArr);
}
///////////////////////////////////////////////////
function showAlert(someArr) {
  alert(someArr);
}
////////////////////////////////////////////////////
function main() {
  let arrLength = +prompt(
    `Choose the size of your array!
    Array's size should be between 5 and 20 elements!`,
    ""
  );
  //////////////////////////////////////////////
  while (arrLength < 5 || arrLength > 20) {
    arrLength = +prompt(
      `   Wrong length of array!
        Re-enter lenght from 5 to 20`,
      ""
    );
  }
  const someArr = homeArr(arrLength);
  sortArr(someArr);
  showConsole(someArr);
  showAlert(someArr);
  return someArr;
}
main();
