function stopDefAction(evt) {
    evt.preventDefault();
}

document.getElementById('submitButton').addEventListener(
    'click', stopDefAction, false
);

calculate = () => {
    let x, y, sum = 0.0, i = 2.0, cur = 0.0;
    x = +document.getElementById("firstNumber").value;
    y = +document.getElementById("secondNumber").value;
    do {
        let factorial = 1;
        for (let j = 1; j <= i; j++) {
            factorial *= j;
        }
        cur = ((-1) ** (i + 1)) * ((0.85 * i + ((x * y) / (1 + x ** 2))) / (factorial));
        sum += cur;
        i++;
    } while (i >= 7)

    let resultValue = document.getElementById("result");
    resultValue.innerText = `Результат виразу: ${sum}`;
    resultValue.style.display = "block";
}

