function textConsole() {
    let inputValue = document.getElementById("inputText").value;
    console.log(inputValue);
    document.getElementById("inputText").value = "";
}