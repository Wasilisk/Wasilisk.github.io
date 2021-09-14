const numberAndOperation = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "*", "/", "(", ")"];

let expression = "";

setKeyboard = () => {
    let keyboard = "";
    numberAndOperation.map((key,index) => {
        keyboard += `<button onclick="addValue('${key}')">${key}</button>`
    })
    document.getElementById("buttonGroup").innerHTML = keyboard;
}

addValue = (key) => {
    expression += key;
    document.getElementById("display").value += key;
}

calculate = () => {
    document.getElementById("display").value = eval(expression);
}
