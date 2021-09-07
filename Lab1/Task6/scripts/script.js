const continents = ["Євразія", "Північна Америка", "Південна Америка", "Африка", "Австралія", "Антарктида"];
const density = [95.3, 23.3, 23.5, 41, 5, 0.000283];
const area = [53.6, 24.25, 17.8, 29.2, 7.66, 14.1]

function stopDefAction(evt) {
    evt.preventDefault();
}

document.getElementById('destinyButton').addEventListener(
    'click', stopDefAction, false
);
document.getElementById('populationButton').addEventListener(
    'click', stopDefAction, false
);

getIndex = () => {
    let continentName = document.getElementById("continentName").value;
    let index = continents.indexOf(continentName);
    if (index === -1) {
        alert("Неправильно вказана назва континенту");
    }
    return index
}

showDensityAndArea = () => {
    let index = getIndex()
    document.getElementById("densityAndArea").value = `Густина: ${density[index]} осіб/км^2, площа: ${area[index]} млн км^2`;
}

showPopulation = () => {
    let index = getIndex()
    document.getElementById("population").value = `Кількість населення: ${density[index] * area[index]} млн осіб`
}

