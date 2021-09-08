
calculate = () => {
    let length = +document.getElementById("length").value;
    let width = +document.getElementById("width").value;

    let perimeter = (length + width) * 2;
    let area = length * width;
    let diagonal = Math.sqrt(length**2 + width**2);

    document.getElementById("perimeter").innerText = perimeter;
    document.getElementById("area").innerText = area;
    document.getElementById("diagonalLength").innerText = diagonal;
}
