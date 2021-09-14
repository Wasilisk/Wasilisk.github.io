let matrix;

createMatrix = () => {
    const matrixRow = +document.getElementById("row").value;
    const matrixColumn = +document.getElementById("column").value;
    matrix = new Array(matrixColumn);
    for (let i = 0; i < matrixColumn; i++)
    {
        matrix[i] = new Array(matrixRow);
    }
    console.log(matrix)
    let matrixStr = "<table class='matrixTable'>";
    for (let i = 0; i < matrixColumn; i++) {
        matrixStr += "<tr>";
        for (let j = 0; j < matrixRow; j++) {
            matrix[i][j] = 11 * i - j;
            matrixStr += `<td>${matrix[i][j]}</td>`
        }
        matrixStr += "</tr>";
    }
    console.log(matrix)
    let matrixBlock = document.getElementById("matrixBlock");
    matrixBlock.style.display = "flex";
    matrixBlock.innerHTML = matrixStr;
}

const arrayColumn = (arr, n) => arr.map(x => x[n]);

calculate = () => {
    document.getElementById("resultBlock").style.display = "flex";
    let resultLabel = document.getElementById("resultLabel");
    let thirdColumn = arrayColumn(matrix,2);
    if(!thirdColumn) {
        alert("В матриці немає третього стовпця");
    }
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    resultLabel.innerText = `Сума елементів третього\n стовпця: ${thirdColumn.reduce(reducer)}`;
}


