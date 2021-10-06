/*Task1*/
const reverseNumber = () => {
    let numberArray = $("#task1").val().split(" ");
    $("#result1").text(`Результат: ${numberArray.reverse().join(" ")}`);
}

/*Task2*/
const no_zeros = (numbers) => {
    return numbers.filter(val => val != 0).join(" ");
}

const deleteZeros = () => {
    let numberArray = $("#task2").val().split(" ");
    $("#result2").text(`Результат: ${no_zeros(numberArray)}`);
}

/*Task3*/
const reverser = (text) => text.split("").reverse().join("");

const reverseText = () => {
    let text = $("#task3").val();
    $("#result3").text(`Результат: ${reverser(text)}`);
}

/*Task4*/
const replace = (text) => {
    let newText = text.split(" ");
    let temp = newText[1];
    newText[1] = newText[2];
    newText[2] = temp;
    return newText.join(" ").replace(/\s/gm, ',');
}

const replaceText = () => {
    let text = $("#task4").val();
    $("#result4").text(`Результат: ${replace(text)}`);
}