
let score = 0, taskNumber = 1, firstNumber, secondNumber;

function getRandomArbitrary(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

check = () => {
    let userInput = document.getElementById("number");
    userInput.readOnly = true;
    let resultMessage = document.getElementById("resultMessage");
    if ((firstNumber * secondNumber) === +userInput.value) {
        resultMessage.innerText = "Все вірно !";
        return true;
    } else {
        resultMessage.innerText = `Невірно, правильний результат ${firstNumber * secondNumber}`;
        return false;
    }

}

nextTask = () => {
    let userInput = document.getElementById("number")
    let correct = check();
    if (correct) {
        score++;
    }
    taskNumber++;
    firstNumber = getRandomArbitrary(1, 10);
    secondNumber = getRandomArbitrary(1, 10);

    if (taskNumber === 10) {
        alert(`Молодчинка ! Твій результат ${parseInt((score/10) * 100)}`)
    location.reload();
    }

    userInput.value = "";
    userInput.readOnly = false;
    document.getElementById("resultMessage").innerText = "";
    document.getElementById("multiplyExpression").innerText = `${firstNumber} * ${secondNumber} =`;
    document.getElementById("scoreMessage").innerText = `Загальний рахунок: ${parseInt((score/10) * 100)}% (${score} правильних відповідей з 10)`;
}
