
calculate = () => {
    let x = 12;
    let y = 5;
    let z = 6;
    let result = (x * y) / z;

    let expression = document.getElementById("expression")
    expression.style.display = "block";
    expression.innerText = `Значення виразу: ${result}`;
}