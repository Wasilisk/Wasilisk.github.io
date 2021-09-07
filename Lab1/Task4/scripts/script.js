function stopDefAction(evt) {
    evt.preventDefault();
}

document.getElementById('submitButton').addEventListener(
    'click', stopDefAction, false
);

calculate = () => {
    let x = +document.getElementById("firstNumber").value;
    let y = +document.getElementById("secondNumber").value;
    let result;

    if (x !== y) {
        result = 10 * x + y;
    } else if ((y ** 2 !== 2 * x * y) || (y < 0)) {
        result = (2 * x * y) + ((4 * x) / y);
    } else {
        result = x + (y ** 2);
    }

    let resultValue = document.getElementById("result");
    resultValue.innerText = `Результат виразу: ${result}`;
    resultValue.style.display = "block";
}
